import React from 'react';
import "./element.css";
class Element extends React.Component {
  render(){
    let elementInfo;

    if (this.props.elementDetails !== undefined) {
      const element = this.props.elementDetails
      elementInfo = (
        <div id={[element.xpos, element.ypos]}  className="element" >
          <button className={element.category} value={JSON.stringify(element)} onClick={this.props.btnEvent}>
            <p> <strong> {element.number} </strong> </p>
            <p> <strong> {element.symbol} </strong> </p>
            <p> <strong> {element.name} </strong> </p>
          </button>
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
