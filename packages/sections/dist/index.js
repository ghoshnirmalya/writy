"use strict";

var react = require("@chakra-ui/react");
var React = require("react");

function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

var NavbarLayoutOne = function (_a) {
  var theme = _a.theme,
    data = _a.data;
  return React__default["default"].createElement(
    react.Box,
    {
      borderBottomWidth: 1,
      p: 4,
      bg: theme.backgroundColor,
      color: theme.linkColor,
    },
    React__default["default"].createElement(
      react.HStack,
      { spacing: 16, justifyContent: "space-between" },
      React__default["default"].createElement(
        react.Box,
        null,
        React__default["default"].createElement(react.Link, null, "Writy")
      ),
      React__default["default"].createElement(
        react.HStack,
        { spacing: 8 },
        data.links.map(function (link, index) {
          return React__default["default"].createElement(
            react.Link,
            { key: index, href: link.link },
            link.label
          );
        })
      )
    )
  );
};

var NavbarLayouts = {
  One: NavbarLayoutOne,
};

var HeroLayoutOne = function () {
  return React__default["default"].createElement(
    react.Box,
    { borderBottomWidth: 1, p: 24 },
    React__default["default"].createElement(
      react.VStack,
      { spacing: 4, align: "stretch" },
      React__default["default"].createElement(
        react.Heading,
        null,
        "Photos for everyone"
      ),
      React__default["default"].createElement(
        react.Text,
        null,
        "Over 2 million free high-resolution images brought to you by the world\u2019s most generous community of photographers."
      ),
      React__default["default"].createElement(
        react.HStack,
        { spacing: 4 },
        React__default["default"].createElement(
          react.Button,
          { colorScheme: "blue" },
          "Start browsing"
        ),
        React__default["default"].createElement(
          react.Button,
          { colorScheme: "blue", variant: "outline" },
          "Become a contributor"
        )
      )
    )
  );
};

var HeroLayouts = {
  One: HeroLayoutOne,
};

var FeaturesLayoutOne = function () {
  return React__default["default"].createElement(
    react.Box,
    { borderBottomWidth: 1, p: 24 },
    React__default["default"].createElement(
      react.VStack,
      { spacing: 24, align: "center" },
      React__default["default"].createElement(
        react.Heading,
        null,
        "Unsplash is internet\u2019s source of freely usable images."
      ),
      React__default["default"].createElement(
        react.HStack,
        { spacing: 24 },
        React__default["default"].createElement(
          react.VStack,
          { spacing: 4, align: "left" },
          React__default["default"].createElement(
            react.Text,
            { fontWeight: "bold", fontSize: "lg" },
            "Over one million curated photos"
          ),
          React__default["default"].createElement(
            react.Text,
            null,
            "We hand-select every photo and accept only the best, so that no matter what you need\u2014you\u2019ll find exactly what you\u2019re looking for on Unsplash."
          )
        ),
        React__default["default"].createElement(
          react.VStack,
          { spacing: 4, align: "left" },
          React__default["default"].createElement(
            react.Text,
            { fontWeight: "bold", fontSize: "lg" },
            "A community of 211,166 photographers"
          ),
          React__default["default"].createElement(
            react.Text,
            null,
            "Unsplash is home to a growing community of photographers\u2014from hobbyists, professionals, emerging brands and everyone in between."
          )
        ),
        React__default["default"].createElement(
          react.VStack,
          { spacing: 4, align: "left" },
          React__default["default"].createElement(
            react.Text,
            { fontWeight: "bold", fontSize: "lg" },
            "Fuelling your favourite platforms"
          ),
          React__default["default"].createElement(
            react.Text,
            null,
            "With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unsplash library is more widely accessible than ever."
          )
        )
      )
    )
  );
};

var FeaturesLayouts = {
  One: FeaturesLayoutOne,
};

var index = {
  NavbarLayouts: NavbarLayouts,
  HeroLayouts: HeroLayouts,
  FeaturesLayouts: FeaturesLayouts,
};

module.exports = index;
