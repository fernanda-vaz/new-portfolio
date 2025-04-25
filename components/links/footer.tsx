import Link from "next/link";

export default function Footer() {
  return (
    <footer className='w-full p-4 text-xs mt-4'>
      <div className='flex flex-col items-center justify-between gap-1 text-center'>
        <p>&copy; {new Date().getFullYear()} | Todos os direitos reservados.</p>
        <p>
          Desenvolvido por @
          <Link
            href={'https://www.linkedin.com/in/vaz-fernanda/'}
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold text-[#6564db]'
          >
            Fernanda Vaz
          </Link>
        </p>
      </div>
    </footer>
  )
}
