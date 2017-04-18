import { SBlogPage } from './app.po';

describe('sblog App', () => {
  let page: SBlogPage;

  beforeEach(() => {
    page = new SBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
