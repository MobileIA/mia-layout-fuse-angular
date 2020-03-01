import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fuseAnimations } from '../../animations';
import { FuseLoginConfig } from '../../types/fuse-login-config';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@mobileia/authentication';
import { switchMap, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { AnimationPlayer, AnimationBuilder, style, animate } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'mia-fuse-login-two-page',
  templateUrl: './fuse-login-two-page.component.html',
  styleUrls: ['./fuse-login-two-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class FuseLoginTwoPageComponent implements OnInit {

  splashScreenEl: any;
  player: AnimationPlayer;

  loginForm: FormGroup;
  config: FuseLoginConfig;
  loginMessageError = '';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private animationBuilder: AnimationBuilder,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService
  ) {
    // Get the splash screen element
    this.splashScreenEl = this.document.body.querySelector('#fuse-splash-screen');
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
    // Verificar tipo de login
    if (this.config.isInternal) {
      this.authService.signInWithEmailAndPasswordInternal(email, password).toPromise().then(data => {
        if (data.success) {
  
          if (this.isValidRole(data.response.user.role)) {
            this.router.navigateByUrl(this.config.successRoute);
          } else {
            this.loginMessageError = 'Usted no tiene permisos para registrarse';
            this.authService.signOut();
          }
  
        } else {
          this.loginMessageError = data.error.message;
        }
      });
    } else {
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
    .pipe(switchMap(isLogged => {
      if (isLogged) {
        this.hideSplash();
        this.router.navigateByUrl(this.config.successRoute);
      }
      return this.authService.getAccessToken();
    }))
    .subscribe(accessToken => {
      if (accessToken == null || accessToken == '' || accessToken == undefined) {
        this.hideSplash();
      } else {
        this.hideSplash();
        this.router.navigateByUrl(this.config.successRoute);
      }
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

  /**
   * Show the splash screen
   */
  showSplash(): void {
    this.player =
        this.animationBuilder
            .build([
                style({
                    opacity: '0',
                    zIndex : '99999'
                }),
                animate('400ms ease', style({opacity: '1'}))
            ]).create(this.splashScreenEl);

    setTimeout(() => {
        this.player.play();
    }, 0);
  }

  /**
   * Hide the splash screen
   */
  hideSplash(): void {
      this.player =
          this.animationBuilder
              .build([
                  style({opacity: '1'}),
                  animate('400ms ease', style({
                      opacity: '0',
                      zIndex : '-10'
                  }))
              ]).create(this.splashScreenEl);

      setTimeout(() => {
          this.player.play();
      }, 0);
  }
}
