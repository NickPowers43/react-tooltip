
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ToolTip } from '../../src/index';

function AnchorItem(props: {name: string, tipText: string}) {
  
  const [ anchorElement, setAnchorElement ] = React.useState(null);

  return (
    <div className="anchor" ref={setAnchorElement}>
      {props.name}
      <ToolTip className="tooltip" anchorElement={anchorElement} title={props.tipText} />
    </div>
  );
}

function App() {
  
  const [ showModal, setShowModal ] = React.useState(false);

  return (
    <React.Fragment>
      <button className="modal-button" onClick={e => setShowModal(!showModal)}>Toggle Modal</button>
      {showModal && 
        <div className="modal">
          Modal
        </div>
      }
      <div className="anchor-container">
        <AnchorItem name="Anchor" tipText="My Tooltip" />
      </div>
      <div className="anchor-container scrollable">
        <ul className="anchor-list">
          <AnchorItem name="A" tipText="My Tooltip" />
          <AnchorItem name="B" tipText="My Tooltip" />
          <AnchorItem name="C" tipText="My Tooltip" />
          <AnchorItem name="D" tipText="My Tooltip" />
          <AnchorItem name="E" tipText="My Tooltip" />
        </ul>
      </div>
    </React.Fragment>
  );
}

window.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(<App />, document.getElementById("app"));
});