import React from 'react'

export default function App(){
const skills = ["Land Surveying","GPS & Total Station","DGPS / RTK","Leveling","Topographic","Construction Survey","Site Layout","AutoCAD","E-Survey","Earthwork"]

const services = [
  { n:"01", t:"Land Surveying", d:"NHAI / PWD / KIIFB & private plots", l:["Land and plot measurement","Boundary demarcation","Plot subdivision & re-survey","Area calculation (cents/acres)","Property boundary marking"] },
  { n:"02", t:"Setting Out Survey", d:"Building / Highway / Bridge", l:["Building & foundation setting out","Column & gridline marking","Road & bridge setting out","Plot layout & alignment","Excavation level marking"] },
  { n:"03", t:"Topographic Survey", d:"Road & site development", l:["Topographical land survey","Contour survey & mapping","Ground level & elevation","Natural & man-made feature mapping","Site development survey"] },
  { n:"04", t:"CAD Drawing & Mapping", d:"AutoCAD & reports", l:["AutoCAD survey drawings","Plot plans & site layouts","Contour & topographic plans","E-Survey data processing","Coordinate plotting & area calc"] },
  { n:"05", t:"Levelling & Construction", d:"Benchmark & RL verification", l:["Benchmark establishment","Reduced level (RL) transfer","Elevation & slope checking","Excavation & filling checks","Construction alignment verification"] },
]

return(
<>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Outfit:wght@400;600&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0f0e2e;color:#fff;font-family:'Outfit',sans-serif;overflow-x:hidden}
h1,h2,h3,b{font-family:'Space Grotesk',sans-serif}

/* NAV */
.nav{position:sticky;top:0;z-index:20;backdrop-filter:blur(20px);background:rgba(15,14,46,0.8);border-bottom:1px solid rgba(99,102,241,0.2);padding:16px 6%;display:flex;justify-content:space-between;align-items:center}
.logo{font-weight:700;font-size:14px;letter-spacing:2px}.logo i{font-style:normal;color:#818cf8}
.nav-links{display:flex;gap:20px;align-items:center;font-size:12px;letter-spacing:1px;color:#a5b4fc}
.btn-white{background:#fff;color:#0f0e2e;padding:10px 20px;border-radius:100px;font-weight:700;font-size:12px;letter-spacing:0.5px;text-decoration:none;transition:all 0.3s}
.btn-white:hover{background:#e0e7ff;transform:translateY(-1px);box-shadow:0 10px 30px rgba(255,255,255,0.15)}

/* HERO */
.hero{padding:80px 6% 60px;display:grid;grid-template-columns:1.1fr 0.9fr;gap:50px;position:relative;background:radial-gradient(600px at 20% 10%,rgba(99,102,241,0.25),transparent),#0f0e2e}
.hero-badge{border:1px solid rgba(129,140,248,0.3);background:rgba(99,102,241,0.1);color:#a5b4fc;padding:6px 14px;border-radius:100px;font-size:10px;letter-spacing:1.5px;display:inline-block;margin-bottom:18px}
.hero h1{font-size:72px;line-height:0.85;letter-spacing:-3px;font-weight:700}.hero h1 em{font-style:normal;color:#818cf8;display:block}
.hero-desc{color:#a5b4fc;line-height:1.7;font-size:14px;margin-top:20px;max-width:480px}
.hero-desc strong{color:#fff}
.stats{display:flex;gap:30px;margin-top:30px;border-top:1px solid rgba(99,102,241,0.2);padding-top:20px;max-width:380px}
.stats div b{font-size:28px;color:#fff;display:block}.stats div p{font-size:10px;letter-spacing:1px;color:#818cf8;margin-top:4px}

/* RIGHT CARD - GLASS */
.glass{background:linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03));border:1px solid rgba(255,255,255,0.1);backdrop-filter:blur(20px);border-radius:24px;padding:24px}
.glass-top{display:flex;gap:14px;align-items:center}
.avatar{width:54px;height:54px;border-radius:14px;background:#fff;color:#0f0e2e;display:grid;place-items:center;font-weight:700;font-size:18px}
.pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:18px}
.pills span{background:rgba(99,102,241,0.15);border:1px solid rgba(99,102,241,0.25);color:#c7d2fe;padding:7px 12px;border-radius:100px;font-size:10px;letter-spacing:0.5px}
.info-box{margin-top:18px;background:rgba(0,0,0,0.3);border:1px solid rgba(99,102,241,0.2);border-radius:14px;padding:12px 14px;font-size:11px;line-height:2;color:#a5b4fc}
.info-box b{color:#fff}

/* SERVICES */
.services{padding:80px 6%;background:#0f0e2e;position:relative}
.section-head{text-align:left;max-width:1200px;margin:0 auto 40px;display:flex;justify-content:space-between;align-items:end}
.section-head h2{font-size:42px;letter-spacing:-1px;line-height:0.9}.section-head h2 i{font-style:normal;color:#818cf8}
.section-head p{color:#818cf8;font-size:12px;letter-spacing:1px;max-width:260px;line-height:1.6}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1200px;margin:0 auto}
.s-card{position:relative;background:linear-gradient(180deg,#1e1b4b,#16144a);border:1px solid rgba(99,102,241,0.2);border-radius:20px;padding:22px;min-height:210px;overflow:hidden;transition:all 0.4s cubic-bezier(0.16,1,0.3,1);cursor:pointer}
.s-card:hover{transform:translateY(-6px) scale(1.01);border-color:#818cf8;box-shadow:0 20px 60px rgba(99,102,241,0.3);background:linear-gradient(180deg,#25207a,#1e1b4b)}
.s-num{font-size:11px;letter-spacing:2px;color:#6366f1;font-weight:700;margin-bottom:10px}
.s-card h3{font-size:18px;line-height:1.1;color:#fff}
.s-card .s-short{font-size:11px;color:#818cf8;margin-top:8px;letter-spacing:0.3px;line-height:1.5;transition:all 0.3s}
.s-card:hover .s-short{opacity:0;transform:translateY(-5px);height:0;margin:0;overflow:hidden}
.s-list{max-height:0;opacity:0;transform:translateY(10px);transition:all 0.45s cubic-bezier(0.16,1,0.3,1);overflow:hidden}
.s-card:hover .s-list{max-height:300px;opacity:1;transform:translateY(0);margin-top:14px;border-top:1px solid rgba(99,102,241,0.3);padding-top:12px}
.s-list li{font-size:12px;color:#e0e7ff;line-height:2;list-style:none;display:flex;gap:8px}
.s-list li:before{content:"—";color:#818cf8}
.s-hint{position:absolute;bottom:14px;right:16px;font-size:9px;letter-spacing:1px;color:rgba(255,255,255,0.3)}.s-card:hover .s-hint{opacity:0}

/* CONTACT */
.contact{padding:60px 6%;background:linear-gradient(180deg,#0f0e2e,#0a0a23);border-top:1px solid rgba(99,102,241,0.15);display:grid;grid-template-columns:1fr 0.9fr;gap:40px;max-width:1200px;margin:0 auto}
.contact h2{font-size:42px;line-height:0.9;letter-spacing:-1px}.contact h2 i{font-style:normal;color:#818cf8}
.contact-form{background:#fff;border-radius:20px;padding:22px;color:#0f0e2e}
.contact-form input{width:100%;padding:14px 16px;border:1px solid #e0e7ff;border-radius:12px;margin-bottom:12px;font-size:13px;background:#f8f7ff;outline:none;transition:border 0.3s}
.contact-form input:focus{border-color:#6366f1}
.btn-dark{background:#0f0e2e;color:#fff;width:100%;padding:14px;border-radius:12px;border:none;font-weight:700;font-size:12px;letter-spacing:1px;cursor:pointer;transition:all 0.3s}
.btn-dark:hover{background:#1e1b4b;transform:translateY(-1px)}

footer{padding:20px 6%;background:#08071c;border-top:1px solid rgba(99,102,241,0.15);display:flex;justify-content:space-between;color:#6366f1;font-size:10px;letter-spacing:1px}

@media(max-width:900px){
.hero{grid-template-columns:1fr;padding:50px 6%}.hero h1{font-size:48px}.grid{grid-template-columns:1fr}.section-head{flex-direction:column;align-items:start;gap:12px}.contact{grid-template-columns:1fr}.nav-links{display:none}
}
`}</style>

<nav className="nav">
  <div className="logo">JASEER CK <i>• SURVEYOR</i></div>
  <div className="nav-links">
    <span>8+ YEARS • 500+ SITES</span>
    <a className="btn-white" href="https://wa.me/918156936607">CONTACT ME →</a>
  </div>
</nav>

<section className="hero">
  <div>
    <div className="hero-badge">FREELANCE LAND SURVEYOR • AVAILABLE FOR PROJECTS</div>
    <h1>Precise <em>Surveying</em> For Big Projects</h1>
    <p className="hero-desc">
      I'm <strong>Jaseer CK</strong> — freelance surveyor trusted by contractors for <strong>NHAI Highway, PWD Roads, KIIFB Bridges & Building projects</strong>. I provide mm-accuracy with Leica Total Station, DGPS/RTK & AutoCAD.
      <br/><br/>Hire me daily / project basis — Open to <strong>UAE, Saudi, Qatar, Oman.</strong>
    </p>
    <div className="stats">
      <div><b>8+</b><p>YEARS EXP</p></div>
      <div><b>500+</b><p>SITES DONE</p></div>
      <div><b>100%</b><p>ACCURACY</p></div>
    </div>
    <div style={{marginTop:'28px',display:'flex',gap:'12px'}}>
      <a className="btn-white" href="https://wa.me/918156936607?text=Hi%20Jaseer,%20Need%20freelance%20surveyor">📞 8156936607</a>
      <span style={{color:'#818cf8',fontSize:'11px',alignSelf:'center',letterSpacing:'1px'}}>MALAPPURAM • KERALA • GCC OPEN</span>
    </div>
  </div>

  <div className="glass">
    <div className="glass-top">
      <div className="avatar">JC</div>
      <div>
        <b style={{color:'#fff',fontSize:'15px'}}>Jaseer CK</b><br/>
        <small style={{color:'#a5b4fc',letterSpacing:'1px',fontSize:'10px'}}>FREELANCE SURVEYOR • AVAILABLE</small>
      </div>
      <div style={{marginLeft:'auto',width:'8px',height:'8px',background:'#22c55e',borderRadius:'50%',boxShadow:'0 0 10px #22c55e'}}></div>
    </div>
    <div className="pills">
      {skills.map(s=><span key={s}>{s}</span>)}
    </div>
    <div className="info-box">
      <b>✉️</b> jaseerjazz0@gmail.com<br/>
      <b>📍</b> Malappuram, Kerala — Open to GCC<br/>
      <b>⏰</b> Daily / Project Basis • Direct Hire
    </div>
  </div>
</section>

<section className="services">
  <div className="section-head">
    <h2>What I Can Do<br/><i>For Your Project</i></h2>
    <p>HOVER ON CARD TO SEE DETAILS — I AM FREELANCE WORKER, YOU CAN HIRE ME DIRECTLY</p>
  </div>
  <div className="grid">
    {services.map((s)=>(
      <div key={s.n} className="s-card">
        <div className="s-num">{s.n} — SERVICE</div>
        <h3>{s.t}</h3>
        <div className="s-short">{s.d}</div>
        <ul className="s-list">
          {s.l.map((p,i)=><li key={i}>{p}</li>)}
        </ul>
        <div className="s-hint">HOVER →</div>
      </div>
    ))}
  </div>
</section>

<section className="contact">
  <div>
    <h2>Let's Work<br/><i>Together</i></h2>
    <p style={{color:'#a5b4fc',marginTop:'14px',lineHeight:1.6,fontSize:'13px',maxWidth:'360px'}}>I am freelance worker — Not an agency. Companies / Contractors hire me directly. Daily or project payment, no commission.</p>
    <div style={{marginTop:'24px',lineHeight:2.2,color:'#e0e7ff',fontSize:'13px'}}>
      <div>📞 +91 8156936607</div>
      <div>✉️ jaseerjazz0@gmail.com</div>
      <div>🔗 linkedin.com/in/jaseer-ck</div>
    </div>
  </div>
  <div className="contact-form">
    <b style={{fontSize:'14px'}}>Connect With Me</b>
    <p style={{fontSize:'11px',color:'#6366f1',margin:'6px 0 16px',letterSpacing:'0.5px'}}>COMPANY / CONTRACTOR CAN CONTACT</p>
    <input id="name" placeholder="Your Company Name"/>
    <input id="place" placeholder="Project Type & Location (e.g. NHAI Road in Kasaragod)"/>
    <button className="btn-dark" onClick={()=>{const n=document.getElementById('name').value;const p=document.getElementById('place').value;window.open(`https://wa.me/918156936607?text=Hi%20Jaseer,%20I%20am%20${n}.%20Project:%20${p}.%20We%20want%20to%20hire%20you%20as%20freelance%20surveyor.`,'_blank')}}>SEND WHATSAPP →</button>
    <p style={{fontSize:'10px',color:'#999',marginTop:'10px',textAlign:'center',letterSpacing:'0.5px'}}>REPLY IN 5 MINUTES • DIRECT HIRE</p>
  </div>
</section>

<footer>
  <span>© 2026 JASEER CK — FREELANCE SURVEYOR</span>
</footer>
</>
)
}
