import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TestReceptService } from '../services/test-recept.service'
import { SomeDataService } from '../services/some-data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Qr } from '../classes/Qr';
//import com.sun.org.apache.xerces.internal.impl.dv.util.Base64;
import axios from 'axios';
import { NgModel } from '@angular/forms';
import * as FileSaver from 'file-saver';
import { Router } from '@angular/router';
import { TokenDataService } from '../services/token-data.service';
import { LecDataService } from '../services/lec-data.sevice';
import { RecDataService } from '../services/rec-data.service';
import { SmallRec } from '../classes/SmallRec';
import { SmallLec } from '../classes/SmallLec';

@Component({
  selector: 'app-createrecform',
  templateUrl: './createrecform.component.html',
  styleUrls: ['./createrecform.component.css']
})
export class CreaterecformComponent {
  image : any ; 
  thumbnail: any;
 // showSpinner: boolean = true

  
  // reader = new FileReader().onload = (e) => this.image = e.target.result;

// constructor(private testS: TestReceptService,public someS:SomeDataService) {}
constructor(private testS: TestReceptService,public someS:SomeDataService
  , private sanitizer: DomSanitizer,
  private TService: TokenDataService,
  private lecService: LecDataService,
  private recService: RecDataService,
  private router: Router
  ) { }
  // @Input() childMessage?: string;
  // img: string = ""+this.childMessage
  createdrec: SmallRec = {
    id:0,
    diagnoz:"",
    status: "",
    dateof: "",
    srok: 0,
    fio:this.someS.fio,
  }
  diagnoz: string = "";
  status: string = "активен";
  dateof: string= ""
  srok: number = 0
  fio: string = "Докторов Д. Д."
  id : number = 0
  k : number = 0
  qr: string = "qr"
  iddoc: number = 1
  idpac: number = 9
  objectURL: string = ""
  // name: string = "";
  // secname: string = "";
  //desc: string = "";
  //qr: any = this.someS.QR
  //this.bytes = Qr.bytes
  ngOnInit(): void {
      axios.post('http://localhost:8080/Users/CheckTocken', {token:this.TService.token}
      ) 
      .then(
        (res)=>{
          if(res.data.msg=="Wrong token"){this.router.navigate(['login'])}
              }
      )
    this.id = this.someS.actualrecid;
  }

  create(){
    this.createdrec.diagnoz = this.diagnoz
    this.createdrec.status = this.status
    this.createdrec.srok = this.srok
    this.createdrec.dateof = this.dateof
    this.createdrec.fio = this.fio

    this.recService.arecss.push(this.createdrec)
    this.someS.data = !this.someS.data;
    console.log({dateof:this.createdrec.dateof, srok:this.createdrec.srok, status:this.createdrec.status, diagnoz:this.createdrec.diagnoz, qr:this.qr, iddoc:this.iddoc, idpac: this.idpac, token:this.TService.token});
     axios.post('http://localhost:8080/Users/createRec', {dateof:this.createdrec.diagnoz, srok:this.createdrec.srok, status:this.createdrec.status, diagnoz:this.createdrec.diagnoz, qr:this.qr, iddoc:this.iddoc, idpac: this.idpac, token:this.TService.token}, {headers:{"Content-Type" : "application/json"}}
     )
     .then(
       (res)=>{console.log( res.data.msg);
       //this.router.navigate(['login'])
      }
     )

  }  
  add(){
    // (<HTMLInputElement> document.getElementById("btn")).disabled = true
    this.someS.data = !this.someS.data;
     axios.put('http://localhost:8080/Users/changeSt', {idrec:this.someS.actualrecid}
     )
     .then(
       (res)=>{console.log( res.data.msg);
       this.router.navigate(['login'])}
     )
   }
   del(){
    // (<HTMLInputElement> document.getElementById("btn")).disabled = true
    this.someS.data = !this.someS.data;
     axios.put('http://localhost:8080/Users/changeSt', {idrec:this.someS.actualrecid}
     )
     .then(
       (res)=>{console.log( res.data.msg);
       this.router.navigate(['login'])}
     )
   }
}
