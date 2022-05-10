import styles from './Card.module.scss'

export default function TechCard({ title }) {
  return (
    <div className={styles.wrapper}>
      <span>{title}</span>   
    </div>
  )
}