import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContainerStoreComponent} from "./pages/containerStore/containerStore.component";

const routes: Routes = [
  {path: 'containerStore', component: ContainerStoreComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  //siempre se pone de último porque sino no puede evaluar las demas rutas
  //y no genere ningun problema
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
