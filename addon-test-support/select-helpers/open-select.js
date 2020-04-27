import { click } from '@ember/test-helpers'

export default async function openSelect(selector) {
  return click(document.querySelector(`.hf-js-test-${selector} .ember-power-select-trigger`));
}