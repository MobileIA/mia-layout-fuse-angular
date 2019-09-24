import { FuseConfig } from 'projects/mobileia/layout-fuse/src/lib/types/fuse-config';

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
            showUser           : false
        },
        toolbar  : {
            customBackgroundColor: false,
            background           : 'fuse-white-500',
            hidden               : false,
            position             : 'below-static'
        },
        footer   : {
            customBackgroundColor: true,
            background           : 'fuse-navy-900',
            hidden               : false,
            position             : 'below-static'
        },
        sidepanel: {
            hidden  : false,
            position: 'right'
        }
    }
};
