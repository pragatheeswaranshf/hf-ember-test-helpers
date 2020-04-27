import { triggerKeyEvent } from '@ember/test-helpers';
import { getCustomQueryString } from '../utils';

export default async function customKeyEvent(selector, eventName, keyCode) {
  return triggerKeyEvent(getCustomQueryString(selector), eventName, keyCode);
}