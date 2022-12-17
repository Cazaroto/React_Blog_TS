import styles from './Header.module.css';
import logoImage from '../assets/ignite-logo.png';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logoImage} alt="logotipo do ignite"></img>
            
            <strong>Ignite Feed</strong>
        </header>
    );
}