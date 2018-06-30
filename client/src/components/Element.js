import React from 'react';

const Element = (props)=> {

  var element = this.props.elements.forEach( element => {
    var coords = [element.xpos, element.ypos];
    console.log(coords);
  });

  return (
    <div className="grid-square">
      {element}
  </div>
  )
}

export default Element;
