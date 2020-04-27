import { triggerKeyEvent } from '@ember/test-helpers';

export default async function customKeyEvent(selector, eventName, keyCode) {
  return triggerKeyEvent(`[data-test-id="${selector}"]`, eventName, keyCode);
}