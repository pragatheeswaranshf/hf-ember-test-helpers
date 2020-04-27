import { waitFor } from '@ember/test-helpers'
import { getCustomQueryString } from '../utils';

export default async function customWaitFor(selector) {
  return waitFor(getCustomQueryString(selector));
}