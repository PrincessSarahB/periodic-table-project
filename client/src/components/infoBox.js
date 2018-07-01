import React from 'react';

class InfoBox extends React.Component{

  render(){
    const elementInfo = this.props.elements.map(element => (
      <ul>
      <li key={element._id}>Name: {element.name}</li>
      <li key={element._id}>Symbol: {element.symbol}</li>
      <li key={element._id}>Appearance: {element.appearance}</li>
      <li key={element._id}>Atomic Mass: {element.atomic_mass}</li>
      <li key={element._id}>Category: {element.category}</li>
      <li key={element._id}>Discovered By: {element.discovered_by}</li>
      <li key={element._id}>Named By: {element.named_by}</li>
      <li key={element._id}>Number: {element.number}</li>
      <li key={element._id}>Phase: {element.phase}</li>
      <li key={element._id}><a href={element.source}>Link</a></li>
    </ul>

    ))
    return (
      <div> {elementInfo[0]} </div>
    )
  }
}

export default InfoBox;
