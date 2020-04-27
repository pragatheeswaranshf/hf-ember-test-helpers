export default function getSelectedValue(jsTestClass) {
  return document.querySelector(`.hf-js-test-${jsTestClass} .ember-power-select-selected-item`).innerText;
}