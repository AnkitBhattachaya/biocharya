import Link from 'next/link'
export default function CourseCard({course}:{course:any}){
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <div className="h-40 bg-gray-100 rounded" />
      <h3 className="mt-3 font-semibold">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <div className="font-bold">₹{course.price}</div>
        <div className="flex gap-2">
          <Link href={`/courses/${course.slug}`} className="text-sm px-3 py-1 border rounded">View Details</Link>
          <button className="text-sm px-3 py-1 bg-accent text-white rounded">Buy Now</button>
        </div>
      </div>
    </div>
  )
}
