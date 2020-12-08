import React, { useState } from 'react';
import '../App.css';

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(e) {
    // update highlight style
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      opacity: 0,
    });
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}
