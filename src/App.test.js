import { it } from "vitest";
import { render } from "@testing-library/vue";

import App from "./App.vue";

it("renders the correct text", () => {
  render(App);
});
