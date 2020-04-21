import customFind from '../dom-helpers/custom-find';
import { openDatepicker } from 'ember-pikaday/helpers/pikaday';

export default async function selectDate(selector, date) {
  const datePicker = openDatepicker(customFind(selector));
  return datePicker.selectDate(date);
}