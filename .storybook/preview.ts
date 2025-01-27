import type { Preview } from '@storybook/vue3'
 
import { setup } from '@storybook/vue3';
// import { registerPlugins } from '../inertia/libs/vuetify';
 
setup((app) => {
  // Registers your app's plugins into Storybook
  // registerPlugins(app);
});
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
