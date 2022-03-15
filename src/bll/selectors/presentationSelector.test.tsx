import { store } from "../store";
import { getTheme } from "./presentationSelector";
import { presentationActions } from "../reducers/presentationReducer";
import { Navigation } from "../../consts/routes";

store.dispatch(presentationActions.setTheme(Navigation.AzovWar));
describe("Test presentation selector", () => {
  test("Is return theme", () => {
    expect(getTheme(store.getState())).toBe(Navigation.AzovWar);
  });
});
