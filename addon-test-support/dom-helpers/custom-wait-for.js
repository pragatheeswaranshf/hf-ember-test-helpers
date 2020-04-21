import { waitFor } from '@ember/test-helpers'

export default async function customWaitFor(selector) {
  return waitFor(`[data-test-id="${selector}"]`);
}