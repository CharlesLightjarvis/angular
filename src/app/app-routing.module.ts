import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';
import { MembreFormComponent } from './membre-form/membre-form.component';
import { MembreComponent } from './membre/membre.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path: 'login',pathMatch:'full',component:LoginComponent },
  {path: 'members',pathMatch:'full',component:MembreComponent },
  {path: 'dashboard',pathMatch:'full',component:DashboardComponent },
  {path: 'articles',pathMatch:'full',component:ArticleComponent },
  {path: 'events',pathMatch:'full',component:EventsComponent },
  {path: 'tools',pathMatch:'full',component:ToolsComponent },
  {path: 'edit/:id',pathMatch:'full',component:MembreFormComponent, },
  {path:'create',pathMatch:'full',component:MembreFormComponent},
  {path:'**',component:MembreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
