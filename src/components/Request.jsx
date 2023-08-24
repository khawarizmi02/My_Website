import React from 'react'
import { useState } from 'react'

import styles from '../style';

const Request = () => {

  const [formData, setFormData] = useState({ name: '', email: '', contact:'', pest: '', comment: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, contact, pest, comment } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      type: formData.pest,
      comment: formData.comment,
    };

    console.log(contact);

  };
  
  return (
    <section id="about" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}> 
      <div className='center'>
        <h1 className='text-center text-primary text-[50px] uppercase font-extrabold leading-relaxed'
        >request a free quote</h1>

        <p className={`${styles.paragraph3} max-w-[967px] mt-5`}>
          Contact us now for immediate and long-lasting solutions.
        </p>
      </div>

      <div className='flex flex-col justify-center items-center '>
        <input 
          type='text'
          placeholder='Name'
          className={`${styles.paragraph2} ${styles.TextArea}`}
          name="name" value={name} onChange={handleChangeInput}
        />
        <input 
          type='email'
          placeholder='Email'
          className={`${styles.paragraph2} ${styles.TextArea}`}
          name="email" value={email} onChange={handleChangeInput}
        />
        <input 
          type='text'
          placeholder='Contact'
          className={`${styles.paragraph2} ${styles.TextArea}`}
          name="contact" value={contact} onChange={handleChangeInput}
        />
        <input 
          type='text'
          placeholder='Pest Type'
          className={`${styles.paragraph2} ${styles.TextArea}`}
          name="pest" value={pest} onChange={handleChangeInput}
        />
        <textarea 
          placeholder='Comment(required)'
          className={`${styles.paragraph2} ${styles.TextArea}  min-h-[214px] pt-2`}
          name='comment' value={comment} onChange={handleChangeInput}
        />

        
        <button 
          type="button" 
          className="button mt-5" 
          onClick={handleSubmit}>
          <p className='text-cream font-extralight text-[18px]'> 
            {!loading ? 'Send Message' : 'Sending...'} 
          </p>
        </button>
      </div>
    </section>
  )
}

export default Request
