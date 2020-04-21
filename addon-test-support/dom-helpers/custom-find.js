export default function customFind(selector) {
  let queryString = `[data-test-id="${selector}"]`;
  if (selector && /\s/g.test(selector)) {
    let querySelectors = selector.split(/\s+/g);
    queryString = `[data-test-id="${querySelectors.shift()}"] ${querySelectors.join(' ')}`;
  }
  return document.querySelectorAll(queryString);
}