import { click } from '@ember/test-helpers';
import { getCustomQueryString } from '../utils';

export default async function customClick(selector) {
  return click(getCustomQueryString(selector));
}