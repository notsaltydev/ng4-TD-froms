import { Ng4TDFormsPage } from './app.po';

describe('ng4-td-forms App', () => {
  let page: Ng4TDFormsPage;

  beforeEach(() => {
    page = new Ng4TDFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
