import { Component, OnInit } from '@angular/core';
import { AddressService } from '../../services/address.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {

  addresses: any[] = [];
  asDefault = { is_default: 0 };

  constructor(private addressService: AddressService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadAddress();
  }

  loadAddress(): void {
    this.addressService.address().subscribe(
      (res: any) => {
        this.addresses = res.data || [];
      },
      (error: any) => {
        console.error('Failed to load address data', error);
      }
    );
  }

  delete(id: any): void {
    this.addressService.deleteAddress(id).subscribe(
      (res: any) => {
        this.loadAddress();
        this.snackBar.open('Address deleted successfully!', 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      (error: any) => {
        console.error('Error deleting address', error);
        this.snackBar.open('Failed to delete address. Please try again.', 'Close', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    );
  }
}
