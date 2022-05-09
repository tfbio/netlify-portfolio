import { useState, useEffect } from 'react';

export default function useDimensions() {
  let definedWindow

  useEffect(()=> {
    definedWindow = typeof window !== 'undefined'
  },[])

  function getWidth() {
    const width = definedWindow ? window.innerWidth : null;
    return width
  }
  
  const [currentWidth, setCurrentWidth] = useState(getWidth());

  useEffect(() => {
    if (definedWindow) {
      function handleResize() {
        setCurrentWidth(getWidth())
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    } else {
      setCurrentWidth(1366)
    }
  }, [definedWindow]);

  return currentWidth;
}