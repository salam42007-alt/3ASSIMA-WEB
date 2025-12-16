// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// القوانين
const rules = [
    "ممنوع سب و شتم",
    "ممنوع مضايقة الاخرين",
    "ممنوع تحدث عن أمور دينية",
    "ممنوع تحدث خارج Rp",
    "ممنوع مضايقة المسؤولين",
    "يمنع طلب الرتب او الكريدت",
    "ممنوع التكلم عن مدينة اخرى غير مدينتنا",
    "يمنع الإزعاج بالرومات الصوتية بأي شكل من أشكال",
    "يمنع إرسال صور أو ايموجيات مقرفة في الشات",
    "ممنوع نشر الشكاوي في الشات العام",
    "ممنوع وضع شعار سيرفر أو مدينة أخرى",
    "ممنوع ترويج لسيرفرات ومدن أخرى هنا",
    "الالتزام بمحتوى شات مثل الشات العام للدردشة وشات الصور لصور فقط"
];

const rulesList = document.getElementById('rules-list');
rules.forEach(rule => {
    const li = document.createElement('li');
    li.textContent = rule;
    rulesList.appendChild(li);
});

// الأوامر
const commands = [
    "/location أمر تحديد موقع العمل",
    "/Showid [ccp] أمر إعطاء بطاقة تعريف الوطنية",
    "/Pay [ccp] (المبلغ) أمر إعطاء المال",
    "/handsup لرفع يديك",
    "/Fixvw اذا كنت لا ترا اللاعبين",
    "/Lock لقفل وفتح سيارتك",
    "/join أمر لتعمل",
    "/Buyhouse لشراء منزل",
    "/Buyvehicle لشراء سيارة من معرض",
    "/inf لمعرفة ماذا تحمل معك",
    "/Stuck اذا كنت معلق",
    "/rdm لطب ادمن",
    "/quitjob تخرج من العمل",
    "/inv حقيبة",
    "/buy لشراء شئ من متجر",
    "/sell لي بيع شيء",
    "/use repairkit لتصليح السيارات",
    "/give [ccp] (اسم الشيء)",
    "/vstash لفتح خزينت السيارات",
    "/buylevel لشراء مستوى الشخصي",
    "/locate لظهر ال GPS",
    "/skill لظهر مستواك في العمل",
    "/drop لرمي الاشياء في الأرض",
    "/quitjob تخرج من خدمة",
    "/gang quit confirm تخرج من العصابة",
    "/faction quit confirm تخرج من عمل في إطار الحكومة",
    "/fiandcar معرفة مكان سيارتك",
    "/phone ترفد تيليفون",
    "/changepass لتغيير كلمة السر",
    "/buy شراء من المحل"
];

const commandsList = document.getElementById('commands-list');
commands.forEach(command => {
    const li = document.createElement('li');
    li.textContent = command;
    commandsList.appendChild(li);
});

// الرتب
document.getElementById('vip-card').innerHTML = `
    <h3 class="text-2xl font-bold mb-2 text-yellow-400">VIP</h3>
    <div class="text-xl font-bold text-white mb-2">يحصل على فلوس ويستفيد من المزايا</div>
    <ul class="space-y-3 text-gray-300">
        <li>اسم ملون</li>
        <li>دخول السيرفر الممتلئ</li>
        <li>خيارات خاصة في المتجر</li>
    </ul>
`;

document.getElementById('admin-card').innerHTML = `
    <h3 class="text-2xl font-bold mb-2 text-red-500">MANAGER ADMIN</h3>
    <div class="text-xl font-bold text-white mb-2">صلاحيات كاملة للتحكم بالأدمين</div>
    <ul class="space-y-3 text-gray-300">
        <li>تحكم كامل بالرتب</li>
        <li>إدارة السيرفر</li>
        <li>إضافة وحذف أعضاء</li>
    </ul>
`;
