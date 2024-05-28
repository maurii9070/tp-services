import { Component } from '@angular/core';
import { CriptomonedasService } from '../../services/criptomonedas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parte-d',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './parte-d.component.html',
  styleUrl: './parte-d.component.css',
})
export class ParteDComponent {
  monedas = [
    { codigo: 'USD', texto: 'Dolar Americano' },
    { codigo: 'EUR', texto: 'Euro' },
    { codigo: 'GBP', texto: 'Libra Esterlina' },
    { codigo: 'ARS', texto: 'Peso Argentino' },
  ];

  criptomonedas: any[] = [];

  error = false;

  monedaSeleccionada = '';
  criptoSeleccionada = '';

  cotizacion: any = {};

  constructor(private criptoService: CriptomonedasService) {}

  ngOnInit() {
    this.criptoService.getCriptomonedas().subscribe((data: any) => {
      this.criptomonedas = data.Data;
      console.log(this.criptomonedas);
    });
  }

  consultar(): void {
    if (this.monedaSeleccionada === '' || this.criptoSeleccionada === '') {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 2500);
      return;
    }

    this.criptoService
      .getCotizacion(this.monedaSeleccionada, this.criptoSeleccionada)
      .subscribe((data: any) => {
        this.cotizacion =
          data.DISPLAY[this.criptoSeleccionada][this.monedaSeleccionada];
      });
  }

  cotizacionVacia(): boolean {
    return Object.keys(this.cotizacion).length === 0;
  }
}
