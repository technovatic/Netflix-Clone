import styles from '../../styles/Footer.module.scss';
import { Github, Linkedin, Twitter } from '../../utils/icons';
import { IconType } from 'react-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='https://github.com/technovatic' target='_blank' rel='noreferrer'>
          <b>Vishal</b>
        </a>
      </p>
    </div>
  );
}
