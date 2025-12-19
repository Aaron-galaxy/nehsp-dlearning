import React, { useState, useEffect } from 'react';

// --- 內建圖示元件 (無需更動) ---
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
const Globe = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
    <path d="M12 12c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11z" />
    <path d="M12 12c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11z" />
    <path d="M12 12c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z" />
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

// --- 圖片元件 ---
// 自動處理圖片載入失敗，顯示預設圖，避免破圖
const Image = ({ src, alt, className, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    // 當您的圖片網址載入失敗時，會自動切換到這張預設圖
    console.warn(`Image failed to load: ${src}, falling back to default.`);
    setImgSrc(
      'https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80'
    );
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

// ==============================================================================
// 📸 [照片上傳區] 使用本地資料夾路徑 📸
// ==============================================================================
// 說明：
// 1. 請確認您的 public 資料夾結構，例如：public/hero/myphoto.jpg
// 2. 在這裡填入路徑時，請以 '/' 開頭，代表 public 資料夾的根目錄
// 3. 例如：'/hero/myphoto.jpg'
// 4. 備用圖庫(可暫時使用): https://images.unsplash.com/...
const images = {
  // === 全站通用 ===
  // [首頁大圖]
  hero: 'https://drive.google.com/thumbnail?id=1H-1wVOa5O3cRgKtEJAxMJupGOrqUk7ZI&sz=w2000',

  // === 關於我們 (About Us) ===
  about_philosophy:
    'https://drive.google.com/uc?export=download&id=1RxhVPTvNR2WxumjSrpi4DzaR9kSx_2iF',
  // [學生活動]
  about_activity:
    'https://drive.google.com/thumbnail?id=1H-1wVOa5O3cRgKtEJAxMJupGOrqUk7ZI&sz=w2000',
  about_campus:
    'https://drive.google.com/thumbnail?id=1H-1wVOa5O3cRgKtEJAxMJupGOrqUk7ZI&sz=w2000',
  about_intro1:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  about_intro2:
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',

  // === 模組一：神奇碳力 (Carbon Magic) - 更新連結 ===
  m1_cover:
    'https://drive.google.com/thumbnail?id=1fAx7elZc9xJLAfSY8ScOm4nQbvzP9WMB&sz=w2000',
  m1_step1:
    'https://drive.google.com/thumbnail?id=1Y-dk5Ply7OlMxylj3--mZh2rp67ghcfJ&sz=w2000',
  m1_step2:
    'https://drive.google.com/thumbnail?id=1tMSc7m9wjYwnvNRAaYW0gIb3xXAdQ910&sz=w2000',
  m1_step3:
    'https://drive.google.com/thumbnail?id=1Tu6XSYGb2adJowxznyGwH_bFX-mxNRv9&sz=w2000',
  m1_step4:
    'https://drive.google.com/thumbnail?id=1eXVakotNAnjnKqLZ6Z6PxjmafASy5vgh&sz=w2000',
  m1_step5:
    'https://drive.google.com/thumbnail?id=1rfsqBhaw57sOlN3UuBKle9jtlW38Jwfx&sz=w2000',

  // === 模組二：科技運思趣 (Tech Thinking) - 更新連結 ===
  m2_cover:
    'https://drive.google.com/thumbnail?id=18Ma0nWrAQqG8xQ8QB7EPL4xRmBWuAlBY&sz=w2000', // 主視覺
  m2_sys_solar:
    'https://drive.google.com/thumbnail?id=1CP2QO-QpgkOkrWZTynbeOxqQ5BGSK2NC&sz=w2000', // 雙軸追日太陽能裝置圖
  m2_sys_irrigation:
    'https://drive.google.com/thumbnail?id=1g_Rup9CJKhZg0XXkrI2Y31VOtbhiPoz4&sz=w2000', // 智慧澆灌成品
  m2_step_design:
    'https://drive.google.com/thumbnail?id=1o_WPMv2Mgq7pbzHlf6hHycVIvx8RCqGG&sz=w2000', // 設計思考內容
  m2_step_coding:
    'https://drive.google.com/thumbnail?id=1HzeqCHab7brFhewiMX2pYODdVr9E_5Fi&sz=w2000', // 程式撰寫
  m2_step_making:
    'https://drive.google.com/thumbnail?id=1-dju2MgZxad4nk2gYl8ay_J50-Qg_6ZK&sz=w2000', // 太陽能製作
  m2_step_class:
    'https://drive.google.com/thumbnail?id=1K_wfFsgsfj_238-DL0h5lZFTL2KumxHo&sz=w2000', // 上課畫面1

  // 模組二 - 智慧澆灌專用照片
  m2_irrigation_finished:
    'https://drive.google.com/thumbnail?id=1g_Rup9CJKhZg0XXkrI2Y31VOtbhiPoz4&sz=w2000', // 智慧澆灌成品
  m2_irrigation_make1:
    'https://drive.google.com/thumbnail?id=11DbttZXGJLZw6IcCC43wPxLVpUU_wqad&sz=w2000', // 智慧澆灌製作
  m2_irrigation_make2:
    'https://drive.google.com/thumbnail?id=1o3TQjMNn-aLQPDkYJEN6dBSXOLYd0BjS&sz=w2000', // 智慧澆灌製作2

  m2_gallery: [
    'https://drive.google.com/thumbnail?id=11DbttZXGJLZw6IcCC43wPxLVpUU_wqad&sz=w2000', // 智慧澆灌製作
    'https://drive.google.com/thumbnail?id=1o3TQjMNn-aLQPDkYJEN6dBSXOLYd0BjS&sz=w2000', // 智慧澆灌製作2
    'https://drive.google.com/thumbnail?id=1cgztEN9GNoMbEr-w5eKEwX1XH2kIZToG&sz=w2000', // 太陽能製作2
    'https://drive.google.com/thumbnail?id=1uFAYBfzyWTNFR60j08X7KTTiEhxd1SDg&sz=w2000', // 智慧澆灌 蘇
    'https://drive.google.com/thumbnail?id=1OhuIfnR6bfFnQNY8h2iBGojEAkTcTgJY&sz=w2000', // 上課畫面2
  ],

  // === 模組三：淨零碳排策略家 (Net Zero Strategist) - 更新連結 ===
  m3_cover: '/m3/cover.jpg',
  m3_step1:
    'https://drive.google.com/thumbnail?id=1kImRePEMegsKJZnDrSq_Agi1iqthP3Ka&sz=w2000', // 太陽能鍋製作1
  m3_step2:
    'https://drive.google.com/thumbnail?id=1FQKcIiMti2cKzcCA_IhWwokq7ZQaN8cN&sz=w2000', // 製作好的太陽能鍋裝置
  m3_step3:
    'https://drive.google.com/thumbnail?id=1MD8QpFR2cDPUi3vzpqyXJWf6xelCF9-N&sz=w2000', // 將蛋放入太陽能鍋
  m3_step4:
    'https://drive.google.com/thumbnail?id=1-3R68kP2lQWAfgyBFc-9rH1_EL2AFDCF&sz=w2000', // 測量放入後的溫度
  m3_step5:
    'https://drive.google.com/thumbnail?id=1vJMPr2FVPklDZNQR3UB1Cg1WjeUNtt9v&sz=w2000', // 雞蛋半熟
  m3_gallery: [
    'https://drive.google.com/thumbnail?id=16-0u1Y3ekEOn7vulMd0UpG8s-h2WVEM1&sz=w2000', // 成品海報
    'https://drive.google.com/thumbnail?id=1Gf3odBWipgDcX4hV4-IcHsiGqpxvOdGF&sz=w2000', // 放好蛋的太陽能鍋
    'https://drive.google.com/thumbnail?id=1Unst9s0V5CXcFnpyhfR2rghzfpSHYCBa&sz=w2000', // 設計思考初稿
  ],

  // === 模組四：Net Zero Global (綠色芒果探險隊) ===
  m4_cover: '/m4/cover.jpg',
  m4_step1: '/m4/step1.jpg',
  m4_step2: '/m4/step2.jpg',
  m4_step3: '/m4/step3.jpg',
  m4_step4: '/m4/step4.jpg',
  m4_gallery: ['/m4/gallery1.jpg', '/m4/gallery2.jpg', '/m4/gallery3.jpg'],

  // === AI 翻牌遊戲 ===
  quiz_mango: '/quiz/mango.jpg',
  quiz_solar: '/quiz/solar.jpg',
  quiz_irrigation: '/quiz/irrigation.jpg',
};

// ==========================================
// [新] 智慧農園模擬儀表板 (IoT Dashboard)
// ==========================================
const IoTDashboard = () => {
  const [data, setData] = useState({
    temp: 28.5,
    humidity: 65,
    light: 850,
    soil: 42,
    fan: false,
    pump: false,
  });

  // 模擬數據微幅跳動
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newTemp = +(prev.temp + (Math.random() * 0.4 - 0.2)).toFixed(1);
        const newSoil = Math.min(
          100,
          Math.max(0, +(prev.soil + (Math.random() * 2 - 1)).toFixed(0))
        );
        // 模擬自動控制邏輯: 溫度 > 30 開風扇, 土壤 < 30 開水泵
        return {
          temp: newTemp,
          humidity: Math.min(
            100,
            Math.max(0, +(prev.humidity + (Math.random() * 2 - 1)).toFixed(0))
          ),
          light: Math.max(
            0,
            +(prev.light + (Math.random() * 50 - 25)).toFixed(0)
          ),
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
      {/* 裝飾背景 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-700 pb-4 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              LIVE SIMULATION
            </span>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            智慧農園監控中心
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            模擬 Micro:bit 回傳之環境數據 (Simulated)
          </p>
        </div>
        <div className="flex gap-4">
          <div
            className={`px-4 py-2 rounded-xl border flex items-center gap-2 ${
              data.fan
                ? 'bg-green-500/20 border-green-500 text-green-400'
                : 'bg-slate-800 border-slate-700 text-slate-500'
            }`}
          >
            <Fan size={18} className={data.fan ? 'animate-spin' : ''} />
            <span className="text-xs font-bold">
              風扇: {data.fan ? 'ON' : 'OFF'}
            </span>
          </div>
          <div
            className={`px-4 py-2 rounded-xl border flex items-center gap-2 ${
              data.pump
                ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                : 'bg-slate-800 border-slate-700 text-slate-500'
            }`}
          >
            <RefreshCw size={18} className={data.pump ? 'animate-spin' : ''} />
            <span className="text-xs font-bold">
              水泵: {data.pump ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* 溫度 */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-slate-400">環境溫度</span>
            <Thermometer size={16} className="text-orange-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-white mb-2">
            {data.temp}
            <span className="text-sm text-slate-500 ml-1">°C</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-orange-500 h-full transition-all duration-1000"
              style={{ width: `${(data.temp / 40) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* 濕度 */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-slate-400">環境濕度</span>
            <Droplets size={16} className="text-blue-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-white mb-2">
            {data.humidity}
            <span className="text-sm text-slate-500 ml-1">%</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-1000"
              style={{ width: `${data.humidity}%` }}
            ></div>
          </div>
        </div>

        {/* 光照 */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-slate-400">光照強度</span>
            <Sun size={16} className="text-yellow-400" />
          </div>
          <div className="text-3xl font-mono font-bold text-white mb-2">
            {data.light}
            <span className="text-sm text-slate-500 ml-1">Lux</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-full transition-all duration-1000"
              style={{ width: `${Math.min(100, (data.light / 1000) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* 土壤 */}
        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-slate-400">土壤濕度</span>
            <Leaf
              size={16}
              className={
                data.soil < 35 ? 'text-red-400 animate-pulse' : 'text-green-400'
              }
            />
          </div>
          <div className="text-3xl font-mono font-bold text-white mb-2">
            {data.soil}
            <span className="text-sm text-slate-500 ml-1">%</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                data.soil < 35 ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${data.soil}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// [新] 全球夥伴牆 (Global Partners Wall - Dynamic Map)
// ==========================================
const GlobalWall = () => {
  const [activePartner, setActivePartner] = useState(null);

  // 地圖上的位置點 (大約百分比位置)
  const locations = [
    {
      id: 'tw',
      name: 'Taiwan',
      x: 77,
      y: 48,
      type: 'source',
      flag: '🇹🇼',
      school: 'NEHSP',
    }, // 台灣
    {
      id: 'jp',
      name: 'Japan',
      x: 84,
      y: 40,
      type: 'target',
      flag: '🇯🇵',
      school: 'Satsukigakuen',
      desc: 'Mango Exchange & SDGs',
    }, // 日本
    {
      id: 'th',
      name: 'Thailand',
      x: 72,
      y: 55,
      type: 'target',
      flag: '🇹🇭',
      school: 'BSRU',
      desc: 'Cultural Co-creation',
    }, // 泰國
    {
      id: 'au',
      name: 'Australia',
      x: 86,
      y: 78,
      type: 'target',
      flag: '🇦🇺',
      school: 'QACI',
      desc: 'Global Forum',
    }, // 澳洲
  ];

  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      {/* 背景世界地圖 (使用 WikiCommons 穩定圖源，並加上深色濾鏡) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-slate-800">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          className="w-full h-full object-cover opacity-30 invert"
          alt="World Map Background"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase">
            Global Connection
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            從屏東走向世界
          </h2>
          <p className="text-slate-400 mt-2">
            點擊地圖上的光點，探索我們的國際交流足跡
          </p>
        </div>

        {/* 地圖容器 (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-slate-800/30 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden group">
          {/* 連線動畫 (SVG Overlay) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* 簡單繪製從台灣(77,48)出發的曲線 */}
            {/* To Japan (84,40) */}
            <path
              d="M 77% 48% Q 80% 40% 84% 40%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5"
              className="animate-pulse"
            />
            {/* To Thailand (72,55) */}
            <path
              d="M 77% 48% Q 75% 55% 72% 55%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5"
              className="animate-pulse delay-700"
            />
            {/* To Australia (86,78) */}
            <path
              d="M 77% 48% Q 80% 60% 86% 78%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5"
              className="animate-pulse delay-1000"
            />
          </svg>

          {/* 地點光點 */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group/point"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              onClick={() => setActivePartner(loc)}
            >
              {/* 脈衝光環 */}
              <div
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                  loc.type === 'source' ? 'bg-green-500' : 'bg-blue-400'
                } animate-ping absolute inset-0`}
              ></div>
              {/* 實體點 */}
              <div
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                  loc.type === 'source'
                    ? 'bg-green-500 border-2 border-white'
                    : 'bg-blue-500 border-2 border-slate-900'
                } relative z-10 shadow-lg shadow-green-500/50 hover:scale-125 transition-transform`}
              ></div>

              {/* Label (Always visible on hover) */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded bg-black/80 text-white text-[10px] md:text-xs font-bold opacity-0 group-hover/point:opacity-100 transition-opacity pointer-events-none">
                {loc.flag} {loc.name}
              </div>
            </div>
          ))}

          {/* 資訊卡片 (當點擊某個點時顯示) */}
          {activePartner && (
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl max-w-xs animate-fade-in text-slate-800 z-20 border border-slate-200">
              <div className="flex justify-between items-start mb-2">
                <div className="text-3xl mb-2">{activePartner.flag}</div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePartner(null);
                  }}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X size={16} />
                </button>
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {activePartner.school}
              </h3>
              <p className="text-xs text-green-600 font-bold uppercase mb-2">
                Partner in {activePartner.name}
              </p>
              {activePartner.desc && (
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activePartner.desc}
                </p>
              )}
              {activePartner.type === 'source' && (
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our Home Base in Pingtung!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// [新] AI 創意翻牌 (Slogan Quiz)
// ==========================================
const AICard = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const cards = [
    {
      id: 1,
      frontTitle: 'Save the Planet, Eat Local',
      frontIcon: <Leaf size={48} className="text-green-500 mb-4" />,
      frontDesc: '猜猜這是什麼農產品的減碳標語？',
      backTitle: '屏東芒果 (Mango)',
      backImg: images.quiz_mango, // 使用 centralized images 物件
      backDesc: '在地生產，減少運輸碳足跡！',
    },
    {
      id: 2,
      frontTitle: 'Sun Power for Delicious Food',
      frontIcon: <Sun size={48} className="text-yellow-500 mb-4" />,
      frontDesc: '不用火也能煮飯？猜猜看！',
      backTitle: '太陽能鍋 (Solar Cooker)',
      backImg: images.quiz_solar, // 使用 centralized images 物件
      backDesc: '利用太陽熱能，零碳排烹飪！',
    },
    {
      id: 3,
      frontTitle: 'Smart Water for Thirsty Plants',
      frontIcon: <Droplets size={48} className="text-blue-500 mb-4" />,
      frontDesc: '植物口渴了誰知道？',
      backTitle: '智慧澆灌 (Smart Irrigation)',
      backImg: images.quiz_irrigation, // 使用 centralized images 物件
      backDesc: '自動偵測土壤濕度，精準給水！',
    },
  ];

  return (
    <div className="py-16 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">
            Interactive Quiz
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            AI 標語猜猜看
          </h2>
          <p className="text-slate-500 mt-2">
            點擊卡片翻轉，揭曉學生為在地農產設計的減碳創意！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative w-full aspect-[3/4] cursor-pointer perspective-1000"
              onClick={() =>
                setFlippedCard(flippedCard === card.id ? null : card.id)
              }
            >
              <div
                className={`relative w-full h-full duration-700 preserve-3d transition-transform ${
                  flippedCard === card.id ? 'rotate-y-180' : ''
                }`}
              >
                {/* 正面 */}
                <div className="absolute inset-0 backface-hidden bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="bg-white p-4 rounded-full shadow-sm mb-6">
                    {card.frontIcon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    "{card.frontTitle}"
                  </h3>
                  <p className="text-slate-500 text-sm">{card.frontDesc}</p>
                  <div className="mt-8 px-4 py-2 bg-slate-200 text-slate-600 rounded-full text-xs font-bold">
                    點擊翻牌
                  </div>
                </div>

                {/* 背面 */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-green-100">
                  <Image
                    src={card.backImg}
                    className="w-full h-2/3 object-cover"
                    alt={card.backTitle}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-white p-6 flex flex-col justify-center text-center">
                    <h3 className="text-lg font-bold text-green-700 mb-1">
                      {card.backTitle}
                    </h3>
                    <p className="text-xs text-slate-500">{card.backDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 關於我們詳情頁 (About Detail Page)
// ==========================================
const AboutDetail = ({ onBack, lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // 修正: 使用 fixed inset-0 確保滿版覆蓋，不留黑邊
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto overflow-x-hidden animate-fade-in font-sans">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} />
          {lang === 'en' ? 'Back' : '返回'}
        </button>
        <span className="font-bold text-slate-800">
          {lang === 'en' ? 'About Us' : '關於我們'}
        </span>
      </div>

      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <Image
            src={images.about_philosophy}
            alt="Philosophy"
            className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl mx-auto text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            {lang === 'en'
              ? 'Learning on a Journey to the World'
              : '走向世界的學習旅程'}
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl">
            {lang === 'en'
              ? 'We believe that learning happens not only inside the classroom but also on a journey to the world. Cultivating proactive communicators and problem-solvers.'
              : '我們相信學習不僅僅發生在教室內，更是走向世界的旅程。培育學生成為主動的溝通者與問題解決者。'}
          </p>
        </div>
      </div>

      {/* Mission Cards */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-green-600 font-bold tracking-wider text-sm uppercase">
            {lang === 'en' ? 'Our Mission' : '設校目的'}
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            {lang === 'en' ? 'Why We Are Here' : '為未來而教'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Building size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {lang === 'en' ? 'Serving the Park' : '服務園區'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Addressing educational needs for families in Pingtung Science Park and Technology Industrial Park.'
                : '滿足屏東科學園區、科技產業園區及高鐵特區之員工子女教育需求。'}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {lang === 'en' ? 'Global Talent' : '延攬人才'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Providing international-standard resources to cultivate bilingual and bicultural talents.'
                : '提供國際化教育資源，協助海外人才子女順利銜接，培育雙語雙文化人才。'}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {lang === 'en' ? 'Future Tech' : '培育高科技'}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Establishing a modern, technology-oriented school with a strong foundation in humanities.'
                : '建立一所國際化、科技導向的實驗學校，厚植人文藝術底蘊，培育國家未來人才。'}
            </p>
          </div>
        </div>
      </div>

      {/* Campus Life */}
      <div className="container mx-auto px-6 py-16 max-w-5xl border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">
              {lang === 'en' ? 'Campus Life' : '校園生活'}
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              {lang === 'en' ? 'Active Learning' : '活力校園'}
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {lang === 'en'
                ? 'Our students engage in various activities, from technology workshops to international cultural exchanges.'
                : '我們的學生積極參與各式活動，從科技實作工作坊到國際文化交流，展現多元的學習風貌。'}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {/* Video 1 */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-black mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wWdEPh06m-s?si=rW5-mxzs3-kPlQ-5"
                  title="YouTube video player 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              {/* Video 2 */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/G99_FyXiI1U"
                  title="YouTube video player 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic mt-4 text-center">
              {lang === 'en'
                ? 'Students introducing NEHSP in English.'
                : '學生使用流利英語介紹屏科實中校園特色。'}
            </p>
          </div>
          <div className="space-y-6">
            <span className="text-purple-600 font-bold tracking-wider text-sm uppercase">
              {lang === 'en' ? 'Video Intro' : '影音介紹'}
            </span>
            <h2 className="text-3xl font-bold text-slate-900">
              {lang === 'en' ? 'Introducing Our School' : '英語介紹影片'}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <Image
                src={images.about_intro1}
                className="rounded-2xl shadow-md hover:scale-105 transition-transform"
                alt="Activity 1"
              />
              <Image
                src={images.about_intro2}
                className="rounded-2xl shadow-md hover:scale-105 transition-transform"
                alt="Activity 2"
              />
            </div>
            <p className="text-sm text-slate-500 italic">
              {lang === 'en' ? 'Vibrant campus life.' : '充滿活力的校園生活。'}
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <a
            href="https://nehs.ptc.edu.tw/nss/p/index"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-700 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            {lang === 'en'
              ? 'Visit Official School Website'
              : '前往學校官方網站'}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Future Campus */}
      <div className="w-full bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image
            src={images.about_campus}
            className="w-full h-full object-cover"
            alt="Campus"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
            {lang === 'en' ? 'Coming Soon' : '即將登場'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            {lang === 'en' ? 'Our Future Campus' : '遇見未來校園'}
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {lang === 'en'
              ? 'Expected to be completed in August 2026. A modern, smart campus embodying technology, sustainability, and humanities.'
              : '預計於 2026 年 8 月完工。這將是一座集結科技、永續與人文藝術的現代化智慧校園，期待與您在此展開無限可能的學習旅程。'}
          </p>
          <div className="inline-flex items-center gap-2 text-green-400 font-bold">
            <Target size={20} />
            <span>Target: 2026.08</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// [新增] 課程模組詳情頁 (Module Detail Page)
// ==========================================
const ModuleDetail = ({ module, onBack, lang }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [module]);

  // 為模組二客製化雙系統展示區塊
  const renderDualSystems = () => (
    <div className="mb-16 space-y-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 relative inline-block">
          {lang === 'en' ? 'Dual Core Systems' : '雙核心系統實作'}
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
        </h2>
      </div>

      {module.details.systems.map((sys, idx) => (
        <div
          key={idx}
          className={`flex flex-col ${
            idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-12 items-center`}
        >
          {/* 圖片區 */}
          <div className="w-full lg:w-1/2">
            <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={sys.img}
                alt={sys.title}
                className="w-full h-[300px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {sys.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 文字區 */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                0{idx + 1}
              </div>
              <h3 className="text-3xl font-bold text-slate-900">{sys.title}</h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">{sys.desc}</p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Cpu size={18} className="text-blue-500" />
                關鍵元件
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {sys.components.map((comp, cIdx) => (
                  <li
                    key={cIdx}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    {comp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto overflow-x-hidden animate-fade-in font-sans">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-bold transition-colors"
        >
          <ArrowLeft size={20} />
          {lang === 'en' ? 'Back to Modules' : '返回模組列表'}
        </button>
        <span className="font-bold text-slate-800 line-clamp-1">
          {module.title}
        </span>
      </div>

      {/* Hero */}
      <div className="relative h-[60vh] w-full bg-slate-900">
        <Image
          src={module.img}
          alt={module.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full max-w-5xl mx-auto text-white">
          <div className="inline-block px-3 py-1 bg-green-500 rounded-full text-xs font-bold uppercase mb-4 shadow-lg">
            {module.tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            {module.title}
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
            {module.fullDesc}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        {/* Intro */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-green-500 pl-4">
            {lang === 'en' ? 'Introduction' : '課程簡介'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {module.details.intro}
          </p>
        </div>

        {/* Objectives */}
        <div className="mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Target className="text-green-600" />
              {lang === 'en' ? 'Learning Objectives' : '學習目標'}
            </h3>
            <ul className="space-y-4">
              {module.details.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="min-w-[24px] h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-slate-700">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-full min-h-[300px] rounded-3xl overflow-hidden shadow-lg bg-slate-200">
            <Image
              src={module.details.gallery[0]}
              className="w-full h-full object-cover"
              alt="Objective"
            />
          </div>
        </div>

        {/* Systems Showcase (Optional) */}
        {module.details.systems && renderDualSystems()}

        {/* Learning Process (Generic / Solar) */}
        {module.details.steps && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-500 pl-4">
              {lang === 'en'
                ? 'Solar Tracker Journey'
                : '學習歷程：雙軸追日系統'}
            </h2>
            <div className="space-y-12">
              {module.details.steps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-100">
                    <Image
                      src={step.img}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt={step.title}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="text-sm font-bold text-blue-500 uppercase tracking-wider mb-2">
                      Step {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Irrigation Journey (New Section) */}
        {module.details.irrigationSteps && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-green-500 pl-4">
              {lang === 'en'
                ? 'Smart Irrigation Journey'
                : '學習歷程：智慧澆灌系統'}
            </h2>
            <div className="space-y-12">
              {module.details.irrigationSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-100">
                    <Image
                      src={step.img}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt={step.title}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="text-sm font-bold text-green-500 uppercase tracking-wider mb-2">
                      Step {i + 1}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-purple-500 pl-4">
            {lang === 'en' ? 'Gallery' : '活動花絮'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {module.details.gallery.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <Image
                  src={img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`Gallery ${i}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 主程式 (Main App)
// ==========================================
const App = () => {
  const [lang, setLang] = useState('en');
  const [activeModule, setActiveModule] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);

    if (id === 'about') {
      setShowAbout(true);
      return;
    }

    if (activeModule || showAbout) {
      setActiveModule(null);
      setShowAbout(false);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element)
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: 'smooth',
          });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element)
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 100,
          behavior: 'smooth',
        });
    }
  };

  // --- 完整資料結構 ---
  const content = {
    modulesData: [
      {
        id: '01',
        title: lang === 'en' ? 'Module 1: Carbon Magic' : '模組一：神奇碳力',
        tag: lang === 'en' ? 'Basics' : '基礎認知',
        desc:
          lang === 'en'
            ? 'From "Why is food getting expensive?" to exploring climate change and carbon footprints.'
            : '從「為什麼食物變貴了？」的生活提問出發，探討氣候變遷與碳足跡。',
        fullDesc:
          lang === 'en'
            ? 'This module guides students to understand the connection between climate change and carbon emissions. Through inquiry-based learning, they grasp the meaning of carbon footprints and sustainable development.'
            : '本模組帶領學生認識氣候變遷與碳排放的關聯，並透過探究式學習，理解碳足跡與永續發展的意涵。',
        img: images.m1_cover,

        details: {
          intro:
            lang === 'en'
              ? 'Imagine if delicious food on the table was no longer taken for granted. Our course starts with a simple question: "Why is our food getting more expensive?" We guide students like detectives to explore how climate change affects global food supply, and eventually their own plates.'
              : '想像一下，餐桌上的美味不再理所當然。我們的課程從一個簡單的提問開始：「為什麼我們吃的食物越來越貴？」我們將引導學生像偵探一樣，探索氣候變遷如何影響全球糧食供應，進而影響到他們餐盤上的每一道菜，讓氣候議題不再遙遠，而是觸手可及的真實感受。',
          objectives:
            lang === 'en'
              ? [
                  'Feel the impact of climate change on local agriculture.',
                  'Understand SDGs through interactive games.',
                  'Transform abstract concepts into AI art and posters.',
                ]
              : [
                  '透過真實數據感受氣候變遷對在地農產的衝擊。',
                  '藉由 Kahoot 遊戲深入認識 SDGs 指標。',
                  '運用 AI 工具將永續概念轉化為視覺藝術。',
                ],
          steps: [
            {
              title:
                lang === 'en' ? 'Problem Awareness' : '問題意識：餐桌上的危機',
              desc:
                lang === 'en'
                  ? 'Using real-life scenarios to discuss rising food prices and climate impact.'
                  : '從「食物變貴」切入，引導學生發現氣候異常如何影響農作物收成，建立危機感。',
              img: images.m1_step1,
            },
            {
              title:
                lang === 'en'
                  ? 'Inquiry: SDGs & Footprint'
                  : '主題探究：認識碳足跡',
              desc:
                lang === 'en'
                  ? 'Playing Kahoot to learn about the UN Sustainable Development Goals (SDGs).'
                  : '視線拉到全球，透過 Kahoot 互動遊戲認識 SDGs，思考個人選擇與全球永續的連結。',
              img: images.m1_step2,
            },
            {
              title:
                lang === 'en' ? 'Brainstorming Slogans' : '腦力激盪：發想標語',
              desc:
                lang === 'en'
                  ? 'Developing creative keywords related to sustainability.'
                  : '學生集思廣益，發想出各式與環保相關的創意標語與關鍵字。',
              img: images.m1_step3,
            },
            {
              title: lang === 'en' ? 'AI Visual Creation' : '科技轉譯：AI 繪圖',
              desc:
                lang === 'en'
                  ? 'Using AI tools to visualize abstract slogans into concrete images.'
                  : '學習運用 AI 繪圖軟體，將抽象的標語關鍵字，轉化為具體的視覺圖像。',
              img: images.m1_step4,
            },
            {
              title: lang === 'en' ? 'Final Poster Design' : '手繪創作與成果',
              desc:
                lang === 'en'
                  ? 'Combining AI inspiration with hand-drawing to create unique posters.'
                  : '參考 AI 產出的構圖，學生回到手繪，創作出獨一無二的減碳海報。',
              img: images.m1_step5,
            },
          ],
          gallery: [
            images.m1_step5,
            images.m1_step4,
            images.m1_step3,
            images.m1_step1,
          ],
        },
      },
      // === 模組二 (更新版) ===
      {
        id: '02',
        title:
          lang === 'en' ? 'Module 2: Tech Thinking Fun' : '模組二：科技運思趣',
        tag: lang === 'en' ? 'Skills' : '技能培養',
        desc:
          lang === 'en'
            ? 'Using computational thinking and AI tools to build solar systems and smart irrigation.'
            : '運用運算思維與 AI 工具，動手打造雙軸追日與智慧澆灌系統。',
        fullDesc:
          lang === 'en'
            ? 'This module guides students to use computational thinking to solve climate change and sustainability issues through programming and AI tools. They will build a dual-axis sun-tracking solar system and a smart irrigation system.'
            : '本模組引導學生運用運算思維，透過程式設計與 AI 工具，學習如何解決氣候變遷與永續發展的議題。學生將親手打造雙軸追日太陽能系統與智慧澆灌系統，為未來生活注入更多科技動能。',
        img: images.m2_cover,

        details: {
          intro:
            lang === 'en'
              ? 'How can technology help the planet? In this module, we transform computational thinking from an abstract concept into tangible net-zero actions. We focus on two main systems: the Dual-Axis Sun-Tracking Solar System, which maximizes green energy efficiency, and the Smart Irrigation System, which optimizes water usage through sensing technology.'
              : '科技如何幫助地球？在這個模組中，我們將運算思維從抽象概念轉化為具體的淨零行動。本模組包含兩大核心系統實作：「雙軸追日太陽能系統」，學習如何利用科技提升綠能效率；以及「智慧澆灌系統」，運用感測技術精準控制水資源，讓每一滴水都發揮最大效益。',
          objectives:
            lang === 'en'
              ? [
                  'Practice computational logic through block-based programming.',
                  'Integrate programming with electromechanical systems.',
                  'Build a Dual-Axis Sun-Tracking Solar System.',
                  'Develop a Smart Irrigation System using sensors.',
                ]
              : [
                  '透過積木程式練習基礎運算邏輯，讓思維具體化。',
                  '整合程式設計與機電知識，練習腳位連接與控制。',
                  '親手組裝並程式控制「雙軸追日太陽能系統」。',
                  '運用感測器開發「智慧澆灌系統」，解決水資源浪費。',
                ],
          // 使用 systems 欄位來觸發新的雙欄排版
          systems: [
            {
              title: lang === 'en' ? 'Dual-Axis Tracker' : '雙軸追日太陽能系統',
              desc:
                lang === 'en'
                  ? 'By using light sensors to detect the sun’s position, this system automatically adjusts the solar panel’s angle with servo motors to ensure maximum direct sunlight absorption, significantly improving power generation efficiency.'
                  : '利用光敏電阻偵測不同方位的陽光強度，並透過程式邏輯判斷，控制水平與垂直兩個軸向的伺服馬達，讓太陽能板能像向日葵一樣自動追蹤太陽位置，隨時保持最佳受光角度，大幅提升發電效率。',
              img: images.m2_sys_solar,
              tags: ['光感測', '伺服馬達', '綠能科技'],
              components: [
                'Micro:bit',
                '光敏電阻 x4',
                '伺服馬達 x2',
                '太陽能板',
              ],
            },
            {
              title: lang === 'en' ? 'Smart Irrigation' : '智慧澆灌系統',
              desc:
                lang === 'en'
                  ? 'Addressing water scarcity, this system uses soil moisture sensors to monitor the environment in real-time. It activates the water pump only when the soil is too dry, achieving precision agriculture and water conservation.'
                  : '針對水資源浪費問題，本系統運用土壤濕度感測器即時監控盆栽環境。當偵測到土壤過於乾燥時，系統會自動啟動水泵進行澆灌；一旦濕度達標即停止，實現精準農業與智慧節水目標。',
              img: images.m2_sys_irrigation,
              tags: ['土壤感測', '自動控制', '智慧農業'],
              components: ['Micro:bit', '土壤濕度感測器', '繼電器模組', '水泵'],
            },
          ],
          // 原有的太陽能步驟 (更名為 generic 或 solar)
          steps: [
            {
              title: lang === 'en' ? 'Design Thinking' : '設計思考：從問題出發',
              desc:
                lang === 'en'
                  ? 'Defining problems and brainstorming solutions.'
                  : '學生透過設計思考流程，釐清生活中的環境問題，並發想解決方案。',
              img: images.m2_step_design,
            },
            {
              title: lang === 'en' ? 'Coding Logic' : '程式邏輯撰寫',
              desc:
                lang === 'en'
                  ? 'Learning block-based coding to control sensors.'
                  : '學習使用積木程式，撰寫控制伺服馬達與讀取感測器數值的邏輯。',
              img: images.m2_step_coding,
            },
            {
              title: lang === 'en' ? 'Hands-on Making' : '動手組裝實作',
              desc:
                lang === 'en'
                  ? 'Assembling the hardware components.'
                  : '將程式與硬體結合，親手組裝太陽能板支架與澆灌管路。',
              img: images.m2_step_making,
            },
            {
              title: lang === 'en' ? 'Classroom Interaction' : '課堂互動與測試',
              desc:
                lang === 'en'
                  ? 'Testing and refining the systems in class.'
                  : '在課堂上實際測試裝置運作情形，並根據結果進行除錯與優化。',
              img: images.m2_step_class,
            },
          ],
          // 新增：智慧澆灌步驟
          irrigationSteps: [
            {
              title: lang === 'en' ? 'Hardware Assembly' : '硬體配置與組裝',
              desc:
                lang === 'en'
                  ? 'Connecting sensors and pumps.'
                  : '進行水泵、繼電器與感測器的線路連接，確保硬體運作正常。',
              img: images.m2_irrigation_make1,
            },
            {
              title: lang === 'en' ? 'Sensor Integration' : '感測器整合測試',
              desc:
                lang === 'en'
                  ? 'Integrating soil sensors.'
                  : '將土壤濕度感測器插入盆栽中，測試數值讀取是否準確。',
              img: images.m2_irrigation_make2,
            },
            {
              title: lang === 'en' ? 'System Verification' : '成品運作驗收',
              desc:
                lang === 'en'
                  ? 'Verifying automatic watering.'
                  : '完成全系統整合，驗證當土壤乾燥時，系統是否能自動啟動澆水功能。',
              img: images.m2_irrigation_finished,
            },
          ],
          gallery: images.m2_gallery,
        },
      },
      // === 模組三 ===
      {
        id: '03',
        title:
          lang === 'en'
            ? 'Module 3: Net Zero Strategist'
            : '模組三：淨零碳排策略家',
        tag: lang === 'en' ? 'Project' : '專題實作',
        desc:
          lang === 'en'
            ? 'Formulating effective net-zero strategies through design thinking and hands-on practice.'
            : '結合設計思考與實作，制定有效的淨零碳排策略，並製作太陽能烹飪裝置。',
        fullDesc:
          lang === 'en'
            ? 'This module guides students to formulate effective net-zero carbon strategies through design thinking and hands-on practice. It transforms abstract concepts into tangible actions by building real-world solutions like solar cookers.'
            : '本模組旨在引導學生透過設計思考與實作，學習如何制定有效的淨零碳排策略，並動手製作解決方案（如太陽能烹飪裝置），將抽象概念轉化為具體行動。',
        img: images.m3_cover,

        details: {
          intro:
            lang === 'en'
              ? 'From empathy to solution. The course begins with "Design Thinking," a five-step, human-centered approach. Students collaborate on the Padlet platform to define problems and brainstorm ideas. Then, they use everyday materials to build a solar cooking device, testing and verifying its efficiency in a real-world experiment.'
              : '從同理心到解決方案。課程從「設計思考」出發，學生們在 Padlet 平台上共同釐清問題、定義使用者並發想點子。接著，發揮創意利用回收材料與生活用品，將設計草圖轉化為「太陽能烹飪裝置」的原型，並透過實際烹煮與溫度測量，驗證綠色能源的可行性。',
          objectives:
            lang === 'en'
              ? [
                  'Apply Design Thinking (Empathize, Define, Ideate, Prototype, Test).',
                  'Collaborate online using Padlet.',
                  'Build a solar cooking prototype from recycled materials.',
                  'Conduct scientific experiments to measure temperature and efficiency.',
                ]
              : [
                  '運用設計思考五步驟（同理、定義、發想、原型、測試）解決問題。',
                  '在 Padlet 平台上進行線上協作與討論。',
                  '利用回收材料製作太陽能烹飪裝置原型。',
                  '進行科學實驗：測量溫度、紀錄數據並驗證成效。',
                ],
          steps: [
            {
              title: lang === 'en' ? 'Prototyping' : '動手製作原型',
              desc:
                lang === 'en'
                  ? 'Building the solar cooker structure.'
                  : '學生發揮創意，利用回收材料與生活用品，將設計草圖轉化為太陽能烹飪裝置的實體結構。',
              img: images.m3_step1,
            },
            {
              title: lang === 'en' ? 'Prototype Complete' : '裝置完成',
              desc:
                lang === 'en'
                  ? 'The finished solar cooker ready for testing.'
                  : '太陽能烹飪裝置組裝完成，準備進行戶外實測。',
              img: images.m3_step2,
            },
            {
              title: lang === 'en' ? 'Experiment Setup' : '實驗準備',
              desc:
                lang === 'en'
                  ? 'Placing an egg inside to test solar collection.'
                  : '將雞蛋放入裝置中，準備進行實際的太陽能烹煮測試。',
              img: images.m3_step3,
            },
            {
              title: lang === 'en' ? 'Data Collection' : '溫度測量與紀錄',
              desc:
                lang === 'en'
                  ? 'Measuring temperature to verify efficiency.'
                  : '使用溫度計定時測量裝置內部溫度，並記錄數據以驗證集熱效率。',
              img: images.m3_step4,
            },
            {
              title: lang === 'en' ? 'Result Verification' : '實驗成果驗收',
              desc:
                lang === 'en'
                  ? 'The egg is half-cooked, proving the concept!'
                  : '經過陽光照射後，雞蛋呈現半熟狀態，成功驗證了太陽能烹飪的可行性！',
              img: images.m3_step5,
            },
          ],
          gallery: images.m3_gallery,
        },
      },
      // === 模組四 ===
      {
        id: '04',
        title:
          lang === 'en'
            ? 'Module 4: Net Zero Global'
            : '模組四：Net Zero 策略家',
        tag: lang === 'en' ? 'Outreach' : '國際推廣',
        desc:
          lang === 'en'
            ? 'From "Green Mango Expedition" to global partnership. Sharing solutions with the world.'
            : '從「綠色芒果探險隊」出發，計算碳足跡，並將減碳策略推廣至國際。',
        fullDesc:
          lang === 'en'
            ? 'This module, themed "Green Mango Expedition," guides students to explore the connection between climate change and diet, starting from mango production in Pingtung. Through project-based learning, they formulate effective carbon reduction strategies and promote their solutions to the world, practicing global partnership.'
            : '本模組以「綠色芒果探險隊」為主題，引導學生從臺灣屏東的芒果產地出發，深入了解氣候變遷與飲食的關聯。透過專題探究與實作，學生不僅制定有效的減碳策略，更將解決方案推廣至世界各地，實踐全球夥伴關係。',
        img: images.m4_cover,

        details: {
          intro:
            lang === 'en'
              ? "From Pingtung to the World. We start with local mangoes, using AI tools to analyze carbon footprints and brainstorm green strategies like smart farming. But we don't stop there. Students use English to share these ideas with partners in Japan, Thailand, and Australia, turning local action into global impact."
              : '從屏東走向世界。我們從在地芒果產業切入，運用 AI 工具分析碳足跡，並發想如綠色包裝、智慧農作等減碳策略。更重要的是，學生們使用全英文與日本、泰國、澳洲的夥伴進行跨國交流，分享這些創新方案，將在地行動轉化為全球影響力。',
          objectives:
            lang === 'en'
              ? [
                  'Calculate carbon footprints using AI tools.',
                  'Develop green strategies for local agriculture (Mangoes).',
                  'Engage in cross-cultural communication with international partners.',
                  'Practice English presentation and global citizenship.',
                ]
              : [
                  '運用 AI 工具計算與分析在地產業（芒果）的碳足跡。',
                  '制定具體的綠色農業減碳策略。',
                  '與日、泰、澳國際夥伴進行全英文跨文化交流。',
                  '培養全球公民素養與自信的英語表達能力。',
                ],
          steps: [
            {
              title:
                lang === 'en'
                  ? 'AI Carbon Calculation'
                  : '行動學習：AI 碳足跡計算',
              desc:
                lang === 'en'
                  ? 'Using AI tools to analyze carbon data and brainstorm reduction strategies on Padlet.'
                  : '透過團隊協作，運用 AI 工具分析芒果產業的碳足跡數據，並在 Padlet 上共同發想如綠色包裝等創新減碳方案。',
              img: images.m4_step1,
            },
            {
              title: lang === 'en' ? 'Japan Exchange Prep' : '台日交流準備',
              desc:
                lang === 'en'
                  ? 'Preparing materials for online sessions with Satsukigakuen, Japan.'
                  : '為了與日本さつき学園進行線上交流，學生們精心準備簡報與道具，練習如何用英文介紹屏東的減碳策略。',
              img: images.m4_step2,
            },
            {
              title: lang === 'en' ? 'Global Partnership' : '跨國線上交流',
              desc:
                lang === 'en'
                  ? 'Discussing SDGs and carbon strategies with partners in Australia and Japan.'
                  : '與澳洲及日本水俣第二小学校的夥伴連線，全英文討論 SDG 目標，分享彼此文化與減碳點子，拓展國際視野。',
              img: images.m4_step3,
            },
            {
              title:
                lang === 'en' ? 'In-depth Interaction' : '泰國 BSRU 實體交流',
              desc:
                lang === 'en'
                  ? 'Cultural exchange and co-creation with visiting students from BSRU, Thailand.'
                  : '不只線上，更有實體互動！與來訪的泰國 BSRU 師生進行深度文化交流與共創，並介紹農曆新年習俗，建立深厚友誼。',
              img: images.m4_step4,
            },
          ],
          gallery: images.m4_gallery,
        },
      },
    ],
    // 增加 Mission 區塊
    mission: {
      title: lang === 'en' ? 'Interdisciplinary Learning' : '跨領域學習課程',
      desc:
        lang === 'en'
          ? 'This curriculum breaks down traditional subject boundaries, perfectly integrating two core technologies—Artificial Intelligence (AI) and Mechatronics—with the environmental issue of net-zero carbon emissions. We guide students to transform from passive knowledge receivers into active young innovators who can use diverse technologies to solve environmental problems.'
          : '這門課程打破傳統學科界限，將人工智能 (AI) 與機電整合 (Mechatronics) 兩大核心技術，與淨零碳排的環境議題完美結合。我們引導學生從單純的知識吸收者，轉變為能夠運用多元科技解決環境問題的實踐家。',
      pillars: [
        {
          icon: <Cpu size={32} />,
          title: lang === 'en' ? 'Technology & Engineering' : '科技與工程',
          desc:
            lang === 'en'
              ? 'Learn about AI tool applications, data analysis, and coding to develop logical thinking skills. Also, apply mechatronics technology to build sensors and smart models with hands-on projects.'
              : '學習 AI 工具應用、資料分析與程式設計，培養邏輯思維。同時，應用機電整合技術，動手製作感測裝置與智慧模型。',
        },
        {
          icon: <Leaf size={32} />,
          title: lang === 'en' ? 'Natural Science' : '自然科學',
          desc:
            lang === 'en'
              ? 'Explore key concepts like the carbon cycle, climate change, and carbon footprints to help students understand scientific principles and build a sense of responsibility for environmental sustainability.'
              : '探討碳循環、氣候變遷與碳足跡等重要概念，幫助學生理解科學原理，並建立對環境永續的責任感。',
        },
        {
          icon: <Palette size={32} />,
          title: lang === 'en' ? 'Arts and Design' : '藝術與設計',
          desc:
            lang === 'en'
              ? 'Through both hand-drawing and digital painting software for artistic design, students combine it with design thinking to transform complex scientific concepts into vivid visual images and easy-to-understand communication plans.'
              : '透過手繪與數位繪畫軟體進行美術設計，並結合設計思維，將複雜的科學概念轉化為生動的視覺圖像與易懂的溝通方案。',
        },
        {
          icon: <Globe size={32} />,
          title: lang === 'en' ? 'Social Studies & Humanities' : '社會與人文',
          desc:
            lang === 'en'
              ? 'Through exchange with international partners from Japan, Thailand, and Australia, students cultivate cross-cultural communication and a global perspective, equipping them with the qualities of a global citizen.'
              : '透過與來自日本、泰國、澳洲的國際夥伴進行交流，培養學生的跨文化溝通與國際觀，讓他們具備全球公民素養。',
        },
      ],
    },
  };

  // 1. 如果有選中的模組，顯示模組詳情頁
  if (activeModule) {
    return (
      <ModuleDetail
        module={activeModule}
        onBack={() => setActiveModule(null)}
        lang={lang}
      />
    );
  }

  // 2. 如果點擊 About，顯示關於我們詳情頁 (新增)
  if (showAbout) {
    return <AboutDetail onBack={() => setShowAbout(false)} lang={lang} />;
  }

  // 3. 否則顯示首頁
  return (
    // 修復：加入 w-full overflow-x-hidden 防止右側黑邊，移除 max-w-[100vw]
    <div className="font-sans text-slate-800 bg-white min-h-screen selection:bg-green-100 selection:text-green-800 animate-fade-in w-full overflow-x-hidden">
      {/* Top Bar */}
      <div className="fixed top-0 left-0 w-full h-10 bg-slate-900 z-[60] flex justify-between items-center px-4 lg:px-8 shadow-md">
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-medium text-slate-400 tracking-wider">
          <Globe size={14} className="text-green-500" />
          <span className="hidden md:inline">
            {lang === 'en' ? 'Current Language: English' : '目前語言：繁體中文'}
          </span>
        </div>
        <button
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="flex items-center gap-2 px-3 py-1 rounded bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all transform hover:scale-105 shadow-sm"
        >
          <span>{lang === 'en' ? '切換至繁體中文' : 'Switch to English'}</span>
          <ArrowRight size={12} />
        </button>
      </div>

      {/* Nav */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 top-10 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/20">
              N
            </div>
            <div
              className={`flex flex-col leading-none ${
                scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'
              }`}
            >
              <span className="font-bold text-lg tracking-tight">NEHSP</span>
              <span className="text-xs font-medium opacity-80">D-Learning</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: lang === 'en' ? 'About' : '關於計畫', id: 'about' },
              { name: lang === 'en' ? 'Modules' : '課程模組', id: 'modules' },
              { name: lang === 'en' ? 'Gallery' : '成果展示', id: 'gallery' },
              { name: lang === 'en' ? 'Contact' : '聯絡資訊', id: 'contact' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium hover:text-green-500 transition-colors ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <button
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* Landing Content (Hero) */}
      <header
        id="about"
        className="relative pt-40 pb-20 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-50"
      >
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full bg-[#f0fdf4] -z-10 lg:rounded-bl-[150px]" />
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-green-100 shadow-sm text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
              {lang === 'en' ? 'Digital Learning Program' : '數位學習深耕計畫'}
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.15]">
              {lang === 'en'
                ? 'From Pingtung to the World: Innovating for Sustainability'
                : '從屏東綠地出發，實踐地球永續未來'}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl border-l-4 border-green-500 pl-6">
              {lang === 'en'
                ? 'Integrating AI and Mechatronics to guide students in transforming from passive learners into active innovators.'
                : '我們結合 AI 人工智慧與機電整合兩大核心技術，引導學生運用科技解決環境問題。'}
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => scrollToSection('modules')}
                className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold shadow-lg hover:bg-green-700 transition-all flex items-center gap-2"
              >
                {lang === 'en' ? 'Explore Modules' : '探索課程'}{' '}
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => setShowAbout(true)}
                className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center gap-2"
              >
                {lang === 'en' ? 'About Us' : '關於我們'}
              </button>
            </div>
          </div>
          <div className="relative lg:h-[500px]">
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-slate-200 group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${images.hero})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full text-white">
                <div className="flex items-center gap-2 mb-2 text-green-300 font-bold text-sm uppercase tracking-wider">
                  <MapPin size={16} />{' '}
                  {lang === 'en' ? 'Pingtung, Taiwan' : '屏東・台灣'}
                </div>
                <h3 className="text-2xl font-bold mb-1">
                  {lang === 'en'
                    ? 'Interdisciplinary Vision'
                    : '跨領域學習願景'}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* [新] Mission Statement (計畫理念) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 w-full max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-green-600 font-bold tracking-wider text-sm uppercase">
              {lang === 'en' ? 'Mission Statement' : '計畫理念'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              {content.mission.title}
            </h2>
            <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
              {content.mission.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.mission.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-600 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors border border-slate-100">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section
        id="modules"
        className="py-24 bg-slate-50 border-y border-slate-200"
      >
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">
              {lang === 'en' ? 'Learning Path' : '學習路徑'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
              {lang === 'en' ? 'Course Modules' : '數位學習課程模組'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.modulesData.map((module, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full cursor-pointer"
                onClick={() => setActiveModule(module)}
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <Image
                    src={module.img}
                    alt={module.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 shadow-sm">
                    {module.tag}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-4xl font-black text-slate-100 group-hover:text-green-50 transition-colors select-none">
                      {module.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {module.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                    {module.desc}
                  </p>
                  <div className="pt-4 border-t border-slate-50 mt-auto">
                    <button className="text-green-600 text-xs font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                      {lang === 'en' ? 'Learn More' : '查看詳情'}{' '}
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT Dashboard (新增：智慧農園數據儀表板) */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-6">
          <IoTDashboard />
          <div className="text-center mt-6">
            <p className="text-slate-400 text-sm mb-4">
              {lang === 'en'
                ? 'This live data is powered by Module 2: Tech Thinking Fun.'
                : '此實時數據來自「模組二：科技運思趣」的 IoT 裝置。'}
            </p>
            <button
              onClick={() => setActiveModule(content.modulesData[1])}
              className="text-green-400 hover:text-green-300 font-bold border-b border-green-500 pb-0.5 transition-colors"
            >
              {lang === 'en' ? 'Explore Module 2 >' : '探索模組二 >'}
            </button>
          </div>
        </div>
      </section>

      {/* Global Partners Wall (新增：全球夥伴牆) */}
      <GlobalWall />

      {/* AI Creative Card (新增：AI 翻牌) */}
      <AICard />

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {lang === 'en' ? 'Highlights' : '精彩瞬間'}
            </h2>
          </div>
          <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar">
            {content.modulesData[0].details.gallery.map((img, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-[400px] snap-center"
              >
                <div className="rounded-2xl overflow-hidden shadow-lg h-[250px] relative group">
                  <Image
                    src={img}
                    alt="Gallery"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© 2024 NEHSP Elementary Department.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
