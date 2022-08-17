import { Link } from 'react-router-dom'

export default function Card({title, desc, link}) {
  return (
    <Link to={link}>
      <div className="flex max-w-sm bg-white shadow rounded-lg overflow-hidden m-4 hover:rotate-1 transition-all cursor-pointer">
        <div className="p-4">
          <h1 className="text-gray-900 font-bold text-2xl">
            { title }
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            { desc }
          </p>
        </div>
      </div>
    </Link>
  )
}