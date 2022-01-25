import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interfaces/product.interface";

@Injectable({
  //estara disponible en toda la aplicacion el service
  providedIn: 'root'
})
export class ProductsService {
  //se prenden ambos servidores 3000 y 4200 para que funcione
  private apiURL='http://localhost:3000/products';

  constructor( private http: HttpClient) { }

  //metodo para obtener los productos desde la API, esperamos un arreglo de productos
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  }
}

