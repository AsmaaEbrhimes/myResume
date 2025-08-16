import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatictsComponent } from './staticts.component';

describe('StatictsComponent', () => {
  let component: StatictsComponent;
  let fixture: ComponentFixture<StatictsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatictsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatictsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
