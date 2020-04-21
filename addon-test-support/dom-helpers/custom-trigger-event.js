import { triggerEvent } from '@ember/test-helpers'

export default async function customTriggerEvent(selector, eventName) {
  return triggerEvent(`[data-test-id="${selector}"]`, eventName);
}