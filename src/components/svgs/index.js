import React from "react";

export const logo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32">
    <defs>
      <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
        <stop stopColor="#A5B4FC" stopOpacity="0" offset="0%" />
        <stop stopColor="#A5B4FC" offset="100%" />
      </linearGradient>
      <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
        <stop stopColor="#38BDF8" stopOpacity="0" offset="0%" />
        <stop stopColor="#38BDF8" offset="100%" />
      </linearGradient>
    </defs>
    <rect fill="#6366F1" width="32" height="32" rx="16" />
    <path d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z" fill="#4F46E5" />
    <path d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z" fill="url(#logo-a)" />
    <path d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z" fill="url(#logo-b)" />
  </svg>
);
export const svg0 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-400 ${pathname === activecondition && "!text-indigo-500"}`} d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
    <path className={`fill-current text-gray-600 ${pathname === activecondition && "text-indigo-600"}`} d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
    <path className={`fill-current text-gray-400 ${pathname === activecondition && "text-indigo-200"}`} d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
  </svg>
);

export const svg1 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M0 20h24v2H0z" />
    <path
      className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`}
      d="M4 18h2a1 1 0 001-1V8a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1zM11 18h2a1 1 0 001-1V3a1 1 0 00-1-1h-2a1 1 0 00-1 1v14a1 1 0 001 1zM17 12v5a1 1 0 001 1h2a1 1 0 001-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1z"
    />
  </svg>
);

export const svg2 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
    <path className={`fill-current text-gray-700 ${pathname.includes(activecondition) && "!text-indigo-600"}`} d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
  </svg>
);

export const svg3 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path
      className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`}
      d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
    />
    <path
      className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`}
      d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
    />
  </svg>
);

export const svg4 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path
      className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`}
      d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
    />
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
  </svg>
);

export const svg5 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path
      className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`}
      d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z"
    />
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
  </svg>
);

export const svg6 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M1 1h22v23H1z" />
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
  </svg>
);

export const svg7 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
    <path
      className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`}
      d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
    />
  </svg>
);

export const svg8 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M1 3h22v20H1z" />
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
  </svg>
);

export const svg9 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
    <path className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
    <path className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
  </svg>
);

export const svg10 = (pathname, activecondition) => (
  <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
    <circle className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} cx="18.5" cy="5.5" r="4.5" />
    <circle className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} cx="5.5" cy="5.5" r="4.5" />
    <circle className={`fill-current text-gray-600 ${pathname.includes(activecondition) && "text-indigo-500"}`} cx="18.5" cy="18.5" r="4.5" />
    <circle className={`fill-current text-gray-400 ${pathname.includes(activecondition) && "text-indigo-300"}`} cx="5.5" cy="18.5" r="4.5" />
  </svg>
);

export const searchIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path className="fill-current text-green-dark" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
    <path className="fill-current text-green-dark" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
  </svg>
);

export const notificationIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path className="fill-current text-green-dark" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
    <path
      className="fill-current text-green-dark"
      d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
    />
  </svg>
);

export const helpIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path className="fill-current text-green-dark" d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
  </svg>
);

export const helpSubsvg0 = () => (
  <svg className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
    <rect y="3" width="12" height="9" rx="1" />
    <path d="M2 0h8v2H2z" />
  </svg>
);
export const helpSubsvg1 = () => (
  <svg className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
    <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
  </svg>
);
export const helpSubsvg2 = () => (
  <svg className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
    <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
  </svg>
);
