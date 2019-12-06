import React from 'react'
import styles from './index.css';

// function BasicLayout(props) {
//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>Yay! Welcome to umi!</h1>
//       {props.children}
//     </div>
//   );
// }

// export default BasicLayout;

export default class extends React.PureComponent {
  render() {
    const { children } = this.props

    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to umi!</h1>
        {children}
      </div>
    )
  }
}
