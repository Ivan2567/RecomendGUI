import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, startWith } from 'rxjs/operators';
import { SomeDataService } from '../services/some-data.service';
import { LecDataService } from '../services/lec-data.sevice';
import { TokenDataService } from '../services/token-data.service';
import axios from 'axios';
import { Router } from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface State {
  name: string;
  polis: string;
}
@Component({
  selector: 'app-docintarface',
  templateUrl: './docintarface.component.html',
  styleUrls: ['./docintarface.component.css']
})
export class DocintarfaceComponent {
  reader = new FileReader();
  filter:string = '3';
  
  constructor(public lecses:LecDataService,public serV: SomeDataService,
    private TService: TokenDataService,
    private router: Router) {
      this.filteredStates = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(state => (state ? this._filterStates(state) : this.states.slice())),
      );
    }
    private _filterStates(value: string): State[] {
      const filterValue = value.toLowerCase();
  
      return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }
  // message: string | undefined ;
  // receiveMessage($event: string | undefined) {
  //   this.message = $event
  //   console.log(this.message)
  // }

  stateCtrl = new FormControl('');
  filteredStates: Observable<State[]>;

  states: State[] = [
    {
      name: 'Морозов И.В.',
      polis: '7777777777777777',
    },
    {
      name: 'Викторов И.В.',
      polis: '1111111111111111',
    },
    {
      name: 'Палкин Г.К',
      polis: '2222222222222222',
    },
    {
      name: 'Ложкин И.В',
      polis: '0000000000000000',
    },
  ];

  ngOnInit(): void {
    axios.post('http://localhost:8080/Users/CheckTocken', {token:this.TService.token}
    ) 
    .then(
      (res)=>{
        if(res.data.msg=="Wrong token"){this.router.navigate(['login'])}
            }
    )
  }

  ofr(){
    this.serV.data = !this.serV.data;
    this.serV.loadcreaterecform = true;
  }
  c(){
    this.TService.polis = "7777777777777777";
    this.serV.loadmedcards = !this.serV.loadmedcards;
  }
  close(){
    this.serV.data = !this.serV.data;
    this.serV.QR = ""
    this.serV.actualrecid = 0
    this.lecses.lecss = []
    this.serV.loadcreaterecform = false;
  }
}
