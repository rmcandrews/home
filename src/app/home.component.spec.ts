import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HomeAppComponent } from '../app/home.component';

beforeEachProviders(() => [HomeAppComponent]);

describe('App: Home', () => {
  it('should create the app',
      inject([HomeAppComponent], (app: HomeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'home works!\'',
      inject([HomeAppComponent], (app: HomeAppComponent) => {
    expect(app.title).toEqual('home works!');
  }));
});
