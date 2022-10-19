import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeSelectorComponent } from './lenguaje-selector.component';

describe('LenguajeSelectorComponent', () => {
  let component: LenguajeSelectorComponent;
  let fixture: ComponentFixture<LenguajeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajeSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
