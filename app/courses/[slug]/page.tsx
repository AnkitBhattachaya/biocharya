"use client";

import CourseLayout from "@/components/CourseLayout";

export default function CourseDetails({ params }: { params: { slug: string } }) {
  const courses = [
    {
      slug: "neet-biology-mastery",
      title: "NEET Biology Mastery",
      tagline: "Master NEET Biology like never before",
      image: "/courses/neet-biology-course-biocharya.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      points: [
        "Complete NEET syllabus coverage",
        "Topic-wise DPPs and PYQs",
        "Live mentorship & doubt sessions",
      ],
      price: 9999,
    },
    {
      slug: "class12-cbse-biology",
      title: "Class 12 CBSE Biology",
      tagline: "Board + NEET focused learning",
      image: "/courses/class12-biology-course-biocharya.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      points: [
        "Concept-first learning with NCERT focus",
        "Weekly practice tests and chapter notes",
        "Doubt clearing and mentor guidance",
      ],
      price: 4999,
    },
    {
      slug: "class11-cbse-biology",
      title: "Class 11 CBSE Biology",
      tagline: "Strong foundations for NEET and Boards",
      image: "/courses/class11-biology-course-biocharya.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      points: [
        "Deep conceptual clarity from basics",
        "Weekly chapter-wise tests and assignments",
        "Bridge course for NEET foundation",
      ],
      price: 3999,
    },
    {
      slug: "icse-wb-biology",
      title: "CBSE/ICSE Biology",
      tagline: "The foundation of excellence",
      image: "/courses/cbse-icse-biology-course-biocharya.png",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      points: [
        "Complete Board syllabus coverage",
        "Interactive concept-based lessons",
        "Focus on practical applications",
      ],
      price: 2999,
    },
  ];

  const course = courses.find((c) => c.slug === params.slug);

  if (!course) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <p className="text-lg font-medium">Course not found 😔</p>
      </div>
    );
  }

  return <CourseLayout {...course} />;
}
