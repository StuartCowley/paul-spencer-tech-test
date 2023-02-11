import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe('App', () => {
  const { asFragment } = render(<App />)

  test("app renders correctly", () => {
    expect(asFragment).toMatchSnapshot()
  })
})
