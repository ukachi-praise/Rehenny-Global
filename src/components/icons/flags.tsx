
import React from 'react';

export const CanadaFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className={className}>
    <path fill="#FF0000" d="M0 0h3v2H0z"/>
    <path fill="#FFFFFF" d="M1 0h1v2H1z"/>
    <path fill="#FF0000" d="M1.3 1l.2-.2.2.2.1-.3-.3.1-.3-.1z"/>
  </svg>
);

export const UkFlag = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/><path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="4"/><path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/></svg>
);

export const UsaFlag = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 15" className={className}><path fill="#B22234" d="M0 0h28v15H0z"/><path fill="#fff" d="M0 2h28v2H0zm0 4h28v2H0zm0 4h28v2H0z"/><path fill="#3C3B6E" d="M0 0h12v8H0z"/><g fill="#fff"><path d="M1 1l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m-7 2l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m-5 2l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z m2 0l.5 1h1l-.8.6.3 1-1-.8-1 .8.3-1-.8-.6h1z"/></g></svg>
);

export const AustraliaFlag = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}><path fill="#002B7F" d="M0 0h60v30H0z"/><g fill="#fff"><path d="M0 0l30 15m0-15L0 15M15 0v15M0 7.5h30" stroke="#fff" strokeWidth="1.5"/><path d="M0 0l30 15m0-15L0 15" stroke="#E83D4A" strokeWidth="1"/><path d="M15 0v15M0 7.5h30" stroke="#E83D4A" strokeWidth="1"/><path d="M15 22.5L12 24l3-1.5 3 1.5-3-1.5z"/><path d="M45 15l-2 1 2-1 2 1-2-1z"/><path d="M45 6l-2 1 2-1 2 1-2-1z"/><path d="M52.5 22.5l-2 1 2-1 2 1-2-1z"/></g></svg>
);

export const ChinaFlag = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" className={className}>
    <path fill="#EE1C25" d="M0 0h30v20H0z"/>
    <path fill="#FF0" d="m5 5l2 6-5-4h6l-5 4z"/>
    <path fill="#FF0" transform="rotate(20 10 2)" d="m10 2l.5 2-2-1h2.5l-2 1z"/>
    <path fill="#FF0" transform="rotate(40 12 4)" d="m12 4l.5 2-2-1h2.5l-2 1z"/>
    <path fill="#FF0" transform="rotate(60 12 7)" d="m12 7l.5 2-2-1h2.5l-2 1z"/>
    <path fill="#FF0" transform="rotate(80 10 9)" d="m10 9l.5 2-2-1h2.5l-2 1z"/>
  </svg>
);
