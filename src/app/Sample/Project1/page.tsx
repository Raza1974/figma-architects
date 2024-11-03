"use client"; // Marking this component as a Client Component

import Image from 'next/image';

export default function Project1() {
  return (
    <section className="gallery-heading">
      <h1 className="Mainheading">Sample1</h1>
      <h1 className="Mainheading1">
        <span>Projects</span>
      </h1>
      <div>
        {/* You can add any introductory content here if needed */}
      </div>
      <div className="image-container">
        <Image 
          src="/images/image 33 (2).png" 
          alt="Description of Project 1" 
          className="project-pic" 
          width={1170} 
          height={435} 
        />
      </div>
      <div className="text-container">
        <div className="flex-content">
          <Image 
            src="/images/image 33 (2).png" 
            alt="Description of Project 1" 
            className="project-pic1" 
            width={419} 
            height={428} 
          />
          <div className="text-content">
            <h2 className="headings">Sample Project 1</h2>
            <p className="About-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
