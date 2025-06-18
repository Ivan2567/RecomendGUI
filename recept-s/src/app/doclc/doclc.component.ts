import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TokenDataService } from '../services/token-data.service';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-doclc',
  templateUrl: './doclc.component.html',
  styleUrls: ['./doclc.component.css']
})
export class DoclcComponent {
 
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public TService: TokenDataService,
    private router: Router) {}
    // // запрос наёбка
    // ngOnInit(): void {
    //   axios.post('http://localhost:8080/Users/CheckTocken', {token:this.TService.token}
    //   ) 
    //   .then(
    //     (res)=>{
    //       if(res.data.msg=="еееее"){}
    //           }
    //   )
    // }
    // out(): void {
    //   this.router.navigate(['login'])
    //   this.TService.token = ""; 
    // }
    ngOnInit(): void {
      axios.post('http://localhost:8080/Users/CheckTocken', {token:this.TService.token}
      ) 
      .then(
        (res)=>{
          if(res.data.msg=="Wrong token"){this.router.navigate(['login'])}
              }
      )
    }
}
