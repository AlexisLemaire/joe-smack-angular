import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteUpdateComponent } from './recette-update.component';

describe('RecetteUpdateComponent', () => {
  let component: RecetteUpdateComponent;
  let fixture: ComponentFixture<RecetteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
