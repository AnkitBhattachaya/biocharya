import CourseLayout from "@/components/CourseLayout";

const COURSE_DATA: Record<
  string,
  {
    title: string;
    tagline: string;
    image: string;
    videoUrl: string;
    price: number;
    points: string[];
  }
> = {
  "neet-biology-mastery": {
    title: "NEET Biology Target Batch",
    tagline: "The ultimate NEET preparation experience",
    image: "/courses/neet-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    price: 9999,
    points: [
      "Complete NEET syllabus with daily DPPs",
      "Topic-wise practice and mock tests",
      "Error analysis and performance tracking",
      "Strategy sessions and doubt-clearing support",
    ],
  },
  "class11-cbse-biology": {
    title: "Class 11 CBSE Biology",
    tagline: "Strong foundations for NEET and Boards",
    image: "/courses/class11-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    price: 3999,
    points: [
      "Detailed NCERT + NEET coverage",
      "Interactive DPPs and weekly tests",
      "Doubt-solving classes every week",
      "Application-based problem solving for NEET",
    ],
  },
  "class12-cbse-biology": {
    title: "Class 12 CBSE Biology",
    tagline: "Master Class 12 Biology with concept clarity",
    image: "/courses/class12-biology-course-biocharya.png",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    price: 4999,
    points: [
      "Complete Class 12 syllabus with NEET integration",
      "Crash revisions & conceptual reinforcement",
      "Previous year board & NEET question practice",
      "Mentorship and performance tracking",
    ],
  },
  "cbse-icse-biology": {
    title: "CBSE/ICSE Biology",
    tagline: "The foundation of excellence",
    image: "/courses/cbse-icse-biology-course.png",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    price: 2999,
    points: [
      "Chapter-wise concept learning for Class 9 & 10",
      "Board exam-focused question discussions",
      "Regular tests & assignments",
      "Doubt-solving sessions and personal mentorship",
    ],
  },
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = COURSE_DATA[params.slug];

  if (!course) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Course not found 😔
      </main>
    );
  }

  return (
    <CourseLayout
      title={course.title}
      tagline={course.tagline}
      image={course.image}
      videoUrl={course.videoUrl}
      price={course.price}
      slug={params.slug}
      points={course.points}
    />
  );
}
