import React, { Component } from 'react';

class Hero extends Component {

  render() {
    const { hero } = this.props;

    return (
      <div>
        <p>{hero}</p>
      </div>
    );
  }
}

export default Hero;
