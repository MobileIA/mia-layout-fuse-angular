import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fuseAnimations } from '../../animations';

@Component({
  selector: 'mia-fuse-login-page',
  templateUrl: './fuse-login-page.component.html',
  styleUrls: ['./fuse-login-page.component.scss'],
  animations   : fuseAnimations
})
export class FuseLoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }
}
