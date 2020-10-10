
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToolTip } from '../../src/index';

function App() {
  
  const [ anchorElement, setAnchorElement ] = React.useState(null);
  
  return (
    <div className="anchor-container">
      <div className="anchor" ref={setAnchorElement}>
        Anchor
        <ToolTip anchorElement={anchorElement} title="My Tooltip" />
      </div>
    </div>
  )
}

window.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(<App />, document.getElementById("app"));
});