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
  var videoElement = document.querySelector("iframe")
  var url = element.video;
  var id = url.split("?v=")[1];
  var id2 = id.split("&")[0];
 videoElement.src = "http://www.youtube.com/embed/" + id2
}

handleCloseButton(event){
  event.currentTarget.value
  document.getElementsByClassName('info-box')[0].hidden = true;
  var videoElement = document.querySelector("iframe")
  videoElement.src = '';
}

render(){
  return (
    <div className="page-content">
      <PeriodicTable elements={this.state.elements} changeInfo={this.handleBtnClick}/>
      <div className="info-box">
        <InfoBox displayElement={this.state.elementToDisplay} closeInfoBox = {this.handleCloseButton}/>
      </div>
    </div>
  )
}


}

export default MainBox;
