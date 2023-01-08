import { useContext } from "@/components/contextprovider.jsx"
import Page from "@/components/Page.jsx"
import TaskForm from "@/components/TaskForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

const CreatetaskPage = () => {
  const { createTask } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      createTask(values)
      router.push("/")
    },
    [router, createTask]
  )

  return (
    <Page>
      <TaskForm onSubmit={handleSubmit} />
    </Page>
  )
}

export default CreateTaskPage