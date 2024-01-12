import {addons} from '@storybook/manager-api'
import { create } from '@storybook/theming'

addons.setConfig({
  theme: create({
    base: 'light',
    
    fontBase: '"Inter", sans-serif',
    fontCode: '"Inter", sans-serif',
  
    brandTitle: 'ZeroZ',
    brandImage: '/logo-sm.svg',
    brandTarget: '_blank',
    brandUrl: 'https://github.com/metzevandro/Zeroz',
  
    colorSecondary: '#945df5',

  }),
})