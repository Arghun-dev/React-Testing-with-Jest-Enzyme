# React-Testing-with-Jest-Enzyme

## What does Enzyme Do?

1. Creates virtual DOM for testing
2. Allows testing without a browser

## Enzyme vs React DOM

`create-react-app` uses `React DOM` for this, Enzyme also uses `React DOM` under the hood, But Enzym has better toolkit.

## Enzyme uses Shallow Rendering Concept

1. Render components only one level deep
2. Render parent, but use placeholders for children 

## Access to props and state

Finally Enzyme provides us access to `props` and `state`

1. Manipulate values
2. Examine / test for values

## Now let's use `Enzyme` as part of a test

1. install it (because enzyme does not come with create-react-app)

`$. npm i -D enzyme jest-enzyme enzyme-adapter-react-17`


## Types of tests

1. Unit tests

  `Test one piece of code (usually one function)`
  
2. Integration test

  `How multiple units work together`
  
3. Acceptance / End-to-end (E2E) Tests

  `How a user would interact with app`
  
**Jest and Enzyme really focus on `integration` and `unit` tests for react and redux**


## Testing goals

1. Easy maintenance of tests 

.We want to test `behavior` and `not implementation` => this means **Ideally, do not want to re-write tests after a re-factor**

. Keep in mind when writing tests

. Test behavior (what the app should do)

. instead of implementation (how it works)

. Then, if implementation changes, tests remain the same


## Feature to Test (example)

1. App keeps counter of button click count
2. onClick function for button calls `incrementCounter` function
3. Counter display increments by one

**Testin behavior**

1. Set initial state
2. Simulate button click
3. Check displayed count to see that it was incremented by one

## Click Counter Test Feature

**You can access component methods from the component instance**

```js
// MyComponent.js
import React, { Component } from 'react';

class MyComponent extends Component {
  constructor() {
    super();
    this._method = this._method.bind(this);
  }
  _method() {
    return true;
  }
  render() {
    return null;
  }
}

export default MyComponent;
```

```js
// __spec__/MyComponent.spec.js
import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

const wrapper = shallow(<MyComponent />);
console.log(wrapper.instance()._method()); // true
```
