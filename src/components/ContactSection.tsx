import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  ArrowRight,
  Loader2,
  AlertCircle,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'activation_needed' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleReset = () => {
    setFormStatus('idle');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Message: ${formData.subject || 'Opportunity from ' + formData.name}`,
          message: formData.message,
          _captcha: 'false',
          _template: 'table'
        })
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result) {
        if (result.success === 'true' || result.success === true) {
          setFormStatus('success');
        } else if (result.message && result.message.toLowerCase().includes('activation')) {
          setFormStatus('activation_needed');
        } else {
          setFormStatus('success');
        }
      } else {
        setFormStatus('error');
        setErrorMessage(result?.message || 'Server did not acknowledge message.');
      }
    } catch (err: any) {
      console.error('Direct message submission error:', err);
      setFormStatus('error');
      setErrorMessage('Network connection error. Please try again or copy email directly.');
    } finally {
      setIsSubmitting(false);
    }
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
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-black text-[#24151D]">
                  Send a Direct Message
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFE4EC] text-[#E83E76] border border-[#FBCFE8]">
                  Direct to Inbox
                </span>
              </div>
              <p className="text-xs text-[#6B5561] mb-6 font-medium">
                Sent directly through this portfolio to <span className="font-bold text-[#24151D]">{PERSONAL_INFO.email}</span>. No email app required.
              </p>

              {formStatus === 'success' ? (
                <div className="p-8 rounded-2xl bg-[#FFF1F4] border-2 border-[#F45B8D] text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#F45B8D] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#F45B8D]/30">
                    <Check className="w-7 h-7 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#24151D]">
                      Message Sent Directly! 🎉
                    </h4>
                    <p className="text-sm text-[#6B5561] font-medium mt-1.5 max-w-md mx-auto leading-relaxed">
                      Thank you <strong className="text-[#24151D]">{formData.name}</strong>. Your message was delivered straight to Shivani's inbox. She will review it and reply directly to <strong className="text-[#E83E76]">{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#FBCFE8] text-xs font-bold text-[#24151D] hover:text-[#F45B8D] hover:bg-[#FFE4EC] transition-all shadow-xs"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : formStatus === 'activation_needed' ? (
                <div className="p-8 rounded-2xl bg-[#FFE4EC] border-2 border-[#F45B8D] text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#F45B8D] text-white flex items-center justify-center mx-auto shadow-lg shadow-[#F45B8D]/30">
                    <Mail className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-[#24151D]">
                      Message Submitted & Activation Sent! 📧
                    </h4>
                    <p className="text-sm text-[#6B5561] font-medium mt-1.5 max-w-md mx-auto leading-relaxed">
                      Because this is the initial submission on this portfolio, FormSubmit dispatched a one-click activation confirmation to <strong className="text-[#24151D]">{PERSONAL_INFO.email}</strong>. Once confirmed, all future messages route directly into the inbox!
                    </p>
                  </div>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#FBCFE8] text-xs font-bold text-[#24151D] hover:text-[#F45B8D] hover:bg-[#FFF1F4] transition-all shadow-xs"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        placeholder="e.g. Alex (Engineering Lead)"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors font-medium disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors font-medium disabled:opacity-60"
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
                      disabled={isSubmitting}
                      placeholder="Full Stack Developer Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors font-medium disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#24151D] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      placeholder="Hi Shivani, we were impressed by your full-stack engineering and web automation work and would love to schedule a screening interview..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FFF1F4] border border-[#FBCFE8] text-sm text-[#24151D] placeholder-[#6B5561]/60 focus:outline-none focus:bg-white focus:border-[#F45B8D] transition-colors resize-none font-medium disabled:opacity-60"
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-500 mt-0.5" />
                      <div>
                        <div className="font-bold">Direct delivery encountered an issue</div>
                        <div className="text-[11px] mt-0.5">{errorMessage}</div>
                        <a 
                          href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Opportunity')}&body=${encodeURIComponent(formData.message)}`}
                          className="font-bold underline text-red-800 hover:text-red-950 mt-1 inline-block"
                        >
                          Click here to send via email client as fallback
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#F45B8D] hover:bg-[#E83E76] disabled:bg-[#F9A8C4] text-white font-extrabold rounded-xl shadow-md shadow-[#F45B8D]/20 transition-all hover:scale-101 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 text-white animate-spin" />
                        <span>Sending Directly to Shivani...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Send Message Directly Through Portfolio</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-[#6B5561] font-semibold flex items-center justify-center gap-1.5 pt-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#F45B8D]" />
                    <span>Delivered straight to Shivani's inbox with no app redirects</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
