import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Post muito legal, hein?!',
    ])

    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR // date-fns/locale/pt-BR
    } )

    const publishedDateRelativeTonow = formatDistanceToNow(publishedAt, {
        locale: ptBR, // locale para formatar a data
        addSuffix: true // adiciona o sufixo 'atrás'
    })

    function handleCreateNewComment() {
        event.preventDefault()

        //imutabilidade
        setComments([...comments, newCommentText]); //adiciona novo comentário no array
        setNewCommentText('');//limpa o input
    }

    function handleNewCommentChange() { 
        event.target.setCustomValidity(''); //limpa o erro de validacao
        setNewCommentText(event.target.value);
    }

    function  handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório') //seta o erro de validacao
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete; //retorna todos os comentários que não são o que foi deletado
        })

        setComments(commentsWithoutDeletedOne); //atualiza o array de comentários
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeTonow}
                </time>

            </header>

            <div className={styles.content}>
                {content.map(line => { //mapa todas as linhas do conteúdo
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    } //
                })}
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}> 
                {comments.map(comment => { 
                    return (
                        <Comment key={comment}
                        content={comment}
                        ondeleteComment={deleteComment} 
                        />
                    )
                })}
            </div>
        </article>
    )
}