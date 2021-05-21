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
