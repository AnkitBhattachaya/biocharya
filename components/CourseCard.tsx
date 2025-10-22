import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform hover:-translate-y-1 border border-gray-100">
      <div className="relative w-full h-56 group">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority
          unoptimized={false}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition" />
        <div className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-green-700 px-3 py-1 rounded-lg shadow-md">
          ₹{course.price}
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold text-green-800">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm">{course.desc}</p>

        <div className="flex flex-wrap gap-3 mt-3">
          <Link
            href={`/courses/${course.slug}`}
            className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
          >
            View Details
          </Link>
          <a
            href={`https://wa.me/917980862920?text=Hi%20Ankit!%20I%20want%20to%20register%20for%20the%20${encodeURIComponent(
              course.title
            )}%20course.`}
            target="_blank"
            className="border border-green-700 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition"
          >
            Register Free
          </a>
        </div>
      </div>
    </div>
  );
}
