"use client"; // Marking this component as a Client Component

import Image from 'next/image';


export default function SampleProject1() {
  return (
    
        <div className="gallery-heading">
        <h1 className="MainTopic">Sample</h1>
        <h1 className="MainTopicbelow">
            <span>Project-1</span>
        </h1>
        <div>
            <Image src="" alt="project-pic" className="project-pic" width={500} height={300} />
            </div>
    </div>

  );
}