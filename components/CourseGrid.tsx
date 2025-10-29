import CourseCard from './CourseCard';

const SAMPLE = [
  {
    title: "NEET Target Batch",
    slug: "neet-biology-mastery",
    price: 9999,
    desc: "Full syllabus NEET batch",
    image: "/courses/neet-biology-course-biocharya.png",
  },
  {
    title: "Class 12 CBSE Biology",
    slug: "class12-cbse-biology",
    price: 4999,
    desc: "Board + NEET oriented",
    image: "/courses/class12-biology-course-biocharya.png",
  },
  {
    title: "Class 11 CBSE Biology",
    slug: "class11-cbse-biology",
    price: 3999,
    desc: "Strong fundamentals for NEET",
    image: "/courses/class11-biology-course-biocharya.png",
  },
  {
    title: "CBSE/ICSE Biology",
    slug: "cbse-icse-biology",
    price: 2999,
    desc: "Board-focused foundation course",
    image: "/courses/cbse-icse-biology.png",
  },
];

export default function CourseGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SAMPLE.map((c) => (
        <CourseCard key={c.slug} course={c} />
      ))}
    </div>
  );
}
