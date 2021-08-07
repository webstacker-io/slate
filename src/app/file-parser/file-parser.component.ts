import { Component, OnInit } from '@angular/core';
import { ElectronAdapterService } from '../services/electron-adapter.service';

@Component({
  selector: 'app-file-parser',
  templateUrl: './file-parser.component.html',
  styleUrls: ['./file-parser.component.scss']
})
export class FileParserComponent implements OnInit {
  browseMode = true;
  

  constructor(private electronAdapterService: ElectronAdapterService) { }

  ngOnInit() {
  }

  async handleFileInput(){
    const result = await this.electronAdapterService.remote.dialog.showOpenDialog(
      this.electronAdapterService.remote.getCurrentWindow(), {
      properties: ['openDirectory']
    })
    let _filePath = result.filePaths;
    console.log(result.filePaths);
    if(result && result.canceled === false){
      this.browseMode = false;
      if(_filePath.length > 1){
        
      }else if(_filePath.length === 1){
        if(this._checkPackageFile(_filePath[0]+ 'package.json')){
          
        }
      }
    }
    
  }

  private _checkPackageFile(folderPath): boolean{
    return this.electronAdapterService.fs.existsSync(folderPath);
  }

  private _readPackageFile(folderPath){
     this.electronAdapterService.FileSystem.recurse(folderPath, [
      'package.json',
      
    ], function(filepath, relative, filename) {  
      if (filename) {
      // it's file
      } else {
      // it's folder
      }
    });
  }

  private _getChildDirectories(folderPath): Array<string>{
    return this.electronAdapterService.fs.readdirSync(folderPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
  }

  private _identifyMicrofrontend(){

  }

}
