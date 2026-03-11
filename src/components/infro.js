function Info() {
  return React.createElement(
    "div",
    null,
    React.createElement("img", { src: "profile.webp", className: "profile-img" }),
    React.createElement("h1", null, "Paul Richard"),
    React.createElement("h3", null, "Web3 Developer"),
    React.createElement("p", null, "paulrichard.dev"),
    React.createElement(
      "div",
      { className: "buttons" },
      React.createElement("button", null, "Email"),
      React.createElement("button", null, "LinkedIn")
    )
  );
}