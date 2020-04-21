import { getHandledRequests } from '../utils';

export default function getLastButNthRequest(n = 0) {
  const handledRequests = getHandledRequests();
  return handledRequests[handledRequests.length - 1 - n];
}