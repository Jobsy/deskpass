
import styled from "styled-components";

import StripQuote from "./components/StripQuote";
import ToolTip from "./components/ToolTip";
import "./App.css";


const TooltipTarget = styled.span``;

const App = (props: any) => {
  return (
    <div data-testid="app" className="app">
      <div>
        <ToolTip tooltipText="I am a left tooltip" position="left" background="00ADB5">
          <TooltipTarget>Left</TooltipTarget>
        </ToolTip>
        <ToolTip tooltipText="I am a top tooltip" position="top" background="FF8C00">
          <TooltipTarget>Top</TooltipTarget>
        </ToolTip>
        <ToolTip tooltipText="I am a bottom tooltip" position="bottom" background="03AC13">
          <TooltipTarget>Bottom</TooltipTarget>
        </ToolTip>
        <ToolTip tooltipText="I am a right tooltip" position="right" background="9897A9">
          <TooltipTarget>Right</TooltipTarget>
        </ToolTip>
      </div>

      <StripQuote />
    </div>
  );
}

export default App;