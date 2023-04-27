"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import React, {Component} from 'react';
// class VariantSelector extends Component {
//   render() {
//     return (
//       <select
//         className="Product__option"
//         name={this.props.option.name}
//         key={this.props.option.name}
//         onChange={this.props.handleOptionChange}
//       >
//         {this.props.option.values.map((value) => {
//           return (
//             <option value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
//           )
//         })}
//       </select>
//     );
//   }
// }
// export default VariantSelector;
const react_1 = require("react");
class VariantSelector extends react_1.Component {
    render() {
        return ((0, jsx_runtime_1.jsx)("select", Object.assign({ className: "Product__option", name: this.props.option.name, onChange: this.props.handleOptionChange }, { children: this.props.option.values.map((value) => {
                return ((0, jsx_runtime_1.jsx)("option", Object.assign({ value: value }, { children: `${value}` }), `${this.props.option.name}-${value}`));
            }) }), this.props.option.name));
    }
}
exports.default = VariantSelector;
