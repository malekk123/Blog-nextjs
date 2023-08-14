import Link from "next/link"
export default function ArticlesPage() {
  return (
    <div>
      <h3>ArticlesPage </h3>
       <Link href="/posts">
         <button >Take me to the post page</button>
       </Link>
    
    </div>
  )
}
