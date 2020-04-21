function getHandledRequests() {
  // eslint-disable-next-line no-undef
  return server.pretender.handledRequests;
}

export { getHandledRequests };