import React from "react";

export default function Button(props)
{
  return(
    <div onClick={props.func} id={props.value} className={props.classN}>
      <h1>{props.value}</h1>
      </div>
  )
}
