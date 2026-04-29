import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudent } from './list-student';

describe('ListStudent', () => {
  let component: ListStudent;
  let fixture: ComponentFixture<ListStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStudent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListStudent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
