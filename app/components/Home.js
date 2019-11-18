// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Link to={routes.LOST_ARK_FISHING}>LOST_ARK_FISHING PAGE</Link>
        <Link to={routes.COUNTER}> COUNTER</Link>
      </div>
    );
  }
}
