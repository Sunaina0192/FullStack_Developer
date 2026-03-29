import React from 'react'

const Contact = () => {
  return (
    <div>
       <section id="contact" class="contact-container">
     <h2>CONTACT WITH US:</h2>
     <p>📧 Email: <a href="mailto:skksunaina0192@gmail.com">skksunaina0192@gmail.com</a></p>
     <p>📱 WhatsApp: <a href="https://wa.me/917973205877" target="_blank" >Click to Chat</a></p>
     <p>📞 Mobile: 7973205877</p>
   </section>
    <form class="contact-form" style="margin-top: 50px;">
        <input type="text" placeholder="Your Name" required/>
        <input type="email" placeholder="Your Email" required/>
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="Submit">Send Message</button>
    </form>

    </div>
  )
}

export default Contact
