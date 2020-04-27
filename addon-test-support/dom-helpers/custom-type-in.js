import { typeIn } from '@ember/test-helpers';

export default async function customTypeIn(selector, value) {
  return typeIn(`[data-test-id="${selector}"]`, value);
}