import { Component } from '@angular/core';
import { CarsServicesService } from '../../services/cars-services.service';

@Component({
  selector: 'app-parte-c',
  standalone: true,
  imports: [],
  templateUrl: './parte-c.component.html',
  styleUrl: './parte-c.component.css',
})
export class ParteCComponent {
  marcas: any[] = [];
  modelos: any[] = [];

  constructor(private carServices: CarsServicesService) {}

  ngOnInit() {
    this.carServices.obtenerMarcas().subscribe((data: any) => {
      this.marcas = data.data;
    });
  }

  public obtenerModelos(modelo: string) {
    this.carServices.obtenerModelos(modelo).subscribe((data: any) => {
      this.modelos = data.data;
    });
  }
}
