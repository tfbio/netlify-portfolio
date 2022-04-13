import styles from './Card.module.scss'

export default function Card({ title }) {
  return (
    <div  className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.image}> imagi aqui</p>
    </div>
  )
}
