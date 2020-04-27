import { fillIn } from '@ember/test-helpers';

export default async function customFillIn(selector, value) {
  return fillIn(`[data-test-id="${selector}"]`, value);
}