import { getHandledRequests } from '../utils';

export default function getPenultimateRequest(url) {
  const handledRequests = getHandledRequests();
  if (url) {
    const filteredRequests = handledRequests.filterBy('url', url);
    return filteredRequests[filteredRequests.length - 2];
  }
  return handledRequests[handledRequests.length - 2];
}