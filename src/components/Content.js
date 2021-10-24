import React from "react";

const Content = (props) => {
  return (
    <section style={{ backgroundColor: "green" }}>
      <h1>Ini adalah Content</h1>
      {props.children}
    </section>
  );
};

export default Content;