import './style.css'

const issues = [
    { id: 'general', icon: '🩺', nameEn: 'General Health', nameSi: 'සාමාන්‍ය රෝග', desc: 'උණ, කැස්ස, හිසරදය' },
    { id: 'heart', icon: '❤️', nameEn: 'Heart & Blood', nameSi: 'හෘද හා රුධිර පීඩනය', desc: 'High/low BP' },
    { id: 'resp', icon: '🫁', nameEn: 'Respiratory', nameSi: 'හුස්ම ගැනීමේ රෝග', desc: 'Asthma, කැස්ස' },
    { id: 'dig', icon: '🍽️', nameEn: 'Digestive', nameSi: 'ජීර්ණ පද්ධතිය', desc: 'බඩේ අමාරුව, Gastritis' },
    { id: 'mental', icon: '🧠', nameEn: 'Mental Health', nameSi: 'මානසික සෞඛ්‍ය', desc: 'Stress, Anxiety' },
    { id: 'bones', icon: '🦴', nameEn: 'Bones & Joints', nameSi: 'අස්ථි සහ සන්ධි', desc: 'Back/joint pain' },
    { id: 'child', icon: '👶', nameEn: 'Child Health', nameSi: 'ළමා රෝග', desc: 'Babies & kids issues' },
    { id: 'women', icon: '👩', nameEn: 'Women’s Health', nameSi: 'කාන්තා සෞඛ්‍ය', desc: 'Periods, Pregnancy' },
    { id: 'men', icon: '👨', nameEn: 'Men’s Health', nameSi: 'පිරිමි සෞඛ්‍ය', desc: 'Men’s issues' },
    { id: 'skin', icon: '🧴', nameEn: 'Skin & Hair', nameSi: 'සම සහ රූපලාවණ්‍ය', desc: 'Pimples, Skin allergies' },
    { id: 'dental', icon: '🦷', nameEn: 'Dental', nameSi: 'දන්ත සෞඛ්‍ය', desc: 'Tooth & gum issues' },
    { id: 'ent', icon: '👁️', nameEn: 'Eye & ENT', nameSi: 'ඇස් සහ කණ', desc: 'Eye, ear, throat' }
];

const doctors = [
    {
        id: 'nuwan',
        name: 'Dr. Nuwan Silva',
        specialty: 'General Physician',
        image: '/images/doctor_grid_1_1774458018147.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['general', 'resp', 'dig', 'men']
    },
    {
        id: 'anusha',
        name: 'Dr. Anusha Perera',
        specialty: 'Pediatrician & Family GP',
        image: '/images/doctor_grid_2_1774458048220.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['child', 'women', 'mental']
    },
    {
        id: 'kamal',
        name: 'Dr. Kamal Gunaratne',
        specialty: 'Dermatologist',
        image: '/images/doctor_kamal_gunaratne.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['skin']
    },
    {
        id: 'nilmini',
        name: 'Dr. Nilmini Peiris',
        specialty: 'Dental Surgeon',
        image: '/images/doctor_nilmini_peiris.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['dental']
    },
    {
        id: 'sarah',
        name: 'Dr. Tharushi Perera',
        specialty: 'Counselor & Psychometrist',
        image: '/images/doctor_tharushi_perera.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['mental']
    },
    {
        id: 'chaminda',
        name: 'Dr. Chaminda Perera',
        specialty: 'ENT Specialist',
        image: '/images/doctor_chaminda_perera.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['ent']
    },
    {
        id: 'gamini',
        name: 'Dr. Gamini Fernando',
        specialty: 'Consultant Physician',
        image: '/images/doctor_grid_3_1774458088270.png',
        status: 'offline',
        indicatorClass: 'bg-slate-400',
        chatLink: 'https://wa.me/94712653974?text=Hi, I would like to schedule a consultation with an available doctor.',
        isExternal: true,
        issues: ['heart', 'bones', 'ent']
    }
];

function renderIssues() {
    const grid = document.getElementById('issues-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    issues.forEach(issue => {
        const btn = document.createElement('button');
        btn.className = 'glass-card p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-cyan-300 transition-all hover:-translate-y-1 shadow-[0_4px_15px_rgb(0,0,0,0.02)] bg-white/70 backdrop-blur-md group relative overflow-hidden';
        
        btn.innerHTML = `
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="text-2xl sm:text-3xl mb-1 mt-1 relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">${issue.icon}</div>
            <h3 class="font-bold text-dark text-[11px] sm:text-[13px] leading-tight relative z-10">${issue.nameSi}</h3>
            <p class="text-[9px] sm:text-[10px] text-slate-500 font-medium relative z-10 mb-1">${issue.desc}</p>
        `;
        
        btn.onclick = () => selectIssue(issue);
        grid.appendChild(btn);
    });
}

function renderSelectedDoctor(issueId) {
    const list = document.getElementById('doctors-list');
    if (!list) return;
    list.innerHTML = '';
    
    // Find matching doctor, prioritize specialty. If multiple, find first.
    let doctor = doctors.find(d => d.issues.includes(issueId));
    
    // Fallback if no specific match
    if (!doctor) doctor = doctors[0];
    
    const card = document.createElement('div');
    card.className = 'glass-card p-3 rounded-2xl flex items-center gap-4 group hover:border-cyan-200 transition-colors bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-[fadeInUp_0.4s_ease-out_forwards]';
    
    const targetAttr = doctor.isExternal ? 'target="_blank"' : '';
    const btnClass = doctor.isExternal 
        ? 'bg-green-50 text-green-600 group-hover:bg-green-500 group-hover:text-white'
        : 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white';
        
    const iconPath = doctor.isExternal
        ? '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>'
        : '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>';

    card.innerHTML = `
        <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm relative">
            <img src="${doctor.image}" alt="${doctor.name}" class="w-full h-full object-cover">
            <div class="absolute bottom-1 right-1 w-3 h-3 ${doctor.indicatorClass} border-2 border-white rounded-full"></div>
        </div>
        <div class="flex-1">
            <h3 class="font-bold text-dark text-md leading-tight">${doctor.name}</h3>
            <p class="text-xs font-medium text-slate-500">${doctor.specialty}</p>
            <p class="text-[9px] text-cyan-700 font-bold mt-1 bg-cyan-50 border border-cyan-100/50 inline-block px-2 py-0.5 rounded-md shadow-sm">Suggested Match</p>
        </div>
        <a href="${doctor.chatLink}" ${targetAttr} class="w-11 h-11 rounded-full ${btnClass} flex items-center justify-center transition-all shadow-sm shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
        </a>
    `;
    
    list.appendChild(card);
}

window.selectIssue = function(issue) {
    const issuesSection = document.getElementById('issues');
    const loaderSection = document.getElementById('doctor-loader');
    const doctorsSection = document.getElementById('doctors');
    const headerContainer = document.getElementById('selected-issue-header');

    // Hide issues, show loader
    issuesSection.classList.add('hidden');
    loaderSection.classList.remove('hidden');

    // Removed automatic scroll to keep view at the top as requested


    setTimeout(() => {
        loaderSection.classList.add('hidden');
        
        // Populate header
        headerContainer.innerHTML = `
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100/60 p-3 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-3 sm:gap-4 w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-2 relative overflow-hidden">
                <div class="absolute -right-4 -top-4 text-6xl opacity-[0.03] select-none">${issue.icon}</div>
                <div class="text-3xl sm:text-4xl drop-shadow-sm">${issue.icon}</div>
                <div class="flex-1 text-left relative z-10">
                    <p class="text-[10px] text-cyan-600 font-bold uppercase tracking-wider mb-0.5">Selected Category</p>
                    <h4 class="font-bold text-dark text-sm sm:text-base leading-tight">${issue.nameSi}</h4>
                    <p class="text-[10px] sm:text-xs text-slate-500 font-medium">${issue.nameEn}</p>
                </div>
                <button onclick="resetIssue()" class="relative z-10 text-[10px] sm:text-xs font-bold text-slate-500 border border-slate-200 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm hover:bg-slate-50 hover:text-dark transition-all active:scale-95 shrink-0">
                    Change
                </button>
            </div>
        `;

        // Render exactly 1 selected doctor for the issue
        renderSelectedDoctor(issue.id);

        doctorsSection.classList.remove('hidden');
        doctorsSection.classList.add('animate-[fadeInUp_0.4s_ease-out_forwards]');
        
        // Removed automatic scroll to keep header visible


    }, 1200);
}

window.resetIssue = function() {
    const issuesSection = document.getElementById('issues');
    const doctorsSection = document.getElementById('doctors');
    
    doctorsSection.classList.add('hidden');
    issuesSection.classList.remove('hidden');
    
    // reset animation
    issuesSection.classList.remove('animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]');
    void issuesSection.offsetWidth; 
    issuesSection.classList.add('animate-[fadeInUp_0.4s_ease-out_forwards]');
    issuesSection.style.opacity = '1';
    
    // Removed automatic scroll

}

// Router Logic
function handleRouting() {
    const hash = window.location.hash;
    const mainView = document.getElementById('main-view');
    const chatView = document.getElementById('chat-view');

    if (hash === '#chat') {
        mainView.classList.add('hidden');
        chatView.classList.remove('hidden');
        initChat(); // Start chat animation
    } else {
        mainView.classList.remove('hidden');
        chatView.classList.add('hidden');
        
        // Reset everything if needed on main view but normally we keep state unless they reload
    }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', () => {
    renderIssues();
    handleRouting();
});

// Chat Logic
let chatInitialized = false;
async function initChat() {
    if (chatInitialized) return;
    chatInitialized = true;

    const messages = [
        { text: "Ayubowan! 🙏 I am Dr. Deepani.", delay: 800 },
        { text: "How can I help you today?", delay: 1800 },
    ];

    const chatContainer = document.getElementById('chat-messages');

    for (const msg of messages) {
        // Show typing
        const typing = createTypingIndicator();
        chatContainer.appendChild(typing);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Wait
        await new Promise(r => setTimeout(r, 800));

        // Remove typing and add message
        typing.remove();
        chatContainer.appendChild(createMessage(msg.text));
        chatContainer.scrollTop = chatContainer.scrollHeight;

        // Wait next
        await new Promise(r => setTimeout(r, msg.delay - 800));
    }
}

function createMessage(text, isUser = false) {
    const div = document.createElement('div');
    div.className = `flex w-full ${isUser ? 'justify-end' : 'justify-start'} message-enter`;

    div.innerHTML = `
        <div class="max-w-[75%] rounded-2xl px-4 py-2.5 shadow-sm text-sm ${isUser
            ? 'bg-cyan-600 text-white rounded-br-sm'
            : 'bg-white text-dark rounded-bl-sm border border-slate-100'
        }">
            ${text}
            <div class="text-[9px] opacity-60 text-right mt-1">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    `;
    return div;
}

function createTypingIndicator() {
    const div = document.createElement('div');
    div.className = 'flex w-full justify-start message-enter typing-indicator-container';
    div.innerHTML = `
        <div class="bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm border border-slate-100 flex gap-1">
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
        </div>
    `;
    return div;
}

// Input Handler
document.getElementById('fake-input')?.addEventListener('click', () => {
    const chatContainer = document.getElementById('chat-messages');

    const userMsg = createMessage("I need a consultation.", true);
    chatContainer.appendChild(userMsg);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
        window.location.href = "https://wa.me/94712653974?text=Hi Dr. Deepani, I would like to schedule a consultation.";
    }, 1000);
});
