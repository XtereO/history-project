import { Navigation } from "../../consts/routes";
import {
  presentationReducer,
  presentationActions,
  initialState,
} from "./presentationReducer";

describe("Test presentation reducer", () => {
  test("Is theme set", () => {
    expect(
      presentationReducer(
        initialState,
        presentationActions.setTheme(Navigation.AzovWar)
      ).theme
    ).toBe(Navigation.AzovWar);
  });
});
