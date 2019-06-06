import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import FermentablesFrame from './fermentables-frame';

configure({ adapter: new Adapter() });
describe('webpack/components/frame/fermentables-frame', () => {
	beforeEach(function () {
		this.render = (props = {}) => shallow(<FermentablesFrame {...props} />);
	});

	afterEach(function () {
		this.wrapper.unmount();
	});

	it('exists', function () {
		this.wrapper = this.render();
		expect(this.wrapper).toBeTruthy();
	});
});