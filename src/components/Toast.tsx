import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-[1000] flex items-center gap-3 px-4 py-3 rounded-lg border border-cyan-500/30 bg-[#0B0D14]/95 text-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(0,242,254,0.15)] backdrop-blur-md"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-violet-400 shrink-0" />
          )}
          <span className="text-sm font-medium font-mono text-slate-200">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
