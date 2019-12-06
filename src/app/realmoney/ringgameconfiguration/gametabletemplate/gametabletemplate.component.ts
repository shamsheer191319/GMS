import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TemplatemasterdataService } from '../../../services/templatemasterdata.service';
import { MdbTablePaginationComponent, MdbTableDirective } from 'angular-bootstrap-md';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-gametabletemplate',
  templateUrl: './gametabletemplate.component.html',
  styleUrls: ['./gametabletemplate.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})

export class GametabletemplateComponent implements OnInit, AfterViewInit {


  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;


  listtemplates1: any = [];
  previous: any = [];
  page = 0;
  pageSize = 10;
  compare: any;
  categoryId: number;
  timerId: number;
  limitId: number;
  gameTypeId: number;
  lowerStake: number;
  upperStake: number;
  minBuyIn: number;
  getListdata: any;
  maxBuyIn: number;
  seatingCapacity: number;
  paginate: any;
  selectedId: any;
  templateForm: any;
  betTimers: any;
  gameCategory: any;
  gameTypes: any;
  gameSubTypes: any;
  limitTypes: any;
  tableTypes: any;
  templateStatuses: any;
  isValidFormSubmitted: boolean;
  result: any;
  seatingCapacities: any;
  expandContent: boolean;
  betTimerObj: any;
  limitTypesObj: any;
  gameSubTypesObj: any;
  betTimersObj: any;
  templateStatusesObj: any;
  gameTypesObj: any;
  seatingCapacitiesObj: any;
  templateSortingOrder: string = "DESC";
  minSortingOrder: string = "DESC";
  maxSortingOrder: string = "DESC";
  seatSortingOrder: string = "DESC";
  betSortingOrder: string = "DESC";
  capacity: string = "DESC";
  queryParams: any;
  getItem: any;


  constructor(private templateservice: TemplatemasterdataService, private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {

    for (let i = 0; i <= 50; i++) {
      this.listtemplates1.push({ id: i.toString(), first: 'User ' + i, last: 'Name ' + i, handle: 'Handle ' + i });

    }
    this.mdbTable.setDataSource(this.listtemplates1);
    this.listtemplates1 = this.mdbTable.getDataSource();
    this.previous = this.mdbTable.getDataSource();

    this.templateservice.getListdata()
      .subscribe((data) => {

        const metaDataStorage = JSON.parse(localStorage.getItem('metaDataStorage'));
        console.log(metaDataStorage, 'metadatstorage');

        this.betTimerObj = metaDataStorage.betTimers;
        this.gameTypesObj = metaDataStorage.gameTypes;
        this.limitTypesObj = metaDataStorage.limitTypes;
        this.gameSubTypesObj = metaDataStorage.gameSubTypes;
        this.gameCategory = metaDataStorage.gameCategory;
        this.betTimersObj = metaDataStorage.betTimers;
        this.templateStatusesObj = metaDataStorage.templateStatuses;
        this.seatingCapacitiesObj = metaDataStorage.seatingCapacities;


        this.listtemplates1 = data['body']['responseObject'];

        this.listtemplates1 = this.listtemplates1.map((obj) => {
          const gameCategory = this.gameCategory.find(o => o.categoryId == obj.categoryId);
          obj['gameSubTypeId'] = gameCategory ? gameCategory['gameSubTypeId'] : null;
          obj['gameTypeId'] = gameCategory ? gameCategory['gameTypeId'] : null;
          const typeName = this.keyValueObj(this.gameTypesObj, obj.gameTypeId, 'typeName', 'gameTypeId')
          const subTypeName = this.keyValueObj(this.gameSubTypesObj, obj.gameSubTypeId, 'typeName', 'gameSubTypeId');
          const limitName = this.keyValueObj(this.limitTypesObj, obj.limitId, 'limitName', 'limitId');
          const timerName = this.keyValueObj(this.betTimersObj, obj.timerId, 'timerName', 'timerId');
          const silentTimer = this.keyValueObj(this.betTimersObj, obj.timerId, 'silentTimer', 'timerId');
          const countDownTimer = this.keyValueObj(this.betTimersObj, obj.timerId, 'countDownTimer', 'timerId');
          const statusName = this.keyValueObj(this.templateStatusesObj, obj.statusId, 'statusName', 'statusId');
          const capacity = this.keyValueObj(this.seatingCapacitiesObj, obj.seatCapacityId, 'capacity', 'seatCapacityId');


          return { ...obj, typeName, subTypeName, limitName, timerName, statusName, silentTimer, countDownTimer, capacity };
        });
        console.log(this.listtemplates1, 'listtemplates');

      }, (err) => {
        console.log(err);
      });

    this.templateForm = this.formBuilder.group({
      gameTypeId: [null, Validators.required],
      gameSubTypeId: [null, Validators.required],
      limitId: [null, Validators.required],
      lowerStake: [null, [Validators.required]],
      upperStake: [null, [Validators.required]],
      minBuyIn: [null, [Validators.required]],
      maxBuyIn: [null, [Validators.required]],
      seatCapacityId: [null, Validators.required],
      timerId: [null, Validators.required],
      tableTypeId: [''],
      statusId: [null, Validators.required],

    });

    this.templateservice.getMetadata()
      .subscribe((respose) => {
        this.fillFormFields(respose);
      }, (err) => {
        console.log(err);
      });
  }

  fillFormFields(result) {
    console.log(result);

    this.templateStatuses = result.body.responseObject.templateStatuses;
    this.seatingCapacity = result.body.responseObject.seatingCapacities;
    this.betTimers = result.body.responseObject.betTimers;
    this.gameTypes = result.body.responseObject.gameTypes;
    this.gameCategory = result.body.responseObject.gameCategory;
    this.gameSubTypes = result.body.responseObject.gameSubTypes;
    this.limitTypes = result.body.responseObject.limitTypes;
    this.lowerStake = result.body.responseObject.lowerStake;
    this.upperStake = result.body.responseObject.upperStake;
    this.tableTypes = result.body.responseObject.tableTypes[0].tableTypeId;

  }

  getListById(id) {
    this.templateservice.getListById(id)
      .subscribe((data) => {
        console.log('data');

        console.log(data['body']['responseObject']);
        this.listtemplates1 = data['body']['responseObject'];
      }, (err) => {
        console.log(err);
      });
  }

  ngAfterViewInit() {

    this.mdbTablePagination.setMaxVisibleItemsNumberTo(10);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

  // Get value by key
  keyValueObj(inputArray, inputKey, outputValue, compareKey) {
    const result = inputArray.find(word => word[compareKey] === inputKey);
    return result ? result[outputValue] : '';

  }

  sort(key: string, order: string) {
    order === 'ASC' ? (order = 'DESC') : (order = 'ASC');
    switch (key) {
      case 'gameTableTemplateId':
        this.templateSortingOrder = order;
        break;
      case 'minBuyIn':
        this.minSortingOrder = order;
        break;
      case 'maxBuyIn':
        this.maxSortingOrder = order;
        break;
      case 'capacity':
        this.seatSortingOrder = order;
        break;
        case 'timerName':
        this.betSortingOrder = order;
        break;
    }

    this.queryParams["sortType"] = order;
    this.queryParams["sortField"] = key;

    this.page = 1;
  }

}

