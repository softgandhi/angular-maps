import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapIconsComponent } from './map-icons.component';

describe('MapIconsComponent', () => {
  let component: MapIconsComponent;
  let fixture: ComponentFixture<MapIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
