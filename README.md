# MiaLayoutFuse

1. Instalación:
```bash
npm install @angular/flex-layout --save
npm install perfect-scrollbar --save
npm install @swimlane/ngx-datatable --save
npm install @mobileia/notification --save
npm install @mobileia/layout-fuse --save
```
2. Instalar angular material:
```bash
ng add @angular/material
```
3. Crear archivo de configuracion (fuse-config.ts):
```ts
export const fuseConfig: FuseConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme      : 'theme-default',
    customScrollbars: true,
    layout          : {
        style    : 'vertical-layout-1',
        width    : 'fullwidth',
        navbar   : {
            primaryBackground  : 'purple-800',
            secondaryBackground: 'blue-grey-900',
            folded             : false,
            hidden             : false,
            position           : 'left',
            variant            : 'vertical-style-1',
            showUser           : false,
            title              : 'CMSA',
            iconUrl            : 'assets/images/logos/cmsa_icon.png'
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'fuse-white-500',
            hidden               : false,
            position             : 'below-static',
            userMenu : [
                {
                    id       : 'logout',
                    title    : 'Logout',
                    type     : 'item',
                    icon     : 'exit_to_app'
                },
            ],
            showAvatar: false,
            userName: 'Procesando...',
            userAvatarUrl: '',
            showNotifications: true,
            notifications: [],
            countNotifications: 0
        },
        footer   : {
            customBackgroundColor: true,
            background           : 'fuse-navy-900',
            hidden               : true,
            position             : 'below-static'
        },
        sidepanel: {
            hidden  : false,
            position: 'right'
        }
    }
};
```
4. Agregar modulo de template:
```ts
LayoutFuseModule.forRoot(fuseConfig),
```
5. Eliminar codigo innecesario de AppComponent:
```html
<router-outlet></router-outlet>

<swal #reserveSuccess title="Se ha enviado correctamente!" text="En breve nos pondremos en contacto, muchas gracias!" type="success">
</swal>
<swal #reserveError title="Se ha enviado correctamente!" text="En breve nos pondremos en contacto, muchas gracias!" type="error">
</swal>
```
6. Crear componente del sistema:
```bash
ng g component system
```
7. Crear archivo de configuración de pantalla de login: (fuse-config.ts):
```ts

import { FuseConfig, FuseLoginConfig } from '@mobileia/layout-fuse';

export const fuseLoginConfig: FuseLoginConfig = {
    imageBackground: 'assets/images/backgrounds/background_login.jpg',
    imageLogo: 'assets/images/logos/cmsa_black.png',
    title: '',
    btnColorClass: 'default',
    titleBtn: 'LOGIN',
    isRecovery: false,
    isRegister: false,
    isRemember: false,
    successRoute: '/dashboard',
    verifyRole: false,
    withRole: 0
};

```
8. Implementar pagina de login:
```js
{
    path: 'login',
    component: FuseLoginTwoPageComponent,
    data: {
      config: fuseLoginConfig
    }
  }
```
9. Crear componente System:
```ts
export class SystemComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private fuseNavigationService: FuseNavigationService,
    private fuseConfigService: FuseConfigService,
    //private paginatorService: MatPaginatorIntl
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadUser();
    this.loadUserNav();
    // Traducción del paginador
    //this.paginatorService.itemsPerPageLabel = 'Items por pagina';
  }

  loadUser() {
    this.authService.currentUser.subscribe(user => {
      if (user == null) {
        return;
      }
      // Cargar Usuario
      fuseConfig.layout.toolbar.userName = 'Hola ' + user.firstname;
      this.fuseConfigService.setConfig(fuseConfig);
      //this.loadNav(user);
    });
  }

  loadUserNav() {
    fuseConfig.layout.toolbar.userMenu = [
        {
            id       : 'logout',
            title    : 'Cerrar sesión',
            type     : 'item',
            icon     : 'exit_to_app',
            function: (() => {
              this.authService.signOut();
              setTimeout(() => {
                this.router.navigateByUrl('/').then(data => {
                  window.location.reload();
                });
              }, 2000);
            })
        },
    ];

    //this.fuseConfigService.setConfig(fuseConfig);
    this.fuseConfigService.config = fuseConfig;

    // Register the navigation to the service
    this.fuseNavigationService.register('main', fuseNavigation);
    // Set the main navigation as our current navigation
    this.fuseNavigationService.setCurrentNavigation('main');
  }
}
```
10. Agregar en styles.scss:
```scss
@import "~@mobileia/layout-fuse/scss/core"; // Modo productivo
@import "~@mobileia/layout-fuse/scss/app.theme"; // Modo productivo
```
11. Agregar en app.component.ts:
```ts
encapsulation: ViewEncapsulation.None
```
12. Agregar CSS a app.component.scss:
```scss
app-root {
    width: 100%;
}
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
