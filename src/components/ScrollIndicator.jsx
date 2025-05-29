import { forwardRef } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = forwardRef((props, ref) => {

    return (
        <div ref={ref} id="scroll-tip">Scroll ↓</div>
    )
});

export default ScrollIndicator;
