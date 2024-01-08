import {addons} from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    // Typography
    fontBase: '"Inter", sans-serif',
    fontCode: '"Inter", sans-serif',
  
    brandTitle: 'ZeroZ',
    brandImage: '/logo-sm.svg',
    brandTarget: '_self',
  
    //
    colorPrimary: '#945df5',
    colorSecondary: '#945df5',
  
    // UI
    appBg: '#f6f7f9',
    appContentBg: '#f6f7f9',
    appPreviewBg: '#f6f7f9',
    appBorderColor: '#945df5',
    appBorderRadius: 2,
  
    // Text colors
    textColor: '#585C6D',
    textInverseColor: '#f6f7f9',
  
    // Toolbar default and active colors
    barTextColor: '#945df5',
    barSelectedColor: '#945df5',
    barBg: '#f6f7f9',
  
    // Form colors
    inputBg: '#f6f7f9',
    inputBorder: '#585C6D',
    inputTextColor: '#585C6D',
    inputBorderRadius: 4,

    barHoverColor: '#945df5',
    booleanSelectedBg: '#945df5',
    booleanBg: '#f6f7f9',
    buttonBg: '#945df5',
    buttonBorder: '#585C6D',
  }),
})