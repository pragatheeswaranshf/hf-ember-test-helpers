import { getCustomQueryString } from '../utils';

export default function customFind(selector) {
  return document.querySelectorAll(getCustomQueryString(selector));
}