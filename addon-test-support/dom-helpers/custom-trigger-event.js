import { triggerEvent } from '@ember/test-helpers';

export default async function customTriggerEvent(selector, eventName, options = {}) {
  return triggerEvent(`[data-test-id="${selector}"]`, eventName, options);
}