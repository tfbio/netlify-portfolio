import { useState, useEffect } from 'react'
import { BiArrowToTop } from 'react-icons/bi';
import styles from './Back.module.scss'

export default function BackToTopButton({targetRef}) {
  const [isVisible, setIsVisible] = useState(false)

  function handleVisility() {
    const scrolledDistance = document.documentElement.scrollTop
    scrolledDistance > 20 ? setIsVisible(true) : setIsVisible(false)
  }

  function handleRefClick(){
    targetRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisility)
  }, [])

  return (
    isVisible ? (
      <button className={styles.button} onClick={handleRefClick}>
      <BiArrowToTop />
    </button>  
    ) : (<></>)   
  )
}