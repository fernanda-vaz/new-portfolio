import { AboutSection } from '@/components/about'
import { ContactSection } from '@/components/contact'
import FeatureCarousel from '@/components/feature-carousel'
import HeroSection from '@/components/hero'
import Marquee from '@/components/marquee'
import { ProjectsSection } from '@/components/projects'
import SkillsSection from '@/components/skills'
import { Portfolio } from '@/lib/interface'

export default async function Home() {
  const portfolio = (await import('@/infos.json')).default

  const {
    categories,
    social_handle,
    about,
    services,
    features,
    projects,
    skills,
  } = portfolio as Portfolio

  return (
    <div className='flex min-h-screen flex-col'>
      <main className='flex-1'>
        <HeroSection about={about} />
        <AboutSection about={about} services={services} />
        <FeatureCarousel features={features} />
        <SkillsSection categories={categories} />
        <ProjectsSection projects={projects} />
        <Marquee skills={skills} />
        <ContactSection social={social_handle} />
      </main>
    </div>
  )
}
