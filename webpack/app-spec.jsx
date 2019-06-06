import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FermentablesFrame from "./features/fermentables/components/frame/fermentables-frame";
import App from './app';

configure({ adapter: new Adapter() });
describe('webpack/app', () => {
  beforeEach(function () {
    this.render = (props = {}) => shallow(<App {...props} />)
  });

  afterEach(function () {
    this.wrapper.unmount();
  });

  it('has a fermentables frame', function () {
    this.wrapper = this.render();
    expect(this.wrapper.find(FermentablesFrame).length).toEqual(1);
  });
});
