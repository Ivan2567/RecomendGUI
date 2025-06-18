import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenDataService } from '../services/token-data.service';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  constructor(
    //private authService: AuthService,
    private TService: TokenDataService,
    private router: Router
  ) { }
  loginForm: any = {
    login: '',
    password: '',
  }
  ngOnInit(): void {}
  printForm(){
    console.log(this.loginForm);
    this.TService.token = this.TService.universaltoken
    this.router.navigate(['docmain/dochistory'])
}
  loginfo(event : any)
  {
      const log = event.target.value
      this.loginForm.login = log
  }
  pasinfo(event : any)
  {
      const pas = event.target.value
      this.loginForm.password = pas
  }
}
