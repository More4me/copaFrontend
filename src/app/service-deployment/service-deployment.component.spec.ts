import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDeploymentComponent } from './service-deployment.component';

describe('ServiceDeploymentComponent', () => {
  let component: ServiceDeploymentComponent;
  let fixture: ComponentFixture<ServiceDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDeploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
