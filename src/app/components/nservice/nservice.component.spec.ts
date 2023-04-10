import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NserviceComponent } from './nservice.component';

describe('NserviceComponent', () => {
  let component: NserviceComponent;
  let fixture: ComponentFixture<NserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
