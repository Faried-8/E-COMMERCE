import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AddressService } from '../../services/address.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddaddressComponent implements OnInit {
  model = { firstName: '' };
  userData = { firstName: 'Mostafa' };

  countries: any;
  governorates: any;
  cities: any;
  states: any;

  testForm = new FormGroup({
    country_id: new FormControl('null', Validators.required),
    state_id: new FormControl('', Validators.required),
    city_id: new FormControl('', Validators.required),
    suburb: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    street_address: new FormControl('', Validators.required),
    building_number: new FormControl('', Validators.required),
    floor_number: new FormControl('', Validators.required),
    flat_number: new FormControl('', Validators.required),
    is_default: new FormControl(false),
  });

  stateSelect = true;
  CitySelect = true;
  profileImage: string = 'https://via.placeholder.com/100';
  editaddress: any;
  id: any;
  is_submit = false;

  constructor(
    private address: AddressService,
    private activated: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.address.getCountries().subscribe((res: any) => {
      this.countries = res.data;
    });

    this.activated.paramMap.subscribe(param => {
      this.id = param.get('id');
      if (this.id) {
        this.address.address().subscribe((res: any) => {
          this.editaddress = res.data.find((add: any) => add.id == this.id);
          if (this.editaddress) {
            this.testForm.patchValue({
              country_id: this.editaddress.country_id?.country_id,
              suburb: this.editaddress.suburb,
              phone: this.editaddress.phone,
              street_address: this.editaddress.street_address,
              building_number: this.editaddress.building_number,
              floor_number: this.editaddress.floor_number,
              flat_number: this.editaddress.flat_number,
              is_default: (this.editaddress.default_address == 1) ? true : false
            });
            this.address.getGovernorate(this.testForm.get('country_id')?.value).subscribe((res: any) => {
              this.states = res.data;
              this.testForm.patchValue({ state_id: this.editaddress.state_id?.id });
            });
            this.address.getCities(this.editaddress.state_id?.id).subscribe((res: any) => {
              this.cities = res.data;
              this.testForm.patchValue({ city_id: this.editaddress.cityInfo?.id });
            });
          }
        });
      }
    });
  }

  handleGovernate(eve: any) {
    this.stateSelect = false;
    this.address.getGovernorate(eve.id).subscribe((res: any) => {
      this.governorates = res.data;
    });
  }

  handleClear() {
    this.governorates = [];
    this.stateSelect = true;
    this.testForm.controls.state_id.patchValue('');
  }

  handleCities(eve: any) {
    this.CitySelect = false;
    this.address.getCities(eve.id).subscribe((res: any) => {
      this.cities = res.data;
    });
  }

  deleteGovernorate() {
    this.testForm.controls.state_id.reset();
    this.testForm.controls.city_id.reset();
    this.governorates = [];
    this.cities = [];
    this.stateSelect = true;
    this.CitySelect = true;
    this.testForm.controls.country_id.reset();
  }

  handleImage(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.is_submit = true;
    if (this.testForm.valid) {
      if (this.id == null) {
        this.address.addAddress(this.testForm.value).subscribe((res: any) => {
          this.snackBar.open('Address added successfully!', 'Close', {
            duration: 2000, horizontalPosition: 'center', verticalPosition: 'top',
          });
          this.route.navigateByUrl('/Address');
        });
      } else {
        this.address.updateAddress(this.testForm.value, this.id).subscribe((res: any) => {
          this.snackBar.open('Address updated successfully!', 'Close', {
            duration: 2000, horizontalPosition: 'center', verticalPosition: 'top',
          });
          this.route.navigateByUrl('/Address');
        });
      }
    }
  }
}
