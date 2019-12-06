import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TemplatemasterdataService } from '../../../services/templatemasterdata.service';



@Component({
  selector: 'app-gametabletemplate',
  templateUrl: './templatelist.component.html',
  styleUrls: ['./templatelist.component.css']
})
export class TemplatelistComponent implements OnInit {



  templateForm: FormGroup;
  submit: boolean = false;
  isValidFormSubmitted = false;
  data: Object;
  templateStatuses: string;
  seatingCapacity: number;
  betTimers: number;
  gameTypes: string;
  limitTypes: string;
  gameVariant: string;
  toastrService: any;
  lowerStake: number;
  upperStake: number;
  minBuyIn: number;
  maxBuyIn: number;
  result: any;
  categoryId: any;
  gameTypeId: any;
  limitId: any;
  timerId: any;
  listFormFields: any;
  statusId: any;
  gameTableTemplateId: any;
  gameSubTypes: any;
  gameCategory: any;
  selectedSubGameTypes: any = [];
  tableTypes: any;
  tableName: any;
  limitType: any = [];

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private router: Router,
              private templateservice: TemplatemasterdataService,
              private toastr: ToastrService) { }

  calculate(searchValue: number): void {
    this.upperStake = this.lowerStake * 2;
    this.minBuyIn = this.lowerStake * 20;
    this.maxBuyIn = this.lowerStake * 100;
  }


  ngOnInit(): void {

    this.templateForm = this.formBuilder.group({
      gameTypeId: [null, Validators.required],
      gameSubTypeId: [null, Validators.required],
      // categoryId: [null, Validators.required],
      limitId: [null, Validators.required],
      lowerStake: ['', [Validators.required]],
      upperStake: ['', [Validators.required]],
      minBuyIn: ['', [Validators.required]],
      maxBuyIn: ['', [Validators.required]],
      seatCapacityId: [null, Validators.required],
      timerId: [null, Validators.required],
      tableTypeId: [''],
      // timerId: [null, Validators.required],

    });


    this.templateservice.getMetadata()
      .subscribe((respose) => {
        // Store api result in local storage
        localStorage.setItem('metaDataStorage', JSON.stringify(respose.body['responseObject']));
        this.fillFormFields(respose);
      }, (err) => {
        console.log(err);
      });

  }


  fillFormFields(result) {
    console.log(result)

    // this.templateStatuses = result.responseObject.templateStatuses;
    this.seatingCapacity = result.body.responseObject.seatingCapacities;
    this.betTimers = result.body.responseObject.betTimers;
    // this.betTimers = result.body.responseObject.betTimers;
    this.gameTypes = result.body.responseObject.gameTypes;
    this.gameCategory = result.body.responseObject.gameCategory;
    this.gameSubTypes = result.body.responseObject.gameSubTypes;
    this.limitTypes = result.body.responseObject.limitTypes;

    this.tableTypes = result.body.responseObject.tableTypes[0].tableTypeId;

  }




  Stakes(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;


  }
  Buyin(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  Bettimer(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  resetForm(form: FormGroup) {

    this.templateForm = this.formBuilder.group({
      gameTypeId: [null, Validators.required],
      categoryId: [null, Validators.required],
      limitId: [null, Validators.required],
      lowerStake: [null, Validators.required],
      upperStake: [null, Validators.required],
      minBuyIn: [null, Validators.required],
      maxBuyIn: [null, Validators.required],
      seatCapacityId: [null, Validators.required],
      timerId: [null, Validators.required],
      // timerId: [null, Validators.required],
      statusId: [null, Validators.required],
    });
  }

  template(data) {
    data.tableTypeId = this.tableTypes;

    this.submit = true;
    if (this.templateForm.invalid) {
      return;
    }
    this.result = data;


    this.isValidFormSubmitted = false;
    console.log(this.templateForm);
    if (this.templateForm.valid) {
      this.isValidFormSubmitted = true;
      console.log(this.isValidFormSubmitted);

      this.templateservice.postMetadata(data).subscribe((response) => {
        this.toastr.success('This template id created successfully');
        this.router.navigate(['/GTT']);
        this.templateForm.reset();
      },
         (error) => {
          this.submit = false;
          this.toastr.error('Template id already existing');
          this.templateForm.reset();
        });
    }
  }

  onChangeGameType(event) {
    console.log(event, this.gameCategory, this.gameSubTypes);
    const subType = this.gameCategory.filter(obj => obj.gameTypeId == event).map(obj => obj.gameSubTypeId);
    console.log(subType);
    this.selectedSubGameTypes = this.gameSubTypes.filter(obj => {
      return subType.indexOf(obj.gameSubTypeId) >= 0;
    });
  }
}
