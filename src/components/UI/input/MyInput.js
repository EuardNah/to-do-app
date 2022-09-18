import React from "react";
import classeas from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classeas.myInput} {...props} />
  )
});

export default MyInput;