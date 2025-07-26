import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUnoComponent } from './ruta-uno.component';

describe('RutaUnoComponent', () => {
  let component: RutaUnoComponent;
  let fixture: ComponentFixture<RutaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutaUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RutaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
