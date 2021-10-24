import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteDeleteComponent } from './recette-delete.component';

describe('RecetteDeleteComponent', () => {
  let component: RecetteDeleteComponent;
  let fixture: ComponentFixture<RecetteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
