import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ContactosAppComponent } from './pages/contactos.app/contactos.app.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';




const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"productos", component: ProductsComponent},
  {path:"contactos", component: ContactosAppComponent},
  {path:"acerca-de", component: AcercaDeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
