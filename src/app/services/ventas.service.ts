import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  ventas:any;

  private apiUrl = 'http://localhost:8107/api/detalle-venta/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getVenta(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get<any>(url);
  }


}
