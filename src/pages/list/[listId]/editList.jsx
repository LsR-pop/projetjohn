import { useContext } from "@/components/contextprovider.jsx"
import Page from "@/components/Page.jsx"
import ListForm from "@/components/ListForm.jsx"
import { useRouter } from "next/router.js"
import { useCallback } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      listId: Number.parseInt(params.listId, 10),
    },
  },
})

const ListEditPage = (props) => {
  const {
    params: { listId },
  } = props
  const { updateList, lists } = useContext()
  const router = useRouter()
  const handleSubmit = useCallback(
    (values) => {
      updateUser(values)
      router.push("/")
    },
    [router, updateList]
  )

  return (
    <Page>
      <ListForm
        onSubmit={handleSubmit}
        initialValues={lists.find(({ id }) => id === listId)}
      />
    </Page>
  )
}

export default ListEditPage