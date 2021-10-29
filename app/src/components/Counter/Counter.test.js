import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the Counter component
 * @param {object} props - component props
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

function setup(props = {}, state = null) {
  return shallow(<Counter {...props} />);
}

/**
 * Returns ShallowWrapper find of the specific element using data-test value
 * @param {string} val - getting data-test argument as val property
 * @returns {ShallowWrapper}
 */

function findByTestAttr(val) {
  return wrapper.find(`[data-test="${val}"]`);
}

const wrapper = setup();

test('renders counter component', () => {
  const counterComponent = findByTestAttr('component-counter');
  expect(counterComponent.length).toBe(1);
});

test('renders increment button', () => {
  const incrementButton = findByTestAttr('increment-button');
  expect(incrementButton.length).toBe(1);
});

test('renders decrement button', () => {
  const decrementButton = findByTestAttr('decrement-button');
  expect(decrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const displayCounter = findByTestAttr('counter-display');
  expect(displayCounter.length).toBe(1);
});

test('counter starts at 0', () => {
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});
