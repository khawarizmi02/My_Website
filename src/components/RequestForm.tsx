import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useRef } from "react";

import styles from "../style";
import { client } from "../client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  contact: z.string().min(1, { message: "Contact is required" }),
  pest: z.string().min(1, { message: "Pest type is required" }),
  comment: z.string().min(1, { message: "Comment is required" }),
});

const RequestForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: data.name,
      email: data.email,
      contactNum: data.contact,
      pestType: data.pest,
      comment: data.comment,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                      className={`${styles.paragraph2} ${styles.TextArea} border-2 border-black`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className={`${styles.paragraph2} ${styles.TextArea} border-2 border-black`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Contact"
                      {...field}
                      className={`${styles.paragraph2} ${styles.TextArea} border-2 border-black`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pest"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Pest Type"
                      {...field}
                      className={`${styles.paragraph2} ${styles.TextArea} border-2 border-black`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Comment"
                      {...field}
                      className={`${styles.paragraph2} ${styles.TextArea} min-h-[214px] pt-2 border-2 border-black`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="button mt-5">
              <p className="text-cream font-extralight text-[18px]">
                {!loading ? "Send Message" : "Sending..."}
              </p>
            </Button>
          </form>
        </Form>
      )}
    </section>
  );
};

export default RequestForm;
