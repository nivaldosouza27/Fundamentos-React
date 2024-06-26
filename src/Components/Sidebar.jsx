import styles from './Sidebar.module.css'
import CapaPerfil from '../Assets/Capa.jpg'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={CapaPerfil} />

            <div className={styles.profile}>
                <Avatar src="https://github.com/nivaldosouza27.png" />
                <strong> Nivaldo Souza</strong>
                <span> Web Developer Back-End</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />Editar seu Perfil
                </a>
            </footer>
        </aside>
    )
}