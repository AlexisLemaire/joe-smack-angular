import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteAjoutComponent } from './recette-ajout.component';

describe('RecetteAjoutComponent', () => {
  let component: RecetteAjoutComponent;
  let fixture: ComponentFixture<RecetteAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
