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
  }

componentDidMount(){
  const url = '/api/elements';
  fetch(url).then(res => res.json()).then(elements => this.setState({elements: elements}));
}

  render(){
    return (
      <div className="page-content">
        <PeriodicTable elements={this.state.elements}/>
        <div className="info-box">
          <InfoBox elements={this.state.elements} />
        </div>
      </div>
    )
  }

}

export default MainBox;
