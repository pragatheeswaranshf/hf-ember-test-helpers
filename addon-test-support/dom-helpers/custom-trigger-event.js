import { triggerEvent } from '@ember/test-helpers';
import { getCustomQueryString } from '../utils';

export default async function customTriggerEvent(selector, eventName) {
  return triggerEvent(getCustomQueryString(selector), eventName);
}