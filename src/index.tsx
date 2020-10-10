
import * as React from 'react';

export function ToolTip(props) {
  
    const { anchorElement } = props;
    
    const [ show, setShow ] = React.useState(true);
    
    if (anchorElement) {
      const bounds = anchorElement.getBoundingClientRect();
      const verticalCenter = (bounds.top + bounds.bottom) / 2;
      const x = bounds.right + 5;
      
      anchorElement.addEventListener('mouseenter', e => {
        setShow(true);
      });
      
      anchorElement.addEventListener('mouseleave', e => {
        setShow(false);
      });
      
      if (!show)
        return null;
      
      return (
        <div className="tooltip" style={{left: x, top: verticalCenter + 'px'}}>Tooltip</div>
      );
    }
    
    return null;
  }
