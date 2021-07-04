import { Injectable } from '@angular/core';
import { dialog, remote } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronAdapterService {
  dialog: typeof dialog;
  remote: typeof remote;

  constructor() { 
    this.dialog = (<any>window).require("electron").dialog;
    this.remote = (<any>window).require("electron").remote;
  }

}
