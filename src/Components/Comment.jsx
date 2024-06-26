import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({content, onDeleteComment}) {
     function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/nivaldosouza27.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Diego Fernandes </strong>
                            <time title='27 de Maio ás 22:00h' dateTime="2024-05-27 22:00:30"> Cerca de 1h atrás </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>{content.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}