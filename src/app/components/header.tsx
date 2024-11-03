import Image from 'next/image'
import Link from 'next/link'

export default function header (){
    return (
        <header>
         <div className="parentContainer">
        <div className="header-picture">
          <Image src="/images/logo.png" alt="headerpicture" className="picture" width={500} height={300} />
        </div>
        <nav>
          <ul className="header-text">
            <li><Link href="/" className="mainheader">MAIN</Link></li>
            <li><Link href="/Gallery">GALLERY</Link></li>
            <li><Link href="/MainProjects">PROJECTS</Link></li>
            <li><Link href="/Certifications">CERTIFICATIONS</Link></li>
            <li><Link href="/contact-informations">CONTACTS</Link></li>
          </ul>
        </nav>
      </div>

        </header>
    )
}
