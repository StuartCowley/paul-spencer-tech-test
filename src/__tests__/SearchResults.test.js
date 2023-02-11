import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe('Search Results', () => {
  const validProps = {
    results: [],
  }  
  const { getByText } = render(<SearchResults results={validProps.results} />);

  test("search results render correctly", () => {
    expect(screen.getByText(/results/i)).toBeInTheDocument()
  })
})