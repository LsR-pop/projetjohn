import Button from "@/components/Button.jsx"
import FormField from "@/components/FormField.jsx"
import {
tasknameValidator
} from "@/validators.js"
import classNames from "classnames"
import { Form, Formik } from "formik"
import * as yup from "yup"

const defaultValidationSchema = yup.object().shape({
    taskname: tasknameValidator.required(),
})

const defaultInitialValues = {
  taskname: "",
}

const TaskForm = (props) => {
  const {
    className,
    onSubmit,
    initialValues = defaultInitialValues,
    validationSchema = defaultValidationSchema,
  } = props

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className={classNames("flex flex-col gap-4 p-4", className)}>
        <FormField name="taskname" label="Taskname" />
        <Button type="submit" className="mt-8">
          SAVE
        </Button>
      </Form>
    </Formik>
  )
}

export default TaskForm