import './global.css';
import styles from './App.module.css';
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from './components/Post.jsx';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandez',
      role: 'Rocketseat CTO'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto do meu portifólio, é um projeto que fiz no Ignite da Rocketseat.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-14 09:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Rocketseat Educator'
    },
    content: [
      {type: 'paragraph', content: 'Opa pessoal!'},
      {type: 'paragraph', content: 'Lindo projeto da Rocketseat.'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-11-14 11:30:00'),
  }
];

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
