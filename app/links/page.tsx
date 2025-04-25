import CardLink from "@/components/links/card-link";
import CardSquare from "@/components/links/card-square";
import Footer from "@/components/links/footer";
import Header from "@/components/links/header";
import Social from "@/components/links/social";

// app/links/page.tsx
export default function LinksPage() {
  return (
    <div className='container'>
      <main className='content'>
        <Header />
        <Social />
        <CardSquare />
        <CardLink />
        <Footer />
      </main>
    </div>
  )
}
