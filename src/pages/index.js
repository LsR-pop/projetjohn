import Button from "@/components/Button.jsx"
import { useContext } from "@/components/ContextProvider.jsx"
import Link from "@/components/Link.jsx"
import Page from "@/components/Page.jsx"
import { TrashIcon } from "@heroicons/react/24/solid"
import Head from "next/head"
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
          <ul className="flex gap-4"> Button</ul>
        </nav>
      </header>
      {lists.map((list, index) => (
        <div key={index}> {list.name} </div>
      ))}
    </>
  )
}

export default IndexPage
