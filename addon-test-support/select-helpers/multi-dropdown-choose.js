import { Promise } from 'rsvp';
import { click } from '@ember/test-helpers';
import customClick from "../dom-helpers/custom-click";
import customFind from "../dom-helpers/custom-find";

export default async function multiDropdownChoose(selector, values) {
  await customClick(selector);
  if (values === 'select-all') {
    await customClick('form-field-entities-select-all');
  } else if (values === 'unselect-all') {
    await customClick('form-field-entities-unselect-all');
  } else {
    // Removing already selected choices
    const checkBoxes = Array.from(customFind('entity-dropdown-option-check-box'));
    const uncheckActions = [];
    for (let checkBox of checkBoxes) {
      if (checkBox.checked) {
        uncheckActions.push(click(checkBox));
      }
    }
    await Promise.all(uncheckActions);

    const clickActions = [];
    for (let value of values) {
      clickActions.push(customClick(`entity-dropdown_option_${value.dasherize()}`));
    }
    await Promise.all(clickActions);
  }
  return click(customFind('form-field-multichoice-dropdown .hf-pop-over_close-icon')[0]);
}