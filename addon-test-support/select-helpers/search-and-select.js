import { selectChoose, selectSearch } from 'ember-power-select/test-support';

export default async function searchAndSelect(selector, value) {
  await selectSearch(selector, value);
  return selectChoose(selector, value);
}