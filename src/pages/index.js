import { useContext } from "@/components/ContextProvider.jsx"
import onSubmit from "@/pages/list/createList.jsx" 
import Link from "next/link"
import { useCallback } from "react"

const IndexPage = () => {
  const { lists, deleteList } = useContext()
  const handleClickDelete = useCallback(
    (event) => {
      const listId = Number.parseInt(
        event.currentTarget.getAttribute("data-list-id"),
        10
      )

      deleteList(listId)
    },
    [deleteList]
  )

  return (
    <>
      <header className="flex p-4 justify-between items-center border-b">
        <h1 className="text-2xl font-bold italic">TASK LIST</h1>
        <nav>
          <Link href="/list/createList" className="flex gap-4"> Create List</Link>
        </nav>
      </header>
      {lists.map((list, index) => (
        <div key={index}> {list.name} </div>
      ))}
    </>
  )
}

export default IndexPage
