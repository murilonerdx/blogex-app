import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../login-service.service";
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
interface LoginForm {
  email: FormControl,
  password: FormControl
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService, HttpClient
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  starsGroup1Styles: string = '';
  starsGroup2Styles: string = '';
  starsGroup3Styles: string = '';

  randomStars(n: number): string {
    let value = `${Math.floor(Math.random() * 5000 + 2)}px ${Math.floor(
      Math.random() * 6000 + 2
    )}px #FFF`;
    for (let i = 0; i < n; i = i + 2) {
      value += `, ${Math.floor(Math.random() * 5000 + 2)}px ${Math.floor(
        Math.random() * 6000 + 2
      )}px #FFF`;
    }
    return value;
  }

  ngOnInit() {
    this.starsGroup1Styles = this.randomStars(3000);
    this.starsGroup2Styles = this.randomStars(6000);
    this.starsGroup3Styles = this.randomStars(1000);
  }
}
