import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as td from 'testdouble';

import ValidatedInputField from './validated-input-field';

configure({ adapter: new Adapter() });
describe('webpack/components/validated-input-field/validated-input-field', () => {
  beforeEach(function () {
    this.validateInput = td.func();
    this.render = (props = {}) => shallow(<ValidatedInputField
      validateInput={this.validateInput}
      {...props}
    />);
  });

  afterEach(function () {
    this.wrapper.unmount();
  });

  it('calls validateInput on change', function () {
    this.wrapper = this.render();
    this.wrapper.simulate('change', 'foo');
    td.verify(this.validateInput('foo'));
  });
});
