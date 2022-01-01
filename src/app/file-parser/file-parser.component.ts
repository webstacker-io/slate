import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { stderr } from 'process';
import { ElectronAdapterService } from '../services/electron-adapter.service';

@Component({
  selector: 'app-file-parser',
  templateUrl: './file-parser.component.html',
  styleUrls: ['./file-parser.component.scss']
})
export class FileParserComponent implements OnInit {
  browseMode = true;
  path: any;
  _scriptOpitons: any[] = [];
  selectMode = false;
  cmdProcess = [];
  

  constructor(private electronAdapterService: ElectronAdapterService, private cdRef : ChangeDetectorRef) { }

  ngOnInit() {
  }

  async handleFileInput(){
    const result = await this.electronAdapterService.remote.dialog.showOpenDialog(
      this.electronAdapterService.remote.getCurrentWindow(), {
      properties: ['openDirectory']
    })
    let _filePath = result.filePaths;
    if(result && result.canceled === false){
      this._parseScriptOptions(_filePath[0]);
    }
     
  }

  private _parseScriptOptions(folderPath){
    this.electronAdapterService.FileSystem.recurse(folderPath, ['**/package.json'],(filepath, relative, filename) => { 
      if(!filepath.includes('node_modules') && filepath !== undefined){
        let projectProperties = JSON.parse(this.electronAdapterService.fs.readFileSync(filepath).toString());
        this._scriptOpitons.push({folderPath, props: projectProperties, processState: 'select', isProgress: false});
        this.selectMode = true;
        this.cdRef.detectChanges();
      }      
    });
    
  }
  promiseFromChildProcess(child) {
    return new Promise(function (resolve, reject) {
        child.addListener("error", reject);
        child.addListener("exit", resolve);
    });
  }

  executeCommand(cmd, path, index, isReload=false){
    const _currentProcess = this._scriptOpitons[index];
    if (isReload) {
      _currentProcess.process.kill();
    }
    const _process = this.electronAdapterService.process.exec('npm run ' + cmd, {cwd: path});
    // _currentProcess.process = new Promise((resolve, reject) => {
    //   const _process = this.electronAdapterService.process.exec('npm run ' + cmd, {cwd: path}, (error, stdout, stderr, exit) => {
    //     if (error) {
    //       console.error(`exec error: ${error}`);
    //       reject(error);
    //       return;
    //     }
    //     let length = 0
    //     length += stdout.length;
    //     console.log(length);
    //     _currentProcess.isProgress = false;
    //     resolve(stdout);
    //     reject(stderr);
    //     this.cdRef.detectChanges();
    //   });
    //   console.log(_currentProcess);
      
      
    // }).then(() => _currentProcess.processState='refresh');
  }

}
