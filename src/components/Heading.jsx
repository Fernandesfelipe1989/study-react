import React from "react";

function Heading() {
  const hour = new Date().getHours();
  let greetingsMessage = "Good Morning";
  let customStyleHeading = {
    color: "red",
  };

  if (hour >= 12 && hour < 18) {
    greetingsMessage = "Good Afternoon";
    customStyleHeading.color = "green";
  } else if (hour >= 18 && hour <= 23) {
    greetingsMessage = "Good Night";
    customStyleHeading.color = "blue";
  }
  return <h1 style={customStyleHeading}>{greetingsMessage}</h1>;
}

export default Heading;
