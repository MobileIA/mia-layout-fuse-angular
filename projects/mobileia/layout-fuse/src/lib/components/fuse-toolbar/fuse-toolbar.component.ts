import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { FuseConfigService } from '../../services/fuse-config.service';
import { FuseSidebarService } from '../../services/fuse-sidebar.service';
import { takeUntil } from 'rxjs/operators';
import { FuseNavigationItem } from '../../types/fuse-navigation-item';
import { FuseNotificationService } from '../../services/fuse-notification.service';
import { MiaNotification, MiaNotificationService } from '@mobileia/notification';

@Component({
  selector: 'mia-fuse-toolbar',
  templateUrl: './fuse-toolbar.component.html',
  styleUrls: ['./fuse-toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseToolbarComponent implements OnInit, OnDestroy {
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    navigation: any;
    //selectedLanguage: any;
    userStatusOptions: any[];
    userMenuList: FuseNavigationItem[];
    isShowAvatar = true;
    userName = '';
    userAvatarUrl = '';
    isShowNotifications = false;
    notifications = [];
    countNotifications = 0;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseSidebarService: FuseSidebarService,
        private fuseNotificationService: FuseNotificationService,
        private notificationService: MiaNotificationService
        //private _translateService: TranslateService
    )
    {
        // Set the defaults
        this.userStatusOptions = [
            {
                title: 'Online',
                icon : 'icon-checkbox-marked-circle',
                color: '#4CAF50'
            },
            {
                title: 'Away',
                icon : 'icon-clock',
                color: '#FFC107'
            },
            {
                title: 'Do not Disturb',
                icon : 'icon-minus-circle',
                color: '#F44336'
            },
            {
                title: 'Invisible',
                icon : 'icon-checkbox-blank-circle-outline',
                color: '#BDBDBD'
            },
            {
                title: 'Offline',
                icon : 'icon-checkbox-blank-circle-outline',
                color: '#616161'
            }
        ];

        this.languages = [
            {
                id   : 'en',
                title: 'English',
                flag : 'us'
            },
            {
                id   : 'tr',
                title: 'Turkish',
                flag : 'tr'
            }
        ];

        //this.navigation = navigation;

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
                this.userMenuList = settings.layout.toolbar.userMenu;
                this.userAvatarUrl = settings.layout.toolbar.userAvatarUrl;
                this.userName = settings.layout.toolbar.userName;
                this.isShowAvatar = settings.layout.toolbar.showAvatar;
                this.isShowNotifications = settings.layout.toolbar.showNotifications;
                //this.notifications = settings.layout.toolbar.notifications;
                this.countNotifications = settings.layout.toolbar.countNotifications;
                this.loadNotifications();
            });

        // Set the selected language from default languages
        //this.selectedLanguage = _.find(this.languages, {id: this._translateService.currentLang});
    }

    loadNotifications() {
        if (!this.isShowNotifications) {
            return;
        }
        // Cargar
        this.notificationService.fetchLast().toPromise().then(data => {
            if (data.success) {
                this.notifications = data.response;
            }
        });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    onClickNotification(notif: MiaNotification) {
        this.fuseNotificationService.clickNotification.next(notif);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     */
    toggleSidebarOpen(key): void
    {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }

    /**
     * Search
     *
     */
    search(value): void
    {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     */
    setLanguage(lang): void
    {
        // Set the selected language for the toolbar
        //this.selectedLanguage = lang;

        // Use the selected language for translations
        //this._translateService.use(lang.id);
    }
}
