import { click } from '@ember/test-helpers';
import { getStringsArrayFromHtml } from './utils';
import customClick from './dom-helpers/custom-click';
import customFind from './dom-helpers/custom-find';

export default async function multiDropdownCompareOptions(assert, selector, value, message = 'Choices are rendered correctly.') {
  await customClick(selector);
  const choices = getStringsArrayFromHtml(document.querySelectorAll('.hf-js-test-multi-choice-dropdown .ember-power-select-option'));
  assert.deepEqual(choices.sort(), value.sort(), message);
  return click(customFind('form-field-multichoice-dropdown .hf-pop-over_close-icon')[0]);
}