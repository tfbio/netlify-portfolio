import styles from './Card.module.scss'

export default function StudyCard({ title, description, link }) {
  return (
    <a href={link}>
      <div className={styles.card}>
        <strong>{title}</strong>
        <p>{description}</p>   
      </div>
    </a>
  )
}