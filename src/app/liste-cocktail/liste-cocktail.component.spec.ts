import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCocktailComponent } from './liste-cocktail.component';

describe('ListeCocktailComponent', () => {
  let component: ListeCocktailComponent;
  let fixture: ComponentFixture<ListeCocktailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeCocktailComponent]
    });
    fixture = TestBed.createComponent(ListeCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
