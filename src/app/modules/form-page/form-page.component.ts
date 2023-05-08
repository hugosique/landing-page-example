import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/shared/services/message.service';
import { TravelService } from 'src/app/shared/services/travel.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  public travelId = this.activatedRoute.snapshot.paramMap.get('id') || '';
  public travelPrice!: number;
  
  public form!: FormGroup;
  public formSubmited: boolean = false;

  constructor(
    private fb: FormBuilder,
    private travelService: TravelService,
    public messageService: MessageService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();

    if(this.travelId) {
      this.getTravelListById(this.travelId);

      const element = document.querySelector(`option[value=${this.form.get('destiny')?.value}]`);
      element?.setAttribute('selected', 'true');

      this.travelPrice = this.form.get('tripValue')?.value;
    };
  }

  public createForm(): void {
    this.form = this.fb.group({
      id: [null],
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

  public getTravelListById(id: any) {
    this.form.patchValue({
      ...this.travelService.getTravelById(id),
    });
  }

  public selectPlan(event: any): void {
    const value = event.target.value;

    if (value.length == 0) {
      this.form.get('destiny')?.setValue(null);
      this.form.get('tripValue')?.setValue(0);
      this.travelPrice = 0;

      return;
    };

    switch(value) {
      case "madrid":
        this.travelPrice = 120;
        break;
      case "rio":
        this.travelPrice = 80;
        break;
      case "paris":
        this.travelPrice = 200;
        break;
      case "brugge":
        this.travelPrice = 120;
        break;
      case "pequim":
        this.travelPrice = 100;
        break;
      case "wellington":
        this.travelPrice = 100;
        break;
      case "cairo":
        this.travelPrice = 70;
        break;
      case "cityOfPanama":
        this.travelPrice = 85;
        break;
      case "roma":
        this.travelPrice = 180;
        break;
      case "tokyo":
        this.travelPrice = 150;
        break;
      case "newYork":
        this.travelPrice = 200;
        break;
    };

    this.form.get('destiny')?.setValue(value);
    this.form.get('tripValue')?.setValue(this.travelPrice);
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
    this.formSubmited = this.form.valid;
    
    if(!this.form.valid) {
      this.messageService.show(
        'Preencha todos os campos corretamente!', { 
          classname: 'bg-danger text-light', 
          delay: 3000 
      });
      return;
    };

    if(this.travelId) {
      this.travelService.updateTravel(this.travelId, this.form.getRawValue());

      this.messageService.show(
        `Cadastro atualizado com sucesso.`, { 
          classname: 'bg-success text-light', 
          delay: 3000 
      });

      setTimeout(() => {
        this.clearForm();
      }, 2000);

    } else {
      this.form.get('id')?.setValue(Math.floor(Date.now() * Math.random()).toString(36));
      this.travelService.createTravel(this.form.getRawValue());

      if(JSON.parse(String(localStorage.getItem('tbTravel'))).id === this.form.get('id')?.value) {
        this.messageService.show(
          `Cadastro realizado com sucesso.`, { 
            classname: 'bg-success text-light', 
            delay: 3000 
        });
  
        setTimeout(() => {
          this.travelService.getTravelList();
  
          this.clearForm();
        }, 2000);
      };
    }


  }
}
