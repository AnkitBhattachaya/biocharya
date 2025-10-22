import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }: any) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative w-full h-56">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-green-800">
          {course.title}
        </h3>
        <p className="text-gray-600 text-sm">{course.desc}</p>
        <p className="font-bold text-green-700 mt-2">₹{course.price}</p>
        <div className="flex gap-3 mt-3">
          <Link
            href={`/courses/${course.slug}`}
            className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
          >
            View Details
          </Link>
          <Link
            href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%20want%20to%20know%20more%20about%20your%20courses."
            target="_blank"
            className="border border-green-700 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
