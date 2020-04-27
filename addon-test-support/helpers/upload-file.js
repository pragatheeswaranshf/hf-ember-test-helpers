import customTriggerEvent from "../dom-helpers/custom-trigger-event";

export default async function uploadFile(selector, content = ['Sample Content'], options = {}) {
  const { name, type } = options;
  const file = new Blob(content, { type: type ? type : 'text/plain' });
  file.name = name ? name : 'test.txt';

  return customTriggerEvent(selector, 'change', { files: [file] });
}