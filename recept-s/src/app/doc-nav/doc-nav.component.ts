import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TokenDataService } from '../services/token-data.service';
import { SomeDataService } from '../services/some-data.service';
import axios from 'axios';

@Component({
  selector: 'app-doc-nav',
  templateUrl: './doc-nav.component.html',
  styleUrls: ['./doc-nav.component.css']
})
export class DocNavComponent {
  /** Based on the screen size, switch from standard to one column per row */
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    public SomeService: SomeDataService,
    public TService: TokenDataService,
    private router: Router) {}
// запрос наёбка
    ngOnInit(): void {
      axios.post('http://localhost:8080/Users/CheckTocken', {token:this.TService.token}
      ) 
      .then(
        (res)=>{
            if(res.data.msg=="Wrong token"){this.router.navigate(['login'])}
              }
      )
    }
    out(): void {
      this.router.navigate(['login'])
      this.TService.token = "";
              
      
    }
}
