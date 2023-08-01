// import original module declarations
import 'styled-components';
import { IThemeToken } from './theme';


// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    token?: IThemeToken
  }
}