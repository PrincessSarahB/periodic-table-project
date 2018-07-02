import React from 'react';
import PeriodicTable from "../components/PeriodicTable"
import InfoBox from "../components/infoBox"
import "./mainBox.css"
class MainBox extends React.Component{

constructor(props){
  super(props);
    this.state = {
      elements:[],
      elementToDsiplay: {}
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

// Database api request gets a list of all elements in JSON format.
componentDidMount(){
  const url = '/api/elements';
  fetch(url).then(res => res.json()).then(elements => this.setState({elements: elements,
    elementToDsiplay: elements[0]}));
}

// Changes relevant properties in the infobox to match element selected.
handleBtnClick(event) {
  const element = JSON.parse(event.currentTarget.value)

  const name = document.getElementsByClassName("li-name")[0];
  const symbol = document.getElementsByClassName("li-symbol")[0];
  const appearance = document.getElementsByClassName("li-appearance")[0];
  const atomic = document.getElementsByClassName("li-atomic-mass")[0];
  const category = document.getElementsByClassName("li-category")[0];
  const discoverer = document.getElementsByClassName("li-discoverer")[0];
  const namer = document.getElementsByClassName("li-namer")[0];
  const number = document.getElementsByClassName("li-number")[0];
  const phase = document.getElementsByClassName("li-phase")[0];
  const link = document.getElementsByClassName("li-link")[0];

  name.textContent = element.name
  symbol.textContent = element.symbol
  appearance.textContent = element.appearance
  atomic.textContent = element.atomic_mass
  category.textContent = element.category
  discoverer.textContent = element.discovered_by
  namer.textContent = element.named_by
  number.textContent = element.number
  phase.textContent = element.phase
  link.textContent = element.source

  const starter_point = "https://www.youtube.com/embed/"
  const video_url = element.video.split('=');
  document.querySelector('#video').src = starter_point + video_url[1];
}

render(){
  return (
    <div className="page-content">
      <PeriodicTable elements={this.state.elements} changeInfo={this.handleBtnClick}/>
      <div className="info-box">
        <InfoBox displayElement={this.state.elementToDsiplay}/>
      </div>
    </div>
  )
}

}

export default MainBox;
