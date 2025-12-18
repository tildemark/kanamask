"use client";
import { useState } from 'react';
import { convertToCryptic, StyleMode } from '../utils/converter';

export default function Home() {
  const [input, setInput] = useState('raptor');
  const [mode, setMode] = useState<StyleMode>('basic');
  const [statusMsg, setStatusMsg] = useState('');

  const output = convertToCryptic(input, mode);

  // ACTION 1: Copy ONLY the username (For Gamers)
  const copyToClipboard = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setStatusMsg('USERNAME COPIED!');
    } catch (err) {
      setStatusMsg('ERROR COPYING');
    }
    setTimeout(() => setStatusMsg(''), 2000);
  };

  // ACTION 2: Share the App (For Friends)
  const shareApp = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the copy when clicking share
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'KANA-MASK',
          text: `Check out this cryptic name generator:`,
          url: 'https://kana.sanchez.ph',
        });
        setStatusMsg('OPENING SHARE...');
      } catch (err) {
        // User cancelled
      }
    } else {
      // Fallback for desktop/unsupported
      try {
        await navigator.clipboard.writeText('https://kana.sanchez.ph');
        setStatusMsg('LINK COPIED!');
      } catch (err) {
        setStatusMsg('ERROR');
      }
    }
    setTimeout(() => setStatusMsg(''), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 flex flex-col items-center justify-center p-4 selection:bg-cyan-500/30">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      <div className="w-full max-w-xl space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            KANA-MASK
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 font-medium">
            Identity Obfuscation Protocol
          </p>
        </header>

        <div className="space-y-6">
          <div className="flex bg-slate-900/50 p-1 rounded-xl border border-white/5 shadow-inner">
            {(['basic', 'elite'] as StyleMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-widest rounded-lg transition-all ${
                  mode === m 
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-900/20' 
                  : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {m}
              </button>
            ))}
          </div>

          <div className="relative group">
            <input
              type="text"
              maxLength={20}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ENTER USERNAME..."
              className="w-full bg-slate-900/80 border border-white/10 rounded-2xl p-6 text-2xl font-mono focus:border-cyan-500/50 outline-none transition-all placeholder:text-slate-700"
            />
            <span className="absolute right-4 bottom-2 text-[10px] text-slate-600 font-mono">
              {input.length}/20
            </span>
          </div>

          {/* MAIN CARD: Clicks Copy Username Only */}
          <div 
            onClick={copyToClipboard}
            className="group relative cursor-pointer active:scale-[0.98] transition-transform"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center min-h-[160px]">
              <p className="text-6xl font-bold tracking-widest text-white text-center break-all">
                {output || "---"}
              </p>
              
              <div className={`mt-6 flex items-center gap-2 text-cyan-500 font-bold text-[10px] tracking-[0.2em] transition-opacity ${statusMsg ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {statusMsg || 'CLICK TO COPY USERNAME'}
              </div>
            </div>
          </div>

          {/* SECONDARY ACTION: Share App Link */}
          <div className="flex justify-center">
            <button
              onClick={shareApp}
              className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 text-xs tracking-widest uppercase transition-colors px-4 py-2 rounded-lg hover:bg-white/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
              Share App Link
            </button>
          </div>
        </div>

        <footer className="grid grid-cols-3 gap-4 pt-4">
          <div className="h-[1px] bg-gradient-to-r from-transparent to-slate-800 self-center"></div>
          <p className="text-[10px] text-slate-600 text-center uppercase">V1.0 Stable Build</p>
          <div className="h-[1px] bg-gradient-to-l from-transparent to-slate-800 self-center"></div>
        </footer>
      </div>
    </main>
  );
}
