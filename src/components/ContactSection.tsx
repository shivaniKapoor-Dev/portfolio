import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formData.subject || 'Full Stack Engineering Opportunity'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative dot-grid bg-[#FFF1F4] border-t border-[#FBCFE8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] text-xs font-bold mb-3 shadow-xs">
            <Mail className="w-3.5 h-3.5 text-[#F45B8D]" />
            <span>Ready to Hire?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#24151D] tracking-tight">
            Let's Build Great Systems Together
          </h2>
          <p className="text-[#6B5561] text-base sm:text-lg mt-3 font-medium">
            Available for Full Stack, Backend, or Frontend engineering roles. Reach out directly or connect with me on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#FBCFE8] shadow-sm space-y-6">
              <h3 className="text-xl font-black text-[#24151D]">
                Contact Information
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#6B5561] uppercase font-bold">
                    Primary Email
                  </div>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-[#F45B8D] hover:text-[#E83E76] flex items-center gap-1 font-bold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#F45B8D]" />
                        <span className="text-[#E83E76]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="block text-sm sm:text-base font-extrabold text-[#24151D] hover:text-[#F45B8D] break-all transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF1F4] hover:bg-[#FFE4EC] border border-[#FBCFE8] text-[#6B5561] hover:text-[#F45B8D] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#FBCFE8] text-[#F45B8D] group-hover:scale-110 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#24151D]">LinkedIn Profile</div>
                      <div className="text-xs text-[#6B5561] font-medium">shivani-kapoor-0aa99a244</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#F9A8C4] group-hover:text-[#F45B8D] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#FFF1F4] hover:bg-[#FFE4EC] border border-[#FBCFE8] text-[#6B5561] hover:text-[#24151D] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#FBCFE8] text-[#24151D] group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#24151D]">GitHub</div>
                      <div className="text-xs text-[#6B5561] font-medium">@shivaniKapoor-Dev</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#F9A8C4] group-hover:text-[#24151D] group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Location & Status */}
              <div className="pt-4 border-t border-[#FBCFE8]/60 flex items-center justify-between text-xs text-[#6B5561] font-semibold">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F45B8D]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[#E83E76] font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F45B8D] animate-pulse"></span>
                  Actively Interviewing
                </span>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#FBCFE8] shadow-sm">
              <h3 className="text-xl font-black text-[#24151D] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#6B5561] mb-6 font-medium">
                Fill this out to initiate a conversation or schedule an interview round.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex (Engineering Lead)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Stack Developer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Shivani, we were impressed by your full-stack engineering and web automation work and would love to schedule a screening interview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors resize-none font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#F45B8D] hover:bg-[#E83E76] text-white font-extrabold rounded-xl shadow-md shadow-[#F45B8D]/20 transition-all hover:scale-101"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Send Interview Request</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-[#FFE4EC] border border-[#FBCFE8] text-[#E83E76] text-xs text-center font-bold">
                    Opening your default email client with your message. Thank you!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
