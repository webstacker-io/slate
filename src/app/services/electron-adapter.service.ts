import { Injectable } from '@angular/core';
import { dialog, remote} from 'electron';
import * as fs from 'fs';
import * as path from 'path';


@Injectable({
  providedIn: 'root'
})
export class ElectronAdapterService {
  dialog: typeof dialog;
  remote: typeof remote;
  fs: typeof fs;
  path: typeof path;
  FileSystem: any;
  process: any;
  constructor() { 
    this.dialog = (<any>window).require("electron").dialog;
    this.remote = (<any>window).require("electron").remote;
    this.fs = (<any>window).require("fs");
    this.path = (<any>window).require("path");
    this.FileSystem = (<any>window).require("file-system");
    this.process = (<any>window).require("child_process");
  }

}
