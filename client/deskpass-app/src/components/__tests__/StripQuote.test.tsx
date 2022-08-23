import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"
import StripQuote from "../StripQuote";


afterEach(() => {
    cleanup();
})

test('should render StripQuote component', () => {
    render(<StripQuote />);
    const stripQuoteComponent = screen.getByTestId("stripe-quote")
    
    expect(stripQuoteComponent).toBeInTheDocument();
});

test('should match snapshot', () => {
    const tree = renderer.create(<StripQuote />).toJSON()

    expect(tree).toMatchSnapshot()
});

export {}