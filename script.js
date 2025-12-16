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
document.getElementById('vip-card').textContent = "VIP: يستلم فلوس، يمكنه شراء سيارات منازل ومتاجر";
document.getElementById('admin-card').textContent = "MANAGER ADMIN: صلاحيات كاملة للتحكم بالأدمين وإدارة كل شيء داخل السيرفر";
