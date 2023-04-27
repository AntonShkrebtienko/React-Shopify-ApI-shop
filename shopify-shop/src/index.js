"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = __importDefault(require("react-dom"));
const App_1 = __importDefault(require("./components/app/App"));
require("./components/app/app.css");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const reducer_1 = __importDefault(require("./components/store/reducer"));
const error_boundry_1 = __importDefault(require("./components/error-boundry"));
exports.store = (0, redux_1.createStore)(reducer_1.default);
react_dom_1.default.render((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: exports.store }, { children: (0, jsx_runtime_1.jsx)(error_boundry_1.default, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}, void 0) }, void 0) }), void 0), document.getElementById('root'));
