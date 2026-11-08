import { useMemo, useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Send, Copy, Check, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ?? 'saisanthosh05012006@gmail.com';
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE ?? '+91 7569532243';
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MIN_MESSAGE_LENGTH = 10;
const SUBMIT_COOLDOWN_MS = 30_000;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedAt, setLastSubmittedAt] = useState(0);
  const { toast } = useToast();

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      toast({
        title: 'Copy failed',
        description: `Your browser blocked clipboard access. ${type === 'email' ? 'Email' : 'Phone'}: ${text}`,
        variant: 'destructive',
      });
      return;
    }
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    toast({
      title: 'Copied to Clipboard!',
      description: `${type === 'email' ? 'Email address' : 'Phone number'} copied successfully.`,
    });
  };

  const emailServiceReady = useMemo(
    () => Boolean(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (formData.company.trim()) {
      return false;
    }

    if (name.length < 2 || name.length > 80) {
      toast({
        title: 'Error',
        description: 'Please enter a name between 2 and 80 characters.',
        variant: 'destructive',
      });
      return false;
    }

    if (!EMAIL_PATTERN.test(email) || email.length > 120) {
      toast({
        title: 'Error',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return false;
    }

    if (subject.length < 3 || subject.length > 120) {
      toast({
        title: 'Error',
        description: 'Please enter a subject between 3 and 120 characters.',
        variant: 'destructive',
      });
      return false;
    }

    if (message.length < MIN_MESSAGE_LENGTH || message.length > 2000) {
      toast({
        title: 'Error',
        description: `Please enter a message between ${MIN_MESSAGE_LENGTH} and 2000 characters.`,
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const now = Date.now();
      if (now - lastSubmittedAt < SUBMIT_COOLDOWN_MS) {
        throw new Error('RATE_LIMITED');
      }

      if (!emailServiceReady) {
        throw new Error('EMAIL_SERVICE_NOT_CONFIGURED');
      }

      const name = formData.name.trim();
      const email = formData.email.trim();
      const subject = formData.subject.trim();
      const message = formData.message.trim();
      const formattedTime = new Date().toLocaleString();

      // We now construct a detailed layout of the message including all metadata
      const detailedMessage = `Subject: ${subject}

Message:
${message}

----------------------------------------
Sender Contact Details:
Name: ${name}
Email: ${email}
Sent At: ${formattedTime}`;

      await emailjs.send(
        EMAILJS_CONFIG.serviceId!,
        EMAILJS_CONFIG.templateId!,
        {
          from_name: name,
          from_email: email,
          reply_to: email,
          subject,
          message: detailedMessage,
          to_email: CONTACT_EMAIL,
          name,
          email,
          title: subject,
          time: formattedTime,
          raw_message: message,
        },
        EMAILJS_CONFIG.publicKey!
      );

      setLastSubmittedAt(now);
      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
    } catch (error) {
      const isRateLimited = error instanceof Error && error.message === 'RATE_LIMITED';
      const isNotConfigured = error instanceof Error && error.message === 'EMAIL_SERVICE_NOT_CONFIGURED';

      toast({
        title: isRateLimited ? 'Please Wait Before Sending Again' : 'Failed to Send Message',
        description: isNotConfigured
          ? `Email delivery is not configured yet. Please email me directly at ${CONTACT_EMAIL}.`
          : isRateLimited
            ? 'Please wait a moment before submitting another message.'
            : `Please try again or contact me directly at ${CONTACT_EMAIL}.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-primary mb-3 text-balance">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations,
              or just having a conversation about technology and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-8 xl:gap-12">
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Get In Touch
              </h3>

              <div className="space-y-4 rounded-2xl border border-border/60 bg-card/60 p-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Email</p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Mail className="w-4 h-4 text-accent shrink-0" />
                      <a className="font-medium text-primary hover:text-accent transition-colors break-all text-sm sm:text-base" href={`mailto:${CONTACT_EMAIL}`}>
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-accent/15 hover:text-accent transition-colors shrink-0"
                      onClick={() => handleCopy(CONTACT_EMAIL, 'email')}
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Phone</p>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <Phone className="w-4 h-4 text-accent shrink-0" />
                      <a className="font-medium text-primary hover:text-accent transition-colors text-sm sm:text-base" href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}>
                        {CONTACT_PHONE}
                      </a>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-accent/15 hover:text-accent transition-colors shrink-0"
                      onClick={() => handleCopy(CONTACT_PHONE, 'phone')}
                      aria-label="Copy phone number"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">LinkedIn</p>
                  <div className="flex items-center gap-2.5 min-w-0 pt-1">
                    <Linkedin className="w-4 h-4 text-accent shrink-0" />
                    <a className="font-medium text-primary hover:text-accent transition-colors break-all text-sm sm:text-base" href="https://www.linkedin.com/in/sai-santhosh-gaddam" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/sai-santhosh-gaddam
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="text-lg font-semibold text-primary mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/santhoshh005"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-smooth"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sai-santhosh-gaddam"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-smooth"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/santhoshh__05?igsh=ZmkxcWV3NGhlb2V3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-smooth"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    aria-label="Email"
                    className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-smooth"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-elegant border-border/60">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Send Me a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="company">Company</label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          minLength={2}
                          maxLength={80}
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="transition-smooth focus:ring-2 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          maxLength={120}
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="transition-smooth focus:ring-2 focus:ring-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        minLength={3}
                        maxLength={120}
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="transition-smooth focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        minLength={MIN_MESSAGE_LENGTH}
                        maxLength={2000}
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, idea, or just say hello!"
                        className="transition-smooth focus:ring-2 focus:ring-accent resize-none"
                      />
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Prefer a direct conversation? Reach me at {CONTACT_PHONE} or {CONTACT_EMAIL}.
                    </p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-white transition-smooth"
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
