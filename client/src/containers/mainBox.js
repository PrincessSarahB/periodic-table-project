import React from 'react';
import PeriodicTable from "../components/PeriodicTable"
import InfoBox from "../components/infoBox"
import "./mainBox.css"
class MainBox extends React.Component{

constructor(props){
  super(props);
    this.state = {
      elements:[],
      elementToDisplay: {}
    }


    this.handleBtnClick = this.handleBtnClick.bind(this);

  }

// Database api request gets a list of all elements in JSON format.
componentDidMount(){
  const url = '/api/elements';
  fetch(url).then(res => res.json()).then(elements => this.setState({elements: elements,
    elementToDisplay: elements[0]}));
    document.getElementsByClassName('info-box')[0].hidden = true;
}

// Changes relevant properties in the infobox to match element selected.
handleBtnClick(event) {
  const element = JSON.parse(event.currentTarget.value)
  document.getElementsByClassName('info-box')[0].hidden = false;
  this.setState({elementToDisplay: element})
}

render(){
  return (
    <div className="page-content">
      <PeriodicTable elements={this.state.elements} changeInfo={this.handleBtnClick}/>
      <div className="info-box">
        <InfoBox displayElement={this.state.elementToDisplay}/>
      </div>
    </div>
  )
}


}

export default MainBox;
