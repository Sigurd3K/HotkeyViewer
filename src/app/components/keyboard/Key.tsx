import React, { Component } from 'react'
import styles from './Key.module.css'


export type KeycapProps = {
  text: string,
  keycapSize: kbKeycapSize,
  subtext?: string,
  image?: string,
};

export type KeycapState = {
  pressed: boolean;
}

type kbKeycapSize = '1U' | '1.25U' | '1.5U' | '1.75U' | '2U' | '2.25U' | '2.75U' | '6U' | '6.25U' | '7U';


export default class Keycap extends Component<KeycapProps, KeycapState> {
  render() {
    return (
        <div className={styles.keySlot + ' ' + getKeycapSizeCssClass(this.props.keycapSize)}>
          <div className={styles.keyCap}>
            <span>{this.props.text}</span>
          </div>
        </div>
    )
  }
}

function getKeycapSizeCssClass(size: kbKeycapSize) {
  debugger;
  let sizeClass: string = size.replace('.', 'P');
  sizeClass = 'keySlot-' + sizeClass;
  return styles[sizeClass];
}
