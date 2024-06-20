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
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da        Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">nivaldosouza/doctorcare</a></p>

                <p><a href="#"> #novoprojeto </a>
                <a href="#"> #nlw </a>
                <a href="#"> #rocketseat </a></p>
            </div>
        </article>
    )
}