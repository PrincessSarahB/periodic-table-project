import React from 'react';
import PeriodicTable from "../components/PeriodicTable"
import InfoBox from "../components/infoBox"
import "./mainBox.css"
class MainBox extends React.Component{

constructor(props){
  super(props);
    this.state = {
      elements:[]
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

// Database api request gets a list of all elements in JSON format.
componentDidMount(){
  const url = '/api/elements';
  fetch(url).then(res => res.json()).then(elements => this.setState({elements: elements}));
}

// Changes relevant properties in the infobox to match element selected.
handleBtnClick(event) {
  const x = JSON.stringify(event.target.value)
  console.log(JSON.parse(x));
}

render(){
  console.log('in mainBox render')
  return (
    <div className="page-content">
      <PeriodicTable elements={this.state.elements} changeInfo={this.handleBtnClick}/>
      <div className="info-box">
        <InfoBox />
      </div>
    </div>
  )
}

}

export default MainBox;
