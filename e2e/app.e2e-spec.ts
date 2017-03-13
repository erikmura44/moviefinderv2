import { Moviefinderv2Page } from './app.po';

describe('moviefinderv2 App', function() {
  let page: Moviefinderv2Page;

  beforeEach(() => {
    page = new Moviefinderv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
