// Mesa.dev — geolocalização por IP: moeda (mesmo valor, símbolo diferente) + idioma padrão
(function(){
  const PRICES = { p1: 600, p2: 1000, p3: 2500 }; // Aperitivo, Prato Principal, Banquete

  // moeda por país — sem conversão, só troca o símbolo. Países fora da lista usam EUR.
  const COUNTRY_CURRENCY = { GB: 'gbp' };
  const SYMBOL = { eur: '€', gbp: '£' };

  // idioma por país — foco inicial em UK/PT/ES; os demais reaproveitam dicionários já
  // existentes no site quando fizer sentido. Países fora da lista não mexem no idioma
  // (mantém a lógica de idioma do navegador que já existia).
  const COUNTRY_LANG = {
    GB: 'en', IE: 'en',
    PT: 'pt',
    ES: 'es',
    BR: 'pt-br',
    US: 'en-us',
    DE: 'de', AT: 'de', CH: 'de',
    IT: 'it',
    SE: 'sv'
  };

  function fmt(key, currency){
    const amount = PRICES[key];
    if(amount === undefined) return '';
    // separador de milhar fixo (não depende da config. de idioma do navegador do
    // visitante): ponto pro euro (padrão PT/ES), vírgula pra libra (padrão UK)
    const sep = currency === 'gbp' ? ',' : '.';
    const withSep = String(amount).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    return SYMBOL[currency] + withSep;
  }

  function applyPrices(currency){
    document.querySelectorAll('[data-price]').forEach(el=>{
      const key = el.getAttribute('data-price');
      if(PRICES[key] === undefined) return;
      const suffix = el.getAttribute('data-price-suffix') || '';
      el.textContent = fmt(key, currency) + suffix;
    });
    // se a página usa o sistema de i18n com molde {P} (planos.html), re-renderiza
    if(typeof window.applyLang === 'function' && window.currentLang){
      window.applyLang(window.currentLang);
    }
  }

  window.MesaDevCurrency = {
    current: 'eur',
    format: function(key){ return fmt(key, this.current); },
    apply: applyPrices
  };

  (async function detectAndApply(){
    let currency = 'eur';
    let countryLang = null;
    let country;

    try{ country = localStorage.getItem('mesaDevCountry'); }catch(e){}

    if(!country){
      try{
        const res = await fetch('https://ipapi.co/json/');
        if(res.ok){
          const data = await res.json();
          if(data && data.country_code){
            country = data.country_code;
            try{ localStorage.setItem('mesaDevCountry', country); }catch(e){}
          }
        }
      }catch(e){ /* API indisponível — segue com EUR e sem forçar idioma */ }
    }

    if(country){
      currency = COUNTRY_CURRENCY[country] || 'eur';
      countryLang = COUNTRY_LANG[country] || null;
    }

    window.MesaDevCurrency.current = currency;
    applyPrices(currency);

    // Idioma pelo país: só aplica se o visitante NUNCA escolheu um idioma manualmente
    // (clicando no seletor). Isso roda de novo em toda página, então mantém o site
    // inteiro no mesmo idioma sem precisar consultar a API mais de uma vez por visitante.
    let manual;
    try{ manual = localStorage.getItem('mesaDevLangManual'); }catch(e){}
    if(countryLang && !manual && typeof window.applyLang === 'function'){
      window.applyLang(countryLang);
    }
  })();
})();
