import { Component, OnInit } from '@angular/core';
import { ElectronAdapterService } from '../services/electron-adapter.service';

@Component({
  selector: 'app-file-parser',
  templateUrl: './file-parser.component.html',
  styleUrls: ['./file-parser.component.scss']
})
export class FileParserComponent implements OnInit {

  constructor(private electronService: ElectronAdapterService) { }

  ngOnInit() {
  }

  async handleFileInput(){
    const result = await this.electronService.remote.dialog.showOpenDialog(this.electronService.remote.getCurrentWindow(), {
      properties: ['openDirectory']
    })
    console.log(result.filePaths);
  }

}
