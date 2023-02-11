import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe('Search Box', () => {
  const { asFragment } = render(<Search />)

  it("search box renders correctly", () => {
    expect(asFragment).toMatchSnapshot()
  })
})

