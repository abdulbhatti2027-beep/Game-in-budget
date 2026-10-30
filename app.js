const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => {const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open));menu.textContent = open ? '×' : '☰';});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#brief').addEventListener('submit', e => {e.preventDefault();const d=new FormData(e.target);const body=`Hello Game in Budget,\n\nName: ${d.get('name')}\nEmail: ${d.get('email')}\nProject: ${d.get('type')}\nBudget: ${d.get('budget') || 'To discuss'}\n\nMy idea:\n${d.get('idea')}`;window.location.href='mailto:abdulbhatti2027@gmail.com?subject='+encodeURIComponent('Project enquiry: '+d.get('type'))+'&body='+encodeURIComponent(body);document.querySelector('#form-status').textContent='Your brief is ready in your email app. If it did not open, email us directly or contact us on WhatsApp.';});
