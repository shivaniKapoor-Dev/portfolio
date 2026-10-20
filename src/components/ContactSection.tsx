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
    <section id="contact" className="py-24 relative dot-grid border-t border-[#e8ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf0f2] border border-[#f8d4da] text-[#9c3f4c] text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5 text-[#9c3f4c]" />
            <span>Ready to Hire?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1f271c] tracking-tight">
            Let's Build Great Systems Together
          </h2>
          <p className="text-[#555f50] text-base sm:text-lg mt-3">
            Available for Full Stack, Backend, or Frontend engineering roles. Reach out directly or connect with me on LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Details & Direct Connect */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e5dcd0] shadow-xs space-y-6">
              <h3 className="text-xl font-bold text-[#1f271c]">
                Contact Information
              </h3>

              {/* Email Card (Warm Beige Tint) */}
              <div className="p-4 rounded-xl bg-[#faf6f0] border border-[#e9e0d3] space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#737c6f] uppercase font-semibold">
                    Primary Email
                  </div>
                  <button
                    onClick={handleCopy}
                    className="text-xs text-[#2d3a29] hover:text-[#9c3f4c] flex items-center gap-1 font-semibold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#3e6437]" />
                        <span className="text-[#2d4b27]">Copied!</span>
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
                  className="block text-sm sm:text-base font-bold text-[#1f271c] hover:text-[#2d3a29] break-all transition-colors"
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
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#faf7f2] hover:bg-[#fdf0f2] border border-[#e8dfd2] hover:border-[#f8d4da] text-[#4f574a] hover:text-[#9c3f4c] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#e5dcd0] text-[#9c3f4c] group-hover:scale-105 transition-transform">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1f271c]">LinkedIn</div>
                      <div className="text-xs text-[#717b6e]">shivani-kapoor</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8a9486] group-hover:text-[#9c3f4c] group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#faf7f2] hover:bg-[#edf4eb] border border-[#e8dfd2] hover:border-[#d2e2ce] text-[#4f574a] hover:text-[#2d3a29] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white border border-[#e5dcd0] text-[#2d3a29] group-hover:scale-105 transition-transform">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1f271c]">GitHub</div>
                      <div className="text-xs text-[#717b6e]">@shivaniKapoor-Dev</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#8a9486] group-hover:text-[#2d3a29] group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Location & Status */}
              <div className="pt-4 border-t border-[#ede5da] flex items-center justify-between text-xs text-[#717b6e] font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8a9486]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[#2b4426] font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#3e6437] animate-pulse"></span>
                  Active Interviewing
                </span>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e5dcd0] shadow-xs">
              <h3 className="text-xl font-bold text-[#1f271c] mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#717b6e] mb-6">
                Fill this out to initiate a conversation or schedule an interview round.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#384133] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex (Engineering Lead)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#e5dcd0] text-sm text-[#1f271c] placeholder-[#9fa89b] focus:outline-none focus:bg-white focus:border-[#2d3a29] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#384133] mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#e5dcd0] text-sm text-[#1f271c] placeholder-[#9fa89b] focus:outline-none focus:bg-white focus:border-[#2d3a29] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#384133] mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Stack Developer Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#e5dcd0] text-sm text-[#1f271c] placeholder-[#9fa89b] focus:outline-none focus:bg-white focus:border-[#2d3a29] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#384133] mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Shivani, we were impressed by your backend and WebGL work and would love to schedule a screening interview..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#faf7f2] border border-[#e5dcd0] text-sm text-[#1f271c] placeholder-[#9fa89b] focus:outline-none focus:bg-white focus:border-[#2d3a29] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#2d3a29] hover:bg-[#1f281d] text-[#faf8f5] font-semibold rounded-xl shadow-xs transition-all hover:scale-101"
                >
                  <Send className="w-4 h-4 text-[#f6d7dc]" />
                  <span>Send Interview Request</span>
                </button>

                {formSubmitted && (
                  <div className="p-3 rounded-xl bg-[#edf4eb] border border-[#d2e2ce] text-[#2d4428] text-xs text-center font-medium">
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
