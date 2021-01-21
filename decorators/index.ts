import { withThemeProvider } from './theme';
import { withReduxProvider } from './redux';

export const storyDecorators = [withThemeProvider, withReduxProvider];
