import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MOCK_PROFILE, MOCK_COUNTRIES, MOCK_ADDRESS_BOOK, getMockGovernorates, getMockCities } from './mock-data/mock-data';

// In-memory address store
let addresses: any[] = JSON.parse(localStorage.getItem('mock_addresses') || 'null') || [...MOCK_ADDRESS_BOOK.data];
let nextId = addresses.length + 2;

function saveAddresses() {
  try { localStorage.setItem('mock_addresses', JSON.stringify(addresses)); } catch(e) {}
}

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor() { }

  getUserProfile(): Observable<any> {
    return of(MOCK_PROFILE);
  }

  getCountries(): Observable<any> {
    return of(MOCK_COUNTRIES);
  }

  getGovernorate(id: any): Observable<any> {
    return of(getMockGovernorates(Number(id)));
  }

  getCities(id: any): Observable<any> {
    return of(getMockCities(Number(id)));
  }

  updateUserImage(body: any): Observable<any> {
    return of({ status: 'Success', message: 'Profile image updated' });
  }

  address(): Observable<any> {
    return of({ status: 'Success', data: addresses });
  }

  addAddress(obj: any): Observable<any> {
    const newAddr = { ...obj, id: nextId++ };
    addresses.push(newAddr);
    saveAddresses();
    return of({ status: 'Success', message: 'Address added', data: newAddr });
  }

  updateAddress(obj: any, id: any): Observable<any> {
    const idx = addresses.findIndex(a => a.id == id);
    if (idx !== -1) {
      addresses[idx] = { ...addresses[idx], ...obj };
      saveAddresses();
    }
    return of({ status: 'Success', message: 'Address updated', data: addresses[idx] });
  }

  deleteAddress(id: any): Observable<any> {
    addresses = addresses.filter(a => a.id != id);
    saveAddresses();
    return of({ status: 'Success', message: 'Address deleted' });
  }
}
