import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer"
import ToolTip from "../ToolTip";


afterEach(() => {
    cleanup();
})

test('should render StripQuote component', () => {
    render(<ToolTip />);
    const toolTipComponent = screen.getByTestId("tool-tip")
    
    expect(toolTipComponent).toBeInTheDocument();
});

test('should match snapshot', () => {
    const tree = renderer.create(<ToolTip />).toJSON()

    expect(tree).toMatchSnapshot()
});

export {}