import React from 'react';
import { Button } from '../Button.js';
import jeroen from  '../../JeroenHomescreen.png';


const IntroPage = () => (
  <div className="IntroPage">
           <h1>Borst Vooruit</h1>
           <img src={jeroen} className="jeroen-home" alt="Jeroen homescreen" />
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        <Button
          className='btns'
          buttonStyle='btn--primary'
        >
          Accept Challenge
        </Button>
        </a>
    </div>
);

export default ActivityPage;
