"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CourseLayout from "@/components/CourseLayout";

const courses = {
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
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    if (params?.slug && typeof params.slug === "string") {
      const foundCourse = courses[params.slug];
      setCourse(foundCourse || null);
    }
  }, [params]);

  if (!params?.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading course details...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        ⚠️ Course not available. Please go back and try another course.
      </div>
    );
  }

  return <CourseLayout {...course} slug={params.slug} />;
}
