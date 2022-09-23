import React from 'react';
import Styles from '../styles/Loading.module.css';

function Loading(props) {
  const { type } = props;
  const classe = `dots_bars_${type}`;

  return <div className={Styles[classe]} />;
}

export default Loading;
