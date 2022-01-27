import {NgModule} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

//decorador
@NgModule({
  //cuando se necesite un modulo de Material lo exportamos para estar disponibles
  //en toda la aplicacion
exports:[MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule]
})

export class MaterialModule{}
