function App() {
      return React.createElement(
          "div",
              { className: "card" },
                  React.createElement(Info),
                      React.createElement(About),
                          React.createElement(Interests),
                              React.createElement(Footer)
                                );
                                }
}