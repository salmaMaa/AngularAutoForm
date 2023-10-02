import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngCockComponent } from './add-ing-cock.component';

describe('AddIngCockComponent', () => {
  let component: AddIngCockComponent;
  let fixture: ComponentFixture<AddIngCockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIngCockComponent]
    });
    fixture = TestBed.createComponent(AddIngCockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
