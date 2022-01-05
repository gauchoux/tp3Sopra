import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserreacComponent } from './adduserreac.component';

describe('AdduserreacComponent', () => {
  let component: AdduserreacComponent;
  let fixture: ComponentFixture<AdduserreacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserreacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserreacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
