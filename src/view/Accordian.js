import React, { Component } from "react";
// import arrow from './src/asset/downarrow.png';

class Accordian extends Component{


    
constructor(props){
    super(props)
    this.state={
        
        isVisible:false,
        
    }
    
  }     


    render(){
        const { isVisible } =this.state;
        return(
            
             <div style={{width:'200px'}}>
                <div style={{backgroundColor: "blue"}} onClick={() => this.setState({isVisible: !isVisible})}>
                am a header<span style={{ position : "absolute"}}>-</span><img src="./src/asset/right-chevron.png" className={isVisible ? "arrow rotateArrow" : "arrow" }/></div>
                {isVisible && <div>ha.. ha.. am the child</div>}
            </div>
        )
    }
}

export default Accordian;