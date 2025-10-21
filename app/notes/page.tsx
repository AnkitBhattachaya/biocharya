import NotesClient from "./NotesClient";

export const metadata = {
  title: "NEET Biology Notes | Class 11 & 12 | BioCharya by Ankit Bhattacharya",
  description:
    "Free NEET Biology Notes for Class 11 & 12 by Ankit Bhattacharya — clear, concise, and concept-driven notes for CBSE, ICSE, and NEET aspirants.",
  keywords: [
    "NEET Biology Notes",
    "Class 11 Biology Notes",
    "Class 12 Biology Notes",
    "NEET 2026 Notes PDF",
    "NEET Biology Handwritten Notes",
    "Ankit Bhattacharya Biology Notes",
    "BioCharya NEET Notes",
    "CBSE Biology Notes",
  ],
  openGraph: {
    title: "NEET Biology Notes | Class 11 & 12 | BioCharya",
    description:
      "Concept-based and exam-focused NEET Biology Notes for Classes 11 & 12 — created by Ankit Bhattacharya, Kolkata’s top biology mentor.",
    url: "https://biocharya.in/notes",
    siteName: "BioCharya",
    images: [
      {
        url: "https://biocharya.in/og-notes.jpg",
        width: 1200,
        height: 630,
        alt: "BioCharya NEET Notes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download NEET Biology Notes | BioCharya",
    description:
      "Free NEET Biology Notes for Class 11 & 12 by Ankit Bhattacharya — Conceptual, crisp & exam-ready.",
    images: ["https://biocharya.in/og-notes.jpg"],
  },
};

export default function NotesPage() {
  return <NotesClient />;
}
