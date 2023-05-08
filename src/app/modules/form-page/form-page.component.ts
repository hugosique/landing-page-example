import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TravelService } from 'src/app/shared/services/travel.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  public formSubmited: boolean = false;

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private travelService: TravelService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      tel: [null],
      cep: [null],
      address: [{value: null, disabled: true}],
      addressComplement: [null],
      addressNumber: [null],
      city: [{value: null, disabled: true}],
      uf: [{value: null, disabled: true}],
      country: [null],
      destiny: [null, Validators.required],
      tripValue: [null],
    });
  }

  public selectPlan(event: any): void {
    if (event.target.value.length == 0) {
      this.form.get('destiny')?.setValue(null);

      return;
    }

    this.form.get('destiny')?.setValue(event.target.value);
  }

  public getCEP() {
    const CEP = this.form.get('cep')?.value;

    if (CEP.length < 8) return;

    this.travelService.getUserCEP(CEP).subscribe({
      next: (res) => {
        this.form.patchValue({
          address: res.logradouro,
          city: res.localidade,
          uf: res.uf,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  public clearForm(): void {
    this.form.reset();
  }

  public submitForm() {
    // this.formSubmited = this.form.valid;
    
    // if(!this.form.valid) {
    //   console.log('aaa')
    //   return;
    // };

    // const body = this.form.getRawValue();
  }

}
