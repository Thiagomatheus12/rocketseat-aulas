import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'


export function Comment( {content, ondeleteComment}) {
    const [likeCount, setLikeCount] = useState(0); //inicializa com 0 likes

    function handleDeleteComment() {
        ondeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/97989407?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                       <div className={styles.authorAndTime}>
                            <strong>Thiago Matheus</strong>
                            <time title="14 de junho às 16:39h" dateTime="2022-06-14 16:38:00">cerca de 1h atrás</time>
                       </div>

                       <button onClick={handleDeleteComment} title="Deletar comentário">
                          <Trash size={24} />
                       </button>
                    </header>
                    <p>
                      {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}