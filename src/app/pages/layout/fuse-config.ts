import { FuseConfig } from 'projects/mobileia/layout-fuse/src/lib/types/fuse-config';
import { FuseLoginConfig } from 'projects/mobileia/layout-fuse/src/lib/types/fuse-login-config';
import { MiaNotification } from '@mobileia/notification';

export const fuseConfig: FuseConfig = {
    // Color themes can be defined in src/app/app.theme.scss
    colorTheme      : 'theme-default',
    customScrollbars: true,
    layout          : {
        style    : 'vertical-layout-1',
        width    : 'fullwidth',
        navbar   : {
            primaryBackground  : 'pink-700',
            secondaryBackground: 'blue-grey-900',
            folded             : false,
            hidden             : false,
            position           : 'left',
            variant            : 'vertical-style-1',
            showUser           : false,
            title              : 'FUSE',
            iconUrl            : 'assets/images/logos/fuse.svg'
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'fuse-white-500',
            hidden               : false,
            position             : 'below-static',
            userMenu: [],
            showAvatar: false,
            userName: 'Matias Camiletti',
            userAvatarUrl: '',
            showNotifications: true,
            notifications: [
                {
                    caption: 'Admininstración te asignó permisos para el barco [Nombre].',
                    created_at: '2019-10-10 22:00:00'
                } as MiaNotification,
                {
                    caption: 'Admininstración te asignó permisos para el barco [Nombre].',
                    created_at: '2019-10-10 22:00:00'
                } as MiaNotification
            ],
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

export const fuseLoginConfig: FuseLoginConfig = {
    imageBackground: '',
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