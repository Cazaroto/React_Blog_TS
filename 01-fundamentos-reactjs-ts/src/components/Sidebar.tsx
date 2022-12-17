import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
                src='https://images.unsplash.com/photo-1641545423876-3d7dc842132c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80' 
            />

            <div className={styles.profile}>
                <Avatar 
                    hasBorder
                    src="https://avatars.githubusercontent.com/u/38386523?s=400&       u=cb1bdaf4d1261d0791810005695f00e1f1b435d8&v=4" 
                 />
                <strong>Danilo Cazaroto</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/> 
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}