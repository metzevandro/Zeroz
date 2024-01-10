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
    brandTarget: '_blank',
    brandUrl: 'https://github.com/metzevandro/Zeroz',
  
    //
    colorSecondary: '#945df5',
  
    // UI
    appBg: '#f6f7f9',
    appContentBg: '#f6f7f9',
    appPreviewBg: '#f6f7f9',
    appBorderRadius: 2,
  
    // Text colors
    textColor: '#585C6D',
    textInverseColor: '#f6f7f9',
  
    // Toolbar default and active colors
    barTextColor: '#585C6D',
    barSelectedColor: '#585C6D',
    barBg: '#f6f7f9',
  
    // Form colors
    inputBg: '#f6f7f9',
    inputBorder: '#585C6D',
    inputTextColor: '#585C6D',
    inputBorderRadius: 4,

    barHoverColor: '#585C6D',
    booleanBg: '#f6f7f9',
    buttonBg: '#f6f7f9',
    buttonBorder: '#585C6D',
  }),
})