import CourseCard from './CourseCard'
const SAMPLE = [
  {title:'NEET Target Batch', slug:'neet', price:9999, desc:'Full syllabus NEET batch'},
  {title:'Class 12 CBSE', slug:'class-12-cbse', price:4999, desc:'Board + NEET oriented'},
  {title:'Class 11 CBSE', slug:'class-11-cbse', price:3999, desc:'Strong fundamentals for NEET'}
]
export default function CourseGrid(){
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SAMPLE.map(c=> <CourseCard key={c.slug} course={c} />)}
    </div>
  )
}
