import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onNotify: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Contact form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onNotify('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    onNotify('Phone number copied to clipboard!');
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onNotify('Message prepared! Opening default email client...');

      // Open mailto with populated subject and body
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>07 / GET IN TOUCH</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            Let's Build <br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-400 bg-clip-text text-transparent">
              Something
            </span> <br />
            Intelligent.
          </h2>

          <p className="text-base text-slate-300 font-light leading-relaxed max-w-lg">
            Interested in collaborating, discussing a machine learning project, or exploring technical engineering opportunities? I'm readily reachable.
          </p>

          {/* Quick Action Badges */}
          <div className="space-y-3 pt-2">
            {/* Email Card with Copy button */}
            <div className="p-4 rounded-xl bg-[#090C14] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/5 transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-[#090C14] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/25 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Phone & WhatsApp</div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-white/5 hover:bg-violet-500/20 text-slate-300 hover:text-violet-300 border border-white/5 transition-colors"
                title="Copy Phone Number"
                aria-label="Copy Phone"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#090C14] border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#090C14] border border-white/10 hover:border-cyan-500/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-white group-hover:text-cyan-300">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Messaging Form */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#090C14] border border-white/10 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Send a Direct Dispatch
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Have a question or opportunity? Drop a note below and it will route directly to Guru's inbox.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Email Client Activated</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out! If your email client didn't launch automatically, please email directly at{' '}
                  <span className="text-cyan-300 font-mono">{personalInfo.email}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-mono text-cyan-400 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Engineering Recruiter)"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@techinnovations.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, role, or collaboration idea..."
                    className="w-full px-4 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm font-mono tracking-wide transition-all shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{isSubmitting ? 'Preparing Transmission...' : 'Transmit Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
