import React, { createContext, useContext, useState } from "react";

// Create a context for Tooltip
const TooltipContext = createContext();

// TooltipProvider component
export function TooltipProvider({ children }) {
  // Example state (can expand with actual tooltip logic)
  const [tooltip, setTooltip] = useState({
    content: "",
    visible: false,
    position: { x: 0, y: 0 },
  });

  // Methods to show/hide tooltip (optional)
  const showTooltip = (content, position) => {
    setTooltip({ content, visible: true, position });
  };

  const hideTooltip = () => {
    setTooltip((prev) => ({ ...prev, visible: false }));
  };

  return (
    <TooltipContext.Provider value={{ tooltip, showTooltip, hideTooltip }}>
      {children}
      {/* You can add a Tooltip UI component here if you want */}
    </TooltipContext.Provider>
  );
}

// Custom hook to consume Tooltip context (optional)
export function useTooltip() {
  return useContext(TooltipContext);
}
