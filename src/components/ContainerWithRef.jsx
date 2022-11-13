import React from "react";

const ContainerWithRef = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      {props.children}
    </div>
  )
});

export default ContainerWithRef;