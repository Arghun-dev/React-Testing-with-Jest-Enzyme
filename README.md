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
