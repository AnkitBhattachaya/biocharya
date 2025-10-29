"use client";

import CourseLayout from "@/components/CourseLayout";

interface Course {
  title: string;
  tagline: string;
  image: string;
  videoUrl: string;
  points: string[];
  price: number;
}

const courseData: Record<string, Course> = {
  "neet-biology-mastery": {
    title: "NEET Biology Mastery",
    tagline: "Crack NEET with conceptual clarity and precision.",
    image: "/courses/neet-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    points: [
      "Complete NEET syllabus coverage",
      "Concept-based NCERT learning",
      "Live tests & personal guidance",
    ],
    price: 9999,
  },
  "class12-cbse-biology": {
    title: "Class 12 CBSE Biology",
    tagline: "Ace your boards with crystal-clear concepts.",
    image: "/courses/class12-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    points: [
      "Complete NCERT coverage with examples",
      "Board exam preparation & PYQs",
      "Weekly tests and model papers",
    ],
    price: 4999,
  },
  "class11-cbse-biology": {
    title: "Class 11 CBSE Biology",
    tagline: "Build your foundation for NEET and beyond.",
    image: "/courses/class11-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    points: [
      "Conceptual learning with interactive examples",
      "Regular assignments & quizzes",
      "Weekly mentor sessions",
    ],
    price: 3999,
  },
  "cbse-icse-biology": {
    title: "CBSE / ICSE Biology",
    tagline: "Strong foundation for boards and competitive exams.",
    image: "/courses/cbse-icse-biology-course.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    points: [
      "Board-specific conceptual clarity",
      "Smart notes & PYQ practice",
      "Doubt clearing + interactive sessions",
    ],
    price: 2999,
  },
};

export default function CourseDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courseData[params.slug];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <p className="text-2xl font-semibold text-gray-600">
          ⚠️ Course not available. Try another course.
        </p>
      </div>
    );
  }

  return <CourseLayout {...course} slug={params.slug} />;
}
