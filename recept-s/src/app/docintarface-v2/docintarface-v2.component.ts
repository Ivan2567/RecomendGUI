import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import { map, shareReplay, startWith } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { TokenDataService } from '../services/token-data.service';
import { LecDataService } from '../services/lec-data.sevice';
import { SomeDataService } from '../services/some-data.service';
import { Router } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import axios from 'axios';
import { SmallRec } from '../classes/SmallRec';
import { inject, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { delay } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';

import { Inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CurrencyPipe, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';

  export interface State {
    polis: string;
    name: string;
  }
  export interface Seek {
    name: string;
  }
  export interface Lec {
    id: number;
    name: string;
    sppr: string;
    edizm: string;
  }

@Component({
  selector: 'app-docintarface-v2',
  templateUrl: './docintarface-v2.component.html',
  styleUrls: ['./docintarface-v2.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class DocintarfaceV2Component implements OnInit {
  reader = new FileReader();
  filter:string = '3';
  range = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null),
  });
  startdate:String = ""
  enddate:String = ""
  PathReportString: string = "";
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  
  createdrec: SmallRec = {
    id:0,
    diagnoz:"Полиомелит",
    status: "активен",
    dateof: "2024-05-28 11:08:45.932",
    srok: 2,
    fio:this.someS.fio,
  }
  diagnoz: string = "Полиомелит";
  status: string = "активен";
  dateof: string= "2024-05-28 11:08:45.932"
  srok: number = 2
  fio: string = "Докторов Д. Д."
  id : number = 0
  k : number = 0
  qr: string = "qr"
  iddoc: number = 1
  idpac: number = 9

  vipisano:number =1
  doza:number =2
  kolvodoz:number =1
  kolvokurs:number =2
  kurs:string ="месяц"
  idrec:number =22
  idpre1:number =1
  idpre2:number =3

  idr:number =1

  stepperOrientation: Observable<StepperOrientation>;

  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;
  seekCtrl = new FormControl('');
  filteredSeeks: Observable<Seek[]>;

  lecCtrl = new FormControl('');
  filteredLecs: Observable<Lec[]>;

  selectedlec:Lec = {id: 1, name: 'Абакавир(150мг)', sppr: 'таблетка', edizm: 'таблетка'}
  selectedlec2:Lec = {id: 1, name: 'Ацикловир(150мг/мл)', sppr: 'ампула', edizm: 'ампула'}
  openflag:boolean = false
  
    private _filterStates(value: string): State[] {
      const filterValue = value.toLowerCase();
      return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }

    private _filterSeeks(value: string): Seek[] {
      const filterValue = value.toLowerCase();
      return this.seeks.filter(seek => seek.name.toLowerCase().includes(filterValue));
    }
    private _filterLecs(value: string): Lec[] {
      const filterValue = value.toLowerCase();
      return this.lecs.filter(lec => lec.name.toLowerCase().includes(filterValue));
    }

    ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      stateCtrl: ['', 
      // Validators.required
    ],
      
    });
    this.secondFormGroup = this._formBuilder.group({
      seekCtrl: ['', 
      // Validators.required
    ],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', 
      // Validators.required
    ],
    });
    }
    // ngAfterViewInit() {
    // this.selectedlec = this.filteredLecs.subscribe.({next:(event: Lec) => this.selectedlec = event});
    // }
    // openform(){
    //   this.openflag = true

    //   console.log("aa")
    // }
    async createrec(){

      axios.post('http://localhost:8080/Users/createRec', {dateof:this.createdrec.dateof, srok:this.createdrec.srok, status:this.createdrec.status, diagnoz:this.createdrec.diagnoz, qr:this.qr, iddoc:this.iddoc, idpac: this.idpac, token:this.TService.token}, {headers:{"Content-Type" : "application/json"}}
      )
      .then(
        (res)=>{console.log( res.data.ms);
          this.idr = res.data.ms
        //this.router.navigate(['login'])
       }
      )
      await new Promise(f => setTimeout(f, 200));
      axios.post('http://localhost:8080/Users/createPrepRec', {vipisano:this.vipisano, doza:this.doza, kolvodoz:this.kolvodoz, kolvokurs:this.kolvokurs, kurs:this.kurs, idrec:this.idrec, idpre:this.idpre1, token:this.TService.token}, {headers:{"Content-Type" : "application/json"}}
      )
      .then(
        (res)=>{console.log( res.data.ms);
          console.log("1")
        //this.router.navigate(['login'])
       }
      )
      await new Promise(f => setTimeout(f, 200));
      axios.post('http://localhost:8080/Users/createPrepRec', {vipisano:this.vipisano, doza:this.doza, kolvodoz:this.kolvodoz, kolvokurs:this.kolvokurs, kurs:this.kurs, idrec:this.idrec, idpre:this.idpre2, token:this.TService.token}, {headers:{"Content-Type" : "application/json"}}
      )
      .then(
        (res)=>{console.log(res.data.ms);
          console.log("2")
        //this.router.navigate(['login'])
       }
      )
      
      console.log("aa")
    }


  states: State[] = [
    {
      polis: '7777777777777777',name: 'Морозов И.В.',
    },
    {
      polis: '1111111111111111',name: 'Викторов И.В.',
    },
    {
      polis: '2222222222222222',name: 'Палкин Г.К',
    },
    {
      polis: '0000000000000000',name: 'Ложкин И.В',
    },
  ];


  seeks: Seek[] = [
    {
      name: 'ОРВИ',
    },
    {
      name: 'ОРЗ',
    },
    {
      name: 'Полиомелит',
    },
    {
      name: 'Грипп',
    },
  ];
  lecs: Lec[] = [
    {
      id: 1, name: 'Абакавир(150мг)', sppr: 'таблетка', edizm: 'таблетка',
    },
    {
      id: 2, name: 'Абакавир(50мг)', sppr: 'таблетка', edizm: 'таблетка',
    },
    {
      id: 3, name: 'Ацикловир(150мг/мл)', sppr: 'ампула', edizm: 'ампула',
    },

  ];

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder, 
    breakpointObserver: BreakpointObserver,
    public lecses:LecDataService,
    public serV: SomeDataService,
    private TService: TokenDataService,
    public someS:SomeDataService,
    private router: Router) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));

    this.filteredSeeks = this.seekCtrl.valueChanges.pipe(
        startWith(''),
        map(seek => (seek ? this._filterSeeks(seek) : this.seeks.slice())),
      );

    this.filteredStates = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(state => (state ? this._filterStates(state) : this.states.slice())),
      );

    this.filteredLecs = this.lecCtrl.valueChanges.pipe(
        startWith(''),
        map(lec => (lec ? this._filterLecs(lec) : this.lecs.slice())),
      );
      
  }
  openClientDialog(): void {
    if(this.openflag){
      const dialogRef = this.dialog.open(AddLecDialog, {
        data: this.selectedlec2,
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result != undefined)
        {
          this.someS.openpanels.push(1)
        }});
    }
    else{
      const dialogRef = this.dialog.open(AddLecDialog, {
        data: this.selectedlec
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        if (result != undefined)
        {
          this.someS.openpanels.push(1)
        }});
    }
    this.openflag = true
    }
    
}
@Component({
  selector: 'add-lec-dialog',
  templateUrl: 'add-lec-dialog.html'
})
export class AddLecDialog {
  constructor(
    public dialogRef1: MatDialogRef<AddLecDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Lec,
    public someS: SomeDataService
    
  ) {}

  onNoClick(): void {
    this.dialogRef1.close();
  }
}


