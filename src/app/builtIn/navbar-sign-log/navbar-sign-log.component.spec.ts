import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSignLogComponent } from './navbar-sign-log.component';

describe('NavbarSignLogComponent', () => {
  let component: NavbarSignLogComponent;
  let fixture: ComponentFixture<NavbarSignLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarSignLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSignLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
