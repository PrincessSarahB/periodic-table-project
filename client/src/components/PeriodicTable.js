import React from 'react';
import Element from './Element'
import "./periodicTable.css"

class PeriodicTable extends React.Component{

  render(){

    const grid = [];
    let id = 0;
    for (var y = 1; y < 11; y++) {
      for (var x = 1; x < 19; x++) {
        grid.push(<Element elements={this.props.elements} coords={x, y} key={id}/>)
        id++
      }
    }

    return (
      <div>
      <h1>Physics Yay!</h1>
        <div className="row">{grid.slice(0, 18)} </div>
        <div className="row">{grid.slice(18, 36)}</div>
        <div className="row">{grid.slice(36, 54)}</div>
        <div className="row">{grid.slice(54, 72)}</div>
        <div className="row">{grid.slice(72, 90)}</div>
        <div className="row">{grid.slice(90, 108)}</div>
        <div className="row">{grid.slice(108, 126)}</div>
        <div className="row">{grid.slice(126, 144)}</div>
        <div className="row">{grid.slice(144, 162)}</div>
        <div className="row">{grid.slice(162, 180)}</div>
    <Element />
  </div>
    )
  }

}


export default PeriodicTable;
