import Image from 'next/image'


export default function footer (){
    return (
   
   <footer className="parent-footer">
   <div className="image">
     <Image src="/images/Footer-pic.png" alt="picture" className="footer-pic" width={200} height={100} />
   </div>
   <div className="info">
     <h3>Information</h3>
     <ul>
       <li>Main</li>
       <li>Gallery</li>
       <li>Projects</li>
       <li>Certifications</li>
       <li>Contact</li>
     </ul>
   </div>
   <div className="Contact">
     <h3>Contacts</h3>
     <div className="footer-icon-text">
       <Image src="/images/Vector.png" alt="" className="footer-icon" width={20} height={20} />
       <p>1234 Sample Street Austin Texas 78704 </p>
     </div>
     <div className="footer-icon-text">
       <Image src="/images/footer-contact.png" alt="" className="footer-icon" width={20} height={20} />
       <p>512.333.2222</p>
     </div>
     <div className="footer-icon-text">
       <Image src="/images/footer-gmail.png" alt="" className="footer-icon" width={20} height={20} />
       <p>sampleemail@gmail.com </p>
     </div>
   </div>
   <div className="socialmedia">
     <h3>Social Media</h3>
     <div className="footer-icons">
       <Image src="/images/facebook.png" alt="" className="social-icon" width={30} height={30} />
       <Image src="/images/twitter.png" alt="" className="social-icon" width={30} height={30} />
       <Image src="/images/LinkedIn.png" alt="" className="social-icon" width={30} height={30} />
       <Image src="/images/pininterest.png" alt="" className="social-icon" width={30} height={30} />
     </div>
   </div>
 </footer>

  
    );
}