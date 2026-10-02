import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { InteractivePipeline } from './components/InteractivePipeline';
import { Toast } from './components/Toast';

import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ResumeSection } from './sections/ResumeSection';
import { ContactSection } from './sections/ContactSection';

import type { Project } from './types/portfolio';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Global hotkey to toggle terminal with ` (tilde/backtick)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      const target = e.target as HTMLElement | null;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Pendela_Guru_Vishnu_Resume.pdf';
    link.download = 'Pendela_Guru_Vishnu_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setToastMessage('Official resume downloaded successfully!');
  };

  const handleNotify = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="relative min-h-screen bg-[#07080C] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Sticky Navigation */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Layout */}
      <main id="main-content" className="relative z-10 space-y-0">
        <HeroSection
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onDownloadResume={handleDownloadResume}
        />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Special Signature Creative Feature: The Interactive AI Lab */}
        <InteractivePipeline />

        <AchievementsSection />

        <EducationSection />

        <CertificationsSection />

        <ResumeSection
          onDownloadResume={handleDownloadResume}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        <ContactSection onNotify={handleNotify} />
      </main>

      {/* Minimalistic Branded Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onDownloadResume={handleDownloadResume}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

      {/* Dynamic Feedback Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
