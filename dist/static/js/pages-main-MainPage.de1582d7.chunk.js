exports.ids = [2];
exports.modules = {

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(19);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(5);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/components/base/PageTemplate.tsx + 4 modules
var PageTemplate = __webpack_require__(22);

// EXTERNAL MODULE: ./src/lib/styles/responsive.ts
var responsive = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/main/MainTemplate.tsx


var _templateObject, _templateObject2, _templateObject3, _templateObject4;





var MainTemplateBlock = external_styled_components_default()(PageTemplate["a" /* default */])(_templateObject || (_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  main {\n    width: ", ";\n    margin: 0 auto;\n    margin-top: 3.5rem;\n    display: flex;\n    justify-content: space-between;\n  }\n"])), responsive["a" /* breakpoints */].xlarge);
var Left = external_styled_components_default.a.div(_templateObject2 || (_templateObject2 = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 192px;\n"])));
var Main = external_styled_components_default.a.div(_templateObject3 || (_templateObject3 = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 702px;\n"])));
var Right = external_styled_components_default.a.div(_templateObject4 || (_templateObject4 = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 240px;\n"])));

var MainTemplate_MainTemplate = function MainTemplate(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_["createElement"](MainTemplateBlock, null, /*#__PURE__*/external_react_["createElement"]("main", null, children));
};

MainTemplate_MainTemplate.Left = Left;
MainTemplate_MainTemplate.Main = Main;
MainTemplate_MainTemplate.Right = Right;
/* harmony default export */ var main_MainTemplate = (MainTemplate_MainTemplate);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(17);

// EXTERNAL MODULE: ./src/lib/styles/palette.ts
var palette = __webpack_require__(20);

// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(18);

// CONCATENATED MODULE: ./src/components/main/MainSideMenu.tsx


var MainSideMenu_templateObject, MainSideMenu_templateObject2;






var MainSideMenuBlock = external_styled_components_default.a.div(MainSideMenu_templateObject || (MainSideMenu_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  flex-direction: column;\n"])));
var MenuItem = external_styled_components_default()(external_react_router_dom_["NavLink"])(MainSideMenu_templateObject2 || (MainSideMenu_templateObject2 = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: flex;\n  color: ", ";\n  text-decoration: none;\n  height: 48px;\n  align-items: center;\n  padding-left: 1rem;\n  font-size: 1.125rem;\n  border-left: 3px solid transparent;\n  transition: 0.125s all ease-in;\n  svg {\n    margin-right: 1rem;\n    font-size: 1.5rem;\n  }\n  &.active {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";\n    font-weight: bold;\n  }\n"])), palette["a" /* default */].gray8, palette["a" /* default */].blue0, palette["a" /* default */].yellow, palette["a" /* default */].yellow);

var MainSideMenu_MainSideMenu = function MainSideMenu(props) {
  return /*#__PURE__*/external_react_["createElement"](MainSideMenuBlock, null, /*#__PURE__*/external_react_["createElement"](MenuItem, {
    to: "/trending",
    activeClassName: "active",
    isActive: function isActive(match, location) {
      return ['/', '/trending'].indexOf(location.pathname) !== -1;
    }
  }, /*#__PURE__*/external_react_["createElement"](md_["MdTrendingUp"], null), "Trending"), /*#__PURE__*/external_react_["createElement"](MenuItem, {
    to: "/recent",
    activeClassName: "active"
  }, /*#__PURE__*/external_react_["createElement"](md_["MdAccessTime"], null), "New"), /*#__PURE__*/external_react_["createElement"](MenuItem, {
    to: "/following",
    activeClassName: "active"
  }, /*#__PURE__*/external_react_["createElement"](md_["MdRssFeed"], null), "Following"));
};

/* harmony default export */ var main_MainSideMenu = (MainSideMenu_MainSideMenu);
// CONCATENATED MODULE: ./src/components/main/MainNoticeWidget.tsx


var MainNoticeWidget_templateObject;




var MainNoticeWidgetBlock = external_styled_components_default.a.div(MainNoticeWidget_templateObject || (MainNoticeWidget_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  .title-bar {\n    line-height: 1.5;\n    font-size: 0.875rem;\n    padding-bottom: 0.5rem;\n    border-bottom: 1px solid ", ";\n    margin-bottom: 1rem;\n    font-weight: bold;\n  }\n  .content {\n    .empty {\n      padding-top: 1rem;\n      padding-bottom: 1rem;\n      color: ", ";\n      text-align: center;\n      font-size: 0.875rem;\n    }\n  }\n"])), palette["a" /* default */].gray2, palette["a" /* default */].gray5);

var MainNoticeWidget_MainNoticeWidget = function MainNoticeWidget(props) {
  return /*#__PURE__*/external_react_["createElement"](MainNoticeWidgetBlock, null, /*#__PURE__*/external_react_["createElement"]("div", {
    className: "title-bar"
  }, "Notice"), /*#__PURE__*/external_react_["createElement"]("div", {
    className: "content"
  }, /*#__PURE__*/external_react_["createElement"]("div", {
    className: "empty"
  }, "There are no announcements.")));
};

/* harmony default export */ var main_MainNoticeWidget = (MainNoticeWidget_MainNoticeWidget);
// CONCATENATED MODULE: ./src/components/main/MainRightFooter.tsx


var MainRightFooter_templateObject;

/* eslint-disable jsx-a11y/anchor-is-valid */



var MainRightFooterBlock = external_styled_components_default.a.div(MainRightFooter_templateObject || (MainRightFooter_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin-top: 6.25rem;\n  line-height: 1.5;\n  font-size: 0.875rem;\n  .links {\n    color: ", ";\n    a {\n      color: inherit;\n      text-decoration: none;\n    }\n    a + a:before {\n      content: ' \xB7 ';\n    }\n  }\n  .copyright {\n    color: ", ";\n  }\n"])), palette["a" /* default */].gray6, palette["a" /* default */].gray5);

var MainRightFooter_MainRightFooter = function MainRightFooter(props) {
  return /*#__PURE__*/external_react_["createElement"](MainRightFooterBlock, null, /*#__PURE__*/external_react_["createElement"]("div", {
    className: "links"
  }, /*#__PURE__*/external_react_["createElement"]("a", null, "Introduce"), /*#__PURE__*/external_react_["createElement"]("a", null, "Service policy"), /*#__PURE__*/external_react_["createElement"]("a", null, "FAQ")), /*#__PURE__*/external_react_["createElement"]("div", {
    className: "copyright"
  }, "\xA9 2021 \xB7 Codeway LLC"));
};

/* harmony default export */ var main_MainRightFooter = (MainRightFooter_MainRightFooter);
// CONCATENATED MODULE: ./src/pages/main/MainPage.tsx






var MainPage_MainPage = function MainPage(props) {
  return /*#__PURE__*/external_react_["createElement"](main_MainTemplate, null, /*#__PURE__*/external_react_["createElement"](main_MainTemplate.Left, null, /*#__PURE__*/external_react_["createElement"](main_MainSideMenu, null)), /*#__PURE__*/external_react_["createElement"](main_MainTemplate.Main, null, "Main"), /*#__PURE__*/external_react_["createElement"](main_MainTemplate.Right, null, /*#__PURE__*/external_react_["createElement"](main_MainNoticeWidget, null), /*#__PURE__*/external_react_["createElement"](main_MainRightFooter, null)));
};

/* harmony default export */ var main_MainPage = __webpack_exports__["default"] = (MainPage_MainPage);

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var palette = {
  /* main */
  blue0: '#282846',
  blue1: '#007580',
  yellow: '#fed049',
  skywhite: '#d8ebe4',

  /* gray */
  gray0: '#F8F9FA',
  gray1: '#F1F3F5',
  gray2: '#E9ECEF',
  gray3: '#DEE2E6',
  gray4: '#CED4DA',
  gray5: '#ADB5BD',
  gray6: '#868E96',
  gray7: '#495057',
  gray8: '#343A40',
  gray9: '#212529'
};
/* harmony default export */ __webpack_exports__["a"] = (palette);

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breakpoints; });
var breakpoints = {
  xlarge: '1200px',
  large: '1024px',
  medium: '768px',
  small: '576px'
};

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__(19);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(5);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./node_modules/@svgr/webpack/lib?-svgo!./src/static/svg/logo.svg
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/external_react_["createElement"]("svg", _extends({
    viewBox: "125.828 134.141 146.063 37.156",
    width: 146.063,
    height: 37.156,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/external_react_["createElement"]("path", {
    d: "M 134.091 163.525 L 126.941 163.525 L 126.941 161.805 L 129.171 161.415 L 129.171 145.735 L 126.941 145.355 L 126.941 143.615 L 134.091 143.615 L 134.091 145.355 L 131.861 145.735 L 131.861 152.615 L 141.371 152.615 L 141.371 145.735 L 139.151 145.355 L 139.151 143.615 L 141.371 143.615 L 144.071 143.615 L 146.301 143.615 L 146.301 145.355 L 144.071 145.735 L 144.071 161.415 L 146.301 161.805 L 146.301 163.525 L 139.151 163.525 L 139.151 161.805 L 141.371 161.415 L 141.371 154.735 L 131.861 154.735 L 131.861 161.415 L 134.091 161.805 L 134.091 163.525 ZM 153.19 163.815 C 151.65 163.815 150.477 163.438 149.67 162.685 C 148.87 161.932 148.47 160.872 148.47 159.505 C 148.47 158.565 148.727 157.748 149.24 157.055 C 149.76 156.355 150.507 155.812 151.48 155.425 C 152.453 155.038 153.62 154.845 154.98 154.845 L 157.62 154.845 L 157.62 153.395 C 157.62 152.502 157.347 151.808 156.8 151.315 C 156.26 150.822 155.497 150.575 154.51 150.575 C 153.89 150.575 153.353 150.652 152.9 150.805 C 152.447 150.952 152.033 151.158 151.66 151.425 L 151.37 153.485 L 149.29 153.485 L 149.29 150.095 C 149.957 149.562 150.73 149.155 151.61 148.875 C 152.497 148.595 153.477 148.455 154.55 148.455 C 156.35 148.455 157.76 148.885 158.78 149.745 C 159.8 150.598 160.31 151.825 160.31 153.425 L 160.31 160.545 C 160.31 160.738 160.313 160.925 160.32 161.105 C 160.32 161.285 160.33 161.468 160.35 161.655 L 161.79 161.805 L 161.79 163.525 L 157.92 163.525 C 157.833 163.125 157.77 162.765 157.73 162.445 C 157.683 162.125 157.65 161.805 157.63 161.485 C 157.11 162.152 156.46 162.705 155.68 163.145 C 154.9 163.592 154.07 163.815 153.19 163.815 Z M 153.58 161.555 C 154.473 161.555 155.29 161.342 156.03 160.915 C 156.77 160.488 157.3 159.972 157.62 159.365 L 157.62 156.685 L 154.88 156.685 C 153.64 156.685 152.71 156.982 152.09 157.575 C 151.47 158.168 151.16 158.832 151.16 159.565 C 151.16 160.212 151.363 160.705 151.77 161.045 C 152.17 161.385 152.773 161.555 153.58 161.555 ZM 170.596 169.215 L 163.456 169.215 L 163.456 167.475 L 165.546 167.095 L 165.546 150.855 L 163.316 150.465 L 163.316 148.735 L 167.856 148.735 L 168.106 150.535 C 168.599 149.862 169.199 149.348 169.906 148.995 C 170.612 148.635 171.429 148.455 172.356 148.455 C 173.576 148.455 174.619 148.785 175.486 149.445 C 176.352 150.112 177.016 151.038 177.476 152.225 C 177.929 153.412 178.156 154.805 178.156 156.405 L 178.156 156.685 C 178.156 158.112 177.926 159.358 177.466 160.425 C 177.006 161.492 176.346 162.322 175.486 162.915 C 174.632 163.515 173.602 163.815 172.396 163.815 C 171.489 163.815 170.689 163.662 169.996 163.355 C 169.309 163.048 168.726 162.595 168.246 161.995 L 168.246 167.095 L 170.596 167.475 L 170.596 169.215 Z M 171.566 161.705 C 172.839 161.705 173.806 161.242 174.466 160.315 C 175.119 159.382 175.446 158.172 175.446 156.685 L 175.446 156.405 C 175.446 155.272 175.299 154.275 175.006 153.415 C 174.719 152.555 174.286 151.878 173.706 151.385 C 173.126 150.892 172.402 150.645 171.536 150.645 C 170.769 150.645 170.112 150.818 169.566 151.165 C 169.019 151.512 168.579 151.985 168.246 152.585 L 168.246 159.795 C 168.579 160.402 169.019 160.872 169.566 161.205 C 170.106 161.538 170.772 161.705 171.566 161.705 ZM 186.949 169.215 L 179.809 169.215 L 179.809 167.475 L 181.899 167.095 L 181.899 150.855 L 179.669 150.465 L 179.669 148.735 L 184.209 148.735 L 184.459 150.535 C 184.953 149.862 185.553 149.348 186.259 148.995 C 186.966 148.635 187.783 148.455 188.709 148.455 C 189.929 148.455 190.973 148.785 191.839 149.445 C 192.706 150.112 193.369 151.038 193.829 152.225 C 194.283 153.412 194.509 154.805 194.509 156.405 L 194.509 156.685 C 194.509 158.112 194.279 159.358 193.819 160.425 C 193.359 161.492 192.699 162.322 191.839 162.915 C 190.986 163.515 189.956 163.815 188.749 163.815 C 187.843 163.815 187.043 163.662 186.349 163.355 C 185.663 163.048 185.079 162.595 184.599 161.995 L 184.599 167.095 L 186.949 167.475 L 186.949 169.215 Z M 187.919 161.705 C 189.193 161.705 190.159 161.242 190.819 160.315 C 191.473 159.382 191.799 158.172 191.799 156.685 L 191.799 156.405 C 191.799 155.272 191.653 154.275 191.359 153.415 C 191.073 152.555 190.639 151.878 190.059 151.385 C 189.479 150.892 188.756 150.645 187.889 150.645 C 187.123 150.645 186.466 150.818 185.919 151.165 C 185.373 151.512 184.933 151.985 184.599 152.585 L 184.599 159.795 C 184.933 160.402 185.373 160.872 185.919 161.205 C 186.459 161.538 187.126 161.705 187.919 161.705 ZM 203.633 163.525 L 196.483 163.525 L 196.483 161.805 L 198.703 161.415 L 198.703 150.855 L 196.483 150.465 L 196.483 148.735 L 201.403 148.735 L 201.403 161.415 L 203.633 161.805 L 203.633 163.525 Z M 201.403 145.085 L 198.573 145.085 L 198.573 142.195 L 201.403 142.195 L 201.403 145.085 ZM 212.631 163.525 L 205.481 163.525 L 205.481 161.805 L 207.711 161.415 L 207.711 150.855 L 205.481 150.465 L 205.481 148.735 L 210.121 148.735 L 210.311 150.935 C 210.804 150.148 211.421 149.538 212.161 149.105 C 212.901 148.672 213.748 148.455 214.701 148.455 C 216.294 148.455 217.528 148.922 218.401 149.855 C 219.274 150.795 219.711 152.238 219.711 154.185 L 219.711 161.415 L 221.941 161.805 L 221.941 163.525 L 214.791 163.525 L 214.791 161.805 L 217.021 161.415 L 217.021 154.245 C 217.021 152.938 216.764 152.012 216.251 151.465 C 215.738 150.918 214.951 150.645 213.891 150.645 C 213.118 150.645 212.431 150.832 211.831 151.205 C 211.238 151.578 210.761 152.088 210.401 152.735 L 210.401 161.415 L 212.631 161.805 L 212.631 163.525 ZM 230.364 163.815 C 228.998 163.815 227.808 163.502 226.794 162.875 C 225.788 162.248 225.008 161.382 224.454 160.275 C 223.901 159.162 223.624 157.875 223.624 156.415 L 223.624 155.815 C 223.624 154.408 223.914 153.152 224.494 152.045 C 225.074 150.938 225.844 150.065 226.804 149.425 C 227.764 148.778 228.814 148.455 229.954 148.455 C 231.288 148.455 232.401 148.728 233.294 149.275 C 234.194 149.822 234.871 150.592 235.324 151.585 C 235.784 152.572 236.014 153.735 236.014 155.075 L 236.014 156.755 L 226.414 156.755 L 226.374 156.825 C 226.394 157.772 226.561 158.612 226.874 159.345 C 227.188 160.078 227.641 160.655 228.234 161.075 C 228.828 161.495 229.538 161.705 230.364 161.705 C 231.278 161.705 232.078 161.575 232.764 161.315 C 233.451 161.055 234.048 160.698 234.554 160.245 L 235.604 161.995 C 235.078 162.502 234.378 162.932 233.504 163.285 C 232.631 163.638 231.584 163.815 230.364 163.815 Z M 226.474 154.585 L 226.494 154.655 L 233.324 154.655 L 233.324 154.295 C 233.324 153.588 233.198 152.952 232.944 152.385 C 232.691 151.825 232.318 151.385 231.824 151.065 C 231.324 150.738 230.701 150.575 229.954 150.575 C 229.354 150.575 228.808 150.752 228.314 151.105 C 227.821 151.458 227.414 151.935 227.094 152.535 C 226.781 153.135 226.574 153.818 226.474 154.585 ZM 244.151 163.815 C 243.158 163.815 242.228 163.715 241.361 163.515 C 240.494 163.315 239.574 163.005 238.601 162.585 L 238.571 159.065 L 240.611 159.065 L 241.111 161.185 C 241.624 161.398 242.121 161.552 242.601 161.645 C 243.081 161.738 243.598 161.785 244.151 161.785 C 245.244 161.785 246.028 161.575 246.501 161.155 C 246.974 160.742 247.211 160.225 247.211 159.605 C 247.211 159.018 246.971 158.522 246.491 158.115 C 246.018 157.708 245.151 157.365 243.891 157.085 C 242.104 156.678 240.791 156.128 239.951 155.435 C 239.104 154.748 238.681 153.832 238.681 152.685 C 238.681 151.885 238.914 151.165 239.381 150.525 C 239.848 149.892 240.494 149.388 241.321 149.015 C 242.148 148.642 243.114 148.455 244.221 148.455 C 245.341 148.455 246.301 148.585 247.101 148.845 C 247.894 149.098 248.588 149.438 249.181 149.865 L 249.321 153.245 L 247.291 153.245 L 246.861 151.275 C 246.541 151.035 246.161 150.852 245.721 150.725 C 245.288 150.598 244.788 150.535 244.221 150.535 C 243.381 150.535 242.698 150.732 242.171 151.125 C 241.651 151.518 241.391 152.012 241.391 152.605 C 241.391 152.952 241.464 153.252 241.611 153.505 C 241.764 153.758 242.054 153.988 242.481 154.195 C 242.908 154.402 243.538 154.605 244.371 154.805 C 246.431 155.285 247.868 155.898 248.681 156.645 C 249.501 157.392 249.911 158.312 249.911 159.405 C 249.911 160.658 249.448 161.705 248.521 162.545 C 247.594 163.392 246.138 163.815 244.151 163.815 ZM 258.114 163.815 C 257.121 163.815 256.191 163.715 255.324 163.515 C 254.457 163.315 253.537 163.005 252.564 162.585 L 252.534 159.065 L 254.574 159.065 L 255.074 161.185 C 255.587 161.398 256.084 161.552 256.564 161.645 C 257.044 161.738 257.561 161.785 258.114 161.785 C 259.207 161.785 259.991 161.575 260.464 161.155 C 260.937 160.742 261.174 160.225 261.174 159.605 C 261.174 159.018 260.934 158.522 260.454 158.115 C 259.981 157.708 259.114 157.365 257.854 157.085 C 256.067 156.678 254.754 156.128 253.914 155.435 C 253.067 154.748 252.644 153.832 252.644 152.685 C 252.644 151.885 252.877 151.165 253.344 150.525 C 253.811 149.892 254.457 149.388 255.284 149.015 C 256.111 148.642 257.077 148.455 258.184 148.455 C 259.304 148.455 260.264 148.585 261.064 148.845 C 261.857 149.098 262.551 149.438 263.144 149.865 L 263.284 153.245 L 261.254 153.245 L 260.824 151.275 C 260.504 151.035 260.124 150.852 259.684 150.725 C 259.251 150.598 258.751 150.535 258.184 150.535 C 257.344 150.535 256.661 150.732 256.134 151.125 C 255.614 151.518 255.354 152.012 255.354 152.605 C 255.354 152.952 255.427 153.252 255.574 153.505 C 255.727 153.758 256.017 153.988 256.444 154.195 C 256.871 154.402 257.501 154.605 258.334 154.805 C 260.394 155.285 261.831 155.898 262.644 156.645 C 263.464 157.392 263.874 158.312 263.874 159.405 C 263.874 160.658 263.411 161.705 262.484 162.545 C 261.557 163.392 260.101 163.815 258.114 163.815 ZM 269.757 163.525 L 267.057 163.525 L 267.057 160.765 L 269.757 160.765 L 269.757 163.525 Z",
    transform: "matrix(1, 0, 0, 1, 0, 0)",
    style: {
      fill: "#282846",
      whiteSpace: "pre"
    }
  }));
}

/* harmony default export */ var logo = (__webpack_require__.p + "static/media/logo.50d495d6.svg");

// CONCATENATED MODULE: ./src/static/svg/index.ts

// EXTERNAL MODULE: ./src/lib/styles/palette.ts
var palette = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/common/Button.tsx


var _templateObject, _templateObject2;




var ButtonBlock = external_styled_components_default.a.button(_templateObject || (_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  display: inline-flex;\n  height: 2rem;\n  align-items: center;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  font-weight: bold;\n  cursor: pointer;\n  font-size: 1rem;\n  outline: none;\n  border: none;\n  ", "\n"])), function (props) {
  return props.theme === 'default' && Object(external_styled_components_["css"])(_templateObject2 || (_templateObject2 = Object(taggedTemplateLiteral["a" /* default */])(["\n      background: ", ";\n      color: ", ";\n      border-radius: 1rem;\n      &:hover,\n      &:focus {\n        background: ", ";\n      }\n    "])), palette["a" /* default */].blue0, palette["a" /* default */].yellow, palette["a" /* default */].blue1);
});

var Button_Button = function Button(_ref) {
  var theme = _ref.theme,
      children = _ref.children;
  return /*#__PURE__*/external_react_["createElement"](ButtonBlock, {
    theme: theme
  }, children);
};

Button_Button.defaultProps = {
  theme: 'default'
};
/* harmony default export */ var common_Button = (Button_Button);
// EXTERNAL MODULE: ./src/lib/styles/responsive.ts
var responsive = __webpack_require__(21);

// CONCATENATED MODULE: ./src/components/base/Header.tsx


var Header_templateObject;






var HeaderBlock = external_styled_components_default.a.div(Header_templateObject || (Header_templateObject = Object(taggedTemplateLiteral["a" /* default */])(["\n  width: 100%;\n  .wrapper {\n    width: ", ";\n    height: 4rem;\n    margin: 0 auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])), responsive["a" /* breakpoints */].xlarge);

var Header_Header = function Header(props) {
  return /*#__PURE__*/external_react_["createElement"](HeaderBlock, null, /*#__PURE__*/external_react_["createElement"]("div", {
    className: "wrapper"
  }, /*#__PURE__*/external_react_["createElement"]("div", {
    className: "brand"
  }, /*#__PURE__*/external_react_["createElement"](SvgLogo, null)), /*#__PURE__*/external_react_["createElement"]("div", {
    className: "right"
  }, /*#__PURE__*/external_react_["createElement"]("div", {
    className: "right"
  }, /*#__PURE__*/external_react_["createElement"](common_Button, null, "Click")))));
};

/* harmony default export */ var base_Header = (Header_Header);
// CONCATENATED MODULE: ./src/components/base/PageTemplate.tsx


var PageTemplate_templateObject;




var PageTemplateBlock = external_styled_components_default.a.div(PageTemplate_templateObject || (PageTemplate_templateObject = Object(taggedTemplateLiteral["a" /* default */])([""])));

var PageTemplate_PageTemplate = function PageTemplate(_ref) {
  var hideHeader = _ref.hideHeader,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/external_react_["createElement"](PageTemplateBlock, {
    style: style,
    className: className
  }, !hideHeader && /*#__PURE__*/external_react_["createElement"](base_Header, null), children);
};

/* harmony default export */ var base_PageTemplate = __webpack_exports__["a"] = (PageTemplate_PageTemplate);

/***/ })

};;
//# sourceMappingURL=pages-main-MainPage.de1582d7.chunk.js.map