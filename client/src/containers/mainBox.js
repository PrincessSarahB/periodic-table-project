import React from 'react';
import PeriodicTable from "../components/PeriodicTable"
class MainBox extends React.Component{

constructor(props){
  super(props);
    this.state = {
      element: []
    }
  }

  render(){
    return (
      <div>
        <PeriodicTable />
      </div>
    )
  }

}

export default MainBox;
