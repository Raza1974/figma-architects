"use client"; // Marking this component as a Client Component
import Image from 'next/image';
import Link from 'next/link';

export default function MainProjects() {
  return (
    <div className="projects-container">
      <div className="gallery-heading">
      <h1 className="Mainheading">Our</h1>
          <h1 className="Mainheading1">
         <span>Projects</span>
      </h1>
        {/* First Project */}
        <div className="sample-project">
          <div className="project-container">
            <div className="projec-pic">
              <Image
                src="/images/image 30.png"
                alt="Project Image 1"
                className="picture4"
                width={670}  // Increased width
                height={435} // Increased height
              />
            </div>
            <div className="text-container">
              
              <h2 className="headings">Sample Project 1</h2>
              
              <p className="About-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
              </p>
              <Link href="/Sample/Project1">
                <button className="readmore">Read More →</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="sample-project">
          <div className="project-container">
            <div className="projec-pic">
              <Image
                src="/images/image 33 (1).png"
                alt="Project Image 2"
                className="picture4"
                width={670}  // Increased width
                height={435} // Increased height
              />
            </div>
            <div className="text-container">
              <h2 className="headings">Sample Project 2</h2>
              <p className="About-text">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>
              <Link href="/Sample/Project2">
                <button className="readmore">Read More →</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Third Project */}
        <div className="sample-project">
          <div className="project-container">
            <div className="projec-pic">
              <Image
                src="/images/image 32.png"
                alt="Project Image 3"
                className="picture4"
                width={670}  // Increased width
                height={435} // Increased height
              />
            </div>
            
            <div className="text-container">
              <h2 className="headings">Sample Project 3</h2>
              <p className="About-text">
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
              </p>
              <Link href="/Sample/Project3">
                <button className="readmore">Read More →</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
