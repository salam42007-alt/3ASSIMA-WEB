// =======  mobile menu  =======
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

// =======  smooth scroll  =======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    if (id==='#') return;
    const el = document.querySelector(id);
    if (!el) return;
    if (!mobileMenu.classList.contains('hidden')) mobileMenu.classList.add('hidden');
    el.scrollIntoView({ behavior: 'smooth' });
  });
});

// =======  navbar color on scroll  =======
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(sec => {
    const off = sec.offsetTop - 100;
    if (scrollY >= off) cur = sec.getAttribute('id');
  });
  links.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === `#${cur}`) {
      l.classList.add('active');
      navbar.style.borderColor = l.dataset.color || 'rgba(255,255,255,.1)';
    }
  });
});

// =======  fill lists  =======
const rules = [
  "ممنوع سب و شتم",
  "ممنوع مضايقة الاخرين",
  "ممنوع تحدث عن أمور دينية",
  "ممنوع تحدث خارج Rp",
  "ممنوع مضايقة المسؤولين",
  "يمنع طلب الرتب او الكريدت",
  "ممنوع التكلم عن مدينة 🏙️ أخرى غير مدينتنا",
  "يمنع الإزعاج بالرومات الصوتية بأي شكل من أشكال",
  "يمنع إرسال صور أو ايموجيات مقرفة في الشات",
  "ممنوع نشر الشكاوي في الشات العام",
  "ممنوع وضع شعار سيرفر أو مدينة أخرى",
  "ممنوع ترويج لي سيرفرات و مدن آخرى هنا",
  "الالتزام بمحتوى الشات مثل (الشات العام للدردشة و شات الصور لصور فقط)"
];
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
  "/sell لبيع شيء",
  "/use repairkit لتصليح السيارات",
  "/give [ccp] (اسم الشيء)",
  "/vstash لفتح خزينه السيارات",
  "/buylevel لشراء مستوى الشخصي",
  "/locate لظهور GPS",
  "/skill لعرض مستواك في الأعمال",
  "/drop لرمي الأشياء في الأرض",
  "/quitjob تخرج من الخدمة",
  "/gang quit confirm تخرج من العصابة",
  "/faction quit confirm تخرج من عمل في إطار الحكومة",
  "/fiandcar لمعرفة مكان سيارتك",
  "/phone لرفع تيليفون",
  "/changepass لتغيير كلمة السر",
  "/buy شراء من المحل"
];

function fillList(id, items) {
  const ul = document.getElementById(id);
  items.forEach(i => {
    const li = document.createElement('li');
    li.textContent = '• ' + i;
    ul.appendChild(li);
  });
}
fillList('rules-list', rules);
fillList('commands-list', commands);

// =======  icons  =======
lucide.createIcons();
