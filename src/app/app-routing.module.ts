import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
	{
		path: 'first-component',
		loadChildren: () => import("./first/first.module").then(m => m.FirstModule)
	},
	{
		path: 'second-component',
		component: SecondComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }