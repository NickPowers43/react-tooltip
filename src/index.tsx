
import * as React from 'react';

export function ToolTip(props: {anchorElement: HTMLElement, title: string, className: string}) {
  
  const { anchorElement, title, ...divProps } = props;

  const [ show, setShow ] = React.useState(false);

  // Effect for binding mouse enter/leave and scroll event listeners
  React.useEffect(
    () => {
      if (!anchorElement) {
        return;
      }

      const scrollListener = e => {
        setShow(false);
      }

      const enterListener = e => {
        // Check for occluding elements
        const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
        if(anchorElement !== hoveredElement && !anchorElement.contains(hoveredElement)) {
          return;
        }
        setShow(true);
      };
      const leaveListener = e => setShow(false);

      document.addEventListener('scroll', scrollListener, true);
      anchorElement.addEventListener('mouseenter', enterListener);
      anchorElement.addEventListener('mouseleave', leaveListener);

      // clean up event listeners
      return () => {
        document.removeEventListener('scroll', scrollListener);
        anchorElement.removeEventListener('mouseenter', enterListener);
        anchorElement.removeEventListener('mouseleave', leaveListener);
      }
    },
    [anchorElement]
  );
  
  if (anchorElement && show) {
    const bounds = anchorElement.getBoundingClientRect();
    const verticalCenter = (bounds.top + bounds.bottom) / 2;
    const x = bounds.right;
    
    return (
      <div {...divProps} style={{left: x, top: verticalCenter, transform: 'translate(0, -50%)'}}>{title}</div>
    );
  }
  
  return null;
}
