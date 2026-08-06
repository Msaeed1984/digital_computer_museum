// ========================================
// CONTINUE TO MUSEUM - SCROLL TO TOP
// ========================================

document.getElementById('continueBtn').addEventListener('click', function(e) {
  // The modal will close and scroll to top
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);
});

// ========================================
// SOUNDS SECTION
// ========================================

// Create audio context for sounds
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Generate synthetic sounds (since we can't load real audio files)
function playDialupSound() {
  const ctx = getAudioContext();
  const duration = 3.5;
  const startTime = ctx.currentTime;
  
  // Create oscillator for the dialup sound
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

function playWinXPSound() {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime;
  
  // Windows XP startup sound (simplified)
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

function playWin98Shutdown() {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime;
  
  // Windows 98 shutdown sound (simplified)
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

function playWindowsError() {
  const ctx = getAudioContext();
  const startTime = ctx.currentTime;
  
  // Windows error sound
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
      // Visual feedback
      this.classList.add('playing');
      this.innerHTML = '<span class="play-icon">⏹</span> <span data-ar="تشغيل" data-en="Playing...">Playing...</span>';
      
      playFn();
      
      setTimeout(() => {
        this.classList.remove('playing');
        const isAr = document.body.classList.contains('ar');
        this.innerHTML = `<span class="play-icon">▶</span> <span data-ar="تشغيل" data-en="Play">Play</span>`;
      }, 3000);
    }
  });
});

// ========================================
// WINDOWS 98 SIMULATOR
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
let currentFolder = '';

// Update clock
function updateWin98Clock() {
  const now = new Date();
  win98Clock.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}
updateWin98Clock();
setInterval(updateWin98Clock, 30000);

// Open Windows 98
function openWin98() {
  win98Modal.showModal();
  win98Open = true;
  win98StartMenu.style.display = 'none';
  win98Folder.style.display = 'none';
  playWinXPSound();
}

// Close Windows 98
function closeWin98() {
  win98Modal.close();
  win98Open = false;
  playWin98Shutdown();
}

// Open folder
function openFolder(folder) {
  currentFolder = folder;
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
  
  win98FolderTitle.textContent = titles[folder] || 'Folder';
  win98FolderBody.innerHTML = contents[folder]?.map(item => 
    `<div class="win98-folder-item">${item}</div>`
  ).join('') || '<div class="win98-folder-item">📁 Empty folder</div>';
  
  win98Folder.style.display = 'flex';
  win98StartMenu.style.display = 'none';
}

// Close folder
function closeFolder() {
  win98Folder.style.display = 'none';
}

// Event Listeners for Windows 98

// Launch from laptop click
function launchWin98() {
  if (!win98Open) {
    openWin98();
    // Play dialup sound for authentic experience
    setTimeout(playDialupSound, 300);
  } else {
    // If already open, bring to front
    win98Modal.showModal();
  }
}

// Click on laptop image to launch Win98
document.querySelectorAll('#laptopTrigger, #laptopClickArea').forEach(el => {
  el.addEventListener('click', function(e) {
    // Don't trigger if clicking on a hotspot or explore button
    if (e.target.closest('.hotspot') || e.target.closest('.explore-btn')) return;
    launchWin98();
  });
});

// Launch button
document.getElementById('launchWin98Btn').addEventListener('click', launchWin98);

// Close button
win98Close.addEventListener('click', closeWin98);

// Click outside to close (but keep it usable)
win98Modal.addEventListener('click', function(e) {
  if (e.target === this) {
    // Don't close on backdrop click for better UX
  }
});

// Start button
win98StartBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  if (win98StartMenu.style.display === 'block') {
    win98StartMenu.style.display = 'none';
  } else {
    win98StartMenu.style.display = 'block';
  }
});

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
win98FolderClose.addEventListener('click', closeFolder);

// Shutdown
win98Shutdown.addEventListener('click', function() {
  if (confirm('Are you sure you want to shut down Windows 98?')) {
    closeWin98();
  }
});

// Close start menu when clicking elsewhere
document.addEventListener('click', function(e) {
  if (!e.target.closest('.win98-start-btn') && !e.target.closest('.win98-start-menu')) {
    if (win98StartMenu) {
      win98StartMenu.style.display = 'none';
    }
  }
});

// Keyboard shortcut: Win key to open Start menu
document.addEventListener('keydown', function(e) {
  if (e.key === 'Meta' || e.key === 'Windows') {
    e.preventDefault();
    if (win98StartMenu) {
      win98StartMenu.style.display = win98StartMenu.style.display === 'block' ? 'none' : 'block';
    }
  }
  if (e.key === 'Escape' && win98Open) {
    closeWin98();
  }
});

// ========================================
// BIRTH YEAR MODAL - IMPROVED VISIBILITY
// ========================================

// Make the explore button more visible on mobile
const birthInput = document.getElementById('birthYearInput');
const birthBtn = document.getElementById('birthYearBtn');

if (birthInput) {
  birthInput.addEventListener('focus', function() {
    // Scroll to make input visible on mobile
    setTimeout(() => {
      this.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  });
}

console.log('🎮 Windows 98 Simulator loaded!');
console.log('🔊 Vintage sounds ready!');
console.log('📱 Mobile optimized!');
