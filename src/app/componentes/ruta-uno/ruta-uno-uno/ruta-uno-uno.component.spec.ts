import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUnoUnoComponent } from './ruta-uno-uno.component';

describe('RutaUnoUnoComponent', () => {
  let component: RutaUnoUnoComponent;
  let fixture: ComponentFixture<RutaUnoUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaUnoUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaUnoUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
