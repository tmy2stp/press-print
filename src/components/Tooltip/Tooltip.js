import React from "react";

const Tooltip = ({ feature }) => {
  const { id } = feature.id;

  return (
    <div id={`tooltip-${id}`}>
      <strong>Status: </strong> {feature.properties.Status}
      <br />
      <strong>Description: </strong> {feature.properties.Description}
    </div>
  );
};

export default Tooltip;