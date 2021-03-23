import React from "react";

function MenuItem(props) {
  return (
    <a href={props.href} className="button btn-secondary ">
      {props.text}
    </a>
  );
}

export default MenuItem;
