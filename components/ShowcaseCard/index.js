import Image from 'next/image'
import styles from './Card.module.scss'

export default function Card({ link, title, image, description }) {
  return (
    <div  className={styles.card}>
      <a href={link}>
        <Image 
          src={image}
          className={styles.image}
          width={240}  
          height={90}
        />
      </a>
      <div className={styles.text}>
        <a href={link}><h1 className={styles.title}>{title}</h1></a>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}
