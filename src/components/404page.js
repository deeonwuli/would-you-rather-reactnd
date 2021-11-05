import { Link } from "react-router-dom"

export default function Page404 () {
  return (
    <div className="w-screen h-screen bg-pink-100 text-4xl flex flex-col justify-center items-center font-bold space-y-4 px-4">
      <p className="text-center">Uh oh. It looks like this page you're trying to visit does not exist.</p>
      <Link to="/" className="bg-pink-600 text-white text-xl px-5 py-2 rounded-xl">
        Go back home
      </Link>
    </div>
  )
}