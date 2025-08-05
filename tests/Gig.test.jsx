import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Gig from "../src/components/Gig";

describe("Gig", () => {
  const gig = {
      id: 1,
      bandName: "Test band name",
      imgSrc: "",
      description: "Test description",
      timeDate: "Test time",
      location: "Test location"
  }
  test("Should render a h3 with the correct name", () => {
    render(<Gig gig={gig} />);
    expect(screen.getByText("Test band name"));
  });
  test("Should render correct description", () => {
    render(<Gig gig={gig} />);
    expect(screen.getByText("Test description"));
  });
});

describe('Favourite a Gig', () => {
  const gig = {
      id: 1,
      bandName: "Test band name",
      imgSrc: "",
      description: "Test description",
      timeDate: "Test time",
      location: "Test location"
  }
  test('Clicking favourite button should favourite the gig', async () => {
    render(<Gig gig={gig} isFavourite={false}/>);
    const heartButton = screen.getByTestId('heart-btn');
    const user = userEvent.setup();
    await user.click(heartButton);
    console.log(window.getComputedStyle(heartButton).backgroundColor)
    expect(window.getComputedStyle(heartButton).backgroundColor).toBe('rgb(255, 0, 0)');
  })
})