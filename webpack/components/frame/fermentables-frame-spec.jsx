import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import FermentablesFrame from './fermentables-frame';
import ValidatedInputField from "../validated-input-field/validated-input-field";

configure({ adapter: new Adapter() });
describe('webpack/components/frame/fermentables-frame', () => {
	beforeEach(function () {
		this.inputField = (id) => this.wrapper.find(ValidatedInputField).find({ id });
		this.render = (props = {}) => shallow(<FermentablesFrame {...props} />);
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
