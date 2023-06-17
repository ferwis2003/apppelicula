import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnmividaPage } from './enmivida.page';

describe('EnmividaPage', () => {
  let component: EnmividaPage;
  let fixture: ComponentFixture<EnmividaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnmividaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
