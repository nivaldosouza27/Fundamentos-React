import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import {Post} from './Components/Post'
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: '👉  nivaldosouza/doctorcare'},
    ],
    publishedAt: new Date('2024-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/nivaldosouza27.png',
      name: 'Nivaldo Souza',
      role: 'Web Developer @Creative Cloud Tecnologhy'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'paragraph', content: '👉  nivaldosouza/doctorcare'},
      {type: 'link', content: '#novoprojeto '},
      {type: 'link', content: '#nlw '},
      {type: 'link', content: '#rocketseat '}
    ],
    publishedAt: new Date('2024-05-03 21:00:00')
  }
];


export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
