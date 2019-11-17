import { FuseNavigationItem } from './fuse-navigation-item';
import { MiaNotification } from '@mobileia/notification';

export interface FuseConfig {
    colorTheme: string;
    customScrollbars: boolean;
    layout: {
        style: string,
        width: 'fullwidth' | 'boxed',
        navbar: {
            primaryBackground: string,
            secondaryBackground: string,
            hidden: boolean,
            folded: boolean,
            position: 'left' | 'right' | 'top',
            variant: string,
            showUser: boolean,
            title: string,
            iconUrl: string
        },
        toolbar: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed',
            userMenu: FuseNavigationItem[],
            userName: string,
            userAvatarUrl: string,
            showAvatar: boolean,
            showNotifications: boolean,
            notifications: MiaNotification[]
            countNotifications: number
        }
        footer: {
            customBackgroundColor: boolean,
            background: string,
            hidden: boolean,
            position: 'above' | 'above-static' | 'above-fixed' | 'below' | 'below-static' | 'below-fixed'
        },
        sidepanel: {
            hidden: boolean,
            position: 'left' | 'right'
        }
    };
}
