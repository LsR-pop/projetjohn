import Button from "@/components/Button.jsx"
import { useContext } from "@/components/contextprovider.jsx"
import Link from "@/components/Link.jsx"
import Page from "@/components/Page.jsx"
import { TrashIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react"

const IndexPage = () => {
  const { lists, deleteList} = useContext()
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
    <Page title="List.name">
        <tbody>
        {lists.map(v => (<div> {v.name} </div>))}
        </tbody>
    </Page>
  )
}

export default IndexPage