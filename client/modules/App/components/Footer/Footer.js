import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

const d = new Date();
const n = d.getFullYear();

export function Footer() {
  return (
    <div style={{ background: `#000` }} className={styles.footer}>
      <p>&copy; {n} &middot; Charles Allison</p>
      <p>Check me on out Twitter : <a href="https://twitter.com/cballison421" target="_Blank">@cballison421</a></p>
    </div>
  );
}

export default Footer;
