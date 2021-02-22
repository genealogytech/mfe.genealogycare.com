import faker from 'faker';

// let products = '';

// for (let i = 0; i < 5; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

// document.querySelector('#dev-products').innerHTML = products;

/**
 * @desc  Now it's up to the CONTAINER to decide when to
 *        show our product in the screen.
 * @param {HTML Element} el
 */
const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
  // ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitely has an element with an id of 'dev-products'
// We want to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  // Check to see if we're running products in isolation
  // from the CONTAINER
  const el = document.querySelector('#dev-products');

  // Assuming our CONTAINER doesn't have an element
  // with id 'dev-products'...
  if (el) {
    // Run products by itself
    mount(el);
  }
}

// Context/Situation #2
// WE are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT to try to immediately render the app.
export { mount };
