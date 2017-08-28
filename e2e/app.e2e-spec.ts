import { VocabularyPage } from './app.po';

describe('vocabulary App', () => {
  let page: VocabularyPage;

  beforeEach(() => {
    page = new VocabularyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
