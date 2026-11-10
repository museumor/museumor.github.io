'use client';

import { useEffect } from 'react';
import Link from 'next/link';

const steamUrl = "https://store.steampowered.com/app/613900/Museum_of_Other_Realities/";

export default function DownloadPage() {
  // Send visitors on to Steam after a short pause; the button is there for
  // anyone who would rather not wait.
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = steamUrl;
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page min-h-[70vh] justify-center">
      <div className="flex max-w-[640px] flex-col items-start gap-6">
        <p className="eyebrow">Download</p>
        <h1 className="page-title">Taking you to Steam</h1>
        <p className="text-soft">The Museum of Other Realities is available on Steam for PC VR headsets.</p>
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <a href={steamUrl} className="btn-primary">
            Visit on Steam
          </a>
          <Link href="/" className="link-rule">
            Return to the homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
