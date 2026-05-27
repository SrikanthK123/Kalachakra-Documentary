'use client'

import { useState, useEffect } from 'react'

export function useCountdown(startHours: number) {
  const [total, setTotal] = useState(startHours * 3600)

  useEffect(() => {
    const interval = setInterval(() => {
      setTotal(t => Math.max(0, t - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const hours   = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60

  return { hours, minutes, seconds }
}
export default useCountdown
