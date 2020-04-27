/* eslint-disable ember/no-jquery */
/* eslint-disable ember/no-global-jquery */
export default function customFind(selector) {
  // eslint-disable-next-line no-undef
  return $(`[data-test-id="${selector}"]`);
}