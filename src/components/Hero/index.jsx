import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hero extends Component {
  render() {
    const { hero, data } = this.props;
    const { name, birth_year } = data;

    return (
      <div>
        <p>{hero}</p>
        <p>{name} {birth_year}</p>
      </div>
    );
  }
}

Hero.defaultProps = {
  data: {
    name: '',
    birth_year: '',
  },
};

Hero.propTypes = {
  hero: PropTypes.string.isRequired,
  data: {
    name: PropTypes.string,
    birth_year: PropTypes.string,
  },
};

export default Hero;
