import { click } from '@ember/test-helpers'
import { getStringsArrayFromHtml } from './utils';
import customFind from './dom-helpers/custom-find';

export default async function selectCompareOptions(assert, jsTestClass, values, message = 'Choices are rendered correctly.', persistOrder = false) {
  await click(`hf-js-test-${jsTestClass} .ember-power-select-trigger`);
  const choices = getStringsArrayFromHtml(document.querySelectorAll(`.hf-js-test-${jsTestClass} .ember-power-select-option`));
  if (persistOrder) {
    assert.deepEqual(choices, values, message);
  } else {
    assert.deepEqual(choices.sort(), values.sort(), message);
  }
  return click(customFind(`.hf-js-test-${jsTestClass} .hf-pop-over_close-icon`)[0]);
}