import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
   state = {
       showInfo : false
   }

   handleInfo =()=>{
       this.setState({
        showInfo: !this.state.showInfo
       })
   }
   
    render() {
        const {id, city, img, name, info} = this.props.tour
        const { removeTour } = this.props
       
        return (
            <>
            <article className='tour'>
             <div className="img-container">
                 <img width='200' src={img} alt="city" />
              <span 
              className="close-btn" 
              onClick={()=> {
                  removeTour(id)
                  }}> 
                <svg  className="close-btn_svg" xmlns="http://www.w3.org/2000/svg" height="10pt" viewBox="0 0 329.26933 329" width="10pt" ><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
              </span>
             </div> 
             <div className="tour-info">
                 <h3>{city}</h3>
                 <h4>{name}</h4>
                 <h5>
                     info{' '}
                    <span onClick={this.handleInfo}>&#8595;</span>     
                 </h5>
                 {this.state.showInfo && <p>{info}</p>}
             </div>
            </article>
             </>
        )
    }
}

/*import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt="" />
          <span
            className="close-btn"
            onClick={() => {
              removeTour(id);
            }}
          >
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}*/