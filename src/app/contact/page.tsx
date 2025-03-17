"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, ValidationError } from '@formspree/react';
import { Textarea } from "@/components/ui/textarea";
import { INFO } from "@/consts/info";
import { motion } from "framer-motion";

export default function Contact() {
  const [state, handleSubmit] = useForm("moragnqx");

  function handleFormSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);

    handleSubmit({
      firstName: data.get('firstname')?.toString() || '',
      lastName: data.get('lastname')?.toString() || '',
      email: data.get('email')?.toString() || '',
      phone: data.get('phone')?.toString() || '',
      message: data.get('message')?.toString() || '',
    });
  }

  if (state.succeeded) {
      return (
        <div className="container mx-auto text-center my-16">
          <h1 className="text-4xl text-accent">Message sent!</h1>
          <p className="text-xl text-white/80 mt-16">
            Thanks for reaching out! We will get back to you soon.
          </p>
        </div>
      )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form 
              className="flex flex-col gap-6 p-10 bg-gray_dark rounded-xl"
              onSubmit={handleFormSubmit}
            >
              <h3 className="text-4xl text-accent">
                {`Let's work together`}
              </h3>
              <p className="text-white/60">
                Contact us for more information about our services and how we can help you.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname" 
                  type="firstname"
                  placeholder="First Name"
                />
                <Input 
                  id="lastname"
                  name="lastname"
                  type="lastname"
                  placeholder="Last Name"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                />
                <Input 
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Phone number"
                />
              </div>
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="fe">Frontend Development</SelectItem>
                    <SelectItem value="wd">Web Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}
              <Textarea 
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type your Message"
              />
              <Button
                size="md"
                className="max-w-40"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {INFO.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-6"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-gray_dark text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">
                      {<item.icon />}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
