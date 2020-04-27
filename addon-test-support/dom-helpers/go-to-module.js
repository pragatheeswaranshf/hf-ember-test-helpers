import customTriggerEvent from "./custom-trigger-event";
import customClick from "./custom-click";

export default async function goToModule(moduleName) {
  await customTriggerEvent('module-switcher_trigger', 'mouseover');
  return customClick(`module-switcher_${moduleName}`);
}