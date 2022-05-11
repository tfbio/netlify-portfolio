import styles from './Card.module.scss'

export default function Card({ title }) {
  return (
    <div  className={styles.card}>
      <div>
        <p className={styles.image}> imagi aqui</p>
      </div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm</p>
      </div>
    </div>
  )
}
