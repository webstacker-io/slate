import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UtilityComponent implements OnInit {

  folderToProcess: File | null = null;

  folderArray = [];
  constructor() { }

  ngOnInit(): void {

  }

  handleFileInput(event:any) {
    // this.folderToProcess = event.target.files(0);
    // console.log(this.folderToProcess)
    //window.addEventListener('AllowFloderSelection', (res)=>console.log(res));
    window.postMessage({type:'AllowFloderSelection'},"*",this.folderArray);

  }
}
