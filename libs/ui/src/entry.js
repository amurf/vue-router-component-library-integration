// Import vue components + directives
import * as components from "@/components";

const pascalToKebab = (string) =>
  string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

// install function executed by Vue.use()
function install(app) {
  for (const componentName in components) {
    app.component(
      componentName,
      components[componentName]
    );
  }
}

// Create module definition for Vue.use()
export default { install };
