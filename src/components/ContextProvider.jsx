import {
  createContext,
  useCallback,
  useContext as useNativeContext,
  useState,
} from "react"

const initialLists = [
  {
    id: 1,
    list: "test",
  },
]

export const Context = createContext()

export const useContext = () => useNativeContext(Context)

const ContextProvider = (props) => {
  const [nextId, setNextId] = useState(2)
  const [lists, setLists] = useState(initialLists)
  const getNextId = useCallback(() => {
    setNextId(nextId + 1)

    return nextId
  }, [nextId])
  const createList = useCallback(
    (list) => {
      setList((lists) => [
        ...lists,
        {
          id: getNextId(),
          ...list,
        },
      ])
    },
    [getNextId]
  )
  const deleteList = useCallback(
    (listId) => setLists((lists) => lists.filter(({ id }) => id !== listId)),
    []
  )
  const updateList = useCallback((updatedList) => {
    setLists((lists) =>
      lists.map((list) => (list.id === updatedList.id ? updatedList : list))
    )
  }, [])

  return (
    <Context.Provider
      {...props}
      value={{
        lists,
        createList,
        deleteList,
        updateList,
      }}
    />
  )
}

export default ContextProvider
