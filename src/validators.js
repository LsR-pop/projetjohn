import * as yup from "yup"

export const listnameValidator = yup
  .string()
  .matches(
    /^[a-z][a-z0-9_]{1,}$/,
    "Your list must start with a lower case letter and contain only digits or letters or `_`"
  )
  .label("List")

  export const tasknameValidator = yup
  .string()
  .matches(
    /^[a-z][a-z0-9_]{1,}$/,
    "Your task must start with a lower case letter and contain only digits or letters or `_`"
  )
  .label("Task")