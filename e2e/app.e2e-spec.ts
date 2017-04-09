import { AngularFirebaseNgrxLmsPage } from './app.po';

describe('angular-firebase-ngrx-lms App', () => {
  let page: AngularFirebaseNgrxLmsPage;

  beforeEach(() => {
    page = new AngularFirebaseNgrxLmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
