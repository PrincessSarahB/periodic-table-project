import React from 'react';
import "./infoBox.css";
class InfoBox extends React.Component {
  render(){
    const element = (this.props.displayElement)

    const elementInfo = (
      <div >
          <button className="close" onClick={this.props.closeInfoBox}>X</button>
        <h1>Element Info</h1>
        <ul className="t">
            <li className="li-name">Name: {element.name} </li>
            <li className="li-symbol">Symbol: {element.symbol} </li>
            <li className="li-appearance">Appearance: {element.appearance} </li>
            <li className="li-summary">Summary: {element.summary} </li>
            <li className="li-atomic-mass">Atomic Mass: {element.atomic_mass} </li>
            <li className="li-category">Category: {element.category} </li>
            <li className="li-discoverer">Discovered By: {element.discovered_by} </li>
            <li className="li-namer">Named By: {element.named_by} </li>
            <li className="li-number">Number: {element.number} </li>
            <li className="li-phase">Phase: {element.phase} </li>
            <li className="li-link"> <a href={element.source}> Read more </a> </li>
        </ul>
        <div className="video">
        <iframe width="320" height="215" src="https://www.youtube.com/embed/rz4Dd1I_fX0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
      </div>

    )

    return (
      <div className="info-box">
        {elementInfo}


      </div>
    )

  }
}

export default InfoBox;
