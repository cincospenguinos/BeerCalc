import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as td from 'testdouble';

import ValidatedInputField from './validated-input-field';
import styles from './styles.css';

configure({ adapter: new Adapter() });
describe('webpack/components/validated-input-field/validated-input-field', () => {
  beforeEach(function () {
    this.onChange = td.func();
    this.render = (props = {}) => shallow(<ValidatedInputField
      id="hello"
      labelText={'Hello'}
      onChange={this.onChange}
      {...props}
    />);
  });

  afterEach(function () {
    this.wrapper.unmount();
  });

  it('calls onChange on change', function () {
    this.wrapper = this.render();
    this.wrapper.find('input').simulate('change', 'foo');
    td.verify(this.onChange('foo'));
  });

  it('shows an error when invalid', function () {
    this.wrapper = this.render({ isValid: false });
    expect(this.wrapper.find({ className: styles.error }).length).toEqual(1);
  });

  it('does not show an error when valid', function () {
    this.wrapper = this.render({ isValid: true });
    expect(this.wrapper.find({ className: styles.error }).length).toEqual(0);
  });

  it('displays labelText', function () {
    this.wrapper = this.render();
    expect(this.wrapper.find('label').length).toEqual(1);
  });
});
