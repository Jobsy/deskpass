import { ReactNode, useRef, useState } from "react";

import {
  TooltipWrapper,
  TooltipTarget,
  CenterContainer,
  TooltipBox
} from "../styled";


const ToolTip = (
  { position, tooltipText, children, background, styleMe = true }: 
  { position?: string, tooltipText?: string, children?: ReactNode, background?: string, styleMe?: boolean }
  ) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);
  const showTooltip = isHovered || isFocused;

  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  return (
    <TooltipWrapper data-testid="tool-tip">
      <TooltipTarget
        onMouseEnter = { () => setIsHovered(true )} // show tooltip on hover
        onMouseLeave = { () => setIsHovered(false )} // hide tooltip on hover
        onFocus = { () => setIsFocused(true )} // show tooltip on focus via tab button
        onBlur = { () => setIsFocused(false )} // hide tooltip on blue via tab button
        onClick = { handleClick } // hide tooltip on by clicking anywhere on the page
        ref = { targetRef }
        styleMe = { styleMe } // stake default style when true and when no user styles is passed in
        showOnFocus = { isFocused } 
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position = { position }>
          <TooltipBox background = { background } position={ position }>
            {tooltipText}
          </TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default ToolTip;






