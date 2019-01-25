import React from 'react';

class NextButton extends React.Component {
  render() {
    return (
      <button className="play-prev-btn" onClick={this.props.playNextTrack} >
        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 487.913 487.913">
          <path d="M22.987,468.187C10.291,468.187,0,457.896,0,445.202V42.949c0-12.695,10.291-22.988,22.987-22.988l373.519,206.875 c0,0,17.239,17.238,0,34.477C379.268,278.552,22.987,468.187,22.987,468.187z"/>
          <path d="M411.09,44.64c0-13.76,11.155-24.915,24.915-24.915h26.993c13.76,0,24.915,11.155,24.915,24.915v398.633 c0,13.76-11.155,24.915-24.915,24.915h-26.993c-13.76,0-24.915-11.155-24.915-24.915V44.64z"/>
        </svg>
      </button>
    )
  }
}

export default NextButton;