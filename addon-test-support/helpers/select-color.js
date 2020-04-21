import { click, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { customFind } from '../dom-helpers/custom-find';

export default async function selectColor(selector, value) {
  await click(customFind(`${selector} .sp-replacer`)[0]);
  let inputSelector = `[data-test-id=${selector}] .sp-input`;
  await fillIn(inputSelector, value);
  return triggerKeyEvent(inputSelector, 'keydown', 13);
}