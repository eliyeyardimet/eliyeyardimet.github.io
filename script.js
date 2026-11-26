/* ============================================================
   ƏLİ — charity site
   Vanilla JS: i18n, lightbox (with history API), copy-to-clipboard,
   scroll reveals, floating-button scroll behaviour.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. TRANSLATIONS
     ---------------------------------------------------------- */
  const translations = {
    az: {
      pageTitle: 'Əliyə dəstək',
      heroHeadline: 'Əli anasızdır və xərçənglə döyüşür. Gəlin ona yetim qalmağı hiss etdirməyək',
      heroSubtitle: 'Əli — 17 yaşında',
      scrollDown: 'Aşağı sürüşdürün',

      storyTitle: 'Əlinin hekayəsi',
      storyText:
        'Əli xərçəng xəstəliyindən əziyyət çəkir. Anasız bir gəncin ağrısı ikiqat ağır olur. Həm ana nəvazişinin yoxluğu, həm də xəstəliyin gətirdiyi çətinliklər onun çiyinlərinə yaşından böyük yük qoyub. Amma ümid hələ yaşayır. Bu ümid isə sizin mərhəmətiniz, dəstəyiniz və dualarınızla daha da böyüyə bilər. Bəlkə də bizim üçün adi görünən bir yardım, onun müalicəsinə, sabaha daha inamla baxmasına səbəb olacaq. Gəlin bu gənci dərdi ilə tək qoymayaq.',

      medicalTitle: 'Tibbi vəziyyət və əlaqə',
      diagnosisTitle: 'Diaqnoz',
      diagnosisText:
        'Kəskin limfoblast leykemiya (qan xərçəngi). Diaqnoz 2024-cü ildə qoyulub, 2026-cı ildə xəstəlik residiv verib. Əli Milli Hematologiya və Transfuziologiya Mərkəzində müalicə alır.',
      treatmentTitle: 'Müalicə',
      treatmentText:
        'Əlinin kimyaterapiyaya, dəstəkləyici müalicəyə və dərmanlara davamlı ehtiyacı var. Ailənin bu xərcləri təkbaşına qarşılamağa imkanı çatmır.',
      contactTitle: 'Əlaqə',
      addressLabel: 'Ünvan',
      addressText: 'Gəncə şəhəri, Gülüstan qəsəbəsi, bina 39, mənzil 7',
      phoneLabel: 'Telefon',

      galleryTitle: 'Əlinin şəkilləri',

      documentsTitle: 'Rəsmi sənədlər',
      documentsCaption:
        'Bu sənədlər Əlinin diaqnozunu təsdiqləyir.',

      donationTitle: 'Yardım üçün bank kartları',
      holderRel: '– Bibisi',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',

      cardsBtn: 'Kartlara bax',
    },

    tr: {
      pageTitle: 'Ali\'ye destek',
      heroHeadline: 'Ali annesizdir ve kanserle savaşıyor. Gelin ona öksüz kalmayı hissettirmeyelim',
      heroSubtitle: 'Ali — 17 yaşında',
      scrollDown: 'Aşağı kaydırın',

      storyTitle: 'Ali\'nin hikayesi',
      storyText:
        'Ali kanser hastalığıyla mücadele ediyor. Annesiz bir gencin acısı iki kat ağır olur. Hem anne sevgisinin eksikliği hem de hastalığın getirdiği zorluklar, onun omuzlarına yaşından büyük bir yük yüklemiş. Ama umut hâlâ yaşıyor. Bu umut ise sizin merhametiniz, desteğiniz ve dualarınızla daha da büyüyebilir. Belki bizim için sıradan görünen bir yardım, onun tedavisine ve yarına daha güvenle bakmasına vesile olacak. Gelin bu genci derdiyle yalnız bırakmayalım.',

      medicalTitle: 'Tıbbi durum ve iletişim',
      diagnosisTitle: 'Tanı',
      diagnosisText:
        'Akut lenfoblastik lösemi (kan kanseri). Tanı 2024\'te konuldu, 2026\'da hastalık nüksetti. Ali, Milli Hematoloji ve Transfüzyoloji Merkezi\'nde tedavi görüyor.',
      treatmentTitle: 'Tedavi',
      treatmentText:
        'Ali\'nin kemoterapiye, destekleyici tedaviye ve ilaçlara sürekli ihtiyacı var. Ailenin bu masrafları tek başına karşılamaya gücü yetmiyor.',
      contactTitle: 'İletişim',
      addressLabel: 'Adres',
      addressText: 'Gence şehri, Gülüstan kasabası, bina 39, daire 7',
      phoneLabel: 'Telefon',

      galleryTitle: 'Ali\'nin fotoğrafları',

      documentsTitle: 'Resmi belgeler',
      documentsCaption:
        'Bu belgeler Ali\'nin tanısını belgeliyor.',

      donationTitle: 'Yardım için banka kartları',
      holderRel: '– Halası',
      copyBtn: 'Kopyala',
      copiedBtn: 'Kopyalandı',

      cardsBtn: 'Kartlara bak',
    },

    ru: {
      pageTitle: 'Поддержка Али',
      heroHeadline: 'У Али нет мамы, и он борется с раком. Не дадим ему почувствовать себя сиротой',
      heroSubtitle: 'Али — 17 лет',
      scrollDown: 'Прокрутите вниз',

      storyTitle: 'История Али',
      storyText:
        'Али борется с онкологическим заболеванием. Боль юноши, оставшегося без матери, вдвойне тяжела. Отсутствие материнской ласки и трудности, которые приносит болезнь, возложили на его плечи груз не по годам. Но надежда ещё жива, и с вашим милосердием, поддержкой и молитвами она может стать ещё сильнее. Возможно, помощь, которая кажется нам обычной, станет для него шансом на лечение и позволит с большей верой смотреть в завтрашний день. Не оставим этого юношу один на один с бедой.',

      medicalTitle: 'Медицинское состояние и контакты',
      diagnosisTitle: 'Диагноз',
      diagnosisText:
        'Острый лимфобластный лейкоз (рак крови). Диагноз поставлен в 2024 году, в 2026 году наступил рецидив. Али проходит лечение в Национальном центре гематологии и трансфузиологии.',
      treatmentTitle: 'Лечение',
      treatmentText:
        'Али постоянно нуждается в химиотерапии, поддерживающем лечении и лекарствах. Семья не в состоянии покрыть эти расходы самостоятельно.',
      contactTitle: 'Контакты',
      addressLabel: 'Адрес',
      addressText: 'г. Гянджа, пос. Гюлюстан, дом 39, кв. 7',
      phoneLabel: 'Телефон',

      galleryTitle: 'Фото Али',

      documentsTitle: 'Официальные документы',
      documentsCaption:
        'Эти документы подтверждают диагноз Али.',

      donationTitle: 'Банковские карты для помощи',
      holderRel: '– тётя',
      copyBtn: 'Копировать',
      copiedBtn: 'Скопировано',

      cardsBtn: 'Карты помощи',
    },

    en: {
      pageTitle: 'Support Ali',
      heroHeadline: 'Ali has no mother and is fighting cancer. Let’s not make him feel like an orphan',
      heroSubtitle: 'Ali — 17 years old',
      scrollDown: 'Scroll down',

      storyTitle: 'Ali\'s story',
      storyText:
        'Ali is battling cancer. The pain of a young man without a mother is doubly heavy. The absence of a mother\'s tenderness and the hardships of the illness have placed a burden on his shoulders far beyond his years. But hope is still alive, and with your compassion, support and prayers it can grow even stronger. A gift that may seem ordinary to us could make his treatment possible and let him look at tomorrow with more confidence. Let\'s not leave this young man alone with his pain.',

      medicalTitle: 'Medical condition & contact',
      diagnosisTitle: 'Diagnosis',
      diagnosisText:
        'Acute lymphoblastic leukemia (blood cancer). Diagnosed in 2024, with a relapse in 2026. Ali is being treated at the National Center of Hematology and Transfusiology.',
      treatmentTitle: 'Treatment',
      treatmentText:
        'Ali needs ongoing chemotherapy, supportive care and medication. His family cannot cover these costs on their own.',
      contactTitle: 'Contact',
      addressLabel: 'Address',
      addressText: 'Ganja, Gulustan settlement, building 39, apt 7',
      phoneLabel: 'Phone',

      galleryTitle: 'Photos of Ali',

      documentsTitle: 'Official documents',
      documentsCaption:
        'These documents confirm Ali\'s diagnosis.',

      donationTitle: 'Bank cards for donation',
      holderRel: '– aunt',
      copyBtn: 'Copy',
      copiedBtn: 'Copied',

      cardsBtn: 'See the cards',
    },
  };

  // v2 redesign: extra keys merged into the base translations
  const extra = {
    az: { navStory:'Hekayə', navGallery:'Şəkillər', navDocs:'Sənədlər', heroText:'Əli 17 yaşındadır və <strong class="hero-hl">qan xərçəngi</strong> ilə mübarizə aparır. Müalicəsinin davam etməsi üçün <strong class="hero-hl">maddi dəstək</strong> lazımdır. Hər yardım onu sağalmağa <strong class="hero-hl">bir addım</strong> yaxınlaşdırır.', heroCta:'Dəstək ol', heroCta2:'WhatsApp ilə əlaqə', heroCta3:'Sənədlərə bax', heroFloat:'Hər dəstək bir addımdır', storyEyebrow:'Hekayə', medicalEyebrow:'Tibbi məlumat', galleryEyebrow:'Qalereya', docsEyebrow:'Şəffaflıq', donationEyebrow:'Bank kartları', donationSubtitle:'Yardımlar birbaşa Əlinin müalicəsinə yönəlir.', footerNote:'Bu sayt Əliyə dəstək üçün ailəsi tərəfindən yaradılıb.', daysLeft:'{n} gün qalıb', daysLeftOne:'Son gün' },
    tr: { navStory:'Hikaye', navGallery:'Fotoğraflar', navDocs:'Belgeler', heroText:'Ali 17 yaşında ve <strong class="hero-hl">kan kanseri</strong> ile mücadele ediyor. Tedavisinin devam edebilmesi için <strong class="hero-hl">maddi destek</strong> gerekiyor. Her destek onu iyileşmeye <strong class="hero-hl">bir adım</strong> daha yaklaştırıyor.', heroCta:'Destek ol', heroCta2:'WhatsApp ile iletişim', heroCta3:'Belgelere bak', heroFloat:'Her destek bir adımdır', storyEyebrow:'Hikaye', medicalEyebrow:'Tıbbi bilgi', galleryEyebrow:'Galeri', docsEyebrow:'Şeffaflık', donationEyebrow:'Banka kartları', donationSubtitle:'Yardımlar doğrudan Ali\'nin tedavisine gider.', footerNote:'Bu site Ali\'ye destek için ailesi tarafından oluşturuldu.', daysLeft:'{n} gün kaldı', daysLeftOne:'Son gün' },
    ru: { navStory:'История', navGallery:'Фото', navDocs:'Документы', heroText:'Али 17 лет, он борется с <strong class="hero-hl">раком крови</strong>. Чтобы лечение могло продолжаться, нужна <strong class="hero-hl">материальная помощь</strong>. Каждая помощь приближает его к выздоровлению <strong class="hero-hl">на один шаг</strong>.', heroCta:'Помочь', heroCta2:'Связаться в WhatsApp', heroCta3:'Документы', heroFloat:'Каждая помощь — это шаг', storyEyebrow:'История', medicalEyebrow:'Медицинская информация', galleryEyebrow:'Галерея', docsEyebrow:'Прозрачность', donationEyebrow:'Банковские карты', donationSubtitle:'Помощь идёт напрямую на лечение Али.', footerNote:'Этот сайт создан семьёй для поддержки Али.', daysLeft:'Осталось {n} дн.', daysLeftOne:'Последний день' },
    en: { navStory:'Story', navGallery:'Photos', navDocs:'Documents', heroText:'Ali is 17 and is fighting <strong class="hero-hl">blood cancer</strong>. To keep his treatment going, he needs <strong class="hero-hl">financial support</strong>. Every gift brings him <strong class="hero-hl">one step</strong> closer to recovery.', heroCta:'Donate', heroCta2:'Contact on WhatsApp', heroCta3:'View documents', heroFloat:'Every gift is a step', storyEyebrow:'Story', medicalEyebrow:'Medical info', galleryEyebrow:'Gallery', docsEyebrow:'Transparency', donationEyebrow:'Bank cards', donationSubtitle:'Donations go directly to Ali\'s treatment.', footerNote:'This site was created by Ali\'s family to support him.', daysLeft:'{n} days left', daysLeftOne:'Last day' },
  };
  Object.keys(extra).forEach((l) => Object.assign(translations[l], extra[l]));

  /* ----------------------------------------------------------
     2. STATE
     ---------------------------------------------------------- */
  const STORAGE_KEY = 'ali-lang';
  let currentLang = 'az';
  // Tracks whether a history entry was pushed for the lightbox.
  // Prevents history.back() from going further than the lightbox state.
  let lightboxHistoryPushed = false;

  /* ----------------------------------------------------------
     3. LANGUAGE
     ---------------------------------------------------------- */
  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'az';
    currentLang = lang;

    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // html-allowed nodes (trust note has <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // active language button
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Reset any copy button that happens to be mid-"Kopyalandı" so it reflects
    // the new language (we just rewrote its label via [data-i18n] above).

    renderDaysLeft();
  }

  /* ----------------------------------------------------------
     3b. DAYS LEFT badge (header) — reads window.PAID_UNTIL, set by
     the gate script at the top of index.html.
     ---------------------------------------------------------- */
  function renderDaysLeft() {
    const badge = document.getElementById('daysLeft');
    const text = document.getElementById('daysLeftText');
    if (!badge || !text || !window.PAID_UNTIL) return;

    const deadline = new Date(window.PAID_UNTIL + 'T23:59:59+04:00').getTime();
    if (isNaN(deadline)) return;

    // Whole days until the period ends; < 24h left counts as the last day.
    const days = Math.ceil((deadline - Date.now()) / 86400000);
    if (days < 1) { badge.hidden = true; return; }

    // Only the number shows; the wording goes to assistive tech and the tooltip.
    const t = translations[currentLang];
    const label = days === 1 ? t.daysLeftOne : t.daysLeft.replace('{n}', days);
    text.textContent = days;
    badge.setAttribute('aria-label', label);
    badge.setAttribute('title', label);

    badge.classList.toggle('is-urgent', days <= 3);
    badge.hidden = false;
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    applyLanguage(saved || 'az');

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      });
    });
  }

  /* ----------------------------------------------------------
     4. HEADER scroll effect + hero scroll-down indicator
     ---------------------------------------------------------- */
  function initScrollEffects() {
    const header = document.getElementById('siteHeader');
    const hero = document.getElementById('hero');
    const scrollIndicator = document.getElementById('scrollIndicator');

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      header.classList.toggle('is-scrolled', y > 24);

      // Fade the indicator out once we've scrolled past ~40% of hero.
      if (hero && scrollIndicator) {
        const threshold = hero.offsetHeight * 0.4;
        scrollIndicator.classList.toggle('is-hidden', y > threshold);
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     5. Reveal-on-scroll using IntersectionObserver
     ---------------------------------------------------------- */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------------
     6. LIGHTBOX (with History API for back-button behaviour)
     ---------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-lightbox-open');

      // Push a history state ONLY on the first open in a series.
      // If the user clicks one thumb after another without closing,
      // we don't push extra states.
      if (!lightboxHistoryPushed) {
        history.pushState({ lightbox: true }, '');
        lightboxHistoryPushed = true;
      }
    }

    function closeLightbox(opts) {
      const fromPopstate = opts && opts.fromPopstate;
      if (!lightbox.classList.contains('is-open')) return;

      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-lightbox-open');
      // small delay to clear src after fade so it doesn't flash blank
      setTimeout(() => { lightboxImg.src = ''; }, 250);

      // If we closed manually (X button, backdrop, Escape), pop the state we pushed.
      // If close was triggered BY popstate, the browser already moved history back.
      if (lightboxHistoryPushed && !fromPopstate) {
        history.back();
      }
      lightboxHistoryPushed = false;
    }

    // Wire up every thumb (gallery photos AND documents) with prev/next nav.
    const thumbs = Array.from(document.querySelectorAll('[data-src]'));
    let current = 0;

    function showIndex(i) {
      current = (i + thumbs.length) % thumbs.length;
      const el = thumbs[current];
      const img = el.querySelector('img');
      openLightbox(el.getAttribute('data-src'), img ? img.alt : '');
    }

    thumbs.forEach((el, i) => {
      el.addEventListener('click', () => showIndex(i));
    });

    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showIndex(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showIndex(current + 1); });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') showIndex(current - 1);
      if (e.key === 'ArrowRight') showIndex(current + 1);
    });

    closeBtn.addEventListener('click', () => closeLightbox());

    // click outside the image to close
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });

    // Hardware/browser BACK button -> just close lightbox, don't leave site
    window.addEventListener('popstate', () => {
      if (lightbox.classList.contains('is-open')) {
        closeLightbox({ fromPopstate: true });
      }
    });
  }

  /* ----------------------------------------------------------
     7. COPY-TO-CLIPBOARD on bank cards
     ---------------------------------------------------------- */
  function initCopyButtons() {
    const buttons = document.querySelectorAll('.copy-btn');

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // fallback for older browsers / non-secure contexts
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand('copy');
          document.body.removeChild(ta);
          return ok;
        } catch (e) {
          return false;
        }
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const number = btn.getAttribute('data-copy');
        const label = btn.querySelector('.copy-label');
        if (!number || !label) return;

        const ok = await copyText(number);
        if (!ok) return;

        // Swap label to "Kopyalandı" for ~2s, keeping i18n in sync.
        label.setAttribute('data-i18n', 'copiedBtn');
        label.textContent = translations[currentLang].copiedBtn;
        btn.classList.add('is-copied');

        clearTimeout(btn._copyTimer);
        btn._copyTimer = setTimeout(() => {
          label.setAttribute('data-i18n', 'copyBtn');
          label.textContent = translations[currentLang].copyBtn;
          btn.classList.remove('is-copied');
        }, 2000);
      });
    });
  }

  /* ----------------------------------------------------------
     8. Floating "Kartlara bax" button -> smooth scroll to donation
     ---------------------------------------------------------- */
  function initCardsButton() {
    const btn = document.getElementById('cardsBtn');
    const donation = document.getElementById('donation');
    if (!btn || !donation) return;

    btn.addEventListener('click', () => {
      // 'center' so the section sits comfortably in the viewport.
      donation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ----------------------------------------------------------
     INIT
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollEffects();
    initReveals();
    initLightbox();
    initCopyButtons();
    initCardsButton();
  });
})();
