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
}

// Changes relevant properties in the infobox to match element selected.
handleBtnClick(event) {
  const element = JSON.parse(event.currentTarget.value)
  this.setState({elementToDisplay: element})

  const starter_point = "https://www.youtube.com/embed/"
  const video_url = element.video.split('=');
  document.querySelector('#video').src = starter_point + video_url[1];
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
