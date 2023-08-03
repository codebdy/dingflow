export interface IThemeToken {
  colorBorder?: string;
  colorBorderSecondary?: string;
  colorBgContainer?: string;
  colorText?: string;
  colorTextSecondary?: string;
  colorBgBase?: string;
  colorPrimary?: string;
}

export interface IDefaultTheme{
  token?: IThemeToken
  mode?: 'dark' | 'light'
}