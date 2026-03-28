import './style.css'

let currentLang = 'en'; // Default language

let chatState = {
    step: 0,
    data: {}
};

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
        chat: {
            intro: 'To assist you better, I need to collect some basic information before we connect on WhatsApp.',
            botName: 'Could you please provide your **Full Name**?',
            placeholderName: 'e.g. Nimal Perera',
            botAge: 'Thank you! What is your **Age**?',
            placeholderAge: 'e.g. 25',
            botWeight: 'Got it. What is your current **Weight** in kg?',
            placeholderWeight: 'e.g. 60',
            botSymptom: 'Please briefly describe your **main symptom or condition**.',
            placeholderSymptom: 'Describe your pain/illness...',
            botUrgency: 'Almost done. **When do you need to see the doctor?**',
            urgency1: 'Urgent (🔴)',
            urgency2: 'Today/Tomorrow (🟡)',
            urgency3: 'Schedule later (🟢)',
            price1: '2000 lkr',
            price2: '1500 lkr',
            price3: '1000 lkr',
            btnNext: 'Next',
            btnSend: 'Send',
            generating: 'Thank you! Generating your consultation request and opening WhatsApp...',
            errorEmpty: 'Please fill in this field to continue.'
        },
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
        availableSpecialists: 'භාවිතා කළ හැකි විශේෂඥයින්',
        suggestedMatch: 'නිර්දේශිතයි',
        treatmentAreas: 'ප්‍රතිකාර ක්ෂේත්‍ර',
        howItWorks: 'ක්‍රියාත්මක වන ආකාරය',
        canDiagnosed: 'අන්තර්ජාලය හරහා රෝග විනිශ්චය කළ හැකිද?',
        diagnosedDesc: '"ඇමරිකානු වෛද්‍ය සංගමයට අනුව, උපදේශනවලින් 75% ක් අන්තර්ජාලය හරහා විනිශ්චය කළ හැකිය. ඔබේ ඉතිහාසය සහ රෝග ලක්ෂණ තේරුම් ගැනීම ශාරීරික පරීක්‍ෂණයකට වඩා වැදගත් වේ."',
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
        chat: {
            intro: 'WhatsApp හරහා සම්බන්ධ වීමට පෙර, මට ඔබේ මූලික තොරතුරු කිහිපයක් ලබා දෙන්න.',
            botName: 'කරුණාකර ඔබේ **සම්පූර්ණ නම** ඇතුලත් කරන්න:',
            placeholderName: 'උදා: Nimal Perera',
            botAge: 'ස්තුතියි! ඔබේ **වයස** කීයද?',
            placeholderAge: 'උදා: 25',
            botWeight: 'ඔබේ වර්තමාන **බර (kg)** කොපමණද?',
            placeholderWeight: 'උදා: 60',
            botSymptom: 'ඔබට දැනෙන **ප්රධාන ලක්ෂණය/අසනීපය** කෙටියෙන් විස්තර කරන්න.',
            placeholderSymptom: 'ඔබට දැනෙන වේදනාව විස්තර කරන්න...',
            botUrgency: 'අවසාන වශයෙන්, **ඔබට වෛද්යවරයා හමුවීමට අවශ්ය කාලය** තෝරන්න:',
            urgency1: '🔴 ඉක්මනින් (Urgent)',
            urgency2: '🟡 අද/හෙට',
            urgency3: '🟢 පසුව වෙලාවක්',
            price1: '2000 lkr',
            price2: '1500 lkr',
            price3: '1000 lkr',
            btnNext: 'මීළඟ',
            btnSend: 'යවන්න',
            generating: 'ස්තුතියි! ඔබගේ විස්තර WhatsApp වෙත යොමු කරමින් පවතී...',
            errorEmpty: 'කරුණාකර මෙම විස්තරය ලබා දෙන්න.'
        },
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
            nonurgent: { name: 'හදිසි නොවන රෝග', desc: 'සාමාන්්‍ය අසනීප' },
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
        id: 'deepani',
        name: 'Dr. Deepani Ranasinghe',
        specialtyEn: 'General Physician & Consultant',
        specialtySi: 'සාමාන්්‍ය වෛද්‍ය විශේෂඥ',
        qualificationsEn: 'MBBS (SL), SLMC (33240) Registered, UK GMC Registered (8077521)',
        qualificationsSi: 'MBBS (SL), ශ්‍රී ලංකා වෛද්‍ය සභාව (33240) ලියාපදිංචි, UK GMC (8077521) ලියාපදිංචි',
        image: '/images/doctor_nilmini_peiris.png', // Temporary placeholder
        status: 'online',
        indicatorClass: 'bg-green-500',
        chatLink: '#chat',
        issues: ['general', 'heart', 'resp', 'dig', 'mental', 'bones', 'child', 'women', 'men', 'skin', 'nonurgent', 'ent']
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
    
    let doctor = doctors.find(d => d.issues.includes(issueId));
    if (!doctor) doctor = doctors[0];
    
    const card = document.createElement('div');
    card.className = 'glass-card p-4 rounded-2xl flex flex-col gap-4 group hover:border-cyan-200 transition-colors bg-white/60 backdrop-blur-md border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] animate-[fadeInUp_0.4s_ease-out_forwards]';
    
    const specialty = currentLang === 'en' ? doctor.specialtyEn : doctor.specialtySi;
    const qualifications = currentLang === 'en' ? doctor.qualificationsEn : doctor.qualificationsSi;

    card.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-sm relative ring-2 ring-white">
                <img src="${doctor.image}" alt="${doctor.name}" class="w-full h-full object-cover">
                <div class="absolute bottom-1 right-1 w-3 h-3 ${doctor.indicatorClass} border-2 border-white rounded-full"></div>
            </div>
            <div class="flex-1">
                <h3 class="font-bold text-dark text-lg leading-tight mb-1">${doctor.name}</h3>
                <p class="text-xs font-bold text-cyan-600 mb-1">${specialty}</p>
                <p class="text-[10px] text-slate-500 font-medium">${t.suggestedMatch}</p>
            </div>
        </div>
        <div class="bg-cyan-50/50 rounded-xl p-3 border border-cyan-100/50">
            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Registration & Qualifications</p>
            <p class="text-[11px] text-slate-600 leading-normal">${qualifications}</p>
        </div>
        <a href="${doctor.chatLink}" class="w-full bg-cyan-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-bold text-sm shadow-md hover:bg-cyan-700 transition-all active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            ${t.findButton}
        </a>
    `;
    
    list.appendChild(card);
}

window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'si' : 'en';
    updateStaticUI();
    renderIssues();
    
    if (window.lastSelectedIssue) {
        updateSelectedHeader(window.lastSelectedIssue);
        renderSelectedDoctor(window.lastSelectedIssue.id);
    }
}

function updateSelectedHeader(issue) {
    const headerContainer = document.getElementById('selected-issue-header');
    if (!headerContainer) return;
    const t = translations[currentLang];
    const trans = t.categories[issue.id];
    
    headerContainer.innerHTML = `
        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100/60 p-3 rounded-2xl flex items-center gap-4 w-full shadow-sm mb-2 relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-6xl opacity-[0.03] select-none">${issue.icon}</div>
            <div class="text-3xl drop-shadow-sm">${issue.icon}</div>
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

    const loaderText = loaderSection.querySelector('p');
    if (loaderText) loaderText.innerText = t.findingMatch;

    issuesSection.classList.add('hidden');
    loaderSection.classList.remove('hidden');

    setTimeout(() => {
        loaderSection.classList.add('hidden');
        updateSelectedHeader(issue);
        renderSelectedDoctor(issue.id);
        doctorsSection.classList.remove('hidden');
        doctorsSection.classList.add('animate-[fadeInUp_0.4s_ease-out_forwards]');
    }, 1200);
}

window.resetIssue = function() {
    window.lastSelectedIssue = null;
    const issuesSection = document.getElementById('issues');
    const doctorsSection = document.getElementById('doctors');
    
    doctorsSection.classList.add('hidden');
    issuesSection.classList.remove('hidden');
    
    issuesSection.classList.remove('animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]');
    void issuesSection.offsetWidth; 
    issuesSection.classList.add('animate-[fadeInUp_0.4s_ease-out_forwards]');
    issuesSection.style.opacity = '1';
}

function handleRouting() {
    const hash = window.location.hash;
    const mainView = document.getElementById('main-view');
    const chatView = document.getElementById('chat-view');

    if (hash === '#chat') {
        const langBtn = document.getElementById('lang-switch-btn');
        if (langBtn) langBtn.classList.add('hidden');
        mainView.classList.add('hidden');
        chatView.classList.remove('hidden');
        initChat();
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

// ==========================================
// CHATBOT LOGIC
// ==========================================

let chatContextLang = null;

async function initChat() {
    // Only re-init if language changed or first load
    if (chatContextLang === currentLang && chatState.step > 0) return;
    
    chatContextLang = currentLang;
    chatState = { step: 0, data: {} };
    
    const container = document.getElementById('chat-messages');
    container.innerHTML = `<div class="text-center text-[10px] text-slate-300 my-4 font-bold uppercase tracking-widest">Today</div>`;
    
    const inputContainer = document.getElementById('chat-input-container');
    inputContainer.innerHTML = ''; // Hide input area initially

    const t = translations[currentLang];
    
    // Greeting sequence
    await addBotMessageWithTyping(t.drGreeting, 600);
    await addBotMessageWithTyping(t.chat.intro, 1000);
    
    // Start form
    chatState.step = 1;
    triggerStep(1);
}

async function triggerStep(step) {
    const t = translations[currentLang].chat;
    let botPrompt = "";

    switch(step) {
        case 1: botPrompt = t.botName; break;
        case 2: botPrompt = t.botAge; break;
        case 3: botPrompt = t.botWeight; break;
        case 4: botPrompt = t.botSymptom; break;
        case 5: botPrompt = t.botUrgency; break;
    }

    if (botPrompt) {
        await addBotMessageWithTyping(botPrompt, 600);
    }
    
    renderChatInput(step);
}

function renderChatInput(step) {
    const container = document.getElementById('chat-input-container');
    const t = translations[currentLang].chat;
    
    let html = '';
    
    if (step >= 1 && step <= 4) {
        let inputType = "text";
        let placeholder = "";
        
        switch(step) {
            case 1: placeholder = t.placeholderName; break;
            case 2: inputType = "number"; placeholder = t.placeholderAge; break;
            case 3: inputType = "number"; placeholder = t.placeholderWeight; break;
        }

        if (step === 4) {
            html = `
            <div class="flex gap-2 items-end">
                <textarea id="chat-user-input" rows="2" placeholder="${t.placeholderSymptom}" class="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50 outline-none transition-all resize-none shadow-sm pb-safe"></textarea>
                <button onclick="submitChatStep()" class="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white shadow-md shadow-cyan-600/20 shrink-0 hover:bg-cyan-700 active:scale-95 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
            </div>
            `;
        } else {
            html = `
            <div class="flex gap-2 items-center">
                <input type="${inputType}" id="chat-user-input" placeholder="${placeholder}" class="w-full h-12 bg-slate-50 border border-slate-200 rounded-full px-4 text-sm focus:border-cyan-500 focus:ring-4 focus:ring-cyan-50 outline-none transition-all shadow-sm pb-safe" onkeydown="if(event.key==='Enter') submitChatStep()">
                <button onclick="submitChatStep()" class="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white shadow-md shadow-cyan-600/20 shrink-0 hover:bg-cyan-700 active:scale-95 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
            </div>
            `;
        }
    } else if (step === 5) {
        html = `
        <div class="space-y-2 pb-safe">
            <label class="flex items-center justify-between p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-cyan-300 transition-all group has-[:checked]:border-cyan-500 has-[:checked]:bg-cyan-50/50 has-[:checked]:ring-2 ring-cyan-500">
                <div class="flex items-center gap-3">
                    <input type="radio" name="chat-urgency" value="${t.urgency1}" class="w-4 h-4 text-cyan-600 focus:ring-cyan-500 cursor-pointer">
                    <span class="font-bold text-dark text-sm">${t.urgency1}</span>
                </div>
            </label>
            <label class="flex items-center justify-between p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-cyan-300 transition-all group has-[:checked]:border-cyan-500 has-[:checked]:bg-cyan-50/50 has-[:checked]:ring-2 ring-cyan-500 relative">
                <div class="flex items-center gap-3">
                    <input type="radio" name="chat-urgency" value="${t.urgency2}" checked class="w-4 h-4 text-cyan-600 focus:ring-cyan-500 cursor-pointer">
                    <span class="font-bold text-dark text-sm">${t.urgency2}</span>
                </div>
            </label>
            <label class="flex items-center justify-between p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer hover:border-cyan-300 transition-all group has-[:checked]:border-cyan-500 has-[:checked]:bg-cyan-50/50 has-[:checked]:ring-2 ring-cyan-500 relative">
                <div class="flex items-center gap-3">
                    <input type="radio" name="chat-urgency" value="${t.urgency3}" class="w-4 h-4 text-cyan-600 focus:ring-cyan-500 cursor-pointer">
                    <span class="font-bold text-dark text-sm">${t.urgency3}</span>
                </div>
            </label>
            <button onclick="submitChatStep()" class="w-full bg-cyan-600 text-white rounded-xl py-4 flex items-center justify-center gap-2 font-bold text-sm shadow-md hover:bg-cyan-700 mt-4 active:scale-95 transition-all">
                ${t.btnNext}
            </button>
        </div>
        `;
    }

    container.innerHTML = html;
    
    // Focus text input if applicable
    const textInput = document.getElementById('chat-user-input');
    if (textInput) {
        setTimeout(() => textInput.focus(), 100);
    }
}

window.submitChatStep = function() {
    const t = translations[currentLang].chat;
    const step = chatState.step;

    let useValue = "";
    
    if (step >= 1 && step <= 4) {
        const input = document.getElementById('chat-user-input');
        if (!input || !input.value.trim()) {
            alert(t.errorEmpty);
            return;
        }
        useValue = input.value.trim();
        
        if (step === 1) chatState.data.name = useValue;
        if (step === 2) chatState.data.age = useValue;
        if (step === 3) chatState.data.weight = useValue;
        if (step === 4) chatState.data.symptom = useValue;
        
    } else if (step === 5) {
        const checked = document.querySelector('input[name="chat-urgency"]:checked');
        if (!checked) return;
        useValue = `${checked.value}`;
        chatState.data.urgency = checked.value;
    }

    // Clear input area immediately to prevent double submission
    document.getElementById('chat-input-container').innerHTML = '';

    // Show user message
    addUserMessage(useValue);

    // Proceed to next
    chatState.step++;
    
    if (chatState.step <= 5) {
        triggerStep(chatState.step);
    } else {
        finishChat();
    }
}

async function finishChat() {
    const t = translations[currentLang].chat;
    await addBotMessageWithTyping(t.generating, 1200);

    const message = `*New Consultation Request*
-------------------------
*Name:* ${chatState.data.name}
*Age:* ${chatState.data.age}
*Weight:* ${chatState.data.weight} kg
*Condition:* ${chatState.data.symptom}
*Urgency:* ${chatState.data.urgency}
-------------------------`;

    const encodedMsg = encodeURIComponent(message);
    setTimeout(() => {
        window.location.href = `https://wa.me/94712653974?text=${encodedMsg}`;
        
        // Reset for next time
        setTimeout(() => {
            chatState = { step: 0, data: {} };
            const container = document.getElementById('chat-messages');
            if (container) container.innerHTML = '';
            window.location.hash = ''; // Return to home
        }, 100);
    }, 500);
}

// GUI Helpers

function parseMarkdownBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
}

async function addBotMessageWithTyping(text, delayMs) {
    const container = document.getElementById('chat-messages');
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'flex w-full justify-start message-enter typing-indicator-container mb-4';
    typingDiv.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-slate-100 overflow-hidden shrink-0 mr-2 border border-slate-200">
            <img src="/images/doctor_nilmini_peiris.png" alt="Dr" class="w-full h-full object-cover">
        </div>
        <div class="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm border border-slate-100 flex items-center gap-1 min-h-[44px]">
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
            <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
        </div>
    `;
    
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;

    await new Promise(r => setTimeout(r, delayMs));

    typingDiv.remove();
    
    const div = document.createElement('div');
    div.className = 'flex w-full justify-start message-enter mb-4';
    div.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-slate-100 overflow-hidden shrink-0 mr-2 border border-slate-200 mt-auto">
            <img src="/images/doctor_nilmini_peiris.png" alt="Dr" class="w-full h-full object-cover">
        </div>
        <div class="max-w-[75%] bg-white text-dark rounded-2xl rounded-bl-sm border border-slate-100 px-4 py-3 shadow-sm text-[13px] leading-relaxed">
            ${parseMarkdownBold(text)}
            <div class="text-[9px] opacity-40 text-left mt-1.5">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    `;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function addUserMessage(text) {
    const container = document.getElementById('chat-messages');
    const div = document.createElement('div');
    div.className = 'flex w-full justify-end message-enter mb-4';
    div.innerHTML = `
        <div class="max-w-[75%] bg-cyan-600 text-white rounded-2xl rounded-br-sm px-4 py-3 shadow-sm text-[13px] leading-relaxed">
            ${text}
            <div class="text-[9px] opacity-70 text-right mt-1.5">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}
