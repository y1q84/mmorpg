import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoTestComponent } from './proto-test.component';

describe('ProtoTestComponent', () => {
  let component: ProtoTestComponent;
  let fixture: ComponentFixture<ProtoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
