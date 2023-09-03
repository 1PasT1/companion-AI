import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonimentsComponent } from './aboniments.component';

describe('AbonimentsComponent', () => {
  let component: AbonimentsComponent;
  let fixture: ComponentFixture<AbonimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonimentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
