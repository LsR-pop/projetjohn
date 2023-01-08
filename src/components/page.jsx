import Link from "@/components/Link"
import classNames from "classnames"
import Head from "next/head.js"
import { useRouter } from "next/router.js"

const NavLink = (props) => {
  const { asPath } = useRouter()

  return (
    <Link
      {...props}
      className={classNames("text-lg font-semibold", {
        underline: asPath === props.href,
      })}
    />
  )
}

const Page = (props) => {
  const { title = "Task List", children } = props

  return (
    <main className="flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex p-4 justify-between items-center border-b">
        <h1 className="text-2xl font-bold italic">TASK LIST</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <NavLink href="/">List</NavLink>
            </li>
            <li>
              <NavLink href="/users/create">Add task</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section>{children}</section>
    </main>
  )
}

export default Page