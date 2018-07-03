import React from 'react';
import "./infoBox.css";
class InfoBox extends React.Component {
  render(){
    const element = (this.props.displayElement)

    const elementInfo = (
      <div className={element.category} >
        <div className="info-top-banner">
        <h1 className="header-symbol">{element.symbol}</h1>
        <h2 className="header-name">{element.name}</h2>
        <button className="close" onClick={this.props.closeInfoBox}>X</button>
        </div>

        <div className="element-info">
          <iframe width="640" height="340" src="https://www.youtube.com/embed/rz4Dd1I_fX0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          <ul className="t">
            <li className="li-appearance">Appearance: {element.appearance} </li>
            <li className="li-summary">Summary: {element.summary} </li>
            {/* <li className="li-atomic-mass">Atomic Mass: {element.atomic_mass} </li> */}
            <li className="li-category">Category: {element.category} </li>
            <li className="li-discoverer">Discovered By: {element.discovered_by} </li>
            {/* <li className="li-namer">Named By: {element.named_by} </li> */}
            <li className="li-number">Number: {element.number} </li>
            <li className="li-phase">Phase: {element.phase} </li>
            <li className="li-link"> <a target="_blank" href={element.source}> Read more </a> </li>
          </ul>
        </div>
      </div>
    )

    return (
      <div >
        {elementInfo}
      </div>
    )
  }
}

export default InfoBox;
