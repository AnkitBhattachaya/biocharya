"use client";

import { useParams } from "next/navigation";
import CourseLayout from "@/components/CourseLayout";

const courseData: Record<string, any> = {
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
    image: "/courses/cbse-icse-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    points: [
      "Board-specific conceptual clarity",
      "Smart notes & PYQ practice",
      "Doubt clearing + interactive sessions",
    ],
    price: 2999,
  },
};

export default function CourseDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const course = courseData[slug];

  if (!course) {
    console.warn("Slug not found:", slug);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-600">
        <p className="text-lg font-medium">⚠️ Course not available. Try another course.</p>
      </div>
    );
  }

  return <CourseLayout {...course} slug={slug} />;
}
