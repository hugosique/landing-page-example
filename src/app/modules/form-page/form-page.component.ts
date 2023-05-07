import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
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
      address: [null],
      addressNumber: [null],
      city: [null],
      uf: [null],
      country: [null],
      destiny: [null, Validators.required],
      tripValue: [null],
    });
  }

  public selectPlan(event: any): void {
    console.log(event);
  }

}
