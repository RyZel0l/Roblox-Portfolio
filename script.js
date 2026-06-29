const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

const darkMode = document.getElementById('darkmode');
const Light = document.getElementById('Light')

const video = document.querySelector(".VS-container");

video.addEventListener("volumechange", () => {
    video.muted = true;
    video.volume = 0;
});

var isDarkMode = false;

Light.addEventListener('click', () => {
  if ( isDarkMode != false )
    window.location.reload()
})

darkMode.addEventListener('click', () => {
  isDarkMode = true
  document.body.style.backgroundColor = '#272727';
  Light.style.backgroundColor = 'gray'
  darkMode.style.backgroundColor = 'gray' 

  tabs.forEach(tab => {
    tab.style.backgroundColor = 'gray';
  });
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach((t) => t.classList.remove('active'));
    contents.forEach((c) => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});