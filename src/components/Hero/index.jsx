import React, { Component } from 'react';

class Hero extends Component {

  render() {
    const { name } = this.props;

    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
}

export default Hero;