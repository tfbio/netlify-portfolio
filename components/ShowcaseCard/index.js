import styles from './Card.module.scss'

export default function Card({ title }) {
  return (
    <div  className={styles.card}>
      <p className={styles.image}> imagi aqui</p>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}
