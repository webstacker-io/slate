import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileParserComponent } from './file-parser/file-parser.component';

const routes: Routes = [{
  path: 'selectFolder', component: FileParserComponent
},
{path: '', redirectTo:'selectFolder', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
