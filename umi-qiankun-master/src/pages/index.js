import styles from './index.css';
import router from 'umi/router';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a onClick={() => {router.push('/app1/user')}}>
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
