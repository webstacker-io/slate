import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [{
  path: 'utility', component: UtilityComponent
},
{path: '', redirectTo:'utility', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
