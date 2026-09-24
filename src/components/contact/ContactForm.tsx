import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import type { ContactFormValues } from "../../data/contact";
import { ContactButton } from "./ContactButton";
import { PhoneField } from "./PhoneField";
import { SelectField } from "./SelectField";
import { TextField } from "./TextField";
import styles from "./ContactForm.module.css";

type FocusKey = keyof ContactFormValues | null;

function SendIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>({
    firstName: "",
    interest: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<FocusKey>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        className={styles.success}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        role="status"
      >
        <div className={styles.successIcon}>
          <SendIcon />
        </div>
        <h3 className={styles.successTitle}>You&apos;re in the queue.</h3>
        <p className={styles.successCopy}>
          Our experts will reach out within 24 hours. Get ready to level up.
        </p>
      </motion.div>
    );
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate={false}>
      <div className={styles.row}>
        <TextField
          id="contact-first-name"
          label="Full Name"
          type="text"
          name="firstName"
          autoComplete="name"
          placeholder="Ranveer Singh"
          required
          value={values.firstName}
          focused={focused === "firstName"}
          onChange={(event) =>
            setValues({ ...values, firstName: event.target.value })
          }
          onFocus={() => setFocused("firstName")}
          onBlur={() => setFocused(null)}
        />
        <SelectField
          id="contact-interest"
          label="What would you like to enquire about?"
          value={values.interest}
          focused={focused === "interest"}
          onChange={(interest) => setValues({ ...values, interest })}
          onFocus={() => setFocused("interest")}
          onBlur={() => setFocused(null)}
        />
      </div>
      <div className={styles.rowBottom}>
        <PhoneField
          id="contact-phone"
          label="Phone No."
          name="phone"
          placeholder="00000 00000"
          required
          maxLength={10}
          value={values.phone}
          focused={focused === "phone"}
          onChange={(event) =>
            setValues({
              ...values,
              phone: event.target.value.replace(/\D/g, ""),
            })
          }
          onFocus={() => setFocused("phone")}
          onBlur={() => setFocused(null)}
        />
        <TextField
          id="contact-email"
          label="E-mail"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="ranveersingh@email.com"
          required
          value={values.email}
          focused={focused === "email"}
          onChange={(event) =>
            setValues({ ...values, email: event.target.value })
          }
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
        />
      </div>
      <div className={styles.actions}>
        <ContactButton>Submit</ContactButton>
        <div className={styles.note}>
          <ClockIcon />
          <p>Our experts revert back usually within 24 hours</p>
        </div>
      </div>
    </form>
  );
}
