import React from 'react'

export default function App() {
  const skills = [
    "Land Surveying", "GPS & Total Station", "DGPS", "RTK", "Leveling",
    "Topographic Survey", "Construction Survey", "Site Layout", "As-Built Survey",
    "AutoCAD", "Survey Data Processing", "Legal Documentation"
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');
        *{margin:0; padding:0; box-sizing:border-box; font-family:'Outfit',sans-serif}
        body{background:#fbf9f6}
        .navbar{position:sticky; top:0; z-index:99; background:#fff; border-bottom:1px solid #eee; padding:14px 5%; display:flex; justify-content:space-between; align-items:center}
        .logo{font-weight:800; font-size:22px} .logo span{color:#1a5c2a}
        .badge-green{background:#e8f5d8; color:#1a5c2a; padding:6px 12px; border-radius:100px; font-size:11px; font-weight:700}
        .btn-dark{background:#1a5c2a; color:#fff; padding:10px 18px; border-radius:100px; font-weight:700; font-size:13px; border:none; cursor:pointer; text-decoration:none; display:inline-block}
        .btn-light{background:#fff; border:1.5px solid #1a5c2a; color:#1a5c2a; padding:10px 18px; border-radius:100px; font-weight:700; font-size:13px; text-decoration:none; display:inline-block}
        .big{padding:14px 22px}
        .hero{padding:50px 5%; display:grid; grid-template-columns:1.2fr 0.8fr; gap:40px; background:linear-gradient(135deg,#fbf9f6,#eef6e4)}
        .top-badge{background:#fff; border:1px solid #d7e8c8; color:#1a5c2a; display:inline-block; padding:7px 14px; border-radius:100px; font-size:11px; font-weight:700; margin-bottom:14px}
        .hero h1{font-size:62px; line-height:0.95; letter-spacing:-2px; font-weight:800} .hero h1 span{color:#1a5c2a}
        .desc{margin-top:14px; color:#555; line-height:1.6; font-size:15px; max-width:560px}
        .stats{display:flex; gap:30px; margin-top:22px} .stats b{font-size:24px; color:#1a5c2a} .stats p{font-size:11px; color:#888; font-weight:600; margin:0}
        .btns{display:flex; gap:12px; margin-top:22px; flex-wrap:wrap}
        .card-white{background:#fff; border-radius:22px; padding:22px; border:1px solid #eee; box-shadow:0 20px 60px rgba(0,0,0,0.07)}
        .profile-head{display:flex; gap:12px; align-items:center}
        .avatar{width:54px; height:54px; border-radius:50%; background:#1a5c2a; color:#fff; display:grid; place-items:center; font-weight:800}
        .green{color:#1a5c2a; font-weight:700}
        .card-white hr{border:none; border-top:1px solid #f0f0f0; margin:16px 0}
        .card-white h4{font-size:13px; margin-bottom:6px}
        .small{font-size:12px; color:#666; line-height:1.6}
        .pills{display:flex; flex-wrap:wrap; gap:8px; margin-top:10px}
        .pills span{background:#f4efe6; border:1px solid #e8e0d0; padding:6px 12px; border-radius:100px; font-size:11px; font-weight:600; display:inline-block}
        .mini-contact{margin-top:16px; background:#faf8f4; padding:12px; border-radius:12px; font-size:11px; line-height:2; color:#555}
        .services{padding:70px 5%; background:#fff; text-align:center}
        .services h2{font-size:36px} .sub{color:#888; margin-top:6px; margin-bottom:24px}
        .grid{display:grid; grid-template-columns:repeat(3,1fr); gap:16px; text-align:left}
        .s-card{background:#fbf9f6; border:1px solid #f0e9dc; padding:20px; border-radius:18px} .s-card h3{font-size:14px; margin-bottom:6px} .s-card p{font-size:13px; color:#777}
        .contact{background:#0f2815; color:#fff; padding:60px 5%; display:grid; grid-template-columns:1fr 0.8fr; gap:30px}
        .contact h2{font-size:38px} .lines{margin-top:20px; line-height:2.2; font-size:14px}
        .form{background:#fff; color:#111; padding:22px; border-radius:18px}
        .form input{width:100%; padding:12px; border-radius:10px; border:1.5px solid #e5e5e5; margin-bottom:10px; font-size:13px}
        .form button{width:100%; padding:12px; border-radius:10px; border:none; background:#1a5c2a; color:#fff; font-weight:700; cursor:pointer}
        footer{text-align:center; padding:16px; background:#0a1d0f; color:#5a7a5a; font-size:11px}
        @media(max-width:900px){ .hero{grid-template-columns:1fr} .hero h1{font-size:42px} .grid{grid-template-columns:1fr} .contact{grid-template-columns:1fr} }
      `}</style>

      <nav className="navbar">
        <div className="logo">COGO <span>SURVEY</span></div>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <span className="badge-green">OPEN TO GCC</span>
          <a className="btn-dark" href="https://wa.me/918156936607">WhatsApp</a>
        </div>
      </nav>

      <section className="hero">
        <div>
          <p className="top-badge">📍 MALAPPURAM • KANHANGAD • 8+ YEARS EXP</p>
          <h1>Jaseer CK<br/><span>Land Surveyor</span></h1>
          <p className="desc">
            <b>Dedicated Land Surveyor with 8+ years</b> in Highway, Bridge, Road & Building projects. 
            Currently at <b>Focus Surveys (Feb 2019 - Present)</b> for NHAI, PWD, KIIFB with mm/cm accuracy. 
            Previously Ruby Soft Tech (2017-2019).
          </p>
          <div className="stats">
            <div><b>8+</b><p>Years</p></div>
            <div><b>2019</b><p>Present Focus</p></div>
            <div><b>NH/PWD</b><p>KIIFB Projects</p></div>
          </div>
          <div className="btns">
            <a className="btn-dark big" href="https://wa.me/918156936607?text=Hi%20Jaseer%20CK">📞 8156936607</a>
            <a className="btn-light" href="https://www.linkedin.com/in/jaseer-ck" target="_blank">LinkedIn</a>
          </div>
        </div>

        <div className="card-white">
          <div className="profile-head">
            <div className="avatar">JC</div>
            <div><b>Jaseer CK</b><br/><small>Professional Land Surveyor</small><br/><small className="green">7 yrs 9 mos • Current</small></div>
          </div>
          <hr/>
          <h4>🛰️ Equipment & Software</h4>
          <p className="small">Leica Total Station, Topcon, DGPS/RTK, Auto Level, GPS<br/>AutoCAD, E-Survey, Earthwork & Contour</p>
          <hr/>
          <h4>✅ Top Skills — Endorsed</h4>
          <div className="pills">
            {skills.map(s => <span key={s}>{s}</span>)}
          </div>
          <div className="mini-contact">
            ✉️ jaseerjazz0@gmail.com<br/>📍 Chalili Kizhakkethalappil, Kanhangad<br/>🗣️ English, Malayalam, Hindi, Tamil, Arabic
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Services That Build Trust</h2>
        <p className="sub">From National Highway to house plot — same accuracy</p>
        <div className="grid">
          <div className="s-card"><h3>🛰️ DGPS / RTK / GPS</h3><p>High-accuracy GNSS RTK operations.</p></div>
          <div className="s-card"><h3>📐 Total Station</h3><p>Leica & Topcon operations & processing.</p></div>
          <div className="s-card"><h3>📏 Leveling</h3><p>Precise leveling & traversing.</p></div>
          <div className="s-card"><h3>🛣️ Topographic & Construction</h3><p>Road, bridge, earthwork survey.</p></div>
          <div className="s-card"><h3>🏗️ Site Layout & As-Built</h3><p>Setting out & handover drawings.</p></div>
          <div className="s-card"><h3>📄 AutoCAD & Compliance</h3><p>AutoCAD & legal documentation.</p></div>
        </div>
      </section>

      <section className="contact">
        <div>
          <h2>Hire Jaseer CK</h2>
          <p style={{color:'#a8c9a8', marginTop:10}}>Willing to relocate to UAE, Saudi, Qatar, Oman.</p>
          <div className="lines">
            <div>📞 8156936607</div>
            <div>📧 jaseerjazz0@gmail.com</div>
            <div>🔗 linkedin.com/in/jaseer-ck</div>
            <div>📍 Malappuram / Kanhangad</div>
          </div>
        </div>
        <div className="form">
          <h3>Contact on WhatsApp</h3>
          <input id="name" placeholder="Your Name / Company" />
          <input id="place" placeholder="Place / Country" />
          <button onClick={()=>{const n=document.getElementById('name').value; const p=document.getElementById('place').value; window.open(`https://wa.me/918156936607?text=Hi%20Jaseer,%20I%20am%20${n}%20from%20${p}`,'_blank')}}>Send WhatsApp</button>
        </div>
      </section>
      <footer>© 2026 COGO SURVEY — Jaseer CK — 8156936607</footer>
    </>
  )
}
