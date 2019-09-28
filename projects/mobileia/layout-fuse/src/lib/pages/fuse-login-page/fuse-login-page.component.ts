import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fuseAnimations } from '../../animations';
import { FuseLoginConfig } from '../../types/fuse-login-config';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@mobileia/authentication';
import { switchMap, map } from 'rxjs/operators';

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
  isLoading = true;
  loginMessageError = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.processConfig();
  }

  onSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.requestLogin(email, password);
  }

  requestLogin(email: string, password: string) {
    // Limpiar mensaje de error
    this.loginMessageError = '';
    this.authService.signInWithEmailAndPassword(email, password).toPromise().then(data => {
      if (data.success) {

        if (this.isValidRole(data.response.role)) {
          this.router.navigateByUrl(this.config.successRoute);
        } else {
          this.loginMessageError = 'Usted no tiene permisos para registrarse';
          this.authService.signOut();
        }

      } else {
        this.loginMessageError = data.error.message;
      }
    });
  }

  processConfig() {
    this.route.data
    .pipe(switchMap(params => {
      if (params.config) {
        this.config = params.config;
      }
      return this.route.queryParams;
    }))
    .pipe(switchMap(params => {
      const redirect = params.redirect;
      if (redirect !== '/login' && redirect !== '/' && redirect !== '' && redirect !== null 
      && redirect !== undefined && redirect !== '%2F' && redirect !== '/login;redirect=%2F') {
        this.config.successRoute = redirect;
      }

      return this.authService.isLoggedIn;
    }))
    .subscribe(isLogged => {
      if (isLogged) {
        this.router.navigateByUrl(this.config.successRoute);
      }
      this.isLoading = false;
    });
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email]) ],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)]) ],
    });
  }

  /**
   * Funcion que determinar si el usuario para ingresar necesita un rol especial
   */
  isValidRole(userRole: number): boolean {
    // Si no necesita verificar rol
    if (!this.config.verifyRole) {
      return true;
    }
    // Verificar si es el mismo rol
    if (this.config.withRole == userRole) {
      return true;
    }
    return false;
  }
}
