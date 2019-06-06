import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

var context = require.context('.', true, /\*-spec.(js|jsx)$/);
context.keys().forEach(context);
global.td = require('testdouble');