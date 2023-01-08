import Button from "@/components/Button.jsx"
import { useContext } from "@/components/ContextProvider.jsx"
import Link from "@/components/Link.jsx"
import Page from "@/components/Page.jsx"
import { TrashIcon } from "@heroicons/react/24/solid"
import { useCallback } from "react"

const IndexPage = () => {
  const { tasks, deleteTask } = useContext()
  const handleClickDelete = useCallback(
    (event) => {
      const taskId = Number.parseInt(
        event.currentTarget.getAttribute("data-task-id"),
        10
      )

      deleteTask(taskId)
    },
    [deleteTask]
  )

  return (
    <Page title="List.name">
        <tbody>
          {tasks?.map((task) => (
            <tr key={task.id}>
              <td className="border px-4 py-2">{task.name}</td>
              <td className="border px-4 py-2">
                <Link href={`/task/${task.id}/edit`}>Edit</Link>
              </td>
              <td className="border px-4 py-2">
                <Button data-task-id={task.id} onClick={handleClickDelete}>
                  <TrashIcon className="w-6" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
    </Page>
  )
}

export default IndexPage