import React,{Component} from 'react';

class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div id="homejumbotron">
          <div className="homeContent">
            <h1>Happy Hacking!</h1>
            <div className="row btnSection">
              <button className="col-3 btn btn-success signinBtn">Sign In</button>
              <button className="col-3 btn btn-danger signupBtn">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
