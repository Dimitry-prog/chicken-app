import React from "react";

const ContainerWithRef = React.forwardRef((props, ref) => {
  return (
    <ul ref={ref} {...props}>
      {props.children}
    </ul>
  )
});

export default ContainerWithRef;