import { Component, OnInit } from '@angular/core';
import { VentasService } from './services/ventas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Venta de Recargas';
  venta: any; // Variable para almacenar los datos de la venta

  constructor(private ventasService: VentasService) {}

  ngOnInit() {
    const ventaId = 1; // ID de la venta que deseas obtener

    this.ventasService.getVenta().subscribe(
      (data) => {
        this.venta = data;
        console.log(this.venta);
      },
      (error) => {
        console.error('Error al obtener los datos de la venta:', error);
      }
    );
  }
}
