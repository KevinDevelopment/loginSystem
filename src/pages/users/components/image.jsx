import React from "react";

export default function ImageComponent({ image, message }) {
  return (
    <div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img width={300} alt="vegeta" src={image} style={{ marginTop: 60 }} />
        <div style={{ fontFamily: "italic", fontStyle: "italic", fontSize: 20 }}>"{message}"</div>
      </div>

    </div>
  );
}