
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
        <AnchorItem name="Anchor" tipText="My ToolTip" />
      </div>
      <div className="anchor-container scrollable">
        <ul className="anchor-list">
          <AnchorItem name="A" tipText="My ToolTip A" />
          <AnchorItem name="B" tipText="My ToolTip B" />
          <AnchorItem name="C" tipText="My ToolTip C" />
          <AnchorItem name="D" tipText="My ToolTip D" />
          <AnchorItem name="E" tipText="My ToolTip E" />
        </ul>
      </div>
    </React.Fragment>
  );
}

window.addEventListener('DOMContentLoaded', (event) => {
  ReactDOM.render(<App />, document.getElementById("app"));
});