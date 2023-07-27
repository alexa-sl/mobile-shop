import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  form: FormGroup;
  submitted: boolean = false;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      password: new FormControl(
        null,
        [Validators.required, Validators.minLength(6)]
      )
    })
  }

  submit() {
    if (this.form.valid) {
      this.submitted = true;
      this.auth.authStatus.next(true);
      this.router.navigate(['/admin', 'dashboard']).then();
    }
  }
}
