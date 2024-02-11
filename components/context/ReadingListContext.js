"use client"
import { createContext, useContext, useState } from "react"

const ReadingListContext = createContext()
export const useReadingListContext = () => useContext(ReadingListContext)

export const ReadingListProvider = ({children}) => {
  const [readingList, setReadingList] = useState([])

  const addToReadingList = (item) => {
    setReadingList([...readingList, item])
  }

  const removeFromReadingList = (itemToRemove) => {
    setReadingList(readingList.filter(item => item.id !== itemToRemove.id))
  }

  const isInReadingList = (id) => {
    return readingList.some(story => story.id === id)
  }

  const emptyReadingList = () => {
    setReadingList([])
  }

  return (
    <ReadingListContext.Provider value={{
      readingList,
      addToReadingList,
      removeFromReadingList,
      isInReadingList,
      emptyReadingList
    }}>
      {children}
    </ReadingListContext.Provider>
  )
}
