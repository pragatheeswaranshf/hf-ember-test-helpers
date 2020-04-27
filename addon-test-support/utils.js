function getHandledRequests() {
  // eslint-disable-next-line no-undef
  return server.pretender.handledRequests;
}

function getStringsArrayFromHtml(html) {
  return Array.from(html).map((node) => {
    return node.innerText;
  })
}

function getCustomQueryString(selector) {
  let queryString = `[data-test-id="${selector}"]`;
  if (selector && /\s/g.test(selector)) {
    let querySelectors = selector.split(/\s+/g);
    queryString = `[data-test-id="${querySelectors.shift()}"] ${querySelectors.join(' ')}`;
  }
  return queryString;
}

export {
  getHandledRequests,
  getStringsArrayFromHtml,
  getCustomQueryString
};