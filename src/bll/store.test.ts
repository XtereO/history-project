import { store } from "./store";

describe("Test store", () => {
  test("Has store presentation state", () => {
    expect(!!store.getState()["presentation"]).toBe(true);
  });
});
