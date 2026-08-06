// ========================================
// COMPUTING ERAS DATABASE (1940-2026)
// ========================================

const computingEras = [
  { 
    start: 1940, 
    end: 1949, 
    name: "The Dawn of Computing", 
    nameAr: "فجر الحوسبة",
    icon: "🧮",
    color: "#ff6b6b",
    desc: "الحواسيب الأولى والآلات الحاسبة العملاقة",
    descEn: "First computers and giant calculating machines"
  },
  { 
    start: 1950, 
    end: 1959, 
    name: "The Mainframe Era", 
    nameAr: "عصر الحواسيب المركزية",
    icon: "🏢",
    color: "#ffa94d",
    desc: "الحواسيب التجارية الأولى والترانزستورات",
    descEn: "First commercial computers and transistors"
  },
  { 
    start: 1960, 
    end: 1969, 
    name: "The Innovation Era", 
    nameAr: "عصر الابتكار",
    icon: "💡",
    color: "#ffd93d",
    desc: "الدوائر المتكاملة وأجهزة الميني كمبيوتر",
    descEn: "Integrated circuits and minicomputers"
  },
  { 
    start: 1970, 
    end: 1979, 
    name: "The Microprocessor Revolution", 
    nameAr: "ثورة المعالجات الدقيقة",
    icon: "🧠",
    color: "#6bcb77",
    desc: "أول معالجات دقيقة وأجهزة الكمبيوتر الشخصية",
    descEn: "First microprocessors and personal computers"
  },
  { 
    start: 1980, 
    end: 1989, 
    name: "The Personal Computer Era", 
    nameAr: "عصر الحاسب الشخصي",
    icon: "💻",
    color: "#4d96ff",
    desc: "IBM PC، Macintosh، وانتشار الحواسيب الشخصية",
    descEn: "IBM PC, Macintosh, and PC普及"
  },
  { 
    start: 1990, 
    end: 1999, 
    name: "The Internet Revolution", 
    nameAr: "ثورة الإنترنت",
    icon: "🌐",
    color: "#845ef7",
    desc: "الويب، Windows 95، وبداية العصر الرقمي",
    descEn: "Web, Windows 95, and the digital age"
  },
  { 
    start: 2000, 
    end: 2009, 
    name: "The Digital Age", 
    nameAr: "العصر الرقمي",
    icon: "📱",
    color: "#f06595",
    desc: "الهواتف الذكية، Windows XP، والحوسبة المحمولة",
    descEn: "Smartphones, Windows XP, and mobile computing"
  },
  { 
    start: 2010, 
    end: 2019, 
    name: "The Cloud & AI Era", 
    nameAr: "عصر السحابة والذكاء الاصطناعي",
    icon: "☁️",
    color: "#20c997",
    desc: "الحوسبة السحابية، الذكاء الاصطناعي، وإنترنت الأشياء",
    descEn: "Cloud computing, AI, and IoT"
  },
  { 
    start: 2020, 
    end: 2026, 
    name: "The AI & Quantum Era", 
    nameAr: "عصر الذكاء الاصطناعي والكم",
    icon: "🚀",
    color: "#74c0fc",
    desc: "الذكاء الاصطناعي التوليدي والحوسبة الكمومية",
    descEn: "Generative AI and quantum computing"
  }
];

// ========================================
// COMPUTING MILESTONES DATABASE (1940-2026)
// ========================================

const computingMilestones = {
  "1940": { icon: "🧮", title: "Z3 & Early Computing", desc: "بداية عصر الحوسبة الحديثة مع أولى الحواسيب المبرمجة." },
  "1941": { icon: "⚙️", title: "Z3 Computer", desc: "أول حاسوب مبرمج يعمل بالكامل بواسطة Konrad Zuse." },
  "1942": { icon: "🔐", title: "Colossus", desc: "أول حاسوب إلكتروني لفك الشفرات خلال الحرب العالمية الثانية." },
  "1943": { icon: "📡", title: "ENIAC Development", desc: "بدء تطوير ENIAC في جامعة بنسلفانيا." },
  "1944": { icon: "🖥️", title: "Mark I", desc: "أول حاسوب آلي من IBM للتحكم بالتسلسل." },
  "1945": { icon: "💡", title: "ENIAC", desc: "أول حاسوب إلكتروني للأغراض العامة، بداية الحوسبة الحديثة." },
  "1946": { icon: "🔬", title: "ENIAC Public", desc: "ENIAC يكشف للعامة، ويبدأ عصر الحاسوب." },
  "1947": { icon: "🔌", title: "Transistor", desc: "اختراع الترانزستور في مختبرات بيل." },
  "1948": { icon: "🧠", title: "Manchester Baby", desc: "أول حاسوب يخزن البرامج." },
  "1949": { icon: "📀", title: "EDSAC", desc: "أول حاسوب عملي يخزن البرامج." },
  "1950": { icon: "📊", title: "Pilot ACE", desc: "أول حاسوب من المختبر الفيزيائي الوطني البريطاني." },
  "1951": { icon: "🏢", title: "UNIVAC I", desc: "أول حاسوب تجاري يباع في الولايات المتحدة." },
  "1952": { icon: "📈", title: "IBM 701", desc: "أول حاسوب إلكتروني من IBM للاستخدام العلمي." },
  "1953": { icon: "💾", title: "IBM 650", desc: "أول حاسوب يتم إنتاجه بكميات كبيرة من IBM." },
  "1954": { icon: "🔢", title: "FORTRAN", desc: "تطوير أول لغة برمجة عالية المستوى." },
  "1955": { icon: "📡", title: "SAGE System", desc: "أول شبكة حاسوبية واسعة النطاق للدفاع الجوي." },
  "1956": { icon: "💿", title: "IBM 305 RAMAC", desc: "أول قرص صلب تجاري بسعة 5 ميجابايت." },
  "1957": { icon: "💻", title: "IBM 608", desc: "أول حاسوب يعمل بالكامل بالترانزستور." },
  "1958": { icon: "🔬", title: "Integrated Circuit", desc: "اختراع الدائرة المتكاملة." },
  "1959": { icon: "📊", title: "COBOL", desc: "أول لغة برمجة موجهة للأعمال." },
  "1960": { icon: "🖥️", title: "DEC PDP-1", desc: "أول حاسوب مصغر تفاعلي مع شاشة." },
  "1961": { icon: "⌨️", title: "IBM Selectric", desc: "أول آلة كاتبة برأس كروي قابل للتبديل." },
  "1962": { icon: "🕹️", title: "Spacewar!", desc: "أول لعبة فيديو يتم إنشاؤها." },
  "1963": { icon: "🔴", title: "The Mouse", desc: "اختراع أول فأرة حاسوب بواسطة Doug Engelbart." },
  "1964": { icon: "🏛️", title: "IBM System/360", desc: "ثورة في الحواسيب المؤسسية مع عائلة متوافقة." },
  "1965": { icon: "💾", title: "Floppy Disk", desc: "اختراع أول قرص مرن في IBM." },
  "1966": { icon: "🖨️", title: "Laser Printer", desc: "تطوير أول طابعة ليزر بواسطة Xerox." },
  "1967": { icon: "📟", title: "HP 9100A", desc: "أول آلة حاسبة علمية قابلة للبرمجة." },
  "1968": { icon: "🖱️", title: "The Mouse Demo", desc: "عرض الفأرة والواجهة الرسومية لأول مرة." },
  "1969": { icon: "🌐", title: "ARPANET", desc: "إنشاء مقدمة الإنترنت." },
  "1970": { icon: "📡", title: "Intel 1103", desc: "أول شريحة DRAM، ثورة في الذاكرة." },
  "1971": { icon: "🧠", title: "Intel 4004", desc: "أول معالج دقيق في العالم." },
  "1972": { icon: "📊", title: "C Programming", desc: "إنشاء لغة البرمجة C." },
  "1973": { icon: "📱", title: "Xerox Alto", desc: "أول حاسوب بواجهة مستخدم رسومية." },
  "1974": { icon: "💻", title: "MITS Altair", desc: "أول مجموعة حاسوب شخصي." },
  "1975": { icon: "🖥️", title: "Microsoft Founded", desc: "تأسيس Microsoft بواسطة بيل غيتس وبول ألن." },
  "1976": { icon: "🍎", title: "Apple I", desc: "إصدار أول حاسوب من Apple." },
  "1977": { icon: "📀", title: "Apple II", desc: "أحد أولى الحواسيب الشخصية الناجحة." },
  "1978": { icon: "💾", title: "5.25\" Floppy", desc: "أول مشغل أقراص مرنة 5.25 بوصة." },
  "1979": { icon: "📊", title: "VisiCalc", desc: "أول برنامج جداول بيانات، تطبيق قاتل لـ Apple II." },
  "1980": { icon: "💻", title: "IBM PC Development", desc: "IBM تبدأ تطوير أول حاسوب شخصي لها." },
  "1981": { icon: "🖥️", title: "IBM PC 5150", desc: "أول حاسوب شخصي من IBM، أسس معيار PC." },
  "1982": { icon: "📀", title: "CD-ROM", desc: "تقديم أول CD-ROM بواسطة Sony و Philips." },
  "1983": { icon: "🪟", title: "Windows 1.0 Dev", desc: "Microsoft تعلن عن Windows." },
  "1984": { icon: "🍎", title: "Macintosh", desc: "إصدار Macintosh من Apple بواجهة رسومية." },
  "1985": { icon: "🪟", title: "Windows 1.0", desc: "أول إصدار من Windows بواجهة رسومية." },
  "1986": { icon: "💾", title: "3.5\" Floppy", desc: "أقراص 3.5 بوصة تصبح شائعة." },
  "1987": { icon: "🖥️", title: "IBM PS/2", desc: "IBM PS/2 يقدم معايير جديدة مثل منافذ PS/2." },
  "1988": { icon: "📡", title: "First Internet", desc: "أول اتصال بالإنترنت للاستخدام العام." },
  "1989": { icon: "🌐", title: "World Wide Web", desc: "تيم بيرنرز لي يخترع الويب." },
  "1990": { icon: "🪟", title: "Windows 3.0", desc: "نجاح كبير لـ Microsoft بواجهة محسنة." },
  "1991": { icon: "🌐", title: "WWW Launch", desc: "أول موقع ويب ينطلق." },
  "1992": { icon: "🎮", title: "Doom Development", desc: "تطوير Doom، ثورة في الألعاب." },
  "1993": { icon: "📊", title: "Pentium", desc: "Intel تطلق أول معالج Pentium." },
  "1994": { icon: "🌐", title: "Netscape", desc: "إصدار أول متصفح ويب شعبي." },
  "1995": { icon: "🪟", title: "Windows 95", desc: "ثورة في واجهة المستخدم مع قائمة Start." },
  "1996": { icon: "🖥️", title: "Windows NT 4.0", desc: "نسخة مستقرة من Windows للمؤسسات." },
  "1997": { icon: "📀", title: "Office 97", desc: "Microsoft Office يصبح معيار العمل المكتبي." },
  "1998": { icon: "🪟", title: "Windows 98", desc: "تكامل أفضل مع الإنترنت." },
  "1999": { icon: "📱", title: "First Smartphone", desc: "ظهور أولى الهواتف الذكية." },
  "2000": { icon: "🪟", title: "Windows 2000", desc: "نظام تشغيل مهني مستقر للمؤسسات." },
  "2001": { icon: "🪟", title: "Windows XP", desc: "أحد أشهر أنظمة التشغيل على الإطلاق." },
  "2002": { icon: "📱", title: "First BlackBerry", desc: "إصدار أول BlackBerry." },
  "2003": { icon: "💻", title: "Centrino", desc: "Intel Centrino يجعل أجهزة اللابتوب مع Wi-Fi." },
  "2004": { icon: "🌐", title: "Facebook", desc: "إطلاق Facebook، تغيير وسائل التواصل." },
  "2005": { icon: "📱", title: "YouTube", desc: "تأسيس YouTube." },
  "2006": { icon: "💻", title: "Intel Core", desc: "معالجات Intel Core تبدأ عصر أداء جديد." },
  "2007": { icon: "📱", title: "iPhone", desc: "أول iPhone يحدث ثورة في الهواتف." },
  "2008": { icon: "📱", title: "Android", desc: "إصدار أول هاتف Android." },
  "2009": { icon: "🌐", title: "Windows 7", desc: "Windows 7 يصبح شائعًا ومستقرًا." },
  "2010": { icon: "📱", title: "iPad", desc: "إصدار أول iPad." },
  "2011": { icon: "📱", title: "Siri", desc: "Apple تقدم Siri، أول مساعد ذكي." },
  "2012": { icon: "🌐", title: "Cloud Computing", desc: "الحوسبة السحابية تصبح سائدة." },
  "2013": { icon: "🖥️", title: "Windows 8.1", desc: "نسخة محسنة من Windows 8." },
  "2014": { icon: "🧠", title: "AI Revolution", desc: "تسارع الذكاء الاصطناعي والتعلم الآلي." },
  "2015": { icon: "🪟", title: "Windows 10", desc: "إصدار Windows 10 كمنصة موحدة." },
  "2016": { icon: "🧠", title: "AlphaGo", desc: "الذكاء الاصطناعي يهزم بطل Go." },
  "2017": { icon: "🧠", title: "AI Advancements", desc: "اختراقات كبيرة في الذكاء الاصطناعي." },
  "2018": { icon: "💻", title: "8th Gen Intel", desc: "إصدار معالجات Intel من الجيل الثامن." },
  "2019": { icon: "🖥️", title: "AMD Ryzen", desc: "معالجات AMD Ryzen تنافس Intel." },
  "2020": { icon: "🧠", title: "AI Everywhere", desc: "الذكاء الاصطناعي يتكامل في الحياة اليومية." },
  "2021": { icon: "🧠", title: "GPT-3", desc: "GPT-3 يحدث ثورة في معالجة اللغة." },
  "2022": { icon: "🧠", title: "ChatGPT", desc: "إطلاق ChatGPT للجمهور." },
  "2023": { icon: "🧠", title: "AI Revolution", desc: "ثورة الذكاء الاصطناعي والنماذج اللغوية." },
  "2024": { icon: "🚀", title: "AI & Quantum", desc: "عصر الذكاء الاصطناعي والحوسبة الكمومية." },
  "2025": { icon: "🚀", title: "Next-Gen AI", desc: "الجيل القادم من الذكاء الاصطناعي." },
  "2026": { icon: "🌟", title: "Future of Computing", desc: "مستقبل الحوسبة مع الذكاء الاصطناعي والحوسبة الكمومية." }
};

// ========================================
// GLOBALS
// ========================================

let language = "en";
let soundOn = true;
let userEra = null;
let userYear = null;
const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

// ========================================
// GET ERA BY YEAR
// ========================================

function getEraByYear(year) {
  for (const era of computingEras) {
    if (year >= era.start && year <= era.end) {
      return era;
    }
  }
  return computingEras[0];
}

// ========================================
// UPDATE TIMELINE WITH ERA HIGHLIGHT
// ========================================

function updateTimelineWithEra(year) {
  const era = getEraByYear(year);
  userEra = era;
  userYear = year;
  
  // Update timeline nodes
  document.querySelectorAll('.time-node').forEach(node => {
    const nodeYear = parseInt(node.dataset.year);
    if (nodeYear >= era.start && nodeYear <= era.end) {
      node.classList.add('era-active');
      node.style.setProperty('--era-color', era.color);
    } else {
      node.classList.remove('era-active');
    }
  });
  
  // Update timeline progress with era color
  const progress = document.querySelector('.timeline-progress');
  if (progress) {
    progress.style.background = `linear-gradient(90deg, ${era.color}, var(--accent))`;
  }
  
  // Update era indicator
  const indicator = document.getElementById('userEraIndicator');
  const badge = document.getElementById('userEraBadge');
  if (indicator && badge) {
    indicator.style.display = 'block';
    const lang = language || 'en';
    const eraName = lang === 'ar' ? era.nameAr : era.name;
    badge.textContent = `📍 ${lang === 'ar' ? 'حقبتك' : 'Your Era'}: ${eraName}`;
    badge.style.borderColor = era.color;
    badge.style.color = era.color;
    badge.style.background = `rgba(${hexToRgb(era.color)}, 0.1)`;
  }
  
  // Highlight era segments
  document.querySelectorAll('.era-segment').forEach(segment => {
    const segmentEra = segment.dataset.era;
    if (segmentEra === era.name) {
      segment.style.opacity = '0.4';
      segment.style.height = '6px';
    } else {
      segment.style.opacity = '0.1';
      segment.style.height = '4px';
    }
  });
}

// ========================================
// HEX TO RGB HELPER
// ========================================

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '121, 247, 200';
}

// ========================================
// FIND CLOSEST MILESTONE
// ========================================

function findClosestMilestone(year) {
  const years = Object.keys(computingMilestones).map(Number).sort((a, b) => a - b);
  let closest = years[0];
  for (const y of years) {
    if (Math.abs(y - year) < Math.abs(closest - year)) {
      closest = y;
    }
  }
  return closest;
}

// ========================================
// BIRTH YEAR RESULT
// ========================================

function showBirthYearResult(year) {
  const resultDiv = document.getElementById('birthResult');
  const icon = document.getElementById('resultIcon');
  const title = document.getElementById('resultTitle');
  const desc = document.getElementById('resultDesc');
  const yearBadge = document.getElementById('resultYear');
  const eraName = document.getElementById('eraName');
  const eraYears = document.getElementById('eraYears');
  
  const closestYear = findClosestMilestone(year);
  const milestone = computingMilestones[closestYear] || computingMilestones["1940"];
  const era = getEraByYear(closestYear);
  
  const lang = language || 'en';
  const yearDisplay = closestYear;
  
  icon.textContent = milestone.icon || '🖥️';
  
  // Show era
  const eraLabel = document.querySelector('.era-label');
  if (lang === 'ar') {
    title.textContent = `في عام ${yearDisplay}، كان هذا هو إنجاز الحوسبة!`;
    desc.textContent = milestone.desc || 'اكتشف ما كان يحدث في عالم التقنية في عام ميلادك.';
    eraName.textContent = era.nameAr;
    eraLabel.textContent = `💫 حقبتك في الحوسبة`;
    eraYears.textContent = `${era.start} — ${era.end}`;
  } else {
    title.textContent = `In ${yearDisplay}, this was the computing milestone!`;
    desc.textContent = milestone.desc || 'Discover what was happening in computing the year you were born.';
    eraName.textContent = era.name;
    eraLabel.textContent = `💫 Your Computing Era`;
    eraYears.textContent = `${era.start} — ${era.end}`;
  }
  
  // Set era color
  eraName.style.color = era.color;
  eraName.style.borderColor = era.color;
  eraYears.style.color = era.color;
  
  yearBadge.textContent = yearDisplay;
  yearBadge.style.borderColor = era.color;
  yearBadge.style.color = era.color;
  
  resultDiv.classList.remove('hidden');
  resultDiv.style.animation = 'fadeInUp 0.6s ease';
  
  // Store era for timeline update
  userEra = era;
  userYear = yearDisplay;
  
  tinyBeep(840, 0.08);
}

// ========================================
// BIRTH YEAR HANDLER
// ========================================

function handleBirthYearSubmit() {
  const input = document.getElementById('birthYearInput');
  const year = parseInt(input.value);
  
  if (isNaN(year) || year < 1940 || year > 2026) {
    input.style.borderColor = '#ff6b6b';
    input.style.animation = 'shake 0.3s ease';
    setTimeout(() => {
      input.style.borderColor = '';
      input.style.animation = '';
    }, 500);
    tinyBeep(260, 0.1);
    return;
  }
  
  input.style.borderColor = '#79f7c8';
  showBirthYearResult(year);
}

// ========================================
// INIT BIRTH YEAR MODAL
// ========================================

function initBirthYearModal() {
  const overlay = document.getElementById('birthYearOverlay');
  const input = document.getElementById('birthYearInput');
  const btn = document.getElementById('birthYearBtn');
  const continueBtn = document.getElementById('continueBtn');
  
  overlay.classList.add('active');
  
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleBirthYearSubmit();
    }
  });
  
  btn.addEventListener('click', handleBirthYearSubmit);
  
  continueBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.getElementById('birthResult').classList.add('hidden');
    
    // Update timeline with user's era
    if (userYear) {
      updateTimelineWithEra(userYear);
      
      // Scroll to timeline after a delay
      setTimeout(() => {
        const timelineSection = document.getElementById('timeline');
        if (timelineSection) {
          timelineSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 800);
    }
    
    tinyBeep(620, 0.07);
  });
  
  setTimeout(() => input.focus(), 1000);
}

// ========================================
// ADD ERA INDICATORS TO TIMELINE
// ========================================

function addEraIndicators() {
  const timeline = document.getElementById('timelineContainer');
  if (!timeline) return;
  
  const nodes = document.querySelectorAll('.time-node');
  if (nodes.length === 0) return;
  
  const firstYear = parseInt(nodes[0].dataset.year);
  const lastYear = parseInt(nodes[nodes.length - 1].dataset.year);
  const totalYears = lastYear - firstYear;
  
  // Remove existing segments
  document.querySelectorAll('.era-segment').forEach(el => el.remove());
  
  // Create era background segments
  computingEras.forEach(era => {
    if (era.end < firstYear || era.start > lastYear) return;
    
    const startPercent = ((era.start - firstYear) / totalYears) * 100;
    const endPercent = ((era.end - firstYear) / totalYears) * 100;
    const width = endPercent - startPercent;
    
    if (width > 1) {
      const segment = document.createElement('div');
      segment.className = 'era-segment';
      segment.dataset.era = era.name;
      segment.style.cssText = `
        position: absolute;
        top: 50px;
        left: ${startPercent}%;
        width: ${width}%;
        height: 4px;
        background: ${era.color};
        opacity: 0.12;
        border-radius: 2px;
        transition: opacity 0.5s, height 0.3s;
        pointer-events: none;
        z-index: 0;
      `;
      
      // Add era label on hover
      const label = document.createElement('span');
      label.className = 'era-label-tip';
      label.textContent = language === 'ar' ? era.nameAr : era.name;
      label.style.cssText = `
        position: absolute;
        top: -18px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 8px;
        color: ${era.color};
        opacity: 0;
        transition: opacity 0.3s;
        white-space: nowrap;
        font-weight: 600;
        letter-spacing: 0.5px;
      `;
      segment.appendChild(label);
      
      segment.addEventListener('mouseenter', () => {
        label.style.opacity = '1';
        segment.style.opacity = '0.3';
        segment.style.height = '6px';
      });
      segment.addEventListener('mouseleave', () => {
        label.style.opacity = '0';
        segment.style.opacity = '0.12';
        segment.style.height = '4px';
      });
      
      timeline.appendChild(segment);
    }
  });
}

// ========================================
// SCROLL TO USER'S ERA
// ========================================

function scrollToUserEra() {
  if (!userYear) return;
  
  const nodes = document.querySelectorAll('.time-node');
  let targetNode = null;
  
  nodes.forEach(node => {
    const year = parseInt(node.dataset.year);
    if (year === userYear) {
      targetNode = node;
    }
  });
  
  if (targetNode) {
    setTimeout(() => {
      targetNode.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      targetNode.classList.add('pulse-highlight');
      setTimeout(() => {
        targetNode.classList.remove('pulse-highlight');
      }, 3000);
    }, 1000);
  }
}

// ========================================
// LOADING SCREEN
// ========================================

function simulateLoading() {
  const progress = document.getElementById("loadingProgress");
  const text = document.getElementById("loadingText");
  const percentSpan = document.getElementById("loadingPercent");
  let current = 0;
  
  const phrases = [
    "Loading experience...",
    "Transporting through time...",
    "Retrieving vintage tech...",
    "Calibrating Windows 98...",
    "Initializing 3D Engine...",
    "Almost ready..."
  ];
  
  const interval = setInterval(() => {
    current += Math.random() * 8 + 2;
    if (current > 100) current = 100;
    progress.style.width = current + "%";
    if (percentSpan) {
      percentSpan.textContent = Math.round(current) + "%";
    }
    
    const phraseIndex = Math.floor(current / 20);
    if (phraseIndex < phrases.length) {
      text.textContent = phrases[phraseIndex];
    }
    
    if (current >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hidden");
        initBirthYearModal();
        document.querySelectorAll('.reveal').forEach((el, i) => {
          setTimeout(() => el.classList.add('visible'), i * 100 + 300);
        });
        setTimeout(init3D, 500);
        setTimeout(addEraIndicators, 600);
      }, 600);
    }
  }, 200);
}

window.addEventListener('load', () => {
  setTimeout(simulateLoading, 500);
});

// ========================================
// SOUND EFFECTS
// ========================================

function tinyBeep(freq = 520, duration = 0.06) {
  if (!soundOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    gain.gain.value = 0.035;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

// ========================================
// ARTIFACTS DATABASE - 13 UNIQUE ITEMS
// ========================================

const artifacts = {
  pentium: {
    icon: "🧠", era: "1997", type: "PROCESSOR",
    ar: { title: "Intel Pentium II", desc: "معالج أيقوني من إنتل بتصميم Cartridge مميز (Slot 1).", facts: [["الشركة", "Intel"], ["السلسلة", "Pentium II"], ["الإطلاق", "1997"], ["التصميم", "Slot 1"]] },
    en: { title: "Intel Pentium II", desc: "An iconic cartridge-style processor from Intel with the distinctive Slot 1 design.", facts: [["Maker", "Intel"], ["Family", "Pentium II"], ["Launch", "1997"], ["Design", "Slot 1"]] }
  },
  floppy: {
    icon: "💽", era: "1990s", type: "STORAGE",
    ar: { title: "قرص مرن 3.5 بوصة", desc: "أشهر رموز حفظ الملفات بسعة 1.44 ميجابايت.", facts: [["السعة", "1.44 MB"], ["المقاس", "3.5 بوصة"], ["التقنية", "مغناطيسية"]] },
    en: { title: "3.5-inch Floppy Disk", desc: "The most recognizable file-storage symbol with 1.44 MB capacity.", facts: [["Capacity", "1.44 MB"], ["Size", "3.5 inch"], ["Technology", "Magnetic"]] }
  },
  zoomdisk: {
    icon: "💾", era: "1980s", type: "STORAGE",
    ar: { title: "قرص مرن 5.25 بوصة", desc: "قرص مرن كبير من حقبة الثمانينيات.", facts: [["النوع", "5.25″ Floppy"], ["السعة", "360 KB - 1.2 MB"], ["الفترة", "الثمانينيات"]] },
    en: { title: "5.25-inch Floppy Disk", desc: "A large floppy disk from the 1980s era.", facts: [["Type", "5.25″ Floppy"], ["Capacity", "360 KB - 1.2 MB"], ["Era", "1980s"]] }
  },
  calendar: {
    icon: "🗓️", era: "VINTAGE", type: "DESK OBJECT",
    ar: { title: "تقويم مكتبي دائم", desc: "قطعة مكتبية ميكانيكية لضبط التاريخ يدويًا.", facts: [["النوع", "تقويم دائم"], ["التحكم", "يدوي"], ["الخامة", "معدن/بلاستيك"]] },
    en: { title: "Perpetual Desk Calendar", desc: "A mechanical desk object for manually setting the date.", facts: [["Type", "Perpetual calendar"], ["Control", "Manual"], ["Material", "Metal/Plastic"]] }
  },
  msdos: {
    icon: "⌨️", era: "1981-1994", type: "OPERATING SYSTEM",
    ar: { title: "MS-DOS 6.22", desc: "نظام تشغيل Microsoft الأساسي قبل Windows.", facts: [["الشركة", "Microsoft"], ["الإصدار", "6.22"], ["الفترة", "1981-1994"], ["الواجهة", "نصية"]] },
    en: { title: "MS-DOS 6.22", desc: "Microsoft's foundational operating system before Windows.", facts: [["Maker", "Microsoft"], ["Version", "6.22"], ["Era", "1981-1994"], ["Interface", "Command-line"]] }
  },
  ps2: {
    icon: "🖥️", era: "1987", type: "COMPUTER SYSTEM",
    ar: { title: "IBM PS/2", desc: "سلسلة أجهزة من IBM قدمت معايير جديدة.", facts: [["الشركة", "IBM"], ["الإصدار", "PS/2"], ["السنة", "1987"], ["المعايير", "PS/2 port, MCA"]] },
    en: { title: "IBM PS/2", desc: "A series of computers from IBM that introduced new standards.", facts: [["Maker", "IBM"], ["Model", "PS/2"], ["Year", "1987"], ["Standards", "PS/2 port, MCA"]] }
  },
  toshiba: {
    icon: "💻", era: "1990s", type: "LAPTOP",
    ar: { title: "Toshiba Satellite", desc: "حاسوب محمول من بدايات انتشار أجهزة اللابتوب.", facts: [["العلامة", "Toshiba"], ["السلسلة", "Satellite"], ["الفئة", "Laptop"], ["الفترة", "التسعينيات"]] },
    en: { title: "Toshiba Satellite", desc: "An early laptop from the beginning of the laptop era.", facts: [["Brand", "Toshiba"], ["Series", "Satellite"], ["Category", "Laptop"], ["Era", "1990s"]] }
  },
  windows98: {
    icon: "🪟", era: "1998", type: "OPERATING SYSTEM",
    ar: { title: "Windows 98", desc: "نظام تشغيل شهير ربط الحاسب المنزلي بالإنترنت.", facts: [["الشركة", "Microsoft"], ["الإصدار", "Windows 98"], ["السنة", "1998"], ["الوسيط", "CD-ROM"]] },
    en: { title: "Windows 98", desc: "A popular OS that connected home computing to the internet.", facts: [["Company", "Microsoft"], ["Edition", "Windows 98"], ["Year", "1998"], ["Medium", "CD-ROM"]] }
  },
  office97: {
    icon: "📀", era: "1997", type: "OFFICE SOFTWARE",
    ar: { title: "Office 97", desc: "إصدار تاريخي أصبح معيارًا للعمل المكتبي.", facts: [["الشركة", "Microsoft"], ["الإصدار", "Office 97"], ["السنة", "1997"], ["التطبيقات", "Word, Excel, PowerPoint"]] },
    en: { title: "Office 97", desc: "A historic release that became the workplace standard.", facts: [["Company", "Microsoft"], ["Edition", "Office 97"], ["Year", "1997"], ["Apps", "Word, Excel, PowerPoint"]] }
  },
  access: {
    icon: "💽", era: "1995", type: "ACCESS KIT",
    ar: { title: "Windows 95 Access Kit", desc: "قرص إعداد 3.5 بوصة لتثبيت مكونات Windows 95.", facts: [["النظام", "Windows 95"], ["النوع", "Access Kit"], ["الوسيط", "3.5″ Floppy"], ["الفترة", "1995"]] },
    en: { title: "Windows 95 Access Kit", desc: "A 3.5-inch setup disk for Windows 95 components.", facts: [["System", "Windows 95"], ["Type", "Access Kit"], ["Medium", "3.5″ Floppy"], ["Era", "1995"]] }
  },
  winnt: {
    icon: "🖥️", era: "1996", type: "OPERATING SYSTEM",
    ar: { title: "Windows NT 4.0", desc: "نسخة مستقرة من Windows للمؤسسات.", facts: [["الشركة", "Microsoft"], ["الإصدار", "NT 4.0"], ["السنة", "1996"], ["الوسيط", "CD-ROM"]] },
    en: { title: "Windows NT 4.0", desc: "A stable Windows version for enterprises.", facts: [["Company", "Microsoft"], ["Edition", "NT 4.0"], ["Year", "1996"], ["Medium", "CD-ROM"]] }
  },
  win2000: {
    icon: "🪟", era: "2000", type: "OPERATING SYSTEM",
    ar: { title: "Windows 2000", desc: "نسخة مهنية مستقرة للمكاتب والشركات.", facts: [["الشركة", "Microsoft"], ["الإصدار", "2000 Professional"], ["السنة", "2000"], ["الوسيط", "CD-ROM"]] },
    en: { title: "Windows 2000", desc: "A stable professional version for offices and enterprises.", facts: [["Company", "Microsoft"], ["Edition", "2000 Professional"], ["Year", "2000"], ["Medium", "CD-ROM"]] }
  },
  msfloppy: {
    icon: "💾", era: "1990s", type: "STORAGE",
    ar: { title: "قرص تثبيت Microsoft", desc: "قرص مرن 3.5 بوصة لتثبيت مكونات Microsoft.", facts: [["النوع", "Installation Disk"], ["الحجم", "3.5 بوصة"], ["الفترة", "التسعينيات"]] },
    en: { title: "Microsoft Installation Floppy", desc: "A 3.5-inch floppy disk for installing Microsoft components.", facts: [["Type", "Installation Disk"], ["Size", "3.5 inch"], ["Era", "1990s"]] }
  }
};

// ========================================
// ARTIFACT MODAL
// ========================================

const itemModal = document.getElementById("itemModal");
const modalClose = itemModal.querySelector(".modal-close");

function openArtifact(id) {
  const item = artifacts[id];
  if (!item) return;
  const copy = item[language];
  
  document.getElementById("modalIcon").textContent = item.icon;
  document.getElementById("modalEra").textContent = item.era;
  document.getElementById("modalType").textContent = item.type;
  document.getElementById("modalTitle").textContent = copy.title;
  document.getElementById("modalDescription").textContent = copy.desc;
  document.getElementById("modalFacts").innerHTML = copy.facts
    .map(([k, v]) => `<div class="fact"><small>${k}</small><strong>${v}</strong></div>`)
    .join("");
  
  itemModal.showModal();
  tinyBeep(640, 0.08);
}

document.querySelectorAll(".hotspot").forEach((b) =>
  b.addEventListener("click", () => openArtifact(b.dataset.item))
);

modalClose.addEventListener("click", () => itemModal.close());
itemModal.addEventListener("click", (e) => {
  if (e.target === itemModal) itemModal.close();
});

// ========================================
// LANGUAGE TOGGLE
// ========================================

document.getElementById("langToggle").addEventListener("click", () => {
  language = language === "ar" ? "en" : "ar";
  
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.className = language === "ar" ? "ar" : "en";
  
  document.getElementById("langToggle").textContent = language === "ar" ? "EN" : "AR";
  
  document.querySelectorAll("[data-ar]").forEach((el) => {
    const value = el.dataset[language];
    if (value && value.includes("<br>")) {
      el.innerHTML = value;
    } else if (value) {
      el.textContent = value;
    }
  });
  
  const active = document.querySelector(".time-node.active");
  if (active) updateTimeline(active);
  
  // Update era label if exists
  if (userEra) {
    const badge = document.getElementById('userEraBadge');
    const eraName = language === 'ar' ? userEra.nameAr : userEra.name;
    if (badge) {
      badge.textContent = `📍 ${language === 'ar' ? 'حقبتك' : 'Your Era'}: ${eraName}`;
    }
  }
  
  tinyBeep(760, 0.05);
});

// ========================================
// SOUND TOGGLE
// ========================================

document.getElementById("soundToggle").addEventListener("click", () => {
  soundOn = !soundOn;
  document.getElementById("soundToggle").textContent = soundOn ? "🔊" : "🔇";
  if (soundOn) tinyBeep(700, 0.08);
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ========================================
// CURSOR GLOW
// ========================================

document.addEventListener("pointermove", (e) => {
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});

// ========================================
// TILT CARD EFFECT
// ========================================

const tilt = document.querySelector(".tilt-card");
if (tilt) {
  tilt.addEventListener("pointermove", (e) => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  });
  tilt.addEventListener("pointerleave", () => (tilt.style.transform = ""));
}

// ========================================
// TIMELINE
// ========================================

function updateTimeline(btn) {
  document.querySelectorAll(".time-node").forEach((n) => n.classList.remove("active"));
  btn.classList.add("active");
  
  document.getElementById("timelineYear").textContent = btn.dataset.year;
  document.getElementById("timelineTitle").textContent = btn.dataset[language === "ar" ? "titleAr" : "titleEn"];
  document.getElementById("timelineDesc").textContent = btn.dataset[language === "ar" ? "descAr" : "descEn"];
  
  const nodes = document.querySelectorAll(".time-node");
  const idx = Array.from(nodes).indexOf(btn);
  const percent = (idx / (nodes.length - 1)) * 100;
  document.querySelector(".timeline-progress").style.width = percent + "%";
  
  tinyBeep(480 + idx * 60, 0.05);
}

document.querySelectorAll(".time-node").forEach((n) =>
  n.addEventListener("click", () => updateTimeline(n))
);

// ========================================
// VIEWER MODAL
// ========================================

const viewer = document.getElementById("viewerModal");
const viewerImg = document.getElementById("viewerImage");
const stage = document.getElementById("viewerStage");

let scale = 1;
let posX = 0;
let posY = 0;
let dragging = false;
let startX = 0;
let startY = 0;
let lastTouchDistance = 0;
let touchStartX = 0;
let touchStartY = 0;
let isDraggingTouch = false;

function applyTransform() {
  viewerImg.style.transform = `translate(${posX}px, ${posY}px) scale(${scale})`;
  document.getElementById("zoomReset").textContent = Math.round(scale * 100) + "%";
}

function resetViewer() {
  scale = 1;
  posX = 0;
  posY = 0;
  applyTransform();
}

function getTouchDistance(touches) {
  return Math.hypot(
    touches[0].clientX - touches[1].clientX,
    touches[0].clientY - touches[1].clientY
  );
}

document.querySelectorAll(".explore-btn").forEach((b) =>
  b.addEventListener("click", () => {
    viewerImg.src = b.dataset.image;
    document.getElementById("viewerTitle").textContent = b.dataset.title;
    resetViewer();
    viewer.showModal();
    tinyBeep(620, 0.07);
  })
);

document.querySelector(".viewer-close").addEventListener("click", () => viewer.close());

document.getElementById("zoomIn").addEventListener("click", () => {
  scale = Math.min(4, scale + 0.25);
  applyTransform();
});

document.getElementById("zoomOut").addEventListener("click", () => {
  scale = Math.max(0.5, scale - 0.25);
  applyTransform();
});

document.getElementById("zoomReset").addEventListener("click", resetViewer);

stage.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    scale = Math.max(0.5, Math.min(4, scale + (e.deltaY < 0 ? 0.15 : -0.15)));
    applyTransform();
  },
  { passive: false }
);

stage.addEventListener("pointerdown", (e) => {
  dragging = true;
  startX = e.clientX - posX;
  startY = e.clientY - posY;
  stage.setPointerCapture(e.pointerId);
});

stage.addEventListener("pointermove", (e) => {
  if (!dragging) return;
  posX = e.clientX - startX;
  posY = e.clientY - startY;
  applyTransform();
});

stage.addEventListener("pointerup", () => (dragging = false));

stage.addEventListener(
  "touchstart",
  (e) => {
    if (e.touches.length === 1) {
      isDraggingTouch = true;
      touchStartX = e.touches[0].clientX - posX;
      touchStartY = e.touches[0].clientY - posY;
    } else if (e.touches.length === 2) {
      isDraggingTouch = false;
      lastTouchDistance = getTouchDistance(e.touches);
    }
  },
  { passive: true }
);

stage.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    if (e.touches.length === 1 && isDraggingTouch) {
      posX = e.touches[0].clientX - touchStartX;
      posY = e.touches[0].clientY - touchStartY;
      applyTransform();
    } else if (e.touches.length === 2) {
      const distance = getTouchDistance(e.touches);
      const delta = (distance - lastTouchDistance) * 0.01;
      scale = Math.max(0.5, Math.min(4, scale + delta));
      lastTouchDistance = distance;
      applyTransform();
    }
  },
  { passive: false }
);

stage.addEventListener(
  "touchend",
  () => {
    isDraggingTouch = false;
    lastTouchDistance = 0;
  },
  { passive: true }
);

let pinchDist = 0;
stage.addEventListener(
  "touchmove",
  (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      if (pinchDist) {
        scale = Math.max(0.5, Math.min(4, scale + (d - pinchDist) * 0.006));
      }
      pinchDist = d;
      applyTransform();
    }
  },
  { passive: false }
);

stage.addEventListener("touchend", () => (pinchDist = 0));

// ========================================
// INTRO MODAL
// ========================================

const intro = document.getElementById("introModal");
document.getElementById("introBtn").addEventListener("click", () => {
  intro.showModal();
  tinyBeep(420, 0.1);
});
intro.querySelector(".modal-close").addEventListener("click", () => intro.close());

// ========================================
// STORY BUTTONS
// ========================================

document.querySelectorAll(".story-btn").forEach((btn) =>
  btn.addEventListener("click", () => {
    const target = btn.dataset.story === "software" ? "pentium" : "toshiba";
    openArtifact(target);
  })
);

// ========================================
// QUIZ
// ========================================

document.querySelectorAll(".quiz-options button").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.querySelectorAll(".quiz-options button").forEach((b) =>
      b.classList.remove("correct", "wrong")
    );
    
    const correct = btn.dataset.correct === "true";
    btn.classList.add(correct ? "correct" : "wrong");
    
    document.querySelector(".quiz-result").textContent = correct
      ? language === "ar"
        ? "إجابة صحيحة! السعة الشائعة كانت 1.44 MB."
        : "Correct! The common capacity was 1.44 MB."
      : language === "ar"
      ? "ليست الإجابة الصحيحة، جرّب مرة أخرى."
      : "Not quite. Try again.";
    
    tinyBeep(correct ? 840 : 260, 0.1);
  })
);

// ========================================
// 3D ENGINE (Three.js)
// ========================================

let scene, camera, renderer, controls;
let currentModel = null;
let autoRotate = true;
let particles;

function init3D() {
  const container = document.getElementById('threeContainer');
  const width = container.clientWidth || 400;
  const height = container.clientHeight || 400;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x080b0f);

  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(5, 3, 8);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 2.0;
  controls.minDistance = 2;
  controls.maxDistance = 20;
  controls.target.set(0, 0, 0);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1);
  mainLight.position.set(5, 10, 7);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const fillLight = new THREE.DirectionalLight(0x4488ff, 0.3);
  fillLight.position.set(-5, 0, 5);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x79f7c8, 0.2);
  rimLight.position.set(0, -5, -5);
  scene.add(rimLight);

  const pointLight = new THREE.PointLight(0x79f7c8, 0.3, 10);
  pointLight.position.set(0, 3, 0);
  scene.add(pointLight);

  // Grid
  const gridHelper = new THREE.GridHelper(10, 20, 0x79f7c8, 0x1a2a33);
  gridHelper.position.y = -0.5;
  scene.add(gridHelper);

  // Background particles
  createParticles();

  // Build initial model
  buildPentiumModel();

  animate();
  window.addEventListener('resize', onResize);
}

function createParticles() {
  const geometry = new THREE.BufferGeometry();
  const count = 800;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 40;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 40 - 10;
    
    const color = new THREE.Color().setHSL(0.5 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
    colors[i3] = color.r;
    colors[i3 + 1] = color.g;
    colors[i3 + 2] = color.b;
    sizes[i] = 0.02 + Math.random() * 0.06;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  particles = new THREE.Points(geometry, material);
  particles.position.y = 2;
  scene.add(particles);
}

function buildPentiumModel() {
  clearModel();
  const group = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(2.2, 0.8, 1.6);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    roughness: 0.7,
    metalness: 0.3,
  });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  group.add(body);

  const spreaderGeo = new THREE.BoxGeometry(1.6, 0.1, 1.2);
  const spreaderMat = new THREE.MeshStandardMaterial({
    color: 0x888888,
    roughness: 0.4,
    metalness: 0.8,
  });
  const spreader = new THREE.Mesh(spreaderGeo, spreaderMat);
  spreader.position.y = 0.45;
  spreader.castShadow = true;
  group.add(spreader);

  for (let i = -0.8; i <= 0.8; i += 0.2) {
    const pinGeo = new THREE.BoxGeometry(0.04, 0.2, 0.04);
    const pinMat = new THREE.MeshStandardMaterial({
      color: 0xdd9922,
      metalness: 0.9,
      roughness: 0.2,
    });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.set(i, -0.5, 0);
    group.add(pin);
  }

  const labelGeo = new THREE.BoxGeometry(1.0, 0.15, 0.01);
  const labelMat = new THREE.MeshStandardMaterial({
    color: 0x0066cc,
    emissive: 0x004488,
    emissiveIntensity: 0.2,
  });
  const label = new THREE.Mesh(labelGeo, labelMat);
  label.position.set(0, 0.3, 0.81);
  group.add(label);

  const textGeo = new THREE.BoxGeometry(0.6, 0.08, 0.01);
  const textMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0x79f7c8,
    emissiveIntensity: 0.1,
  });
  const text = new THREE.Mesh(textGeo, textMat);
  text.position.set(0, 0.2, 0.81);
  group.add(text);

  const ringGeo = new THREE.TorusGeometry(1.0, 0.02, 16, 32);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x79f7c8,
    emissive: 0x79f7c8,
    emissiveIntensity: 0.2,
    transparent: true,
    opacity: 0.6,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -0.3;
  group.add(ring);

  group.scale.set(0.8, 0.8, 0.8);
  scene.add(group);
  currentModel = group;
}

function buildFloppyModel() {
  clearModel();
  const group = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(2.4, 2.4, 0.2);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a2e,
    roughness: 0.8,
  });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  group.add(body);

  const shutterGeo = new THREE.BoxGeometry(0.8, 0.2, 0.25);
  const shutterMat = new THREE.MeshStandardMaterial({
    color: 0x888899,
    metalness: 0.9,
    roughness: 0.2,
  });
  const shutter = new THREE.Mesh(shutterGeo, shutterMat);
  shutter.position.set(0, 0.6, 0.12);
  group.add(shutter);

  const labelGeo = new THREE.BoxGeometry(1.6, 1.0, 0.01);
  const labelMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 0.9,
  });
  const label = new THREE.Mesh(labelGeo, labelMat);
  label.position.set(0, -0.2, 0.11);
  group.add(label);

  const hdGeo = new THREE.BoxGeometry(0.3, 0.3, 0.01);
  const hdMat = new THREE.MeshStandardMaterial({
    color: 0x2222cc,
    emissive: 0x2244aa,
    emissiveIntensity: 0.2,
  });
  const hd = new THREE.Mesh(hdGeo, hdMat);
  hd.position.set(0.7, 0.7, 0.11);
  group.add(hd);

  const tabGeo = new THREE.BoxGeometry(0.2, 0.1, 0.05);
  const tabMat = new THREE.MeshStandardMaterial({
    color: 0x444444,
  });
  const tab = new THREE.Mesh(tabGeo, tabMat);
  tab.position.set(-1.0, -0.8, 0.1);
  group.add(tab);

  group.scale.set(0.7, 0.7, 0.7);
  scene.add(group);
  currentModel = group;
}

function buildComputerModel() {
  clearModel();
  const group = new THREE.Group();

  const monitorBase = new THREE.BoxGeometry(2.0, 1.8, 0.4);
  const monitorMat = new THREE.MeshStandardMaterial({
    color: 0x222233,
    roughness: 0.6,
  });
  const monitor = new THREE.Mesh(monitorBase, monitorMat);
  monitor.position.set(0, 0.6, 0);
  monitor.castShadow = true;
  group.add(monitor);

  const screenGeo = new THREE.BoxGeometry(1.6, 1.2, 0.05);
  const screenMat = new THREE.MeshStandardMaterial({
    color: 0x00ff88,
    emissive: 0x00ff88,
    emissiveIntensity: 0.1,
  });
  const screen = new THREE.Mesh(screenGeo, screenMat);
  screen.position.set(0, 0.6, 0.23);
  group.add(screen);

  const kbGeo = new THREE.BoxGeometry(2.2, 0.6, 0.8);
  const kbMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a2a,
    roughness: 0.7,
  });
  const kb = new THREE.Mesh(kbGeo, kbMat);
  kb.position.set(0, -0.4, 0.6);
  kb.castShadow = true;
  group.add(kb);

  for (let i = -0.8; i <= 0.8; i += 0.15) {
    for (let j = -0.2; j <= 0.2; j += 0.15) {
      const keyGeo = new THREE.BoxGeometry(0.08, 0.04, 0.08);
      const keyMat = new THREE.MeshStandardMaterial({
        color: 0x333344,
        roughness: 0.8,
      });
      const key = new THREE.Mesh(keyGeo, keyMat);
      key.position.set(i, -0.3, 0.6 + j);
      group.add(key);
    }
  }

  group.scale.set(0.6, 0.6, 0.6);
  scene.add(group);
  currentModel = group;
}

function buildWindowsModel() {
  clearModel();
  const group = new THREE.Group();

  const caseGeo = new THREE.BoxGeometry(2.2, 2.2, 0.2);
  const caseMat = new THREE.MeshStandardMaterial({
    color: 0x1a2a3a,
    roughness: 0.7,
    transparent: true,
    opacity: 0.8,
  });
  const cdCase = new THREE.Mesh(caseGeo, caseMat);
  cdCase.castShadow = true;
  group.add(cdCase);

  const cdGeo = new THREE.CylinderGeometry(0.9, 0.9, 0.02, 32);
  const cdMat = new THREE.MeshStandardMaterial({
    color: 0x88aacc,
    metalness: 0.8,
    roughness: 0.2,
  });
  const cd = new THREE.Mesh(cdGeo, cdMat);
  cd.rotation.x = Math.PI / 2;
  cd.position.z = 0.11;
  group.add(cd);

  const ringGeo = new THREE.RingGeometry(0.3, 0.35, 32);
  const ringMat = new THREE.MeshStandardMaterial({
    color: 0x88aacc,
    side: THREE.DoubleSide,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.z = 0.12;
  group.add(ring);

  const logoGeo = new THREE.BoxGeometry(0.6, 0.6, 0.01);
  const logoMat = new THREE.MeshStandardMaterial({
    color: 0x00aaff,
    emissive: 0x0066cc,
    emissiveIntensity: 0.1,
  });
  const logo = new THREE.Mesh(logoGeo, logoMat);
  logo.position.set(0, 0, 0.12);
  group.add(logo);

  group.scale.set(0.7, 0.7, 0.7);
  scene.add(group);
  currentModel = group;
}

function clearModel() {
  if (currentModel) {
    scene.remove(currentModel);
    currentModel = null;
  }
}

function toggleEnhancedView() {
  if (!scene) return;
  const color = scene.background;
  const isEnhanced = color.getHex() === 0x05080c;
  
  if (isEnhanced) {
    scene.background = new THREE.Color(0x080b0f);
    document.body.style.backgroundColor = '';
    if (particles) {
      particles.material.size = 0.08;
    }
  } else {
    scene.background = new THREE.Color(0x0a0a14);
    document.body.style.backgroundColor = '#0a0a14';
    if (particles) {
      particles.material.size = 0.15;
    }
  }
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function onResize() {
  const container = document.getElementById('threeContainer');
  const width = container.clientWidth || 400;
  const height = container.clientHeight || 400;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function switchModel(modelName) {
  switch (modelName) {
    case 'pentium3d':
      buildPentiumModel();
      document.getElementById('modelName').textContent = 'Intel Pentium II';
      document.getElementById('modelYear').textContent = '1997';
      break;
    case 'floppy3d':
      buildFloppyModel();
      document.getElementById('modelName').textContent = '3.5" Floppy Disk';
      document.getElementById('modelYear').textContent = '1990s';
      break;
    case 'computer3d':
      buildComputerModel();
      document.getElementById('modelName').textContent = 'Vintage Computer';
      document.getElementById('modelYear').textContent = '1980s';
      break;
    case 'windows3d':
      buildWindowsModel();
      document.getElementById('modelName').textContent = 'Windows 98 CD';
      document.getElementById('modelYear').textContent = '1998';
      break;
  }
}

// ========================================
// 3D CONTROLS
// ========================================

document.querySelectorAll('.model-dot').forEach(dot => {
  dot.addEventListener('click', function() {
    document.querySelectorAll('.model-dot').forEach(d => d.classList.remove('active'));
    this.classList.add('active');
    switchModel(this.dataset.model);
    tinyBeep(560, 0.06);
  });
});

document.getElementById('resetCamera').addEventListener('click', () => {
  camera.position.set(5, 3, 8);
  controls.target.set(0, 0, 0);
  controls.update();
  tinyBeep(440, 0.05);
});

document.getElementById('autoRotateBtn').addEventListener('click', function() {
  controls.autoRotate = !controls.autoRotate;
  this.textContent = controls.autoRotate ? '🔄' : '⏸';
  tinyBeep(520, 0.05);
});

document.getElementById('fullscreenBtn').addEventListener('click', () => {
  const container = document.getElementById('threeContainer');
  if (container.requestFullscreen) {
    container.requestFullscreen();
  }
  tinyBeep(600, 0.05);
});

document.getElementById('enhancedViewBtn').addEventListener('click', () => {
  toggleEnhancedView();
  tinyBeep(680, 0.05);
});

// ========================================
// KEYBOARD SHORTCUTS
// ========================================

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    [itemModal, viewer, intro].forEach((d) => {
      if (d.open) d.close();
    });
  }
  if (e.key === 'r' || e.key === 'R') {
    document.getElementById('resetCamera').click();
  }
  if (e.key === ' ') {
    e.preventDefault();
    document.getElementById('autoRotateBtn').click();
  }
});

// ========================================
// IMAGE ERROR HANDLING
// ========================================

document.querySelectorAll(".exhibit-image img").forEach((img) => {
  img.addEventListener("error", function () {
    this.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%2310151c' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%2379f7c8' font-size='18' font-family='sans-serif' dy='.3em'%3EImage Unavailable%3C/text%3E%3C/svg%3E";
    this.alt = "Image unavailable";
  });
});

// ========================================
// ✨ NEW FEATURES: CONTINUE TO TOP, SOUNDS, WIN98 SIMULATOR// ========================================

// ========================================
// 1. CONTINUE TO MUSEUM - SCROLL TO TOP
// ========================================

document.getElementById('continueBtn').addEventListener('click', function(e) {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
});

// ========================================
// 2. SOUNDS SECTION
// ========================================

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Dial-up Internet Sound
function playDialupSound() {
  const ctx = getAudioContext();
  const duration = 3.5;
  const startTime = ctx.currentTime;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(200, startTime);
  osc.frequency.linearRampToValueAtTime(800, startTime + 0.5);
  osc.frequency.linearRampToValueAtTime(400, startTime + 1.0);
  osc.frequency.linearRampToValueAtTime(1200, startTime + 1.5);
  osc.frequency.linearRampToValueAtTime(600, startTime + 2.0);
  osc.frequency.linearRampToValueAtTime(900, startTime + 2.5);
  osc.frequency.linearRampToValueAtTime(300, startTime + 3.0);
  osc.frequency.linearRampToValueAtTime(0, startTime + duration);
  
  gain.gain.setValueAtTime(0.3, startTime);
  gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(startTime);
  osc.stop(startTime + duration);
}

// Windows XP Startup Sound
function playWinXPSound() {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime;
  
  const notes = [523, 659, 784, 1047];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.2, startTime + i * 0.15);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + i * 0.15 + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime + i * 0.15);
    osc.stop(startTime + i * 0.15 + 0.3);
  });
}

// Windows 98 Shutdown Sound
function playWin98Shutdown() {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime;
  
  const notes = [440, 349, 294, 247];
  notes.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.15, startTime + i * 0.2);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + i * 0.2 + 0.4);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime + i * 0.2);
    osc.stop(startTime + i * 0.2 + 0.4);
  });
}

// Windows Error Sound
function playWindowsError() {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime;
  
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(300, startTime);
  osc.frequency.setValueAtTime(200, startTime + 0.15);
  osc.frequency.setValueAtTime(150, startTime + 0.3);
  
  gain.gain.setValueAtTime(0.2, startTime);
  gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.5);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + 0.5);
}

// Sound mapping
const soundMap = {
  'dialup': playDialupSound,
  'winxp': playWinXPSound,
  'win98shutdown': playWin98Shutdown,
  'winsound': playWindowsError
};

// Sound buttons
document.querySelectorAll('.play-sound').forEach(btn => {
  btn.addEventListener('click', function() {
    const sound = this.dataset.sound;
    const playFn = soundMap[sound];
    if (playFn) {
      this.classList.add('playing');
      this.innerHTML = '<span class="play-icon">⏹</span> Playing...';
      
      playFn();
      
      setTimeout(() => {
        this.classList.remove('playing');
        this.innerHTML = `<span class="play-icon">▶</span> Play`;
      }, 3500);
    }
  });
});

// ========================================
// 3. WINDOWS 98 SIMULATOR
// ========================================

const win98Modal = document.getElementById('win98Modal');
const win98Close = document.getElementById('win98Close');
const win98Desktop = document.getElementById('win98Desktop');
const win98StartBtn = document.getElementById('win98StartBtn');
const win98StartMenu = document.getElementById('win98StartMenu');
const win98Folder = document.getElementById('win98Folder');
const win98FolderTitle = document.getElementById('win98FolderTitle');
const win98FolderBody = document.getElementById('win98FolderBody');
const win98FolderClose = document.getElementById('win98FolderClose');
const win98Clock = document.getElementById('win98Clock');
const win98Shutdown = document.getElementById('win98Shutdown');

let win98Open = false;

// Update clock
function updateWin98Clock() {
  if (!win98Clock) return;
  const now = new Date();
  win98Clock.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
updateWin98Clock();
setInterval(updateWin98Clock, 30000);

// Open Windows 98
function openWin98() {
  if (!win98Modal) return;
  win98Modal.showModal();
  win98Open = true;
  win98StartMenu.style.display = 'none';
  win98Folder.style.display = 'none';
  playWinXPSound();
}

// Close Windows 98
function closeWin98() {
  if (!win98Modal) return;
  win98Modal.close();
  win98Open = false;
  playWin98Shutdown();
}

// Open folder
function openFolder(folder) {
  const titles = {
    'mycomputer': 'My Computer',
    'documents': 'My Documents',
    'recycle': 'Recycle Bin',
    'internet': 'Internet Explorer',
    'games': 'Games'
  };
  
  const contents = {
    'mycomputer': [
      '📁 Local Disk (C:)',
      '📁 Local Disk (D:)',
      '📁 3.5 Floppy (A:)',
      '📁 Control Panel'
    ],
    'documents': [
      '📄 My Resume.doc',
      '📄 Project Plan.xls',
      '📄 Letter to Mom.txt',
      '📁 Downloads'
    ],
    'recycle': [
      '🗑️ Old File.txt',
      '🗑️ Deleted Photo.jpg',
      '🗑️ Temporary Document.doc'
    ],
    'internet': [
      '🌐 Internet Explorer',
      '📧 Outlook Express',
      '⭐ Favorites'
    ],
    'games': [
      '🃏 Solitaire',
      '🧩 Minesweeper',
      '🖱️ Pinball'
    ]
  };
  
  if (!win98FolderTitle || !win98FolderBody) return;
  
  win98FolderTitle.textContent = titles[folder] || 'Folder';
  win98FolderBody.innerHTML = contents[folder]?.map(item => 
    `<div class="win98-folder-item">${item}</div>`
  ).join('') || '<div class="win98-folder-item">📁 Empty folder</div>';
  
  win98Folder.style.display = 'flex';
  win98StartMenu.style.display = 'none';
}

// Close folder
function closeFolder() {
  if (!win98Folder) return;
  win98Folder.style.display = 'none';
}

// Event Listeners for Windows 98

// Launch from laptop click
function launchWin98() {
  if (!win98Open) {
    openWin98();
    setTimeout(playDialupSound, 300);
  } else {
    win98Modal.showModal();
  }
}

// Click on laptop image to launch Win98
document.querySelectorAll('#laptopTrigger, #laptopClickArea').forEach(el => {
  if (!el) return;
  el.addEventListener('click', function(e) {
    if (e.target.closest('.hotspot') || e.target.closest('.explore-btn')) return;
    launchWin98();
  });
});

// Launch button
const launchBtn = document.getElementById('launchWin98Btn');
if (launchBtn) {
  launchBtn.addEventListener('click', launchWin98);
}

// Close button
if (win98Close) {
  win98Close.addEventListener('click', closeWin98);
}

// Start button
if (win98StartBtn && win98StartMenu) {
  win98StartBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (win98StartMenu.style.display === 'block') {
      win98StartMenu.style.display = 'none';
    } else {
      win98StartMenu.style.display = 'block';
    }
  });
}

// Start menu items
document.querySelectorAll('.win98-start-item[data-folder]').forEach(item => {
  item.addEventListener('click', function() {
    const folder = this.dataset.folder;
    openFolder(folder);
  });
});

// Folder icons
document.querySelectorAll('.win98-icon-item[data-folder]').forEach(item => {
  item.addEventListener('click', function() {
    const folder = this.dataset.folder;
    openFolder(folder);
  });
});

// Folder close
if (win98FolderClose) {
  win98FolderClose.addEventListener('click', closeFolder);
}

// Shutdown
if (win98Shutdown) {
  win98Shutdown.addEventListener('click', function() {
    if (confirm('Are you sure you want to shut down Windows 98?')) {
      closeWin98();
    }
  });
}

// Close start menu when clicking elsewhere
document.addEventListener('click', function(e) {
  if (!e.target.closest('.win98-start-btn') && !e.target.closest('.win98-start-menu')) {
    if (win98StartMenu) {
      win98StartMenu.style.display = 'none';
    }
  }
});

// Keyboard shortcut: Escape to close
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && win98Open) {
    closeWin98();
  }
});

// ========================================
// 4. BIRTH YEAR MODAL - IMPROVED VISIBILITY
// ========================================

const birthInput = document.getElementById('birthYearInput');
if (birthInput) {
  birthInput.addEventListener('focus', function() {
    setTimeout(() => {
      this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  });
}

console.log('🎮 Windows 98 Simulator loaded!');
console.log('🔊 Vintage sounds ready!');
console.log('📱 Mobile optimized!');
console.log('🚀 Digital Computer Museum fully loaded!');
