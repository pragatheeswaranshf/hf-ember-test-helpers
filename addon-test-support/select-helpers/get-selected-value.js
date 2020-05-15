export default function getSelectedValue(jsTestClass) {
  const element = document.querySelector(`.hf-js-test-${jsTestClass} .ember-power-select-selected-item`);
  return element ? element.innerText : '';
}