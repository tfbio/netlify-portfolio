import styles from './Click.module.scss'

export default function Clickable({ title, targetRef }) {
  function handleRefClick(){
    targetRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <button className={styles.button} onClick={handleRefClick}>{title}</button>   
  )
}