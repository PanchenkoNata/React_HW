import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import styles from './styles.module.scss';
import Hero from '../components/Hero';


class App extends Component {
  state = {
    b: 10,
    max: 100,
    list: ['Anna', 'Nata', 'Alex'],
    hero: ' ',
    data: {
      name: '',
      birth_year: '',
    },
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ b: 25, hero: 'Alex' });
    }, 3000);
    axios.get('https://swapi.co/api/people/1/')
      .then(
        (response) => {
          const { data } = response;
          console.log(data);
          this.setState({
            data: data,
          });
        },
      )
      .catch(err => console.log(err));
  }

  addItem = () => {
    this.setState({ list: ['Anna', 'Nata', 'Alex', 'Anton'] });
  }

  handlerClick = () => {
    this.setState({ max: 150 });
    this.addItem();
    console.log('123');
  }

  render() {
    const {
      b, max, list, hero, data,
    } = this.state;
    const { handlerClick } = this;
    const listOfNames = list.map(name => <li key={name}>{name}</li>);

    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <img src={logo} className={styles['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.

            {b}

          </p>
          <button type="button" onClick={handlerClick}>PUSH</button>
          <Hero
            hero={hero}
            data={data}
          />
          <a
            className={styles['App-link']}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
            {max}
          </a>
          <ul>
            {listOfNames}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
