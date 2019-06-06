import React from 'react';
import { shallow, configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';

import ValidatedInputField from '../validated-input-field/validated-input-field';
import FrameHeader from './frame-header';

configure({ adapter: new Adapter() });
describe('webpack/components/frame-header/frame-header', () => {
  beforeEach(function () {
    this.inputField = (id) => this.wrapper.find(ValidatedInputField).find({ id });
    this.render = (props = {}) => shallow(<FrameHeader {...props} />);
  });

  afterEach(function () {
    this.wrapper.unmount();
  });

  it('has a name', function () {
    this.wrapper = this.render();
    expect(this.inputField('brew-name').length).toEqual(1);
  });

  it('has a total gravity', function () {
    this.wrapper = this.render();
    expect(this.inputField('total-gravity').length).toEqual(1);
  });

  it('has a batch size', function () {
    this.wrapper = this.render();
    expect(this.inputField('batch-size').length).toEqual(1);
  });
});
