import { NgxMaterialPage } from './app.po';

describe('ngx-material App', () => {
  let page: NgxMaterialPage;

  beforeEach(() => {
    page = new NgxMaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
