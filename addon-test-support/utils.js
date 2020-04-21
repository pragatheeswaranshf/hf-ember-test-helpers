function getHandledRequests() {
  // eslint-disable-next-line no-undef
  return server.pretender.handledRequests;
}

function getStringsArrayFromHtml(html) {
  return Array.from(html).map((node) => {
    return node.innerText;
  })
}

export {
  getHandledRequests,
  getStringsArrayFromHtml
};