import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileParserComponent } from './file-parser/file-parser.component';
import { NgTerminalModule } from 'ng-terminal';

@NgModule({
  declarations: [	
    AppComponent,
      FileParserComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgTerminalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
