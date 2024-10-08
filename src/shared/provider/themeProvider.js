import React, { createContext, useCallback, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)

  // 테마 토글 함수
  const handleTheme = useCallback(() => {
    setIsDark((prev) => !prev)
  }, [])

  useEffect(() => {
    const localIsDark = localStorage.getItem('localIsDark')

    if (!localIsDark) return

    setIsDark(JSON.parse(localIsDark))
  }, [setIsDark])

  useEffect(() => {
    localStorage.setItem('localIsDark', isDark)
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
