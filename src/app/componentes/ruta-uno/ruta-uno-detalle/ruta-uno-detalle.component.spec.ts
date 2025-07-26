import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUnoDetalleComponent } from './ruta-uno-detalle.component';

describe('RutaUnoDetalleComponent', () => {
  let component: RutaUnoDetalleComponent;
  let fixture: ComponentFixture<RutaUnoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaUnoDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaUnoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
