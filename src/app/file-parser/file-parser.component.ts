import { Component, OnInit } from '@angular/core';
import { ElectronAdapterService } from '../services/electron-adapter.service';

@Component({
  selector: 'app-file-parser',
  templateUrl: './file-parser.component.html',
  styleUrls: ['./file-parser.component.scss']
})
export class FileParserComponent implements OnInit {
  browseMode = true;
  path: any;
  _scriptOpitons: string [] = [];
  selectMode = false;

  constructor(private electronAdapterService: ElectronAdapterService) { }

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
        this._scriptOpitons.push(JSON.parse(this.electronAdapterService.fs.readFileSync(filepath).toString()));
      }      
    });
    this.selectMode = true;
  }

}
