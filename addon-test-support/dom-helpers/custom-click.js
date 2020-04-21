import { click } from '@ember/test-helpers';

export default async function customClick(selector) {
  return click(`[data-test-id="${selector}"]`);
}