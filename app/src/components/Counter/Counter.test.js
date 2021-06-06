import { shallow } from 'enzyme';
import Counter from './Counter';
import { componentWrapper, renders } from '../../helpers/test';

const wrapper = componentWrapper(<Counter />);
const counterDisplay = wrapper.find("[data-test='counter-display']");
const counterComponent = wrapper.find("[data-test='component-counter']");
const incrementButton = wrapper.find("[data-test='increment-button']");
const counterState = wrapper.state('counter');

const setup = (props = {}, state = null) => {
  const Wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);
  return Wrapper;
};

test('renders without error', () => {
  renders(counterComponent);
});

test('renders counter display', () => {
  renders(counterDisplay);
});

test('renders increment button', () => {
  renders(incrementButton);
});

test('counter starts at 0', () => {
  expect(counterState).toBe(0);
});

test('counter increments correctly by clicking on increment button', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });
  const button = 
});
