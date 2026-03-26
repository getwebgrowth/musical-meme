import './style.css'

let currentLang = 'en'; // Default language

const translations = {
    en: {
        appTitle: 'My ONline Doctor',
        tagline: 'Your Doctor at Your fingertips',
        findButton: 'Find a Doctor',
        selectPrompt: 'SELECT YOUR ISSUE',
        findingMatch: 'Finding best match...',
        selectedCategory: 'SELECTED CATEGORY',
        changeBtn: 'Change',
        availableSpecialists: 'AVAILABLE SPECIALISTS',
        suggestedMatch: 'Suggested Match',
        treatmentAreas: 'TREATMENT AREAS',
        howItWorks: 'HOW IT WORKS',
        canDiagnosed: 'Can I be diagnosed online?',
        diagnosedDesc: '"According to the American Medical Association, 75% of consultations can be diagnosed online. Understanding your history and symptoms is just as important as a physical exam."',
        helpText: 'How can I help you today?',
        drGreeting: 'Ayubowan! 🙏 I am Dr. Deepani.',
        consultationReq: 'I need a consultation.',
        urgentTitle: 'Minor Urgent',
        urgentDesc: 'Cough, Flu, Rashes',
        chronicTitle: 'Chronic Care',
        chronicDesc: 'Diabetes, Pressure',
        directConnect: 'Direct Connect',
        whatsappTitle: 'WhatsApp Chat',
        whatsappDesc: 'Quick medical advice & prescriptions',
        zoomTitle: 'Zoom Consultation',
        zoomDesc: 'Video call • 30 mins',
        categories: {
            general: { name: 'General Health', desc: 'Fever, Cough, Headache' },
            heart: { name: 'Heart & Blood', desc: 'High/low BP' },
            resp: { name: 'Respiratory', desc: 'Asthma, Cough' },
            dig: { name: 'Digestive', desc: 'Stomach pain, Gastritis' },
            mental: { name: 'Mental Health', desc: 'Stress, Anxiety' },
            bones: { name: 'Bones & Joints', desc: 'Back/joint pain' },
            child: { name: 'Child Health', desc: 'Babies & kids issues' },
            women: { name: 'Women’s Health', desc: 'Periods, Pregnancy' },
            men: { name: 'Men’s Health', desc: 'Men’s issues' },
            skin: { name: 'Skin & Hair', desc: 'Pimples, Skin allergies' },
            nonurgent: { name: 'Non-urgent Care', desc: 'Common illnesses' },
            ent: { name: 'Eye & ENT', desc: 'Eye, ear, throat' }
        }
    },
    si: {
        appTitle: 'මගේ ඔන්ලයින් දොස්තර',
        tagline: 'ඔබේ වෛද්‍යවරයා ඔබේ ඇඟිලි තුඩුවල',
        findButton: 'වෛද්‍යවරයකු සොයන්න',
        selectPrompt: 'ඔබට ඇති ගැටළුව තෝරන්න',
        findingMatch: 'හොඳම ගැළපුම සොයමින්...',
        selectedCategory: 'තෝරාගත් කාණ්ඩය',
        changeBtn: 'වෙනස් කරන්න',
        availableSpecialists: 'ලබා ගත හැකි විශේෂඥයින්',
        suggestedMatch: 'නිර්දේශිතයි',
        treatmentAreas: 'ප්‍රතිකාර ක්ෂේත්‍ර',
        howItWorks: 'ක්‍රියාත්මක වන ආකාරය',
        canDiagnosed: 'අන්තර්ජාලය හරහා රෝග විනිශ්චය කළ හැකිද?',
        diagnosedDesc: '"ඇමරිකානු වෛද්‍ය සංගමයට අනුව, උපදේශනවලින් 75% ක් අන්තර්ජාලය හරහා විනිශ්චය කළ හැකිය. ඔබේ ඉතිහාසය සහ රෝග ලක්ෂණ තේරුම් ගැනීම ශාරීරික පරීක්‍ෂණයකට වඩා වැදගත් වේ."',
        helpText: 'අද මම ඔබට උදව් කරන්නේ කෙසේද?',
        drGreeting: 'ආයුබෝවන්! 🙏 මම වෛද්‍ය දීපානි.',
        consultationReq: 'මට උපදේශනයක් අවශ්‍යයි.',
        urgentTitle: 'සුළු හදිසි',
        urgentDesc: 'කැස්ස, උණ, රෂ්',
        chronicTitle: 'ප්‍රතිකාර',
        chronicDesc: 'දියවැඩියාව, පීඩනය',
        directConnect: 'සෘජුව සම්බන්ධ වන්න',
        whatsappTitle: 'WhatsApp පණිවිඩ',
        whatsappDesc: 'ඉක්මන් වෛද්‍ය උපදෙස් සහ බෙහෙත් වට්ටෝරු',
        zoomTitle: 'Zoom උපදේශනය',
        zoomDesc: 'වීඩියෝ ඇමතුම • විනාඩි 30',
        categories: {
            general: { name: 'සාමාන්්‍ය රෝග', desc: 'උණ, කැස්ස, හිසරදය' },
            heart: { name: 'හෘද හා රුධිර පීඩනය', desc: 'රුධිර පීඩනය' },
            resp: { name: 'හුස්ම ගැනීමේ රෝග', desc: 'Asthma, කැස්ස' },
            dig: { name: 'ජීර්ණ පද්ධතිය', desc: 'බඩේ අමාරුව, Gastritis' },
            mental: { name: 'මානසික සෞඛ්‍ය', desc: 'Stress, Anxiety' },
            bones: { name: 'අස්ථි සහ සන්ධි', desc: 'කොන්දේ අමාරුව' },
            child: { name: 'ළමා රෝග', desc: 'බබාලාගේ රෝග' },
            women: { name: 'කාන්තා සෞඛ්‍ය', desc: 'ගර්භනී සමය' },
            men: { name: 'පිරිමි සෞඛ්‍ය', desc: 'පිරිමි ගැටළු' },
            skin: { name: 'සම සහ රූපලාවණ්‍ය', desc: 'කුරුලෑ, අසාත්මිකතා' },
            nonurgent: { name: 'හදිසි නොවන රෝග', desc: 'සාමාන්‍ය අසනීප' },
            ent: { name: 'ඇස් සහ කණ', desc: 'ඇස, කන, උගුර' }
        }
    }
};

const issues = [
    { id: 'general', icon: '🩺' },
    { id: 'heart', icon: '❤️' },
    { id: 'resp', icon: '🫁' },
    { id: 'dig', icon: '🍽️' },
    { id: 'mental', icon: '🧠' },
    { id: 'bones', icon: '🦴' },
    { id: 'child', icon: '👶' },
    { id: 'women', icon: '👩' },
    { id: 'men', icon: '👨' },
    { id: 'skin', icon: '🧴' },
    { id: 'nonurgent', icon: '🍵' },
    { id: 'ent', icon: '👁️' }
];

const doctors = [
    {
        id: 'nuwan',
        name: 'Dr. Nuwan Silva',
        specialtyEn: 'General Physician',
        specialtySi: 'සාමාන්‍ය වෛද්‍ය',
        image: '/images/doctor_grid_1_1774458018147.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['general', 'resp', 'dig', 'men', 'nonurgent']
    },
    {
        id: 'anusha',
        name: 'Dr. Anusha Perera',
        specialtyEn: 'Pediatrician & Family GP',
        specialtySi: 'ළමා සහ පවුල් වෛද්‍ය',
        image: '/images/doctor_grid_2_1774458048220.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['child', 'women', 'mental']
    },
    {
        id: 'kamal',
        name: 'Dr. Kamal Gunaratne',
        specialtyEn: 'Dermatologist',
        specialtySi: 'චර්ම රෝග විශේෂඥ',
        image: '/images/doctor_kamal_gunaratne.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['skin']
    },
    {
        id: 'nilmini',
        name: 'Dr. Nilmini Peiris',
        specialtyEn: 'Non-urgent Care Specialist',
        specialtySi: 'හදිසි නොවන රෝග පිළිබඳ විශේෂඥ',
        image: '/images/doctor_nilmini_peiris.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['nonurgent']
    },
    {
        id: 'sarah',
        name: 'Dr. Tharushi Perera',
        specialtyEn: 'Counselor & Psychometrist',
        specialtySi: 'මනෝ උපදේශක',
        image: '/images/doctor_tharushi_perera.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['mental']
    },
    {
        id: 'chaminda',
        name: 'Dr. Chaminda Perera',
        specialtyEn: 'ENT Specialist',
        specialtySi: 'උගුර කන නාසය පිළිබඳ විශේෂඥ',
        image: '/images/doctor_chaminda_perera.png',
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['ent']
    },
    {
        id: 'gamini',
        name: 'Dr. Gamini Fernando',
        specialtyEn: 'Consultant Physician',
        specialtySi: 'උපදේශක වෛද්‍ය',
        image: '/images/doctor_grid_3_1774458088270.png',
        status: 'offline',
        indicatorClass: 'bg-slate-400',
        chatLink: 'https://wa.me/94712653974?text=Hi, I would like to schedule a consultation with an available doctor.',
        isExternal: true,
        issues: ['heart', 'bones', 'ent']
    }
];

function updateStaticUI() {
    const t = translations[currentLang];
    document.title = `${t.drGreeting} | Telemedicine`;
    
    // Header & Hero
    const appTitle = document.getElementById('app-title');
    const appTagline = document.getElementById('app-tagline');
    const findBtn = document.getElementById('find-btn-text');
    const selectPrompt = document.getElementById('select-prompt');
    const treatmentTitle = document.getElementById('treatment-areas-title');
    const howItWorksTitle = document.getElementById('how-it-works-title');
    const diagnoseTitle = document.getElementById('diagnose-title');
    const diagnoseDesc = document.getElementById('diagnose-desc');
    const availableSpecsTitle = document.getElementById('available-specialists-title');

    if (appTitle) appTitle.innerText = t.appTitle;
    if (appTagline) appTagline.innerText = t.tagline;
    if (findBtn) findBtn.innerText = t.findButton;
    if (selectPrompt) selectPrompt.innerText = t.selectPrompt;
    if (treatmentTitle) treatmentTitle.innerText = t.treatmentAreas;
    if (howItWorksTitle) howItWorksTitle.innerText = t.howItWorks;
    if (diagnoseTitle) diagnoseTitle.innerText = t.canDiagnosed;
    if (diagnoseDesc) diagnoseDesc.innerText = t.diagnosedDesc;
    if (availableSpecsTitle) availableSpecsTitle.innerText = t.availableSpecialists;

    // Static Sections (Urgent/Chronic)
    const urgentT = document.getElementById('urgent-title');
    const urgentD = document.getElementById('urgent-desc');
    const chronicT = document.getElementById('chronic-title');
    const chronicD = document.getElementById('chronic-desc');

    if (urgentT) urgentT.innerText = t.urgentTitle;
    if (urgentD) urgentD.innerText = t.urgentDesc;
    if (chronicT) chronicT.innerText = t.chronicTitle;
    if (chronicD) chronicD.innerText = t.chronicDesc;

    // Direct Connect
    const directT = document.getElementById('direct-connect-title');
    const waTitle = document.getElementById('whatsapp-title');
    const waDesc = document.getElementById('whatsapp-desc');
    const zoomTitle = document.getElementById('zoom-title');
    const zoomDesc = document.getElementById('zoom-desc');

    if (directT) directT.innerText = t.directConnect;
    if (waTitle) waTitle.innerText = t.whatsappTitle;
    if (waDesc) waDesc.innerText = t.whatsappDesc;
    if (zoomTitle) zoomTitle.innerText = t.zoomTitle;
    if (zoomDesc) zoomDesc.innerText = t.zoomDesc;
    
    // Switcher text
    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) langBtn.innerText = currentLang === 'en' ? 'සිංහල' : 'English';
}

function renderIssues() {
    const grid = document.getElementById('issues-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const t = translations[currentLang];
    
    issues.forEach(issue => {
        const trans = t.categories[issue.id];
        const btn = document.createElement('button');
        btn.className = 'glass-card p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-1 hover:border-cyan-300 transition-all hover:-translate-y-1 shadow-[0_4px_15px_rgb(0,0,0,0.02)] bg-white/70 backdrop-blur-md group relative overflow-hidden';
        
        btn.innerHTML = `
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="text-2xl sm:text-3xl mb-1 mt-1 relative z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">${issue.icon}</div>
            <h3 class="font-bold text-dark text-[11px] sm:text-[13px] leading-tight relative z-10">${trans.name}</h3>
            <p class="text-[9px] sm:text-[10px] text-slate-500 font-medium relative z-10 mb-1">${trans.desc}</p>
        `;
        
        btn.onclick = () => selectIssue(issue);
        grid.appendChild(btn);
    });
}

function renderSelectedDoctor(issueId) {
    const list = document.getElementById('doctors-list');
    if (!list) return;
    list.innerHTML = '';
    
    const t = translations[currentLang];
    
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

    const specialty = currentLang === 'en' ? doctor.specialtyEn : doctor.specialtySi;

    card.innerHTML = `
        <div class="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm relative">
            <img src="${doctor.image}" alt="${doctor.name}" class="w-full h-full object-cover">
            <div class="absolute bottom-1 right-1 w-3 h-3 ${doctor.indicatorClass} border-2 border-white rounded-full"></div>
        </div>
        <div class="flex-1">
            <h3 class="font-bold text-dark text-md leading-tight">${doctor.name}</h3>
            <p class="text-xs font-medium text-slate-500">${specialty}</p>
            <p class="text-[9px] text-cyan-700 font-bold mt-1 bg-cyan-50 border border-cyan-100/50 inline-block px-2 py-0.5 rounded-md shadow-sm">${t.suggestedMatch}</p>
        </div>
        <a href="${doctor.chatLink}" ${targetAttr} class="w-11 h-11 rounded-full ${btnClass} flex items-center justify-center transition-all shadow-sm shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>
        </a>
    `;
    
    list.appendChild(card);
}

window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'si' : 'en';
    updateStaticUI();
    renderIssues();
    
    // If we are showing a selected doctor, re-render both header and doctor
    const doctorsSection = document.getElementById('doctors');
    if (!doctorsSection.classList.contains('hidden')) {
        // Find the current issue ID from the header if possible, or just keep it in state
        if (window.lastSelectedIssue) {
            updateSelectedHeader(window.lastSelectedIssue);
            renderSelectedDoctor(window.lastSelectedIssue.id);
        }
    }
}

function updateSelectedHeader(issue) {
    const headerContainer = document.getElementById('selected-issue-header');
    if (!headerContainer) return;
    const t = translations[currentLang];
    const trans = t.categories[issue.id];
    
    headerContainer.innerHTML = `
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100/60 p-3 sm:px-4 sm:py-3 rounded-2xl flex items-center gap-3 sm:gap-4 w-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-2 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-6xl opacity-[0.03] select-none">${issue.icon}</div>
            <div class="text-3xl sm:text-4xl drop-shadow-sm">${issue.icon}</div>
            <div class="flex-1 text-left relative z-10">
                <p class="text-[10px] text-cyan-600 font-bold uppercase tracking-wider mb-0.5">${t.selectedCategory}</p>
                <h4 class="font-bold text-dark text-sm sm:text-base leading-tight">${trans.name}</h4>
                <p class="text-[10px] sm:text-xs text-slate-500 font-medium">${trans.desc}</p>
            </div>
            <button onclick="resetIssue()" class="relative z-10 text-[10px] sm:text-xs font-bold text-slate-500 border border-slate-200 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm hover:bg-slate-50 hover:text-dark transition-all active:scale-95 shrink-0">
                ${t.changeBtn}
            </button>
        </div>
    `;
}

window.selectIssue = function(issue) {
    window.lastSelectedIssue = issue;
    const issuesSection = document.getElementById('issues');
    const loaderSection = document.getElementById('doctor-loader');
    const doctorsSection = document.getElementById('doctors');
    const t = translations[currentLang];

    // Update loader text
    const loaderText = loaderSection.querySelector('p');
    if (loaderText) loaderText.innerText = t.findingMatch;

    // Hide issues, show loader
    issuesSection.classList.add('hidden');
    loaderSection.classList.remove('hidden');

    // Removed automatic scroll to keep view at the top as requested

    setTimeout(() => {
        loaderSection.classList.add('hidden');
        
        // Populate header
        updateSelectedHeader(issue);

        // Render exactly 1 selected doctor for the issue
        renderSelectedDoctor(issue.id);

        doctorsSection.classList.remove('hidden');
        doctorsSection.classList.add('animate-[fadeInUp_0.4s_ease-out_forwards]');
        
        // Removed automatic scroll to keep header visible

    }, 1200);
}

window.resetIssue = function() {
    window.lastSelectedIssue = null;
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
        const langBtn = document.getElementById('lang-switch-btn');
        if (langBtn) langBtn.classList.add('hidden'); // Hide switcher in chat
        mainView.classList.add('hidden');
        chatView.classList.remove('hidden');
        initChat(); // Start chat animation
    } else {
        const langBtn = document.getElementById('lang-switch-btn');
        if (langBtn) langBtn.classList.remove('hidden');
        mainView.classList.remove('hidden');
        chatView.classList.add('hidden');
    }
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', () => {
    updateStaticUI();
    renderIssues();
    handleRouting();
});

// Chat Logic
let chatInitializedFor = null;
async function initChat() {
    if (chatInitializedFor === currentLang) return;
    chatInitializedFor = currentLang;

    const t = translations[currentLang];
    const messages = [
        { text: t.drGreeting, delay: 800 },
        { text: t.helpText, delay: 1800 },
    ];

    const chatContainer = document.getElementById('chat-messages');
    chatContainer.innerHTML = ''; // Clear for new language

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
    const t = translations[currentLang];

    const userMsg = createMessage(t.consultationReq, true);
    chatContainer.appendChild(userMsg);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    setTimeout(() => {
        window.location.href = `https://wa.me/94712653974?text=Hi Dr. Deepani, I would like to schedule a consultation. (${currentLang === 'en' ? 'English' : 'Sinhala'})`;
    }, 1000);
});
