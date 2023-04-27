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

import React, {Component} from 'react';

interface IVariantSelectorProps {
  option: {
    name: any,
    values: []
  },
  handleOptionChange: any
}

class VariantSelector extends Component<IVariantSelectorProps> {
  
  render() {

    return (
      <select
        className="Product__option"
        name={this.props.option.name}
        key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.map((value) => {
          return (
            <option value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    );
  }
}

export default VariantSelector;
