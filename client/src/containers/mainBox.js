import React from 'react';
import PeriodicTable from "../components/PeriodicTable"
import InfoBox from "../components/infoBox"
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
      <div>
        <PeriodicTable elements={this.state.elements}/>
        <InfoBox />
      </div>
    )
  }

}

export default MainBox;
