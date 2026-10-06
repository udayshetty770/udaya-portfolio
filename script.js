const menuToggle=document.querySelector(".menu-toggle");
const navLinks=document.querySelector(".nav-links");
const progress=document.querySelector(".scroll-progress");

menuToggle?.addEventListener("click",()=>{
  const open=navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  navLinks.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded","false");
}));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const updateProgress=()=>{
  const scrollTop=window.scrollY;
  const height=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=(height>0?(scrollTop/height)*100:0)+"%";
};
window.addEventListener("scroll",updateProgress,{passive:true});
updateProgress();

document.getElementById("year").textContent=new Date().getFullYear();
