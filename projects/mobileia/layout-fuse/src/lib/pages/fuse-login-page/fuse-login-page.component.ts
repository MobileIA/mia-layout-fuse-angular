import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fuseAnimations } from '../../animations';
import { FuseLoginConfig } from '../../types/fuse-login-config';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mia-fuse-login-page',
  templateUrl: './fuse-login-page.component.html',
  styleUrls: ['./fuse-login-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class FuseLoginPageComponent implements OnInit {

  loginForm: FormGroup;
  config: FuseLoginConfig;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.processConfig();
  }

  onSubmit() {
    this.router.navigateByUrl(this.config.successRoute);
  }

  processConfig() {
    this.route.data.subscribe(params => {
      if (params.config) {
        this.config = params.config;
      }
    });
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }
}
