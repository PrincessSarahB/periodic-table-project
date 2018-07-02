import React from 'react';
import "./infoBox.css";
class InfoBox extends React.Component{
  render(){
    const elementInfo = (
      <ul>
        <div className="element-info">
          <h1 className="test">  </h1>
          {/* <li className="li-name" key={element._id}>Name: {element.name}</li>
          <li className="li-symbol" key={element._id}>Symbol: {element.symbol}</li>
          <li className="li-appearance" key={element._id}>Appearance: {element.appearance}</li>
          <li className="li-atomic-mass" key={element._id}>Atomic Mass: {element.atomic_mass}</li>
          <li className="li-category" key={element._id}>Category: {element.category}</li>
          <li className="li-discoverer" key={element._id}>Discovered By: {element.discovered_by}</li>
          <li className="li-namer" key={element._id}>Named By: {element.named_by}</li>
          <li className="li-number" key={element._id}>Number: {element.number}</li>
          <li className="li-phase" key={element._id}>Phase: {element.phase}</li>
          <li className="li-link" key={element._id}><a href={element.source}>Link</a></li> */}
      </div>
    </ul>

    )

    return (
      <div> {elementInfo} </div>
    )
  }
  
}

export default InfoBox;
