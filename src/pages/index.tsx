import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import classNames from 'classnames/bind';

let cn = classNames.bind(styles);

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <h2>Home page</h2>
    </div>
  )
}

export default Home
