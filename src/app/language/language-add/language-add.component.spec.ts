import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLanguageComponent } from './add-language.component';

describe('AddLanguageComponent', () => {
  let component: AddLanguageComponent;
  let fixture: ComponentFixture<AddLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});