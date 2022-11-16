// ----- Chamber Meeting ------ //
const d = new Date();
const today = d.getDay();
const banner = document.querySelector('#greet');

if (today === 1 || today === 2) {
  join_banner = document.createElement('p');
  join_banner.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  banner.append(join_banner);
};