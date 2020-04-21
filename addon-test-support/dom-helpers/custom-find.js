const STRING_WITH_SPACE_REGEX = /\s/g;

export default function customFind(selector) {
  let queryString = `[data-test-id="${selector}"]`;
  if (STRING_WITH_SPACE_REGEX.test(selector)) {
    let querySelectors = selector.split(STRING_WITH_SPACE_REGEX);
    queryString = `[data-test-id="${querySelectors.shift()}"] ${querySelectors.join(' ')}`;
  }
  return document.querySelectorAll(queryString);
}