import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className= {styles.avatar} src="https://github.com/nivaldosouza27.png"/>
                    <div className={styles.authorInfo}>
                        <strong> Nivaldo Souza</strong>
                        <span>Web Developer Back-End</span>
                    </div>
                </div>
                <time title='27 de Maio ás 22:00h' datetime="2024-05-27 22:00:30"> Publicado há 1h </time>
            </header>
        </article>
    )
}