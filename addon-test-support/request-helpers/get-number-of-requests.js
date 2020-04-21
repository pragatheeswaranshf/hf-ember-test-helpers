import { getHandledRequests } from '../utils';

export default function getNumberOfRequests() {
  return getHandledRequests().length;
}