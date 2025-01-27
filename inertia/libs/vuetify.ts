import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import { defaultTheme } from './vuetify-theme'

export const vuetify = createVuetify({
  components,
  defaults: {
    global: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: 'auto',
    },
  },
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme,
    },
  },
})
