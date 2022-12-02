import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { ThemeContext } from '../../context';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1fzzovz',
        'template_a6qmu8h',
        formRef.current,
        'yVAK7vVwphcum35VO'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +1 2345 678 90
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              tafitahery@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              245 King Street, Touterie Victoria 8520 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && '#333' }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              style={{ backgroundColor: darkMode && '#333' }}
            />
            <button>Submit</button>
            {done && 'Thank you...'}
          </form>
        </div>
      </div>
    </div>
  );
}
