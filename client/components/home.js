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
            <button className="btn btn-success signinBtn">Sign In</button>
            <button className="btn btn-danger signupBtn">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
