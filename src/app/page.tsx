import Image from 'next/image'

export default function Home() {
  return (
    <main>
    
     <div className="parentContainer">
        <div>
          <h1 className="Mainheading">Project</h1>
          <h1 className="Mainheading1">
            <span>LORUM</span>
          </h1>
        </div>
        <div>
          <Image src="/images/main.png" alt="mainPicture" className="mainPicture" width={770} height={829} />
        </div>
      </div>
      <div className="aboutContainer">
        <div>
          <Image src="/images/Rectangle 8.png" alt="picture" className="picture1" width={270} height={265} />
          <Image src="/images/Rectangle 10.png" alt="picture" className="picture2" width={270} height={140} />
        </div>
        <div>
          <Image src="/images/Rectangle 9.png" alt="picture" className="picture3" width={270} height={345} />
        </div>
        <div className="text-container">
          <h2 className="headings">About</h2>
          <p className="About-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.


          </p>
          <button className="readmore">Read More → </button>
        </div>
      </div>

      {/* Mission Statement Section */}
      <div className="parent-statement">
        <div>
          <h2>Main Focus/Mission Statement</h2>
        </div>
        <div className="child-statement">
          <div className="statement-1">
            <div>
              <Image src="/images/1.png" alt="1" className="one" width={50} height={50} />
            </div>
            <div className="statement-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
            </div>
          </div>
          <div className="statement-2">
            <div>
              <Image src="/images/2.png" alt="2" className="two" width={50} height={50} />
            </div>
            <div className="statement-text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="parent-project">
        <h2>Our Projects</h2>
        <div className="pic1-container">
          <Image src="/images/Rectangle 12.png" alt="pic" className="pro1" width={570} height={255} />
          <Image src="/images/project1.png" alt="pic" className="pro2" width={570} height={255} />
        </div>
        <div className="pic1-container">
          <Image src="/images/project2.png" alt="pic" className="pro3" width={270} height={255} />
          <Image src="/images/image 17.png" alt="pic" className="pro4" width={470} height={255} />
          <Image src="/images/image 18 (1).png" alt="pic" className="pro5" width={370} height={255} />
        </div>
        <button className="project-button">ALL PROJECTS → </button>
      </div>

      {/* Contact Form */}
      <div className="parent-form">
        <h2>Contact Us </h2>
        <div className="child-form">
          <div className="contact-length">
            <form action="">
              <input type="text" placeholder="Name" className="contact-form" required />
              <input type="tel" placeholder="Phone Number" className="contact-form" required />
              <input type="email" placeholder="E-mail" className="contact-form" required />
              <input type="text" placeholder="Interested In" className="contact-form" required />
              <textarea placeholder="Message" className="contact-form-message" required></textarea>
            </form>
          </div>
          <div>
            <Image src="/images/contact.png" alt="pictures" className="contact-pic" width={400} height={300} />
          </div>
        </div>
        <button className="contact-button">Send Email  → </button>
      </div>

    </main>
  )
}