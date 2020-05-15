import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo: 'about'
  },
  {
    path: 'about', component: AboutUsComponent
  },
  {
    path: 'contact', component: ContactusComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
