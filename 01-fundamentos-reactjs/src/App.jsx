import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


import styles from './App.module.css'

import './global.css'


//author : { avatar-url: "", name: "", role: ""}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/97989407?v=4',
      name: 'Thiago Matheus',
      role: 'Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,'},

      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-15 13:32:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },

      { type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,'},

      { type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-10 13:32:00'),
  },
]

//iteração

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
   </div>
  )
}

