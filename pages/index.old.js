import React from 'react';
import { connect } from 'react-redux';
import { startClock, serverRenderClock } from '../store';
import Examples from '../components/examples';
import Link from 'next/link';

import styles from "../styles.scss";

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))

    return {}
  }

  componentDidMount () {
    const { dispatch } = this.props
    this.timer = startClock(dispatch)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div className={styles.example}>
        <h1>Hello World!</h1>
        <ul>
          <li><Link href="/a"><a>a</a></Link></li>
          <li><Link href="/b"><a>b</a></Link></li>
        </ul>
        <Examples />
      </div>
    )
  }
}

export default connect()(Index)
