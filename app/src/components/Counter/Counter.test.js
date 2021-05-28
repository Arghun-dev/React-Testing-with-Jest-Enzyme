import Counter from './Counter';
import { testWrapper, renders } from '../../helpers/test';

const wrapper = testWrapper(<Counter />);

test('renders without error', () => {
  const counterComponent = wrapper.find("[data-test='component-counter']");
  renders(counterComponent);
});

test('renders counter display', () => {
  const counterDisplay = wrapper.find("[data-test='counter-display']");
  renders(counterDisplay);
});

test('renders increment button', () => {
  const incrementButton = wrapper.find("[data-test='increment-button']");
  renders(incrementButton);
});
