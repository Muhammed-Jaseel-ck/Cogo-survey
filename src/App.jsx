import React from 'react'

export default function App(){
const skills = ["Land Surveying","GPS & Total Station","DGPS / RTK","Leveling & Traversing","Topographic Survey","Construction Survey","Site Layout","As-Built Survey","AutoCAD","E-Survey","Earthwork Calculation","Legal Documentation"]

const services = [
  { title:"📍 Land Surveying", short:"For NHAI, PWD, KIIFB, private plots", points:["Land and plot measurement","Boundary survey and demarcation","Plot subdivision and re-survey","Area calculation in cents/acres/hectares","Property boundary marking"] },
  { title:"🏗️ Setting Out Survey", short:"Building, Highway, Bridge setting out", points:["Building and foundation setting out","Column and gridline marking","Road and bridge setting out for NHAI/PWD","Plot layout and alignment","Excavation level marking"] },
  { title:"📐 Topographic Survey", short:"For road, highway, site development", points:["Topographical land survey","Contour survey and mapping","Ground level and elevation survey","Natural and man-made feature mapping","Site development survey for construction"] },
  { title:"🗺️ CAD Drawing & Mapping", short:"AutoCAD & report preparation", points:["AutoCAD survey drawings","Plot plans and site layouts","Contour and topographic plans","Survey data processing in E-Survey/AutoCAD","Coordinate plotting and area calculations"] },
  { title:"📏 Levelling & Construction Survey", short:"Benchmark, RL, construction verification", points:["Benchmark establishment","Reduced level (RL) transfer","Elevation and slope checking","Excavation and filling level checks","Construction alignment verification"] },
  { title:"⭐ Additional Specialized", short:"Pipeline, Traverse, Earthwork", points:["Pipeline route and alignment surveys","Traverse survey and control network surveys","Volume and earthwork calculations","Drainage and utility surveys","Industrial and infrastructure layout surveys"] },
]

return(
<>
<style>{`
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');
*{margin:0;padding:0;box-sizing:border-box;font-family:'Outfit',sans-serif}
body{background:#fbf9f6;color:#111}
.nav{position:sticky;top:0;z-index:10;background:#fff;border-bottom:1px solid #eee;padding:14px 5%;display:flex;justify-content:space-between;align-items:center}
.logo{font-weight:800;font-size:22px}.logo span{color:#1a5c2a}
.badge{background:#1a5c2a;color:#fff;padding:6px 12px;border-radius:100px;font-size:11px;font-weight:700}
.btn{background:#1a5c2a;color:#fff;padding:10px 18px;border-radius:100px;font-weight:700;font-size:13px;border:none;text-decoration:none;display:inline-block;cursor:pointer}
.hero{padding:50px 5%;display:grid;grid-template-columns:1.2fr 0.8fr;gap:30px;background:linear-gradient(135deg,#fbf9f6,#eef6e4)}
.hero h1{font-size:54px;line-height:0.9;letter-spacing:-2px;font-weight:800}.hero h1 span{color:#1a5c2a}
.desc{color:#555;margin-top:12px;line-height:1.6;font-size:14px}
.stats{display:flex;gap:25px;margin-top:18px}.stats b{font-size:22px;color:#1a5c2a;display:block}.stats p{font-size:11px;color:#888;font-weight:600}
.card{background:#fff;border-radius:20px;padding:20px;border:1px solid #eee;box-shadow:0 10px 40px rgba(0,0,0,0.06)}
.pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.pills span{background:#f4efe6;border:1px solid #e8e0d0;padding:6px 10px;border-radius:100px;font-size:11px;font-weight:600}
.sec{padding:60px 5%}.sec h2{font-size:32px;text-align:center}.sub{text-align:center;color:#888;margin-top:6px;margin-bottom:25px}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.box{background:#fff;border:1px solid #f0e9dc;padding:18px;border-radius:16px;cursor:pointer;transition:all 0.3s ease}
.box:hover{border-color:#1a5c2a;transform:translateY(-4px);box-shadow:0 12px 30px rgba(26,92,42,0.15)}
.box h3{font-size:14px}.box:hover h3{color:#1a5c2a}
.box .short{font-size:12px;color:#777;margin-top:6px;line-height:1.5}
.box .points{max-height:0;opacity:0;overflow:hidden;transition:all 0.4s ease}
.box:hover .points{max-height:300px;opacity:1;margin-top:12px;border-top:1px solid #eee;padding-top:10px}
.box .points li{font-size:11px;color:#444;line-height:1.9;list-style:none;padding-left:14px;position:relative}
.box .points li::before{content:"•";position:absolute;left:0;color:#1a5c2a;font-weight:800}
.box .hint{font-size:10px;color:#aaa;margin-top:8px}.box:hover .hint{display:none}
.contact{background:#0f2815;color:#fff;padding:60px 5%;display:grid;grid-template-columns:1fr 0.8fr;gap:30px}
.form{background:#fff;color:#111;padding:20px;border-radius:16px}.form input{width:100%;padding:11px;border:1.5px solid #ddd;border-radius:10px;margin-bottom:10px}
footer{text-align:center;padding:14px;background:#0a1d0f;color:#6a8a6a;font-size:11px}
@media(max-width:900px){.hero{grid-template-columns:1fr}.hero h1{font-size:36px}.grid3{grid-template-columns:1fr}.contact{grid-template-columns:1fr}}
`}</style>

<nav className="nav">
  <div className="logo">JASEER CK <span>• FREELANCE SURVEYOR</span></div>
  <div style={{display:'flex',gap:8,alignItems:'center'}}>
    <span className="badge">AVAILABLE FOR PROJECTS</span>
    <a className="btn" href="https://wa.me/918156936607">Contact Me</a>
  </div>
</nav>

<section className="hero">
  <div>
    <p style={{background:'#fff',border:'1px solid #d7e8c8',display:'inline-block',padding:'6px 12px',borderRadius:'100px',fontSize:'11px',fontWeight:700,color:'#1a5c2a'}}>📍 FREELANCE • 8+ YEARS EXP </p>
    <h1>Freelance<br/><span>Land Surveyor</span></h1>
    <p className="desc">
      I am <b>Jaseer CK</b> — I work as <b>Freelance Land Surveyor</b>. Companies / Contractors can Connect me for daily / project basis.
      <br/><br/>
      <b>8+ years</b> experience in <b> Highway, PWD Roads, Bridges, Building projects</b>. I have my own equipment handling knowledge — Leica Total Station, DGPS/RTK, Auto Level, AutoCAD.
      <br/><br/>
      
    </p>
    <div className="stats">
      <div><b>8+</b><p>Years Exp</p></div>
      <div><b>500+</b><p>Sites Done</p></div>
      <div><b>100%</b><p>Accuracy</p></div>
    </div>
    <div style={{marginTop:'20px',display:'flex',gap:'10px',flexWrap:'wrap'}}>
      <a className="btn" href="https://wa.me/918156936607?text=Hi%20Jaseer,%20We%20need%20freelance%20surveyor%20for%20our%20project">📞 Contact Me - 8156936607</a>
      
    </div>
  </div>

  <div className="card">
    <div style={{display:'flex',gap:'12px',alignItems:'center'}}>
      <div style={{width:'50px',height:'50px',borderRadius:'50%',background:'#1a5c2a',color:'#fff',display:'grid',placeItems:'center',fontWeight:800}}>JC</div>
      <div><b>Jaseer CK</b><br/><small>Freelance Land Surveyor</small><br/><small style={{color:'#1a5c2a',fontWeight:700}}>Available for Work</small></div>
    </div>
    <hr style={{margin:'14px 0',border:'none',borderTop:'1px solid #eee'}}/>
    <b>✅ My Skills</b>
    <div className="pills">{skills.map(s=><span key={s}>{s}</span>)}</div>
    <div style={{marginTop:'14px',background:'#faf8f4',padding:'10px',borderRadius:'10px',fontSize:'11px',lineHeight:2}}>
      ✉️ jaseerjazz0@gmail.com<br/>📍 Malappuram, Kerala<br/>🗣️ English, Malayalam<br/>⏰ Daily / Project Basis
    </div>
  </div>
</section>

<section className="sec" style={{background:'#fff'}}>
  <h2>What I Can Do For Your Project</h2>
  <p className="sub">I am freelance worker — You can hire me — Hover on service to see details 👇</p>
  <div className="grid3">
    {services.map((s,i)=>(
      <div key={i} className="box">
        <h3>{s.title}</h3>
        <p className="short">{s.short}</p>
        <ul className="points">
          {s.points.map((p,idx)=><li key={idx}>{p}</li>)}
        </ul>
        <div className="hint">→ Hover to see my work</div>
      </div>
    ))}
  </div>
</section>

<section className="contact">
  <div>
    <h2 style={{fontSize:'34px'}}>Hire Me As Freelance Surveyor</h2>
    <p style={{color:'#a8c9a8',marginTop:'10px'}}>I am freelance worker — Not a company — You hire me directly for your site/project — Daily or project payment</p>
    <div style={{marginTop:'20px',lineHeight:2.2}}>
      <div>📞 +91 8156936607</div>
      <div>✉️ jaseerjazz0@gmail.com</div>
      <div>🔗 linkedin.com/in/jaseer-ck</div>
      <div>📍 Malappuram, Kerala</div>
    </div>
  </div>
  <div className="form">
    <h3>Connect With Me...</h3>
    <p style={{fontSize:'12px',color:'#777',margin:'6px 0 12px'}}>Company / Contractor can contact</p>
    <input id="name" placeholder="Your Company Name"/>
    <input id="place" placeholder="Project Type & Location"/>
    <button className="btn" style={{width:'100%',padding:'12px'}} onClick={()=>{const n=document.getElementById('name').value;const p=document.getElementById('place').value;window.open(`https://wa.me/918156936607?text=Hi%20Jaseer,%20I%20am%20${n}.%20Project:%20${p}.%20We%20want%20to%20hire%20you%20as%20freelance%20surveyor.`,'_blank')}}>Send WhatsApp to Hire Me</button>
  </div>
</section>

<footer>© 2026 Jaseer CK — Freelance Land Surveyor — Available for Projects — 8156936607</footer>
</>
)
}
