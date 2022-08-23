

import { useState } from "react";

import { onChange } from "../helperFunctions";
import { StripQuoteParagraph, StripQuoteTextarea, StripQuoteWrapper, TooltipTarget } from "../styled";
import ToolTip from "./ToolTip";

const StripQuote = () => {
  const [value, setValue] = useState("");
  const [isStripe, setIsStripe] = useState("");

  return (
    <StripQuoteWrapper data-testid="stripe-quote">
      <ToolTip 
        tooltipText="Enter a word or sentence containg quotes into the textbox, and get the quotes striped"
        position="bottom" 
        background="00ADB5"
        styleMe={false}
        >
        <TooltipTarget><h2>Word-Quote Striper</h2></TooltipTarget>
      </ToolTip>
      <StripQuoteTextarea
        value={value}
        autoComplete="on"
        placeholder="Enter quote"
        onChange={(event) => {
        onChange(event, setValue, setIsStripe);
        }}
      />
      <StripQuoteParagraph isStripe={!!isStripe}>
        {!!isStripe ? "Striped Quote:" : "Invalid!"} {isStripe}
      </StripQuoteParagraph>
    </StripQuoteWrapper>
  );
};

export default StripQuote;