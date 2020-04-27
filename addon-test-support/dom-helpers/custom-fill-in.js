import { fillIn } from '@ember/test-helpers';
import { getCustomQueryString } from '../utils';

export default async function customFillIn(selector, value) {
  return fillIn(getCustomQueryString(selector), value);
}