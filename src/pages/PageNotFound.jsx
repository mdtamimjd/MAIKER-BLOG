import { Link } from "react-router-dom"
const PageNotFound = () => {
  return (
    <div>
        <div className="w-4/5 mx-auto flex flex-col justify-center items-center h-screen gap-4">
            <h1 className="font-bold text-7xl text-orange-500">404</h1>
            <p className="font-medium text-xl">Page not found</p>
            <Link to="/"><button className="font-medium text-lg px-6 py-2 bg-zinc-100 rounded-md hover:ring-2 hover:ring-zinc-500">Back</button></Link>
        </div>
    </div>
  )
}

export default PageNotFound