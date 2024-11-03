"use client"; // Marking this component as a Client Component

import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <div className="gallery-wrapper"> 
      <div className="gallery-heading">
        <h1 className="Mainheading">Photo</h1>
        <h1 className="Mainheading1">
          <span>Gallery</span>
        </h1> 
      </div>

      {/* Gallery Images */}
      <div className="pic1-container">
        <Image src="/images/Rectangle 22.png" alt="Project 1" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 23.png" alt="Project 2" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 24.png" alt="Project 3" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 25.png" alt="Project 4" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 26.png" alt="Project 5" className="pro-image" width={210} height={260} />
      </div>

      <div className="pic1-container">
        <Image src="/images/Rectangle 27.png" alt="Project 6" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 28.png" alt="Project 7" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 29.png" alt="Project 8" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 30.png" alt="Project 9" className="pro-image" width={210} height={260} />
        <Image src="/images/Rectangle 31.png" alt="Project 10" className="pro-image" width={210} height={260} />
      </div>

      {/* Navigation Buttons with Arrows */}
      <div className="navigation-buttons">
        <Link href="/">
          <button className="nav-button">←</button> {/* Left Arrow for Previous */}
        </Link>
        <Link href="/Gallery">
          <button className="nav-button">→</button> {/* Right Arrow for Next */}
        </Link>
      </div>
    </div>
  );
}
