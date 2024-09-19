import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtIframeComponent } from './et-iframe.component';

describe('EtIframeComponent', () => {
  let component: EtIframeComponent;
  let fixture: ComponentFixture<EtIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtIframeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
