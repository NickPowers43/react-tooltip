
import * as React from 'react';

export function ToolTip(props: {anchorElement: HTMLElement, title: string}) {
  
  const { anchorElement } = props;
  
  const [ anchor, setAnchor ] = React.useState<HTMLElement>(null);
  const [ show, setShow ] = React.useState(false);

  // Effect for binding mouse enter/leave event listeners
  React.useEffect(
    () => {
      if (!anchorElement)
        return;

      const enterListener = e => setShow(true);
      const leaveListener = e => setShow(false);

      anchorElement.addEventListener('mouseenter', enterListener);
      anchorElement.addEventListener('mouseleave', leaveListener);

      // clean up event listeners
      return () => {
        anchorElement.removeEventListener('mouseenter', enterListener);
        anchorElement.removeEventListener('mouseleave', leaveListener);
      }
    },
    [anchorElement]
  );
  
  if (anchorElement) {
    const bounds = anchorElement.getBoundingClientRect();
    const verticalCenter = (bounds.top + bounds.bottom) / 2;
    const x = bounds.right + 5;
    
    if (!show)
      return null;
    
    return (
      <div className="tooltip" style={{left: x, top: verticalCenter + 'px'}}>{props.title}</div>
    );
  }
  
  return null;
}
