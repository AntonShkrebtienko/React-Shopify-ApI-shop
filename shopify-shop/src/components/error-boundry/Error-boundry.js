"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const error_indicator_1 = __importDefault(require("../error-indicator"));
class ErrorBoundry extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch() {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) {
            return (0, jsx_runtime_1.jsx)(error_indicator_1.default, {}, void 0);
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundry;
