(async function(){
  const fallback='en', def='uk';
  try{const saved=localStorage.getItem('language'); if(saved){location.replace('/'+saved+'/'); return}}
  catch(e){}
  const nav=(navigator.language||navigator.userLanguage||def).slice(0,2).toLowerCase();
  const supported=['uk','en'];
  location.replace('/'+(supported.includes(nav)?nav:fallback)+'/');
})();
