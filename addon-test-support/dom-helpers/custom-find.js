export default function customFind(selector) {
  return document.querySelectorAll(`[data-test-id="${selector}"]`);
}