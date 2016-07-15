//tutorial1.js

const API_DOMAIN = 'localhost:3030';
const API_USER_PATH = 'api/user';


let ProfileImg = React.createClass({
  render: function(){
    return (
        <div>
          <div>
            <img src={this.props.imgUrl} />
          </div>
        </div>
      );
  },
});

let ProfileInfo = React.createClass({
  render:function(){
    return (
        <div className="profileInfo">
          <span className="profileName">{this.props.name}</span>
          <span className="profileAge">{this.props.age}</span> 
        </div>
      );
  }
});

let ProfileBioEntry = React.createClass({
  render: function(){
    return (
        <p className="profileBioEntry">{this.props.entry}</p>
      );
  }
});

let ProfileBio = React.createClass({
  render:function(){
    let entries = this.props.entries.map (function(entry, index) {
      return (
          <ProfileBioEntry key={index} entry={entry} />
        );
    });

    return (
      <div className="profileBio">
        {entries}
      </div>
    );
  }
});

let ProfileControls = React.createClass({
  render: function(){
    return (
        <div className="profileControls">
          <img src="https://unsplash.it/600/200/?random" />
        </div>
      );
  }
});

let Profile = React.createClass({
  render: function(){
    "https://unsplash.it/800/700/?random"
    return (
      <div className="profile" onClick={this.props.handleSwipeRight}>
        <div className="title-bar" />
        <ProfileImg className="imageContainer" imgUrl={this.props.user.imgUrl} />
        <ProfileInfo className="userInfo" name={this.props.user.name} age={this.props.user.age} />
        <ProfileBio className="profileBio" entries={this.props.user.bio} />
        <ProfileControls />
      </div>
    );
  }
});

let ImageContainer = React.createClass({
  render: function(){
  }
});

var Main = React.createClass({
  loadUserFromServer: function (){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: user => {
        this.setState({stateString: "displaying", user});
      },
      error: (xhr, status, err) => {
        console.log(this.prop.url, status, err.toString());
      }
    });
  },
  handleSwipRight: function() {
    this.setState({stateString: "loading"});
    loadUserFromServer();
  },
  getInitialState: function(){
    return {stateString: "intro", user: {
      bio: ['this is a test', 'do not panic'], 
      name: "Sammy", 
      age: "36",
      imgUrl: "https://unsplash.it/600/400/?random",
    }};
  },
  render: function() {
    return (
        <div className="main">
          <Profile user={this.state.user} handleSwipRight={this.handleSwipeRight} />
        </div>
        );
  }
});

ReactDOM.render(
    <Main url={`http://${API_DOMAIN}/${API_USER_PATH}`}/>,
    document.getElementById('content')
  );
