import { useState, useRef } from "react";

import styles from "../style";
import { client } from "../client";

const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    pest: "",
    comment: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, contact, pest, comment } = formData;

  const requestRef = useRef<HTMLDivElement>(null);

  const handleChangeInput = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      contactNum: formData.contact,
      pestType: formData.pest,
      comment: formData.comment,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent default form submission
    handleSubmit();
  };

  return (
    <section
      ref={requestRef}
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="center">
        <h1 className="text-center text-mainBlue text-[50px] uppercase font-extrabold leading-relaxed">
          request a free quote
        </h1>

        <p className={`${styles.paragraph3} max-w-[967px] mt-5`}>
          Contact us now for immediate and long-lasting solutions.
        </p>
      </div>

      {isFormSubmitted ? (
        <div>
          <h3 className={`${styles.heading3} pt-5 mt-5`}>
            Thank you for getting in touch!
          </h3>
        </div>
      ) : (
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col justify-center items-center "
        >
          <input
            required
            type="text"
            placeholder="Name"
            className={`${styles.paragraph2} ${styles.TextArea}`}
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          <input
            required
            type="email"
            placeholder="Email"
            className={`${styles.paragraph2} ${styles.TextArea}`}
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <input
            required
            type="text"
            placeholder="Contact"
            className={`${styles.paragraph2} ${styles.TextArea}`}
            name="contact"
            value={contact}
            onChange={handleChangeInput}
          />
          <input
            required
            type="text"
            placeholder="Pest Type"
            className={`${styles.paragraph2} ${styles.TextArea}`}
            name="pest"
            value={pest}
            onChange={handleChangeInput}
          />
          <textarea
            required
            placeholder="Comment(required)"
            className={`${styles.paragraph2} ${styles.TextArea}  min-h-[214px] pt-2`}
            name="comment"
            value={comment}
            onChange={handleChangeInput}
          />

          <button type="submit" className="button mt-5">
            <p className="text-cream font-extralight text-[18px]">
              {!loading ? "Send Message" : "Sending..."}
            </p>
          </button>
        </form>
      )}
    </section>
  );
};

export default Request;
