import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Toaster } from '@/components/ui/sonner';
import { Globe, ActivitySquare, ShieldCheck, Linkedin, Twitter, Facebook, Loader2 } from 'lucide-react';
const registrationSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});
type RegistrationFormValues = z.infer<typeof registrationSchema>;
const featureCards = [
  {
    icon: Globe,
    title: 'Hereditary Risk is Global',
    description: 'Many expats live away from home yet carry inherited risks. Knowing your risk can mean early detection or prevention, no matter where you live.',
  },
  {
    icon: ActivitySquare,
    title: 'Access & Cost',
    description: 'Precision medicine is rapidly advancing in the Philippines. Services are increasingly available locally with faster turnaround and lower cost.',
  },
  {
    icon: ShieldCheck,
    title: 'Healthcare Planning',
    description: 'For expats concerned about insurance or long-term care, genetic insights can inform more cost-effective strategies and lifestyle choices.',
  },
];
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};
const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionSection = motion.section;
export function HomePage() {
  const registrationRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });
  const scrollToRegister = () => {
    registrationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  async function onSubmit(data: RegistrationFormValues) {
    setIsSubmitting(true);
    const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_2-9-3_aBcdEfGhIjKlMnOpQrStUvWxYzAbCdEfGhIjKlM/formResponse';
    const formData = new FormData();
    formData.append('entry.1880386695', data.name);
    formData.append('entry.1981033239', data.email);
    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      toast.success('Registration successful!', {
        description: 'Thank you for registering. We will send the Zoom link to your email shortly.',
      });
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Registration failed.', {
        description: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="bg-background text-foreground font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-x-3 sm:gap-x-4">
              <img src="https://i.ibb.co/L8y9T7h/rotary-logo.png" alt="Rotary Club of Manila Expats Speaker Series Logo" className="h-8 sm:h-10 w-auto" />
              <img src="https://i.ibb.co/zV1jJ0p/makati-med-logo.png" alt="Makati Medical Center Logo" className="h-7 sm:h-9 w-auto" />
            </div>
            <Button onClick={scrollToRegister} className="hidden sm:inline-flex bg-blue-800 hover:bg-blue-900 dark:bg-teal-500 dark:hover:bg-teal-600 text-white">
              Register Now
            </Button>
          </div>
        </div>
      </header>
      <main className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-slate-100 tracking-tight"
            >
              Genetic Insights: Charting a Path Toward a World Without Cancer
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground"
            >
              Join Dr. Frances Victoria “Ishka” Que for a vital discussion on how cancer genetics and precision medicine are shaping the future of healthcare.
            </MotionP>
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                onClick={scrollToRegister}
                size="lg"
                className="bg-blue-800 text-white shadow-lg hover:bg-blue-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out dark:bg-teal-500 dark:hover:bg-teal-600"
              >
                Register Now
              </Button>
              <div className="text-center sm:text-left bg-background/50 dark:bg-background/30 px-4 py-2 rounded-lg">
                <p className="font-semibold text-slate-800 dark:text-slate-200">October 2, 2025 | 19:00 PHT</p>
                <p className="text-sm text-muted-foreground">Virtual Session via Zoom</p>
              </div>
            </MotionDiv>
          </div>
        </section>
        {/* Speaker Section */}
        <MotionSection
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 md:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1170&auto=format&fit=crop"
                alt="Dr. Frances Victoria 'Ishka' Que"
                className="rounded-lg shadow-2xl object-cover w-full aspect-[4/5]"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-800 dark:text-teal-400">Meet the Speaker</h2>
              <h3 className="mt-2 text-2xl font-semibold text-slate-800 dark:text-slate-200">Dr. Frances Victoria “Ishka” Que, MD</h3>
              <p className="mt-1 text-lg text-muted-foreground">Medical Oncology Specialist & Cancer Genetics Expert</p>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>Dr. Que is a leading Medical Oncology Specialist at the Makati Medical Center with a subspecialty in Cancer Genetics & Genomics. After completing her fellowship training in cancer genomics, she has become one of the foremost oncologists in the Philippines practicing precision oncology.</p>
                <p>Her research includes work on the prevalence of pathogenic germline variants among Filipino patients, with published studies showing around 11% prevalence in certain groups, underscoring significant family risk profiles.</p>
              </div>
            </div>
          </div>
        </MotionSection>
        {/* Why This Matters Section */}
        <MotionSection
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-slate-50 dark:bg-blue-950/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-800 dark:text-teal-400">Why This Matters for Expats</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Understand the unique considerations for managing hereditary risk and healthcare while living abroad.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {featureCards.map((feature, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-blue-100 dark:bg-teal-900 p-3 rounded-full">
                      <feature.icon className="w-6 h-6 text-blue-800 dark:text-teal-400" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </MotionSection>
        {/* Registration Section */}
        <MotionSection
          ref={registrationRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 md:py-24"
        >
          <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-800 dark:text-teal-400">Register for the Event</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Secure your spot for this free virtual session. The Zoom link will be sent to your email upon registration.
              </p>
            </div>
            <Card className="mt-10 shadow-2xl">
              <CardContent className="p-6 sm:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan dela Cruz" {...field} className="text-lg p-6" />
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
                          <FormLabel className="text-lg">Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan.delacruz@email.com" {...field} className="text-lg p-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-lg p-6 bg-blue-800 text-white shadow-lg hover:bg-blue-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-in-out dark:bg-teal-500 dark:hover:bg-teal-600"
                    >
                      {isSubmitting ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : 'Submit Registration'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </MotionSection>
      </main>
      <footer className="bg-slate-100 dark:bg-slate-900 border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center flex-col sm:flex-row gap-6">
            <div className="text-center sm:text-left">
              <p className="text-base text-muted-foreground">&copy; {new Date().getFullYear()} Rotary Club of Manila Expats. All rights reserved.</p>
              <p className="text-sm text-muted-foreground/80">Built with ❤️ at Cloudflare</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/rotary-international/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin /></a>
              <a href="https://twitter.com/rotary" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter /></a>
              <a href="https://www.facebook.com/rotary/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook /></a>
            </div>
          </div>
        </div>
      </footer>
      <Toaster richColors position="top-right" />
    </div>
  );
}