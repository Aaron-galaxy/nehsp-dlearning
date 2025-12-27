import React, { useState, useEffect, useRef } from 'react';
import { 
  Layout, 
  Home, 
  BarChart2, 
  Settings, 
  Bell, 
  Search, 
  Plus, 
  MoreHorizontal,
  AlertCircle,
  TrendingUp,
  Phone, 
  Mail   
} from 'lucide-react';

// ==============================================================================
// 🎨 [圖示元件區] 使用 SVG 繪製
// ==============================================================================
const IconBase = ({ children, size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

// 新增 Award 圖示
const Award = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </IconBase>
);

const Globe = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10z" />
  </IconBase>
);
const Cpu = (p) => (
  <IconBase {...p}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1V4" />
    <path d="M15 1V4" />
    <path d="M9 20V23" />
    <path d="M15 20V23" />
    <path d="M20 9H23" />
    <path d="M20 14H23" />
    <path d="M1 9H4" />
    <path d="M1 14H4" />
  </IconBase>
);
const Leaf = (p) => (
  <IconBase {...p}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 4 8 3.7-3.7 20-11 20" />
    <path d="m19 2-11 10" />
  </IconBase>
);
const Palette = (p) => (
  <IconBase {...p}>
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </IconBase>
);
const Users = (p) => (
  <IconBase {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </IconBase>
);
const ArrowRight = (p) => (
  <IconBase {...p}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </IconBase>
);
const ArrowLeft = (p) => (
  <IconBase {...p}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </IconBase>
);
const Menu = (p) => (
  <IconBase {...p}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </IconBase>
);
const X = (p) => (
  <IconBase {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconBase>
);
const MapPin = (p) => (
  <IconBase {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconBase>
);
const Play = (p) => (
  <IconBase {...p}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </IconBase>
);
const ExternalLink = (p) => (
  <IconBase {...p}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </IconBase>
);
const CheckCircle = (p) => (
  <IconBase {...p}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </IconBase>
);
const Lightbulb = (p) => (
  <IconBase {...p}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.4 1.5-3.8 0-3.2-2.6-5.8-5.8-5.8-3.2 0-5.8 2.6-5.8 5.8 0 1.4.5 2.8 1.5 3.8.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </IconBase>
);
const Clock = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconBase>
);
const BookOpen = (p) => (
  <IconBase {...p}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </IconBase>
);
const Building = (p) => (
  <IconBase {...p}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" x2="9.01" y1="22" y2="22" />
    <line x1="15" x2="15.01" y1="22" y2="22" />
    <line x1="12" x2="12.01" y1="22" y2="22" />
    <line x1="12" x2="12.01" y1="2" y2="2" />
    <line x1="4" x2="20" y1="7" y2="7" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="17" y2="17" />
  </IconBase>
);
const Target = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </IconBase>
);
const Rocket = (p) => (
  <IconBase {...p}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </IconBase>
);
const Thermometer = (p) => (
  <IconBase {...p}>
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </IconBase>
);
const Droplets = (p) => (
  <IconBase {...p}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.35" />
  </IconBase>
);
const Sun = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </IconBase>
);
const Signal = (p) => (
  <IconBase {...p}>
    <path d="M2 20h.01" />
    <path d="M7 20v-4" />
    <path d="M12 20v-8" />
    <path d="M17 20V8" />
    <path d="M22 20V4" />
  </IconBase>
);
const Fan = (p) => (
  <IconBase {...p}>
    <path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12z" />
    <path d="M12 12c-3 0-5.5-2.5-5.5S9 1 12 1v11z" />
    <path d="M12 12c0 3-2.5 5.5-5.5S1 15 1 12h11z" />
    <path d="M12 12c3 0 5.5 2.5 5.5S15 23 12 23V12z" />
    <circle cx="12" cy="12" r="2" />
  </IconBase>
);
const CloudRain = (p) => (
  <IconBase {...p}>
    <line x1="16" y1="13" x2="16" y2="21" />
    <line x1="8" y1="13" x2="8" y2="21" />
    <line x1="12" y1="15" x2="12" y2="23" />
    <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
  </IconBase>
);
const RefreshCw = (p) => (
  <IconBase {...p}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M8 16H3v5" />
  </IconBase>
);
const RotateCw = (p) => (
  <IconBase {...p}>
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </IconBase>
);
const Newspaper = (p) => (
  <IconBase {...p}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </IconBase>
);

// ==============================================================================
// 🖼️ [強化的圖片元件]
// ==============================================================================
const Image = ({ src, alt, className = '', ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [attempt, setAttempt] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setAttempt(0);
    setIsError(false);
  }, [src]);

  const handleError = () => {
    let driveId = null;
    const matchId = src && src.match(/id=([a-zA-Z0-9_-]+)/);
    if (matchId) {
      driveId = matchId[1];
    } else {
        const matchD = src && src.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if(matchD) driveId = matchD[1];
    }

    if (driveId && attempt === 0) {
      setCurrentSrc(`https://lh3.googleusercontent.com/d/${driveId}`);
      setAttempt(1);
    } else if (driveId && attempt === 1) {
      setCurrentSrc(`https://drive.google.com/uc?export=view&id=${driveId}`);
      setAttempt(2);
    } else {
      setIsError(true);
      setCurrentSrc('https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
    }
  };

  // 判斷是否已經有傳入背景色 class，若有則不使用預設的 bg-slate-200
  const bgClass = className.includes('bg-') ? '' : 'bg-slate-200';

  return (
    <img
      src={currentSrc}
      alt={alt || "image"}
      className={`${className} ${isError ? 'opacity-80 grayscale' : ''} ${bgClass} transition-all duration-500`}
      onError={handleError}
      referrerPolicy="no-referrer"
      loading="lazy"
      {...props}
    />
  );
};

// ==============================================================================
// 📸 [照片上傳區]
// ==============================================================================
const exhibitionImages = {
  exh_group1: 'https://drive.google.com/thumbnail?id=1BMG1OeKivmpnpk_XbaaRZlI3Y0GaBYTV&sz=w2000',
  exh_group2: 'https://drive.google.com/thumbnail?id=1DWGIDgzsi66DBpW70EVAZ487UtmfvzuS&sz=w2000',
  exh_award_bronze: 'https://drive.google.com/thumbnail?id=15pcEq8yKqhAh6NqGHHTgv_b6-Q3tz6uh&sz=w2000',
  exh_award_pop: 'https://drive.google.com/thumbnail?id=1hr0kct0Ynx_1nUX3UjC8rsLeOqfklUv3&sz=w2000',
  exh_intro1: 'https://drive.google.com/thumbnail?id=1-NAf6clx3Pmd2UKXROaReenGM29wjPiO&sz=w2000',
  exh_intro2: 'https://drive.google.com/thumbnail?id=1DYYDO8JtWCiAR5G1wbwlVY0R-ZFscIjR&sz=w2000',
  exh_intro3: 'https://drive.google.com/thumbnail?id=1yqDovZkA6LG2kyEhM8DqFqq0Blt6DB69&sz=w2000',
  exh_intro4: 'https://drive.google.com/thumbnail?id=1O2mEnQTqyWsxoaIj6FWk_2nectiXxPz4&sz=w2000',
  exh_intro5: 'https://drive.google.com/thumbnail?id=1CaUhftz0lVNnShTVnUSQeawQ05JbjoMu&sz=w2000',
  exh_intro6: 'https://drive.google.com/thumbnail?id=1z7tBQ8LVOn_OGH5yeMIRJzBBVLI6kR1E&sz=w2000',
};

const images = {
  // 校徽 Logo
  about_logo: 'https://drive.google.com/file/d/1xPx7JjEhxiL7-HpNUWdRYB9yvRyjOZat/view?usp=drive_link',
  
  hero: 'https://drive.google.com/thumbnail?id=1CENEGgXFGqpAhwhpgLD6O1s2Y7KRVveh&sz=w2000',
  about_philosophy: 'https://drive.google.com/uc?export=download&id=1RxhVPTvNR2WxumjSrpi4DzaR9kSx_2iF',
  about_activity: 'https://drive.google.com/thumbnail?id=1H-1wVOa5O3cRgKtEJAxMJupGOrqUk7ZI&sz=w2000',
  about_campus: 'https://drive.google.com/thumbnail?id=1H-1wVOa5O3cRgKtEJAxMJupGOrqUk7ZI&sz=w2000',
  about_intro1: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  about_intro2: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  about_mascot: 'https://drive.google.com/thumbnail?id=1d9SyNj4LQsz5tsu-oL5xL9xQdgOsUgYL&sz=w2000',
  about_traffic: 'https://drive.google.com/thumbnail?id=1zc8jpk9zYXTzrJTHGhU2ne0sju9bhjcJ&sz=w2000',
  about_basketball: 'https://drive.google.com/thumbnail?id=1ivT8OeoHRTCgImZYj2y7DRTXzc8WxspB&sz=w2000',
  
  m1_cover: 'https://drive.google.com/thumbnail?id=1fAx7elZc9xJLAfSY8ScOm4nQbvzP9WMB&sz=w2000',
  m1_step1: 'https://drive.google.com/thumbnail?id=1Y-dk5Ply7OlMxylj3--mZh2rp67ghcfJ&sz=w2000',
  m1_step2: 'https://drive.google.com/thumbnail?id=1tMSc7m9wjYwnvNRAaYW0gIb3xXAdQ910&sz=w2000',
  m1_step3: 'https://drive.google.com/thumbnail?id=1Tu6XSYGb2adJowxznyGwH_bFX-mxNRv9&sz=w2000',
  m1_step4: 'https://drive.google.com/thumbnail?id=1eXVakotNAnjnKqLZ6Z6PxjmafASy5vgh&sz=w2000',
  m1_step5: 'https://drive.google.com/thumbnail?id=1rfsqBhaw57sOlN3UuBKle9jtlW38Jwfx&sz=w2000',
  m2_cover: 'https://drive.google.com/thumbnail?id=18Ma0nWrAQqG8xQ8QB7EPL4xRmBWuAlBY&sz=w2000',
  m2_sys_solar: 'https://drive.google.com/thumbnail?id=1CP2QO-QpgkOkrWZTynbeOxqQ5BGSK2NC&sz=w2000',
  m2_sys_irrigation: 'https://drive.google.com/thumbnail?id=1g_Rup9CJKhZg0XXkrI2Y31VOtbhiPoz4&sz=w2000',
  m2_step_design: 'https://drive.google.com/thumbnail?id=1o_WPMv2Mgq7pbzHlf6hHycVIvx8RCqGG&sz=w2000',
  m2_step_coding: 'https://drive.google.com/thumbnail?id=1HzeqCHab7brFhewiMX2pYODdVr9E_5Fi&sz=w2000',
  m2_step_making: 'https://drive.google.com/thumbnail?id=1-dju2MgZxad4nk2gYl8ay_J50-Qg_6ZK&sz=w2000',
  m2_step_class: 'https://drive.google.com/thumbnail?id=1K_wfFsgsfj_238-DL0h5lZFTL2KumxHo&sz=w2000',
  m2_irrigation_finished: 'https://drive.google.com/thumbnail?id=1g_Rup9CJKhZg0XXkrI2Y31VOtbhiPoz4&sz=w2000',
  m2_irrigation_make1: 'https://drive.google.com/thumbnail?id=11DbttZXGJLZw6IcCC43wPxLVpUU_wqad&sz=w2000',
  m2_irrigation_make2: 'https://drive.google.com/thumbnail?id=1o3TQjMNn-aLQPDkYJEN6dBSXOLYd0BjS&sz=w2000',
  
  // 模組二教學照片
  m2_teach_new1: 'https://drive.google.com/thumbnail?id=1NYVmMENH6ZS1dBlOU_6p0kwkSxzjlC5u&sz=w2000',
  m2_student_new1: 'https://drive.google.com/thumbnail?id=1SJMeYfiauga11yC6sSJwc5G9eOpRlSSB&sz=w2000',
  m2_student_new2: 'https://drive.google.com/thumbnail?id=12tZCRx9YWKv04WgBQnNW8lMPjhsNjcIt&sz=w2000',
  m2_student_new3: 'https://drive.google.com/thumbnail?id=1pwRCSAc0k138SrqDG7SE9xeg4s3rj-v4&sz=w2000',
  m2_student_new5: 'https://drive.google.com/thumbnail?id=1rOI3WocMN1ziYLNbO8W6tiQEq4o_WN-h&sz=w2000',

  m2_teach_1: 'https://drive.google.com/thumbnail?id=18CNFVEQgvdigutbk1QroufkBQPML0QYf&sz=w2000',
  m2_teach_2: 'https://drive.google.com/thumbnail?id=1K_wfFsgsfj_238-DL0h5lZFTL2KumxHo&sz=w2000',
  m2_teach_3: 'https://drive.google.com/thumbnail?id=1Vl1uGhBOO645gHjtHBHrM93f2Sx5OOUq&sz=w2000',
  m2_gallery: [
    'https://drive.google.com/thumbnail?id=11DbttZXGJLZw6IcCC43wPxLVpUU_wqad&sz=w2000',
    'https://drive.google.com/thumbnail?id=1o3TQjMNn-aLQPDkYJEN6dBSXOLYd0BjS&sz=w2000',
    'https://drive.google.com/thumbnail?id=1cgztEN9GNoMbEr-w5eKEwX1XH2kIZToG&sz=w2000',
    'https://drive.google.com/thumbnail?id=1uFAYBfzyWTNFR60j08X7KTTiEhxd1SDg&sz=w2000',
    'https://drive.google.com/thumbnail?id=1OhuIfnR6bfFnQNY8h2iBGojEAkTcTgJY&sz=w2000',
  ],
  m3_cover: 'https://drive.google.com/thumbnail?id=1FQKcIiMti2cKzcCA_IhWwokq7ZQaN8cN&sz=w2000',
  m3_step1: 'https://drive.google.com/thumbnail?id=1kImRePEMegsKJZnDrSq_Agi1iqthP3Ka&sz=w2000',
  m3_step2: 'https://drive.google.com/thumbnail?id=1FQKcIiMti2cKzcCA_IhWwokq7ZQaN8cN&sz=w2000',
  m3_step3: 'https://drive.google.com/thumbnail?id=1MD8QpFR2cDPUi3vzpqyXJWf6xelCF9-N&sz=w2000',
  m3_step4: 'https://drive.google.com/thumbnail?id=1-3R68kP2lQWAfgyBFc-9rH1_EL2AFDCF&sz=w2000',
  m3_step5: 'https://drive.google.com/thumbnail?id=1vJMPr2FVPklDZNQR3UB1Cg1WjeUNtt9v&sz=w2000',
  m3_gallery: [
    'https://drive.google.com/thumbnail?id=16-0u1Y3ekEOn7vulMd0UpG8s-h2WVEM1&sz=w2000',
    'https://drive.google.com/thumbnail?id=1Gf3odBWipgDcX4hV4-IcHsiGqpxvOdGF&sz=w2000',
    'https://drive.google.com/thumbnail?id=1Unst9s0V5CXcFnpyhfR2rghzfpSHYCBa&sz=w2000',
  ],
  m4_cover: 'https://drive.google.com/thumbnail?id=1eb1gOJ31LR_JgfcCid09UHqtBDbRd04i&sz=w2000',
  m4_step1: 'https://drive.google.com/thumbnail?id=1wSHUSW5fVXkEREV2omjsV0j50zYMEvCI&sz=w2000',
  m4_satsuki_0513_1: 'https://drive.google.com/thumbnail?id=1wSHUSW5fVXkEREV2omjsV0j50zYMEvCI&sz=w2000',
  m4_satsuki_0513_2: 'https://drive.google.com/thumbnail?id=16BQSd1iwTfK3hx-t-0p0QznOakYG9Z4r&sz=w2000',
  m4_satsuki_0513_3: 'https://drive.google.com/thumbnail?id=1e0ZN6K6M2HzqoCz1OVt9HD7ugpU17l2g&sz=w2000',
  m4_satsuki_0513_4: 'https://drive.google.com/thumbnail?id=1baPWB4mkk-108ntdm--IYr6lKRieLVEg&sz=w2000',
  m4_satsuki_0613_qna: 'https://drive.google.com/thumbnail?id=1gkSwnEn_RSRvy_65cvkbfv_sEhDjRoOg&sz=w2000',
  m4_satsuki_0613_qna2: 'https://drive.google.com/thumbnail?id=1zQvehyP8XW_P2JMnt-orNR-Y74fSin6F&sz=w2000',
  m4_satsuki_0613_osaka: 'https://drive.google.com/thumbnail?id=1CQDMInyMorwjzL-7EMlKUrIacs7Bo17c&sz=w2000',
  m4_satsuki_0613_activity: 'https://drive.google.com/thumbnail?id=18pUzENnG7u0Rwag1my7_7lrKFbYrWxU0&sz=w2000',
  m4_minamata_0620_intro: 'https://drive.google.com/thumbnail?id=1QiN9SliBFdkovxKV0qgFv4EQtz-zYjFF&sz=w2000',
  m4_minamata_0620_interact: 'https://drive.google.com/thumbnail?id=15if9A9av1WcTU6M3v_nfiUWxHFzZg_uf&sz=w2000',
  m4_minamata_0926_interact: 'https://drive.google.com/thumbnail?id=1D50RjJ8s9vWNCwt87XfWBimFiFJkLIBj&sz=w2000',
  m4_minamata_0926_fruit: 'https://drive.google.com/thumbnail?id=1vElek8GKW9KZYHxkzr8CswT9QfFOV-fZ&sz=w2000',
  m4_minamata_0926_fruit1: 'https://drive.google.com/thumbnail?id=1QZ_yp4S3Myt_EqpwoapGkX9Kx1T65hmC&sz=w2000',
  m4_minamata_0926_fruit4: 'https://drive.google.com/thumbnail?id=1H36tQjhwbBkBgJ7J7e-JLAblcavXXMjo&sz=w2000',
  m4_minamata_0926_climate: 'https://drive.google.com/thumbnail?id=1Hh_HPA5g4WOGLNmEaF4yNEOnQ_BGUI1Q&sz=w2000',
  m4_minamata_0926_comm1: 'https://drive.google.com/thumbnail?id=1Rnwl2-lGxwp0tMZ5tyOSAXBKCOQ1S8Vi&sz=w2000',
  m4_minamata_1017_disease: 'https://drive.google.com/thumbnail?id=1dQubOsVC56YvHdhG9MGWDC4FXlPTmowF&sz=w2000',
  m4_minamata_1017_tw2: 'https://drive.google.com/thumbnail?id=11LEFZKIDoOu4F7n_FEysiPxmiFiP8KQM&sz=w2000',
  m4_minamata_1209_dev1: 'https://drive.google.com/thumbnail?id=1dgVSiGrara_9-FdZ4Mw_JyKZ0dhOT9bl&sz=w2000',
  m4_minamata_1209_present1: 'https://drive.google.com/thumbnail?id=15sUsBlkyJuM6uR1L2FJD68AWauG9RYnt&sz=w2000',
  m4_minamata_1209_disease2: 'https://drive.google.com/thumbnail?id=16kafKg6gVfRJIx-taSPmd4Jx87Ckfgst&sz=w2000',
  m4_minamata_1209_principal: 'https://drive.google.com/thumbnail?id=11JxW0JTx5qhq2CijLUOjXKsjKASOwSjn&sz=w2000',
  m4_slogan_nsysu2: 'https://drive.google.com/thumbnail?id=12A_nHahVe2Nh7likZQ4Yv1SNoho6qsRw&sz=w2000',
  m4_slogan_nsysu3: 'https://drive.google.com/thumbnail?id=1OpEq87-SNzFMRInmi1m8r6qYbOxIeGOE&sz=w2000',
  m4_slogan_foreign: 'https://drive.google.com/thumbnail?id=1SETfUtj-XwkorGf47X-WHf3HB_ScJnOu&sz=w2000',
  m4_slogan_rmutt1: 'https://drive.google.com/thumbnail?id=1NLETmet9mA2rR3JJnCUxlZgsOSpVSE3V&sz=w2000',
  m4_slogan_rmutt2: 'https://drive.google.com/thumbnail?id=1e9i6UOLQPbhy0dXfQJU6M8ns1FTs7Z6B&sz=w2000',
  m4_slogan_qaci1: 'https://drive.google.com/thumbnail?id=1JvTgrhDYpO8sSXNOCf7P_3osvrjij2St&sz=w2000',
  m4_slogan_qaci2: 'https://drive.google.com/thumbnail?id=1EhfNMVVmOkwQtiNevAFW-XmfNeqlv-ZD&sz=w2000',
  m4_solar_nsysu1: 'https://drive.google.com/thumbnail?id=1PNYhKTX67ggYYsJ0mhKev9ANCoU7RWSR&sz=w2000',
  m4_solar_nsysu2: 'https://drive.google.com/thumbnail?id=1pRd1eveHZFCIdraW-CzaTybJCLwfTSmr&sz=w2000',
  m4_solar_rmutt_intro: 'https://drive.google.com/thumbnail?id=1sB4SM58JMOCdWnO-zUc3tYQkpzwtrZhr&sz=w2000',
  m4_solar_mixed: 'https://drive.google.com/thumbnail?id=16h53T8MTMR8M4jTIyZPd76xcB0RcVs1M&sz=w2000',
  m4_solar_rmutt: 'https://drive.google.com/thumbnail?id=1VieGF8SKjvI9AK9seZQ50XGXCysiBfZB&sz=w2000',
  m4_solar_qaci1: 'https://drive.google.com/thumbnail?id=1AWAEfyO2-tgdi3NiQgj92UeFtGQbA_G2&sz=w2000',
  m4_solar_qaci2: 'https://drive.google.com/thumbnail?id=17j6-MdclEIJur-RclGd4TAmiRc6igdtl&sz=w2000',
  m4_sci_nsysu1: 'https://drive.google.com/thumbnail?id=19Iq72INoEM9qcm1UgL_uWu4D0vcU_IUP&sz=w2000',
  m4_sci_nsysu2: 'https://drive.google.com/thumbnail?id=1H8At-463D-HE_R8l048wcCqeu4DmIXdN&sz=w2000',
  m4_sci_nsysu3: 'https://drive.google.com/thumbnail?id=12a-UooNi61fTI8I6tSOcXf5InL75QtyF&sz=w2000',
  m4_sci_rmutt: 'https://drive.google.com/thumbnail?id=1CgnzrKTOPhIjxr9InPuAoZKkgIENCc-z&sz=w2000',
  m4_sci_qaci1: 'https://drive.google.com/thumbnail?id=1dAfqaMvYegAatb5lVQdWkRUWVfjdUtug&sz=w2000',
  m4_sci_qaci_intro: 'https://drive.google.com/thumbnail?id=1bhCW3Bz-V0oL4ivg07E60U9vzttiFCcr&sz=w2000',
  m4_highlight_painting: 'https://drive.google.com/thumbnail?id=1pRUxTr86WnZAxjrwMJhScwNcCRIlOEfl&sz=w2000',
  m4_group_nsysu: 'https://drive.google.com/thumbnail?id=1os6kBQR1O5jrP5CSTohwtd9kvzdm7Oqb&sz=w2000',
  m4_group_qaci: 'https://drive.google.com/thumbnail?id=1vvn5Vgy4bHGruxk3xaJBINROERPdpowS&sz=w2000',
  m4_group_rmutt: 'https://drive.google.com/thumbnail?id=1kW_4dK604Pj5L1Id4y31Lt5dziaK2y9u&sz=w2000',
  m4_group_qaci2: 'https://drive.google.com/thumbnail?id=1HZkuzKSWxOKrFMySfR0occwE8n2uejnh&sz=w2000',
  m4_robot2: 'https://drive.google.com/thumbnail?id=1IMBKWv1_MIMvC_Pz7kGfMpu-W_IhOaWM&sz=w2000',
  m4_robot3: 'https://drive.google.com/thumbnail?id=1hDNbi5MA5kpJe7UA4dlwBG2fkXF38ffw&sz=w2000',
  m4_robot_show: 'https://drive.google.com/thumbnail?id=114PjUKIuIA-848-U0SYLUisXjtdWeOdu&sz=w2000',
  m4_online_japan: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  m4_physical_aus: 'https://drive.google.com/thumbnail?id=1vvn5Vgy4bHGruxk3xaJBINROERPdpowS&sz=w2000',
  m4_gallery: [
    'https://drive.google.com/thumbnail?id=1iGcBkHxLJFT9oiqEWed4B13MeD87hIAk&sz=w2000',
    'https://drive.google.com/thumbnail?id=17sPfEjH68JhY8G1dpmYXsxTeGwJSwsko&sz=w2000',
    'https://drive.google.com/thumbnail?id=1zQvehyP8XW_P2JMnt-orNR-Y74fSin6F&sz=w2000',
    'https://drive.google.com/thumbnail?id=18pUzENnG7u0Rwag1my7_7lrKFbYrWxU0&sz=w2000',
    'https://drive.google.com/thumbnail?id=1Cys6Qt7CReJnMDyPJqzYaQsao8xBrZgj&sz=w2000',
    'https://drive.google.com/thumbnail?id=1ghH1zlt1T7EcpRdjqxXpjT09PH3d-Lqb&sz=w2000',
    'https://drive.google.com/thumbnail?id=1r0N5sxtN4avUi3GaVT4VMFD67pHLHPkU&sz=w2000',
  ],
  quiz_mango: '/quiz/mango.jpg',
  quiz_solar: '/quiz/solar.jpg',
  quiz_irrigation: '/quiz/irrigation.jpg',
  bsru_group1: 'https://drive.google.com/thumbnail?id=15uGYFl35ZDft8ZU9yKGZsSNNUcqilM5S&sz=w2000',
  bsru_group2: 'https://drive.google.com/thumbnail?id=1fgakLDDnFdSa6cpxt8g2c33gOqwpCZDR&sz=w2000',
  bsru_group3: 'https://drive.google.com/thumbnail?id=1ZVgtRgbPk_QrczncNClEsNDkRlNgg77G&sz=w2000',
  bsru_principal: 'https://drive.google.com/thumbnail?id=11ZA4HEuRXpSGiD0TNPOcyFbjncR9MxQo&sz=w2000',
  bsru_director: 'https://drive.google.com/thumbnail?id=1wonpFllWsqfPCw7736H2nWShD6yP9Ih1&sz=w2000',
  bsru_thaidance: 'https://drive.google.com/thumbnail?id=1uSmqw6yJ8XERJ2ncdQ--SFjpBOwc_Ckc&sz=w2000',
  bsru_twdance: 'https://drive.google.com/thumbnail?id=1lnnyN9_bz1PeR8eJSL21SfhMC0by00fG&sz=w2000',
  bsru_twnewyear1: 'https://drive.google.com/thumbnail?id=1cySNU4M8wn7D8J9lZ3jFMJGq8g24qdqV&sz=w2000',
  bsru_twnewyear2: 'https://drive.google.com/thumbnail?id=1LnVi4P4DkfIOzFge0PASnFpsPvBzNvDt&sz=w2000',
  bsru_couplets1: 'https://drive.google.com/thumbnail?id=1VP_ky0Fq_HHyVlx5taKwm7QYICJGNmtR&sz=w2000',
  bsru_couplets2: 'https://drive.google.com/thumbnail?id=1Zs4LfXKWZ-4RdQgE3soj3IO2AT0uCDZp&sz=w2000',
  bsru_selfintro: 'https://drive.google.com/thumbnail?id=1OjJhTVcMbQFYNuNXw1DtkIjxS0Koiqxn&sz=w2000',
  bsru_twshare: 'https://drive.google.com/thumbnail?id=1Sk_ZNi9S4oz_wTliznlnvG_1qOwHeYiJ&sz=w2000',
  bsru_mission: 'https://drive.google.com/thumbnail?id=1hEg71HlU0mW3KBFX19syTWQBKxGjvtx-&sz=w2000',
  bsru_course1: 'https://drive.google.com/thumbnail?id=18CNFVEQgvdigutbk1QroufkBQPML0QYf&sz=w2000',
  bsru_course2: 'https://drive.google.com/thumbnail?id=1Vl1uGhBOO645gHjtHBHrM93f2Sx5OOUq&sz=w2000',
  bsru_course3: 'https://drive.google.com/thumbnail?id=15VMj91HqL-kO84fBSSq0cZA9Ofu4Tg1Z&sz=w2000',
  bsru_course4: 'https://drive.google.com/thumbnail?id=14gbmE08AhYc69HpPRCVDJ1SQvTLGnfOY&sz=w2000',
  bsru_gifts: 'https://drive.google.com/thumbnail?id=1as69VMc7X0Bo3shQaPzf35yHrQI9kqB4&sz=w2000',
  bsru_teachers: 'https://drive.google.com/thumbnail?id=18xxYW3tZUjOm6AUSBDuXwr_cekD0lEHu&sz=w2000',
};

const IoTDashboard = () => {
  const [data, setData] = useState({ temp: 28.5, humidity: 65, light: 850, soil: 42, fan: false, pump: false });
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newTemp = +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1);
        const newSoil = Math.min(100, Math.max(0, +(prev.soil + (Math.random() * 2 - 1)).toFixed(0)));
        return {
          temp: newTemp,
          humidity: Math.min(100, Math.max(0, +(prev.humidity + (Math.random() * 2 - 1)).toFixed(0))),
          light: Math.max(0, +(prev.light + (Math.random() * 50 - 25)).toFixed(0)),
          soil: newSoil,
          fan: newTemp > 29,
          pump: newSoil < 35,
        };
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-2xl border border-slate-700 w-full max-w-4xl mx-auto my-12 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-700 pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div><span className="text-xs font-bold text-slate-400 uppercase tracking-widest">LIVE SIMULATION</span></div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">智慧農園監控中心</h3>
          <p className="text-xs text-slate-500 mt-1">模擬 Micro:bit 回傳之環境數據 (Simulated)</p>
        </div>
        <div className="flex gap-4">
          <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 ${data.fan ? 'bg-green-500/20 border-green-500 text-green-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}><Fan size={18} className={data.fan ? 'animate-spin' : ''} /><span className="text-xs font-bold">風扇: {data.fan ? 'ON' : 'OFF'}</span></div>
          <div className={`px-4 py-2 rounded-xl border flex items-center gap-2 ${data.pump ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-slate-800 border-slate-700 text-slate-500'}`}><RefreshCw size={18} className={data.pump ? 'animate-spin' : ''} /><span className="text-xs font-bold">水泵: {data.pump ? 'ON' : 'OFF'}</span></div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2"><span className="text-xs text-slate-400">環境溫度</span><Thermometer size={16} className="text-orange-400" /></div>
          <div className="text-3xl font-mono font-bold text-white mb-2">{data.temp}<span className="text-sm text-slate-500 ml-1">°C</span></div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden"><div className="bg-orange-500 h-full transition-all duration-1000" style={{ width: `${(data.temp / 40) * 100}%` }}></div></div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2"><span className="text-xs text-slate-400">環境濕度</span><Droplets size={16} className="text-blue-400" /></div>
          <div className="text-3xl font-mono font-bold text-white mb-2">{data.humidity}<span className="text-sm text-slate-500 ml-1">%</span></div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden"><div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${data.humidity}%` }}></div></div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2"><span className="text-xs text-slate-400">光照強度</span><Sun size={16} className="text-yellow-400" /></div>
          <div className="text-3xl font-mono font-bold text-white mb-2">{data.light}<span className="text-sm text-slate-500 ml-1">Lux</span></div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden"><div className="bg-yellow-400 h-full transition-all duration-1000" style={{ width: `${Math.min(100, (data.light / 1000) * 100)}%` }}></div></div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2"><span className="text-xs text-slate-400">土壤濕度</span><Leaf size={16} className={data.soil < 35 ? 'text-red-400 animate-pulse' : 'text-green-400'} /></div>
          <div className="text-3xl font-mono font-bold text-white mb-2">{data.soil}<span className="text-sm text-slate-500 ml-1">%</span></div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden"><div className={`h-full transition-all duration-1000 ${data.soil < 35 ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${data.soil}%` }}></div></div>
        </div>
      </div>
    </div>
  );
};

const GlobalWall = () => {
  const [activePartner, setActivePartner] = useState(null);
  const mapContainerRef = useRef(null);
  const [d3Loaded, setD3Loaded] = useState(false);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js')
    ]).then(() => {
      setD3Loaded(true);
    }).catch(err => console.error("Failed to load map libraries", err));
  }, []);

  const locations = [
    {
      id: 'tw',
      name: 'NEHSP (Pingtung)',
      coords: [120.486, 22.668],
      type: 'source',
      flag: '🇹🇼',
      school: 'NEHSP',
      website: 'https://nehs.ptc.edu.tw/',
      desc: 'Our Home Base'
    },
    {
      id: 'jp1',
      name: 'Satsuki Gakuen (Osaka)',
      coords: [135.56, 34.73],
      type: 'target',
      flag: '🇯🇵',
      school: 'Satsukigakuen',
      desc: 'Mango Exchange & SDGs',
      website: 'https://www-city-moriguchi-osaka-jp.translate.goog/kakukanoannai/moriguchishikyoikuiinkai/gakko/gimukyouikugakko/satsukigakuen/index.html'
    },
    {
      id: 'jp2',
      name: 'Minamata 2nd ES (Kumamoto)',
      coords: [130.40, 32.21],
      type: 'target',
      flag: '🇯🇵',
      school: 'Minamata 2nd ES',
      desc: 'Environmental Education'
    },
    {
      id: 'au',
      name: 'QACI (Brisbane)',
      coords: [153.02, -27.45],
      type: 'target',
      flag: '🇦🇺',
      school: 'QACI',
      desc: 'Global Forum'
    },
    {
      id: 'th1',
      name: 'Satit BSRU (Bangkok)',
      coords: [100.48, 13.73],
      type: 'target',
      flag: '🇹🇭',
      school: 'BSRU',
      desc: 'Cultural Co-creation'
    },
    {
      id: 'th2',
      name: 'RMUTT (Pathum Thani)',
      coords: [100.72, 14.03],
      type: 'target',
      flag: '🇹🇭',
      school: 'RMUTT',
      desc: 'Tech & Engineering'
    }
  ];

  useEffect(() => {
    if (!d3Loaded || !mapContainerRef.current || !window.d3 || !window.topojson) return;

    const container = mapContainerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    window.d3.select(container).selectAll("svg").remove();

    const svg = window.d3.select(container)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("background-color", "#1e293b");

    const g = svg.append("g");

    const projection = window.d3.geoMercator()
      .center([135, 15])
      .scale(width / 1.8)
      .translate([width / 2, height / 2]);

    const pathGenerator = window.d3.geoPath().projection(projection);

    window.d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then(world => {
      const countries = window.topojson.feature(world, world.objects.countries);

      g.selectAll("path")
        .data(countries.features)
        .enter().append("path")
        .attr("d", pathGenerator)
        .attr("fill", "#334155")
        .attr("stroke", "#475569")
        .attr("stroke-width", 0.5)
        .style("transition", "fill 0.3s")
        .on("mouseover", function() { window.d3.select(this).attr("fill", "#475569"); })
        .on("mouseout", function() { window.d3.select(this).attr("fill", "#334155"); });

      const pingtungCoords = locations.find(l => l.id === 'tw').coords;

      locations.forEach(partner => {
        if (partner.id === 'tw') return;
        const link = {type: "LineString", coordinates: [pingtungCoords, partner.coords]};

        g.append("path")
          .attr("d", pathGenerator(link))
          .attr("fill", "none")
          .attr("stroke", "#22c55e")
          .attr("stroke-width", 2)
          .attr("stroke-linecap", "round")
          .attr("opacity", 0.6)
          .style("pointer-events", "none")
          .attr("stroke-dasharray", function() { return this.getTotalLength(); })
          .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
          .transition().duration(2000).ease(window.d3.easeCubicOut)
          .attr("stroke-dashoffset", 0);
      });

      locations.forEach(loc => {
        const coords = projection(loc.coords);
        if (!coords) return;

        g.append("circle")
          .attr("cx", coords[0])
          .attr("cy", coords[1])
          .attr("r", 8)
          .attr("fill", loc.id === 'tw' ? "#ef4444" : "#f59e0b")
          .attr("opacity", 0)
          .append("animate")
          .attr("attributeName", "r")
          .attr("from", 8)
          .attr("to", 25)
          .attr("dur", "2s")
          .attr("repeatCount", "indefinite")
          .select(function() { return this.parentNode; })
          .append("animate")
          .attr("attributeName", "opacity")
          .attr("from", 0.6)
          .attr("to", 0)
          .attr("dur", "2s")
          .attr("repeatCount", "indefinite");

        g.append("circle")
          .attr("cx", coords[0])
          .attr("cy", coords[1])
          .attr("r", 6)
          .attr("fill", loc.id === 'tw' ? "#ef4444" : "#f59e0b")
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 2)
          .style("cursor", "pointer")
          .on("click", (event) => {
             event.stopPropagation();
             setActivePartner(loc);
          })
          .on("mouseover", function() { window.d3.select(this).attr("r", 9); })
          .on("mouseout", function() { window.d3.select(this).attr("r", 6); });

        let labelX = coords[0];
        let labelY = coords[1] - 15;
        let anchor = "middle";

        if (loc.id.includes('jp')) { labelX += 10; anchor = "start"; }
        if (loc.id === 'tw') { labelY += 30; }
        if (loc.id === 'au') { labelY += 25; }
        if (loc.id.includes('th')) { labelX -= 10; anchor = "end"; }

        g.append("text")
          .attr("x", labelX)
          .attr("y", labelY)
          .text(loc.name.split(' ')[0])
          .attr("text-anchor", anchor)
          .attr("font-size", "12px")
          .attr("font-weight", "bold")
          .attr("fill", "#ffffff")
          .style("text-shadow", "0 2px 4px rgba(0,0,0,0.8)")
          .style("pointer-events", "none");
      });

      const zoom = window.d3.zoom()
        .scaleExtent([1, 8])
        .on("zoom", (event) => g.attr("transform", event.transform));

      svg.call(zoom);

    });

  }, [d3Loaded]);

  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">Global Connection</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">從屏東走向世界</h2>
          <p className="text-slate-500 mt-2 text-sm">Interactive D3.js Map • 點擊光點探索</p>
        </div>

        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden group">
          <div ref={mapContainerRef} className="w-full h-full cursor-move"></div>
          {activePartner && (
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-xs animate-fade-in text-slate-800 z-30 border border-slate-200 pointer-events-auto">
              <div className="flex justify-between items-start mb-2"><div className="text-3xl mb-2">{activePartner.flag}</div><button onClick={(e) => { e.stopPropagation(); setActivePartner(null); }} className="text-slate-400 hover:text-slate-600"><X size={16} /></button></div>
              <h3 className="text-lg font-bold text-slate-900">{activePartner.school}</h3>
              <p className="text-xs text-green-600 font-bold uppercase mb-2">Partner in {activePartner.name}</p>
              {activePartner.desc && <p className="text-sm text-slate-600 leading-relaxed">{activePartner.desc}</p>}
              {activePartner.type === 'source' && <p className="text-sm text-slate-600 leading-relaxed">Our Home Base in Pingtung!</p>}
              {activePartner.website && <a href={activePartner.website} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors border-b border-blue-200 pb-0.5"><ExternalLink size={12} /> Visit School Website</a>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AICard = ({ lang, mode = 'preview' }) => {
  const [flippedCard, setFlippedCard] = useState(null);

  const cards = [
    {
      id: 1,
      img: 'https://drive.google.com/thumbnail?id=1skjP06oO0jFyHMX7ukM5GttKNJaAweFk&sz=w2000',
      title_zh: '拯救地球，別讓木瓜泡溫泉',
      desc_zh: '如果海平面上升，木瓜都會泡在水裡',
      title_en: 'Save the Earth, Don\'t Let Papayas Soak in Hot Springs',
      desc_en: 'If sea levels rise, papayas will be soaked in water.'
    },
    {
      id: 2,
      img: 'https://drive.google.com/thumbnail?id=1sDfPjWErghOlapJax6Fqkv5gXXndcK7v&sz=w2000',
      title_zh: '地球發燒，米飯變糟',
      desc_zh: '如果全球暖化影響，米飯都會哭泣，變得不好吃。',
      title_en: 'Earth Has a Fever, Rice Gets Bad',
      desc_en: 'Global warming makes rice cry and taste bad.'
    },
    {
      id: 3,
      img: 'https://drive.google.com/thumbnail?id=1tYanueHvlsOUWya703gwAqsiQmTNy-MP&sz=w2000',
      title_zh: '台灣溺水了',
      desc_zh: '如果海平面上升，臺灣會被淹沒',
      title_en: 'Taiwan is Drowning',
      desc_en: 'If sea levels rise, Taiwan will be submerged.'
    },
    {
      id: 4,
      img: 'https://drive.google.com/thumbnail?id=1dI7S8Rdg1EzSS3W10kQ913yhU_T5g-cG&sz=w2000',
      title_zh: '再熱下去，哈密瓜要變苦瓜了',
      desc_zh: '如果全球暖化影響，香甜的哈密瓜就會變成苦瓜',
      title_en: 'If It Gets Hotter, Melons Will Turn Bitter',
      desc_en: 'Global warming might turn sweet cantaloupes into bitter melons.'
    },
    {
      id: 5,
      img: 'https://drive.google.com/thumbnail?id=14QK6NGsJiYWv-UdYC2J2vxLXI1YYhTN-&sz=w2000',
      title_zh: '全球暖化，熱的牛轉乾坤',
      desc_zh: '當天氣變熱，牛奶產量也會下降',
      title_en: 'Global Warming, Turning Cows Around',
      desc_en: 'When the weather gets hot, milk production drops.'
    },
    {
      id: 6,
      img: 'https://drive.google.com/thumbnail?id=1BhZThxbTlQi8F2VLXc65xtWjPMDGl2pT&sz=w2000',
      title_zh: '海平面上升，蓮霧無處生',
      desc_zh: '如果海平面上升，就沒有屏東林邊好吃的蓮霧了',
      title_en: 'Sea Levels Rise, No Place for Wax Apples',
      desc_en: 'Rising sea levels mean no more delicious Linbian wax apples.'
    },
    {
      id: 7,
      img: 'https://drive.google.com/thumbnail?id=1diL3figeE_5sk0mb50JUOpjOfifE0q2k&sz=w2000',
      title_zh: '全球暖化，我好可',
      desc_zh: '全球暖化讓可可缺水，只能大喊我好可',
      title_en: 'Global Warming, I\'m So "Cocoa" Thirsty',
      desc_en: 'Global warming leaves cocoa thirsty, shouting for water.'
    },
    {
      id: 8,
      img: 'https://drive.google.com/thumbnail?id=1jw_UykruOr5GLdFjdYUms6y2ZfChvxpq&sz=w2000',
      title_zh: '颱風不停，哈密瓜變酸密瓜',
      desc_zh: '如果全球暖化影響，香甜的哈密瓜就會變成苦瓜',
      title_en: 'Typhoons Don\'t Stop, Melons Turn Sour',
      desc_en: 'Extreme weather affects the sweetness of cantaloupes.'
    },
    {
      id: 9,
      img: 'https://drive.google.com/thumbnail?id=10G8lZr535D0y2ESsznfabWqXrIjCglR_&sz=w2000',
      title_zh: '乾旱出走，樹葉全部離枝了',
      desc_zh: '如果全球暖化影響，樹葉將不會出現在樹上了，都熱死了',
      title_en: 'Drought Strikes, Leaves Leave the Branches',
      desc_en: 'Global warming causes trees to lose leaves from the heat.'
    },
    {
      id: 10,
      img: 'https://drive.google.com/thumbnail?id=1gdi8eofSAvVuIUwm9Ft4DfZDolM3K9xP&sz=w2000',
      title_zh: '可可哭了，巧克力變溶液',
      desc_zh: '全球暖化讓可可都融化了',
      title_en: 'Cocoa Cries, Chocolate Melts',
      desc_en: 'Global warming is melting the cocoa.'
    },
    {
      id: 11,
      img: 'https://drive.google.com/thumbnail?id=15Nw2oE_ZMAkc9niFxFJBelAUyCDI48AG&sz=w2000',
      title_zh: '海平面上升，沙灘變泳池',
      desc_zh: '海平面上升讓沙灘變成游泳池，我們要跟魚做朋友了',
      title_en: 'Sea Levels Rise, Beaches Become Pools',
      desc_en: 'Rising seas turn beaches into pools; we\'ll be friends with fish.'
    },
    {
      id: 12,
      img: 'https://drive.google.com/thumbnail?id=1QE2sgg8Vc2tXqLGGZIyeiUs9I3JiV3JU&sz=w2000',
      title_zh: '地球火爆，別再碳氣',
      desc_zh: '地球再熱下去，火山就要爆發了',
      title_en: 'Earth is Furious, Stop the Carbon',
      desc_en: 'If the Earth gets hotter, volcanoes might erupt.'
    },
  ];

  const displayCards = mode === 'preview'
    ? cards.filter(c => [2, 3, 6].includes(c.id))
    : cards;

  return (
    <div className={`bg-white overflow-hidden ${mode === 'full' ? 'mt-12' : 'py-16 border-t border-slate-100'}`}>
      <div className={mode === 'full' ? '' : 'container mx-auto px-6 max-w-6xl'}>
        <div className="text-center mb-12">
          <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Student Showcase</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {lang === 'en' ? 'AI Slogans: Student Creativity' : 'AI 標語猜猜看：學生創意作品'}
          </h2>
          <p className="text-slate-500 mt-2">
            {lang === 'en'
              ? 'Explore student-created AI posters combining local agriculture with climate issues.'
              : '欣賞學生運用 AI 工具，結合在地農產與氣候議題所創作的減碳海報。'}
          </p>
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${mode === 'preview' ? 'lg:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'} gap-8`}>
          {displayCards.map((card) => (
            <div key={card.id} className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
              <div className="relative w-full pt-[133%] overflow-hidden bg-slate-100">
                 <div className="absolute inset-0">
                    <Image src={card.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={lang === 'en' ? card.title_en : card.title_zh} />
                 </div>
                 <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md border border-white/20">AI Art</div>
              </div>

              <div className="p-6 flex flex-col flex-grow bg-white relative z-10">
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-purple-600 transition-colors">
                  {lang === 'en' ? card.title_en : card.title_zh}
                </h3>
                <div className="w-8 h-1 bg-purple-500 rounded-full mb-3 opacity-30 group-hover:opacity-100 transition-opacity"></div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {lang === 'en' ? card.desc_en : card.desc_zh}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -z-10"></div>
           <div className="text-center mb-8">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 inline-block">Special Feature</span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{lang === 'en' ? 'Student Creation: Digital Picture Book' : '學生創作：數位繪本'}</h3>
              <p className="text-slate-500 mt-2 max-w-2xl mx-auto">{lang === 'en' ? 'A storybook created by students to illustrate the importance of environmental protection.' : '學生們發揮創意，將氣候變遷與環境保護的觀念轉化為生動的繪本故事。'}</p>
           </div>

           <div className="relative w-full aspect-[16/9] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 border-4 border-white">
              <iframe
                loading="lazy"
                className="absolute w-full h-full top-0 left-0 border-0"
                src="https://www.canva.com/design/DAG10bSaebs/jRg_voivuBxmYlosA_80IA/view?embed"
                allowFullScreen="allowfullscreen"
                allow="fullscreen"
                title="Student Picture Book"
              ></iframe>
           </div>

           <div className="text-center mt-8">
              <a
                href="https://www.canva.com/design/DAG10bSaebs/jRg_voivuBxmYlosA_80IA/view?utm_content=DAG10bSaebs&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-700 transition-all hover:-translate-y-1"
              >
                 {lang === 'en' ? 'Open in Full Screen' : '開啟全螢幕閱讀'} <ExternalLink size={18} />
              </a>
           </div>
        </div>

      </div>
    </div>
  );
};

const ExhibitionDetail = ({ onBack, lang }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const gallery = [
    exhibitionImages.exh_intro1, exhibitionImages.exh_intro2, exhibitionImages.exh_intro3,
    exhibitionImages.exh_intro4, exhibitionImages.exh_intro5, exhibitionImages.exh_intro6
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto overflow-x-hidden animate-fade-in font-sans">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors">
          <ArrowLeft size={20} />{lang === 'en' ? 'Back' : '返回'}
        </button>
        <span className="font-bold text-slate-800">{lang === 'en' ? '2025 Exhibition' : '2025 成果發表展'}</span>
      </div>

      <div className="relative h-[45vh] w-full overflow-hidden bg-slate-900">
        <Image src={exhibitionImages.exh_group1} alt="Exhibition Group" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-5xl">
          <div className="inline-block px-3 py-1 bg-green-500 rounded-full text-xs font-bold mb-4">2025/11/14</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">{lang === 'en' ? 'Taiwan Technology Exhibition Showcase' : '台灣科技展：年度學習成果發表'}</h1>
          <p className="text-lg text-slate-200">{lang === 'en' ? 'Presenting a year of innovation and mechatronics to the world.' : '學生們認真準備發表內容，現場實作給嘉賓看，展現一整年的學習精華。'}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3"><Award className="text-yellow-500" />{lang === 'en' ? 'Honors & Recognition' : '獲獎殊榮'}</h2>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'en' ? 'Our dedication to digital learning was recognized with multiple awards.' : '我們在數位學習與機電整合課程上的投入，深獲參觀嘉賓與評審肯定。'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <div className="w-full h-64 rounded-xl mb-4 overflow-hidden bg-white">
                  <Image src={exhibitionImages.exh_award_bronze} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-slate-800 text-center">{lang === 'en' ? 'Promotion Bronze Award' : '課程實施推廣獎【銅質獎】'}</h4>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <div className="w-full h-64 rounded-xl mb-4 overflow-hidden bg-white">
                  <Image src={exhibitionImages.exh_award_pop} className="w-full h-full object-contain" />
                </div>
                <h4 className="font-bold text-slate-800 text-center">{lang === 'en' ? 'Most Popular Award' : '課程實施推廣【人氣獎】'}</h4>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image src={exhibitionImages.exh_group2} className="w-full object-cover h-full" />
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center">{lang === 'en' ? 'Exhibition Highlights' : '發表會精彩花絮'}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <Image src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutDetail = ({ onBack, lang }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto overflow-x-hidden animate-fade-in font-sans">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm w-full">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors"><ArrowLeft size={20} />{lang === 'en' ? 'Back' : '返回'}</button>
        <span className="font-bold text-slate-800">{lang === 'en' ? 'About Us' : '關於我們'}</span>
      </div>

      <div className="relative h-[50vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0"><Image src={images.about_philosophy} alt="Philosophy" className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000" /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">{lang === 'en' ? 'Learning on a Journey to the World' : '走向世界的學習旅程'}</h1>
          <p className="text-lg text-slate-200 max-w-2xl">{lang === 'en' ? 'We believe that learning happens not only inside the classroom but also on a journey to the world. Cultivating proactive communicators and problem-solvers.' : '我們相信學習不僅僅發生在教室內，更是走向世界的旅程。培育學生成為主動的溝通者與問題解決者。'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 animate-fade-in-up">
           {/* 校徽區域：加大尺寸、圓形白底、陰影優化 */}
           <div className="w-40 h-40 md:w-52 md:h-52 relative flex-shrink-0 bg-white rounded-full p-2 shadow-2xl ring-4 ring-slate-100 overflow-hidden transition-transform duration-500 hover:scale-105">
               <Image src={images.about_logo} className="w-full h-full object-cover rounded-full bg-transparent" alt="School Logo" />
           </div>
           <div className="text-center md:text-left">
               <span className="text-green-600 font-bold tracking-wider text-sm uppercase">{lang === 'en' ? 'Our School' : '國立屏科實驗高級中等學校'}</span>
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-2">{lang === 'en' ? 'NEHSP' : '國立屏科實驗高級中等學校國小部'}</h2>
               <p className="text-slate-500 max-w-md">{lang === 'en' ? 'National Experimental High School at Pingtung Science Park' : '培養接軌國際、具備科學素養的未來人才'}</p>
           </div>
        </div>

        <div className="text-center mb-12"><span className="text-green-600 font-bold tracking-wider text-sm uppercase">{lang === 'en' ? 'Our Mission' : '設校目的'}</span><h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Why We Are Here' : '為未來而教'}</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors"><Building size={24} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'en' ? 'Serving the Park' : '服務園區'}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{lang === 'en' ? 'Addressing educational needs for families in Pingtung Science Park and Technology Industrial Park.' : '滿足屏東科學園區、科技產業園區及高鐵特區之員工子女教育需求。'}</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors"><Globe size={24} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'en' ? 'Global Talent' : '延攬人才'}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{lang === 'en' ? 'Providing international-standard resources to cultivate bilingual and bicultural talents.' : '提供國際化教育資源，協助海外人才子女順利銜接，培育雙語雙文化人才。'}</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors"><Rocket size={24} /></div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{lang === 'en' ? 'Future Tech' : '培育高科技'}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{lang === 'en' ? 'Establishing a modern, technology-oriented school with a strong foundation in humanities.' : '建立一所國際化、科技導向的實驗學校，厚植人文藝術底蘊，培育國家未來人才。'}</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-100 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="text-center mb-12">
             <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">{lang === 'en' ? 'Campus Life' : '校園風采'}</span>
             <h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Discover NEHSP' : '影音介紹與精神象徵'}</h2>
           </div>

           <div className="grid md:grid-cols-2 gap-12 items-start">
             <div className="space-y-8">
               <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                 <Play className="text-red-500 fill-current" /> {lang === 'en' ? 'Featured Videos' : '精選影音'}
               </h3>

               <div className="group">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-black relative border-4 border-white">
                     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/G99_FyXiI1U" title="English Intro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                  <div className="mt-3 flex items-start justify-between">
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg">{lang === 'en' ? 'Introducing NEHSP (English)' : '屏科實中英語介紹'}</h4>
                        <p className="text-sm text-slate-500">{lang === 'en' ? 'Students introduce our school features in English.' : '由學生全程英語導覽，展現雙語教育成果。'}</p>
                     </div>
                  </div>
               </div>

               <div className="group">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-black relative border-4 border-white">
                     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/wWdEPh06m-s" title="Campus Intro" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
                  <div className="mt-3 flex items-start justify-between">
                     <div>
                        <h4 className="font-bold text-slate-900 text-lg">{lang === 'en' ? 'School Campus Tour' : '學校校園簡介'}</h4>
                        <p className="text-sm text-slate-500">{lang === 'en' ? 'A look at our vibrant learning environment.' : '帶您一覽充滿活力的校園學習環境。'}</p>
                     </div>
                  </div>
               </div>
             </div>

             <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center relative overflow-hidden group hover:shadow-2xl transition-all">
                    <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                    <div className="absolute top-3 right-3 opacity-10 rotate-12">
                       <Award size={100} />
                    </div>

                    <span className="text-orange-500 font-bold tracking-wider text-xs uppercase mb-2 block">{lang === 'en' ? 'Our Mascot' : '學校吉祥物'}</span>
                    <h3 className="text-2xl font-bold mb-6 text-slate-800">{lang === 'en' ? 'NEHSP Spirit' : '屏科實中精神象徵'}</h3>

                    <div className="w-56 h-56 mx-auto relative z-10 my-4 transform group-hover:scale-110 transition-transform duration-500">
                       <Image src={images.about_mascot} className="w-full h-full object-contain bg-white" alt="School Mascot" />
                    </div>

                    <div className="mt-6 text-slate-600 bg-slate-50 p-4 rounded-xl text-sm leading-relaxed">
                       {lang === 'en' ? 'Representing energy, innovation, and a bright future! Our mascot embodies the spirit of our students - curious, active, and ready to explore the world.' : '象徵活力、創新與光明的未來！我們的吉祥物體現了屏科實中學生的精神——充滿好奇心、積極主動，隨時準備好探索世界。'}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Users size={18} className="text-blue-500"/> {lang === 'en' ? 'Student Activities' : '校園剪影'}</h4>

                   <div className="space-y-6">
                      <div className="group">
                          <div className="aspect-video rounded-xl overflow-hidden mb-2 relative shadow-md">
                             <Image src={images.about_traffic} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-[10px] font-bold px-2 py-1 bg-blue-600 rounded-full">Traffic Safety</span>
                             </div>
                          </div>
                          <p className="text-sm text-slate-700 font-medium leading-relaxed">
                             {lang === 'en' ? 'Participating in Pingtung County traffic safety event, pictured with the County Magistrate.' : '我們參加屏東縣政府的交通安全活動，並與縣長合影留念。'}
                          </p>
                      </div>

                      <div className="group">
                          <div className="aspect-video rounded-xl overflow-hidden mb-2 relative shadow-md">
                             <Image src={images.about_basketball} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                             <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-[10px] font-bold px-2 py-1 bg-orange-500 rounded-full">Champions</span>
                             </div>
                          </div>
                          <p className="text-sm text-slate-700 font-medium leading-relaxed">
                             {lang === 'en' ? 'Our basketball team won the championship!' : '我們籃球隊表現優異，參加比賽奪得冠軍！'}
                          </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                          <Image src={images.about_intro1} className="rounded-lg shadow-sm h-20 w-full object-cover grayscale hover:grayscale-0 transition-all" />
                          <Image src={images.about_intro2} className="rounded-lg shadow-sm h-20 w-full object-cover grayscale hover:grayscale-0 transition-all" />
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 text-center">
          <a href="https://nehs.ptc.edu.tw/nss/p/index" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all hover:-translate-y-1">{lang === 'en' ? 'Visit Official School Website' : '前往學校官方網站'}<ExternalLink size={18} /></a>
      </div>

      <div className="w-full bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40"><Image src={images.about_campus} className="w-full h-full object-cover" alt="Campus" /></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">{lang === 'en' ? 'Coming Soon' : '即將登場'}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">{lang === 'en' ? 'Our Future Campus' : '遇見未來校園'}</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">{lang === 'en' ? 'Expected to be completed in August 2026. A modern, smart campus embodying technology, sustainability, and humanities.' : '預計於 2026 年 8 月完工。這將是一座集結科技、永續與人文藝術的現代化智慧校園，期待與您在此展開無限可能的學習旅程。'}</p>
          <div className="inline-flex items-center gap-2 text-green-400 font-bold"><Target size={20} /><span>Target: 2026.08</span></div>
        </div>
      </div>
    </div>
  );
};

const BSRUExchangeDetail = ({ onBack, lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in font-sans">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors"><ArrowLeft size={20} />{lang === 'en' ? 'Back' : '返回'}</button>
        <span className="font-bold text-slate-800">{lang === 'en' ? 'BSRU Exchange' : '臺泰國際交流'}</span>
      </div>
      <div className="relative h-[40vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
            <Image src={images.bsru_group1} alt="BSRU Visit" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl mx-auto text-white">
          <div className="inline-block px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Major Event</div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {lang === 'en' ? 'Green Mango Expedition: Taiwan-Thailand Design Journey' : '綠色芒果探險隊：臺泰減碳設計之旅'}
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            {lang === 'en' ? 'BSRU elementary students visited us for a co-learning adventure on net-zero strategies.' : '泰國 BSRU 國小學生實體到訪，與我們共同進行淨零排放策略的跨域學習探險。'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-16 text-center">
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                {lang === 'en'
                    ? 'In this special event, Taiwanese students acted as "Little Teachers," guiding Thai partners to explore carbon footprints. We used AI tools like "Da-Ge AI" to co-design carbon reduction plans for Thai mangoes. It was a journey of cross-cultural communication, technology application, and environmental action.'
                    : '在這場特別的活動中，臺灣學生擔任「小老師」，引導泰國夥伴探索碳足跡議題。我們運用「達哥 AI」等科技工具，共同為泰國芒果設計減碳方案。這是一趟融合跨文化溝通、科技應用與環保行動的學習之旅。'}
             </p>
        </div>

        <div className="space-y-16">
            <div className="space-y-6">
                <div className="text-center">
                    <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Part 1</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{lang === 'en' ? 'Cultural Exchange & Performances' : '文化與友誼的碰撞'}</h3>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm leading-relaxed">
                        {lang === 'en' ? 'The exchange event kicked off with a vibrant cultural performance! Our students and teachers from BSRU, Thailand, introduced their respective cultures through exciting performances. Our students also gave the Thai visitors a special introduction to Taiwanese Lunar New Year customs, letting them create their own spring couplets and experience our festive culture firsthand. The atmosphere was filled with joy and laughter.' : '交流活動在熱情洋溢的文化表演中揭開序幕！我們與來自泰國 BSRU 的師生們，透過精彩的表演互相介紹彼此的文化。我們的學生也特別向泰國師生介紹台灣農曆新年的習俗，讓他們親手製作春聯，親身體驗台灣的節慶文化，現場氣氛充滿歡聲笑語。'}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2 space-y-2">
                           <Image src={images.bsru_thaidance} className="rounded-xl shadow-md w-full aspect-video object-cover" />
                           <p className="text-xs text-center text-slate-500 font-bold">{lang === 'en' ? 'Thai Dance' : '泰國舞蹈表演'}</p>
                        </div>
                        <div className="space-y-2">
                           <Image src={images.bsru_twdance} className="rounded-xl shadow-md w-full aspect-video object-cover" />
                           <p className="text-xs text-center text-slate-500 font-bold">{lang === 'en' ? 'Taiwan Dance' : '台灣舞蹈表演'}</p>
                        </div>
                        <div className="space-y-2">
                           <Image src={images.bsru_twnewyear1} className="rounded-xl shadow-md w-full aspect-video object-cover" />
                           <p className="text-xs text-center text-slate-500 font-bold">{lang === 'en' ? 'Lunar New Year Intro' : '臺灣新年介紹'}</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 flex flex-col space-y-2">
                        <div className="flex-grow rounded-xl overflow-hidden shadow-md bg-slate-100">
                             <Image src={images.bsru_couplets1} className="w-full h-full object-contain" />
                        </div>
                        <p className="text-xs text-center text-slate-500 font-bold">{lang === 'en' ? 'Couplets Making' : '製作春聯體驗'}</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                 <div className="text-center">
                    <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">Part 2</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{lang === 'en' ? 'Course Content Sharing' : '知識與科技的跨國共創'}</h3>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm leading-relaxed">
                        {lang === 'en' ? 'The highlight of this exchange was the collaborative creation between students from both sides during our "Net-Zero Strategist" course. Our young strategists teamed up with students from BSRU, Thailand, to jointly utilize AI tools and mechatronics technology. Using "Pingtung Mango" as a case study, they worked together to design solutions for monitoring and analyzing carbon emission data. This cross-cultural co-creation not only showcased the students\' practical skills but also proved that technology is a universal language that connects the world.' : '這場交流的重頭戲，是雙方學生在「淨零碳排策略家」課程中的共同創作。我們的小小策略家們，與泰國 BSRU 的學生們分組合作，他們共同運用AI 工具與機電整合技術，並以「屏東芒果」為案例，一起設計能夠監測與分析碳排數據的解決方案。這場跨文化的共創不僅展現了學生的實作能力，更證明了科技是連結世界的共通語言。'}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg"><Image src={images.bsru_twshare} className="w-full h-full object-cover" /></div>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg"><Image src={images.bsru_mission} className="w-full h-full object-cover" /></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Image src={images.bsru_course1} className="rounded-xl shadow-md w-full h-32 object-cover" />
                    <Image src={images.bsru_course2} className="rounded-xl shadow-md w-full h-32 object-cover" />
                    <Image src={images.bsru_course3} className="rounded-xl shadow-md w-full h-32 object-cover" />
                    <Image src={images.bsru_course4} className="rounded-xl shadow-md w-full h-32 object-cover" />
                </div>
            </div>

             <div className="space-y-6">
                <div className="text-center">
                    <span className="text-yellow-600 font-bold tracking-wider text-sm uppercase">Part 3</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{lang === 'en' ? 'Precious Moments and Future Outlook' : '共創永續，展望未來'}</h3>
                    <p className="text-slate-500 max-w-2xl mx-auto mt-2 text-sm leading-relaxed">
                        {lang === 'en' ? 'This exchange was not just about the transfer of knowledge, but also about building friendships. At the end of the event, both sides exchanged thoughtfully prepared gifts and took precious photos together. This successful international exchange has laid a solid foundation for our future cross-border collaborations and inspires our students to continue striving on the path of global sustainability.' : '這次的交流不僅是知識的傳遞，更是友誼的建立。活動尾聲，雙方交換了精心準備的禮物，並留下珍貴的合影。這次成功的國際交流經驗，為我們未來的跨國協作打下了堅實的基礎，也激勵學生們持續在全球永續的道路上努力前行。'}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"><Image src={images.bsru_gifts} className="w-full h-full object-cover" /></div>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"><Image src={images.bsru_teachers} className="w-full h-full object-cover" /></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                 <Image src={images.bsru_group1} className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover hover:scale-105 transition-transform" />
                 <Image src={images.bsru_group2} className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover hover:scale-105 transition-transform" />
                 <Image src={images.bsru_group3} className="rounded-2xl shadow-lg w-full aspect-[4/3] object-cover hover:scale-105 transition-transform" />
            </div>

        </div>

        <div className="mt-16 text-center">
            <a href="https://sites.google.com/nehs.ptc.edu.tw/elementary-d-learning/modules-content/%E6%A8%A1%E7%B5%84%E5%9B%9B-net-zero-%E7%AD%96%E7%95%A5%E5%AE%B6?authuser=0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
                {lang === 'en' ? 'View Full Documentation on Google Sites' : '前往 Google Sites 查看完整活動紀錄'} <ExternalLink size={16} />
            </a>
        </div>

      </div>
    </div>
  );
};
const PhysicalExchangeDetail = ({ onBack, lang }) => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in font-sans">
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors"><ArrowLeft size={20} />{lang === 'en' ? 'Back' : '返回'}</button>
                <span className="font-bold text-slate-800">{lang === 'en' ? 'In-Person Interaction' : '實體國際交流'}</span>
            </div>
            <div className="relative h-[40vh] w-full overflow-hidden bg-slate-900">
               <div className="absolute inset-0">
                  <Image src={images.m4_group_qaci} className="w-full h-full object-cover opacity-60" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl mx-auto text-white">
                  <div className="inline-block px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-bold mb-4 uppercase tracking-wider">Global Connection</div>
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                    {lang === 'en' ? 'Bringing the World to Our Classroom' : '讓世界走進教室'}
                  </h1>
                  <p className="text-lg text-slate-200 max-w-2xl">
                    {lang === 'en' ? 'Hosting friends from Australia, Thailand, and international students from NSYSU for a day of cultural and academic exchange.' : '很榮幸能接待來自澳洲昆士蘭創意產業學院 (QACI)、泰國皇家理工大學 (RMUTT) 的師生，以及中山大學的外籍生。'}
                  </p>
               </div>
            </div>

            <div className="container mx-auto px-6 py-12 max-w-6xl">

                 <div className="mb-20">
                     <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">{lang === 'en' ? 'Welcome Friends' : '有朋自遠方來'}</h2>
                        <p className="text-slate-500 mt-2">{lang === 'en' ? 'Precious moments with our international guests.' : '跨越國界的友誼，從這裡開始。'}</p>
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                            <Image src={images.m4_group_qaci} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4"><span className="text-white font-bold text-sm">Australia QACI</span></div>
                         </div>
                         <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                            <Image src={images.m4_group_rmutt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4"><span className="text-white font-bold text-sm">Thailand RMUTT</span></div>
                         </div>
                         <div className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                            <Image src={images.m4_group_nsysu} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4"><span className="text-white font-bold text-sm">NSYSU International Students</span></div>
                         </div>
                     </div>
                 </div>

                 <div className="mb-20 bg-slate-50 rounded-3xl p-8 border border-slate-100">
                     <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2 space-y-4">
                           <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Cultural Exchange</span>
                           <h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'Traditional Thai Dance' : '文化展演：泰國傳統舞蹈'}</h3>
                           <p className="text-slate-600 leading-relaxed">
                              {lang === 'en' ? 'Students from Thailand performed a traditional dance, teaching us about their rich heritage.' : '泰國學生帶來精彩的傳統舞蹈表演，讓我們在優美的舞姿中感受泰國文化的獨特魅力。'}
                           </p>
                        </div>
                        <div className="w-full md:w-1/2">
                           <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-black border-4 border-white">
                               <iframe width="100%" height="100%" src="https://www.youtube.com/embed/OalbqYzoPr0" title="Thai Dance" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                           </div>
                        </div>
                     </div>
                 </div>

                 <div className="mb-20 space-y-16">
                     <div>
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><Lightbulb size={20} /></div>
                           <h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'AI Slogans Sharing' : 'AI 標語創作分享'}</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           <Image src={images.m4_slogan_qaci1} className="rounded-xl shadow-md w-full aspect-square object-cover" />
                           <Image src={images.m4_slogan_rmutt1} className="rounded-xl shadow-md w-full aspect-square object-cover" />
                           <Image src={images.m4_slogan_nsysu2} className="rounded-xl shadow-md w-full aspect-square object-cover" />
                           <Image src={images.m4_slogan_foreign} className="rounded-xl shadow-md w-full aspect-square object-cover" />
                        </div>
                     </div>

                     <div>
                        <div className="flex items-center gap-4 mb-6">
                           <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600"><Sun size={20} /></div>
                           <h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'Solar Cooker Demonstration' : '太陽能鍋實作展示'}</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                             <div className="col-span-2 md:col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-lg relative group">
                                <Image src={images.m4_solar_mixed} className="w-full h-full object-cover" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4"><span className="text-white text-xs font-bold">Joint Discussion</span></div>
                             </div>
                             <Image src={images.m4_solar_qaci1} className="rounded-xl shadow-md w-full h-48 object-cover" />
                             <Image src={images.m4_solar_rmutt_intro} className="rounded-xl shadow-md w-full h-48 object-cover" />
                             <Image src={images.m4_solar_nsysu1} className="rounded-xl shadow-md w-full h-48 object-cover" />
                             <Image src={images.m4_solar_qaci2} className="rounded-xl shadow-md w-full h-48 object-cover" />
                        </div>
                     </div>
                 </div>

                 <div className="mb-20">
                     <div className="flex items-center gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600"><BookOpen size={20} /></div>
                        <div>
                           <h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'Science Fair Presentation' : '科展作品全英解說'}</h3>
                           <p className="text-sm text-slate-500">{lang === 'en' ? 'Our students presenting scientific research in English.' : '學生自信地向外國賓客介紹科學研究成果。'}</p>
                        </div>
                     </div>

                     <div className="grid md:grid-cols-2 gap-8 mb-8">
                         <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/T7pGba3nFlc" title="Science Fair" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                         </div>
                         <div className="grid grid-cols-2 gap-4">
                            <Image src={images.m4_sci_qaci_intro} className="rounded-xl shadow-md w-full h-full object-cover" />
                            <Image src={images.m4_sci_nsysu3} className="rounded-xl shadow-md w-full h-full object-cover" />
                         </div>
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Image src={images.m4_sci_rmutt} className="rounded-xl shadow-sm hover:shadow-md transition-all" />
                        <Image src={images.m4_sci_nsysu1} className="rounded-xl shadow-sm hover:shadow-md transition-all" />
                        <Image src={images.m4_sci_qaci1} className="rounded-xl shadow-sm hover:shadow-md transition-all" />
                        <Image src={images.m4_sci_nsysu2} className="rounded-xl shadow-sm hover:shadow-md transition-all" />
                     </div>
                 </div>

                 <div>
                    <div className="text-center mb-10"><h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'Tech & Art Highlights' : '科技與藝術的交會'}</h3></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                             <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4"><Image src={images.m4_robot_show} className="w-full h-full object-cover" /></div>
                             <h4 className="font-bold text-slate-800 text-center">{lang === 'en' ? 'Robotics Demo' : '機器人展示'}</h4>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                             <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4"><Image src={images.m4_highlight_painting} className="w-full h-full object-cover" /></div>
                             <h4 className="font-bold text-slate-800 text-center">{lang === 'en' ? 'Art Introduction' : '畫作理念分享'}</h4>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                             <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4"><Image src={images.m4_robot3} className="w-full h-full object-cover" /></div>
                             <h4 className="font-bold text-slate-800 text-center">{lang === 'en' ? 'Interactive Fun' : '科技互動體驗'}</h4>
                        </div>
                    </div>
                 </div>

            </div>
        </div>
    );
};

const ModuleDetail = ({ module, onBack, lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [module]);

  const renderDualSystems = () => (
    <div className="mb-16 space-y-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 relative inline-block">
          {lang === 'en' ? 'Dual Core Systems' : '雙核心系統實作'}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
        </h2>
      </div>
      {module.details.systems.map((sys, idx) => (
        <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
          <div className="w-full lg:w-1/2">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <Image src={sys.img} alt={sys.title} className="w-full aspect-video lg:h-[400px] lg:aspect-auto object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-2">{sys.tags.map((tag, tIdx) => (<span key={tIdx} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30">{tag}</span>))}</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">0{idx + 1}</div><h3 className="text-3xl font-bold text-slate-900">{sys.title}</h3></div>
            <p className="text-lg text-slate-600 leading-relaxed">{sys.desc}</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Cpu size={18} className="text-blue-500" />{lang === 'en' ? 'Key Components' : '關鍵元件'}</h4>
              <ul className="grid grid-cols-2 gap-2">{sys.components.map((comp, cIdx) => (<li key={cIdx} className="flex items-center gap-2 text-sm text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>{comp}</li>))}</ul>
            </div>

            {sys.videoId && (
              <div className="mt-6">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Play size={18} className="text-red-500 fill-current" />
                    {lang === 'en' ? 'System Demo Video' : '實作成果影片'}
                  </h4>
                  <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black border-2 border-white relative group">
                     <iframe
                       width="100%"
                       height="100%"
                       src={`https://www.youtube.com/embed/${sys.videoId}`}
                       title={sys.title}
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                       allowFullScreen
                       className="absolute inset-0 w-full h-full"
                     ></iframe>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    {lang === 'en' ? 'Watch the students\' creation in action.' : '觀看學生親手製作的裝置實際運作情形。'}
                  </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fade-in font-sans">
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors"><ArrowLeft size={20} />{lang === 'en' ? 'Back' : '返回'}</button>
        <span className="font-bold text-slate-800">{module.title}</span>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center">
          <div className="w-full lg:w-1/2">
             <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative">
               <Image src={module.img} alt={module.title} className="w-full h-full object-cover" />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">{module.tag}</div>
             </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
             <h1 className={`font-black text-slate-900 leading-tight ${lang === 'en' ? 'text-2xl lg:text-3xl' : 'text-3xl lg:text-4xl'}`}>
                {lang === 'en' ? module.fullDesc : module.fullDesc.split('。')[0] + '。'}
             </h1>
             <p className="text-lg text-slate-600 leading-relaxed">{module.details.intro}</p>
             <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2"><Target size={20}/> {lang === 'en' ? 'Learning Objectives' : '學習目標'}</h3>
                <ul className="space-y-2">{module.details.objectives.map((obj, i) => (<li key={i} className="flex items-start gap-2 text-slate-700 text-sm"><div className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-green-500"></div>{obj}</li>))}</ul>
             </div>
          </div>
        </div>

        {module.id === '02' && renderDualSystems()}

        {module.id === '01' && (
           <AICard lang={lang} mode="full" />
        )}

        {module.id === '04' && (
          <div className="space-y-24 mb-16">
            <div>
              <div className="text-center mb-12">
                <span className="text-blue-500 font-bold tracking-wider text-sm uppercase">Online Exchange I</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Japan Exchange (Satsukigakuen)' : '日本學校交流 (Satsukigakuen)'}</h2>
              </div>
              <div className="relative border-l-4 border-blue-100 ml-4 md:ml-12 space-y-16">
                  <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                      <div className="flex flex-col lg:flex-row gap-8">
                          <div className="w-full lg:w-5/12 space-y-4">
                              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-2">Session 1 • 2024.05.13</div>
                              <h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'Climate Change Sharing' : '氣候變遷主題分享'}</h3>
                              <p className="text-slate-600 leading-relaxed">
                                {lang === 'en'
                                  ? "This was our first official exchange. We prepared English presentations on 'Climate Change' to introduce global warming impacts and actions elementary students can take."
                                  : '這是我們雙方的第一次正式交流。我們準備了關於「氣候變遷 (Climate Change)」的英文簡報，向日方同學介紹全球暖化對環境的影響，以及我們身為小學生可以採取的行動。'}
                              </p>
                              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-lg"><iframe src="https://www.youtube.com/embed/Uibfpsq0wgI" title="0513 Climate Change Presentation" width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
                          </div>
                          <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4">
                              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md"><Image src={images.m4_satsuki_0513_1} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
                              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md"><Image src={images.m4_satsuki_0513_2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
                              <div className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden shadow-md"><Image src={images.m4_satsuki_0513_4} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
                          </div>
                      </div>
                  </div>
                  <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
                      <div className="flex flex-col lg:flex-row gap-8">
                          <div className="w-full lg:w-5/12 space-y-4">
                              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-2">Session 2 • 2024.06.13</div>
                              <h3 className="text-2xl font-bold text-slate-900">{lang === 'en' ? 'Life Context & Osaka Expo' : '生活情境與大阪博覽會'}</h3>
                              <p className="text-slate-600 leading-relaxed">
                                {lang === 'en'
                                  ? "The second exchange was more life-oriented. We prepared questions about daily life, and the Japanese students introduced the upcoming 'Osaka Expo'."
                                  : '第二次交流更加生活化。我們準備了生活情境的英文提問，了解日本小學生的日常生活；日方則熱情地向我們介紹即將到來的「大阪博覽會 (Osaka Expo)」。'}
                              </p>
                              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mt-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Lightbulb className="text-yellow-500" size={20} />
                                  <h4 className="font-bold text-slate-800 text-sm">{lang === 'en' ? 'Teaching Highlight: Differentiation' : '教學亮點：差異化教學'}</h4>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {lang === 'en'
                                    ? 'Adopting a grouping strategy where students with stronger English skills lead discussions and formulate questions.'
                                    : '採用分組策略，由英語能力較強的學生擔任組長，帶領組員共同討論並提出問題。'}
                                </p>
                              </div>
                               <div className="grid grid-cols-1 gap-2 mt-4">
                                  <div className="aspect-video w-full rounded-lg overflow-hidden bg-black shadow-md"><iframe src="https://www.youtube.com/embed/1nSci9UIO4w" title="0613 Q&A" width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
                               </div>
                          </div>
                          <div className="w-full lg:w-7/12 grid grid-cols-2 gap-4">
                               <div className="col-span-2 aspect-[2/1] rounded-2xl overflow-hidden shadow-md"><Image src={images.m4_satsuki_0613_osaka} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
                              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md"><Image src={images.m4_satsuki_0613_qna} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
                              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md"><Image src={images.m4_satsuki_0613_qna2} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" /></div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
              <div className="text-center mb-16">
                <span className="text-teal-600 font-bold tracking-wider text-sm uppercase">Online Exchange II</span>
                <h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Japan Minamata 2nd ES' : '日本水俁第二小學校 (Minamata)'}</h2>
                <p className="text-slate-500 mt-4">
                  {lang === 'en' ? 'From getting to know each other to deep discussions on SDGs, we conducted a semester-long exchange.' : '從認識彼此到深入探討 SDGs 議題，我們進行了為期一學期的深度交流。'}
                </p>
              </div>
              <div className="space-y-24">
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold">Session 1 • 06.20</div>
                        <h3 className="text-2xl font-bold text-slate-800">{lang === 'en' ? 'Meet & Greet' : '初次見面：相見歡'}</h3>
                        <p className="text-slate-600">
                          {lang === 'en' ? 'Self-introductions and sharing Pingtung campus features and digital learning environment.' : '雙方互動認識，進行自我介紹。我們分享了屏東校園特色與數位學習環境。'}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-4"><div className="aspect-video rounded-lg overflow-hidden bg-black"><iframe src="https://www.youtube.com/embed/pxBWxZY1RX8" width="100%" height="100%" /></div><div className="aspect-video rounded-lg overflow-hidden bg-black"><iframe src="https://www.youtube.com/embed/VvZHMJ9h1XM" width="100%" height="100%" /></div></div>
                      </div>
                      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4"><Image src={images.m4_minamata_0620_intro} className="rounded-xl shadow-md rotate-2 hover:rotate-0 transition-transform duration-500" /><Image src={images.m4_minamata_0620_interact} className="rounded-xl shadow-md -rotate-2 hover:rotate-0 transition-transform duration-500 mt-8" /></div>
                  </div>
                  <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold">Session 2 • 09.26</div>
                        <h3 className="text-2xl font-bold text-slate-800">{lang === 'en' ? 'Pingtung Produce & Climate' : '屏東農產與氣候挑戰'}</h3>
                        <p className="text-slate-600">
                          {lang === 'en' ? 'Introducing local fruits and sharing climate issues faced by agriculture. Japanese students showed great curiosity about tropical fruits.' : '介紹屏東特色水果給日方學生，並分享目前農產品所面臨到的氣候問題。日方對於台灣熱帶水果展現出高度好奇。'}
                        </p>
                        <div className="aspect-video rounded-lg overflow-hidden bg-black shadow-lg mt-4"><iframe src="https://www.youtube.com/embed/msuIvLQcTMo" width="100%" height="100%" /></div>
                      </div>
                      <div className="w-full md:w-1/2 grid grid-cols-2 gap-2">
                        <div className="col-span-2 aspect-[2/1] rounded-xl overflow-hidden"><Image src={images.m4_minamata_0926_comm1} className="w-full h-full object-cover" /></div>
                        <Image src={images.m4_minamata_0926_fruit} className="rounded-lg aspect-video w-full object-cover" />
                        <Image src={images.m4_minamata_0926_fruit1} className="rounded-lg aspect-video w-full object-cover" />
                        <Image src={images.m4_minamata_0926_fruit4} className="rounded-lg aspect-video w-full object-cover" />
                        <Image src={images.m4_minamata_0926_climate} className="rounded-lg aspect-video w-full object-cover" />
                      </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold">Session 3 • 10.17</div>
                        <h3 className="text-2xl font-bold text-slate-800">{lang === 'en' ? 'Deep Dive: Minamata Disease' : '深入議題：水俁病初探'}</h3>
                        <p className="text-slate-600">
                          {lang === 'en' ? 'We introduced Taiwan features, while they shared the history of "Minamata Disease", sparking reflections on environmental pollution.' : '延續上次未完成的氣候議題，我們進一步介紹台灣特色。日方則分享了當地著名的「水俁病」歷史背景，引發我們對環境汙染的省思。'}
                        </p>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="aspect-video rounded-lg overflow-hidden bg-black"><iframe src="https://www.youtube.com/embed/R8n-CObr6OE" width="100%" height="100%" title="1017 JP QA" /></div>
                          <div className="aspect-video rounded-lg overflow-hidden bg-black"><iframe src="https://www.youtube.com/embed/P5rBPEC6cVU" width="100%" height="100%" title="1017 TW QA" /></div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                        <Image src={images.m4_minamata_1017_disease} className="rounded-xl shadow-md w-full h-48 object-cover" />
                        <Image src={images.m4_minamata_1017_tw2} className="rounded-xl shadow-md w-full h-48 object-cover" />
                        <Image src={images.m4_group_nsysu} className="rounded-xl shadow-md w-full h-48 object-cover" />
                        <Image src={images.m4_highlight_painting} className="rounded-xl shadow-md w-full h-48 object-cover" />
                      </div>
                  </div>
                  <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                      <div className="w-full md:w-1/2 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold">Session 4 • 12.09</div>
                        <h3 className="text-2xl font-bold text-slate-800">{lang === 'en' ? 'Final Presentation' : '成果發表與偏見消除'}</h3>
                        <p className="text-slate-600">
                          {lang === 'en' ? 'We showcased our "Dual-Axis Tracker" and "Smart Irrigation" projects. They shared lessons on eliminating discrimination related to Minamata disease.' : '我們展示了「雙軸追日」與「智慧澆灌」裝置成果。日方則分享了關於消除水俁病歧視的課程，校長也給予了勉勵。'}
                        </p>
                      </div>
                      <div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-4">
                        <Image src={images.m4_minamata_1209_dev1} className="rounded-xl shadow-md w-full h-32 object-cover" />
                        <Image src={images.m4_minamata_1209_present1} className="rounded-xl shadow-md w-full h-32 object-cover" />
                        <Image src={images.m4_minamata_1209_disease2} className="rounded-xl shadow-md w-full h-32 object-cover" />
                        <Image src={images.m4_minamata_1209_principal} className="rounded-xl shadow-md w-full h-32 object-cover" />
                        <Image src={images.m4_group_rmutt} className="rounded-xl shadow-md w-full h-32 object-cover" />
                        <Image src={images.m4_group_qaci} className="rounded-xl shadow-md w-full h-32 object-cover" />
                      </div>
                  </div>

                  <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-shadow">
                    <div className="w-full md:w-1/3 aspect-video bg-slate-100 rounded-xl overflow-hidden relative group">
                       <Image src={images.m4_minamata_1209_principal} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                       <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1"><Newspaper size={12}/> News Coverage</span>
                       </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-3">
                       <h4 className="text-xl font-bold text-slate-900">{lang === 'en' ? 'Featured in Kumamoto Nichinichi Shimbun' : '獲刊登於日本熊本日日新聞'}</h4>
                       <p className="text-slate-600 text-sm leading-relaxed">
                         {lang === 'en'
                           ? 'Our exchange activities with Minamata 2nd Elementary School were featured in the local newspaper "Kumamoto Nichinichi Shimbun". The report highlighted our online interactions and joint efforts in eliminating discrimination.'
                           : '我們與水俁第二小學的交流活動，榮獲當地媒體「熊本日日新聞」報導。文中特別提及了雙方的線上互動，以及共同消除歧視的努力。'}
                       </p>
                       <a href="https://kumanichi.com/articles/1807643" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline mt-2">
                         {lang === 'en' ? 'Read Full Article' : '閱讀完整報導'} <ExternalLink size={14} />
                       </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        )}

        {module.details.steps && module.id !== '04' && (
           <div className="mb-16">
             <div className="text-center mb-12"><span className="text-green-600 font-bold tracking-wider text-sm uppercase">Step by Step</span><h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Learning Process' : '探究學習歷程'}</h2></div>
             <div className="space-y-12">
             {module.details.steps.map((step, idx) => (
               <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}>
                 <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative">
                      <Image src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg text-slate-900 shadow-md">{idx + 1}</div>
                    </div>
                 </div>
                 <div className="w-full md:w-1/2 space-y-4"><h3 className="text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">{step.title}</h3><p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p></div>
               </div>
             ))}
             </div>
           </div>
        )}

        {module.details.irrigationSteps && (
           <div className="mb-16">
             <div className="text-center mb-12"><span className="text-blue-500 font-bold tracking-wider text-sm uppercase">Smart System</span><h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Smart Irrigation Journey' : '學習歷程：智慧澆灌系統'}</h2></div>
             <div className="space-y-12">
               {module.details.irrigationSteps.map((step, i) => (
                 <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center group`}>
                   <div className="w-full md:w-1/2">
                      <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg relative">
                        <Image src={step.img} alt={step.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-lg text-slate-900 shadow-md">{i + 1}</div>
                      </div>
                   </div>
                   <div className="w-full md:w-1/2 space-y-4"><h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{step.title}</h3><p className="text-lg text-slate-600 leading-relaxed">{step.desc}</p></div>
                 </div>
               ))}
             </div>
           </div>
        )}

        {module.details.teachingGallery && (
           <div className="mb-16">
             <div className="text-center mb-12"><span className="text-purple-600 font-bold tracking-wider text-sm uppercase">Teaching Highlights</span><h2 className="text-3xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Teacher Demonstration & Student Practice' : '教師教學引導與學生實作'}</h2></div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {module.details.teachingGallery.map((img, i) => (
                  <div key={i} className="group">
                     <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-4 border border-slate-100 relative">
                        <Image src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        {i >= 3 && (
                            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md">
                                {lang === 'en' ? 'Student Hands-on' : '學生實作'}
                            </div>
                        )}
                        {i === 0 && (
                            <div className="absolute bottom-2 left-2 bg-blue-600/80 text-white text-[10px] px-2 py-1 rounded-md">
                                {lang === 'en' ? 'Teacher Guidance' : '教師指導'}
                            </div>
                        )}
                     </div>
                  </div>
                ))}
             </div>
           </div>
        )}

        {module.details.gallery && (
          <div className="mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-purple-500 pl-4">{lang === 'en' ? 'Gallery' : '活動花絮'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {module.details.gallery.map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"><Image src={img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={`Gallery ${i}`} /></div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const App = () => {
  const [lang, setLang] = useState('en');
  const [activeModule, setActiveModule] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [showPhysical, setShowPhysical] = useState(false);
  const [showBSRU, setShowBSRU] = useState(false);
  
  const [showExhibition, setShowExhibition] = useState(false);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (id === 'about') { setShowAbout(true); return; }
    if (activeModule || showAbout || showPhysical || showBSRU || showExhibition) {
      setActiveModule(null);
      setShowAbout(false);
      setShowPhysical(false);
      setShowBSRU(false);
      setShowExhibition(false);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset - 100, behavior: 'smooth' });
    }
  };

  const content = {
    modulesData: [
      {
        id: '01',
        title: lang === 'en' ? 'Module 1: Carbon Magic' : '模組一：神奇碳力',
        tag: lang === 'en' ? 'Basics' : '基礎認知',
        desc: lang === 'en' ? 'From "Why is food getting expensive?" to exploring climate change and carbon footprints.' : '從「為什麼食物變貴了？」的生活提問出發，探討氣候變遷與碳足跡。',
        fullDesc: lang === 'en' ? 'This module guides students to understand the connection between climate change and carbon emissions. Through inquiry-based learning, they grasp the meaning of carbon footprints and sustainable development.' : '本模組帶領學生認識氣候變遷與碳排放的關聯，並透過探究式學習，理解碳足跡與永續發展的意涵。',
        img: images.m1_cover,
        details: {
          intro: lang === 'en' ? 'Imagine if delicious food on the table was no longer taken for granted. Our course starts with a simple question: "Why is our food getting more expensive?" We guide students like detectives to explore how climate change affects global food supply, and eventually their own plates.' : '想像一下，餐桌上的美味不再理所當然。我們的課程從一個簡單的提問開始：「為什麼我們吃的食物越來越貴？」我們將引導學生像偵探一樣，探索氣候變遷如何影響全球糧食供應，進而影響到他們餐盤上的每一道菜，讓氣候議題不再遙遠，而是觸手可及的真實感受。',
          objectives: lang === 'en' ? ['Feel the impact of climate change on local agriculture.', 'Understand SDGs through interactive games.', 'Transform abstract concepts into AI art and posters.'] : ['透過真實數據感受氣候變遷對在地農產的衝擊。', '藉由 Kahoot 遊戲深入認識 SDGs 指標。', '運用 AI 工具將永續概念轉化為視覺藝術。'],
          steps: [
            { title: lang === 'en' ? 'Problem Awareness' : '問題意識：餐桌上的危機', desc: lang === 'en' ? 'Using real-life scenarios to discuss rising food prices and climate impact.' : '從「食物變貴」切入，引導學生發現氣候異常如何影響農作物收成，建立危機感。', img: images.m1_step1 },
            { title: lang === 'en' ? 'Inquiry: SDGs & Footprint' : '主題探究：認識碳足跡', desc: lang === 'en' ? 'Playing Kahoot to learn about the UN Sustainable Development Goals (SDGs).' : '視線拉到全球，透過 Kahoot 互動遊戲認識 SDGs，思考個人選擇與全球永續的連結。', img: images.m1_step2 },
            { title: lang === 'en' ? 'Brainstorming Slogans' : '腦力激盪：發想標語', desc: lang === 'en' ? 'Developing creative keywords related to sustainability.' : '學生集思廣益，發想出各式與環保相關的創意標語與關鍵字。', img: images.m1_step3 },
            { title: lang === 'en' ? 'AI Visual Creation' : '科技轉譯：AI 繪圖', desc: lang === 'en' ? 'Using AI tools to visualize abstract slogans into concrete images.' : '學習運用 AI 繪圖軟體，將抽象的標語關鍵字，轉化為具體的視覺圖像。', img: images.m1_step4 },
            { title: lang === 'en' ? 'Final Poster Design' : '手繪創作與成果', desc: lang === 'en' ? 'Combining AI inspiration with hand-drawing to create unique posters.' : '參考 AI 產出的構圖，學生回到手繪，創作出獨一無二的減碳海報。', img: images.m1_step5 }
          ],
          gallery: [images.m1_step5, images.m1_step4, images.m1_step3, images.m1_step1]
        }
      },
      {
        id: '02',
        title: lang === 'en' ? 'Module 2: Tech Thinking Fun' : '模組二：科技運思趣',
        tag: lang === 'en' ? 'Skills' : '技能培養',
        desc: lang === 'en' ? 'Using computational thinking and AI tools to build solar systems and smart irrigation.' : '運用運算思維與 AI 工具，動手打造雙軸追日與智慧澆灌系統。',
        fullDesc: lang === 'en' ? 'This module guides students to use computational thinking to solve climate change and sustainability issues through programming and AI tools. They will build a dual-axis sun-tracking solar system and a smart irrigation system.' : '本模組引導學生運用運算思維，透過程式設計與 AI 工具，學習如何解決氣候變遷與永續發展的議題。學生將親手打造雙軸追日太陽能系統與智慧澆灌系統，為未來生活注入更多科技動能。',
        img: images.m2_cover,
        details: {
          intro: lang === 'en' ? 'How can technology help the planet? In this module, we transform computational thinking from an abstract concept into tangible net-zero actions. We focus on two main systems: the Dual-Axis Sun-Tracking Solar System, which maximizes green energy efficiency, and the Smart Irrigation System, which optimizes water usage through sensing technology.' : '科技如何幫助地球？在這個模組中，我們將運算思維從抽象概念轉化為具體的淨零行動。本模組包含兩大核心系統實作：「雙軸追日太陽能系統」，學習如何利用科技提升綠能效率；以及「智慧澆灌系統」，運用感測技術精準控制水資源，讓每一滴水都發揮最大效益。',
          objectives: lang === 'en' ? ['Practice computational logic through block-based programming.', 'Integrate programming with electromechanical systems.', 'Build a Dual-Axis Sun-Tracking Solar System.', 'Develop a Smart Irrigation System using sensors.'] : ['透過積木程式練習基礎運算邏輯，讓思維具體化。', '整合程式設計與機電知識，練習腳位連接與控制。', '親手組裝並程式控制「雙軸追日太陽能系統」。', '運用感測器開發「智慧澆灌系統」，解決水資源浪費。'],
          systems: [
            { 
              title: lang === 'en' ? 'Dual-Axis Tracker' : '雙軸追日太陽能系統', 
              desc: lang === 'en' ? 'By using light sensors to detect the sun’s position, this system automatically adjusts the solar panel’s angle with servo motors to ensure maximum direct sunlight absorption, significantly improving power generation efficiency.' : '利用光敏電阻偵測不同方位的陽光強度，並透過程式邏輯判斷，控制水平與垂直兩個軸向的伺服馬達，讓太陽能板能像向日葵一樣自動追蹤太陽位置，隨時保持最佳受光角度，大幅提升發電效率。', 
              img: images.m2_sys_solar, 
              tags: ['光感測', '伺服馬達', '綠能科技'], 
              components: ['Micro:bit', '光敏電阻 x4', '伺服馬達 x2', '太陽能板'],
              videoId: 'rDEJkudeUZA'
            },
            { 
              title: lang === 'en' ? 'Smart Irrigation & Lighting' : '智慧農園監控系統', 
              desc: lang === 'en' ? 'Addressing water scarcity, this system uses soil moisture sensors to monitor the environment. It activates the pump when soil is dry and turns on grow lights when illumination is low.' : '針對水資源與生長環境監控，本系統運用土壤濕度感測器即時偵測。當土壤乾燥時自動啟動水泵；此外，當環境光照不足時，亦會自動開啟植物生長燈，實現全方位的智慧農業管理。', 
              img: images.m2_sys_irrigation, 
              tags: ['土壤感測', '自動補光', '智慧農業'], 
              components: ['Micro:bit', '土壤濕度感測器', '繼電器模組', '水泵', 'LED補光燈'],
              videoId: 'Mg0aWOXTzmA'
            }
          ],
          steps: [
            { title: lang === 'en' ? 'Design Thinking' : '設計思考：從問題出發', desc: lang === 'en' ? 'Defining problems and brainstorming solutions.' : '學生透過設計思考流程，釐清生活中的環境問題，並發想解決方案。', img: images.m2_step_design },
            { title: lang === 'en' ? 'Coding Logic' : '程式邏輯撰寫', desc: lang === 'en' ? 'Learning block-based coding to control sensors.' : '學習使用積木程式，撰寫控制伺服馬達與讀取感測器數值的邏輯。', img: images.m2_step_coding },
            { title: lang === 'en' ? 'Hands-on Making' : '動手組裝實作', desc: lang === 'en' ? 'Assembling the hardware components.' : '將程式與硬體結合，親手組裝太陽能板支架與澆灌管路。', img: images.m2_step_making },
            { title: lang === 'en' ? 'Classroom Interaction' : '課堂互動與測試', desc: lang === 'en' ? 'Testing and refining the systems in class.' : '在課堂上實際測試裝置運作情形，並根據結果進行除錯與優化。', img: images.m2_step_class }
          ],
          irrigationSteps: [
            { title: lang === 'en' ? 'Hardware Assembly' : '硬體配置與組裝', desc: lang === 'en' ? 'Connecting sensors and pumps.' : '進行水泵、繼電器與感測器的線路連接，確保硬體運作正常。', img: images.m2_irrigation_make1 },
            { title: lang === 'en' ? 'Sensor Integration' : '感測器整合測試', desc: lang === 'en' ? 'Integrating soil sensors.' : '將土壤濕度感測器插入盆栽中，測試數值讀取是否準確。', img: images.m2_irrigation_make2 },
            { title: lang === 'en' ? 'System Verification' : '成品運作驗收', desc: lang === 'en' ? 'Verifying automatic watering.' : '完成全系統整合，驗證當土壤乾燥時，系統是否能自動啟動澆水功能。', img: images.m2_irrigation_finished }
          ],
          teachingGallery: [
              images.m2_teach_new1,
              images.m2_teach_1,
              images.m2_teach_2,
              images.m2_student_new1,
              images.m2_student_new2,
              images.m2_student_new3,
              images.m2_student_new5
          ],
          gallery: images.m2_gallery
        }
      },
      {
        id: '03',
        title: lang === 'en' ? 'Module 3: Net Zero Strategist' : '模組三：淨零碳排策略家',
        tag: lang === 'en' ? 'Project' : '專題實作',
        desc: lang === 'en' ? 'Formulating effective net-zero strategies through design thinking and hands-on practice.' : '結合設計思考與實作，制定有效的淨零碳排策略，並製作太陽能烹飪裝置。',
        fullDesc: lang === 'en' ? 'This module guides students to formulate effective net-zero carbon strategies through design thinking and hands-on practice. It transforms abstract concepts into tangible actions by building real-world solutions like solar cookers.' : '本模組旨在引導學生透過設計思考與實作，學習如何制定有效的淨零碳排策略，並動手製作解決方案（如太陽能烹飪裝置），將抽象概念轉化為具體行動。',
        img: images.m3_cover,
        details: {
          intro: lang === 'en' ? 'From empathy to solution. The course begins with "Design Thinking," a five-step, human-centered approach. Students collaborate on the Padlet platform to define problems and brainstorm ideas. Then, they use everyday materials to build a solar cooking device, testing and verifying its efficiency in a real-world experiment.' : '從同理心到解決方案。課程從「設計思考」出發，學生們在 Padlet 平台上共同釐清問題、定義使用者並發想點子。接著，發揮創意利用回收材料與生活用品，將設計草圖轉化為「太陽能烹飪裝置」的原型，並透過實際烹煮與溫度測量，驗證綠色能源的可行性。',
          objectives: lang === 'en' ? ['Apply Design Thinking (Empathize, Define, Ideate, Prototype, Test).', 'Collaborate online using Padlet.', 'Build a solar cooking prototype from recycled materials.', 'Conduct scientific experiments to measure temperature and efficiency.'] : ['運用設計思考五步驟（同理、定義、發想、原型、測試）解決問題。', '在 Padlet 平台上進行線上協作與討論。', '利用回收材料製作太陽能烹飪裝置原型。', '進行科學實驗：測量溫度、紀錄數據並驗證成效。'],
          steps: [
            { title: lang === 'en' ? 'Prototyping' : '動手製作原型', desc: lang === 'en' ? 'Building the solar cooker structure.' : '學生發揮創意，利用回收材料與生活用品，將設計草圖轉化為太陽能烹飪裝置的實體結構。', img: images.m3_step1 },
            { title: lang === 'en' ? 'Prototype Complete' : '裝置完成', desc: lang === 'en' ? 'The finished solar cooker ready for testing.' : '太陽能烹飪裝置組裝完成，準備進行戶外實測。', img: images.m3_step2 },
            { title: lang === 'en' ? 'Experiment Setup' : '實驗準備', desc: lang === 'en' ? 'Placing an egg inside to test solar collection.' : '將雞蛋放入裝置中，準備進行實際的太陽能烹煮測試。', img: images.m3_step3 },
            { title: lang === 'en' ? 'Data Collection' : '溫度測量與紀錄', desc: lang === 'en' ? 'Measuring temperature to verify efficiency.' : '使用溫度計定時測量裝置內部溫度，並記錄數據以驗證集熱效率。', img: images.m3_step4 },
            { title: lang === 'en' ? 'Result Verification' : '實驗成果驗收', desc: lang === 'en' ? 'The egg is half-cooked, proving the concept!' : '經過陽光照射後，雞蛋呈現半熟狀態，成功驗證了太陽能烹飪的可行性！', img: images.m3_step5 }
          ],
          gallery: images.m3_gallery
        }
      },
      {
        id: '04',
        title: lang === 'en' ? 'Module 4: Net Zero Global' : '模組四：Net Zero 策略家',
        tag: lang === 'en' ? 'Outreach' : '國際推廣',
        desc: lang === 'en' ? 'From "Green Mango Expedition" to global partnership. Sharing solutions with the world.' : '從「綠色芒果探險隊」出發，計算碳足跡，並將減碳策略推廣至國際。',
        fullDesc: lang === 'en' ? 'This module, themed "Green Mango Expedition," guides students to explore the connection between climate change and diet, starting from mango production in Pingtung. Through project-based learning, they formulate effective carbon reduction strategies and promote their solutions to the world, practicing global partnership.' : '本模組以「綠色芒果探險隊」為主題，引導學生從臺灣屏東的芒果產地出發，深入了解氣候變遷與飲食的關聯。透過專題探究與實作，學生不僅制定有效的減碳策略，更將解決方案推廣至世界各地，實踐全球夥伴關係。',
        img: images.m4_cover,
        details: {
          intro: lang === 'en' ? "From Pingtung to the World. We start with local mangoes, using AI tools to analyze carbon footprints and brainstorm green strategies like smart farming. But we don't stop there. Students use English to share these ideas with partners in Japan, Thailand, and Australia, turning local action into global impact." : '從屏東走向世界。我們從在地芒果產業切入，運用 AI 工具分析碳足跡，並發想如綠色包裝、智慧農作等減碳策略。更重要的是，學生們使用全英文與日本、泰國、澳洲的夥伴進行跨國交流，分享這些創新方案，將在地行動轉化為全球影響力。',
          objectives: lang === 'en' ? ['Calculate carbon footprints using AI tools.', 'Develop green strategies for local agriculture (Mangoes).', 'Engage in cross-cultural communication with international partners.', 'Practice English presentation and global citizenship.'] : ['運用 AI 工具計算與分析在地產業（芒果）的碳足跡。', '制定具體的綠色農業減碳策略。', '與日、泰、澳國際夥伴進行全英文跨文化交流，提升國際視野。', '實施差異化分組教學，依學生程度設計表達內容，鼓勵全員參與。', '培養自信的英語表達能力與互動心態，展現全球公民素養。'],
          steps: [
            { title: lang === 'en' ? 'AI Carbon Calculation' : '行動學習：AI 碳足跡計算', desc: lang === 'en' ? 'Using AI tools to analyze carbon data and brainstorm reduction strategies on Padlet.' : '透過團隊協作，運用 AI 工具分析芒果產業的碳足跡數據，並在 Padlet 上共同發想如綠色包裝等創新減碳方案。', img: images.m4_step1 }
          ],
          gallery: images.m4_gallery
        }
      }
    ],
    mission: {
      title: lang === 'en' ? 'Interdisciplinary Learning' : '跨領域學習課程',
      desc: lang === 'en' ? 'This curriculum breaks down traditional subject boundaries, perfectly integrating two core technologies—Artificial Intelligence (AI) and Mechatronics—with the environmental issue of net-zero carbon emissions. We guide students to transform from passive knowledge receivers into active young innovators who can use diverse technologies to solve environmental problems.' : '這門課程打破傳統學科界限，將人工智能 (AI) 與機電整合 (Mechatronics) 兩大核心技術，與淨零碳排的環境議題完美結合。我們引導學生從單純的知識吸收者，轉變為能夠運用多元科技解決環境問題的實踐家。',
      pillars: [
        { icon: <Cpu size={32} />, title: lang === 'en' ? 'Technology & Engineering' : '科技與工程', desc: lang === 'en' ? 'Learn about AI tool applications, data analysis, and coding to develop logical thinking skills. Also, apply mechatronics technology to build sensors and smart models with hands-on projects.' : '學習 AI 工具應用、資料分析與程式設計，培養邏輯思維。同時，應用機電整合技術，動手製作感測裝置與智慧模型。' },
        { icon: <Leaf size={32} />, title: lang === 'en' ? 'Natural Science' : '自然科學', desc: lang === 'en' ? 'Explore key concepts like the carbon cycle, climate change, and carbon footprints to help students understand scientific principles and build a sense of responsibility for environmental sustainability.' : '探討碳循環、氣候變遷與碳足跡等重要概念，幫助學生理解科學原理，並建立對環境永續的責任感。' },
        { icon: <Palette size={32} />, title: lang === 'en' ? 'Arts and Design' : '藝術與設計', desc: lang === 'en' ? 'Through both hand-drawing and digital painting software for artistic design, students combine it with design thinking to transform complex scientific concepts into vivid visual images and easy-to-understand communication plans.' : '透過手繪與數位繪畫軟體進行美術設計，並結合設計思維，將複雜的科學概念轉化為生動的視覺圖像與易懂的溝通方案。' },
        { icon: <Globe size={32} />, title: lang === 'en' ? 'Social Studies & Humanities' : '社會與人文', desc: lang === 'en' ? 'Through exchange with international partners from Japan, Thailand, and Australia, students cultivate cross-cultural communication and a global perspective, equipping them with the qualities of a global citizen.' : '透過與來自日本、泰國、澳洲的國際夥伴進行交流，培養學生的跨文化溝通與國際觀，讓他們具備全球公民素養。' }
      ]
    }
  };

  if (activeModule) {
    return <ModuleDetail module={activeModule} onBack={() => setActiveModule(null)} lang={lang} />;
  }
  if (showAbout) {
    return <AboutDetail onBack={() => setShowAbout(false)} lang={lang} />;
  }
  if (showPhysical) {
    return <PhysicalExchangeDetail onBack={() => setShowPhysical(false)} lang={lang} />;
  }
  if (showBSRU) {
    return <BSRUExchangeDetail onBack={() => setShowBSRU(false)} lang={lang} />;
  }
  if (showExhibition) {
    return <ExhibitionDetail onBack={() => setShowExhibition(false)} lang={lang} />;
  }

  const allHighlights = [
      ...(content.modulesData[0].details.gallery || []),
      ...(content.modulesData[1].details.gallery || []),
      ...(content.modulesData[2].details.gallery || []),
      ...(content.modulesData[3].details.gallery || []),
      ...(images.m4_gallery || [])
  ];

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen selection:bg-green-100 selection:text-green-800 animate-fade-in w-full overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-10 bg-slate-900 z-[60] flex justify-between items-center px-4 lg:px-8 shadow-md">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-400 tracking-wider">
          <Globe size={14} className="text-green-500" />
          <span className="hidden md:inline">{lang === 'en' ? 'Current Language: English' : '目前語言：繁體中文'}</span>
        </div>
        <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="flex items-center gap-2 px-3 py-1 rounded bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all transform hover:scale-105 shadow-sm">
          <span>{lang === 'en' ? '切換至繁體中文' : 'Switch to English'}</span>
          <ArrowRight size={12} />
        </button>
      </div>
// ... inside App component return ...
      <nav className="fixed w-full z-50 transition-all duration-300 top-10 bg-slate-900/95 backdrop-blur-md shadow-lg py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* 左側：校徽與校名品牌區塊 (修改後) */}
          <div className="flex items-center gap-3 cursor-pointer group select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0 bg-white rounded-full p-0.5 shadow-md transition-transform duration-300 group-hover:scale-105 ring-2 ring-white/10 overflow-hidden">
               <Image src={images.about_logo} className="w-full h-full object-cover rounded-full bg-transparent" alt="NEHSP Logo" />
            </div>
            <div className="flex flex-col justify-center">
                <h1 className="text-slate-100 font-bold text-sm md:text-lg leading-none tracking-wide group-hover:text-white transition-colors flex items-center gap-2">
                    {lang === 'en' ? 'NEHSP' : '國立屏科實中'}
                </h1>
                <span className="text-slate-400 text-[10px] md:text-xs font-medium tracking-wider uppercase mt-1 group-hover:text-slate-300 transition-colors">
                    {lang === 'en' ? 'Elementary Department' : '國小部雙語課程計畫'}
                </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {[{ name: lang === 'en' ? 'About' : '關於我們', id: 'about' }, { name: lang === 'en' ? 'Exhibition' : '成果發表', id: 'exhibition' }, { name: lang === 'en' ? 'Modules' : '課程模組', id: 'modules' }, { name: lang === 'en' ? 'In-Person Interaction' : '實體交流', id: 'physical-exchange' }, { name: lang === 'en' ? 'Gallery' : '成果展示', id: 'gallery' }, { name: lang === 'en' ? 'Contact' : '聯絡資訊', id: 'contact' }].map((item, index) => (
              <button key={index} onClick={() => scrollToSection(item.id)} className="text-sm font-medium hover:text-green-500 transition-colors text-slate-300">{item.name}</button>
            ))}
          </div>
          {/* 手機版選單按鈕：切換圖示 */}
          <button className="lg:hidden p-2 rounded-md text-white hover:bg-slate-800 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 手機版下拉選單 (新增區塊) */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col p-4 space-y-2">
              {[{ name: lang === 'en' ? 'About' : '關於我們', id: 'about' }, { name: lang === 'en' ? 'Exhibition' : '成果發表', id: 'exhibition' }, { name: lang === 'en' ? 'Modules' : '課程模組', id: 'modules' }, { name: lang === 'en' ? 'In-Person Interaction' : '實體交流', id: 'physical-exchange' }, { name: lang === 'en' ? 'Gallery' : '成果展示', id: 'gallery' }, { name: lang === 'en' ? 'Contact' : '聯絡資訊', id: 'contact' }].map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => scrollToSection(item.id)} 
                  className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-all text-sm font-medium flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  {item.name}
                </button>
              ))}
            </div>
        </div>
      </nav>

      <header id="about" className="relative pt-40 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-[#f0fdf4] -z-10 lg:rounded-bl-[150px]" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-100 shadow-sm text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">{lang === 'en' ? 'Digital Learning Program' : '數位學習深耕計畫'}</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.15]">{lang === 'en' ? 'From Pingtung to the World: Innovating for Sustainability' : '從屏東綠地出發，實踐地球永續未來'}</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl border-l-4 border-green-500 pl-6">{lang === 'en' ? 'Integrating AI and Mechatronics to guide students in transforming from passive learners into active innovators.' : '我們結合 AI 人工智慧與機電整合兩大核心技術，引導學生運用科技解決環境問題。'}</p>
            <div className="flex gap-4 pt-2">
              <button onClick={() => scrollToSection('modules')} className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all flex items-center gap-2">{lang === 'en' ? 'Explore Modules' : '探索課程'} <ArrowRight size={18} /></button>
              <button onClick={() => setShowAbout(true)} className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2">{lang === 'en' ? 'About Us' : '關於我們'}</button>
            </div>
          </div>
          {/* 修改高度：增加 h-64 確保手機版有高度，避免圖片消失 */}
          <div className="relative h-64 lg:h-[500px]">
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-slate-200 group">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${images.hero})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-sm uppercase tracking-wider"><MapPin size={16} /> {lang === 'en' ? 'Pingtung, Taiwan' : '屏東・台灣'}</div>
                <h3 className="text-2xl font-bold mb-1">{lang === 'en' ? 'Interdisciplinary Vision' : '跨領域學習願景'}</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 w-full max-w-7xl">
          <div className="text-center mb-16"><span className="text-green-600 font-bold tracking-wider text-sm uppercase">{lang === 'en' ? 'Mission Statement' : '計畫理念'}</span><h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{content.mission.title}</h2><p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">{content.mission.desc}</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.mission.pillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors border border-slate-100">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="exhibition" className="bg-white pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center bg-slate-50 rounded-[3rem] p-8 lg:p-16 overflow-hidden relative group border border-slate-100 shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="w-full lg:w-1/2 space-y-6 relative z-10 text-left">
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Award size={18} /> Anniversary Highlight
              </span>
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight">
                {lang === 'en' ? '2025 Annual Exhibition: Taiwan Tech Expo' : '2025 年度成果發表：台灣科技展'}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-yellow-400 pl-6">
                {lang === 'en' 
                  ? 'Our students presented a year of mechatronics and net-zero research at the Tech Expo, winning the Bronze Promotion Award!' 
                  : '於 2025/11/14 參加台灣科技展，學生們認真發表這一年來的實作作品與研究心得，並榮獲銅質獎與人氣獎！'}
              </p>
              <button onClick={() => setShowExhibition(true)} className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold shadow-xl transition-all flex items-center gap-3">
                {lang === 'en' ? 'View Exhibition Results' : '探索成果展紀錄'} <ArrowRight size={20} />
              </button>
            </div>
            <div className="w-full lg:w-1/2 relative h-80 lg:h-[450px]">
              <div className="absolute inset-0 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image src={exhibitionImages.exh_group1} className="rounded-3xl shadow-lg h-[60%] w-full object-cover transform -rotate-3" />
                  <div className="rounded-3xl shadow-lg h-[35%] w-full overflow-hidden bg-white">
                    <Image src={exhibitionImages.exh_award_bronze} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-3xl shadow-lg h-[35%] w-full overflow-hidden bg-white">
                    <Image src={exhibitionImages.exh_intro1} className="w-full h-full object-cover" />
                  </div>
                  <Image src={exhibitionImages.exh_group2} className="rounded-3xl shadow-lg h-[60%] w-full object-cover transform rotate-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6">
          <div className="mb-12"><span className="text-blue-600 font-bold tracking-wider text-sm uppercase">{lang === 'en' ? 'Learning Path' : '學習路徑'}</span><h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">{lang === 'en' ? 'Course Modules' : '數位學習課程模組'}</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.modulesData.map((module, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full cursor-pointer" onClick={() => setActiveModule(module)}>
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <Image src={module.img} alt={module.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">{module.tag}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3"><span className="text-4xl font-black text-slate-100 group-hover:text-green-50 transition-colors select-none">{module.id}</span></div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">{module.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{module.desc}</p>
                  <div className="pt-4 border-t border-slate-50 mt-auto"><button className="text-green-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">{lang === 'en' ? 'Learn More' : '查看詳情'} <ArrowRight size={12} /></button></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        
      <section id="physical-exchange" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 w-2/3 h-full bg-white/10 skew-x-12 transform translate-x-20"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 lg:p-16 gap-12">
              <div className="w-full lg:w-1/2 space-y-6 text-white">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider uppercase border border-white/30">Global Voices</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">{lang === 'en' ? 'In-Person Interaction: Welcoming the World to Our Campus' : '實體國際交流：讓世界走進教室'}</h2>
                <p className="text-lg text-green-50 opacity-90 leading-relaxed">{lang === 'en' ? 'We hosted students from Australia, Thailand, and international students from NSYSU, sharing our local net-zero ideas with the world through real interactions.' : '我們接待了來自澳洲、泰國以及中山大學的外籍生，將在地的減碳創意透過實體互動與世界分享。'}</p>
                <button onClick={() => setShowPhysical(true)} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-800 rounded-full font-bold shadow-lg hover:bg-green-50 transition-all transform hover:translate-x-2">
                  {lang === 'en' ? 'View Highlights' : '查看精彩成果'} <ArrowRight size={18} />
                </button>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-2 gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image src={images.m4_group_nsysu} className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                  <Image src={images.m4_physical_aus} className="rounded-2xl shadow-lg w-full h-48 object-cover translate-y-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4 translate-y-8">
                         <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-all duration-500">
                            <Image src={images.bsru_thaidance} className="w-full h-full object-cover" />
                         </div>
                         <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-500">
                            <Image src={images.bsru_course3} className="w-full h-full object-cover" />
                         </div>
                      </div>
                      <div className="space-y-4">
                         <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform -rotate-1 hover:rotate-0 transition-all duration-500">
                            <Image src={images.bsru_twshare} className="w-full h-full object-cover" />
                         </div>
                         <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform rotate-1 hover:rotate-0 transition-all duration-500">
                            <Image src={images.bsru_group3} className="w-full h-full object-cover" />
                         </div>
                      </div>
                  </div>
               </div>
               <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6">
                  <span className="text-yellow-600 font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                    Special Feature
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                    {lang === 'en' ? 'Taiwan-Thailand Design Journey' : '臺泰減碳設計之旅'}
                    <span className="block text-2xl lg:text-3xl font-bold text-slate-500 mt-2">Green Mango Expedition</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-yellow-400 pl-6">
                    {lang === 'en' 
                      ? 'Our largest physical exchange event! BSRU students from Thailand visited us for a deep-dive workshop. Together, we explored carbon footprints and used AI to design green solutions for Thai mangoes.' 
                      : '本計畫最大型的實體交流活動！泰國 BSRU 國小學生親臨屏東，與我們進行深度的跨域工作坊。從認識碳足跡到運用 AI 共創泰國芒果減碳方案，這是一場跨越國界的綠色探險。'}
                  </p>
                   
                  <div className="pt-4">
                    <button onClick={() => setShowBSRU(true)} className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-3 transform hover:-translate-y-1">
                      {lang === 'en' ? 'Explore the Journey' : '探索活動紀錄'} <ArrowRight size={20} />
                    </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-6">
          <IoTDashboard />
          <div className="text-center mt-6">
            <p className="text-slate-400 text-sm mb-4">{lang === 'en' ? 'This live data is powered by Module 2: Tech Thinking Fun.' : '此實時數據來自「模組二：科技運思趣」的 IoT 裝置。'}</p>
            <button onClick={() => setActiveModule(content.modulesData[1])} className="text-green-400 hover:text-green-300 font-bold border-b border-green-500 pb-0.5 transition-colors">{lang === 'en' ? 'Explore Module 2 >' : '探索模組二 >'}</button>
          </div>
        </div>
      </section>
      <GlobalWall />
        
      <AICard lang={lang} mode="preview" />
        
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-bold text-slate-900">{lang === 'en' ? 'Highlights' : '精彩瞬間'}</h2></div>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {allHighlights.map((img, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] snap-center">
                <div className="rounded-2xl overflow-hidden shadow-lg h-[250px] relative group">
                  <Image src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white tracking-wide">國立屏科實驗高級中等學校</h3>
              <h4 className="text-sm font-medium text-slate-400">National Experimental High School at Pingtung Science Park</h4>
              <div className="w-12 h-1 bg-green-500 rounded-full mt-4"></div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 inline-block">聯絡資訊 Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-green-500 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <Phone size={18} />
                  </div>
                  <div>
                     <span className="text-xs text-slate-500 block uppercase tracking-wider font-bold">Phone</span>
                     <span className="text-white font-medium">08-7659025</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 inline-block">關於我們 About</h4>
               <p className="text-sm text-slate-400 leading-relaxed">
                  {lang === 'en' 
                    ? 'Cultivating future talents with international vision and scientific literacy through bilingual and digital learning.' 
                    : '致力於雙語教育與數位學習，培育具備國際視野與科學素養的未來人才。'}
               </p>
               <div className="flex gap-4 pt-2">
                  <a href="https://nehs.ptc.edu.tw/" target="_blank" rel="noreferrer" className="text-sm font-bold text-green-400 hover:text-green-300 transition-colors flex items-center gap-1">
                     Official Website <ExternalLink size={14}/>
                  </a>
               </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
            <p>&copy; 2025 NEHSP Elementary Department. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
               <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Use</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
