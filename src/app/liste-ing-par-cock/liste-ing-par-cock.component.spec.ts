import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIngParCockComponent } from './liste-ing-par-cock.component';

describe('ListeIngParCockComponent', () => {
  let component: ListeIngParCockComponent;
  let fixture: ComponentFixture<ListeIngParCockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeIngParCockComponent]
    });
    fixture = TestBed.createComponent(ListeIngParCockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
