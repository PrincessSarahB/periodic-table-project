import React from 'react';
import "./infoBox.css";
class InfoBox extends React.Component {

  render(){
    const element = (this.props.displayElement)

    const elementInfo = (
      <ul className="t">
        <div className="element-info">
          <h1>Element Info</h1>
          <li className="li-name">Name: {element.name} </li>
          <li className="li-symbol">Symbol: {element.symbol} </li>
          <li className="li-appearance">Appearance: {element.appearance} </li>
          <li className="li-atomic-mass">Atomic Mass: {element.atomic_mass} </li>
          <li className="li-category">Category: {element.category} </li>
          <li className="li-discoverer">Discovered By: {element.discovered_by} </li>
          <li className="li-namer">Named By: {element.named_by} </li>
          <li className="li-number">Number: {element.number} </li>
          <li className="li-phase">Phase: {element.phase} </li>
          <li className="li-link"> </li>
      </div>
    </ul>

    )
    return (
      <div>
        {elementInfo}
        <iframe src="" height="375" width="375" id="video"></iframe>
      </div>
    )
  }
}

export default InfoBox;
