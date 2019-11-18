// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Counter.css';
import robot from 'robotjs';
export default class LostArkFishing extends Component {
  state = {
    hex: null
  };
  componentDidMount() {
    document.addEventListener('keypress', ev => {
      const KEY = ev.key.toUpperCase();
      console.log(KEY);
      const actions = {
        R: this.takeRectBitmap()
      };
    });
  }

  takeRectBitmap = () => {
    const { x, y } = robot.getMousePos();
    const { canvas } = this;
    const ctx = canvas.getContext('2d');
    const image = robot.screen.capture(x, y, x + 50, y + 50).image;
    createImageBitmap(image).then(imageBitmap => {
      ctx.drawImage(imageBitmap, 0, 0);
    });
  };

  render() {
    const { hex } = this.state;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
          <canvas width="50" height="50" ref={node => (this.canvas = node)} />
        </div>
      </div>
    );
  }
}
