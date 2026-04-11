import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Immigration Inquiry - ${formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:lancanimmigration@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* ═══════ PAGE HERO ═══════ */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />

        <div className="relative page-container">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-cyan-400">Contact</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-white/50 max-w-2xl">
              Get in touch for a free assessment of your immigration eligibility. We're here to help you every step of the way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ CONTACT CONTENT ═══════ */}
      <section className="section-padding bg-white">
        <div className="page-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-2 space-y-6">
              {/* Canada Office */}
              <AnimatedSection>
                <div className="bg-blue-950 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg">Canada Office</h3>
                      <p className="text-xs text-white/40">Head Office</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                      <p className="text-sm text-white/70">
                        402-2 County Court Blvd<br />
                        Brampton, ON, L6W 3W8<br />
                        Canada
                      </p>
                    </div>
                    <a href="tel:+16476737569" className="flex items-center gap-3 text-sm text-white/70 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4 text-cyan-500" />
                      +1 647 673 7569
                    </a>
                    <a href="mailto:lancanimmigration@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-cyan-400 transition-colors break-all">
                      <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                      lancanimmigration@gmail.com
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Sri Lanka Branch */}
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-blue-950">Sri Lanka Branch</h3>
                      <p className="text-xs text-gray-400">Regional Office</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                      <p className="text-sm text-gray-600">
                        73/10 Saman Uyana Kumaragewatta<br />
                        Battaramulla, Sri Lanka
                      </p>
                    </div>
                    <a href="tel:+94112796210" className="flex items-center gap-3 text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                      <Phone className="w-4 h-4 text-cyan-500" />
                      +94 11 2796 210
                    </a>
                    <a href="tel:+94773407427" className="flex items-center gap-3 text-sm text-gray-600 hover:text-cyan-600 transition-colors">
                      <Phone className="w-4 h-4 text-cyan-500" />
                      +94 773 407 427
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Free Assessment */}
              <AnimatedSection delay={0.15}>
                <div className="bg-cyan-100 rounded-2xl p-8 border border-cyan-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-heading font-bold text-blue-950">Free Assessment</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    We carefully assess your circumstances and qualifications and provide our preliminary opinion on whether you would qualify. If you do not qualify, we will let you know at the first available opportunity so you need not pay fees unnecessarily.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.1}>
                <div className="glass-light rounded-3xl shadow-premium border border-white/50 p-8 md:p-10 backdrop-blur-2xl">
                  <h2 className="text-2xl font-heading font-bold text-blue-950 mb-2">Send Us a Message</h2>
                  <p className="text-sm text-gray-500 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-blue-950 mb-2">Full Name *</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-blue-950 mb-2">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-blue-950 mb-2">Phone Number</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
                          placeholder="+1 (xxx) xxx-xxxx"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-sm font-medium text-blue-950 mb-2">Service Interested In</label>
                        <select
                          id="contact-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all bg-white"
                        >
                          <option value="">Select a service</option>
                          <option value="Express Entry">Express Entry</option>
                          <option value="Federal Skilled Workers">Federal Skilled Workers</option>
                          <option value="Federal Skilled Trade">Federal Skilled Trade Programme</option>
                          <option value="Canadian Experience Class">Canadian Experience Class</option>
                          <option value="Investors & Entrepreneurs">Investors & Entrepreneurs</option>
                          <option value="Family Sponsorship">Family Sponsorship</option>
                          <option value="Provincial Nominees">Provincial Nominees</option>
                          <option value="Refugees">Refugees & Protection</option>
                          <option value="Citizenship">Citizenship</option>
                          <option value="PR Card Renewal">PR Card Renewal</option>
                          <option value="Visit Canada">Visit Canada</option>
                          <option value="Study in Canada">Study in Canada</option>
                          <option value="Work Permit">Work Permit</option>
                          <option value="Live-in Caregivers">Live-in Caregivers</option>
                          <option value="Other">Other Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-blue-950 mb-2">Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all resize-none"
                        placeholder="Describe your immigration situation and how we can help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-all hover:shadow-cyan active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MAP SECTION ═══════ */}
      <section className="bg-gray-50">
        <div className="page-container py-12">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-premium border border-gray-100 h-[400px]">
              <iframe
                title="LanCan Immigration Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.3844944671654!2d-79.75978!3d43.7315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b15fd20024af9%3A0x1df2c61e3c7a9ade!2s2%20County%20Court%20Blvd%20%23402%2C%20Brampton%2C%20ON%20L6W%203W8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
