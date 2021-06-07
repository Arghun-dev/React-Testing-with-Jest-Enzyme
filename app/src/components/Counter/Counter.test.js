import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) wrapper.setState(state);

  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = wrapper.find("[data-test='component-counter']");
  expect(appComponent.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = wrapper.find("[data-test='increment-button']");
  expect(incrementButton.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking increment button increment counter correctly', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  // find button and click
  const incrementButton = wrapper.find("[data-test='increment-button']");
  incrementButton.simulate('click');

  // find display and test value
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  expect(counterDisplay.text()).toContain(counter + 1);
});
