
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"
import App from "./App";


afterEach(() => {
    cleanup();
})

test('should render StripQuote component', () => {
    render(<App />);
    const appComponent = screen.getByTestId("app")
    
    expect(appComponent).toBeInTheDocument();
});

test('should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON()

    expect(tree).toMatchSnapshot()
});

export {}