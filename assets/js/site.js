const DATA_BASE = '/assets/data/';
function lang(){return (location.pathname.split('/')[1]||'uk').replace(/[^a-z]/g,'') || 'uk'}
function t(uk,en){return lang()==='en'?en:uk}
async function loadJSON(name){const r=await fetch(DATA_BASE+name,{cache:'no-store'}); if(!r.ok) throw new Error(name); return await r.json()}
function pageName(){let p=location.pathname.split('/').pop(); return p||'index.html'}
function setLanguageLinks(){document.querySelectorAll('[data-lang-target]').forEach(a=>{const code=a.dataset.langTarget; const page=pageName(); a.href='/' + code + '/' + (page==='index.html'?'':page);});}
async function renderSupportSummary(){const el=document.querySelector('[data-support-summary]'); if(!el)return; const d=await loadJSON('support.json'); const pct=d.goal?Math.min(100,Math.round((d.raised/d.goal)*100)):0; el.innerHTML=`<div class="card"><div class="card-body"><div class="d-flex justify-content-between align-items-center mb-2"><strong>${t('Збір на лікування','Treatment fundraiser')}</strong><span class="badge text-bg-primary">${pct}%</span></div><div class="progress mb-3"><div class="progress-bar" style="width:${pct}%"></div></div><div class="row g-2"><div class="col-6"><div class="small-muted">${t('Необхідно','Goal')}</div><div class="h5 mb-0">${d.goal.toLocaleString()} ${d.currency}</div></div><div class="col-6"><div class="small-muted">${t('Зібрано','Raised')}</div><div class="h5 mb-0">${d.raised.toLocaleString()} ${d.currency}</div></div></div><p class="small-muted mt-3 mb-0">${lang()==='en'?d.note_en:d.note_uk}</p></div></div>`}
async function renderSupportMethods(){
  const el=document.querySelector('[data-support-methods]');
  if(!el)return;

  const d=await loadJSON('support.json');
  const methods=(d.methods||[])
    .filter(m=>m.enabled)
    .sort((a,b)=>(a.priority??999)-(b.priority??999));

  const getLocalized=(obj,key)=>obj[`${key}_${lang()}`]??obj[`${key}_uk`]??obj[key]??'';
  const escapeAttr=value=>String(value??'')
    .replace(/&/g,'&amp;')
    .replace(/"/g,'&quot;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');

  const renderAction=m=>{
    // Backward compatibility with the older support.json format.
    const action=m.action||{
      type:m.type==='url'?'link':(m.type?'copy':'text'),
      value:m.value||''
    };
    const type=action.type||'text';
    const value=action.value??'';
    const label=getLocalized(action,'label')||t('Відкрити','Open');

    if(type==='link'){
      return `<a class="btn btn-primary w-100" href="${escapeAttr(value)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    if(type==='copy'){
      return `<button class="btn btn-outline-primary w-100" type="button" data-copy="${escapeAttr(value)}" data-label="${escapeAttr(label)}">${label}</button>`;
    }
    if(type==='mailto'){
      return `<a class="btn btn-outline-primary w-100" href="mailto:${escapeAttr(value)}">${label||t('Написати','Email')}</a>`;
    }
    if(type==='download'){
      return `<a class="btn btn-outline-primary w-100" href="${escapeAttr(value)}" download>${label||t('Завантажити','Download')}</a>`;
    }
    // "text" or an unknown type intentionally renders no action button.
    return '';
  };

  el.innerHTML=methods.map(m=>{
    const title=getLocalized(m,'title');
    const description=getLocalized(m,'description');
    const display=getLocalized(m,'display');
    return `<div class="col-md-6 col-lg-4">
      <div class="card support-method h-100">
        <div class="card-body d-flex flex-column">
          <div class="h5"><i class="${escapeAttr(m.icon||'fa-solid fa-circle-info')} me-2 text-primary"></i>${title}</div>
          ${description?`<p class="small-muted mb-2">${description}</p>`:''}
          ${display?`<div class="copy-value small-muted mb-3">${display}</div>`:''}
          <div class="mt-auto">${renderAction(m)}</div>
        </div>
      </div>
    </div>`;
  }).join('');

  document.querySelectorAll('[data-copy]').forEach(button=>{
    button.addEventListener('click',async()=>{
      const originalLabel=button.dataset.label||button.textContent;
      try{
        await navigator.clipboard.writeText(button.dataset.copy||'');
        button.textContent=t('Скопійовано','Copied');
      }catch(error){
        console.error('Copy failed',error);
        button.textContent=t('Не вдалося скопіювати','Copy failed');
      }
      setTimeout(()=>{button.textContent=originalLabel;},1400);
    });
  });
}
async function renderTimeline(){const el=document.querySelector('[data-timeline]'); if(!el)return; const d=await loadJSON('timeline-master.json'); el.innerHTML=`<div class="timeline">`+d.map(x=>`<div class="timeline-item"><span class="timeline-dot"></span><span class="badge badge-year mb-2">${x.date}</span><h3 class="h5">${lang()==='en'?x.title_en:x.title_uk}</h3><p>${lang()==='en'?x.text_en:x.text_uk}</p></div>`).join('')+`</div>`}
async function renderDocuments(){const el=document.querySelector('[data-documents]'); if(!el)return; const docs=await loadJSON('documents.json'); const years=[...new Set(docs.map(d=>d.year))].sort(); el.innerHTML=years.map(y=>`<section class="mb-5 anchor-offset" id="year-${y}"><h2 class="h3 doc-year mb-3">${y}</h2><div class="row g-3">${docs.filter(d=>d.year===y).map(d=>`<div class="col-md-6 col-lg-4"><div class="card doc-card h-100"><div class="card-body"><div class="small-muted mb-1">${d.date} · ${lang()==='en'?d.category_en:d.category_uk}</div><h3 class="h6">${lang()==='en'?d.title_en:d.title_uk}</h3><p class="small-muted">${lang()==='en'?d.summary_en:d.summary_uk}</p><a class="btn btn-sm btn-outline-primary" href="/${d.file}" target="_blank" rel="noopener">${t('Переглянути','View')}</a></div></div></div>`).join('')}</div></section>`).join('')}
async function renderUpdates(){const el=document.querySelector('[data-updates]'); if(!el)return; const d=await loadJSON('updates.json'); el.innerHTML=d.map(u=>`<div class="card mb-3"><div class="card-body"><div class="small-muted">${u.date}</div><h2 class="h5">${lang()==='en'?u.title_en:u.title_uk}</h2><p class="mb-0">${lang()==='en'?u.text_en:u.text_uk}</p></div></div>`).join('')}
function activeNav(){
  const current=pageName();
  document.querySelectorAll('.nav-link[href], .dropdown-item[href]').forEach(a=>{
    if(a.getAttribute('href')===current){
      a.classList.add('active');
      a.setAttribute('aria-current','page');
      const dropdown=a.closest('.dropdown');
      const toggle=dropdown?.querySelector('.dropdown-toggle');
      if(toggle)toggle.classList.add('active');
    }
  });
}
document.addEventListener('DOMContentLoaded',()=>{setLanguageLinks();activeNav();renderSupportSummary();renderSupportMethods();renderTimeline();renderDocuments();renderUpdates();});
