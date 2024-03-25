import { describe, it, expect } from "vitest";

import { routes } from "@/router";
import { createRouter, createMemoryHistory } from "vue-router";
import { render, screen, fireEvent } from "@testing-library/vue";
import App from "@/App.vue";
import UI from "ui";

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

describe("Integration", () => {
  it("renders properly", async () => {
    await router.push("/");
    await router.isReady();

    render(App, {
      global: {
        plugins: [router, UI],
      },
    });

    expect(screen.getByText("About")).toBeVisible();
    fireEvent.click(screen.getByText("About"));
    expect(await screen.findByText("This is an about page")).toBeVisible();
  });
});
