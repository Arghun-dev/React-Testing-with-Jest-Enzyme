import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

export const componentWrapper = (component) => shallow(component);
export const renders = (component) => expect(component.length).toBe(1);
