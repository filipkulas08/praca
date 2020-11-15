import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrosswordHumanComponent } from './crossword-human.component';

describe('CrosswordHumanComponent', () => {
  let component: CrosswordHumanComponent;
  let fixture: ComponentFixture<CrosswordHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrosswordHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrosswordHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
