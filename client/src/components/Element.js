import React from 'react';
import "./element.css";
class Element extends React.Component {
  render(){

    let elementInfo;

    if (this.props.elementDetails !== undefined) {
      const element = this.props.elementDetails
      elementInfo = (
        <div id={[element.xpos, element.ypos]} className="element" value={element}>
          <p> {element.number} </p>
          <p> {element.symbol} </p>
          <p> {element.name} </p>
        </div>
      )
    }

    return (
      <div className="grid-square">
        {elementInfo}
      </div>
    )

  }
}

export default Element;
