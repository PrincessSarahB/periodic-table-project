import React from 'react';
import "./infoBox.css";
class InfoBox extends React.Component{
  render(){
    const elementInfo = (
      <ul className="t">
        <div className="element-info">
          <li className="li-name">Name: </li>
          <li className="li-symbol">Symbol: </li>
          <li className="li-appearance">Appearance: </li>
          <li className="li-atomic-mass">Atomic Mass: </li>
          <li className="li-category">Category: </li>
          <li className="li-discoverer">Discovered By: </li>
          <li className="li-namer">Named By: </li>
          <li className="li-number">Number: </li>
          <li className="li-phase">Phase: </li>
          <li className="li-link"></li>
      </div>
    </ul>

    )

    return (
      <div> {elementInfo} </div>
    )
  }
  
}

export default InfoBox;
