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
        form: {
            step1: 'Full Name',
            step1Placeholder: 'e.g. Nimal Perera',
            step2: 'Your Age',
            step2Placeholder: 'e.g. 25',
            step3: 'Your Weight (kg)',
            step3Placeholder: 'e.g. 60',
            step4: 'What is your main symptom?',
            step4Placeholder: 'Describe your pain/illness...',
            step5: 'When do you need to see the doctor?',
            urgency1: 'Urgent (🔴)',
            urgency2: 'Today/Tomorrow (🟡)',
            urgency3: 'Schedule later (🟢)',
            price1: '2000 lkr',
            price2: '1500 lkr',
            price3: '1000 lkr',
            submit: 'Send to WhatsApp',
            yourInfo: 'YOUR INFORMATION',
            yourCondition: 'YOUR CONDITION',
            appointment: 'APPOINTMENT'
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
        form: {
            step1: 'ඔබේ සම්පූර්ණ නම',
            step1Placeholder: 'උදා: Nimal Perera',
            step2: 'ඔබේ වයස',
            step2Placeholder: 'උදා: 25',
            step3: 'ඔබේ බර (kg)',
            step3Placeholder: 'උදා: 60',
            step4: 'ඔබට දැනෙන ප්රධාන ලක්ෂණය මොකක්ද?',
            step4Placeholder: 'ඔබට දැනෙන වේදනාව/අසනීපය විස්තර කරන්න...',
            step5: 'ඔබට වෛද්යවරයා හමුවීමට අවශ්ය කාලය',
            urgency1: '🔴 ඉක්මනින් (Urgent)',
            urgency2: '🟡 අද/හෙට',
            urgency3: '🟢 පසුව වෙලාවක්',
            price1: '2000 lkr',
            price2: '1500 lkr',
            price3: '1000 lkr',
            submit: 'WhatsApp මගින් යොමු කරන්න',
            yourInfo: 'ඔබේ තොරතුරු ලබා දෙන්න',
            yourCondition: 'ඔබේ රෝගී තත්වය',
            appointment: 'වෛද්ය හමුව'
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

    // Form initialization (Labels)
    const labelMapping = {
        'form-your-info': t.form.yourInfo,
        'form-label-name': t.form.step1,
        'form-label-age': t.form.step2,
        'form-label-weight': t.form.step3,
        'form-your-condition': t.form.yourCondition,
        'form-label-symptom': t.form.step4,
        'form-appointment': t.form.appointment,
        'form-label-urgency': t.form.step5,
        'label-urgency-1': t.form.urgency1,
        'label-urgency-2': t.form.urgency2,
        'label-urgency-3': t.form.urgency3,
        'price-1': t.form.price1,
        'price-2': t.form.price2,
        'price-3': t.form.price3,
        'submit-btn-text': t.form.submit
    };

    Object.keys(labelMapping).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.innerText = labelMapping[id];
    });

    const placeholders = {
        'patient-name': t.form.step1Placeholder,
        'patient-age': t.form.step2Placeholder,
        'patient-weight': t.form.step3Placeholder,
        'patient-symptom': t.form.step4Placeholder
    };

    Object.keys(placeholders).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.placeholder = placeholders[id];
    });

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

// FORM SUBMISSION LOGIC
window.submitIntake = function() {
    const name = document.getElementById('patient-name').value;
    const age = document.getElementById('patient-age').value;
    const weight = document.getElementById('patient-weight').value;
    const symptom = document.getElementById('patient-symptom').value;
    
    // Get urgency
    let urgency = 'Pසුව වෙලාවක් (Schedule later)';
    let price = '1000';
    
    if (document.getElementById('urgency-1').checked) {
        urgency = 'ඉක්මනින් (Urgent)';
        price = '2000';
    } else if (document.getElementById('urgency-2').checked) {
        urgency = 'අද/හෙට (Today/Tomorrow)';
        price = '1500';
    }

    if (!name || !age || !weight || !symptom) {
        alert(currentLang === 'en' ? 'Please fill all fields' : 'කරුණාකර සියලු විස්තර ලබා දෙන්න');
        return;
    }

    const message = `*New Consultation Request*
-------------------------
*Name:* ${name}
*Age:* ${age}
*Weight:* ${weight} kg
*Condition:* ${symptom}
*Urgency:* ${urgency} (${price} LKR)
-------------------------`;

    const encodedMsg = encodeURIComponent(message);
    window.location.href = `https://wa.me/94712653974?text=${encodedMsg}`;
}
