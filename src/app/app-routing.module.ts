import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ResearchComponent} from './research/research.component';
import {WorkComponent} from './work/work.component';
import {InterestsComponent} from './interests/interests.component';
import {ThemesComponent} from './themes/themes.component';
import {BoardComponent} from './board/board.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {ParallelandConcurrencyComponent} from './paralleland-concurrency/paralleland-concurrency.component';
import {MessageComponent} from './message/message.component';
import {MachinelearningComponent} from './machinelearning/machinelearning.component';
import {VisualizationComponent} from './visualization/visualization.component';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminGuardGuard} from './admin-guard.guard';
import {SigninComponent} from './signin/signin.component';
import {ParamsforseqsComponent} from './paramsforseqs/paramsforseqs.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'work', component: WorkComponent},
  {path: 'params', component: ParamsforseqsComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'interests',
    children: [
      {path: 'machinelearning', component: MachinelearningComponent},
      {path: 'visualization', component: VisualizationComponent},
      {path: 'parallelandconcurrency', component: ParallelandConcurrencyComponent}
  ]},
  {path: 'themes', component: ThemesComponent},
  {path: 'board', component: BoardComponent},
  {path: 'board/:id', component: MessageComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
