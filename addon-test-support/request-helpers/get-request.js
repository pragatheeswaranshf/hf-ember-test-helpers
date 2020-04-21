import { getHandledRequests } from '../utils';

export default function getRequest(url, method) {
  const handledRequests = getHandledRequests();
  if (url) {
    let filteredRequests = handledRequests.filterBy('url', url);
    if (method)
      filteredRequests = filteredRequests.filterBy('method', method);
    return filteredRequests[filteredRequests.length - 1];
  }
  return handledRequests[handledRequests.length - 1];
}