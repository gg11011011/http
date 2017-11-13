import { HttServerPage } from './app.po';

describe('htt-server App', () => {
  let page: HttServerPage;

  beforeEach(() => {
    page = new HttServerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
