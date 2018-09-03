import React from 'react'
import Link from 'next/link'

import styles from "../styles.scss";

export default () => (
  <div className={styles.example}>
    <h1>Hello World!</h1>
    <ul>
      <li><Link href="/b"><a>a</a></Link></li>
      <li><Link href="/a"><a>b</a></Link></li>
    </ul>
  </div>
)
