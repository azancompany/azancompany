
// تبديل قائمة الجوال
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}
// تغيير لون الهيدر عند التمرير
window.addEventListener('scroll', () => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  header.style.background = window.scrollY > 10 ? '#fafafa' : '#fff';
});
