import { typeIn } from '@ember/test-helpers';
import { getCustomQueryString } from '../utils';

export default async function customTypeIn(selector, value) {
  return typeIn(getCustomQueryString(selector), value);
}