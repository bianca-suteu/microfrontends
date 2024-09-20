import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedLibComponentComponent } from './shared-lib-component.component';

describe('SharedLibComponentComponent', () => {
  let component: SharedLibComponentComponent;
  let fixture: ComponentFixture<SharedLibComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedLibComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedLibComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
