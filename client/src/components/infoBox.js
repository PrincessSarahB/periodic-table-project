import React from 'react';

class InfoBox extends React.Component{

  render(){
      const elementInfo = (
      <ul className="t">
      <li className="li-name"> </li>
      <li className="li-symbol"> </li>
      <li className="li-appearance"></li>
      <li className="li-atomic-mass"> </li>
      <li className="li-category"></li>
      <li className="li-discoverer"> </li>
      <li className="li-namer"> </li>
      <li className="li-number"> </li>
      <li className="li-phase"></li>
      <li className="li-link"></li>
    </ul>

    )
    return (
      <div> {elementInfo} </div>
    )
  }
}

export default InfoBox;
