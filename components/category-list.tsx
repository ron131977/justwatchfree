import Link from "next/link"
import { Film, History, Tv, Languages , Cpu, Users, ShieldAlert, Trophy, Globe } from "lucide-react"

const categories = [
  {
    name: "Movies",
    icon: <Film className="h-6 w-6" />,
    href: "/category/movie",
    color: "bg-green-200 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    name: "Tv Show",
    icon: <Tv className="h-6 w-6" />,
    href: "/category/tvshow",
    color: "bg-blue-200 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    name: "Adult",
    icon: <ShieldAlert className="h-6 w-6" />,
    href: "/category/adult",
    color: "bg-red-200 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    name: "Hindi Dubbed",
    icon: <Languages className="h-6 w-6" />,
    href: "/category/Hindi-Dubbed",
    color: "bg-yellow-200 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  
]

export function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={category.href}
          className="flex flex-col items-center justify-center p-6 rounded-lg transition-all hover:scale-105 hover:shadow-md"
        >
          <div className={`p-4 rounded-full ${category.color} mb-3`}>{category.icon}</div>
          <span className="font-medium">{category.name}</span>
        </Link>
      ))}
    </div>
  )
}

