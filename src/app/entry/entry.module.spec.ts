import { EntryModule } from './entry.module';

describe('EntryModule', () => {
  let entryModule: EntryModule;

  beforeEach(() => {
    entryModule = new EntryModule();
  });

  it('should create an instance', () => {
    expect(entryModule).toBeTruthy();
  });
});
