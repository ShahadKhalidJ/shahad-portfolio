import { useState, useEffect } from 'react'
import './PageLoader.css'

function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // ضمان ٦٠٠ms كحد أدنى عشان الـ animation تطلع بسلاسة
    const minTime = new Promise(resolve => setTimeout(resolve, 700))

    const hideLoader = () => {
      minTime.then(() => setIsLoading(false))
    }

    if (document.readyState === 'complete') {
      hideLoader()
    } else {
      window.addEventListener('load', hideLoader)
      return () => window.removeEventListener('load', hideLoader)
    }
  }, [])

  return (
    <div className={`page-loader ${isLoading ? '' : 'hidden'}`}>
      <div className="loader-logo">
        SK<span className="loader-dot">.</span>
      </div>
    </div>
  )
}

export default PageLoader