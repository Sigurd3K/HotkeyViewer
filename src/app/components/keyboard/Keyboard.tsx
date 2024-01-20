'use client'
import React from 'react'
import Keycap, { KeycapProps } from './Key'
import styles from './Keyboard.module.css'

const Keyboard = () => {
   const keyboardKeys: KeycapProps[] = [

    {text: 'TAB', keycapSize: '1.5U'},
    {text: 'Q', keycapSize: '1U'},
    {text: 'W', keycapSize: '1U'},
    {text: 'E', keycapSize: '1U'},
    {text: 'R', keycapSize: '1U'},
    {text: 'T', keycapSize: '1U'},
    {text: 'Y', keycapSize: '1U'},
    {text: 'U', keycapSize: '1U'},
    {text: 'I', keycapSize: '1U'},
    {text: 'O', keycapSize: '1U'},
    {text: 'P', keycapSize: '1U'},
    {text: '{', keycapSize: '1U'},
    {text: '}', keycapSize: '1U'},
    {text: '|', keycapSize: '1.5U'},

    {text: 'CAPS', keycapSize: '1.75U'},
    {text: 'A', keycapSize: '1U'},
    {text: 'S', keycapSize: '1U'},
    {text: 'D', keycapSize: '1U'},
    {text: 'F', keycapSize: '1U'},
    {text: 'G', keycapSize: '1U'},
    {text: 'H', keycapSize: '1U'},
    {text: 'J', keycapSize: '1U'},
    {text: 'K', keycapSize: '1U'},
    {text: 'L', keycapSize: '1U'},
    {text: ':', keycapSize: '1U'},
    {text: '"', keycapSize: '1U'},
    {text: 'ENTER', keycapSize: '2.25U'},

    {text: 'SHIFT', keycapSize: '2.25U'},
    {text: 'Z', keycapSize: '1U'},
    {text: 'X', keycapSize: '1U'},
    {text: 'C', keycapSize: '1U'},
    {text: 'V', keycapSize: '1U'},
    {text: 'B', keycapSize: '1U'},
    {text: 'N', keycapSize: '1U'},
    {text: 'M', keycapSize: '1U'},
    {text: ',', keycapSize: '1U'},
    {text: '.', keycapSize: '1U'},
    {text: '/', keycapSize: '1U'},
    {text: 'SHIFT', keycapSize: '2.75U'}
    ];

    return (
      <div className={styles.keyboard}>
        {keyboardKeys.map((k) => {
          return <Keycap key={k.text} keycapSize={k.keycapSize} text={k.text} />;
        })}
      </div>
    );
}

export default Keyboard;