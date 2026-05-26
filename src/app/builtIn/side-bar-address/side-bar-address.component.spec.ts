import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarAddressComponent } from './side-bar-address.component';

describe('SideBarAddressComponent', () => {
  let component: SideBarAddressComponent;
  let fixture: ComponentFixture<SideBarAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
