//tutorial1.js

const API_PROTOCOL = 'https';
const API_DOMAIN = 'tinder-simulator-2016-server.herokuapp.com';
const API_USER_PATH = 'api/v1/users';

let ProfileInfo = React.createClass({
  render:function(){
    return (
        <div id="info" className="profileInfo">
          <span className="profileName">{this.props.name}</span>
          <span className="profileAge">{this.props.age}</span> 
        </div>
      );
  }
});

let ProfileImg = React.createClass({
  render: function(){
    return (
        <div >
          <div id="profilePic">
            <img className="center" height="210" width="280" src={this.props.user.imgurl} />
            <ProfileInfo name={this.props.user.name} age={this.props.user.age}/>
          </div>
        </div>
      );
  },
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
          <img className="center" height="180" width="450" src="img/tinder-buttons2.png" />
        </div>
      );
  }
});

let Profile = React.createClass({
  render: function(){
    "https://unsplash.it/800/700/?random"
    return (
      <div className="profile" onClick={this.props.handleSwipeRight}>
        <ProfileImg className="imageContainer" user={this.props.user} />
        <ProfileBio className="profileBio" entries={this.props.user.bio} />
        <ProfileControls />
      </div>
    );
  }
});

let Intro = React.createClass({
  render: function () {
    return (
      <div onClick={this.props.handleSwipeRight}>
        <p> this is the intro page. click my face to start getting hott Tinder matches </p>
      </div>
    );
  }
});

let Main = React.createClass({
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
  handleSwipeRight: function() {
    this.setState({stateString: "loading"});
    this.loadUserFromServer();
  },
  getInitialState: function(){
    return {stateString: "intro", user: {
      bio: ['this is a test', 'do not panic'], 
      name: "Sammy", 
      age: "36",
      imgurl: "https://unsplash.it/600/400/?random",
    }};
  },
  render: function() {
    switch (this.state.stateString){
      case 'displaying':
        return (
            <div className="main">
              <Profile user={this.state.user} handleSwipeRight={this.handleSwipeRight} />
            </div>
          );

      case 'loading':
        return (<p>loading</p>);

      case 'intro':
        return (<Intro handleSwipeRight={this.handleSwipeRight} />);
    }
  }
});



ReactDOM.render(
    <Main url={`${API_PROTOCOL}://${API_DOMAIN}/${API_USER_PATH}`}/>,
    document.getElementById('content')
  );
