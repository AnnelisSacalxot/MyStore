import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";

//decorador
@NgModule({
  //cuando se necesite un modulo de Material lo exportamos para estar disponibles
  //en toda la aplicacion
exports:[MatToolbarModule]
})

export class MaterialModule{}
