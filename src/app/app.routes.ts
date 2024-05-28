import { Routes } from '@angular/router';
import { ParteAComponent } from './components/parte-a/parte-a.component';
import { ParteBComponent } from './components/parte-b/parte-b.component';
import { ParteCComponent } from './components/parte-c/parte-c.component';
import { ParteDComponent } from './components/parte-d/parte-d.component';

export const routes: Routes = [
  { path: '', component: ParteAComponent },
  { path: 'parte-b', component: ParteBComponent },
  { path: 'parte-c', component: ParteCComponent },
  { path: 'parte-d', component: ParteDComponent },
];
