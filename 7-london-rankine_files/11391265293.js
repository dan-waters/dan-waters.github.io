!(function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)})([(function(e,t,n){function i(){function e(e){var t=n(149),i=[t];i.push(n(151)),i.push(n(157)),i.push(n(160)),i.push(n(163)),i.push(n(165)),i.push(n(175)),i.push(n(178)),i.push(n(180)),i.push(n(183)),i.push(n(187)),i.push(n(190)),i.push(n(193)),i.push(n(197)),i.push(n(201)),i.push(n(205)),i.push(n(210)),i.push(n(211)),i.push(n(214)),i.push(n(215)),i.push(n(216)),i.push(n(219)),i.push(n(220)),i.push(n(224)),i.push(n(229)),i.push(n(230)),p.initialize({clientData:e,plugins:i})}function t(e,t,n){return"/dist/preview_data.js?token=__TOKEN__&preview_layer_ids=__PREVIEW_LAYER_IDS__".replace("__TOKEN__",e).replace("__PROJECT_ID__",t).replace("__PREVIEW_LAYER_IDS__",n.join(",")).replace("__GET_ONLY_PREVIEW_LAYERS__",!0)}window.performance&&window.performance.mark&&window.performance.mark("optimizely:blockBegin");var i=n(1);i.initialize();var r=n(84),a=n(23),o=n(16);n(130);var s=o.get("stores/directive"),u=n(91);if(!u.isCORSSupported())throw new Error("CORS is not supported on this browser, aborting.");var c,l=n(132),d=n(118),f=n(133),g={"layers": [{"holdback": 0, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": 2, "viewIds": ["16861226028"], "experiments": [{"weightDistributions": [{"entityId": "16873060164", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "16854232798", "actions": [], "name": null}, {"id": "16873060164", "actions": [{"viewId": "16861226028", "changes": [{"dependencies": [], "type": "custom_code", "id": "5179a2350e714ac787c6dff38e09d188", "value": function($){var utils = window.optimizely.get("utils");

var user = window.changeTargetingData.viewer.user;
var appStateLocale = window.changeTargetingData.appState.locale;
var locale = '';
var lang = '';
if (appStateLocale) {
  // based on settings
  locale = appStateLocale.split('-')[1];
  lang = appStateLocale.split('-')[0];
} else {
  // based on browser
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
  if (!!browserLocale.locale) {
		locale = browserLocale.locale.split('-')[1];
		lang = browserLocale.locale.split('-')[0];
  } else {
		locale = browserLocale.split('-')[1];
   	lang = browserLocale.split('-')[0];
  }
}
lang = lang.toLowerCase();
locale = locale.toLowerCase();

if (window.location.href.indexOf("sustainers") > -1) {
    locale = 'au';
} else if (window.location.href.indexOf("members-canada") > -1) {
    locale = 'ca';
} else if (window.location.href.indexOf("socios") > -1) {
    locale = 'es';
} else if (window.location.href.indexOf("soutiens") > -1) {
    locale = 'fr';
} else if (window.location.href.indexOf("membership") > -1) {
    locale = 'gb';
} else if (window.location.href.indexOf("sottoscrittori") > -1) {
    locale = 'it';
} else if (window.location.href.indexOf("member?") > -1) {
    locale = 'us';
}

var translations = {
  gb: {
  	heading: 'Change.org wouldn’t exist without our Subscribers',
    underHeading: 'Without them we couldn’t be 100% independent, or help dozens of petition starters each week.',
    counter: 'We need 338 Subscribers this month',
    ask: 'Right now, we need the <strong>support of another 338 people</strong> by the end of the month to continue the development of our site and to help more people fight injustice. Can you chip in and help us maintain a future in which change is possible for all, where people can continue to change the UK for the better? ',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/uk-supporter.jpg',
    joinHtml: 'joined <span class="minutes"></span> mins ago',
    names: {
      male: ['Sean V.','Simon P.','Joseph W.','Nicholas M.','Connor C.','Thomas W.','Steven E.','Carl H.','Warren T.','Gavin E.'],
      female: ['Wanda N.','Ella M.','Rebecca W.','Jan B.','Carolyn E.','Abigail H.','Audrey F.','Michelle U.','Alison N.','Fiona H.']
    }
  },
  us: {
    heading: 'Change.org wouldn’t exist without our Members',
    underHeading: 'Without them we couldn’t be 100% independent, or help dozens of petition starters each week.',
    counter: 'We need 1,000 members this month',
    ask: 'Right now, we need the <strong>support of another 1,000 people</strong> by the end of the month to continue the development of our site and to help more people fight injustice.<br><br>Can you chip in and help us maintain a future in which change is possible for all, where people can continue to change the US for the better?',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/uk-supporter.jpg',
    joinHtml: 'joined <span class="minutes"></span> mins ago',
    names: {
      male: ['Sean V.','Simon P.','Joseph W.','Nicholas M.','Connor C.','Thomas W.','Steven E.','Carl H.','Warren T.','Gavin E.'],
      female: ['Wanda N.','Ella M.','Rebecca W.','Jan B.','Carolyn E.','Abigail H.','Audrey F.','Michelle U.','Alison N.','Fiona H.']
    }  
  },
  au: {
  	heading: 'Change.org wouldn’t exist without our Sustainers',
    underHeading: 'Without them we couldn’t be 100% independent, or help dozens of petition starters each week.',
    counter: 'We need 275 Sustainers this month',
    ask: 'Right now, we need the <strong>support of another 275 people</strong> by the end of the month to continue the development of our site and to help more people fight injustice. Can you chip in and help us maintain a future in which change is possible for all, where people can continue to speak up and be heard?',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/uk-supporter.jpg',
    joinHtml: 'joined <span class="minutes"></span> mins ago',
    names: {
      male: ['Sean V.','Simon P.','Joseph W.','Nicholas M.','Connor C.','Thomas W.','Steven E.','Carl H.','Warren T.','Gavin E.'],
      female: ['Wanda N.','Ella M.','Rebecca W.','Jan B.','Carolyn E.','Abigail H.','Audrey F.','Michelle U.','Alison N.','Fiona H.']
    }  
  },
  ca: {
    heading: 'Change.org wouldn’t exist without our Members',
    underHeading: 'Without them we couldn’t be 100% independent, or help dozens of petition starters each week.',
    counter: 'We need 188 members this month',
    ask: 'Right now, we need the <strong>support of another 188 people</strong> by the end of the month to continue the development of our site and to help more people fight injustice.<br><br>Can you chip in and help us maintain a future in which change is possible for all, where people can continue to change the CA for the better?',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/uk-supporter.jpg',
    joinHtml: 'joined <span class="minutes"></span> mins ago',
    names: {
      male: ['Sean V.','Simon P.','Joseph W.','Nicholas M.','Connor C.','Thomas W.','Steven E.','Carl H.','Warren T.','Gavin E.'],
      female: ['Wanda N.','Ella M.','Rebecca W.','Jan B.','Carolyn E.','Abigail H.','Audrey F.','Michelle U.','Alison N.','Fiona H.']
    }  
  },
  es: {
  	heading: 'Change.org no podría existir sin nuestros socios',
    underHeading: 'Sin ellos no podríamos ser 100% independientes ni ayudar a decenas de ciudadanos con sus campañas cada semana',
    counter: 'Necesitamos 112 nuevos socios este mes',
    ask: 'Necesitamos el apoyo de 112 personas antes de que acabe el mes para poder sostener nuestra web y ayudar a cientos de ciudadanos a movilizarse contra la injusticia. ¿Nos puedes ayudar con una pequeña contribución mensual para seguir construyendo un mundo en el que cualquier persona pueda psar a la acción para luchar por un mundo mejor?',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/it-supporter.jpg',
    joinHtml: 'se ha unido hace <span class="minutes"></span> minutos',
    names: {
      male: ['Carlos González', 'Pedro Martín', 'Juan Pérez', 'Alberto Muñoz', 'David Sanz', 'Pablo Alonso', 'Jaime Vidal', 'Daniel Sánchez', 'Jose Iglesias', 'Ignacio Moreno'],
      female: ['Laura Díaz', 'Ana Fernández', 'Lucía Rojo', 'Berta Caballero', 'Elena Álvarez', 'Marta Molina', 'Begoña Delgado', 'Clara Martínez', 'Marina Fernández', 'Verónica Flores']
    }  
  },
  fr: {
  	heading: 'Change.org n’existerait pas sans nos Soutiens',
    underHeading: 'Sans eux, nous ne pourrions être 100% indépendants et accompagner les dizaines de lanceuses et lanceurs de pétitions chaque semaine.',
    counter: 'Nous avons besoin de 281 nouveaux Soutiens ce mois-ci.',
    ask: 'Nous avons besoin de 281 nouveaux Soutiens ce mois-ci pour continuer à développer notre plateforme et soutenir encore plus de personnes qui combattent les injustices. Pouvons-nous compter sur vous pour nous aider à construire un monde où chaque personne a le pouvoir de porter le changement qu’elle souhaite voir?',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/fr-supporter.png',
    joinHtml: 'a rejoint les Soutiens de Change.org il y a <span class="minutes"></span>mins',
    names: {
      male: ['Arnaud D.','Ronin W','Serge C.','Emmanuel B.','Kévin N.','Patrick A.','Jacques B.','Laurent M.','Antoine P.','Jean-Claude S.'],
      female: ['Nicole C.','Jacqueline L.','Célia A.','Nina C.','Fanny L.','Nathalie B.','Léa K.','Marielle T.','Corinne M.','Catherine H.']
    }  
  },
  it: {
  	heading: 'Change.org non esisterebbe senza i nostri Sostenitori',
    underHeading: 'Senza i cittadini che ci sostengono, persone come te, non riusciremmo a essere al 100% gratuiti e indipendenti, ad aiutare decine di persone che lanciano petizioni ogni settimana.',
    counter: 'Abbiamo bisogno del sostegno di altre 66 persone questo mese',
    ask: 'Mentre leggi, noi abbiamo bisogno del supporto di altre 66 persone entro la fine del mese. Questo ci permetterà di aiutare tante persone a combattere le ingiustizie. Ti va di contribuire a creare un futuro in cui cambiare in meglio il mondo sia alla portata di tutti?',
  	copy: 'Thank you to our new Change.org Members. Change.org is 100% people powered!',
    img: 'https://static.change.org/psf-experiments/es-supporter.jpg',
    joinHtml: 'ha contribuito <span class="minutes"></span>mins fa',
    names: {
      male: ['Gianluca Mauri','Sandro Zeta','Franco Pusceddu','Andrea Agaretti','Sergio Arnaboldi','Luigi Galvani','Luca Miniera','Sauro Maria Mauro','Giovanni Preziosi','Matteo Lombardi'],
      female: ['Francesca Russo', 'Mara Venchi', 'Laura De Scuri', 'Giulia Amato', 'Maria Torre', 'Gianna Ottone', 'Anna Francisci', 'Veronica Petrucci', 'Ambra Lucchesi', 'Giorgia Parola']
    }  
  },
  ru: {
  	copy: 'Работу Change.org на 100% обеспечивают взносы пользователей. Спасибо нашим новым друзьям!',
    joinHtml: 'присоединился (-ась) <span class="minutes"></span> мин. назад',
    names: {
      male: ['Александр Васильев','Игорь Нестеренко','Павел Коломенский','Валентин Терлецкий','Дмитрий Ахремчик','Владимир Сергеев','Петр Федоров','Олег Жариков','Георгий Архипов','Андрей Кузнецов'],
      female: ['Вероника Петрова','Лидия Калинская','Наталья Еремко','Варвара Шоломицкая','Анна Меньшикова','Екатерина Назарова','Ульяна Власенко','Анастасия Белова','Ирина Кузнецова','Тамара Захарова']
    }  
  },
};
function randomize(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var socialFeedHtml = '<div class="social-feed xs-mbs sm-mbs">' +
'        <ul id="social-feed-inner"></ul>' +
'    </div>';

var renderFeedItem = function(name, i, gender) {
  var nameArray = name.split(" ");
  name = nameArray[0] + ' ' + nameArray[1].charAt(0) + '.';
	return '<div class="arrange arrange-middle">' +
        '    <div class="arrange-fit prxs mrxxxs mvxxxs">' +
        '        <div class="media-profile-small-height">' +
        '            <div class="media-profile-img">' +
        '                <div class="flex-embed border-rounded-circle">' +
        '                    <div class="flex-embed-ratio">' +
        '                        <div class="flex-embed-content">' +
        '                            <img alt="' + name + '" class="image-cropper-nodrag position-absolute-center border-rounded-circle" src="https://static.change.org/psf-experiments/N-MF-' + gender + (i < 9 ? '0' + (i + 1) : i + 1) + '.png">' +
        '                            <img class="optly-img-confetti" src="https://static.change.org/psf-experiments/MF-Confetti-blank-' + Math.round((Math.random() * (2 - 1) + 1)) + '.png">' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="arrange-fill">' + //class="hide-overflow" style="overflow: hidden; text-overflow: ellipsis; -webkit-box-orient: vertical; display: -webkit-box; -webkit-line-clamp: 41;"
        '        <div>' +
        '            <span class="optly-item-content">' +
        '<strong title="' + name + '">' + name + '</strong><br> ' +
        '                <span class="type-s display-block">' + translations[locale].joinHtml + '</span>' +
        '            </span>' +
        '        </div>' +
        '    </div>' +
        '</div>'; 
};

var createFeedItems = function(array, parent, gender) {
  array.forEach(function(el, i) {
    var item = document.createElement('div');
    item.className = 'optly-feed-item type-m pvxxxs';
    if (i === 0) {
        item.style['margin-left'] = '0';
    }
    item.innerHTML = renderFeedItem(el,i, gender);
    parent.appendChild(item);
  });
};

function getThermometer(w) {
  return '<div class="gradient-thermometer"><div class="bg-light-gray type-m fit-finish-thermometer-bg border-rounded-circle"><div id="therm-width" class="gradient-thermometer-fill fit-finish-thermometer-fill-height display-inline-block" style="width: '+w+'%;"></div><div class="arrow-right-fit-finish display-inline-block position-relative"></div></div></div>';
}

if (locale === 'us' || locale === 'gb' || locale === 'au' || locale === 'ca' || locale === 'fr' || locale === 'it' || locale === 'es' || locale === 'ru' || locale === 'de') {

	utils.waitForElement('.js-landing-header.js-contribute-box').then(function(contributeBox) {
    
    var leftCol = contributeBox.querySelector('.row .col-md-7');
    var rightCol = contributeBox.querySelector('.row .col-md-5');
    
    var currentHeading = leftCol.querySelector('h1.mtn.mbm');
    var currentSub = leftCol.querySelector('p.mbxl');
    
    currentHeading.innerHTML = translations[locale].heading;
    currentSub.innerHTML = translations[locale].underHeading;
    
    contributeBox.classList.remove('mtxxxl');
    contributeBox.classList.add('mtl');
  	
    var socialFeed = document.createElement('div');
    socialFeed.setAttribute("id", "social-feed-wrap");
    socialFeed.classList.add('row', 'ptm');
    socialFeed.innerHTML = socialFeedHtml;
    
    // above thermometer (counter)
    var counter = document.createElement('p');
    counter.innerHTML = translations[locale].counter;
    counter.classList = 'mtm mbs';
    leftCol.appendChild(counter);
    // thermometer
    var therm = document.createElement('div');
    therm.innerHTML = getThermometer(75);
    therm.classLIst = 'mbl';
    leftCol.appendChild(therm);
    // social feed
    leftCol.appendChild(socialFeed);
    
    // ask
    var ask = document.createElement('p');
    ask.innerHTML = translations[locale].ask;
    ask.classList = 'mvxl';
    leftCol.appendChild(ask);
    
    // Styling
    leftCol.classList.remove('bg-inverted', 'match-content-height');
    leftCol.classList.add('type-default');
    
    rightCol.classList.remove('match-content-height');
    rightCol.classList.add('type-default', 'mtxxl');
    
    var leftColImg = leftCol.querySelector('.flex-embed-content img');
    leftColImg.src = translations[locale].img;
    
    var flexEmbedRatio = leftCol.querySelector('.flex-embed .flex-embed-ratio');
    flexEmbedRatio.classList.remove('flex-embed-16x9');
    
    var socialInner = document.getElementById('social-feed-inner');
    
    createFeedItems(translations[locale].names.male, socialInner, 'M');
    createFeedItems(translations[locale].names.female, socialInner, 'F');
    
    for (var j = socialInner.children.length; j >= 0; j--) {
    	socialInner.appendChild(socialInner.children[Math.random() * j | 0]);
    }
    
    var min = 2;
    var minutes = socialInner.querySelectorAll('.minutes');
    minutes.forEach(function(el){
      el.innerText = min;
    	min = min + Math.round((Math.random() * (4 - 1) + 1));
    });
    
    var firstSocialItem = socialInner.firstChild;
    var margin = 0;
    setInterval(function() {
      if (margin > ((minutes.length * -200) + 400)) {
				margin -= 200;
    		firstSocialItem.style.marginLeft = margin + 'px'; 	   
      }
    }, 3000);
    
  });
  
}
utils.waitForElement('.js-submit-payment').then(function() {
  var stripe = document.querySelector('.js-payment-copy-stripe');
  stripe.innerHTML = '<img src="https://static.change.org/psf-experiments/security-badge.png"> ' + stripe.innerHTML;
});
utils.waitForElement('.js-identified-log-in').then(function() {
  var stripe = document.querySelector('.js-payment-copy-stripe');
  stripe.innerHTML = '<img src="https://static.change.org/psf-experiments/security-badge.png"> ' + stripe.innerHTML;
});
}}, {"value": "<style>.row.type-brighter .col-md-7 .flex-embed {\n      max-height: 300px;\n}\n@media (max-width: 500px) {\n .row.type-brighter .col-md-7 .flex-embed {\n      max-height: 200px;\n\t} \n}\n.social-feed-msg .arrange-fit img{\n\tmax-width: 40px !important;\n}\n#social-feed-wrap {\n\n}\n#social-feed-inner {\n\tdisplay: flex;\n  padding-left: 15px;\n  overflow: hidden;\n}\n.optly-feed-item {\n    min-width: 190px;\n    max-width: 190px;\n    transition: all .8s ease-in-out;\n    margin-right: 10px;\n}\n#social-feed-inner > div:first-of-type {\n\tmargin-left: 30px;\n}\n.optly-feed-item .flex-embed {\n    overflow: visible;\n}\n.optly-feed-item .flex-embed-content > img:first-of-type {\n\tborder: 1px #ec2c22 solid;\n  z-index: 2;\n}\n.optly-img-confetti {\n    position: absolute;\n    max-width: 180%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n.js-payment-copy-stripe {\n \tcolor: #737273; \n\tdisplay: inline-block;\n}\n.js-payment-copy-stripe img {\n  display: inline-block;\n  width: 34px;\n  vertical-align: middle;\n  margin-right: 14px;\n}\n#social-feed-inner:before, #social-feed-inner:after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 30px;\n    top: 0;\n    height: 100%;\n  z-index: 1;\n}\n#social-feed-inner:before {\n  left: 10px;\nbackground: -moz-linear-gradient(left,  rgba(255,255,255,1) 1%, rgba(255,255,255,1) 18%, rgba(255,255,255,0) 100%); /* FF3.6-15 */\nbackground: -webkit-linear-gradient(left,  rgba(255,255,255,1) 1%,rgba(255,255,255,1) 18%,rgba(255,255,255,0) 100%); /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to right,  rgba(255,255,255,1) 1%,rgba(255,255,255,1) 18%,rgba(255,255,255,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 */\n\n}\n#social-feed-inner:after {\n \tright: 10px;\nbackground: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.01) 1%, rgba(255,255,255,1) 86%, rgba(255,255,255,1) 100%); /* FF3.6-15 */\nbackground: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.01) 1%,rgba(255,255,255,1) 86%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */\nbackground: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.01) 1%,rgba(255,255,255,1) 86%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */\n}\n.optly-item-content {\n    width: 140px;\n    display: block;\n}\n\n.member-landing-page .col-md-5.open-payment-variant-right-side {\n    border-radius: 15px;\n  \tborder: solid 1px #e5e2e2;\n  \tbackground-color: #f9f9f9 !important;\n}\n.js-payment-container .type-invert, .js-payment-container .type-brighter {\n  \tcolor: #737273 !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "54be8d7ee0a240ea878b6dbc7d63cc58"}]}], "name": null}], "audienceIds": ["and", "15430400511"], "changes": null, "id": "16846686470", "integrationSettings": null}], "id": "16850294272", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17896723490", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": 2, "viewIds": ["17192850626"], "experiments": [{"weightDistributions": [{"entityId": "17211360784", "endOfRange": 2500}, {"entityId": "17184780718", "endOfRange": 5000}, {"entityId": "17206580476", "endOfRange": 7500}, {"entityId": "17182920802", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "17211360784", "actions": [], "name": null}, {"id": "17206220341", "actions": [{"viewId": "17192850626", "changes": [{"dependencies": [], "type": "custom_code", "id": "b167f69816864cf289faaec74573cb18", "value": function($){var utils = window.optimizely.get("utils");

var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }
lang = lang.toLowerCase();

var translations = {
  en: {
    congratulations: "Congratulations, ",
    completion: "You've published your petition. Now, complete this step to get your first signatures.",
    steps: "Publish, Share, Grow",
    title: "It's time to share your petition!",
    body: "Successful petitions are <strong>shared many times and in different places.</strong> You know how much your petition matters, now tell your friends:",
    exit: "Skip, I'm done sharing for now",
    title2: " take the next step. Share now.",
    body2: "Successful petitions starters <strong>share at least 3 times on the very first day.</strong> Make sure everyone sees your petition.",
  },
  it: {
    congratulations: "Congratulazioni, ",
    completion: "Hai pubblicato la tua petizione. Completa ora questo passaggio per ottenere le prime firme.",
    steps: "Pubblica, Condividi, Rafforza",
    title: "È il momento di condividere la tua petizione!",
    body: "Le petizioni di successo vengono <strong>condivise spesso e in modi diversi.</strong> Fai sapere ai tuoi amici che la tua petizione è importante:",
    exit: "Salta, ho finito di condividere per ora",
    title2: " fai il prossimo passo. Condividi ora.",
    body2: "Ha più possibilità di successo chi <strong>condivide la propria petizione almeno 3 volte nel primo giorno.</strong> Fatti sentire! ",
  },
  es: {
    congratulations:  "¡Enhorabuena ",
    completion: "Acabas de publicar tu petición. Ahora termina este paso para lograr tus primeras firmas.",
    steps: "Publica, comparte, haz que crezca",
    title: "¡Ya puedes compartir tu petición!",
    body: "Las peticiones más exitosas <strong>son compartidas muchas veces en muchos lugares</strong>. Tu petición es importante, házselo saber a tus amigos:",
    exit: "Saltar, no puedo compartir ahora",
    title2: " da el próximo paso. Comparte ahora. ",
    body2: "Los creadores de petición con más éxito <strong>comparten su petición al menos 3 veces durante el primer día.</strong> Asegúrate de que todo el mundo la ve. ",
  },
};

utils.waitForElement('.share-for-starters').then(function(starterShare) {
  
  var firstName = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : '';
  var flashMessage = document.querySelector('.flash-message-success .col-xs-12 p');
  flashMessage.innerHTML = translations[lang].congratulations + firstName + '! ' + translations[lang].completion;
  
  starterShare.classList.add('share-for-starters-custom');
  
  var firstCard = starterShare.querySelector('.row.match-height .psf-combo-embedded-card:nth-of-type(1)');
  
  if (starterShare.querySelector('.page-wrap .photo-component')) {
   	var photo = starterShare.querySelector('.page-wrap .photo-component');
    firstCard.insertBefore(photo, firstCard.firstChild);
  }
  
  // hide header in safe way
  document.getElementById('main-header-responsive').classList.add('share-hide-header');
  
  // change copy
  var heading = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.hidden-xs');
  var headingMobile = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.visible-xs');
  var copy = starterShare.querySelector('.row.match-height .psf-combo-embedded-card p.mbxl.type-l');
  heading.classList.add('txt-l');
  headingMobile.classList.add('txt-l');
  copy.classList.add('txt-l');
  
  heading.innerText = translations[lang].title;
  headingMobile.innerText = translations[lang].title;
  copy.innerHTML = translations[lang].body;
  
  var skip = starterShare.querySelector('.js-default-footer-text');
  skip.classList.add('link-subtle', 'type-weak');
  skip.innerHTML = '<span>' + translations[lang].exit + '</span>';
  
  utils.waitForElement('.hide-overflow .activity-feed-item-enter.activity-feed-item-enter-active').then(function() {
		document.querySelector('[data-view="components/footer"]').classList.add('share-hide-header');
  });
  
  starterShare.querySelector('.page-wrap > div:first-child').classList.remove('bg-default');
  starterShare.querySelector('.page-wrap > div:first-child').classList.add('bg-brighter');
  var copylinkcard = document.querySelector('.share-options-list .js-copylink-card');
	copylinkcard.parentNode.insertBefore(copylinkcard, copylinkcard.parentNode.firstChild);
  
});
}}, {"value": "<style>.share-for-starters-custom {\n\tpadding: 10px;\n  padding-top: 20px;\n}\n\n.share-for-starters-custom, .share-for-starters-custom .bg-default {\n\tbackground: #FFFCF7 !important;\n}\n\n.share-for-starters-custom .box-sm.xs-full-height.page-wrap > .bg-default {\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n  margin-top: 0;\n}\n\n.share-for-starters-custom .row.match-height .psf-combo-embedded-card .photo-component {\n    margin-top: -30px;\n    margin-left: -20px;\n    margin-right: -20px;\n    margin-bottom: 10px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n}\n\n.share-for-starters-custom .bg-default {\n  padding-bottom: 5px;\n}\n\n.share-hide-header {\n  display: none !important;\n}\n\n.share-for-starters-custom .js-facebook-share-box .btn-fb {\n    background: #fff;\n    border: 1px solid #dbd9db !important;\n  \tcolor: #363135;\n  \tfont-weight: normal;\n  \tmin-height: 50px;\n}\n\n.share-for-starters-custom .js-facebook-share-box .btn-fb .symbol {\n  color: #37639e;\n}\n\n.share-for-starters-custom .btn-action[data-share-context=\"google\"] {\n  \tbackground: #fff;\n    border: 1px solid #dbd9db !important;\n  \tcolor: #363135;\n  \tfont-weight: normal;\n}\n\n.share-for-starters-custom .btn-action[data-share-context=\"google\"] .symbol {\n  \tcolor: #ec2c22;\n}\n\n.share-for-starters-custom .js-sms-card [data-view=\"components/share_buttons/sms\"] {\n  color: inherit;\n  text-decoration: none;\n}\n.page-wrap > .bg-brighter {\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n}\nul.share-options-list .symbol {\n\tfont-size: 1.375rem !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "a5e4bfec81604cc99068c83c577415fd"}]}], "name": null}, {"id": "17184780718", "actions": [{"viewId": "17192850626", "changes": [{"dependencies": [], "type": "custom_code", "id": "ACB74432-D20F-41FC-B90F-43C11940FD5B", "value": function($){var utils = window.optimizely.get("utils");
try {
var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }
lang = lang.toLowerCase();
} catch(err) {console.error(err);}
var translations = {
  en: {
    congratulations: "Congratulations, ",
    completion: "You've published your petition. Now, complete this step to get your first signatures.",
    steps: "Publish, Share, Grow",
    title: "It's time to share your petition!",
    body: "Successful petitions are <strong>shared many times and in different places.</strong> You know how much your petition matters, now tell your friends:",
    exit: "Skip, I'm done sharing for now",
    title2: " take the next step. Share now.",
    body2: "Successful petitions starters <strong>share at least 3 times on the very first day.</strong> Make sure everyone sees your petition.",
  },
  it: {
    congratulations: "Congratulazioni, ",
    completion: "Hai pubblicato la tua petizione. Completa ora questo passaggio per ottenere le prime firme.",
    steps: "Pubblica, Condividi, Rafforza",
    title: "È il momento di condividere la tua petizione!",
    body: "Le petizioni di successo vengono <strong>condivise spesso e in modi diversi.</strong> Fai sapere ai tuoi amici che la tua petizione è importante:",
    exit: "Salta, ho finito di condividere per ora",
    title2: " fai il prossimo passo. Condividi ora.",
    body2: "Ha più possibilità di successo chi <strong>condivide la propria petizione almeno 3 volte nel primo giorno.</strong> Fatti sentire! ",
  },
  es: {
    congratulations:  "¡Enhorabuena ",
    completion: "Acabas de publicar tu petición. Ahora termina este paso para lograr tus primeras firmas.",
    steps: "Publica, comparte, haz que crezca",
    title: "¡Ya puedes compartir tu petición!",
    body: "Las peticiones más exitosas <strong>son compartidas muchas veces en muchos lugares</strong>. Tu petición es importante, házselo saber a tus amigos:",
    exit: "Saltar, no puedo compartir ahora",
    title2: " da el próximo paso. Comparte ahora. ",
    body2: "Los creadores de petición con más éxito <strong>comparten su petición al menos 3 veces durante el primer día.</strong> Asegúrate de que todo el mundo la ve. ",
  },
};

utils.waitForElement('.share-for-starters').then(function(starterShare) {

  
  var firstName = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : '';
  var flashMessage = document.querySelector('.flash-message-success .col-xs-12 p');
  flashMessage.innerHTML = translations[lang].congratulations + firstName + '! ' + translations[lang].completion;
  
  starterShare.classList.add('share-for-starters-custom');
  
  var firstCard = starterShare.querySelector('.row.match-height .psf-combo-embedded-card:nth-of-type(1)');
  
  if (starterShare.querySelector('.page-wrap .photo-component')) {
   	var photo = starterShare.querySelector('.page-wrap .photo-component');
    firstCard.insertBefore(photo, firstCard.firstChild);
  }
  
  // hide header in safe way
  document.getElementById('main-header-responsive').classList.add('share-hide-header');
  
  // change copy
  var heading = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.hidden-xs');
  var headingMobile = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.visible-xs');
  var copy = starterShare.querySelector('.row.match-height .psf-combo-embedded-card p.mbxl.type-l');
  heading.classList.add('txt-l');
  headingMobile.classList.add('txt-l');
  copy.classList.add('txt-l');
  
  heading.innerText = translations[lang].title;
  headingMobile.innerText = translations[lang].title;
  copy.innerHTML = translations[lang].body;
  
  var skip = starterShare.querySelector('.js-default-footer-text');
  skip.classList.add('link-subtle', 'type-weak');
  skip.innerHTML = '<span>' + translations[lang].exit + '</span>';
  
  utils.waitForElement('.hide-overflow .activity-feed-item-enter.activity-feed-item-enter-active').then(function() {
		document.querySelector('[data-view="components/footer"]').classList.add('share-hide-header');
  });
  
  utils.waitForElement('.share-for-starters .share-options-list').then(function(shareList) {
    var shareOptions = starterShare.querySelectorAll('.share-options-list > *');
    var gmail = starterShare.querySelector('.js-gmail-card');
    var newOrder = gmail ? 
      ['js-gmail-card', 'js-facebook-card','js-copylink-card','js-whatsapp-card','js-twitter-card','js-sms-card'] :
      ['js-facebook-card','js-copylink-card','js-whatsapp-card','js-email-card','js-twitter-card','js-sms-card'];
    newOrder.forEach(function(orderEl, i) {
      var newChild;
      shareOptions.forEach(function(option) {
        if (option.classList.contains(orderEl)) {
          newChild = option;
        }
      });
      shareOptions[i].parentNode.appendChild(newChild);
    });
  });
  
  starterShare.querySelector('.page-wrap > div:first-child').classList.remove('bg-default');
  starterShare.querySelector('.page-wrap > div:first-child').classList.add('bg-brighter');
});
}}, {"value": "<style>.share-for-starters-custom {\n\tpadding: 10px;\n  padding-top: 20px;\n}\n\n.share-for-starters-custom, .share-for-starters-custom .bg-default {\n\tbackground: #FFFCF7 !important;\n}\n\n.share-for-starters-custom .box-sm.xs-full-height.page-wrap > .bg-default {\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n  margin-top: 0;\n}\n\n.share-for-starters-custom .row.match-height .psf-combo-embedded-card .photo-component {\n    margin-top: -30px;\n    margin-left: -20px;\n    margin-right: -20px;\n    margin-bottom: 10px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n}\n\n.share-for-starters-custom .bg-default {\n  padding-bottom: 5px;\n}\n\n.share-hide-header {\n  display: none !important;\n}\n\n.share-for-starters-custom .js-sms-card [data-view=\"components/share_buttons/sms\"] {\n  color: inherit;\n  text-decoration: none;\n}\n\nul.share-options-list .symbol {\n\tfont-size: 1.375rem !important;\n}\n.page-wrap > .bg-brighter {\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "C646F8ED-A052-469B-863E-317A3EE017DE"}]}], "name": null}, {"id": "17206580476", "actions": [{"viewId": "17192850626", "changes": [{"dependencies": [], "type": "custom_code", "id": "9163A7A1-0F92-467A-B4B2-C9F3772F3D00", "value": function($){var utils = window.optimizely.get("utils");
try {
var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }
lang = lang.toLowerCase();
} catch(err) {console.error(err);}
var translations = {
  en: {
    congratulations: "Congratulations, ",
    completion: "You've published your petition. Now, complete this step to get your first signatures.",
    steps: "Publish, Share, Grow",
    title: "It's time to share your petition!",
    body: "Successful petitions are <strong>shared many times and in different places.</strong> You know how much your petition matters, now tell your friends:",
    exit: "Skip, I'm done sharing for now",
    title2: ", take the next step. Share now.",
    body2: "Successful petitions starters <strong>share at least 3 times on the very first day.</strong> Make sure everyone sees your petition.",
  },
  it: {
    congratulations: "Congratulazioni, ",
    completion: "Hai pubblicato la tua petizione. Completa ora questo passaggio per ottenere le prime firme.",
    steps: "Pubblica, Condividi, Rafforza",
    title: "È il momento di condividere la tua petizione!",
    body: "Le petizioni di successo vengono <strong>condivise spesso e in modi diversi.</strong> Fai sapere ai tuoi amici che la tua petizione è importante:",
    exit: "Salta, ho finito di condividere per ora",
    title2: ", fai il prossimo passo. Condividi ora.",
    body2: "Ha più possibilità di successo chi <strong>condivide la propria petizione almeno 3 volte nel primo giorno.</strong> Fatti sentire! ",
  },
  es: {
    congratulations:  "¡Enhorabuena ",
    completion: "Acabas de publicar tu petición. Ahora termina este paso para lograr tus primeras firmas.",
    steps: "Publica, comparte, haz que crezca",
    title: "¡Vamos a por las primeras 5 firmas!",
    body: "Si consigues <strong>5 firmas,</strong> tu petición será visible para toda la comunidad de Change.org",
    exit: "Saltar, no puedo compartir ahora",
    title2: ", da el próximo paso. Comparte ahora. ",
    body2: "Los creadores de petición con más éxito <strong>comparten su petición al menos 3 veces durante el primer día.</strong> Asegúrate de que todo el mundo la ve. ",
  },
};

utils.waitForElement('.share-for-starters').then(function(starterShare) {

  
  var firstName = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : '';
  var flashMessage = document.querySelector('.flash-message-success .col-xs-12 p');
  flashMessage.innerHTML = translations[lang].congratulations + firstName + '! ' + translations[lang].completion;
  
  starterShare.classList.add('share-for-starters-custom');
  
  var firstCard = starterShare.querySelector('.row.match-height .psf-combo-embedded-card:nth-of-type(1)');
  
  if (starterShare.querySelector('.page-wrap .photo-component')) {
   	var photo = starterShare.querySelector('.page-wrap .photo-component');
    firstCard.insertBefore(photo, firstCard.firstChild);
  }
  
  // hide header in safe way
  document.getElementById('main-header-responsive').classList.add('share-hide-header');
  
  // change copy
  var heading = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.hidden-xs');
  var headingMobile = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.visible-xs');
  var copy = starterShare.querySelector('.row.match-height .psf-combo-embedded-card p.mbxl.type-l');
  heading.classList.add('txt-l');
  headingMobile.classList.add('txt-l');
  copy.classList.add('txt-l');
  
  heading.innerText = firstName + translations[lang].title2;
  headingMobile.innerText = firstName + translations[lang].title2;
  copy.innerHTML = translations[lang].body2;
  
  var skip = starterShare.querySelector('.js-default-footer-text');
  skip.classList.add('link-subtle', 'type-weak');
  skip.innerHTML = '<span>' + translations[lang].exit + '</span>';
  
  utils.waitForElement('.hide-overflow .activity-feed-item-enter.activity-feed-item-enter-active').then(function() {
		document.querySelector('[data-view="components/footer"]').classList.add('share-hide-header');
  });
  
  utils.waitForElement('.share-for-starters .share-options-list').then(function(shareList) {
    var shareOptions = starterShare.querySelectorAll('.share-options-list > *');
    var gmail = starterShare.querySelector('.js-gmail-card');
    var newOrder = gmail ? 
      ['js-gmail-card', 'js-facebook-card','js-copylink-card','js-whatsapp-card','js-twitter-card','js-sms-card'] :
      ['js-facebook-card','js-copylink-card','js-whatsapp-card','js-email-card','js-twitter-card','js-sms-card'];
    newOrder.forEach(function(orderEl, i) {
      var newChild;
      shareOptions.forEach(function(option) {
        if (option.classList.contains(orderEl)) {
          newChild = option;
        }
      });
      shareOptions[i].parentNode.appendChild(newChild);
    });
  });
  
  starterShare.querySelector('.page-wrap > div:first-child').classList.remove('bg-default');
  starterShare.querySelector('.page-wrap > div:first-child').classList.add('bg-brighter');
});
}}, {"value": "<style>.share-for-starters-custom {\n\tpadding: 10px;\n  padding-top: 20px;\n}\n\n.share-for-starters-custom, .share-for-starters-custom .bg-default {\n\tbackground: #FFFCF7 !important;\n}\n\n.share-for-starters-custom .box-sm.xs-full-height.page-wrap > .bg-default {\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n  margin-top: 0;\n}\n\n.share-for-starters-custom .row.match-height .psf-combo-embedded-card .photo-component {\n    margin-top: -30px;\n    margin-left: -20px;\n    margin-right: -20px;\n    margin-bottom: 10px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n}\n\n.share-for-starters-custom .bg-default {\n  padding-bottom: 5px;\n}\n\n.share-hide-header {\n  display: none !important;\n}\n\n.share-for-starters-custom .js-sms-card [data-view=\"components/share_buttons/sms\"] {\n  color: inherit;\n  text-decoration: none;\n}\n\nul.share-options-list .symbol {\n\tfont-size: 1.375rem !important;\n}\n.page-wrap > .bg-brighter {\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "DB5E01DC-BD8A-475C-ADF9-054E14B9437A"}]}], "name": null}, {"id": "17182920802", "actions": [{"viewId": "17192850626", "changes": [{"dependencies": [], "type": "custom_code", "id": "D203DEC0-BFF2-4F32-A1BC-7682721CD4C9", "value": function($){var utils = window.optimizely.get("utils");

var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }
lang = lang.toLowerCase();

var translations = {
  en: {
    congratulations: "Congratulations, ",
    completion: "You've published your petition. Now, complete this step to get your first signatures.",
    steps: "Publish, Share, Grow",
    title: "It's time to share your petition!",
    body: "Successful petitions are <strong>shared many times and in different places.</strong> You know how much your petition matters, now tell your friends:",
    exit: "Skip, I'm done sharing for now",
    title2: ", take the next step. Share now.",
    body2: "Successful petitions starters <strong>share at least 3 times on the very first day.</strong> Make sure everyone sees your petition.",
    stepper: 'https://static.change.org/psf-experiments/en-stepper-sap.png'
  },
  it: {
    congratulations: "Congratulazioni, ",
    completion: "Hai pubblicato la tua petizione. Completa ora questo passaggio per ottenere le prime firme.",
    steps: "Pubblica, Condividi, Rafforza",
    title: "È il momento di condividere la tua petizione!",
    body: "Le petizioni di successo vengono <strong>condivise spesso e in modi diversi.</strong> Fai sapere ai tuoi amici che la tua petizione è importante:",
    exit: "Salta, ho finito di condividere per ora",
    title2: ", fai il prossimo passo. Condividi ora.",
    body2: "Ha più possibilità di successo chi <strong>condivide la propria petizione almeno 3 volte nel primo giorno.</strong> Fatti sentire! ",
    stepper: "https://static.change.org/psf-experiments/it-stepper-sap.png"
  },
  es: {
    congratulations:  "¡Enhorabuena ",
    completion: "Acabas de publicar tu petición. Ahora termina este paso para lograr tus primeras firmas",
    steps: "Publica, comparte, aumenta",
    title: "¡Ya puedes compartir tu petición!",
    body: "Las peticiones más exitosas son compartidas muchas veces en muchos lugares. Tu petición es importante, házselo saber a tus amigos: ",
    exit: "Saltar, no puedo compartir ahora",
    title2: ", da el próximo paso. Comparte ahora. ",
    body2: "Los creadores de petición con más éxito <strong>comparten su petición al menos 3 veces durante el primer día.</strong> Asegúrate de que todo el mundo la ve. ",
    stepper: "https://static.change.org/psf-experiments/es-stepper-sap.png"
  },
};

utils.waitForElement('.share-for-starters').then(function(starterShare) {

  
  var firstName = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : '';
  var flashMessage = document.querySelector('.flash-message-success .col-xs-12 p');
  flashMessage.innerHTML = translations[lang].congratulations + firstName + '! ' + translations[lang].completion;
  
  starterShare.classList.add('share-for-starters-custom');
  
  var firstCard = starterShare.querySelector('.row.match-height .psf-combo-embedded-card:nth-of-type(1)');
  
  if (starterShare.querySelector('.page-wrap .photo-component')) {
   	var photo = starterShare.querySelector('.page-wrap .photo-component');
    firstCard.insertBefore(photo, firstCard.firstChild);
  }
  
  // hide header in safe way
  document.getElementById('main-header-responsive').classList.add('share-hide-header');
  
  // change copy
  var heading = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.hidden-xs');
  var headingMobile = starterShare.querySelector('.row.match-height .psf-combo-embedded-card h1.visible-xs');
  var copy = starterShare.querySelector('.row.match-height .psf-combo-embedded-card p.mbxl.type-l');
  heading.classList.add('txt-l');
  headingMobile.classList.add('txt-l');
  copy.classList.add('txt-l');
  
  heading.innerText = firstName + translations[lang].title2;
  headingMobile.innerText = firstName + translations[lang].title2;
  copy.innerHTML = translations[lang].body2;
  
  var skip = starterShare.querySelector('.js-default-footer-text');
  skip.classList.add('link-subtle', 'type-weak');
  skip.innerHTML = '<span>' + translations[lang].exit + '</span>';
  
  utils.waitForElement('.hide-overflow .activity-feed-item-enter.activity-feed-item-enter-active').then(function() {
		document.querySelector('[data-view="components/footer"]').classList.add('share-hide-header');
  });
  
  utils.waitForElement('.share-for-starters .share-options-list').then(function(shareList) {
    var shareOptions = starterShare.querySelectorAll('.share-options-list > *');
    var gmail = starterShare.querySelector('.js-gmail-card');
    var newOrder = gmail ? 
      ['js-gmail-card', 'js-facebook-card','js-copylink-card','js-whatsapp-card','js-twitter-card','js-sms-card'] :
      ['js-facebook-card','js-copylink-card','js-whatsapp-card','js-email-card','js-twitter-card','js-sms-card'];
    newOrder.forEach(function(orderEl, i) {
      var newChild;
      shareOptions.forEach(function(option) {
        if (option.classList.contains(orderEl)) {
          newChild = option;
        }
      });
      shareOptions[i].parentNode.appendChild(newChild);
    });
  });

  var progressWrap = document.createElement('div');
  progressWrap.innerHTML = '<img src="' + translations[lang].stepper + '" class="optly-stepper">';
  starterShare.insertBefore(progressWrap, starterShare.firstChild);

  starterShare.querySelector('.page-wrap > div:first-child').classList.remove('bg-default');
  starterShare.querySelector('.page-wrap > div:first-child').classList.add('bg-brighter');
  
});
}}, {"value": "<style>.share-for-starters-custom {\n\tpadding: 10px;\n  padding-top: 20px;\n}\n\n.share-for-starters-custom, .share-for-starters-custom .bg-default {\n\tbackground: #FFFCF7 !important;\n}\n\n.share-for-starters-custom .box-sm.xs-full-height.page-wrap > .bg-default {\n  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n  margin-top: 0;\n}\n\n.share-for-starters-custom .row.match-height .psf-combo-embedded-card .photo-component {\n    margin-top: -30px;\n    margin-left: -20px;\n    margin-right: -20px;\n    margin-bottom: 10px;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    overflow: hidden;\n}\n\n.share-for-starters-custom .bg-default {\n  padding-bottom: 5px;\n}\n\n.share-hide-header {\n  display: none !important;\n}\n\n.share-for-starters-custom .js-sms-card [data-view=\"components/share_buttons/sms\"] {\n  color: inherit;\n  text-decoration: none;\n}\n\nul.share-options-list .symbol {\n\tfont-size: 1.375rem !important;\n}\n.optly-stepper {\n    width: 320px;\n    max-width: 100%;\n    margin: auto;\n    padding: 10px 15px 20px;\n}\n.page-wrap > .bg-brighter {\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "157C9225-5109-4682-8419-7DE359C7B3EF"}]}], "name": null}], "audienceIds": ["and", "11487071591", "11800860209"], "changes": null, "id": "17223000369", "integrationSettings": null}], "id": "17221380879", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17468381444", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": null, "viewIds": ["14495670450"], "experiments": [{"weightDistributions": [{"entityId": "17815460916", "endOfRange": 8000}, {"entityId": "17808130108", "endOfRange": 9000}, {"entityId": "17821740009", "endOfRange": 10000}], "audienceName": null, "name": "everyone_else", "bucketingStrategy": null, "variations": [{"id": "17815460916", "actions": [{"viewId": "14495670450", "changes": [{"dependencies": [], "type": "custom_code", "id": "F41E0FCF-7ED4-495D-9C4E-348894538276", "value": function($){var utils = window.optimizely.get("utils");


function init(react, membershipModal) {
  
  var heading = membershipModal.querySelector('[data-testid="ppmu-title"]');

  heading.innerHTML = '100% of your contribution helps petitions win!';
  

}

utils.waitUntil(function() { return !!window.App; }).then(function() {
  utils.waitForElement('[data-view="petitions/sponsors/membership_ask"]').then(function(membershipModal) {
    init(false, membershipModal);
  });
  utils.waitForElement('#modal-root').then(function(membershipModal) {
    init(true, membershipModal);
  });
});
}}]}], "name": null}, {"id": "17808130108", "actions": [{"viewId": "14495670450", "changes": [{"dependencies": [], "type": "custom_code", "id": "a26b7fcc43a64dc29912eba555e39fca", "value": function($){var utils = window.optimizely.get("utils");


function init(react, membershipModal) {
  var appStateLocale = changeTargetingData.appState.locale;
  var lang = '';
  var locale = '';
  if (appStateLocale) {
          var localeData = appStateLocale.split('-');
          lang = localeData[0];
          locale = localeData[1];
          var appCountryCode = changeTargetingData.appState.countryCode;
          if (appCountryCode && appCountryCode !== locale) {
              locale = appCountryCode;
          }
  } else {
          var browserLocale = window.navigator.userLanguage || window.navigator.language;
          var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
          lang = browserLocaleData[0];
          locale = browserLocaleData[1];
  }
  locale = locale.toLowerCase();
  lang = lang.toLowerCase();
  var signsPerDollar = 1.38;
  var impressionsPerDollar = 15.93;
  switch(locale) {
    case 'gb':
      signsPerDollar = 1.35;
      impressionsPerDollar = 14.19;
      break;
    case 'au':
      signsPerDollar = 1.34;
      impressionsPerDollar = 14.96;
      break;
    case 'ca':
      signsPerDollar = 3.70;
      impressionsPerDollar = 39.80;
      break;
    default:
      signsPerDollar = 1.38;
      impressionsPerDollar = 15.93;
  }

  var displayName = changeTargetingData.viewer.user.displayName;
  var heading = membershipModal.querySelector('[data-testid="ppmu-title"]');
  var copy = membershipModal.querySelector('[data-testid="ppmu-subtitle"]');
  var memberYes = membershipModal.querySelector('[data-testid="ppmu-yes"]');
  var memberNo = membershipModal.querySelector('[data-testid="ppmu-no"]');
  var value = memberYes.innerText.match(/\d+/);
  var currencySymbol;
  
  /*
  memberYes.style.display = 'block';
  var discoverBtn = document.createElement('a');
  discoverBtn.className = "btn mbs btn-big btn-full";
  discoverBtn.style.display = 'block';
  discoverBtn.innerText = "Discover related petitions";
  discoverBtn.href = window.location.href.split('/sponsors')[0] + '/d';
  memberYes.parentNode.appendChild(discoverBtn);
  */

  heading.parentNode.classList.add('xs-ptn');

  heading.innerHTML = (displayName ? displayName + ', we' : 'We') + ' could use more support in keeping Change.org free and independent';
  heading.classList.remove('txt-c'); 
  heading.classList.add('txt-l', 'mbm');
  copy.innerHTML = ''+
    '<p>We believe that everyone, everywhere, deserves to have their voice heard. That’s why we started Change.org as a free and independent platform, hosting petitions like the one you just signed.</p>' +
    '<p><span style="background:yellow;font-style:normal;font-weight:bold">Every day, our small team reaches out to thousand of petition starters.</span> We give them the crucial support they need in order to win their fight against powerful interests. And we see this working: every single hour, a new petition started on Change.org is declared a victory.</p>' +
    '<p><b>However, none of this would be possible without a handful of people like you contributing monthly.</b></p>' +
    '<p>Today, we would like to ask you to join them. If you give monthly, <span style="background:yellow;font-style:normal;font-weight:bold">100% of your money will go towards supporting thousands of new petition starters and funding the development of free online petition tools.</span></p>' +
    '<p class="mbxxl"><b>People power needs you. Would you consider helping becoming a member?</b></p>';
  copy.classList.remove('txt-c');
  copy.classList.add('txt-l', 'type-l');

  if (value !== null) {
    currencySymbol = memberYes.innerText.charAt(value.index - 1);
    memberYes.innerText = 'Yes! I’ll give '+currencySymbol+value[0]+' monthly to keep Change.org independent';
    memberYes.classList.add('btn-big');
  }
  
  var a = parseInt(value[0]);
  var impressions = a >= 25 ? Math.ceil((a * impressionsPerDollar)*2) : Math.ceil(a * impressionsPerDollar);

  var banner = document.createElement('div');
  banner.className = 'optly-banner pvs phm mbxxl xs-phn';
  var bannerText = '';
  if (a && a > 3) {
    bannerText = 'Your '+currencySymbol+value[0]+' will advertise this petition ' + impressions.toLocaleString() + ' extra times on Change.org.';
  } else {
    bannerText = 'Your contribution will advertise this petition to more people on Change.org.';
  }
  banner.innerHTML = '' +
    '<div class="arrange">' +
    '    <div class="arrange-fit">' +
    '        <img src="https://static.change.org/promoted-thank-you/heart.svg" style="height: 60px;margin-right: 24px;">' +
    '    </div>' +
    '    <div class="arrange-fill">' +
    '        <h3 class="mtn mbxxs">Thank you!</h3>' +
    '        <p id="receipt-amount">'+bannerText+'</p>' +
    '    </div>' +
    '</div>';

  heading.parentNode.insertBefore(banner, heading);

  /*
  disclaimer.innerText = 'We’ll use your saved payment information';
  disclaimer.parentNode.appendChild(disclaimer);
  */
  var disclaimer = membershipModal.querySelector('[data-testid="ppmu-disclaimer"]');
  memberNo.classList.add('display-block', 'txt-c', 'mts');
  disclaimer.parentNode.appendChild(memberNo);

  var support = document.createElement('div');
  support.className = 'optly-support';
  support.innerHTML = '' +
    '<hr class="mvxl">' +
    '<h3 class="mbxxl">The work you\'d be supporting:</h3>' +
    '<img src="https://static.change.org/promoted-thank-you/membership-explained-1.jpg" alt="" class="mbs">' +
    '<p class="mbxxl type-l">Often, petition starters feel isolated. They are inspiring individuals, but it’s hard to lead a mobilization with no experience! Our seasoned campaign advisers take the time to meet with them, to provide personalised support and advice. </p>' +
    '<img src="https://static.change.org/promoted-thank-you/membership-explained-2.jpg" alt="" class="mbs">' +
    '<p class="mbxxl type-l">Getting your voice heard usually requires media attention. But this doesn’t come automatically! We help petition starters to reach out to journalists and handle interviews, so that their message can be taken seriously.</p>' +
    '<img src="https://static.change.org/promoted-thank-you/membership-explained-3.jpg" alt="" class="mbs">' +
    '<p class="mbxxl type-l">Influencing powerful interests requires many signatures... and skills to negotiate with decision makers. We are here to help individuals, with no background in activism, navigate the political or economic powers and win their campaign.</p>';

  heading.parentNode.appendChild(support);

  var newBtnSection = copy.nextSibling.cloneNode(true);
  newBtnSection.classList.add('mbl');
  var newMemberYes = newBtnSection.querySelector('.js-membership-yes.btn');
  heading.parentNode.appendChild(newBtnSection);
  
  if (react) {
  	var disclaimerClone = disclaimer.cloneNode(true);
    heading.parentNode.appendChild(disclaimerClone);
  }

}

utils.waitUntil(function() { return !!window.App; }).then(function() {
  utils.waitForElement('[data-view="petitions/sponsors/membership_ask"]').then(function(membershipModal) {
    init(false, membershipModal);
  });
  utils.waitForElement('#modal-root').then(function(membershipModal) {
    init(true, membershipModal);
  });
});
}}, {"value": "<style>.promoted-petition-payment-form .modal, .modal-dialog{\n    background: #ffffff;\n  margin-top: 0;\n}\n#modal-root > div {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow-y: scroll;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n#modal-root [data-testid=\"ppmu-modal\"] {\n    height: auto;\n    max-height: none;\n  margin: 0;\n}\n.optly-banner {\n  padding: 15px;\n  text-align: left;\n  margin-bottom: -12px;\n\tposition: relative;\n}\n.optly-banner * {\n    position: relative;\n    z-index: 1;\n}\n.optly-banner:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    height: 100%;\n    width: 200vw;\n  transform: translateX(-50%);\n    background: #fffcf7;\n    border-radius: 5px;\n    border: 1px solid #FFEDC9;\n    z-index: 0;\n}\n.bg-teal {\n  background-color: #3ECA8A !important;\n}\n.membership-ask > div:first-child {\n  margin-bottom: 30px;\n\tpadding-bottom: 10px;\n}\n.js-membership-yes.btn {\n \tline-height: 1.4 !important; \n}\n.optly-support img {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .promoted-petition-payment-form .modal-dialog {\n    vertical-align: top;\n    background-color: transparent;\n  }\n  .optly-banner {\n   \tmargin-top: 30px; \n  }\n  .optly-banner:before {\n    width: 100%;\n    transform: none;\n    left: 0;\n\t}\n  .modal-dialog {\n  \twidth: 700px;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "f5e98c8bd1c644ea8deb843b471e3fe7"}]}], "name": null}, {"id": "17821740009", "actions": [{"viewId": "14495670450", "changes": [{"dependencies": [], "type": "custom_code", "id": "2778155587584083b7102e9808f61933", "value": function($){var utils = window.optimizely.get("utils");

function init(react, membershipModal) {
  var appStateLocale = changeTargetingData.appState.locale;
  var lang = '';
  var locale = '';
  if (appStateLocale) {
          var localeData = appStateLocale.split('-');
          lang = localeData[0];
          locale = localeData[1];
          var appCountryCode = changeTargetingData.appState.countryCode;
          if (appCountryCode && appCountryCode !== locale) {
              locale = appCountryCode;
          }
  } else {
          var browserLocale = window.navigator.userLanguage || window.navigator.language;
          var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
          lang = browserLocaleData[0];
          locale = browserLocaleData[1];
  }
  locale = locale.toLowerCase();
  lang = lang.toLowerCase();
  var signsPerDollar = 1.38;
  var impressionsPerDollar = 15.93;
  switch(locale) {
    case 'gb':
      signsPerDollar = 1.35;
      impressionsPerDollar = 14.19;
      break;
    case 'au':
      signsPerDollar = 1.34;
      impressionsPerDollar = 14.96;
      break;
    case 'ca':
      signsPerDollar = 3.70;
      impressionsPerDollar = 39.80;
      break;
    default:
      signsPerDollar = 1.38;
      impressionsPerDollar = 15.93;
  }
  
  var displayName = changeTargetingData.viewer.user.displayName;
  var heading = membershipModal.querySelector('[data-testid="ppmu-title"]');
  var copy = membershipModal.querySelector('[data-testid="ppmu-subtitle"]');
  var memberYes = membershipModal.querySelector('[data-testid="ppmu-yes"]');
  var memberNo = membershipModal.querySelector('[data-testid="ppmu-no"]');
  var value = memberYes.innerText.match(/\d+/);
  var currencySymbol;
  
  /*
  memberYes.style.display = 'block';
  var discoverBtn = document.createElement('a');
  discoverBtn.className = "btn mbs btn-big btn-full";
  discoverBtn.style.display = 'block';
  discoverBtn.innerText = "Discover related petitions";
  discoverBtn.href = window.location.href.split('/sponsors')[0] + '/d';
  memberYes.parentNode.appendChild(discoverBtn);
  */

  heading.parentNode.classList.add('xs-ptn');

  heading.innerHTML = '100% of your contribution helps petitions win!';
  heading.classList.remove('txt-c'); 
  heading.classList.add('txt-l', 'mbm');
  copy.innerHTML = ''+
    '<p>When you chip in, you’re helping a single petition (like the one you just signed!) get featured to more likely signers. If you go on to become a member, <span style="background:yellow;font-style:normal;">100% of your money connects our staff directly with hundreds of petition starters every month, and funds the development of free online petition tools.</span> We’re fully committed to winning lasting change -- can you help us get there?</p>';
  copy.classList.remove('txt-c');
  copy.classList.add('txt-l', 'type-l');

  if (value !== null) {
    currencySymbol = memberYes.innerText.charAt(value.index - 1);
    memberYes.innerText = 'Yes! I’ll give '+currencySymbol+value[0]+' monthly to keep Change.org independent';
    memberYes.classList.add('btn-big');
  }
  
  var a = parseInt(value[0]);
  var impressions = a >= 25 ? Math.ceil((a * impressionsPerDollar)*2) : Math.ceil(a * impressionsPerDollar);
  
  var banner = document.createElement('div');
  banner.className = 'optly-banner pvs phm mbxxl xs-phn';
  var bannerText = '';
  if (a && a > 3) {
    bannerText = 'Your '+currencySymbol+value[0]+' will advertise this petition ' + impressions.toLocaleString() + ' extra times on Change.org.';
  } else {
    bannerText = 'Your contribution will advertise this petition to more people on Change.org.';
  }
  banner.innerHTML = '' +
    '<div class="arrange">' +
    '    <div class="arrange-fit">' +
    '        <img src="https://static.change.org/promoted-thank-you/heart.svg" style="height: 60px;margin-right: 24px;">' +
    '    </div>' +
    '    <div class="arrange-fill">' +
    '        <h3 class="mtn mbxxs">Thank you!</h3>' +
    '        <p id="receipt-amount">'+bannerText+'</p>' +
    '    </div>' +
    '</div>';

  heading.parentNode.insertBefore(banner, heading);

  /*
  disclaimer.innerText = 'We’ll use your saved payment information';
  disclaimer.parentNode.appendChild(disclaimer);
  */
  var disclaimer = membershipModal.querySelector('[data-testid="ppmu-disclaimer"]');
  memberNo.classList.add('display-block', 'txt-c', 'mts');
  disclaimer.parentNode.appendChild(memberNo);

  var support = document.createElement('div');
  support.className = 'optly-support';
  support.innerHTML = '' +
    '<hr class="mvxl">' +
    '<h3 class="mbxxl">The work you\'d be supporting:</h3>' +
    '<img src="https://static.change.org/promoted-thank-you/membership-explained-1.jpg" alt="" class="mbs">' +
    '<p class="mbxxl type-l">Often, petition starters feel isolated. They are inspiring individuals, but it’s hard to lead a mobilization with no experience! Our seasoned campaign advisers take the time to meet with them, to provide personalised support and advice. </p>' +
    '<img src="https://static.change.org/promoted-thank-you/membership-explained-2.jpg" alt="" class="mbs">' +
    '<p class="mbxxl type-l">Getting your voice heard usually requires media attention. But this doesn’t come automatically! We help petition starters to reach out to journalists and handle interviews, so that their message can be taken seriously.</p>' +
    '<img src="https://static.change.org/promoted-thank-you/membership-explained-3.jpg" alt="" class="mbs">' +
    '<p class="mbxxl type-l">Influencing powerful interests requires many signatures... and skills to negotiate with decision makers. We are here to help individuals, with no background in activism, navigate the political or economic powers and win their campaign.</p>';

  heading.parentNode.appendChild(support);

  var newBtnSection = copy.nextSibling.cloneNode(true);
  newBtnSection.classList.add('mbl');
  var newMemberYes = newBtnSection.querySelector('.js-membership-yes.btn');
  heading.parentNode.appendChild(newBtnSection);
  
  if (react) {
  	var disclaimerClone = disclaimer.cloneNode(true);
    heading.parentNode.appendChild(disclaimerClone);
  }

}

utils.waitUntil(function() { return !!window.App; }).then(function() {
  utils.waitForElement('[data-view="petitions/sponsors/membership_ask"]').then(function(membershipModal) {
    init(false, membershipModal);
  });
  utils.waitForElement('#modal-root').then(function(membershipModal) {
    init(true, membershipModal);
  });
});
}}, {"value": "<style>.promoted-petition-payment-form .modal, .modal-dialog{\n    background: #ffffff;\n  margin-top: 0;\n}\n#modal-root > div {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    overflow-y: scroll;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n}\n#modal-root [data-testid=\"ppmu-modal\"] {\n    height: auto;\n    max-height: none;\n  margin: 0;\n}\n.optly-banner {\n  padding: 15px;\n  text-align: left;\n  margin-bottom: -12px;\n\tposition: relative;\n}\n.optly-banner * {\n    position: relative;\n    z-index: 1;\n}\n.optly-banner:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    height: 100%;\n    width: 200vw;\n  transform: translateX(-50%);\n    background: #fffcf7;\n    border-radius: 5px;\n    border: 1px solid #FFEDC9;\n    z-index: 0;\n}\n.bg-teal {\n  background-color: #3ECA8A !important;\n}\n.membership-ask > div:first-child {\n  margin-bottom: 30px;\n\tpadding-bottom: 10px;\n}\n.js-membership-yes.btn {\n \tline-height: 1.4 !important; \n}\n.optly-support img {\n  width: 100%;\n}\n@media (min-width: 768px) {\n  .promoted-petition-payment-form .modal-dialog {\n    vertical-align: top;\n    background-color: transparent;\n  }\n  .optly-banner {\n   \tmargin-top: 30px; \n  }\n  .optly-banner:before {\n    width: 100%;\n    transform: none;\n    left: 0;\n\t}\n  .modal-dialog {\n  \twidth: 700px;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "3c43a88f529d4463b210fc0910d65bc2"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17809421647", "integrationSettings": null}], "id": "17803781262", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17965120191", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": null, "viewIds": ["17838010053"], "experiments": [{"weightDistributions": [{"entityId": "17861160045", "endOfRange": 5000}, {"entityId": "17804891450", "endOfRange": 10000}], "audienceName": null, "name": "everyone_else", "bucketingStrategy": null, "variations": [{"id": "17861160045", "actions": [], "name": null}, {"id": "17804891450", "actions": [{"viewId": "17838010053", "changes": [{"dependencies": [], "type": "custom_code", "id": "edd570ea74664b869d6977570ef4f523", "value": function($){var utils = window.optimizely.get("utils");
var fname = window.changeTargetingData.viewer.user.displayName.split(" ")[0];

var ua = window.changeTargetingData.viewer.activity;
var recruitCount = 0;
Object.keys(ua).forEach(function(k) {
      var parts = k.split('.');
      if (parts[0] === 'recruit' && parts[1] && parts[2] === 'count') {
        recruitCount += ua[k];
      } 
});

var modal = '<div class="modal"><div id="recruit-modal" class="modal-dialog modal-small animate animate-zoom-in"><button class="modal-close link-stealth position-absolute position-right position-top pas js-toggle-modal"><span class="symbol symbol-close symbol-compact"></span></button><img src="https://static.change.org/psf-experiments/whale-1.png"><h3 class="txt-c mbl">'+fname+', would you like to join our VIP mailing list?</h3><p>You’re a natural at building support. You regularly share petitions to your network and now have helped over '+recruitCount.toLocaleString()+' people discover new petitions to sign! That’s pretty impressive.</p><p class="mtxs mbs">We’d love you to join our VIP mailing list. You’ll receive <strong>personalized content</strong>, including hand-crafted emails from our campaigns team suggesting petitions based on your preferences.</p><button id="yes" class="btn btn-action btn-big btn-full mts">Yes, add me to the VIP mailing list!</button><p class="type-weak mtxs txt-c">You can unsubscribe at any time</p><button id="no" class="btn btn-outline btn-big btn-full mts">No, I’m not interested.</button></div></div>' + 
    '<div class="second-step hide-fully"><div class="second-step-inner"><img src="https://static.change.org/psf-experiments/whale-2.png"><h3 class="txt-c mbl">Congratulations, '+fname+'! You’re now a VIP user.</h3><p>To get started, choose the topics you care about most.</p><div class="topics"><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="animals" id="animals" data-name="covid_19"  class="mrxxs mtxxxs"><strong>COVID-19</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="animals" id="animals" data-name="animals"  class="mrxxs mtxxxs"><strong>Animals</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="criminal_justice" id="criminal_justice" data-name="criminal_justice"  class="mrxxs mtxxxs"><strong>Criminal justice</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="entertainment" id="entertainment" data-name="entertainment"  class="mrxxs mtxxxs"><strong>Entertainment</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="environment" id="environment" data-name="environment"  class="mrxxs mtxxxs"><strong>Environment</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="food_health" id="food_healt" data-name="food_health"  class="mrxxs mtxxxs"><strong>Food & health</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="immigrant_rights" id="immigrant_rights" data-name="immigrant_rights"  class="mrxxs mtxxxs"><strong>Immigrant rights</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="lgbt_rights" id="lgbt_rights" data-name="lgbt_rights"  class="mrxxs mtxxxs"><strong>LGBT rights</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="womens_rights" id="womens_rights" data-name="womens_rights"  class="mrxxs mtxxxs"><strong>Women’s rights</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="gun_safety" id="gun_safety" data-name="gun_safety"  class="mrxxs mtxxxs"><strong>Gun safety</strong></label></div></div></div><div class="control-group mvxs"><div class="control"><div class="check "><label class=""><input type="checkbox" name="veterans" id="veterans" data-name="veterans"  class="mrxxs mtxxxs"><strong>Veterans</strong></label></div></div></div></div><button id="save-prefs" class="btn btn-action btn-big btn-full mts">Save preferences</button><a id="skip" class="display-block mtm mbs link-subtle type-weak">Skip for now</a></div></div>';

function fireEvent(ev) {
  utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent(ev);
  });
}


utils.waitForElement('#content').then(function(c) {
    var m = document.createElement('div');
    m.id = 'return-recruit-modal';
    m.innerHTML = modal;
    c.appendChild(m);
  
  fireEvent('optly_whale_first_modal_view');
    
    var mClose = document.querySelector('#recruit-modal .modal-close');
    mClose.addEventListener('click', function(){
      	fireEvent('optly_whale_first_modal_exit');
      	m.classList.add('hide-fully');
    }, false);
    
    document.querySelector('#recruit-modal #yes').addEventListener('click', function(){
      fireEvent('optly_whale_first_modal_yes');
      m.querySelector('.second-step').classList.remove('hide-fully');
      fireEvent('optly_whale_second_modal_view');
    }, false);
    
    document.querySelector('#recruit-modal #no').addEventListener('click', function(){
      fireEvent('optly_whale_first_modal_no');
      m.classList.add('hide-fully');
    }, false);
  
  document.querySelector('#return-recruit-modal #save-prefs').addEventListener('click', function(){
      fireEvent('optly_whale_second_modal_save');
      m.classList.add('hide-fully');
    	var allTopics = document.querySelectorAll('#return-recruit-modal .topics input[type="checkbox"]');
      for (var t = 0; t < allTopics.length; t++) {
       	 if (allTopics[t].checked) {
         	var topicName = allTopics[t].getAttribute('data-name');
          fireEvent('optly_whale_topic_'+topicName); 
         }
      }
    }, false);
  
  document.querySelector('#return-recruit-modal #skip').addEventListener('click', function(){
      fireEvent('optly_whale_second_modal_skip');
      m.classList.add('hide-fully');
    }, false);
    
});
}}, {"value": "<style>#recruit-modal {\n  background: #FFFCF7;\n\tbox-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);\n\tborder-radius: 4px;\n}\n\n#recruit-modal img {\n \twidth: 130px;\n  margin: 0 auto;\n}\n\n#recruit-modal #no {\n \tbackground: transparent; \n}\n\n.second-step {\n\t\tposition: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow-x: hidden;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n    z-index: 5005;\n    text-align: center;\n    background: #FFFCF7;\n}\n\n.second-step-inner {\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: 40px 15px 15px;\n}\n\n@media (min-width: 768px) {\n  .second-step-inner {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding: 40px 30px 30px;\n    width: 420px;\n  }\n}\n\n.second-step img {\n  width: 130px;\n  margin: 0 auto;\n}\n\n.second-step .topics {\n  width: 160px;\n  margin: 20px auto;\n  text-align: left;\n}\n\n.second-step .topics input[type=\"checkbox\"] {\n  margin-right: 20px !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "90EFE735-DF78-4271-9703-DC860ED6F9F9"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17834480090", "integrationSettings": null}], "id": "17818220710", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17830173010", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 0, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": null, "viewIds": ["17918980302"], "experiments": [{"weightDistributions": [{"entityId": "17878171004", "endOfRange": 2500}, {"entityId": "17909160594", "endOfRange": 5000}, {"entityId": "17892480608", "endOfRange": 7500}, {"entityId": "17913280581", "endOfRange": 10000}], "audienceName": null, "name": "everyone_else", "bucketingStrategy": null, "variations": [{"id": "17878171004", "actions": [{"viewId": "17918980302", "changes": [{"dependencies": [], "type": "custom_code", "id": "74F0BAB4-834F-47BF-9B63-DCD51A3AC7D6", "value": function($){var utils = window.optimizely.get("utils");

window.onload = function() { 
	utils.waitForElement('[data-testid="starter-phone-collection-submit"]').then(function(btn) {
    window.trackEvent('starter_phone_number_variant', {'variant': '0'});
  });
};
}}]}], "name": null}, {"id": "17909160594", "actions": [{"viewId": "17918980302", "changes": [{"dependencies": [], "type": "custom_code", "id": "ae581ddf7aed44e8ad78b09984919c34", "value": function($){var utils = window.optimizely.get("utils");

window.onload = function() { 
	utils.waitForElement('[data-testid="starter-phone-collection-submit"]').then(function(btn) {
    window.trackEvent('starter_phone_number_variant', {'variant': '1'});
		var successMessage = document.querySelector('[data-testid="petition-publish-success-message"]');
    var phoneNumber = document.querySelector('[data-testid="starter-phone-collection-input"]');
    var phoneSubmit = document.querySelector('[data-testid="starter-phone-collection-submit"]');
    var phoneSkip = document.querySelector('[data-testid="starter-phone-collection-skip"]');
    var heading = document.querySelector('div[display="flex"] > h1');
    var cardWrap = document.querySelector('#page > div > div');
    var oldCard = document.querySelector('#page > div > div > div');
    var currentContent = oldCard.querySelector('span[font-size]');
    var textArea = currentContent.parentNode;
    var disclaimer = textArea.querySelector('span[color="grey"]');
    var helpers = document.querySelector('#page > div > div > div > div[display="flex"][width="100%"]');
    
    var gifWrap = successMessage.parentNode.parentNode;
    gifWrap.classList.add('message-thread-wrap');
    var messageImg = document.createElement('img');
    messageImg.classList = 'message-thread';
    messageImg.src = "https://change-assets.s3.amazonaws.com/phone-collection/example-conversation%401x.gif";
    gifWrap.insertBefore(messageImg, gifWrap.firstChild);

    successMessage.style.display = 'none';
    helpers.style.display = 'none';
    currentContent.style.display = 'none';
    disclaimer.style.display = 'none';
    //phoneSkip.style.color = '#737273';
    phoneNumber.placeholder = 'Mobile phone number';

    heading.parentNode.classList.add('support-heading');
    heading.innerHTML = 'Want some help building support?';

    var newContent = document.createElement('div');
    newContent.classList = 'support-content';
    newContent.innerHTML = '<p><strong>Text with our campaigns team!</strong> Our expert campaigners are here to help you out for the first week of your petition. Here’s how:</p><ul><li>We’ll give you tailored advice to improve your petition</li><li>We’ll partner with you to generate ideas for getting the word out about your petition – online or offline.</li><li>Thanks to the generous support of our Change.org members, we’re able to offer this 100% free</li></ul>';

    textArea.insertBefore(newContent, textArea.firstChild);
    textArea.insertBefore(heading.parentNode, textArea.firstChild);
    
   
    
	});
};
}}, {"value": "<style>#page > div > div {\n \tmax-height: none; \n}\n\n.message-thread-wrap {\n \theight: 150px;\n  border-radius: 5px;\n  padding-top: 0 !important;\n}\n\n.message-thread {\n\twidth: 340px;\n  margin: 0 auto;\n  position: relative;\n}\n\n\n.support-heading {\n\tpadding: 0 20px; \n}\n\n.support-heading h1 {\n \ttext-align: left !important; \n}\n\n.support-content {\n  padding: 20px;\n  padding-top: 0;\n  font-size: 18px;\n}\n\n.support-content ul {\n  margin-top: 20px;\n  list-style: none;\n  padding-left: 20px;\n}\n\n.support-content ul li::before {\n  content: \"\\2022\";\n  color: #EC2C22;\n  font-weight: bold; \n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n/* DESKTOP */\n@media screen and (min-width: 992px) {\n  .support-heading {\n    padding: 0 60px; \n  }\n  .support-content {\n    padding: 20px 60px;\n    padding-bottom: 38px;\n    font-size: 20px;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "4AAB966D-ED24-47BD-AFFB-2E0EA8B4C3CB"}]}], "name": null}, {"id": "17892480608", "actions": [{"viewId": "17918980302", "changes": [{"dependencies": [], "type": "custom_code", "id": "6C76EAEE-136E-4718-B3FD-4D7DFB38DB07", "value": function($){var utils = window.optimizely.get("utils");

window.onload = function() { 
	utils.waitForElement('[data-testid="starter-phone-collection-submit"]').then(function(btn) {
    window.trackEvent('starter_phone_number_variant', {'variant': '2'});
		var successMessage = document.querySelector('[data-testid="petition-publish-success-message"]');
    var phoneNumber = document.querySelector('[data-testid="starter-phone-collection-input"]');
    var phoneSubmit = document.querySelector('[data-testid="starter-phone-collection-submit"]');
    var phoneSkip = document.querySelector('[data-testid="starter-phone-collection-skip"]');
    var heading = document.querySelector('div[display="flex"] > h1');
    var cardWrap = document.querySelector('#page > div > div');
    var oldCard = document.querySelector('#page > div > div > div');
    var currentContent = oldCard.querySelector('span[font-size]');
    var textArea = currentContent.parentNode;
    var disclaimer = textArea.querySelector('span[color="grey"]');
    var helpers = document.querySelector('#page > div > div > div > div[display="flex"][width="100%"]');
    
    var gifWrap = successMessage.parentNode.parentNode;
    gifWrap.classList.add('message-thread-wrap');
    var messageImg = document.createElement('img');
    messageImg.classList = 'message-thread';
    messageImg.src = "https://change-assets.s3.amazonaws.com/phone-collection/example-conversation%401x.gif";
    gifWrap.insertBefore(messageImg, gifWrap.firstChild);
    
    successMessage.style.display = 'none';
    helpers.style.display = 'none';
    currentContent.style.display = 'none';
    disclaimer.style.display = 'none';
    //phoneSkip.style.color = '#737273';
    phoneNumber.placeholder = 'Mobile phone number';
    
    heading.parentNode.classList.add('support-heading');
    heading.innerHTML = 'Want some help building support?';
    
    var newContent = document.createElement('div');
    newContent.classList = 'support-content';
    newContent.innerHTML = '<p><strong>Text with our campaigns team!</strong> Our expert campaigners are here to help you out for the first week of your petition. Here’s how:</p><ul><li>We’ll give you tailored advice to improve your petition</li><li>We’ll partner with you to generate ideas for getting the word out about your petition – online or offline.</li><li>Thanks to the generous support of our Change.org members, we’re able to offer this 100% free</li></ul>';
    
    textArea.insertBefore(newContent, textArea.firstChild);
    textArea.insertBefore(heading.parentNode, textArea.firstChild);
    
    //phoneSubmit.parentNode.appendChild(phoneSkip);
    
    var bigWrap = phoneSubmit.parentNode.parentNode;
    
    var howItWorks = document.createElement('div');
    howItWorks.classList = 'support-how-it-works';
    howItWorks.innerHTML = '<h3>How it works</h3><div class="num-list"><div class="left"><span>1</span><span>2</span><span>3</span></div><div class="right"><p>We’ll match you with an expert campaigner to partner on your petition.</p><p>Your campaigner will reach out via text to start helping you with your petition.</p><p>Your campaigner will text you with advice for the first week of your petition to help you get things going.</p></div></div>';
    
    bigWrap.appendChild(howItWorks);
    
    var free = document.createElement('div');
    free.classList = 'is-it-free';
    free.innerHTML = '<strong>Is this really free?</strong><br>100%. We will never ask for payment or your payment info. We do this because our mission is to empower people like you to create the change that they want to see.';
   
    bigWrap.appendChild(free);
   
    
	});
};
}}, {"value": "<style>#page > div > div {\n \tmax-height: none; \n}\n\n\n.message-thread-wrap {\n \theight: 150px;\n  padding-top: 0 !important;\n  border-radius: 5px;\n}\n\n.message-thread {\n\twidth: 340px;\n  margin: 0 auto;\n  position: relative;\n}\n\n\n.support-heading {\n\tpadding: 0 20px; \n}\n\n.support-heading h1 {\n \ttext-align: left !important; \n}\n\n.support-content {\n  padding: 20px;\n  padding-top: 0;\n  font-size: 18px;\n}\n\n.support-content ul {\n  margin-top: 20px;\n  list-style: none;\n  padding-left: 20px;\n}\n\n.support-content ul li::before {\n  content: \"\\2022\";\n  color: #EC2C22;\n  font-weight: bold; \n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n.support-how-it-works {\n  background: #FFFCF7;\n  margin: 40px 0;\n  padding: 30px 20px;\n}\n\n.support-how-it-works h3 {\n \tmargin-top: 0; \n}\n\n.support-how-it-works .num-list {\n  margin-top: 20px;\n}\n\n.support-how-it-works .num-list .left {\n\twidth: 40px;\n  float: left;\n  position: relative;\n}\n\n.support-how-it-works .num-list .left span {\n\t\tdisplay: block;\n    font-size: 12.8px;\n    color: #EC2C22;\n    font-weight: bold;\n    border: 2px solid #EC2C22;\n    border-radius: 50%;\n    height: 38px;\n    line-height: 34px;\n    width: 38px;\n    text-align: center;\n    background: #FFFCF7;\n    position: relative;\n  \tz-index: 4;\n}\n\n.support-how-it-works .num-list .left span:nth-child(1), .support-how-it-works .num-list .left span:nth-child(2) {\n    \tmargin-bottom: 72px;\n}\n\n\n.support-how-it-works .num-list .left span:nth-child(1)::after, .support-how-it-works .num-list .left span:nth-child(2)::after {\n  content: \"\";\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n  /* background-image: url(https://static.change.org/psf-experiments/support-dotted.png);\n    top: 40px;*/\n    height: 72px;\n    width: 4px;\n    background-position: top center;\n    background-repeat: no-repeat;\n    background-size: auto 100%;\n    width: 2px;\n    background: #EC2C22;\n    top: 36px;\n}\n\n.support-how-it-works .num-list .right {\n\twidth: calc(100% - 60px);\n  float: left;\n  padding-left: 20px;\n  font-size: 18px;\n}\n\n.is-it-free {\n \tfont-size: 18px;\n  padding: 0 20px;\n}\n\n[data-testid=\"starter-phone-collection-skip\"] {\n\tdisplay: block;\n\ttext-align: center;\n}\n\n/* DESKTOP */\n@media screen and (min-width: 992px) {\n  .support-heading {\n    padding: 0 60px; \n  }\n  .support-content {\n    padding: 20px 60px;\n    padding-bottom: 38px;\n    font-size: 20px;\n  }\n  .support-how-it-works {\n    padding: 40px 60px;\n  }\n  .support-how-it-works .num-list .left span:nth-child(1), .support-how-it-works .num-list .left span:nth-child(2) {\n    \tmargin-bottom: 56px;\n\t}\n  .support-how-it-works .num-list .left span:nth-child(1)::after, .support-how-it-works .num-list .left span:nth-child(2)::after {\n    height: 56px;\n  }\n  .support-how-it-works .num-list .right {\n    font-size: 20px;\n  }\n  .is-it-free {\n    font-size: 20px;\n    padding: 0 60px;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "1F1A309D-89AC-4010-A3E1-4A8F49AF4F22"}]}], "name": null}, {"id": "17913280581", "actions": [{"viewId": "17918980302", "changes": [{"dependencies": [], "type": "custom_code", "id": "5D4CFD55-BDA3-409D-807C-6340A2428DEB", "value": function($){var utils = window.optimizely.get("utils");
var petitionSlug = window.location.pathname.split('/')[2];
var petitionEndpoint = 'https://www.change.org/api-proxy/-/petitions/';

var stepOneHTML = '<input type="radio" id="local" name="petitiontype" value="local"><label for="local">It’s for my local area</label><br><input type="radio" id="specific" name="petitiontype" value="specific"><label for="specific">It’s for a very specific group of people</label><br><input type="radio" id="anyone" name="petitiontype" value="anyone"><label for="anyone">It’s for anyone/everyone!</label>';

var stepTwoHTML = '<input type="radio" id="got_this" name="confidence" value="got_this"><label for="got_this">I got this!</label><br><input type="radio" id="okay" name="confidence" value="okay"><label for="okay">I feel okay about it</label><br><input type="radio" id="need_help" name="confidence" value="need_help"><label for="need_help">I could really use some help</label>';

var stepThreeHTML = '<textarea id="campaign_message" placeholder="Add a message for our campaigns team (optional)"/>';

function getAjax(url, success) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('GET', url);
    xhr.onreadystatechange = function() {
        if (xhr.readyState>3 && xhr.status==200) success(xhr.responseText);
    };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

var petitionData;

getAjax(petitionEndpoint+petitionSlug, function(data) {
  petitionData = JSON.parse(data);
});

window.onload = function() { 
	utils.waitForElement('[data-testid="starter-phone-collection-submit"]').then(function(btn) {
    window.trackEvent('starter_phone_number_variant', {'variant': '3'});
		var successMessage = document.querySelector('[data-testid="petition-publish-success-message"]');
    var phoneNumber = document.querySelector('[data-testid="starter-phone-collection-input"]');
    var phoneSubmit = document.querySelector('[data-testid="starter-phone-collection-submit"]');
    var phoneSkip = document.querySelector('[data-testid="starter-phone-collection-skip"]');
    var heading = document.querySelector('div[display="flex"] > h1');
    var cardWrap = document.querySelector('#page > div > div');
    var oldCard = document.querySelector('#page > div > div > div');
    //var textArea = document.querySelector('.sc-fzqNJr.cqhEIz[width="100%"][display="flex"]');
    var currentContent = oldCard.querySelector('span[font-size]');
    var textArea = currentContent.parentNode;
    var disclaimer = textArea.querySelector('span[color="grey"]');
    //var cardWrap = document.querySelector('#page > div.ibEBip > .sc-bZQynM.sc-gzVnrw.bQjqqt');
    //var oldCard = cardWrap.querySelector('.sc-bZQynM.sc-gzVnrw.jBaXOe');
    
    cardWrap.insertBefore(successMessage, cardWrap.firstChild);
    cardWrap.classList.add('card-wrap');
    oldCard.style.display = 'none';
    // phoneSkip.style.color = '#737273';
    phoneNumber.placeholder = 'Mobile phone number';
    
    var newCard = document.createElement('div');
    newCard.classList = 'support-card';
    newCard.innerHTML = '<h1 id="support-heading">Want some help building support?</h1><div id="support-copy"><p><strong>Text with our campaigns team!</strong> Our expert campaigners are here to help via  text for the first week of your petition. Here’s how:</p><ul><li>We’ll give you tailored advice to improve your petition</li><li>We’ll partner with you to generate ideas for getting the word out about your petition – online or offline.</li><li>Thanks to the generous support of our Change.org members, we’re able to offer this 100% free</li></ul><p>To get started, tell us a bit more about your petition.</p></div><button class="button" id="support-next">Let’s get started!</button>';
    
    
    var progressBar = document.createElement('div');
    progressBar.className = 'psf-combo-progress-bar optly-progress-bar';
    progressBar.innerHTML = '' +
      '<div class="arrange arrange-middle">' +
      '    <div class="arrange-fit step-wrap step-1 txt-c">' +
      '        <div class="border-a border-thick border-rounded-circle type-s incomplete-step active type-progress-bar-green">' +
      '            <strong class="step-number position-relative">1</strong>' +
      '        </div>' +
      '    </div>' +
      '    <div class="arrange-fit step-wrap step-2 txt-c">' +
      '        <div class="border-a border-thick border-rounded-circle type-s incomplete-step">' +
      '            <strong class="step-number position-relative fade-60">2</strong>' +
      '        </div>' +
      '    </div>' +
      '    <div class="arrange-fit step-wrap step-3 txt-c">' +
      '        <div class="border-a border-thick border-rounded-circle type-s incomplete-step">' +
      '            <strong class="step-number position-relative fade-60">3</strong>' +
      '        </div>' +
      '    </div>' +
      '    <div class="arrange-fit step-wrap step-4 txt-c">' +
      '        <div class="border-a border-thick border-rounded-circle type-s incomplete-step">' +
      '            <strong class="step-number position-relative fade-60">4</strong>' +
      '        </div>' +
      '    </div>' +
      '</div>';
    progressBar.style.display = 'none';
    
    cardWrap.insertBefore(newCard, cardWrap.firstChild);
    cardWrap.insertBefore(successMessage, cardWrap.firstChild);
    cardWrap.insertBefore(progressBar, successMessage.nextSibling);
    
    var step = 0;
    var nextBtn = document.getElementById('support-next');
    var supportHeading = document.getElementById('support-heading');
    var supportCopy = document.getElementById('support-copy');
		nextBtn.onclick = function() {
      if (step > 0) { nextProgressStep(step); }
      window.scrollTo(0,0);
      if (step === 0) {
        window.trackEvent('optly_support_ask_start');
        successMessage.style.display = 'none';
        phoneSkip.innerText = 'Nevermind, I don’t want help';
        supportHeading.innerText = 'Which of the following best describes your petition?';
        nextBtn.innerText = 'Next';
        nextBtn.disabled = true;
        supportCopy.innerHTML = '';
        var stepOneEl = document.createElement('div');
        stepOneEl.innerHTML = stepOneHTML;
        supportCopy.appendChild(stepOneEl);
        progressBar.style.display = 'block';
        var sor = document.getElementsByName('petitiontype');
        for (var i = 0; i < sor.length; i++) {
          sor[i].onclick = function() { nextBtn.disabled = false; };
        }
      } else if (step === 1) {
        nextBtn.disabled = true;
        var stepOneRadios = document.getElementsByName('petitiontype');
        var selected = '';
        for (var i = 0; i < stepOneRadios.length; i++) {
          if (stepOneRadios[i].checked) {
            selected = stepOneRadios[i].value;
            break;
          }
        }
        window.trackEvent('optly_support_ask_step_one', {'response': selected, 'petition_id': petitionData ? petitionData.id: ''});
				supportHeading.innerText = 'How confident do you feel about getting signatures?';
        supportCopy.innerHTML = '';
        var stepTwoEl = document.createElement('div');
        stepTwoEl.innerHTML = stepTwoHTML;
        supportCopy.appendChild(stepTwoEl);
        var tor = document.getElementsByName('confidence');
        for (var i = 0; i < tor.length; i++) {
          tor[i].onclick = function() { nextBtn.disabled = false; };
        }
      } else if (step === 2) {
        var stepTwoRadios = document.getElementsByName('confidence');
        var selected2 = '';
        for (var j = 0; j < stepTwoRadios.length; j++) {
          if (stepTwoRadios[j].checked) {
            selected2 = stepTwoRadios[j].value;
            break;
          }
        }
        window.trackEvent('optly_support_ask_step_two', {'response': selected2, 'petition_id': petitionData ? petitionData.id: ''});
				supportHeading.innerText = 'Is there anything you want us to know about your petition?';
        supportCopy.innerHTML = '';
        var stepThreeEl = document.createElement('div');
        stepThreeEl.innerHTML = stepThreeHTML;
        supportCopy.appendChild(stepThreeEl);
      } else if (step === 3) {
        nextBtn.style.display = 'none';
        var campaignMsg = document.getElementById('campaign_message').value;
        window.trackEvent('optly_support_ask_step_three', {'response': campaignMsg, 'petition_id': petitionData ? petitionData.id: ''});
				supportHeading.innerText = 'Enter a number for your campaigner to text you at.';
        supportCopy.innerHTML = '';
        phoneNumber.parentNode.style['margin-top'] = '20px';
        supportCopy.appendChild(phoneNumber.parentNode);
        supportCopy.appendChild(phoneSubmit);
      }
      step++;
    };
    
    function nextProgressStep(step) {
      var current = progressBar.querySelector('.step-' + step );
      current.classList.add('complete');
      current.innerHTML = '<span class="symbol symbol-verified type-progress-bar-green complete-step mrn"></span>';
    	var next = progressBar.querySelector('.step-' + (step + 1));
      if (next) {
        next.classList.add('progress-line');
	      next.querySelector('div').className = "border-a border-thick border-rounded-circle type-s incomplete-step active type-progress-bar-green";
        next.querySelector('strong').classList.remove('fade-60');
      }    
    }
    
	});
};
}}, {"value": "<style>.support-card {\n  \tbackground-color: rgb(255, 255, 255);\n    border-color: rgb(219, 217, 219);\n    border-radius: 0px;\n  \tpadding: 20px;\n  \tmargin-top: 10px;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n    border-radius: 4px;\n}\n\n.card-wrap {\n  max-height: none !important;\n  padding: 10px !important;\n}\n\n.support-card ul {\n  margin: 20px 0;\n  list-style: none;\n  padding-left: 20px;\n}\n\n.support-card ul li::before {\n  content: \"\\2022\";\n  color: #EC2C22;\n  font-weight: bold; \n  display: inline-block;\n  width: 1em;\n  margin-left: -1em;\n}\n\n.support-card .button {\n     -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    text-decoration: none;\n    display: inline-block;\n    font-weight: 700;\n    text-align: center;\n    line-height: 1;\n    border-radius: 5px;\n    border: 2px solid #adacad;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n    -webkit-appearance: initial!important;\n    transition: background .1s ease,border .1s ease;\n    cursor: pointer;\n    background: #ec2c22;\n    color: #fff;\n    border-color: #ec2c22;\n    font-size: 1rem;\n    padding: 12px 18px;\n  \twidth: 100%;\n \t\tmargin-top: 30px;\n}\n\n.support-card .button:disabled, .support-card .button:disabled:hover {\n    color: rgb(173, 172, 173);\n    filter: none;\n    cursor: default;\n    background: rgb(219, 217, 219);\n    border-color: rgb(219, 217, 219);\n}\n\n#support-copy {\n\tfont-size: 18px;  \n}\n\n#support-copy input[type=\"radio\"] {\n  cursor: pointer;\n}\n\n#support-copy label {\n    display: inline-block;\n    font-size: 18px;\n    margin-left: 10px;\n    position: relative;\n    top: 2px;\n  \tmargin-top: 24px;\n    max-width: calc(100% - 25px);\n}\n\n#support-copy textarea {\n\tmargin-top: 20px;  \n}\n\n/* progress wrap */\n.optly-progress-bar.psf-combo-progress-bar {\n\twidth: 100%;\n  max-width: 100%;\n  position: relative;\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.optly-progress-bar .step-wrap > div {\n\tmargin: auto;\n  position: relative;\n}\n.step-wrap {\n\tposition: relative;\n}\n.step-wrap + .step-wrap:before {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 60%;\n    height: 2px;\n    background: #DBD9DB;\n    top: calc(50% - 1px);\n    left: -30%;\n}\n\n.progress-line.step-wrap:before, .step-wrap.complete:before {\n\tbackground: #1dc078;\n}\n\n/* DESKTOP */\n@media screen and (min-width: 992px) {\n  #support-copy {\n    font-size: 20px;  \n  }\n  .optly-progress-bar.psf-combo-progress-bar {\n    width: 352px;\n  \tmargin-top: 0;\n  \tmargin-bottom: 0;\n  }\n\t.support-card {\n    padding: 30px 60px;\n    box-shadow: rgba(54, 49, 53, 0.2) 0px 2px 3px 0px;\n    border-radius: 5px;\n    margin-top: 30px;\n  }\n  .support-card .button {\n   \twidth: auto; \n  }\n  .card-wrap {\n  \tpadding: 30px 140px !important;\n  }\n  .support-card .button {\n   \tmargin-top: 20px; \n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "070B4E9B-B9FA-43C2-8A08-38FEFB347EB9"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17901022944", "integrationSettings": null}], "id": "17876202458", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17927772624", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 7000, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": 2, "viewIds": ["17918520550"], "experiments": [{"weightDistributions": [{"entityId": "17933330438", "endOfRange": 2000}, {"entityId": "17933400686", "endOfRange": 4000}, {"entityId": "17902901436", "endOfRange": 6000}, {"entityId": "17914291691", "endOfRange": 8000}, {"entityId": "17928150640", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "17933330438", "actions": [{"viewId": "17918520550", "changes": [{"dependencies": [], "type": "custom_code", "id": "82f478ed6c1a45ddb13eb0c255492cf2", "value": function($){var utils = window.optimizely.get("utils");

function fireEvent(ev){
	utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent(ev);
  });
}

utils.waitForElement('.psf-combo-shaded-round-border .js-share-btn').then(function(shareBtn){
  fireEvent('optly_returning_recruit_redirect');
});
}}]}], "name": null}, {"id": "17933400686", "actions": [{"viewId": "17918520550", "changes": [{"dependencies": [], "type": "custom_code", "id": "5d463726eecf4a74bdef8c8f68f2fbec", "value": function($){var utils = window.optimizely.get("utils");
var windowWidth = window.innerWidth;

function fireEvent(ev){
	utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent(ev);
  });
}

function init(r) {
  var panel = document.querySelector('.action-panel-fixed');
  
  var helpMore = document.createElement('div');
  helpMore.classList = 'help-more';
  helpMore.innerHTML = '<img class="star" src="https://change-assets.s3.amazonaws.com/psf-experiments/v1+v2+star+small.png"><h3>Help more people find this</h3><p>Many people are affected by this issue but haven’t found a way to take action - share this petiton with them after you sign <img src="https://change-assets.s3.amazonaws.com/psf-experiments/share+icons.png"></p>';
  
  var panelHeading = panel.querySelector('h3');
  panelHeading.classList.add('hide-fully');
  
  if (windowWidth < 778) {
  	panelHeading.parentNode.insertBefore(helpMore, panelHeading);
  } else {
    var submitButton = panel.querySelector('button.btn[type="submit"]');
    submitButton.parentNode.insertBefore(helpMore, submitButton);
  }
  
  utils.waitForElement('div[data-view="petitions/show/components/recruiter_signed"]').then(function(recruiterSigned){
    var signedCopy = recruiterSigned.querySelector('.arrange-fill span');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = recruiterSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('div[data-view="petitions/show/components/recruiter_signed"]').then(function(recruiterSigned){
    var signedCopy = recruiterSigned.querySelector('.arrange-fill span');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.cIDgLe .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.visible-xs .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
}

utils.waitForElement('#supporters_comments h3').then(function() {
	//rendr
  init(false);
});
utils.waitForElement('main .col-sm-8 .xs-bg-default h3').then(function() {
  //react
	init(true);
});
}}, {"value": "<style>.action-panel-fixed {\n  background: #FFFCF7 !important;\n}\n\n.action-panel-fixed .box {\n \tbackground: #fff; \n}\n\n.help-more {\n  margin-bottom: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n    text-align: center;\n}\n\n.help-more .star {\n  display: block;\n \twidth: 35px; \n  margin: 0 auto;\n  margin-top: 20px;\n}\n\n.help-more h3 {\n \ttext-align: center;\n  margin-top: 10px;\n}\n\n.help-more p img {\n  display: inline;\n  height: 16px;\n  position: relative;\n  top: 2px;\n}\n\n@media (min-width: 778px) {\n  .action-panel-fixed {\n    background: #FFF !important;\n  }\n  .help-more {\n\t\tbackground: #FDF9F2;\n\t\tborder-radius: 5px;\n    padding: 15px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .help-more .star {\n   \tmargin-top: 5px; \n  }\n  .help-more h3 {\n   \tfont-size: 16px; \n    line-height: 24px;\n  }\n  .help-more p {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "d0fcac3e0bf6404eaaf6a93159403ddd"}]}], "name": null}, {"id": "17902901436", "actions": [{"viewId": "17918520550", "changes": [{"dependencies": [], "type": "custom_code", "id": "13193DB1-CE26-439A-A07B-3A03F7E51D6F", "value": function($){var utils = window.optimizely.get("utils");
var windowWidth = window.innerWidth;

function fireEvent(ev){
	utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent(ev);
  });
}

function init(r) {
  var panel = document.querySelector('.action-panel-fixed');
  
  var helpMore = document.createElement('div');
  helpMore.classList = 'help-more';
  helpMore.innerHTML = '<img class="star" src="https://change-assets.s3.amazonaws.com/psf-experiments/v1+v2+star+small.png"><h3>Help more people find this</h3><p>Many people are affected by this issue but haven’t found a way to take action - you can help by signing and sharing this petition <img src="https://change-assets.s3.amazonaws.com/psf-experiments/share+icons.png"></p>';
  
  var panelHeading = panel.querySelector('h3');
  panelHeading.classList.add('hide-fully');
  
  var realButton = panel.querySelector('button.btn[type="submit"]');
  
  if (windowWidth < 778) {
  	panelHeading.parentNode.insertBefore(helpMore, panelHeading);
  } else {
    realButton.parentNode.insertBefore(helpMore, realButton);
  }
  
  realButton.classList.remove('btn-action');
  realButton.classList.add('btn-outline');
  var shareButton = document.createElement('button');
  shareButton.classList = 'btn btn-big btn-full btn-action mbs';
  shareButton.innerHTML = '<span style="top: -2.5px" class="position-relative"><span class="symbol symbol-lock symbol-s" aria-hidden="true"></span></span>Sign and Share this petition';
  realButton.parentNode.insertBefore(shareButton, realButton);
  
  shareButton.onclick = function() {
    realButton.click();
    if(r) {
     window.trackEvent('optly_sign_share_intent'); 
    } else {
    	utils.waitUntil(function() { return !!window.App; }).then(function() {
      	window.App.trackEvent('optly_sign_share_intent');
      });
    }
  };
  
  utils.waitForElement('div[data-view="petitions/show/components/recruiter_signed"]').then(function(recruiterSigned){
    var signedCopy = recruiterSigned.querySelector('.arrange-fill span');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.cIDgLe .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.visible-xs .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  
}

utils.waitForElement('#supporters_comments h3').then(function() {
	//rendr
  init(false);
});
utils.waitForElement('main .col-sm-8 .xs-bg-default h3').then(function() {
  //react
	init(true);
});
}}, {"value": "<style>.action-panel-fixed {\n  background: #FFFCF7 !important;\n}\n\n.action-panel-fixed .box {\n \tbackground: #fff; \n}\n\n.help-more {\n  margin-bottom: 30px;\n  padding-left: 15px;\n  padding-right: 15px;\n  text-align: center;\n}\n\n.help-more .star {\n  display: block;\n \twidth: 35px; \n  margin: 0 auto;\n  margin-top: 20px;\n}\n\n.help-more h3 {\n \ttext-align: center;\n  margin-top: 10px;\n}\n\n.help-more p img {\n  display: inline;\n  height: 16px;\n  position: relative;\n  top: 2px;\n}\n\n@media (min-width: 778px) {\n  .action-panel-fixed {\n    background: #FFF !important;\n  }\n  .help-more {\n\t\tbackground: #FDF9F2;\n\t\tborder-radius: 5px;\n    padding: 15px;\n    margin-bottom: 20px;\n    margin-top: 20px;\n  }\n  .help-more .star {\n   \tmargin-top: 5px; \n  }\n  .help-more h3 {\n   \tfont-size: 16px; \n    line-height: 24px;\n  }\n  .help-more p {\n    font-size: 16px;\n    line-height: 24px;\n  }\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "AE70A643-6709-4C9C-80AE-E37BA226F3E9"}]}], "name": null}, {"id": "17914291691", "actions": [{"viewId": "17918520550", "changes": [{"dependencies": [], "type": "custom_code", "id": "6ACBAB0F-31CE-4E33-89C9-324BD5AD51CA", "value": function($){var utils = window.optimizely.get("utils");

function fireEvent(ev){
	utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent(ev);
  });
}

function init(r) {
  var sapCta;
  if (r) {
    sapCta = document.querySelector('.col-sm-8 > .mrxxl > .container-fluid');
  } else {
    sapCta = document.querySelector('.sap-cta');
  }
  
  var helpMore = document.createElement('div');
  helpMore.classList = 'help-more';
  helpMore.innerHTML = '<img class="star" src="https://change-assets.s3.amazonaws.com/psf-experiments/v1+v2+star+small.png"><h3>Help more people find this</h3><p>Many people are affected by this issue but haven’t found a way to take action - share this petiton with them after you sign <img src="https://change-assets.s3.amazonaws.com/psf-experiments/share+icons.png"></p>';
  
  sapCta.classList.add('hide-fully');
  
  sapCta.parentNode.insertBefore(helpMore, sapCta);
  
  utils.waitForElement('div[data-view="petitions/show/components/recruiter_signed"]').then(function(recruiterSigned){
    var signedCopy = recruiterSigned.querySelector('.arrange-fill span');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.cIDgLe .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.visible-xs .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
}

utils.waitForElement('#supporters_comments h3').then(function() {
	//rendr
  init(false);
});
utils.waitForElement('main .col-sm-8 .xs-bg-default h3').then(function() {
  //react
	init(true);
});
}}, {"value": "<style>.help-more {\n  background: #FFFCF7;\n  margin-bottom: 30px;\n  padding: 20px 15px;\n  text-align: center;\n}\n\n.help-more .star {\n  display: block;\n \twidth: 49px; \n  margin: 0 auto;\n}\n\n.help-more h3 {\n \ttext-align: center;\n  margin-top: 14px;\n}\n\n.help-more p img {\n  display: inline;\n  height: 16px;\n  position: relative;\n  top: 2px;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "86B1E648-0D8D-44DB-B86D-2AF34793EE20"}]}], "name": null}, {"id": "17928150640", "actions": [{"viewId": "17918520550", "changes": [{"dependencies": [], "type": "custom_code", "id": "9A4D7DFD-89C7-4935-B382-F0BA3CBA2B87", "value": function($){var utils = window.optimizely.get("utils");

var userPhoto = window.changeTargetingData.petition.user.photo ? window.changeTargetingData.petition.user.photo.userSmall.url : false;


function fireEvent(ev){
	utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent(ev);
  });
}

function init(r) {
  var sapCta;
  if (r) {
    sapCta = document.querySelector('.col-sm-8 > .mrxxl > .container-fluid');
  } else {
    sapCta = document.querySelector('.sap-cta');
  }
  
  var helpMore = document.createElement('div');
  helpMore.classList = 'help-more';
  
  var helpImageSection = '<img class="user-img star" src="https://change-assets.s3.amazonaws.com/psf-experiments/v3+v4+star+large.png">';
  if (userPhoto) {
   	helpImageSection = '<img class="backdrop" src="https://change-assets.s3.amazonaws.com/psf-experiments/v4+avatar.png"><img class="user-img" src="'+userPhoto+'">'; 
  }
  
  helpMore.innerHTML = '<div class="help-avatar">'+helpImageSection+'</div><h3>Looks like you might be friends with '+window.changeTargetingData.petition.user.displayName.split(" ")[0]+'!</h3><p>Friends like you play a big role in helping this petition reach more people. After signing, don’t forget to share! <img src="https://change-assets.s3.amazonaws.com/psf-experiments/share+icons.png"></p>';
  
  sapCta.classList.add('hide-fully');
  
  sapCta.parentNode.insertBefore(helpMore, sapCta);
  
   utils.waitForElement('div[data-view="petitions/show/components/recruiter_signed"]').then(function(recruiterSigned){
    var signedCopy = recruiterSigned.querySelector('.arrange-fill span');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.cIDgLe .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
  utils.waitForElement('.visible-xs .sc-bZQynM.gDCWlZ > .recent-signer').then(function(rSigned){
    var signedCopy = rSigned.querySelector('.arrange-fill .hide-overflow > div');
    signedCopy.innerHTML = signedCopy.innerHTML.replace('signed this', 'started this');
  });
  
}

utils.waitForElement('#supporters_comments h3').then(function() {
	//rendr
  init(false);
});
utils.waitForElement('main .col-sm-8 .xs-bg-default h3').then(function() {
  //react
	init(true);
});
}}, {"value": "<style>.help-more {\n  background: #FFFCF7;\n  margin-bottom: 30px;\n  padding: 20px 15px;\n  text-align: center;\n}\n\n.help-more .star {\n  display: block;\n \twidth: 49px; \n  margin: 0 auto;\n}\n\n.help-more h3 {\n \ttext-align: center;\n  margin-top: 14px;\n}\n\n.help-more p img {\n  display: inline;\n  height: 16px;\n  position: relative;\n  top: 2px;\n}\n\n.help-more .help-avatar {\n  position: relative;\n  height: 44px;\n}\n\n.help-more .help-avatar .backdrop {\n  position: absolute;\n  width: 82px;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n}\n\n.help-more .help-avatar .user-img {\n  position: absolute;\n  background: #fff;\n  width: 42px;\n  left: 50%;\n  top: 0;\n  transform: translateX(-50%);\n  border-radius: 50%;\n}\n\n.help-more .help-avatar .user-img.star {\n  background: transparent;\n  border-radius: 0;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "795AA1B1-8CDE-49CF-86BB-980E3898BDAA"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17922190380", "integrationSettings": null}], "id": "17922550122", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17953630049", "decisionMetadata": null, "policy": "single_experiment", "changes": [{"dependencies": [], "type": "custom_code", "id": "3C60D571-DA39-4916-B93D-A84C674919DF", "value": function($){window.localStorage.setItem('optly_petition_first_gen_callout', 'true');
}}]}, {"holdback": 4000, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": 2, "viewIds": ["17926210741"], "experiments": [{"weightDistributions": [{"entityId": "17941810472", "endOfRange": 3333}, {"entityId": "17939821698", "endOfRange": 6666}, {"entityId": "17920581082", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "17941810472", "actions": [{"viewId": "17926210741", "changes": [{"dependencies": [], "type": "custom_code", "id": "5402130D-A015-45BA-B2DA-23F3D519B185", "value": function($){var utils = window.optimizely.get("utils");

function initTest(comboCard, initial) {
  document.getElementById('content').classList.add('card-content');
  comboCard.classList.add('card-layout');
  
  var shareComponent = 'psf-combo-component-share-initial';
  if (!initial) {
    shareComponent = 'psf-combo-component-share-abi';
  }
  
  var progressWrap = document.createElement('div');
  progressWrap.classList = 'progress-wrapper col-xs-12 txt-c mtxxl mbs';
  var progressTitle = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h5');
  var progressRow = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > .row.mbm.xs-mbs');
  progressRow.querySelector('.arrange-fill .text-bar .text.pan').innerHTML = '<span class="symbol symbol-verified type-progress-bar-green complete-step"></span>';
  progressWrap.appendChild(progressTitle);
  progressWrap.appendChild(progressRow);

  comboCard.parentNode.insertBefore(progressWrap, comboCard);
  
  var headingMobile = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h1.visible-xs');
  headingMobile.classList.add('txt-l');
  var heading = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h1.hidden-xs');
  heading.classList.add('txt-l');
  if (heading.classList.contains('type-xl')) {
    heading.classList.remove('type-xl');
  }
  var subCopy = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > p.type-l');
  subCopy.classList.add('txt-l', 'mvs');
  document.querySelector('.row .border-rounded.border-rounded-none-xs.psf-combo-embedded-card').classList.add('xs-pbm', 'xs-ptxs');
  
  var mainCard = document.querySelector('.bg-default .row .psf-combo-embedded-card.bg-brighter');
  mainCard.classList.remove('xs-pbm');
  mainCard.classList.add('xs-pbxxl');
  var blockCenter = document.querySelector('.col-sm-9.position-block-center.pbs');
  blockCenter.classList.remove('pbs');
  blockCenter.classList.add('pbxs');
  
  if (document.querySelector('.xs-full-height > .photo-component[data-view="components/photo"]')) {
    var photoComponent = document.querySelector('.xs-full-height > .photo-component[data-view="components/photo"]');
    mainCard.insertBefore(photoComponent, mainCard.firstChild);
  }
  
  utils.waitForElement('div[data-view="psf/combo/components/skip_footer"]').then(function(skip) {
    comboCard.appendChild(skip);
    skip.classList.add('custom-skip');
    var padded = skip.querySelector('div.pvxl');
    padded.classList.add('pvxxxl');
    padded.classList.remove('pvxl');
  });
  
  
}

utils.waitForElement('#content > .xs-full-height[data-share_page="share_initial"]').then(function(comboCard) {
	initTest(comboCard, true);
});

utils.waitForElement('#content > .xs-full-height[data-share_page="share_abi"]').then(function(comboCard) {
	initTest(comboCard, false);
});
}}, {"value": "<style>#content.card-content {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  background-color: #fffcf7;\n}\n\n#content.card-content .psf-combo-progress-bar .complete-step {\n    width: 24px;\n    height: 24px;\n     font-size: 24px;\n}\n#content.card-content .psf-combo-progress-bar .text-bar .complete-step {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: -15px;\n}\n\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .photo-component {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  margin-top: -10px;\n    margin-left: -20px;\n    margin-right: -20px;\n}\n\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap {\n \tborder-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-layout .custom-skip * {\n  background: transparent !important;\n}\n\n.card-content .psf-combo-progress-bar .symbol.symbol-verified.symbol-xxl.mrxxs.type-line-app {\n  font-size: 1.5rem !important;\n  color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar.active-step-2 .text::before {\n  background: #1dc078;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active {\n  border-color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active .step-number.type-line-app {\n\tcolor: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step {\n  width: 24px;\n  height: 24px;\n  border-color: #1dc078 !important;\n    color: #1dc078 !important;\n}\n.card-content .psf-combo-progress-bar .incomplete-step .fade-60 {\n \topacity: 1 !important; \n}\n\n.card-content .psf-combo-progress-bar .step-number {\n  top: 1px;\n}\n\n.card-content .hidden-lg.pan.hide-overflow hr.rule {\n    display: none;\n}\n\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs, .card-content .psf-combo-embedded-card.col-xs-12 .hidden-lg.col-xs-12.xs-phn .phs {\n  padding-left: 0 !important;\n}\n.card-content .psf-combo-embedded-card.col-xs-12 div[data-view=\"psf/combo/components/share_feed\"] .arrange.phs {\n  padding-left: 0 !important; \t \n}\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs {\n   margin-top: 23px !important;\n}\n.psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl {\n  margin-bottom: 26px !important;\n}\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .row .col-lg-7.mtxxxl {\n    margin-top: 0 !important;\n  }\n@media (min-width: 980px) {\n  /* Desktop */\n#content.card-content .psf-combo-progress-bar .complete-step {\n    width: 24px;\n    height: 24px;\n    font-size: 24px;\n}\n#content.card-content .psf-combo-progress-bar .text-bar .complete-step {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: -15px;\n}\n#content.card-content {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  background-color: #fffcf7;\n}\n\n#content.card-content .bg-default {\n  background-color: #fffcf7 !important;\n}\n\n#content.card-content .psf-combo-embedded-card {\n\tmargin-top: 0;\n}\n\n#content.card-content .box-sm.pan.txt-c.xs-full-height.page-wrap {\n \tmargin-top: 0; \n}\n\n#content.card-content .psf-combo-embedded-card.col-xs-12 .photo-component {\n \tmargin: -40px;\n  margin-bottom: auto;\n}\n\n.card-layout .container.xs-full-height .row .col-xs-12.xs-full-height .page-wrap .photo-component {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n}\n\n.card-layout .container.xs-full-height .row .xs-full-height .page-wrap .psf-combo-embedded-card {\n \tborder-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-layout .col-lg-5.visible-lg.bg-brighter.psf-combo-embedded-card .arrange.phs {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\n.card-layout .custom-skip * {\n  background: transparent !important;\n}\n\n.card-content .psf-combo-progress-bar .symbol.symbol-verified.symbol-xxl.mrxxs.type-line-app {\n  font-size: 1.5rem !important;\n  color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar.active-step-2 .text::before {\n  background: #1dc078;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active {\n  border-color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active .step-number.type-line-app {\n\tcolor: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step {\n  width: 24px;\n  height: 24px;\n  border-color: #1dc078 !important;\n    color: #1dc078 !important;\n}\n.card-content .psf-combo-progress-bar .incomplete-step .fade-60 {\n \topacity: 1 !important; \n}\n\n.card-content .psf-combo-progress-bar .step-number {\n  top: 1px;\n}\n\n.card-content .hidden-lg.pan.hide-overflow hr.rule {\n    display: none;\n}\n\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs, .card-content .psf-combo-embedded-card.col-xs-12 .hidden-lg.col-xs-12.xs-phn .phs {\n  padding-left: 0 !important;\n}\n.card-content .psf-combo-embedded-card.col-xs-12 div[data-view=\"psf/combo/components/share_feed\"] .arrange.phs {\n  padding-left: 0 !important; \t \n}\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs {\n   margin-top: 23px !important;\n}\n.psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl {\n  margin-bottom: 26px !important;\n}\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap {\n  box-shadow: none;\n}\n  .card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .row .mtxxxl {\n    margin-top: 0 !important;\n  }\n}\n\n.js-message-bubble .photo-component {\n  margin: inherit !important;\n  border-radius: inherit !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "877241C8-AC95-4183-8643-DD65912F353D"}]}], "name": null}, {"id": "17939821698", "actions": [{"viewId": "17926210741", "changes": [{"dependencies": [], "type": "custom_code", "id": "791146c76c1c413490e15ed112b6927b", "value": function($){var utils = window.optimizely.get("utils");

function initTest(comboCard, initial) {
  document.getElementById('content').classList.add('card-content');
  comboCard.classList.add('card-layout');
  
  var shareComponent = 'psf-combo-component-share-initial';
  if (!initial) {
    shareComponent = 'psf-combo-component-share-abi';
  }
  
  var progressWrap = document.createElement('div');
  progressWrap.classList = 'progress-wrapper col-xs-12 txt-c mtxxl mbs';
  var progressTitle = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h5');
  var progressRow = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > .row.mbm.xs-mbs');
  progressRow.querySelector('.arrange-fill .text-bar .text.pan').innerHTML = '<span class="symbol symbol-verified type-progress-bar-green complete-step"></span>';
  progressWrap.appendChild(progressTitle);
  progressWrap.appendChild(progressRow);

  comboCard.parentNode.insertBefore(progressWrap, comboCard);
  
  var headingMobile = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h1.visible-xs');
  headingMobile.classList.add('txt-l');
  var heading = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h1.hidden-xs');
  heading.classList.add('txt-l');
  if (heading.classList.contains('type-xl')) {
    heading.classList.remove('type-xl');
  }
  var subCopy = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > p.type-l');
  subCopy.classList.add('txt-l', 'mvs');
  document.querySelector('.row .border-rounded.border-rounded-none-xs.psf-combo-embedded-card').classList.add('xs-pbm', 'xs-ptxs');
  
  var mainCard = document.querySelector('.bg-default .row .psf-combo-embedded-card.bg-brighter');
  mainCard.classList.remove('xs-pbm');
  mainCard.classList.add('xs-pbxxl');
  var blockCenter = document.querySelector('.col-sm-9.position-block-center.pbs');
  blockCenter.classList.remove('pbs');
  blockCenter.classList.add('pbxs');
  
  if (document.querySelector('.xs-full-height > .photo-component[data-view="components/photo"]')) {
    var photoComponent = document.querySelector('.xs-full-height > .photo-component[data-view="components/photo"]');
    mainCard.insertBefore(photoComponent, mainCard.firstChild);
  }
  
  utils.waitForElement('div[data-view="psf/combo/components/skip_footer"]').then(function(skip) {
    comboCard.appendChild(skip);
    skip.classList.add('custom-skip');
    var padded = skip.querySelector('div.pvxl');
    padded.classList.add('pvxxxl');
    padded.classList.remove('pvxl');
  });
  
  /* Content Changes */  
  var start = (window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] + ', y' : 'Y');
  headingMobile.innerHTML = start + 'our share could attract many more supporters';
	heading.innerHTML = start + 'our share could attract many more supporters';
  subCopy.innerHTML = 'Sparing an extra 60 seconds to add a personal message when you share could be the difference in getting <em>hundreds</em> more people to sign!';
  
}

utils.waitForElement('#content > .xs-full-height[data-share_page="share_initial"]').then(function(comboCard) {
	initTest(comboCard, true);
});

utils.waitForElement('#content > .xs-full-height[data-share_page="share_abi"]').then(function(comboCard) {
	initTest(comboCard, false);
});
}}, {"value": "<style>#content.card-content {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  background-color: #fffcf7;\n}\n\n#content.card-content .psf-combo-progress-bar .complete-step {\n    width: 24px;\n    height: 24px;\n     font-size: 24px;\n}\n#content.card-content .psf-combo-progress-bar .text-bar .complete-step {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: -15px;\n}\n\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .photo-component {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  margin-top: -10px;\n    margin-left: -20px;\n    margin-right: -20px;\n}\n\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap {\n \tborder-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-layout .custom-skip * {\n  background: transparent !important;\n}\n\n.card-content .psf-combo-progress-bar .symbol.symbol-verified.symbol-xxl.mrxxs.type-line-app {\n  font-size: 1.5rem !important;\n  color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar.active-step-2 .text::before {\n  background: #1dc078;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active {\n  border-color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active .step-number.type-line-app {\n\tcolor: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step {\n  width: 24px;\n  height: 24px;\n  border-color: #1dc078 !important;\n    color: #1dc078 !important;\n}\n.card-content .psf-combo-progress-bar .incomplete-step .fade-60 {\n \topacity: 1 !important; \n}\n\n.card-content .psf-combo-progress-bar .step-number {\n  top: 1px;\n}\n\n.card-content .hidden-lg.pan.hide-overflow hr.rule {\n    display: none;\n}\n\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs, .card-content .psf-combo-embedded-card.col-xs-12 .hidden-lg.col-xs-12.xs-phn .phs {\n  padding-left: 0 !important;\n}\n.card-content .psf-combo-embedded-card.col-xs-12 div[data-view=\"psf/combo/components/share_feed\"] .arrange.phs {\n  padding-left: 0 !important; \t \n}\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs {\n   margin-top: 23px !important;\n}\n.psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl {\n  margin-bottom: 26px !important;\n}\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .row .col-lg-7.mtxxxl {\n    margin-top: 0 !important;\n  }\n@media (min-width: 980px) {\n  /* Desktop */\n#content.card-content .psf-combo-progress-bar .complete-step {\n    width: 24px;\n    height: 24px;\n    font-size: 24px;\n}\n#content.card-content .psf-combo-progress-bar .text-bar .complete-step {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: -15px;\n}\n#content.card-content {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  background-color: #fffcf7;\n}\n\n#content.card-content .bg-default {\n  background-color: #fffcf7 !important;\n}\n\n#content.card-content .psf-combo-embedded-card {\n\tmargin-top: 0;\n}\n\n#content.card-content .box-sm.pan.txt-c.xs-full-height.page-wrap {\n \tmargin-top: 0; \n}\n\n#content.card-content .psf-combo-embedded-card.col-xs-12 .photo-component {\n \tmargin: -40px;\n  margin-bottom: auto;\n}\n\n.card-layout .container.xs-full-height .row .col-xs-12.xs-full-height .page-wrap .photo-component {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n}\n\n.card-layout .container.xs-full-height .row .xs-full-height .page-wrap .psf-combo-embedded-card {\n \tborder-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-layout .col-lg-5.visible-lg.bg-brighter.psf-combo-embedded-card .arrange.phs {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\n.card-layout .custom-skip * {\n  background: transparent !important;\n}\n\n.card-content .psf-combo-progress-bar .symbol.symbol-verified.symbol-xxl.mrxxs.type-line-app {\n  font-size: 1.5rem !important;\n  color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar.active-step-2 .text::before {\n  background: #1dc078;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active {\n  border-color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active .step-number.type-line-app {\n\tcolor: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step {\n  width: 24px;\n  height: 24px;\n  border-color: #1dc078 !important;\n    color: #1dc078 !important;\n}\n.card-content .psf-combo-progress-bar .incomplete-step .fade-60 {\n \topacity: 1 !important; \n}\n\n.card-content .psf-combo-progress-bar .step-number {\n  top: 1px;\n}\n\n.card-content .hidden-lg.pan.hide-overflow hr.rule {\n    display: none;\n}\n\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs, .card-content .psf-combo-embedded-card.col-xs-12 .hidden-lg.col-xs-12.xs-phn .phs {\n  padding-left: 0 !important;\n}\n.card-content .psf-combo-embedded-card.col-xs-12 div[data-view=\"psf/combo/components/share_feed\"] .arrange.phs {\n  padding-left: 0 !important; \t \n}\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs {\n   margin-top: 23px !important;\n}\n.psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl {\n  margin-bottom: 26px !important;\n}\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap {\n  box-shadow: none;\n}\n  .card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .row .mtxxxl {\n    margin-top: 0 !important;\n  }\n}\n\n.js-message-bubble .photo-component {\n  margin: inherit !important;\n  border-radius: inherit !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "669876b706204b8da71e31d66ec9a535"}]}], "name": null}, {"id": "17920581082", "actions": [{"viewId": "17926210741", "changes": [{"dependencies": [], "type": "custom_code", "id": "CB3F8665-7344-41AD-BD8F-7D6A7E47CE2E", "value": function($){var utils = window.optimizely.get("utils");

function initTest(comboCard, initial) {
  document.getElementById('content').classList.add('card-content');
  comboCard.classList.add('card-layout');
  
  var shareComponent = 'psf-combo-component-share-initial';
  if (!initial) {
    shareComponent = 'psf-combo-component-share-abi';
  }
  
  var progressWrap = document.createElement('div');
  progressWrap.classList = 'progress-wrapper col-xs-12 txt-c mtxxl mbs';
  var progressTitle = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h5');
  var progressRow = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > .row.mbm.xs-mbs');
  progressRow.querySelector('.arrange-fill .text-bar .text.pan').innerHTML = '<span class="symbol symbol-verified type-progress-bar-green complete-step"></span>';
  progressWrap.appendChild(progressTitle);
  progressWrap.appendChild(progressRow);

  comboCard.parentNode.insertBefore(progressWrap, comboCard);
  
  var headingMobile = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h1.visible-xs');
  headingMobile.classList.add('txt-l');
  var heading = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > h1.hidden-xs');
  heading.classList.add('txt-l');
  if (heading.classList.contains('type-xl')) {
    heading.classList.remove('type-xl');
  }
  var subCopy = document.querySelector('.psf-combo-embedded-card .' + shareComponent + ' > p.type-l');
  subCopy.classList.add('txt-l', 'mvs');
  document.querySelector('.row .border-rounded.border-rounded-none-xs.psf-combo-embedded-card').classList.add('xs-pbm', 'xs-ptxs');
  
  var mainCard = document.querySelector('.bg-default .row .psf-combo-embedded-card.bg-brighter');
  mainCard.classList.remove('xs-pbm');
  mainCard.classList.add('xs-pbxxl');
  var blockCenter = document.querySelector('.col-sm-9.position-block-center.pbs');
  blockCenter.classList.remove('pbs');
  blockCenter.classList.add('pbxs');
  
  if (document.querySelector('.xs-full-height > .photo-component[data-view="components/photo"]')) {
    var photoComponent = document.querySelector('.xs-full-height > .photo-component[data-view="components/photo"]');
    mainCard.insertBefore(photoComponent, mainCard.firstChild);
  }
  
  utils.waitForElement('div[data-view="psf/combo/components/skip_footer"]').then(function(skip) {
    comboCard.appendChild(skip);
    skip.classList.add('custom-skip');
    var padded = skip.querySelector('div.pvxl');
    padded.classList.add('pvxxxl');
    padded.classList.remove('pvxl');
  });
  
  /* Content Changes */  
  headingMobile.innerHTML = 'Here’s your chance to attract hundreds more supporters!';
	heading.innerHTML = 'Here’s your chance to attract hundreds more supporters!';
  subCopy.innerHTML = 'Spare an extra 60 seconds to add a personal message when you share.  It could be the difference in getting <em>hundreds</em> more people to sign.';
  
}

utils.waitForElement('#content > .xs-full-height[data-share_page="share_initial"]').then(function(comboCard) {
	initTest(comboCard, true);
});

utils.waitForElement('#content > .xs-full-height[data-share_page="share_abi"]').then(function(comboCard) {
	initTest(comboCard, false);
});
}}, {"value": "<style>#content.card-content {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  background-color: #fffcf7;\n}\n\n#content.card-content .psf-combo-progress-bar .complete-step {\n    width: 24px;\n    height: 24px;\n     font-size: 24px;\n}\n#content.card-content .psf-combo-progress-bar .text-bar .complete-step {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: -15px;\n}\n\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .photo-component {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  margin-top: -10px;\n    margin-left: -20px;\n    margin-right: -20px;\n}\n\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap {\n \tborder-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-layout .custom-skip * {\n  background: transparent !important;\n}\n\n.card-content .psf-combo-progress-bar .symbol.symbol-verified.symbol-xxl.mrxxs.type-line-app {\n  font-size: 1.5rem !important;\n  color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar.active-step-2 .text::before {\n  background: #1dc078;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active {\n  border-color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active .step-number.type-line-app {\n\tcolor: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step {\n  width: 24px;\n  height: 24px;\n  border-color: #1dc078 !important;\n    color: #1dc078 !important;\n}\n.card-content .psf-combo-progress-bar .incomplete-step .fade-60 {\n \topacity: 1 !important; \n}\n\n.card-content .psf-combo-progress-bar .step-number {\n  top: 1px;\n}\n\n.card-content .hidden-lg.pan.hide-overflow hr.rule {\n    display: none;\n}\n\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs, .card-content .psf-combo-embedded-card.col-xs-12 .hidden-lg.col-xs-12.xs-phn .phs {\n  padding-left: 0 !important;\n}\n.card-content .psf-combo-embedded-card.col-xs-12 div[data-view=\"psf/combo/components/share_feed\"] .arrange.phs {\n  padding-left: 0 !important; \t \n}\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs {\n   margin-top: 23px !important;\n}\n.psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl {\n  margin-bottom: 26px !important;\n}\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .row .col-lg-7.mtxxxl {\n    margin-top: 0 !important;\n  }\n@media (min-width: 980px) {\n  /* Desktop */\n#content.card-content .psf-combo-progress-bar .complete-step {\n    width: 24px;\n    height: 24px;\n    font-size: 24px;\n}\n#content.card-content .psf-combo-progress-bar .text-bar .complete-step {\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-top: -15px;\n}\n#content.card-content {\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n  background-color: #fffcf7;\n}\n\n#content.card-content .bg-default {\n  background-color: #fffcf7 !important;\n}\n\n#content.card-content .psf-combo-embedded-card {\n\tmargin-top: 0;\n}\n\n#content.card-content .box-sm.pan.txt-c.xs-full-height.page-wrap {\n \tmargin-top: 0; \n}\n\n#content.card-content .psf-combo-embedded-card.col-xs-12 .photo-component {\n \tmargin: -40px;\n  margin-bottom: auto;\n}\n\n.card-layout .container.xs-full-height .row .col-xs-12.xs-full-height .page-wrap .photo-component {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n}\n\n.card-layout .container.xs-full-height .row .xs-full-height .page-wrap .psf-combo-embedded-card {\n \tborder-radius: 4px;\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-layout .col-lg-5.visible-lg.bg-brighter.psf-combo-embedded-card .arrange.phs {\n  padding-left: 20px !important;\n  padding-right: 20px !important;\n}\n\n.card-layout .custom-skip * {\n  background: transparent !important;\n}\n\n.card-content .psf-combo-progress-bar .symbol.symbol-verified.symbol-xxl.mrxxs.type-line-app {\n  font-size: 1.5rem !important;\n  color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar.active-step-2 .text::before {\n  background: #1dc078;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active {\n  border-color: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step.active .step-number.type-line-app {\n\tcolor: #1dc078 !important;\n}\n\n.card-content .psf-combo-progress-bar .incomplete-step {\n  width: 24px;\n  height: 24px;\n  border-color: #1dc078 !important;\n    color: #1dc078 !important;\n}\n.card-content .psf-combo-progress-bar .incomplete-step .fade-60 {\n \topacity: 1 !important; \n}\n\n.card-content .psf-combo-progress-bar .step-number {\n  top: 1px;\n}\n\n.card-content .hidden-lg.pan.hide-overflow hr.rule {\n    display: none;\n}\n\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs, .card-content .psf-combo-embedded-card.col-xs-12 .hidden-lg.col-xs-12.xs-phn .phs {\n  padding-left: 0 !important;\n}\n.card-content .psf-combo-embedded-card.col-xs-12 div[data-view=\"psf/combo/components/share_feed\"] .arrange.phs {\n  padding-left: 0 !important; \t \n}\n.card-content .psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl .xs-phs {\n   margin-top: 23px !important;\n}\n.psf-combo-embedded-card.col-xs-12 .col-xs-12.phn.mbl {\n  margin-bottom: 26px !important;\n}\n.card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap {\n  box-shadow: none;\n}\n  .card-layout .container.xs-full-height .row .col-sm-12.xs-full-height .page-wrap .row .mtxxxl {\n    margin-top: 0 !important;\n  }\n}\n\n.js-message-bubble .photo-component {\n  margin: inherit !important;\n  border-radius: inherit !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "242D794D-E608-417A-A30F-DE27CEC4F568"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17922840334", "integrationSettings": null}], "id": "17922700375", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17938330755", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 9000, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": 2, "viewIds": ["17936461527"], "experiments": [{"weightDistributions": [{"entityId": "17939363355", "endOfRange": 2500}, {"entityId": "17936480974", "endOfRange": 5000}, {"entityId": "17887139560", "endOfRange": 7500}, {"entityId": "17959390115", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "17939363355", "actions": [], "name": null}, {"id": "17936480974", "actions": [{"viewId": "17936461527", "changes": [{"dependencies": [], "type": "custom_code", "id": "f6e16b06bce04646a2885341369f527e", "value": function($){var utils = window.optimizely.get("utils");

var appStateLocale = changeTargetingData.appState.locale;
var lang = '';
var locale = '';
if (appStateLocale) {
    var localeData = appStateLocale.split('-');
    lang = localeData[0];
    locale = localeData[1];
    var appCountryCode = changeTargetingData.appState.countryCode;
    if (appCountryCode && appCountryCode !== locale) {
        locale = appCountryCode;
    }
} else {
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
    lang = browserLocaleData[0];
    locale = browserLocaleData[1];
}
locale = locale.toLowerCase();
lang = lang.toLowerCase();

var translations = {
	en: {
    victory: 'VICTORIES',
    heading: 'VICTORIES HAPPENING EVERY HOUR',
    supporters: 'supporters'
  },
  de: {
    victory: 'ERFOLGE',
    heading: 'VIELE ERFOLGE STÜNDLICH',
    supporters: 'Unterstützer'
  },
  es: {
    victory: 'VICTORIAS',
    heading: 'VICTORIAS CADA HORA',
    supporters: 'firmantes'
  },
  fr: {
    victory: 'DES VICTOIRES',
    heading: 'DES VICTOIRES CHAQUE HEURE',
    supporters: 'signataires'
  },
  it: {
    victory: 'VITTORIE',
    heading: 'VITTORIE OGNI ORA',
    supporters: 'firmatari'
  },
  ru: {
    victory: 'ПОБЕДЫ',
    heading: 'ПОБЕДЫ КАЖДЫЙ ЧАС',
    supporters: 'побед'
  }
};

utils.waitForElement('#content .col-xs-12.xs-phn.xs-full-height .page-wrap [data-view="psf/combo/components/promoter_count"]').then(function (promoter) {

  promoter.parentNode.className = "row";

  victoryHTML = '<div class="victory-wrap xs-pbs phn xs-mhn mhl"><h5 class="mtxl mbl txt-c">' + translations[lang].heading + '</h5><div id="victory-append" class="type-no-wrap mt"></div></div>';
  promoter.parentNode.innerHTML = victoryHTML;
  var heading = document.querySelector('.victory-wrap h5');
  var re = new RegExp(translations[lang].victory,"g");
  heading.innerHTML = heading.innerText.replace(re, "<span class='type-branded'>" + translations[lang].victory + "</span>");

  var victoryAppend = document.getElementById('victory-append');
  for (var k = 0; k < victories[locale].length; k++) {
    var victoryCard = document.createElement('div');
    if (k === 0) {
      victoryCard.id = 'first-victory';
      victoryCard.style['margin-left'] = '0px';
    }
    victoryCard.classList = 'victory-card display-inline-block';
    victoryCard.innerHTML = '' +
      '<div class="victory-img-wrap">'+
      '    <span class="badge badge-victory">Victory</span>'+
      '    <img src="' + victories[locale][k].image + '">'+
      '</div>'+
      '<div class="victory-content">'+
      '    <a href="' + victories[locale][k].url + '" class="link-stealth mbxxs"><h3 class="victory-title mvn">' + victories[locale][k].heading + '</h3></a>'+
      '    <div class="">'+
      '        <span class="symbol symbol-supporters type-branded"></span>' + victories[locale][k].supporters.toLocaleString() + ' '+ translations[lang].supporters +
      '    </div>'+
      '</div>';
    victoryAppend.appendChild(victoryCard);
  }

  var firstVictoryCard = document.getElementById('first-victory');
  var slideNum = 0;
  var visibleSlides = Math.ceil(victoryAppend.clientWidth / 290);
  function nextSlide() {
    if (slideNum < victories[locale].length - visibleSlides + 1) {
      // wait to read
      setTimeout(function () {
        firstVictoryCard.style['margin-left'] = (parseInt(firstVictoryCard.style['margin-left']) - 290) + 'px';
        setTimeout(function () {
          // start next one
          slideNum++;
          nextSlide();
        }, 2000);
      }, 3000);
    }
  }
  nextSlide();

});


var victories = {
    us: [
        {
            url: "https:\/\/www.change.org\/p\/andrew-m-cuomo-safeguard-the-right-of-all-laboring-people-during-covid-19-crisis",
            heading: "Safeguard the Right of All Laboring People to Have Support During COVID-19 Crisis",
            supporters: 613651,
            image: "\/\/assets.change.org\/photos\/0\/gk\/vr\/ewgkVreNRMtEstT-800x450-noPad.jpg?1584711757"
        },
        {
            url: "https:\/\/www.change.org\/p\/jeff-bezos-bezos-to-give-all-his-employees-at-whole-foods-more-paid-time-off-during-coronavirus",
            heading: "Bezos to give all his employees at Whole Foods & more paid time off during Coronavirus",
            supporters: 260493,
            image: "\/\/assets.change.org\/photos\/8\/vi\/qe\/MyvIQEzEVebZlkT-800x450-noPad.jpg?1584138171"
        },
        {
            url: "https:\/\/www.change.org\/p\/roskam-baking-company-hazard-pay-now",
            heading: "Hazard pay now!",
            supporters: 968,
            image: "\/\/assets.change.org\/photos\/5\/sw\/ih\/pISwIhDujwVTjIj-800x450-noPad.jpg?1586359585"
        },
        {
            url: "https:\/\/www.change.org\/p\/smith-college-don-t-take-back-our-food-stipends",
            heading: "Don't Take Back Our Food Stipends",
            supporters: 720,
            image: "\/\/assets.change.org\/photos\/5\/re\/kq\/MXRekQmZqRloDKN-800x450-noPad.jpg?1586805678"
        },
        {
            url: "https:\/\/www.change.org\/p\/carol-christ-uc-berkeley-spring-grades-to-be-pass-no-pass",
            heading: "Change UC Berkeley Spring Grades to be Pass\/No-Pass AND Counted as Major Requirements",
            supporters: 7619,
            image: "\/\/assets.change.org\/photos\/6\/ad\/mk\/OuAdmKXrRTFbVDP-800x450-noPad.jpg?1584404199"
        },
        {
            url: "https:\/\/www.change.org\/p\/castle-leslie-refund-of-all-deposits-to-couples-who-have-booked-the-premises-for-their-special-occasions",
            heading: "Refund of all deposits to couples who have booked the premises for their special occasions",
            supporters: 693,
            image: "\/\/assets.change.org\/photos\/4\/zw\/ql\/AcZwqlRFqwSkOuc-800x450-noPad.jpg?1586783833"
        },
        {
            url: "https:\/\/www.change.org\/p\/milpitas-city-council-stop-la-quinta-on-jacklin-milpitas",
            heading: "Stop La Quinta on Jacklin Milpitas",
            supporters: 1815,
            image: "\/\/assets.change.org\/photos\/2\/xe\/zk\/nzxEzKfNfZROlha-800x450-noPad.jpg?1574673902"
        },
        {
            url: "https:\/\/www.change.org\/p\/pearson-vue-reinstate-nclex-testing",
            heading: "Reinstate NCLEX Testing",
            supporters: 15587,
            image: "\/\/assets.change.org\/photos\/7\/wt\/qf\/HAwtqfqiRJASTbP-800x450-noPad.jpg?1584567499"
        },
        {
            url: "https:\/\/www.change.org\/p\/lucky-supetmarkets-lucky-employees-demand-hzard-pay-for-covid-19",
            heading: "Lucky Employees Need Hazard Pay for COVID-19",
            supporters: 154,
            image: "\/\/assets.change.org\/photos\/9\/me\/mn\/CHmemNfxCZPxOLU-800x450-noPad.jpg?1584831560"
        },
        {
            url: "https:\/\/www.change.org\/p\/governor-lujan-grisham-temporary-moratorium-on-evictions-due-to-covid-19-financial-hardships",
            heading: "Temporary Moratorium on Evictions Due to COVID-19 Financial Hardships",
            supporters: 1640,
            image: "\/\/assets.change.org\/photos\/0\/tu\/ou\/mQTUoUTNEwxczns-800x450-noPad.jpg?1584459842"
        },
        {
            url: "https:\/\/www.change.org\/p\/david-garza-essential-workers-need-essential-pay-frontline-shelter-workers",
            heading: "\"Essential Workers\" need \"Essential Pay\" Temporary Hazard Pay Henry Street TSH workers",
            supporters: 202,
            image: "\/\/assets.change.org\/photos\/8\/lz\/dg\/PXLzDgyjZUHcocC-800x450-noPad.jpg?1584899067"
        }
    ],
    gb: [
        {
            url: "https:\/\/www.change.org\/p\/rishi-sunak-please-thank-your-nhs-workforce-by-not-charging-them-to-use-the-staff-car-park",
            heading: "Please thank your NHS workforce. \nStop charging them to use their staff car park.",
            supporters: 415665,
            image: "\/\/assets.change.org\/photos\/9\/wa\/wy\/zWwAWyTEWLdvgXA-800x450-noPad.jpg?1584814764"
        },
        {
            url: "https:\/\/www.change.org\/p\/student-living-plus-oxford-house-accommodation-student-living-plus-stop-students-paying-rent-during-covid-19",
            heading: "Oxford House Accommodation: Student Living Plus -Stop Students Paying Rent During COVID-19",
            supporters: 222,
            image: "\/\/assets.change.org\/photos\/1\/im\/wq\/sLIMwQaivFALIXw-800x450-noPad.jpg?1586633456"
        },
        {
            url: "https:\/\/www.change.org\/p\/health-minister-access-to-covid-19-swabbing-for-symptomatic-nhs-and-frontline-emergency-services",
            heading: "Access to Covid-19 swabbing for symptomatic NHS and frontline emergency services",
            supporters: 105447,
            image: "\/\/assets.change.org\/photos\/5\/os\/cv\/FUoScvMTwvXkKtb-800x450-noPad.jpg?1584266417"
        },
        {
            url: "https:\/\/www.change.org\/p\/boris-johnson-close-all-holiday-caravan-parks-in-wales-to-stop-covid-19",
            heading: "Close all holiday & caravan parks in Wales to stop covid-19 spreading",
            supporters: 8515,
            image: "\/\/assets.change.org\/photos\/0\/te\/kl\/XHtEKLSshGshciB-800x450-noPad.jpg?1584831091"
        },
        {
            url: "https:\/\/www.change.org\/p\/university-of-manchester-reimburse-last-installment-of-university-of-manchester-accommodation-fees",
            heading: "Reimburse last installment of University of Manchester accommodation fees",
            supporters: 1181,
            image: "\/\/assets.change.org\/photos\/3\/yu\/vx\/iDyUVXLGkrwCBsj-800x450-noPad.jpg?1584749524"
        },
        {
            url: "https:\/\/www.change.org\/p\/uk-parliament-request-for-furlough-leave-to-include-salespeople-s-commissions-within-80-payment-offer",
            heading: "Request for Furlough Leave to include Salespeople\u2019s Commissions within 80% payment offer.",
            supporters: 28708,
            image: "\/\/assets.change.org\/photos\/0\/cl\/lj\/jrCLljPGgnatXBn-800x450-noPad.jpg?1586512529"
        },
        {
            url: "https:\/\/www.change.org\/p\/grant-shapps-fair-treatment-for-easyjet-staff",
            heading: "Fair treatment for easyJet staff",
            supporters: 40645,
            image: "\/\/assets.change.org\/photos\/9\/ic\/yx\/lQiCYxtOyTaTkKJ-800x450-noPad.jpg?1584574231"
        },
        {
            url: "https:\/\/www.change.org\/p\/heathrow-airport-management-face-mask-protection-for-heathrow-airport-security-officers-against-coronavirus",
            heading: "Face Mask Protection For Heathrow Airport Security Officers Against Coronavirus",
            supporters: 3151,
            image: "\/\/assets.change.org\/photos\/0\/py\/pb\/ndpYpBlCuJGbgkW-800x450-noPad.jpg?1580322787"
        }
    ],
    au: [
        {
            url: "https:\/\/www.change.org\/p\/scott-morrison-no-restrictions-on-telehealth-consultations-now",
            heading: "No restrictions on Telehealth consultations NOW",
            supporters: 25574,
            image: "\/\/assets.change.org\/photos\/1\/np\/in\/tUnpinvDbOjpveq-800x450-noPad.jpg?1583548054"
        },
        {
            url: "https:\/\/www.change.org\/p\/daniel-andrews-close-crown-casino-during-the-coronavirus-pandemic",
            heading: "#CloseCrownCasino during the Coronavirus Pandemic",
            supporters: 29107,
            image: "\/\/assets.change.org\/photos\/4\/oi\/pe\/JnoipeAhZCLWWLw-800x450-noPad.jpg?1584402846"
        },
        {
            url: "https:\/\/www.change.org\/p\/help-bring-stranded-australian-citizens-in-lebanon-home",
            heading: "Help bring stranded Australian citizens in Lebanon home!",
            supporters: 239,
            image: "\/\/assets.change.org\/photos\/3\/md\/nl\/ujMDnlDeuIGsKXG-800x450-noPad.jpg?1586322132"
        },
        {
            url: "https:\/\/www.change.org\/p\/minister-dan-tehan-allow-childcare-providers-to-offer-families-gap-free-fees",
            heading: "Allow childcare providers to offer families gap free fees!",
            supporters: 25256,
            image: "\/\/assets.change.org\/photos\/1\/td\/mm\/BitDmmdFPPnVkzY-800x450-noPad.jpg?1584964528"
        },
        {
            url: "https:\/\/www.change.org\/p\/christian-porter-ban-abusive-dog-trainer-jeff-gellman-australia",
            heading: "Ban Abusive Dog Trainer - Jeff Gellman - Australia",
            supporters: 49509,
            image: "\/\/assets.change.org\/photos\/6\/aj\/rw\/eUAjrWTRuovFAID-800x450-noPad.jpg?1580453397"
        },
        {
            url: "https:\/\/www.change.org\/p\/stop-animal-neglect-by-qantas-airlines",
            heading: "Stop animal neglect by Qantas airlines",
            supporters: 82603,
            image: "\/\/assets.change.org\/photos\/6\/hs\/pd\/HJHSPdXRTRrfBUt-800x450-noPad.jpg?1578797206"
        },
        {
            url: "https:\/\/www.change.org\/p\/say-no-to-the-proposed-unjust-and-exorbitant-rate-rise-by-lismore-city-council-please-make-sure-you-share-this",
            heading: "Say NO to the proposed unjust and exorbitant rate rise by Lismore City Council. SHARE!",
            supporters: 1755,
            image: "\/\/assets.change.org\/photos\/0\/nt\/rv\/TBnTrvCNHIpVCWG-800x450-noPad.jpg?1580471425"
        },
        {
            url: "https:\/\/www.change.org\/p\/ban-the-melbourne-grand-prix-don-t-bring-coronavirus-to-melbourne",
            heading: "Ban the Melbourne Grand Prix - don't bring Coronavirus to Melbourne!",
            supporters: 13974,
            image: "\/\/assets.change.org\/photos\/7\/gm\/px\/TqGmpxnhKbPyVpP-800x450-noPad.jpg?1583975853"
        }
    ],
    ca: [
        {
            url: "https:\/\/www.change.org\/p\/private-daycare-schools-to-credit-refund-parents-for-service-not-rendered-due-to-covid-19",
            heading: "Private daycare\/schools to credit\/refund parents for service not rendered due to covid-19",
            supporters: 8156,
            image: "\/\/assets.change.org\/photos\/6\/at\/xx\/jxAtXXpOECglDOJ-800x450-noPad.jpg?1584494697"
        },
        {
            url: "https:\/\/www.change.org\/p\/minister-of-health-change-coronavirus-testing-to-include-young-people-in-ontario-and-canada",
            heading: "Change Coronavirus Testing To Include Young People In Ontario and Canada!",
            supporters: 290,
            image: "\/\/assets.change.org\/photos\/9\/jf\/el\/mZJFElqXCjSoFdD-800x450-noPad.jpg?1585552440"
        },
        {
            url: "https:\/\/www.change.org\/p\/advanced-fresh-concepts-franchise-corporation-19205-south-laurel-park-rd-rancho-dominguez-ca-90220-increase-the-temporary-commission-increase",
            heading: "Increase the temporary commission increase",
            supporters: 778,
            image: "\/\/assets.change.org\/photos\/5\/cq\/ci\/MlCqCijwKDiCkeL-800x450-noPad.jpg?1584754149"
        },
        {
            url: "https:\/\/www.change.org\/p\/doug-ford-capping-hydro-prices-to-off-peak-times-during-covid-19-isolation",
            heading: "Capping Hydro prices to off peak times during Covid-19 isolation",
            supporters: 30093,
            image: "\/\/assets.change.org\/photos\/2\/lc\/ng\/uiLcNgewnqSJXsS-800x450-noPad.jpg?1584317913"
        },
        {
            url: "https:\/\/www.change.org\/p\/justin-trudeau-support-for-entrepreneurs-consultants-gig-economy-workers",
            heading: "Covid-19 Support for Entrepreneurs, Consultants & Gig Economy & Part-time Workers",
            supporters: 13046,
            image: "\/\/assets.change.org\/photos\/2\/yh\/cb\/nRyHcbxxIkAwnKR-800x450-noPad.jpg?1584131065"
        },
        {
            url: "https:\/\/www.change.org\/p\/federal-government-income-tax-break-in-pandemic-times-canadians-will-be-suffering-with-less-work-or-no-work",
            heading: "Income Tax break in pandemic times,  Canadians will be suffering with less work or no work",
            supporters: 1294,
            image: "\/\/assets.change.org\/photos\/5\/kl\/md\/jwKlmDPeDOdYEHH-800x450-noPad.jpg?1584396074"
        },
        {
            url: "https:\/\/www.change.org\/p\/justin-trudeau-guaranteed-basic-income-for-canada-during-covid",
            heading: "Guaranteed Basic Income for Canada During COVID",
            supporters: 4383,
            image: "\/\/assets.change.org\/photos\/2\/aj\/el\/ScAJElJlOhxNdXz-800x450-noPad.jpg?1584296320"
        },
        {
            url: "https:\/\/www.change.org\/p\/unbc-president-geoff-payne-petition-for-proper-unbc-2020-convocation",
            heading: "Petition for Proper UNBC 2020 Convocation",
            supporters: 1451,
            image: "\/\/assets.change.org\/photos\/2\/bd\/oz\/BjbdozGJuHTsIrE-800x450-noPad.jpg?1586380934"
        }
    ],
    es: [
        {
            url: "https:\/\/www.change.org\/p\/congreso-de-los-diputados-no-m%C3%A1s-muertes-impunes-en-la-carretera-como-la-de-mi-marido-porunaleyjusta",
            heading: "No m\u00e1s muertes impunes en la carretera #porunaleyjusta",
            supporters: 327098,
            image: "\/\/assets.change.org\/photos\/1\/vw\/bj\/PQVWBJuGyCdgjMt-800x450-noPad.jpg?1526957771"
        },
        {
            url: "https:\/\/www.change.org\/p\/placa-conmemorativa-a-dani-infante-en-la-parada-de-autob%C3%BAs-del-hospital-duran-i-reynals",
            heading: "Placa conmemorativa a Dani Infante en la parada de autob\u00fas del Hospital Duran i Reynals",
            supporters: 30540,
            image: "\/\/assets.change.org\/photos\/8\/wj\/qj\/eaWJqJIcmJmxthT-800x450-noPad.jpg?1566906787"
        },
        {
            url: "https:\/\/www.change.org\/p\/petici%C3%B3n-de-regularizaci%C3%B3n-de-gorgui-lamine-que-salv%C3%B3-de-las-llamas-a-un-vecino-en-d%C3%A9nia-interiorgob-ayto-denia",
            heading: "Petici\u00f3n de regularizaci\u00f3n de Gorgui Lamine que salv\u00f3 de las llamas a un vecino en D\u00e9nia",
            supporters: 89965,
            image: "\/\/assets.change.org\/photos\/1\/yp\/vq\/oPYpvqDwSBBnGZl-800x450-noPad.jpg?1575976996"
        },
        {
            url: "https:\/\/www.change.org\/p\/ministerio-de-asuntos-exteriores-y-de-cooperaci%C3%B3n-repatriaci%C3%B3n-de-espa%C3%B1oles-en-laos-vientiane",
            heading: "Repatriaci\u00f3n de Espa\u00f1oles en Laos ( Vientiane)",
            supporters: 2213,
            image: "\/\/assets.change.org\/photos\/7\/pn\/qv\/WZpnqVWKMHALsmI-800x450-noPad.jpg?1585246212"
        }
    ],
    fr: [
        {
            url: "https:\/\/www.change.org\/p\/monsieur-el-sa%C3%AFr-r%C3%A9int%C3%A9gration-de-mona-infirmi%C3%A8re-%C3%A0-l-h%C3%B4pital-de-brest",
            heading: "R\u00e9int\u00e9gration de Mona, infirmi\u00e8re \u00e0 l'h\u00f4pital de Brest",
            supporters: 3247,
            image: "\/\/assets.change.org\/photos\/1\/hh\/hl\/oPhhHLvhHfglSVL-800x450-noPad.jpg?1585823927"
        },
        {
            url: "https:\/\/www.change.org\/p\/scandale-cancer-du-col-de-l-ut%C3%A9rus-hpv-maintenant",
            heading: "Scandale ! Cancer du col de l'ut\u00e9rus : HPV Maintenant !",
            supporters: 2973,
            image: "\/\/assets.change.org\/photos\/4\/cc\/fr\/YUCcfRbCvLlhCqK-800x450-noPad.jpg?1545468272"
        },
        {
            url: "https:\/\/www.change.org\/p\/olivierveran-comptabiliser-les-d%C3%A9c%C3%A8s-covid-19-en-ehpad-pour-la-dignit%C3%A9-des-personnes-%C3%A2g%C3%A9es",
            heading: "Comptabiliser les d\u00e9c\u00e8s COVID-19 en EHPAD pour la dignit\u00e9 des personnes \u00e2g\u00e9es",
            supporters: 56612,
            image: "\/\/assets.change.org\/photos\/6\/mr\/ni\/bDMrNiqrssvOUae-800x450-noPad.jpg?1585298324"
        },
        {
            url: "https:\/\/www.change.org\/p\/minist%C3%A8re-de-l-%C3%A9ducation-nationale-baccalaur%C3%A9at-sur-dossier-2020",
            heading: "Baccalaur\u00e9at 2020 : nous voulons \u00eatre \u00e9valu\u00e9s sur dossier !",
            supporters: 19749,
            image: "\/\/assets.change.org\/photos\/2\/ev\/qz\/BteVQZGpiKRHMuJ-800x450-noPad.jpg?1585039282"
        },
        {
            url: "https:\/\/www.change.org\/p\/coronavirus-pour-le-report-des-%C3%A9lections-municipales-municipales2020-codvid19-covid-19-confinement",
            heading: "Pour le report des \u00e9lections municipales \/ 2\u00e8me tour",
            supporters: 30770,
            image: "\/\/assets.change.org\/photos\/6\/nh\/us\/gINhUshzpBHfOrl-800x450-noPad.jpg?1584028727"
        },
        {
            url: "https:\/\/www.change.org\/p\/etat-non-%C3%A0-l-euthanasie-des-animaux-pendant-et-apr%C3%A8s-le-confinement?utm_source=grow_fr&utm_medium=instagram&utm_campaign=com",
            heading: "NON \u00e0 l'EUTHANASIE des ANIMAUX pendant et apr\u00e8s le CONFINEMENT!",
            supporters: 1997,
            image: "\/\/assets.change.org\/photos\/1\/wg\/ft\/pwWGfTPoTMbCqKP-800x450-noPad.jpg?1586280606"
        }
    ],
    ru: [
        {
            url: "https:\/\/www.change.org\/p\/\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-\u043a\u043e\u043c\u0438\u0442\u0435\u0442-\u0440\u0444-\u043d\u0435-\u0434\u0430\u0434\u0438\u043c-\u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c-\u043e\u0441\u0443\u0434\u0438\u0442\u044c-\u0434\u0430\u0440\u044c\u044e-\u0430\u0433\u0435\u043d\u0438\u0439",
            heading: "\u041d\u0435 \u0434\u0430\u0434\u0438\u043c \u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c\/\u043e\u0441\u0443\u0434\u0438\u0442\u044c \u0414\u0430\u0440\u044c\u044e \u0410\u0433\u0435\u043d\u0438\u0439",
            supporters: 226815,
            image: "\/\/assets.change.org\/photos\/7\/qf\/sm\/MdqFsMvVqTniooN-800x450-noPad.jpg?1544794814"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442-\u0440\u043e\u0441\u0441\u0438\u0438-\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c-\u0432\u0441\u0435-\u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0435-\u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f-\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435-\u0441-\u0434\u043d\u0435\u043c-\u043f\u043e\u0431\u0435\u0434\u044b-\u0432\u043a\u043b\u044e\u0447\u0430\u044f-\u043f\u0430\u0440\u0430\u0434-\u0432-\u043c\u043e\u0441\u043a\u0432\u0435",
            heading: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0414\u043d\u0435\u043c \u041f\u043e\u0431\u0435\u0434\u044b, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0430\u0440\u0430\u0434 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435.",
            supporters: 436,
            image: "\/\/assets.change.org\/photos\/4\/nq\/uu\/aunQUUCtliuUyvN-800x450-noPad.jpg?1586559184"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u0442\u0440\u0435\u0431\u0443\u0435\u043c-\u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c-\u0443\u0447\u0438\u0442\u0435\u043b\u044f\u043c-\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c-\u0438\u0437-\u0434\u043e\u043c\u0430",
            heading: "\u0422\u0440\u0435\u0431\u0443\u0435\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0443\u0447\u0438\u0442\u0435\u043b\u044f\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u0437 \u0434\u043e\u043c\u0430!",
            supporters: 40660,
            image: "\/\/assets.change.org\/photos\/0\/rl\/uw\/JtRlUwJhJgLWDOf-800x450-noPad.jpg?1585132025"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u0432\u0430\u0441\u0438\u043d\u0430-\u0435\u043b\u0435\u043d\u0430-\u0432\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u043d\u0430-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439-\u043f\u0435\u0440\u0435\u0445\u043e\u0434-\u043d\u0430-\u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e-\u0444\u043e\u0440\u043c\u0443-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f-\u0432-\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u043c-\u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0435",
            heading: "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u043c \u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0435",
            supporters: 476,
            image: "\/\/assets.change.org\/photos\/9\/xw\/vv\/hAXWVvtAXWzfugu-800x450-noPad.jpg?1584289105"
        }
    ],
    de: [
        {
            url: "https:\/\/www.change.org\/p\/oberb%C3%BCrgermeister-burkhard-jung-trotz-coronavirus-geb%C3%A4rende-brauchen-ihre-partner-innen-im-krei%C3%9Fsaal",
            heading: "Trotz Coronavirus - Geb\u00e4rende brauchen ihre Partner*innen im Krei\u00dfsaal!",
            supporters: 15372,
            image: "\/\/assets.change.org\/photos\/4\/ab\/cg\/kaABcGOXxQgWvSn-800x450-noPad.jpg?1586031054"
        },
        {
            url: "https:\/\/www.change.org\/p\/jens-spahn-verh%C3%A4ngen-sie-deutschlandweite-ausgangssperren-gegen-die-ausbreitung-des-corona-virus",
            heading: "Verh\u00e4ngen Sie deutschlandweite Ausgangssperren gegen die Ausbreitung des Corona Virus",
            supporters: 4765,
            image: "\/\/assets.change.org\/photos\/9\/lv\/mh\/FElvmhTjrdxthTA-800x450-noPad.jpg?1584529390"
        },
        {
            url: "https:\/\/www.change.org\/p\/bundesministerium-f%C3%BCr-gesundheit-aufstockung-der-intensivbetten-in-deutschland",
            heading: "Aufstockung der Intensivbetten in Deutschland",
            supporters: 3634,
            image: "\/\/assets.change.org\/photos\/1\/jz\/ws\/xQjZwSsOFllblty-800x450-noPad.jpg?1584011842"
        },
        {
            url: "https:\/\/www.change.org\/p\/bundesregierung-schlie%C3%9Fung-der-tierversuchsanstalten-hamburg-umgebung-deutschlandweit",
            heading: "Schlie\u00dfung der Tierversuchsanstalten Hamburg ( Umgebung ) Deutschlandweit",
            supporters: 130037,
            image: "\/\/assets.change.org\/photos\/7\/oc\/ng\/nCOCNGbnKOWmtmq-800x450-noPad.jpg?1584721255"
        }
    ],
    it: [
        {
            url: "https:\/\/www.change.org\/p\/regione-lombardia-approvare-immediatamente-ospedale-da-campo-alpini-a-bergamo-2",
            heading: "Approvare immediatamente ospedale da campo Alpini a Bergamo",
            supporters: 132660,
            image: "\/\/assets.change.org\/photos\/9\/lo\/ns\/ATlONSqBpBvikUB-800x450-noPad.jpg?1584572427"
        },
        {
            url: "https:\/\/www.change.org\/p\/coronavirus-parcheggi-e-areac-gratuiti-per-gli-infermieri-di-milano",
            heading: "Coronavirus: parcheggi e AreaC gratuiti per gli infermieri di Milano",
            supporters: 53174,
            image: "\/\/assets.change.org\/photos\/4\/oq\/dz\/JZOQdzOvXExtgNh-800x450-noPad.jpg?1583492040"
        },
        {
            url: "https:\/\/www.change.org\/p\/no-al-taglio-del-assistenza-domiciliare-infermieristica",
            heading: "No, al decreto U00525 del 31\u200b.\u200b12\u200b.\u200b2019 che taglia assistenza domiciliare infermieristica",
            supporters: 83647,
            image: "\/\/assets.change.org\/photos\/5\/hs\/bx\/UFHSbXoHITeLuEc-800x450-noPad.jpg?1575668259"
        }
    ]
};
}}, {"value": "<style>.victory-wrap {\n\tbackground: transparent;\n  position: relative;\n \toverflow: hidden; \n  padding-top: 14px;\n}\n.victory-wrap::after, .victory-wrap:before {\n    content: \"\";\n    width: 35px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 5;\n    background: linear-gradient(270deg, #fffcf7 0%, rgba(255, 255, 255, 0) 100%);\n}\n.victory-wrap:before {\n\tleft: -35px;\n  right: unset;\n}\n.victory-wrap h3 {\n    margin-top: 40px;\n    margin-bottom: 36px;\n}\n.victory-card {\n\t\tposition: relative;\n    background: #ffffff;\n    box-sizing: border-box;\n    border-radius: 5px;\n    height: 226px;\n    width: 280px;\n    margin-right: 10px;\n    white-space: normal !important;\n    text-align: left;\n    transition: margin-left 2000ms cubic-bezier(0.4, 0.45, 0.35, 1) 0s;\n    overflow: hidden;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n}\n.victory-img-wrap {\n    position: relative;\n    width: 100%;\n    height: 50%;\n}\n\n.victory-img-wrap .badge {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n.victory-img-wrap img {\n\t\theight: 100%;\n    object-fit: cover;\n    width: 100%;\n    object-position: top;\n}\n.victory-content {\n\tpadding: 15px;\n}\n.victory-content a {\n    display: block;\n    max-height: 52px;\n    overflow: hidden;\n}\n.victory-content h3 {\n    font-size: 20px;\n    line-height: 26px;\n}\n.card-content .psf-combo-embedded-card > .photo-component {\n  display: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "2308ed02931345d78b5f76efbe608394"}]}], "name": null}, {"id": "17887139560", "actions": [{"viewId": "17936461527", "changes": [{"dependencies": [], "type": "custom_code", "id": "158c1370c73442f08e3a1655fdcd05d7", "value": function($){var utils = window.optimizely.get("utils");

var appStateLocale = changeTargetingData.appState.locale;
var lang = '';
var locale = '';
if (appStateLocale) {
    var localeData = appStateLocale.split('-');
    lang = localeData[0];
    locale = localeData[1];
    var appCountryCode = changeTargetingData.appState.countryCode;
    if (appCountryCode && appCountryCode !== locale) {
        locale = appCountryCode;
    }
} else {
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
    lang = browserLocaleData[0];
    locale = browserLocaleData[1];
}
locale = locale.toLowerCase();
lang = lang.toLowerCase();

var translations = {
	en: {
    victory: 'VICTORIES',
    heading: 'VICTORIES HAPPENING EVERY HOUR',
    supporters: 'supporters'
  },
  de: {
    victory: 'ERFOLGE',
    heading: 'VIELE ERFOLGE STÜNDLICH',
    supporters: 'Unterstützer'
  },
  es: {
    victory: 'VICTORIAS',
    heading: 'VICTORIAS CADA HORA',
    supporters: 'firmantes'
  },
  fr: {
    victory: 'DES VICTOIRES',
    heading: 'DES VICTOIRES CHAQUE HEURE',
    supporters: 'signataires'
  },
  it: {
    victory: 'VITTORIE',
    heading: 'VITTORIE OGNI ORA',
    supporters: 'firmatari'
  },
  ru: {
    victory: 'ПОБЕДЫ',
    heading: 'ПОБЕДЫ КАЖДЫЙ ЧАС',
    supporters: 'побед'
  }
};

utils.waitForElement('#content .col-xs-12.xs-phn.xs-full-height .page-wrap [data-view="psf/combo/components/promoter_count"]').then(function (promoter) {
  
  promoter.parentNode.className = "row";

  victoryHTML = '<div class="victory-wrap xs-pbs phn xs-mhn mhl"><h5 class="mtxl mbl txt-c">' + translations[lang].heading + '</h5><div id="victory-append" class="type-no-wrap mt"></div></div>';
  promoter.parentNode.innerHTML = victoryHTML;
  var heading = document.querySelector('.victory-wrap h5');
  var re = new RegExp(translations[lang].victory,"g");
  heading.innerHTML = heading.innerText.replace(re, "<span class='type-branded'>" + translations[lang].victory + "</span>");

  var victoryAppend = document.getElementById('victory-append');
  for (var k = 0; k < victories[locale].length; k++) {
    var victoryCard = document.createElement('div');
    if (k === 0) {
      victoryCard.id = 'first-victory';
      victoryCard.style['margin-bottom'] = '0px';
    }
    victoryCard.classList = 'victory-card';
    victoryCard.innerHTML = '' +
      '<div class="victory-img-wrap">'+
      '    <img src="' + victories[locale][k].image + '">'+
      '</div>'+
      '<div class="victory-content">'+
      '    <a href="' + victories[locale][k].url + '" class="link-stealth mbxxs"><h3 class="victory-title mvn">' + victories[locale][k].heading + '</h3></a>'+
      '    <div class="type-s type-weak">'+
      '        <span class="symbol symbol-supporters type-branded"></span>' + victories[locale][k].supporters.toLocaleString() + ' ' + translations[lang].supporters +
      '    </div>'+
      '</div>';
    victoryAppend.appendChild(victoryCard);
  }

  var firstVictoryCard = document.getElementById('first-victory');
  var slideNum = 0;
  function nextSlide() {
    if (slideNum < 4) {
      // wait to read
      setTimeout(function () {
        firstVictoryCard.style['margin-bottom'] = (parseInt(firstVictoryCard.style['margin-bottom']) - 110) + 'px';
        setTimeout(function () {
          // start next one
          slideNum++;
          nextSlide();
        }, 2000);
      }, 3000);
    }
  }
  //nextSlide();					

});


var victories = {
    us: [
        {
            url: "https:\/\/www.change.org\/p\/andrew-m-cuomo-safeguard-the-right-of-all-laboring-people-during-covid-19-crisis",
            heading: "Safeguard the Right of All Laboring People to Have Support During COVID-19 Crisis",
            supporters: 613651,
            image: "\/\/assets.change.org\/photos\/0\/gk\/vr\/ewgkVreNRMtEstT-800x450-noPad.jpg?1584711757"
        },
        {
            url: "https:\/\/www.change.org\/p\/jeff-bezos-bezos-to-give-all-his-employees-at-whole-foods-more-paid-time-off-during-coronavirus",
            heading: "Bezos to give all his employees at Whole Foods & more paid time off during Coronavirus",
            supporters: 260493,
            image: "\/\/assets.change.org\/photos\/8\/vi\/qe\/MyvIQEzEVebZlkT-800x450-noPad.jpg?1584138171"
        },
        {
            url: "https:\/\/www.change.org\/p\/roskam-baking-company-hazard-pay-now",
            heading: "Hazard pay now!",
            supporters: 968,
            image: "\/\/assets.change.org\/photos\/5\/sw\/ih\/pISwIhDujwVTjIj-800x450-noPad.jpg?1586359585"
        },
        {
            url: "https:\/\/www.change.org\/p\/smith-college-don-t-take-back-our-food-stipends",
            heading: "Don't Take Back Our Food Stipends",
            supporters: 720,
            image: "\/\/assets.change.org\/photos\/5\/re\/kq\/MXRekQmZqRloDKN-800x450-noPad.jpg?1586805678"
        },
        {
            url: "https:\/\/www.change.org\/p\/carol-christ-uc-berkeley-spring-grades-to-be-pass-no-pass",
            heading: "Change UC Berkeley Spring Grades to be Pass\/No-Pass AND Counted as Major Requirements",
            supporters: 7619,
            image: "\/\/assets.change.org\/photos\/6\/ad\/mk\/OuAdmKXrRTFbVDP-800x450-noPad.jpg?1584404199"
        },
        {
            url: "https:\/\/www.change.org\/p\/castle-leslie-refund-of-all-deposits-to-couples-who-have-booked-the-premises-for-their-special-occasions",
            heading: "Refund of all deposits to couples who have booked the premises for their special occasions",
            supporters: 693,
            image: "\/\/assets.change.org\/photos\/4\/zw\/ql\/AcZwqlRFqwSkOuc-800x450-noPad.jpg?1586783833"
        },
        {
            url: "https:\/\/www.change.org\/p\/milpitas-city-council-stop-la-quinta-on-jacklin-milpitas",
            heading: "Stop La Quinta on Jacklin Milpitas",
            supporters: 1815,
            image: "\/\/assets.change.org\/photos\/2\/xe\/zk\/nzxEzKfNfZROlha-800x450-noPad.jpg?1574673902"
        },
        {
            url: "https:\/\/www.change.org\/p\/pearson-vue-reinstate-nclex-testing",
            heading: "Reinstate NCLEX Testing",
            supporters: 15587,
            image: "\/\/assets.change.org\/photos\/7\/wt\/qf\/HAwtqfqiRJASTbP-800x450-noPad.jpg?1584567499"
        },
        {
            url: "https:\/\/www.change.org\/p\/lucky-supetmarkets-lucky-employees-demand-hzard-pay-for-covid-19",
            heading: "Lucky Employees Need Hazard Pay for COVID-19",
            supporters: 154,
            image: "\/\/assets.change.org\/photos\/9\/me\/mn\/CHmemNfxCZPxOLU-800x450-noPad.jpg?1584831560"
        },
        {
            url: "https:\/\/www.change.org\/p\/governor-lujan-grisham-temporary-moratorium-on-evictions-due-to-covid-19-financial-hardships",
            heading: "Temporary Moratorium on Evictions Due to COVID-19 Financial Hardships",
            supporters: 1640,
            image: "\/\/assets.change.org\/photos\/0\/tu\/ou\/mQTUoUTNEwxczns-800x450-noPad.jpg?1584459842"
        },
        {
            url: "https:\/\/www.change.org\/p\/david-garza-essential-workers-need-essential-pay-frontline-shelter-workers",
            heading: "\"Essential Workers\" need \"Essential Pay\" Temporary Hazard Pay Henry Street TSH workers",
            supporters: 202,
            image: "\/\/assets.change.org\/photos\/8\/lz\/dg\/PXLzDgyjZUHcocC-800x450-noPad.jpg?1584899067"
        }
    ],
    gb: [
        {
            url: "https:\/\/www.change.org\/p\/rishi-sunak-please-thank-your-nhs-workforce-by-not-charging-them-to-use-the-staff-car-park",
            heading: "Please thank your NHS workforce. \nStop charging them to use their staff car park.",
            supporters: 415665,
            image: "\/\/assets.change.org\/photos\/9\/wa\/wy\/zWwAWyTEWLdvgXA-800x450-noPad.jpg?1584814764"
        },
        {
            url: "https:\/\/www.change.org\/p\/student-living-plus-oxford-house-accommodation-student-living-plus-stop-students-paying-rent-during-covid-19",
            heading: "Oxford House Accommodation: Student Living Plus -Stop Students Paying Rent During COVID-19",
            supporters: 222,
            image: "\/\/assets.change.org\/photos\/1\/im\/wq\/sLIMwQaivFALIXw-800x450-noPad.jpg?1586633456"
        },
        {
            url: "https:\/\/www.change.org\/p\/health-minister-access-to-covid-19-swabbing-for-symptomatic-nhs-and-frontline-emergency-services",
            heading: "Access to Covid-19 swabbing for symptomatic NHS and frontline emergency services",
            supporters: 105447,
            image: "\/\/assets.change.org\/photos\/5\/os\/cv\/FUoScvMTwvXkKtb-800x450-noPad.jpg?1584266417"
        },
        {
            url: "https:\/\/www.change.org\/p\/boris-johnson-close-all-holiday-caravan-parks-in-wales-to-stop-covid-19",
            heading: "Close all holiday & caravan parks in Wales to stop covid-19 spreading",
            supporters: 8515,
            image: "\/\/assets.change.org\/photos\/0\/te\/kl\/XHtEKLSshGshciB-800x450-noPad.jpg?1584831091"
        },
        {
            url: "https:\/\/www.change.org\/p\/university-of-manchester-reimburse-last-installment-of-university-of-manchester-accommodation-fees",
            heading: "Reimburse last installment of University of Manchester accommodation fees",
            supporters: 1181,
            image: "\/\/assets.change.org\/photos\/3\/yu\/vx\/iDyUVXLGkrwCBsj-800x450-noPad.jpg?1584749524"
        },
        {
            url: "https:\/\/www.change.org\/p\/uk-parliament-request-for-furlough-leave-to-include-salespeople-s-commissions-within-80-payment-offer",
            heading: "Request for Furlough Leave to include Salespeople\u2019s Commissions within 80% payment offer.",
            supporters: 28708,
            image: "\/\/assets.change.org\/photos\/0\/cl\/lj\/jrCLljPGgnatXBn-800x450-noPad.jpg?1586512529"
        },
        {
            url: "https:\/\/www.change.org\/p\/grant-shapps-fair-treatment-for-easyjet-staff",
            heading: "Fair treatment for easyJet staff",
            supporters: 40645,
            image: "\/\/assets.change.org\/photos\/9\/ic\/yx\/lQiCYxtOyTaTkKJ-800x450-noPad.jpg?1584574231"
        },
        {
            url: "https:\/\/www.change.org\/p\/heathrow-airport-management-face-mask-protection-for-heathrow-airport-security-officers-against-coronavirus",
            heading: "Face Mask Protection For Heathrow Airport Security Officers Against Coronavirus",
            supporters: 3151,
            image: "\/\/assets.change.org\/photos\/0\/py\/pb\/ndpYpBlCuJGbgkW-800x450-noPad.jpg?1580322787"
        }
    ],
    au: [
        {
            url: "https:\/\/www.change.org\/p\/scott-morrison-no-restrictions-on-telehealth-consultations-now",
            heading: "No restrictions on Telehealth consultations NOW",
            supporters: 25574,
            image: "\/\/assets.change.org\/photos\/1\/np\/in\/tUnpinvDbOjpveq-800x450-noPad.jpg?1583548054"
        },
        {
            url: "https:\/\/www.change.org\/p\/daniel-andrews-close-crown-casino-during-the-coronavirus-pandemic",
            heading: "#CloseCrownCasino during the Coronavirus Pandemic",
            supporters: 29107,
            image: "\/\/assets.change.org\/photos\/4\/oi\/pe\/JnoipeAhZCLWWLw-800x450-noPad.jpg?1584402846"
        },
        {
            url: "https:\/\/www.change.org\/p\/help-bring-stranded-australian-citizens-in-lebanon-home",
            heading: "Help bring stranded Australian citizens in Lebanon home!",
            supporters: 239,
            image: "\/\/assets.change.org\/photos\/3\/md\/nl\/ujMDnlDeuIGsKXG-800x450-noPad.jpg?1586322132"
        },
        {
            url: "https:\/\/www.change.org\/p\/minister-dan-tehan-allow-childcare-providers-to-offer-families-gap-free-fees",
            heading: "Allow childcare providers to offer families gap free fees!",
            supporters: 25256,
            image: "\/\/assets.change.org\/photos\/1\/td\/mm\/BitDmmdFPPnVkzY-800x450-noPad.jpg?1584964528"
        },
        {
            url: "https:\/\/www.change.org\/p\/christian-porter-ban-abusive-dog-trainer-jeff-gellman-australia",
            heading: "Ban Abusive Dog Trainer - Jeff Gellman - Australia",
            supporters: 49509,
            image: "\/\/assets.change.org\/photos\/6\/aj\/rw\/eUAjrWTRuovFAID-800x450-noPad.jpg?1580453397"
        },
        {
            url: "https:\/\/www.change.org\/p\/stop-animal-neglect-by-qantas-airlines",
            heading: "Stop animal neglect by Qantas airlines",
            supporters: 82603,
            image: "\/\/assets.change.org\/photos\/6\/hs\/pd\/HJHSPdXRTRrfBUt-800x450-noPad.jpg?1578797206"
        },
        {
            url: "https:\/\/www.change.org\/p\/say-no-to-the-proposed-unjust-and-exorbitant-rate-rise-by-lismore-city-council-please-make-sure-you-share-this",
            heading: "Say NO to the proposed unjust and exorbitant rate rise by Lismore City Council. SHARE!",
            supporters: 1755,
            image: "\/\/assets.change.org\/photos\/0\/nt\/rv\/TBnTrvCNHIpVCWG-800x450-noPad.jpg?1580471425"
        },
        {
            url: "https:\/\/www.change.org\/p\/ban-the-melbourne-grand-prix-don-t-bring-coronavirus-to-melbourne",
            heading: "Ban the Melbourne Grand Prix - don't bring Coronavirus to Melbourne!",
            supporters: 13974,
            image: "\/\/assets.change.org\/photos\/7\/gm\/px\/TqGmpxnhKbPyVpP-800x450-noPad.jpg?1583975853"
        }
    ],
    ca: [
        {
            url: "https:\/\/www.change.org\/p\/private-daycare-schools-to-credit-refund-parents-for-service-not-rendered-due-to-covid-19",
            heading: "Private daycare\/schools to credit\/refund parents for service not rendered due to covid-19",
            supporters: 8156,
            image: "\/\/assets.change.org\/photos\/6\/at\/xx\/jxAtXXpOECglDOJ-800x450-noPad.jpg?1584494697"
        },
        {
            url: "https:\/\/www.change.org\/p\/minister-of-health-change-coronavirus-testing-to-include-young-people-in-ontario-and-canada",
            heading: "Change Coronavirus Testing To Include Young People In Ontario and Canada!",
            supporters: 290,
            image: "\/\/assets.change.org\/photos\/9\/jf\/el\/mZJFElqXCjSoFdD-800x450-noPad.jpg?1585552440"
        },
        {
            url: "https:\/\/www.change.org\/p\/advanced-fresh-concepts-franchise-corporation-19205-south-laurel-park-rd-rancho-dominguez-ca-90220-increase-the-temporary-commission-increase",
            heading: "Increase the temporary commission increase",
            supporters: 778,
            image: "\/\/assets.change.org\/photos\/5\/cq\/ci\/MlCqCijwKDiCkeL-800x450-noPad.jpg?1584754149"
        },
        {
            url: "https:\/\/www.change.org\/p\/doug-ford-capping-hydro-prices-to-off-peak-times-during-covid-19-isolation",
            heading: "Capping Hydro prices to off peak times during Covid-19 isolation",
            supporters: 30093,
            image: "\/\/assets.change.org\/photos\/2\/lc\/ng\/uiLcNgewnqSJXsS-800x450-noPad.jpg?1584317913"
        },
        {
            url: "https:\/\/www.change.org\/p\/justin-trudeau-support-for-entrepreneurs-consultants-gig-economy-workers",
            heading: "Covid-19 Support for Entrepreneurs, Consultants & Gig Economy & Part-time Workers",
            supporters: 13046,
            image: "\/\/assets.change.org\/photos\/2\/yh\/cb\/nRyHcbxxIkAwnKR-800x450-noPad.jpg?1584131065"
        },
        {
            url: "https:\/\/www.change.org\/p\/federal-government-income-tax-break-in-pandemic-times-canadians-will-be-suffering-with-less-work-or-no-work",
            heading: "Income Tax break in pandemic times,  Canadians will be suffering with less work or no work",
            supporters: 1294,
            image: "\/\/assets.change.org\/photos\/5\/kl\/md\/jwKlmDPeDOdYEHH-800x450-noPad.jpg?1584396074"
        },
        {
            url: "https:\/\/www.change.org\/p\/justin-trudeau-guaranteed-basic-income-for-canada-during-covid",
            heading: "Guaranteed Basic Income for Canada During COVID",
            supporters: 4383,
            image: "\/\/assets.change.org\/photos\/2\/aj\/el\/ScAJElJlOhxNdXz-800x450-noPad.jpg?1584296320"
        },
        {
            url: "https:\/\/www.change.org\/p\/unbc-president-geoff-payne-petition-for-proper-unbc-2020-convocation",
            heading: "Petition for Proper UNBC 2020 Convocation",
            supporters: 1451,
            image: "\/\/assets.change.org\/photos\/2\/bd\/oz\/BjbdozGJuHTsIrE-800x450-noPad.jpg?1586380934"
        }
    ],
    es: [
        {
            url: "https:\/\/www.change.org\/p\/congreso-de-los-diputados-no-m%C3%A1s-muertes-impunes-en-la-carretera-como-la-de-mi-marido-porunaleyjusta",
            heading: "No m\u00e1s muertes impunes en la carretera #porunaleyjusta",
            supporters: 327098,
            image: "\/\/assets.change.org\/photos\/1\/vw\/bj\/PQVWBJuGyCdgjMt-800x450-noPad.jpg?1526957771"
        },
        {
            url: "https:\/\/www.change.org\/p\/placa-conmemorativa-a-dani-infante-en-la-parada-de-autob%C3%BAs-del-hospital-duran-i-reynals",
            heading: "Placa conmemorativa a Dani Infante en la parada de autob\u00fas del Hospital Duran i Reynals",
            supporters: 30540,
            image: "\/\/assets.change.org\/photos\/8\/wj\/qj\/eaWJqJIcmJmxthT-800x450-noPad.jpg?1566906787"
        },
        {
            url: "https:\/\/www.change.org\/p\/petici%C3%B3n-de-regularizaci%C3%B3n-de-gorgui-lamine-que-salv%C3%B3-de-las-llamas-a-un-vecino-en-d%C3%A9nia-interiorgob-ayto-denia",
            heading: "Petici\u00f3n de regularizaci\u00f3n de Gorgui Lamine que salv\u00f3 de las llamas a un vecino en D\u00e9nia",
            supporters: 89965,
            image: "\/\/assets.change.org\/photos\/1\/yp\/vq\/oPYpvqDwSBBnGZl-800x450-noPad.jpg?1575976996"
        },
        {
            url: "https:\/\/www.change.org\/p\/ministerio-de-asuntos-exteriores-y-de-cooperaci%C3%B3n-repatriaci%C3%B3n-de-espa%C3%B1oles-en-laos-vientiane",
            heading: "Repatriaci\u00f3n de Espa\u00f1oles en Laos ( Vientiane)",
            supporters: 2213,
            image: "\/\/assets.change.org\/photos\/7\/pn\/qv\/WZpnqVWKMHALsmI-800x450-noPad.jpg?1585246212"
        }
    ],
    fr: [
        {
            url: "https:\/\/www.change.org\/p\/monsieur-el-sa%C3%AFr-r%C3%A9int%C3%A9gration-de-mona-infirmi%C3%A8re-%C3%A0-l-h%C3%B4pital-de-brest",
            heading: "R\u00e9int\u00e9gration de Mona, infirmi\u00e8re \u00e0 l'h\u00f4pital de Brest",
            supporters: 3247,
            image: "\/\/assets.change.org\/photos\/1\/hh\/hl\/oPhhHLvhHfglSVL-800x450-noPad.jpg?1585823927"
        },
        {
            url: "https:\/\/www.change.org\/p\/scandale-cancer-du-col-de-l-ut%C3%A9rus-hpv-maintenant",
            heading: "Scandale ! Cancer du col de l'ut\u00e9rus : HPV Maintenant !",
            supporters: 2973,
            image: "\/\/assets.change.org\/photos\/4\/cc\/fr\/YUCcfRbCvLlhCqK-800x450-noPad.jpg?1545468272"
        },
        {
            url: "https:\/\/www.change.org\/p\/olivierveran-comptabiliser-les-d%C3%A9c%C3%A8s-covid-19-en-ehpad-pour-la-dignit%C3%A9-des-personnes-%C3%A2g%C3%A9es",
            heading: "Comptabiliser les d\u00e9c\u00e8s COVID-19 en EHPAD pour la dignit\u00e9 des personnes \u00e2g\u00e9es",
            supporters: 56612,
            image: "\/\/assets.change.org\/photos\/6\/mr\/ni\/bDMrNiqrssvOUae-800x450-noPad.jpg?1585298324"
        },
        {
            url: "https:\/\/www.change.org\/p\/minist%C3%A8re-de-l-%C3%A9ducation-nationale-baccalaur%C3%A9at-sur-dossier-2020",
            heading: "Baccalaur\u00e9at 2020 : nous voulons \u00eatre \u00e9valu\u00e9s sur dossier !",
            supporters: 19749,
            image: "\/\/assets.change.org\/photos\/2\/ev\/qz\/BteVQZGpiKRHMuJ-800x450-noPad.jpg?1585039282"
        },
        {
            url: "https:\/\/www.change.org\/p\/coronavirus-pour-le-report-des-%C3%A9lections-municipales-municipales2020-codvid19-covid-19-confinement",
            heading: "Pour le report des \u00e9lections municipales \/ 2\u00e8me tour",
            supporters: 30770,
            image: "\/\/assets.change.org\/photos\/6\/nh\/us\/gINhUshzpBHfOrl-800x450-noPad.jpg?1584028727"
        },
        {
            url: "https:\/\/www.change.org\/p\/etat-non-%C3%A0-l-euthanasie-des-animaux-pendant-et-apr%C3%A8s-le-confinement?utm_source=grow_fr&utm_medium=instagram&utm_campaign=com",
            heading: "NON \u00e0 l'EUTHANASIE des ANIMAUX pendant et apr\u00e8s le CONFINEMENT!",
            supporters: 1997,
            image: "\/\/assets.change.org\/photos\/1\/wg\/ft\/pwWGfTPoTMbCqKP-800x450-noPad.jpg?1586280606"
        }
    ],
    ru: [
        {
            url: "https:\/\/www.change.org\/p\/\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-\u043a\u043e\u043c\u0438\u0442\u0435\u0442-\u0440\u0444-\u043d\u0435-\u0434\u0430\u0434\u0438\u043c-\u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c-\u043e\u0441\u0443\u0434\u0438\u0442\u044c-\u0434\u0430\u0440\u044c\u044e-\u0430\u0433\u0435\u043d\u0438\u0439",
            heading: "\u041d\u0435 \u0434\u0430\u0434\u0438\u043c \u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c\/\u043e\u0441\u0443\u0434\u0438\u0442\u044c \u0414\u0430\u0440\u044c\u044e \u0410\u0433\u0435\u043d\u0438\u0439",
            supporters: 226815,
            image: "\/\/assets.change.org\/photos\/7\/qf\/sm\/MdqFsMvVqTniooN-800x450-noPad.jpg?1544794814"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442-\u0440\u043e\u0441\u0441\u0438\u0438-\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c-\u0432\u0441\u0435-\u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0435-\u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f-\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435-\u0441-\u0434\u043d\u0435\u043c-\u043f\u043e\u0431\u0435\u0434\u044b-\u0432\u043a\u043b\u044e\u0447\u0430\u044f-\u043f\u0430\u0440\u0430\u0434-\u0432-\u043c\u043e\u0441\u043a\u0432\u0435",
            heading: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0414\u043d\u0435\u043c \u041f\u043e\u0431\u0435\u0434\u044b, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0430\u0440\u0430\u0434 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435.",
            supporters: 436,
            image: "\/\/assets.change.org\/photos\/4\/nq\/uu\/aunQUUCtliuUyvN-800x450-noPad.jpg?1586559184"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u0442\u0440\u0435\u0431\u0443\u0435\u043c-\u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c-\u0443\u0447\u0438\u0442\u0435\u043b\u044f\u043c-\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c-\u0438\u0437-\u0434\u043e\u043c\u0430",
            heading: "\u0422\u0440\u0435\u0431\u0443\u0435\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0443\u0447\u0438\u0442\u0435\u043b\u044f\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u0437 \u0434\u043e\u043c\u0430!",
            supporters: 40660,
            image: "\/\/assets.change.org\/photos\/0\/rl\/uw\/JtRlUwJhJgLWDOf-800x450-noPad.jpg?1585132025"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u0432\u0430\u0441\u0438\u043d\u0430-\u0435\u043b\u0435\u043d\u0430-\u0432\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u043d\u0430-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439-\u043f\u0435\u0440\u0435\u0445\u043e\u0434-\u043d\u0430-\u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e-\u0444\u043e\u0440\u043c\u0443-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f-\u0432-\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u043c-\u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0435",
            heading: "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u043c \u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0435",
            supporters: 476,
            image: "\/\/assets.change.org\/photos\/9\/xw\/vv\/hAXWVvtAXWzfugu-800x450-noPad.jpg?1584289105"
        }
    ],
    de: [
        {
            url: "https:\/\/www.change.org\/p\/oberb%C3%BCrgermeister-burkhard-jung-trotz-coronavirus-geb%C3%A4rende-brauchen-ihre-partner-innen-im-krei%C3%9Fsaal",
            heading: "Trotz Coronavirus - Geb\u00e4rende brauchen ihre Partner*innen im Krei\u00dfsaal!",
            supporters: 15372,
            image: "\/\/assets.change.org\/photos\/4\/ab\/cg\/kaABcGOXxQgWvSn-800x450-noPad.jpg?1586031054"
        },
        {
            url: "https:\/\/www.change.org\/p\/jens-spahn-verh%C3%A4ngen-sie-deutschlandweite-ausgangssperren-gegen-die-ausbreitung-des-corona-virus",
            heading: "Verh\u00e4ngen Sie deutschlandweite Ausgangssperren gegen die Ausbreitung des Corona Virus",
            supporters: 4765,
            image: "\/\/assets.change.org\/photos\/9\/lv\/mh\/FElvmhTjrdxthTA-800x450-noPad.jpg?1584529390"
        },
        {
            url: "https:\/\/www.change.org\/p\/bundesministerium-f%C3%BCr-gesundheit-aufstockung-der-intensivbetten-in-deutschland",
            heading: "Aufstockung der Intensivbetten in Deutschland",
            supporters: 3634,
            image: "\/\/assets.change.org\/photos\/1\/jz\/ws\/xQjZwSsOFllblty-800x450-noPad.jpg?1584011842"
        },
        {
            url: "https:\/\/www.change.org\/p\/bundesregierung-schlie%C3%9Fung-der-tierversuchsanstalten-hamburg-umgebung-deutschlandweit",
            heading: "Schlie\u00dfung der Tierversuchsanstalten Hamburg ( Umgebung ) Deutschlandweit",
            supporters: 130037,
            image: "\/\/assets.change.org\/photos\/7\/oc\/ng\/nCOCNGbnKOWmtmq-800x450-noPad.jpg?1584721255"
        }
    ],
    it: [
        {
            url: "https:\/\/www.change.org\/p\/regione-lombardia-approvare-immediatamente-ospedale-da-campo-alpini-a-bergamo-2",
            heading: "Approvare immediatamente ospedale da campo Alpini a Bergamo",
            supporters: 132660,
            image: "\/\/assets.change.org\/photos\/9\/lo\/ns\/ATlONSqBpBvikUB-800x450-noPad.jpg?1584572427"
        },
        {
            url: "https:\/\/www.change.org\/p\/coronavirus-parcheggi-e-areac-gratuiti-per-gli-infermieri-di-milano",
            heading: "Coronavirus: parcheggi e AreaC gratuiti per gli infermieri di Milano",
            supporters: 53174,
            image: "\/\/assets.change.org\/photos\/4\/oq\/dz\/JZOQdzOvXExtgNh-800x450-noPad.jpg?1583492040"
        },
        {
            url: "https:\/\/www.change.org\/p\/no-al-taglio-del-assistenza-domiciliare-infermieristica",
            heading: "No, al decreto U00525 del 31\u200b.\u200b12\u200b.\u200b2019 che taglia assistenza domiciliare infermieristica",
            supporters: 83647,
            image: "\/\/assets.change.org\/photos\/5\/hs\/bx\/UFHSbXoHITeLuEc-800x450-noPad.jpg?1575668259"
        }
    ]
};
}}, {"value": "<style>.victory-wrap {\n\tbackground: transparent;\n  position: relative;\n \toverflow: hidden; \n  padding-top: 14px;\n}\n/*\n.victory-wrap::after {\n    content: \"\";\n    height: 35px;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 5;\n    background: linear-gradient(0deg, #fffcf7 0%, rgba(255, 255, 255, 0) 100%);\n}\n*/\n#victory-append {\n\theight: 320px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column-reverse;\n}\n.victory-card {\n    position: relative;\n    background: #ffffff;\n    box-sizing: border-box;\n    border-radius: 5px;\n    white-space: normal !important;\n    text-align: left;\n    transition: margin-bottom 2000ms cubic-bezier(0.4, 0.45, 0.35, 1) 0s;\n    overflow: hidden;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n    height: 100px;\n    min-height: 100px;\n    display: flex;\n    width: 450px;\n    max-width: 100%;\n    margin: auto;\n    margin-bottom: 10px;\n}\n.victory-img-wrap {\n    position: relative;\n    min-width: 25%;\n    height: 100%;\n    width: 25%;\n}\n\n.victory-img-wrap .badge {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n.victory-img-wrap img {\n\t\theight: 100%;\n    object-fit: cover;\n    width: 100%;\n    object-position: top;\n}\n.victory-content {\n\tpadding: 15px;\n}\n.victory-content a {\n    display: block;\n    max-height: 52px;\n    overflow: hidden;\n}\n.victory-content h3 {\n\t\tfont-size: 16px;\n    line-height: 24px;\n}\n.card-content .psf-combo-embedded-card > .photo-component {\n  display: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "80c668cdac654c70813c691f81a92ced"}]}], "name": null}, {"id": "17959390115", "actions": [{"viewId": "17936461527", "changes": [{"dependencies": [], "type": "custom_code", "id": "97B9A247-3639-4924-8341-336518DC25EE", "value": function($){var utils = window.optimizely.get("utils");

var appStateLocale = changeTargetingData.appState.locale;
var lang = '';
var locale = '';
if (appStateLocale) {
    var localeData = appStateLocale.split('-');
    lang = localeData[0];
    locale = localeData[1];
    var appCountryCode = changeTargetingData.appState.countryCode;
    if (appCountryCode && appCountryCode !== locale) {
        locale = appCountryCode;
    }
} else {
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
    lang = browserLocaleData[0];
    locale = browserLocaleData[1];
}
locale = locale.toLowerCase();
lang = lang.toLowerCase();

var translations = {
	en: {
    victory: 'VICTORIES',
    heading: 'VICTORIES HAPPENING EVERY HOUR',
    supporters: 'supporters'
  },
  de: {
    victory: 'ERFOLGE',
    heading: 'VIELE ERFOLGE STÜNDLICH',
    supporters: 'Unterstützer'
  },
  es: {
    victory: 'VICTORIAS',
    heading: 'VICTORIAS CADA HORA',
    supporters: 'firmantes'
  },
  fr: {
    victory: 'DES VICTOIRES',
    heading: 'DES VICTOIRES CHAQUE HEURE',
    supporters: 'signataires'
  },
  it: {
    victory: 'VITTORIE',
    heading: 'VITTORIE OGNI ORA',
    supporters: 'firmatari'
  },
  ru: {
    victory: 'ПОБЕДЫ',
    heading: 'ПОБЕДЫ КАЖДЫЙ ЧАС',
    supporters: 'побед'
  }
};

utils.waitForElement('#content .col-xs-12.xs-phn.xs-full-height .page-wrap [data-view="psf/combo/components/promoter_count"]').then(function (promoter) {
  
  promoter.parentNode.className = "row";

  victoryHTML = '<div class="victory-wrap xs-pbs phn xs-mhn mhl"><h5 class="mtxl mbl txt-c">' + translations[lang].heading + '</h5><div id="victory-append" class="type-no-wrap mt"></div></div>';
  promoter.parentNode.innerHTML = victoryHTML;
  var heading = document.querySelector('.victory-wrap h5');
  var re = new RegExp(translations[lang].victory,"g");
  heading.innerHTML = heading.innerText.replace(re, "<span class='type-branded'>" + translations[lang].victory + "</span>");

  var victoryAppend = document.getElementById('victory-append');
  for (var k = 0; k < victories[locale].length; k++) {
    var victoryCard = document.createElement('div');
    if (k === 0) {
      victoryCard.id = 'first-victory';
      victoryCard.style['margin-bottom'] = '0px';
    }
    victoryCard.classList = 'victory-card';
    victoryCard.innerHTML = '' +
      '<div class="victory-img-wrap">'+
      '    <img src="' + victories[locale][k].image + '">'+
      '</div>'+
      '<div class="victory-content">'+
      '    <a href="' + victories[locale][k].url + '" class="link-stealth mbxxs"><h3 class="victory-title mvn">' + victories[locale][k].heading + '</h3></a>'+
      '    <div class="type-s type-weak">'+
      '        <span class="symbol symbol-supporters type-branded"></span>' + victories[locale][k].supporters.toLocaleString() + ' ' + translations[lang].supporters +
      '    </div>'+
      '</div>';
    victoryAppend.appendChild(victoryCard);
  }
  
  var firstVictoryCard = document.getElementById('first-victory');
    var slideNum = 0;
    function nextSlide() {
        if (slideNum < victories[locale].length - 3) {
            // wait to read
            setTimeout(function () {
                firstVictoryCard.style['margin-bottom'] = (parseInt(firstVictoryCard.style['margin-bottom']) - 110) + 'px';
                setTimeout(function () {
                    // start next one
                    slideNum++;
                    nextSlide();
                }, 2000);
            }, 3000);
        }
    }
    nextSlide();
  
	/*
  var firstVictoryCard = true;
	var victoryCards = document.querySelectorAll('.victory-card');
  
  function nextVictories() {
		setTimeout(function(){
      if (firstVictoryCard) {
        firstVictoryCard = false;
      } else {
        appendCards();
      }
      victoryCards = document.querySelectorAll('.victory-card');
			fadeOutCards();
      nextVictories();
    }, 4500);
  }
  if (victoryCards.length >= 6) {
  	nextVictories();
  }
  
  function fadeOutCards(i) {
  	victoryCards[0].style.opacity = 0; 
    setTimeout(function(){ victoryCards[1].style.opacity = 0; }, 500);
    setTimeout(function(){ victoryCards[2].style.opacity = 0; }, 1000);
    
    setTimeout(function(){ victoryCards[3].style.opacity = 1; }, 500);
    setTimeout(function(){ victoryCards[4].style.opacity = 1; }, 1000);
    setTimeout(function(){ victoryCards[5].style.opacity = 1; }, 1500);
  }
  
  function appendCards() {
  		victoryAppend.appendChild(victoryCards[0]);
    	victoryAppend.appendChild(victoryCards[1]);
    	victoryAppend.appendChild(victoryCards[2]); 
  }
	*/

});


var victories = {
    us: [
        {
            url: "https:\/\/www.change.org\/p\/andrew-m-cuomo-safeguard-the-right-of-all-laboring-people-during-covid-19-crisis",
            heading: "Safeguard the Right of All Laboring People to Have Support During COVID-19 Crisis",
            supporters: 613651,
            image: "\/\/assets.change.org\/photos\/0\/gk\/vr\/ewgkVreNRMtEstT-800x450-noPad.jpg?1584711757"
        },
        {
            url: "https:\/\/www.change.org\/p\/jeff-bezos-bezos-to-give-all-his-employees-at-whole-foods-more-paid-time-off-during-coronavirus",
            heading: "Bezos to give all his employees at Whole Foods & more paid time off during Coronavirus",
            supporters: 260493,
            image: "\/\/assets.change.org\/photos\/8\/vi\/qe\/MyvIQEzEVebZlkT-800x450-noPad.jpg?1584138171"
        },
        {
            url: "https:\/\/www.change.org\/p\/roskam-baking-company-hazard-pay-now",
            heading: "Hazard pay now!",
            supporters: 968,
            image: "\/\/assets.change.org\/photos\/5\/sw\/ih\/pISwIhDujwVTjIj-800x450-noPad.jpg?1586359585"
        },
        {
            url: "https:\/\/www.change.org\/p\/smith-college-don-t-take-back-our-food-stipends",
            heading: "Don't Take Back Our Food Stipends",
            supporters: 720,
            image: "\/\/assets.change.org\/photos\/5\/re\/kq\/MXRekQmZqRloDKN-800x450-noPad.jpg?1586805678"
        },
        {
            url: "https:\/\/www.change.org\/p\/carol-christ-uc-berkeley-spring-grades-to-be-pass-no-pass",
            heading: "Change UC Berkeley Spring Grades to be Pass\/No-Pass AND Counted as Major Requirements",
            supporters: 7619,
            image: "\/\/assets.change.org\/photos\/6\/ad\/mk\/OuAdmKXrRTFbVDP-800x450-noPad.jpg?1584404199"
        },
        {
            url: "https:\/\/www.change.org\/p\/castle-leslie-refund-of-all-deposits-to-couples-who-have-booked-the-premises-for-their-special-occasions",
            heading: "Refund of all deposits to couples who have booked the premises for their special occasions",
            supporters: 693,
            image: "\/\/assets.change.org\/photos\/4\/zw\/ql\/AcZwqlRFqwSkOuc-800x450-noPad.jpg?1586783833"
        },
        {
            url: "https:\/\/www.change.org\/p\/milpitas-city-council-stop-la-quinta-on-jacklin-milpitas",
            heading: "Stop La Quinta on Jacklin Milpitas",
            supporters: 1815,
            image: "\/\/assets.change.org\/photos\/2\/xe\/zk\/nzxEzKfNfZROlha-800x450-noPad.jpg?1574673902"
        },
        {
            url: "https:\/\/www.change.org\/p\/pearson-vue-reinstate-nclex-testing",
            heading: "Reinstate NCLEX Testing",
            supporters: 15587,
            image: "\/\/assets.change.org\/photos\/7\/wt\/qf\/HAwtqfqiRJASTbP-800x450-noPad.jpg?1584567499"
        },
        {
            url: "https:\/\/www.change.org\/p\/lucky-supetmarkets-lucky-employees-demand-hzard-pay-for-covid-19",
            heading: "Lucky Employees Need Hazard Pay for COVID-19",
            supporters: 154,
            image: "\/\/assets.change.org\/photos\/9\/me\/mn\/CHmemNfxCZPxOLU-800x450-noPad.jpg?1584831560"
        },
        {
            url: "https:\/\/www.change.org\/p\/governor-lujan-grisham-temporary-moratorium-on-evictions-due-to-covid-19-financial-hardships",
            heading: "Temporary Moratorium on Evictions Due to COVID-19 Financial Hardships",
            supporters: 1640,
            image: "\/\/assets.change.org\/photos\/0\/tu\/ou\/mQTUoUTNEwxczns-800x450-noPad.jpg?1584459842"
        },
        {
            url: "https:\/\/www.change.org\/p\/david-garza-essential-workers-need-essential-pay-frontline-shelter-workers",
            heading: "\"Essential Workers\" need \"Essential Pay\" Temporary Hazard Pay Henry Street TSH workers",
            supporters: 202,
            image: "\/\/assets.change.org\/photos\/8\/lz\/dg\/PXLzDgyjZUHcocC-800x450-noPad.jpg?1584899067"
        }
    ],
    gb: [
        {
            url: "https:\/\/www.change.org\/p\/rishi-sunak-please-thank-your-nhs-workforce-by-not-charging-them-to-use-the-staff-car-park",
            heading: "Please thank your NHS workforce. \nStop charging them to use their staff car park.",
            supporters: 415665,
            image: "\/\/assets.change.org\/photos\/9\/wa\/wy\/zWwAWyTEWLdvgXA-800x450-noPad.jpg?1584814764"
        },
        {
            url: "https:\/\/www.change.org\/p\/student-living-plus-oxford-house-accommodation-student-living-plus-stop-students-paying-rent-during-covid-19",
            heading: "Oxford House Accommodation: Student Living Plus -Stop Students Paying Rent During COVID-19",
            supporters: 222,
            image: "\/\/assets.change.org\/photos\/1\/im\/wq\/sLIMwQaivFALIXw-800x450-noPad.jpg?1586633456"
        },
        {
            url: "https:\/\/www.change.org\/p\/health-minister-access-to-covid-19-swabbing-for-symptomatic-nhs-and-frontline-emergency-services",
            heading: "Access to Covid-19 swabbing for symptomatic NHS and frontline emergency services",
            supporters: 105447,
            image: "\/\/assets.change.org\/photos\/5\/os\/cv\/FUoScvMTwvXkKtb-800x450-noPad.jpg?1584266417"
        },
        {
            url: "https:\/\/www.change.org\/p\/boris-johnson-close-all-holiday-caravan-parks-in-wales-to-stop-covid-19",
            heading: "Close all holiday & caravan parks in Wales to stop covid-19 spreading",
            supporters: 8515,
            image: "\/\/assets.change.org\/photos\/0\/te\/kl\/XHtEKLSshGshciB-800x450-noPad.jpg?1584831091"
        },
        {
            url: "https:\/\/www.change.org\/p\/university-of-manchester-reimburse-last-installment-of-university-of-manchester-accommodation-fees",
            heading: "Reimburse last installment of University of Manchester accommodation fees",
            supporters: 1181,
            image: "\/\/assets.change.org\/photos\/3\/yu\/vx\/iDyUVXLGkrwCBsj-800x450-noPad.jpg?1584749524"
        },
        {
            url: "https:\/\/www.change.org\/p\/uk-parliament-request-for-furlough-leave-to-include-salespeople-s-commissions-within-80-payment-offer",
            heading: "Request for Furlough Leave to include Salespeople\u2019s Commissions within 80% payment offer.",
            supporters: 28708,
            image: "\/\/assets.change.org\/photos\/0\/cl\/lj\/jrCLljPGgnatXBn-800x450-noPad.jpg?1586512529"
        },
        {
            url: "https:\/\/www.change.org\/p\/grant-shapps-fair-treatment-for-easyjet-staff",
            heading: "Fair treatment for easyJet staff",
            supporters: 40645,
            image: "\/\/assets.change.org\/photos\/9\/ic\/yx\/lQiCYxtOyTaTkKJ-800x450-noPad.jpg?1584574231"
        },
        {
            url: "https:\/\/www.change.org\/p\/heathrow-airport-management-face-mask-protection-for-heathrow-airport-security-officers-against-coronavirus",
            heading: "Face Mask Protection For Heathrow Airport Security Officers Against Coronavirus",
            supporters: 3151,
            image: "\/\/assets.change.org\/photos\/0\/py\/pb\/ndpYpBlCuJGbgkW-800x450-noPad.jpg?1580322787"
        }
    ],
    au: [
        {
            url: "https:\/\/www.change.org\/p\/scott-morrison-no-restrictions-on-telehealth-consultations-now",
            heading: "No restrictions on Telehealth consultations NOW",
            supporters: 25574,
            image: "\/\/assets.change.org\/photos\/1\/np\/in\/tUnpinvDbOjpveq-800x450-noPad.jpg?1583548054"
        },
        {
            url: "https:\/\/www.change.org\/p\/daniel-andrews-close-crown-casino-during-the-coronavirus-pandemic",
            heading: "#CloseCrownCasino during the Coronavirus Pandemic",
            supporters: 29107,
            image: "\/\/assets.change.org\/photos\/4\/oi\/pe\/JnoipeAhZCLWWLw-800x450-noPad.jpg?1584402846"
        },
        {
            url: "https:\/\/www.change.org\/p\/help-bring-stranded-australian-citizens-in-lebanon-home",
            heading: "Help bring stranded Australian citizens in Lebanon home!",
            supporters: 239,
            image: "\/\/assets.change.org\/photos\/3\/md\/nl\/ujMDnlDeuIGsKXG-800x450-noPad.jpg?1586322132"
        },
        {
            url: "https:\/\/www.change.org\/p\/minister-dan-tehan-allow-childcare-providers-to-offer-families-gap-free-fees",
            heading: "Allow childcare providers to offer families gap free fees!",
            supporters: 25256,
            image: "\/\/assets.change.org\/photos\/1\/td\/mm\/BitDmmdFPPnVkzY-800x450-noPad.jpg?1584964528"
        },
        {
            url: "https:\/\/www.change.org\/p\/christian-porter-ban-abusive-dog-trainer-jeff-gellman-australia",
            heading: "Ban Abusive Dog Trainer - Jeff Gellman - Australia",
            supporters: 49509,
            image: "\/\/assets.change.org\/photos\/6\/aj\/rw\/eUAjrWTRuovFAID-800x450-noPad.jpg?1580453397"
        },
        {
            url: "https:\/\/www.change.org\/p\/stop-animal-neglect-by-qantas-airlines",
            heading: "Stop animal neglect by Qantas airlines",
            supporters: 82603,
            image: "\/\/assets.change.org\/photos\/6\/hs\/pd\/HJHSPdXRTRrfBUt-800x450-noPad.jpg?1578797206"
        },
        {
            url: "https:\/\/www.change.org\/p\/say-no-to-the-proposed-unjust-and-exorbitant-rate-rise-by-lismore-city-council-please-make-sure-you-share-this",
            heading: "Say NO to the proposed unjust and exorbitant rate rise by Lismore City Council. SHARE!",
            supporters: 1755,
            image: "\/\/assets.change.org\/photos\/0\/nt\/rv\/TBnTrvCNHIpVCWG-800x450-noPad.jpg?1580471425"
        },
        {
            url: "https:\/\/www.change.org\/p\/ban-the-melbourne-grand-prix-don-t-bring-coronavirus-to-melbourne",
            heading: "Ban the Melbourne Grand Prix - don't bring Coronavirus to Melbourne!",
            supporters: 13974,
            image: "\/\/assets.change.org\/photos\/7\/gm\/px\/TqGmpxnhKbPyVpP-800x450-noPad.jpg?1583975853"
        }
    ],
    ca: [
        {
            url: "https:\/\/www.change.org\/p\/private-daycare-schools-to-credit-refund-parents-for-service-not-rendered-due-to-covid-19",
            heading: "Private daycare\/schools to credit\/refund parents for service not rendered due to covid-19",
            supporters: 8156,
            image: "\/\/assets.change.org\/photos\/6\/at\/xx\/jxAtXXpOECglDOJ-800x450-noPad.jpg?1584494697"
        },
        {
            url: "https:\/\/www.change.org\/p\/minister-of-health-change-coronavirus-testing-to-include-young-people-in-ontario-and-canada",
            heading: "Change Coronavirus Testing To Include Young People In Ontario and Canada!",
            supporters: 290,
            image: "\/\/assets.change.org\/photos\/9\/jf\/el\/mZJFElqXCjSoFdD-800x450-noPad.jpg?1585552440"
        },
        {
            url: "https:\/\/www.change.org\/p\/advanced-fresh-concepts-franchise-corporation-19205-south-laurel-park-rd-rancho-dominguez-ca-90220-increase-the-temporary-commission-increase",
            heading: "Increase the temporary commission increase",
            supporters: 778,
            image: "\/\/assets.change.org\/photos\/5\/cq\/ci\/MlCqCijwKDiCkeL-800x450-noPad.jpg?1584754149"
        },
        {
            url: "https:\/\/www.change.org\/p\/doug-ford-capping-hydro-prices-to-off-peak-times-during-covid-19-isolation",
            heading: "Capping Hydro prices to off peak times during Covid-19 isolation",
            supporters: 30093,
            image: "\/\/assets.change.org\/photos\/2\/lc\/ng\/uiLcNgewnqSJXsS-800x450-noPad.jpg?1584317913"
        },
        {
            url: "https:\/\/www.change.org\/p\/justin-trudeau-support-for-entrepreneurs-consultants-gig-economy-workers",
            heading: "Covid-19 Support for Entrepreneurs, Consultants & Gig Economy & Part-time Workers",
            supporters: 13046,
            image: "\/\/assets.change.org\/photos\/2\/yh\/cb\/nRyHcbxxIkAwnKR-800x450-noPad.jpg?1584131065"
        },
        {
            url: "https:\/\/www.change.org\/p\/federal-government-income-tax-break-in-pandemic-times-canadians-will-be-suffering-with-less-work-or-no-work",
            heading: "Income Tax break in pandemic times,  Canadians will be suffering with less work or no work",
            supporters: 1294,
            image: "\/\/assets.change.org\/photos\/5\/kl\/md\/jwKlmDPeDOdYEHH-800x450-noPad.jpg?1584396074"
        },
        {
            url: "https:\/\/www.change.org\/p\/justin-trudeau-guaranteed-basic-income-for-canada-during-covid",
            heading: "Guaranteed Basic Income for Canada During COVID",
            supporters: 4383,
            image: "\/\/assets.change.org\/photos\/2\/aj\/el\/ScAJElJlOhxNdXz-800x450-noPad.jpg?1584296320"
        },
        {
            url: "https:\/\/www.change.org\/p\/unbc-president-geoff-payne-petition-for-proper-unbc-2020-convocation",
            heading: "Petition for Proper UNBC 2020 Convocation",
            supporters: 1451,
            image: "\/\/assets.change.org\/photos\/2\/bd\/oz\/BjbdozGJuHTsIrE-800x450-noPad.jpg?1586380934"
        }
    ],
    es: [
        {
            url: "https:\/\/www.change.org\/p\/congreso-de-los-diputados-no-m%C3%A1s-muertes-impunes-en-la-carretera-como-la-de-mi-marido-porunaleyjusta",
            heading: "No m\u00e1s muertes impunes en la carretera #porunaleyjusta",
            supporters: 327098,
            image: "\/\/assets.change.org\/photos\/1\/vw\/bj\/PQVWBJuGyCdgjMt-800x450-noPad.jpg?1526957771"
        },
        {
            url: "https:\/\/www.change.org\/p\/placa-conmemorativa-a-dani-infante-en-la-parada-de-autob%C3%BAs-del-hospital-duran-i-reynals",
            heading: "Placa conmemorativa a Dani Infante en la parada de autob\u00fas del Hospital Duran i Reynals",
            supporters: 30540,
            image: "\/\/assets.change.org\/photos\/8\/wj\/qj\/eaWJqJIcmJmxthT-800x450-noPad.jpg?1566906787"
        },
        {
            url: "https:\/\/www.change.org\/p\/petici%C3%B3n-de-regularizaci%C3%B3n-de-gorgui-lamine-que-salv%C3%B3-de-las-llamas-a-un-vecino-en-d%C3%A9nia-interiorgob-ayto-denia",
            heading: "Petici\u00f3n de regularizaci\u00f3n de Gorgui Lamine que salv\u00f3 de las llamas a un vecino en D\u00e9nia",
            supporters: 89965,
            image: "\/\/assets.change.org\/photos\/1\/yp\/vq\/oPYpvqDwSBBnGZl-800x450-noPad.jpg?1575976996"
        },
        {
            url: "https:\/\/www.change.org\/p\/ministerio-de-asuntos-exteriores-y-de-cooperaci%C3%B3n-repatriaci%C3%B3n-de-espa%C3%B1oles-en-laos-vientiane",
            heading: "Repatriaci\u00f3n de Espa\u00f1oles en Laos ( Vientiane)",
            supporters: 2213,
            image: "\/\/assets.change.org\/photos\/7\/pn\/qv\/WZpnqVWKMHALsmI-800x450-noPad.jpg?1585246212"
        }
    ],
    fr: [
        {
            url: "https:\/\/www.change.org\/p\/monsieur-el-sa%C3%AFr-r%C3%A9int%C3%A9gration-de-mona-infirmi%C3%A8re-%C3%A0-l-h%C3%B4pital-de-brest",
            heading: "R\u00e9int\u00e9gration de Mona, infirmi\u00e8re \u00e0 l'h\u00f4pital de Brest",
            supporters: 3247,
            image: "\/\/assets.change.org\/photos\/1\/hh\/hl\/oPhhHLvhHfglSVL-800x450-noPad.jpg?1585823927"
        },
        {
            url: "https:\/\/www.change.org\/p\/scandale-cancer-du-col-de-l-ut%C3%A9rus-hpv-maintenant",
            heading: "Scandale ! Cancer du col de l'ut\u00e9rus : HPV Maintenant !",
            supporters: 2973,
            image: "\/\/assets.change.org\/photos\/4\/cc\/fr\/YUCcfRbCvLlhCqK-800x450-noPad.jpg?1545468272"
        },
        {
            url: "https:\/\/www.change.org\/p\/olivierveran-comptabiliser-les-d%C3%A9c%C3%A8s-covid-19-en-ehpad-pour-la-dignit%C3%A9-des-personnes-%C3%A2g%C3%A9es",
            heading: "Comptabiliser les d\u00e9c\u00e8s COVID-19 en EHPAD pour la dignit\u00e9 des personnes \u00e2g\u00e9es",
            supporters: 56612,
            image: "\/\/assets.change.org\/photos\/6\/mr\/ni\/bDMrNiqrssvOUae-800x450-noPad.jpg?1585298324"
        },
        {
            url: "https:\/\/www.change.org\/p\/minist%C3%A8re-de-l-%C3%A9ducation-nationale-baccalaur%C3%A9at-sur-dossier-2020",
            heading: "Baccalaur\u00e9at 2020 : nous voulons \u00eatre \u00e9valu\u00e9s sur dossier !",
            supporters: 19749,
            image: "\/\/assets.change.org\/photos\/2\/ev\/qz\/BteVQZGpiKRHMuJ-800x450-noPad.jpg?1585039282"
        },
        {
            url: "https:\/\/www.change.org\/p\/coronavirus-pour-le-report-des-%C3%A9lections-municipales-municipales2020-codvid19-covid-19-confinement",
            heading: "Pour le report des \u00e9lections municipales \/ 2\u00e8me tour",
            supporters: 30770,
            image: "\/\/assets.change.org\/photos\/6\/nh\/us\/gINhUshzpBHfOrl-800x450-noPad.jpg?1584028727"
        },
        {
            url: "https:\/\/www.change.org\/p\/etat-non-%C3%A0-l-euthanasie-des-animaux-pendant-et-apr%C3%A8s-le-confinement?utm_source=grow_fr&utm_medium=instagram&utm_campaign=com",
            heading: "NON \u00e0 l'EUTHANASIE des ANIMAUX pendant et apr\u00e8s le CONFINEMENT!",
            supporters: 1997,
            image: "\/\/assets.change.org\/photos\/1\/wg\/ft\/pwWGfTPoTMbCqKP-800x450-noPad.jpg?1586280606"
        }
    ],
    ru: [
        {
            url: "https:\/\/www.change.org\/p\/\u0441\u043b\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439-\u043a\u043e\u043c\u0438\u0442\u0435\u0442-\u0440\u0444-\u043d\u0435-\u0434\u0430\u0434\u0438\u043c-\u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c-\u043e\u0441\u0443\u0434\u0438\u0442\u044c-\u0434\u0430\u0440\u044c\u044e-\u0430\u0433\u0435\u043d\u0438\u0439",
            heading: "\u041d\u0435 \u0434\u0430\u0434\u0438\u043c \u043f\u043e\u0441\u0430\u0434\u0438\u0442\u044c\/\u043e\u0441\u0443\u0434\u0438\u0442\u044c \u0414\u0430\u0440\u044c\u044e \u0410\u0433\u0435\u043d\u0438\u0439",
            supporters: 226815,
            image: "\/\/assets.change.org\/photos\/7\/qf\/sm\/MdqFsMvVqTniooN-800x450-noPad.jpg?1544794814"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u043f\u0440\u0435\u0437\u0438\u0434\u0435\u043d\u0442-\u0440\u043e\u0441\u0441\u0438\u0438-\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c-\u0432\u0441\u0435-\u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0435-\u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f-\u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435-\u0441-\u0434\u043d\u0435\u043c-\u043f\u043e\u0431\u0435\u0434\u044b-\u0432\u043a\u043b\u044e\u0447\u0430\u044f-\u043f\u0430\u0440\u0430\u0434-\u0432-\u043c\u043e\u0441\u043a\u0432\u0435",
            heading: "\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0441\u0435 \u043c\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0414\u043d\u0435\u043c \u041f\u043e\u0431\u0435\u0434\u044b, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043f\u0430\u0440\u0430\u0434 \u0432 \u041c\u043e\u0441\u043a\u0432\u0435.",
            supporters: 436,
            image: "\/\/assets.change.org\/photos\/4\/nq\/uu\/aunQUUCtliuUyvN-800x450-noPad.jpg?1586559184"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u0442\u0440\u0435\u0431\u0443\u0435\u043c-\u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c-\u0443\u0447\u0438\u0442\u0435\u043b\u044f\u043c-\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c-\u0438\u0437-\u0434\u043e\u043c\u0430",
            heading: "\u0422\u0440\u0435\u0431\u0443\u0435\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0443\u0447\u0438\u0442\u0435\u043b\u044f\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0438\u0437 \u0434\u043e\u043c\u0430!",
            supporters: 40660,
            image: "\/\/assets.change.org\/photos\/0\/rl\/uw\/JtRlUwJhJgLWDOf-800x450-noPad.jpg?1585132025"
        },
        {
            url: "https:\/\/www.change.org\/p\/\u0432\u0430\u0441\u0438\u043d\u0430-\u0435\u043b\u0435\u043d\u0430-\u0432\u044f\u0447\u0435\u0441\u043b\u0430\u0432\u043e\u0432\u043d\u0430-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439-\u043f\u0435\u0440\u0435\u0445\u043e\u0434-\u043d\u0430-\u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e-\u0444\u043e\u0440\u043c\u0443-\u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f-\u0432-\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u043c-\u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0435",
            heading: "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0444\u043e\u0440\u043c\u0443 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0432 \u041f\u0435\u0442\u0440\u043e\u0432\u0441\u043a\u043e\u043c \u043a\u043e\u043b\u043b\u0435\u0434\u0436\u0435",
            supporters: 476,
            image: "\/\/assets.change.org\/photos\/9\/xw\/vv\/hAXWVvtAXWzfugu-800x450-noPad.jpg?1584289105"
        }
    ],
    de: [
        {
            url: "https:\/\/www.change.org\/p\/oberb%C3%BCrgermeister-burkhard-jung-trotz-coronavirus-geb%C3%A4rende-brauchen-ihre-partner-innen-im-krei%C3%9Fsaal",
            heading: "Trotz Coronavirus - Geb\u00e4rende brauchen ihre Partner*innen im Krei\u00dfsaal!",
            supporters: 15372,
            image: "\/\/assets.change.org\/photos\/4\/ab\/cg\/kaABcGOXxQgWvSn-800x450-noPad.jpg?1586031054"
        },
        {
            url: "https:\/\/www.change.org\/p\/jens-spahn-verh%C3%A4ngen-sie-deutschlandweite-ausgangssperren-gegen-die-ausbreitung-des-corona-virus",
            heading: "Verh\u00e4ngen Sie deutschlandweite Ausgangssperren gegen die Ausbreitung des Corona Virus",
            supporters: 4765,
            image: "\/\/assets.change.org\/photos\/9\/lv\/mh\/FElvmhTjrdxthTA-800x450-noPad.jpg?1584529390"
        },
        {
            url: "https:\/\/www.change.org\/p\/bundesministerium-f%C3%BCr-gesundheit-aufstockung-der-intensivbetten-in-deutschland",
            heading: "Aufstockung der Intensivbetten in Deutschland",
            supporters: 3634,
            image: "\/\/assets.change.org\/photos\/1\/jz\/ws\/xQjZwSsOFllblty-800x450-noPad.jpg?1584011842"
        },
        {
            url: "https:\/\/www.change.org\/p\/bundesregierung-schlie%C3%9Fung-der-tierversuchsanstalten-hamburg-umgebung-deutschlandweit",
            heading: "Schlie\u00dfung der Tierversuchsanstalten Hamburg ( Umgebung ) Deutschlandweit",
            supporters: 130037,
            image: "\/\/assets.change.org\/photos\/7\/oc\/ng\/nCOCNGbnKOWmtmq-800x450-noPad.jpg?1584721255"
        }
    ],
    it: [
        {
            url: "https:\/\/www.change.org\/p\/regione-lombardia-approvare-immediatamente-ospedale-da-campo-alpini-a-bergamo-2",
            heading: "Approvare immediatamente ospedale da campo Alpini a Bergamo",
            supporters: 132660,
            image: "\/\/assets.change.org\/photos\/9\/lo\/ns\/ATlONSqBpBvikUB-800x450-noPad.jpg?1584572427"
        },
        {
            url: "https:\/\/www.change.org\/p\/coronavirus-parcheggi-e-areac-gratuiti-per-gli-infermieri-di-milano",
            heading: "Coronavirus: parcheggi e AreaC gratuiti per gli infermieri di Milano",
            supporters: 53174,
            image: "\/\/assets.change.org\/photos\/4\/oq\/dz\/JZOQdzOvXExtgNh-800x450-noPad.jpg?1583492040"
        },
        {
            url: "https:\/\/www.change.org\/p\/no-al-taglio-del-assistenza-domiciliare-infermieristica",
            heading: "No, al decreto U00525 del 31\u200b.\u200b12\u200b.\u200b2019 che taglia assistenza domiciliare infermieristica",
            supporters: 83647,
            image: "\/\/assets.change.org\/photos\/5\/hs\/bx\/UFHSbXoHITeLuEc-800x450-noPad.jpg?1575668259"
        }
    ]
};
}}, {"value": "<style>.victory-wrap {\n\tbackground: transparent;\n  position: relative;\n \toverflow: hidden; \n  padding-top: 14px;\n}\n\n.victory-wrap::after {\n    content: \"\";\n    height: 35px;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 5;\n    background: linear-gradient(0deg, #fffcf7 0%, rgba(255, 255, 255, 0) 100%);\n}\n\n#victory-append {\n    height: 320px;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column-reverse;\n}\n.victory-card {\n    position: relative;\n    background: #ffffff;\n    box-sizing: border-box;\n    border-radius: 5px;\n    white-space: normal !important;\n    text-align: left;\n    transition: margin-bottom 2000ms cubic-bezier(0.4, 0.45, 0.35, 1) 0s;\n    overflow: hidden;\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.103657);\n    height: 100px;\n    min-height: 100px;\n    display: flex;\n    width: 450px;\n    max-width: 100%;\n    margin: auto;\n    margin-bottom: 10px;\n  opacity: 1;\n}\n/*\n.victory-card:nth-child(n + 4) {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    top: 76px;\n  opacity: 0;\n}\n.victory-card:nth-child(3n + 5) {\n    top: 186px;\n}\n.victory-card:nth-child(3n + 6) {\n    top: 296px;\n}\n@media screen and (min-width: 992px) {\n  .victory-card:nth-child(n + 4) {\n      top: 82px;\n  }\n  .victory-card:nth-child(3n + 5) {\n      top: 192px;\n  }\n  .victory-card:nth-child(3n + 6) {\n      top: 302px;\n  }\n}\n*/\n.victory-img-wrap {\n    position: relative;\n    min-width: 25%;\n    height: 100%;\n    width: 25%;\n}\n\n.victory-img-wrap .badge {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n}\n.victory-img-wrap img {\n\t\theight: 100%;\n    object-fit: cover;\n    width: 100%;\n    object-position: top;\n}\n.victory-content {\n\tpadding: 15px;\n}\n.victory-content a {\n    display: block;\n    max-height: 52px;\n    overflow: hidden;\n}\n.victory-content h3 {\n\t\tfont-size: 16px;\n    line-height: 24px;\n}\n.card-content .psf-combo-embedded-card > .photo-component {\n  display: none !important;\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "0CDFEEA3-4911-4426-B90F-EB8BFED7CA6E"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17920471529", "integrationSettings": null}], "id": "17951121568", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17913803766", "decisionMetadata": null, "policy": "single_experiment", "changes": null}, {"holdback": 6000, "activation": {}, "integrationSettings": {"11403094673": {}}, "integrationStringVersion": 2, "viewIds": ["17910860996"], "experiments": [{"weightDistributions": [{"entityId": "17920640506", "endOfRange": 2500}, {"entityId": "17929802297", "endOfRange": 5000}, {"entityId": "17947252240", "endOfRange": 7500}, {"entityId": "17942170028", "endOfRange": 10000}], "audienceName": null, "name": null, "bucketingStrategy": null, "variations": [{"id": "17920640506", "actions": [{"viewId": "17910860996", "changes": [{"dependencies": [], "type": "custom_code", "id": "e1520a8e3506446992fa1c57996cdf64", "value": function($){var utils = window.optimizely.get("utils");

utils.waitForElement('.page-wrap .psf-combo-shaded-round-border .phxxl.ptl.xs-pam').then(function(mainWrap) {
  utils.waitUntil(function() { return !!window.App; }).then(function() {
    window.App.trackEvent('combo_view_AA_source');
  });
});
}}]}], "name": null}, {"id": "17929802297", "actions": [{"viewId": "17910860996", "changes": [{"dependencies": [], "type": "custom_code", "id": "5028322434fc4a11a7a7171bf98461ed", "value": function($){var utils = window.optimizely.get("utils");

var fname = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : false;
var sigCount = window.changeTargetingData.viewer.user.signatureCount;

utils.waitForElement('.page-wrap .psf-combo-shaded-round-border .phxxl.ptl.xs-pam').then(function(mainWrap) {

  var delightMessage = document.createElement('div');
  delightMessage.className = 'optly-delight-message';
  delightMessage.innerHTML = '' + 
        '<div class="delight-inner txt-c">' +
        '    <div class="close"><span class="symbol symbol-close"></span></div>' +
        '    <div class="svg-wrap position-relative">' +
        '        <div class="svg-bg">' + svgBG + '</div>' +
    		'				 <div class="svg-label"><div class="label-bg"></div>' +(sigCount ? '<div class="count-up"></div>' : svgPen) + '</div>' +
        '        <div class="svg-animation"></div>' +
        '    </div>' +
        '    <h1>You\'re doing great at staying informed!</h1>' +
        '    <p class="type-l">' +  
    			(sigCount ? 
           (fname ? fname + ' - t' : 'T') + 'his is the <strong class="type-branded">' + ordinal_suffix_of(sigCount) + '</strong> pressing petition you\'ve signed.</p>' :
           (fname ? fname + ', y' : 'Y') + 'ou’ve signed a number of pressing petitions recently.' ) +
        '</div>';
  mainWrap.appendChild(delightMessage);
  
  var count = 1;
  var countTime = 1200 / sigCount;
  window.onload = function() {
  	setTimeout(function(){
    	delightMessage.querySelector('.svg-animation').innerHTML = svgAnim;
      delightMessage.classList.add('loaded');
      var countInterval = setInterval(function() {
      	if (count <= sigCount) {
        	document.querySelector('.count-up').innerText = count;
        	count++;
        } else {
        	clearInterval(countInterval);
        }
      }, countTime);
      setTimeout(function() {
      		delightMessage.classList.add('hidden');
      }, 4000);
    }, 500);
  };
  
  delightMessage.querySelector('.close').addEventListener('click', function() {
    delightMessage.classList.add('hidden');
    utils.waitUntil(function() { return !!window.App; }).then(function() {
      window.App.trackEvent('optly_AA_reward_close');
    });
  });
  utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent('optly_AA_reward_view');
  });
});

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

var svgBG = '<svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M94.5088 91.4073L96.9708 85.5394C97.6274 84.0212 99.3918 83.3646 100.869 84.1443L106.491 87.1398C107.599 87.7553 108.994 87.5091 109.855 86.5653L114.164 81.8874C115.272 80.6974 117.201 80.6974 118.308 81.9285L122.617 86.6474C123.479 87.5911 124.833 87.8373 125.982 87.2629L131.644 84.3495C133.122 83.6108 134.886 84.2674 135.502 85.7856L137.882 91.6945C138.374 92.8845 139.564 93.5821 140.836 93.4179L147.155 92.5973C148.797 92.3921 150.233 93.6231 150.315 95.2645L150.561 101.625C150.602 102.897 151.505 103.964 152.736 104.251L158.932 105.646C160.532 106.015 161.476 107.657 160.984 109.257L159.014 115.33C158.604 116.52 159.096 117.874 160.163 118.531L165.538 121.977C166.934 122.88 167.262 124.768 166.236 126.04L162.338 131.046C161.558 132.031 161.558 133.467 162.297 134.452L166.154 139.54C167.139 140.853 166.81 142.741 165.415 143.602L159.999 146.967C158.932 147.624 158.44 148.937 158.809 150.168L160.696 156.241C161.189 157.8 160.204 159.482 158.604 159.811L152.367 161.124C151.135 161.37 150.233 162.478 150.151 163.709L149.822 170.069" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M133.286 173.639L130.824 179.507C130.167 181.025 128.403 181.682 126.925 180.902L121.304 177.907C120.196 177.291 118.801 177.537 117.939 178.481L113.589 183.159C112.481 184.349 110.553 184.349 109.445 183.118L105.177 178.399C104.316 177.455 102.962 177.209 101.813 177.784L96.15 180.697C94.6728 181.436 92.9083 180.779 92.2928 179.261L89.9129 173.352C89.4204 172.162 88.2305 171.464 86.9584 171.628L80.6392 172.449C78.9978 172.654 77.5617 171.423 77.4796 169.782L77.2334 163.422C77.1924 162.15 76.2896 161.083 75.0586 160.796L68.8625 159.359C67.2622 158.99 66.3184 157.349 66.8108 155.748L68.7804 149.675C69.1908 148.485 68.6984 147.131 67.6315 146.475L62.2971 143.028C60.9019 142.125 60.5737 140.238 61.5995 138.966L65.4977 133.959C66.2774 132.975 66.2774 131.538 65.5388 130.554L61.6816 125.465C60.6968 124.152 61.025 122.265 62.4202 121.403L67.8366 118.038C68.9035 117.382 69.3959 116.069 69.0266 114.838L67.1391 108.765C66.6467 107.205 67.6315 105.523 69.2318 105.195L75.4279 103.841C76.6589 103.594 77.5617 102.486 77.6437 101.255L77.972 94.8952" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M70.5366 177.086L54 216.273L74.7221 212.375L86.2526 230.061L103.364 190.217" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.8056 191.571L74.1885 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M157.528 177.086L174.475 216.273L153.712 212.375L142.223 230.061L126.343 193.089" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M145.177 191.489L154.246 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M178.723 159.964L193.056 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M174.723 167.964L193.056 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M50.056 159.964L35.7231 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M54.0559 167.964L35.7231 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M190 77C192.761 77 195 74.7614 195 72C195 69.2386 192.761 67 190 67C187.239 67 185 69.2386 185 72C185 74.7614 187.239 77 190 77Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M153 30.0105C155.094 28.2536 156.65 30.1089 158.718 28.3742C160.811 26.6174 159.255 24.7621 161.322 23.0275C163.416 21.2706 164.972 23.1259 167.066 21.369C169.16 19.6121 167.603 17.7569 169.697 16" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 108.01C5.09375 106.254 6.65047 108.109 8.71772 106.374C10.8115 104.617 9.25476 102.762 11.322 101.028C13.4158 99.2706 14.9725 101.126 17.0662 99.369C19.16 97.6121 17.6033 95.7569 19.697 94" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.5566 39C32.6504 40.7569 31.0937 42.6121 33.1609 44.3467C35.2547 46.1036 36.8114 44.2484 38.8786 45.983C40.9724 47.7399 39.4157 49.5951 41.5094 51.352C43.6032 53.1088 45.1599 51.2536 47.2537 53.0105" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M212.557 45C214.65 46.7569 213.094 48.6121 215.161 50.3467C217.255 52.1036 218.811 50.2484 220.879 51.983C222.972 53.7399 221.416 55.5951 223.509 57.352C225.603 59.1088 227.16 57.2536 229.254 59.0105" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M210 112C212.761 112 215 109.761 215 107C215 104.239 212.761 102 210 102C207.239 102 205 104.239 205 107C205 109.761 207.239 112 210 112Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M62.1104 6.22089C63.276 6.22089 64.2209 5.27601 64.2209 4.11045C64.2209 2.94488 63.276 2 62.1104 2C60.9449 2 60 2.94488 60 4.11045C60 5.27601 60.9449 6.22089 62.1104 6.22089Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M81.1104 55.2209C82.276 55.2209 83.2209 54.276 83.2209 53.1104C83.2209 51.9449 82.276 51 81.1104 51C79.9449 51 79 51.9449 79 53.1104C79 54.276 79.9449 55.2209 81.1104 55.2209Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><path opacity="0.2" d="M113.674 166.347C132.823 166.347 148.347 150.823 148.347 131.674C148.347 112.524 132.823 97 113.674 97C94.5239 97 79 112.524 79 131.674C79 150.823 94.5239 166.347 113.674 166.347Z" fill="#D4603C" fill-opacity="0.2"></path></svg>';

var svgAnim = '<svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" style=""><path d="M94.5088 91.4073L96.9708 85.5394C97.6274 84.0212 99.3918 83.3646 100.869 84.1443L106.491 87.1398C107.599 87.7553 108.994 87.5091 109.855 86.5653L114.164 81.8874C115.272 80.6974 117.201 80.6974 118.308 81.9285L122.617 86.6473C123.479 87.5911 124.833 87.8373 125.982 87.2629L131.644 84.3495C133.122 83.6108 134.886 84.2674 135.502 85.7856L137.882 91.6945C138.374 92.8845 139.564 93.5821 140.836 93.4179L147.155 92.5973C148.797 92.3921 150.233 93.6231 150.315 95.2645L150.561 101.625C150.602 102.897 151.505 103.964 152.736 104.251L158.932 105.646C160.532 106.015 161.476 107.657 160.984 109.257L159.014 115.33C158.604 116.52 159.096 117.874 160.163 118.531L165.538 121.977C166.934 122.88 167.262 124.768 166.236 126.04L162.338 131.046C161.558 132.031 161.558 133.467 162.297 134.452L166.154 139.54C167.139 140.853 166.81 142.741 165.415 143.602L159.999 146.967C158.932 147.624 158.44 148.937 158.809 150.168L160.696 156.241C161.189 157.8 160.204 159.482 158.604 159.811L152.367 161.124C151.135 161.37 150.233 162.478 150.151 163.709L149.822 170.069" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_0"></path><path d="M133.286 173.639L130.824 179.507C130.167 181.025 128.403 181.682 126.925 180.902L121.304 177.907C120.196 177.291 118.801 177.537 117.939 178.481L113.589 183.159C112.481 184.349 110.553 184.349 109.445 183.118L105.177 178.399C104.316 177.455 102.962 177.209 101.813 177.783L96.15 180.697C94.6728 181.436 92.9083 180.779 92.2928 179.261L89.9129 173.352C89.4204 172.162 88.2305 171.464 86.9584 171.628L80.6392 172.449C78.9978 172.654 77.5617 171.423 77.4796 169.782L77.2334 163.422C77.1924 162.15 76.2896 161.083 75.0586 160.795L68.8625 159.359C67.2622 158.99 66.3184 157.349 66.8108 155.748L68.7804 149.675C69.1908 148.485 68.6984 147.131 67.6315 146.475L62.2971 143.028C60.9019 142.125 60.5737 140.238 61.5995 138.965L65.4977 133.959C66.2774 132.975 66.2774 131.538 65.5388 130.554L61.6816 125.465C60.6968 124.152 61.025 122.265 62.4202 121.403L67.8366 118.038C68.9035 117.382 69.3959 116.069 69.0266 114.838L67.1391 108.765C66.6467 107.205 67.6315 105.523 69.2318 105.195L75.4279 103.841C76.6589 103.594 77.5617 102.486 77.6437 101.255L77.972 94.8951" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_1"></path><path d="M70.5366 177.086L54 216.273L74.7221 212.375L86.2526 230.061L103.364 190.217" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_2"></path><path d="M82.8056 191.571L74.1885 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_3"></path><path d="M157.528 177.086L174.475 216.273L153.712 212.375L142.223 230.061L126.343 193.089" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_4"></path><path d="M145.177 191.489L154.246 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_5"></path><path d="M178.723 159.964L193.056 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_6"></path><path d="M174.723 167.964L193.056 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_7"></path><path d="M50.056 159.964L35.7231 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_8"></path><path d="M54.0559 167.964L35.7231 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_9"></path><path d="M190 77C192.761 77 195 74.7614 195 72C195 69.2386 192.761 67 190 67C187.239 67 185 69.2386 185 72C185 74.7614 187.239 77 190 77Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_10"></path><path d="M153 30.0105C155.094 28.2536 156.65 30.1089 158.718 28.3742C160.811 26.6174 159.255 24.7621 161.322 23.0275C163.416 21.2706 164.972 23.1259 167.066 21.369C169.16 19.6121 167.603 17.7569 169.697 16" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_11"></path><path d="M3 108.01C5.09375 106.254 6.65047 108.109 8.71772 106.374C10.8115 104.617 9.25476 102.762 11.322 101.028C13.4158 99.2706 14.9725 101.126 17.0662 99.369C19.16 97.6121 17.6033 95.7569 19.697 94" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_12"></path><path d="M30.5566 39C32.6504 40.7569 31.0937 42.6121 33.1609 44.3467C35.2547 46.1036 36.8114 44.2484 38.8786 45.983C40.9724 47.7399 39.4157 49.5951 41.5094 51.352C43.6032 53.1088 45.1599 51.2536 47.2537 53.0105" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_13"></path><path d="M212.557 45C214.65 46.7569 213.094 48.6121 215.161 50.3467C217.255 52.1036 218.811 50.2484 220.879 51.983C222.972 53.7399 221.416 55.5951 223.509 57.352C225.603 59.1088 227.16 57.2536 229.254 59.0105" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_14"></path><path d="M210 112C212.761 112 215 109.761 215 107C215 104.239 212.761 102 210 102C207.239 102 205 104.239 205 107C205 109.761 207.239 112 210 112Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_15"></path><path d="M62.1104 6.22089C63.276 6.22089 64.2209 5.27601 64.2209 4.11045C64.2209 2.94488 63.276 2 62.1104 2C60.9449 2 60 2.94488 60 4.11045C60 5.27601 60.9449 6.22089 62.1104 6.22089Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_16"></path><path d="M81.1104 55.2209C82.276 55.2209 83.2209 54.276 83.2209 53.1104C83.2209 51.9449 82.276 51 81.1104 51C79.9449 51 79 51.9449 79 53.1104C79 54.276 79.9449 55.2209 81.1104 55.2209Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_17"></path><style data-made-with="vivus-instant">.jObdQmuH_0{stroke-dasharray:175 177;stroke-dashoffset:176;animation:jObdQmuH_draw 800ms ease-in-out 0ms forwards;}.jObdQmuH_1{stroke-dasharray:175 177;stroke-dashoffset:176;animation:jObdQmuH_draw 800ms ease-in-out 23ms forwards;}.jObdQmuH_2{stroke-dasharray:129 131;stroke-dashoffset:130;animation:jObdQmuH_draw 800ms ease-in-out 47ms forwards;}.jObdQmuH_3{stroke-dasharray:23 25;stroke-dashoffset:24;animation:jObdQmuH_draw 800ms ease-in-out 70ms forwards;}.jObdQmuH_4{stroke-dasharray:126 128;stroke-dashoffset:127;animation:jObdQmuH_draw 800ms ease-in-out 94ms forwards;}.jObdQmuH_5{stroke-dasharray:23 25;stroke-dashoffset:24;animation:jObdQmuH_draw 800ms ease-in-out 117ms forwards;}.jObdQmuH_6{stroke-dasharray:16 18;stroke-dashoffset:17;animation:jObdQmuH_draw 800ms ease-in-out 141ms forwards;}.jObdQmuH_7{stroke-dasharray:26 28;stroke-dashoffset:27;animation:jObdQmuH_draw 800ms ease-in-out 164ms forwards;}.jObdQmuH_8{stroke-dasharray:16 18;stroke-dashoffset:17;animation:jObdQmuH_draw 800ms ease-in-out 188ms forwards;}.jObdQmuH_9{stroke-dasharray:26 28;stroke-dashoffset:27;animation:jObdQmuH_draw 800ms ease-in-out 211ms forwards;}.jObdQmuH_10{stroke-dasharray:32 34;stroke-dashoffset:33;animation:jObdQmuH_draw 800ms ease-in-out 235ms forwards;}.jObdQmuH_11{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 258ms forwards;}.jObdQmuH_12{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 282ms forwards;}.jObdQmuH_13{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 305ms forwards;}.jObdQmuH_14{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 329ms forwards;}.jObdQmuH_15{stroke-dasharray:32 34;stroke-dashoffset:33;animation:jObdQmuH_draw 800ms ease-in-out 352ms forwards;}.jObdQmuH_16{stroke-dasharray:14 16;stroke-dashoffset:15;animation:jObdQmuH_draw 800ms ease-in-out 376ms forwards;}.jObdQmuH_17{stroke-dasharray:14 16;stroke-dashoffset:15;animation:jObdQmuH_draw 800ms ease-in-out 400ms forwards;}@keyframes jObdQmuH_draw{100%{stroke-dashoffset:0;}}@keyframes jObdQmuH_fade{0%{stroke-opacity:1;}92.5925925925926%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style></svg>';

var svgPen = '<svg style="position: relative" width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0114 10.0595C17.5579 7.94155 18.746 7.48894 19.6062 8.28758L27.6068 15.7358" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.09037 9.22605L6.02619 11.7972L29.4522 39.7153L37.6587 43.2725L35.5806 34.573L12.1545 6.6549L9.09037 9.22605ZM9.09037 9.22605L6.8049 6.50234" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.4379 33.2112C34.0294 33.554 30.1821 36.7822 28.3096 38.3535" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.8682 13.4641C17.4597 13.8069 13.6124 17.0352 11.7399 18.6064" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}}, {"value": "<style>.optly-delight-message {\n\t  position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    z-index: 1000;\n    background: rgba(173, 172, 172, 0.4);\n  opacity: 1;\n  visibility: visible;\n}\n.optly-delight-message.hidden {\n\topacity: 0;\n  visibility: hidden;\n  transition: opacity .8s ease-in-out, visibility 0s .8s;\n}\n.delight-inner {\n\t  background: white;\n    width: 100%;\n    border-top-left-radius: 40px;\n    border-top-right-radius: 40px;\n    padding: 30px 30px 60px;\n  position: relative;\n}\n.delight-inner .close {\n\tposition: absolute;\n  right: 28px;\n  top: 28px;\n  cursor: pointer;\n  z-index: 2;\n}\n.svg-bg {\n\tanimation-name: svgLoad;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.loaded .svg-bg {\n\tanimation-name: none;\n}\n.svg-label {\n    position: absolute;\n    top: 97px;\n    left: 50%;\n    transform: translateX(-55%);\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.label-bg {\n\tbackground: rgba(212, 96, 60, 0.2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: .3;\n  transition: opacity 1.2s ease-in-out .5s;\n}\n.loaded .label-bg {\n\topacity: 1;\n}\n.svg-label .count-up {\n  \tcolor: #d55f3c;\n    font-weight: bold;\n    font-size: 32px;\n  position: relative;\n}\n.svg-animation {\n\tposition: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media screen and (min-width: 992px) {\n  .optly-delight-message {\n  \talign-items: center;\n  }\n  .delight-inner {\n  \tborder-radius: 40px;\n    width: 375px;\n    max-width: 100%;\n  }\n}\n\n@keyframes svgLoad {\n  0% {opacity: 1;}\n  50% {opacity: .5;}\n  100% {opacity: 1;}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "5C253457-9924-495E-8E25-B59292384A37"}]}], "name": null}, {"id": "17947252240", "actions": [{"viewId": "17910860996", "changes": [{"dependencies": [], "type": "custom_code", "id": "10708E67-A79A-414F-A715-28B598114786", "value": function($){var utils = window.optimizely.get("utils");

var fname = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : false;
var sigCount = window.changeTargetingData.viewer.user.signatureCount;

utils.waitForElement('.page-wrap .psf-combo-shaded-round-border .phxxl.ptl.xs-pam').then(function(mainWrap) {

  var delightMessage = document.createElement('div');
  delightMessage.className = 'optly-delight-message';
  delightMessage.innerHTML = '' + 
        '<div class="delight-inner txt-c">' +
        '    <div class="close"><span class="symbol symbol-close"></span></div>' +
        '    <div class="svg-wrap position-relative">' +
        '        <div class="svg-bg">' + svgBG + '</div>' +
    		'				 <div class="svg-label"><div class="label-bg"></div>' +(sigCount ? '<div class="count-up"></div>' : svgPen) + '</div>' +
        '        <div class="svg-animation"></div>' +
        '    </div>' +
        '    <h1>You\'re a great grassroots supporter!</h1>' +
        '    <p class="type-l">' +  
    			(sigCount ? 
           (fname ? fname + ' - t' : 'T') + 'his is the <strong class="type-branded">' + ordinal_suffix_of(sigCount) + '</strong> petition you\'ve signed recently!</p>' :
           (fname ? fname + ', y' : 'Y') + 'ou’ve signed a number of pressing petitions recently.' ) +
        '</div>';
  mainWrap.appendChild(delightMessage);
  
  var count = 1;
  var countTime = 1200 / sigCount;
  window.onload = function() {
  	setTimeout(function(){
    	delightMessage.querySelector('.svg-animation').innerHTML = svgAnim;
      delightMessage.classList.add('loaded');
      var countInterval = setInterval(function() {
      	if (count <= sigCount) {
        	document.querySelector('.count-up').innerText = count;
        	count++;
        } else {
        	clearInterval(countInterval);
        }
      }, countTime);
      setTimeout(function() {
      		delightMessage.classList.add('hidden');
      }, 4000);
    }, 500);
  };
  
  delightMessage.querySelector('.close').addEventListener('click', function() {
    delightMessage.classList.add('hidden');
    utils.waitUntil(function() { return !!window.App; }).then(function() {
      window.App.trackEvent('optly_AA_reward_close');
    });
  });
  utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent('optly_AA_reward_view');
  });
});

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

var svgBG = '<svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M94.5088 91.4073L96.9708 85.5394C97.6274 84.0212 99.3918 83.3646 100.869 84.1443L106.491 87.1398C107.599 87.7553 108.994 87.5091 109.855 86.5653L114.164 81.8874C115.272 80.6974 117.201 80.6974 118.308 81.9285L122.617 86.6474C123.479 87.5911 124.833 87.8373 125.982 87.2629L131.644 84.3495C133.122 83.6108 134.886 84.2674 135.502 85.7856L137.882 91.6945C138.374 92.8845 139.564 93.5821 140.836 93.4179L147.155 92.5973C148.797 92.3921 150.233 93.6231 150.315 95.2645L150.561 101.625C150.602 102.897 151.505 103.964 152.736 104.251L158.932 105.646C160.532 106.015 161.476 107.657 160.984 109.257L159.014 115.33C158.604 116.52 159.096 117.874 160.163 118.531L165.538 121.977C166.934 122.88 167.262 124.768 166.236 126.04L162.338 131.046C161.558 132.031 161.558 133.467 162.297 134.452L166.154 139.54C167.139 140.853 166.81 142.741 165.415 143.602L159.999 146.967C158.932 147.624 158.44 148.937 158.809 150.168L160.696 156.241C161.189 157.8 160.204 159.482 158.604 159.811L152.367 161.124C151.135 161.37 150.233 162.478 150.151 163.709L149.822 170.069" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M133.286 173.639L130.824 179.507C130.167 181.025 128.403 181.682 126.925 180.902L121.304 177.907C120.196 177.291 118.801 177.537 117.939 178.481L113.589 183.159C112.481 184.349 110.553 184.349 109.445 183.118L105.177 178.399C104.316 177.455 102.962 177.209 101.813 177.784L96.15 180.697C94.6728 181.436 92.9083 180.779 92.2928 179.261L89.9129 173.352C89.4204 172.162 88.2305 171.464 86.9584 171.628L80.6392 172.449C78.9978 172.654 77.5617 171.423 77.4796 169.782L77.2334 163.422C77.1924 162.15 76.2896 161.083 75.0586 160.796L68.8625 159.359C67.2622 158.99 66.3184 157.349 66.8108 155.748L68.7804 149.675C69.1908 148.485 68.6984 147.131 67.6315 146.475L62.2971 143.028C60.9019 142.125 60.5737 140.238 61.5995 138.966L65.4977 133.959C66.2774 132.975 66.2774 131.538 65.5388 130.554L61.6816 125.465C60.6968 124.152 61.025 122.265 62.4202 121.403L67.8366 118.038C68.9035 117.382 69.3959 116.069 69.0266 114.838L67.1391 108.765C66.6467 107.205 67.6315 105.523 69.2318 105.195L75.4279 103.841C76.6589 103.594 77.5617 102.486 77.6437 101.255L77.972 94.8952" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M70.5366 177.086L54 216.273L74.7221 212.375L86.2526 230.061L103.364 190.217" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.8056 191.571L74.1885 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M157.528 177.086L174.475 216.273L153.712 212.375L142.223 230.061L126.343 193.089" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M145.177 191.489L154.246 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M178.723 159.964L193.056 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M174.723 167.964L193.056 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M50.056 159.964L35.7231 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M54.0559 167.964L35.7231 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M190 77C192.761 77 195 74.7614 195 72C195 69.2386 192.761 67 190 67C187.239 67 185 69.2386 185 72C185 74.7614 187.239 77 190 77Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M153 30.0105C155.094 28.2536 156.65 30.1089 158.718 28.3742C160.811 26.6174 159.255 24.7621 161.322 23.0275C163.416 21.2706 164.972 23.1259 167.066 21.369C169.16 19.6121 167.603 17.7569 169.697 16" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 108.01C5.09375 106.254 6.65047 108.109 8.71772 106.374C10.8115 104.617 9.25476 102.762 11.322 101.028C13.4158 99.2706 14.9725 101.126 17.0662 99.369C19.16 97.6121 17.6033 95.7569 19.697 94" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.5566 39C32.6504 40.7569 31.0937 42.6121 33.1609 44.3467C35.2547 46.1036 36.8114 44.2484 38.8786 45.983C40.9724 47.7399 39.4157 49.5951 41.5094 51.352C43.6032 53.1088 45.1599 51.2536 47.2537 53.0105" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M212.557 45C214.65 46.7569 213.094 48.6121 215.161 50.3467C217.255 52.1036 218.811 50.2484 220.879 51.983C222.972 53.7399 221.416 55.5951 223.509 57.352C225.603 59.1088 227.16 57.2536 229.254 59.0105" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M210 112C212.761 112 215 109.761 215 107C215 104.239 212.761 102 210 102C207.239 102 205 104.239 205 107C205 109.761 207.239 112 210 112Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M62.1104 6.22089C63.276 6.22089 64.2209 5.27601 64.2209 4.11045C64.2209 2.94488 63.276 2 62.1104 2C60.9449 2 60 2.94488 60 4.11045C60 5.27601 60.9449 6.22089 62.1104 6.22089Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M81.1104 55.2209C82.276 55.2209 83.2209 54.276 83.2209 53.1104C83.2209 51.9449 82.276 51 81.1104 51C79.9449 51 79 51.9449 79 53.1104C79 54.276 79.9449 55.2209 81.1104 55.2209Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><path opacity="0.2" d="M113.674 166.347C132.823 166.347 148.347 150.823 148.347 131.674C148.347 112.524 132.823 97 113.674 97C94.5239 97 79 112.524 79 131.674C79 150.823 94.5239 166.347 113.674 166.347Z" fill="#D4603C" fill-opacity="0.2"></path></svg>';

var svgAnim = '<svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" style=""><path d="M94.5088 91.4073L96.9708 85.5394C97.6274 84.0212 99.3918 83.3646 100.869 84.1443L106.491 87.1398C107.599 87.7553 108.994 87.5091 109.855 86.5653L114.164 81.8874C115.272 80.6974 117.201 80.6974 118.308 81.9285L122.617 86.6473C123.479 87.5911 124.833 87.8373 125.982 87.2629L131.644 84.3495C133.122 83.6108 134.886 84.2674 135.502 85.7856L137.882 91.6945C138.374 92.8845 139.564 93.5821 140.836 93.4179L147.155 92.5973C148.797 92.3921 150.233 93.6231 150.315 95.2645L150.561 101.625C150.602 102.897 151.505 103.964 152.736 104.251L158.932 105.646C160.532 106.015 161.476 107.657 160.984 109.257L159.014 115.33C158.604 116.52 159.096 117.874 160.163 118.531L165.538 121.977C166.934 122.88 167.262 124.768 166.236 126.04L162.338 131.046C161.558 132.031 161.558 133.467 162.297 134.452L166.154 139.54C167.139 140.853 166.81 142.741 165.415 143.602L159.999 146.967C158.932 147.624 158.44 148.937 158.809 150.168L160.696 156.241C161.189 157.8 160.204 159.482 158.604 159.811L152.367 161.124C151.135 161.37 150.233 162.478 150.151 163.709L149.822 170.069" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_0"></path><path d="M133.286 173.639L130.824 179.507C130.167 181.025 128.403 181.682 126.925 180.902L121.304 177.907C120.196 177.291 118.801 177.537 117.939 178.481L113.589 183.159C112.481 184.349 110.553 184.349 109.445 183.118L105.177 178.399C104.316 177.455 102.962 177.209 101.813 177.783L96.15 180.697C94.6728 181.436 92.9083 180.779 92.2928 179.261L89.9129 173.352C89.4204 172.162 88.2305 171.464 86.9584 171.628L80.6392 172.449C78.9978 172.654 77.5617 171.423 77.4796 169.782L77.2334 163.422C77.1924 162.15 76.2896 161.083 75.0586 160.795L68.8625 159.359C67.2622 158.99 66.3184 157.349 66.8108 155.748L68.7804 149.675C69.1908 148.485 68.6984 147.131 67.6315 146.475L62.2971 143.028C60.9019 142.125 60.5737 140.238 61.5995 138.965L65.4977 133.959C66.2774 132.975 66.2774 131.538 65.5388 130.554L61.6816 125.465C60.6968 124.152 61.025 122.265 62.4202 121.403L67.8366 118.038C68.9035 117.382 69.3959 116.069 69.0266 114.838L67.1391 108.765C66.6467 107.205 67.6315 105.523 69.2318 105.195L75.4279 103.841C76.6589 103.594 77.5617 102.486 77.6437 101.255L77.972 94.8951" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_1"></path><path d="M70.5366 177.086L54 216.273L74.7221 212.375L86.2526 230.061L103.364 190.217" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_2"></path><path d="M82.8056 191.571L74.1885 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_3"></path><path d="M157.528 177.086L174.475 216.273L153.712 212.375L142.223 230.061L126.343 193.089" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_4"></path><path d="M145.177 191.489L154.246 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_5"></path><path d="M178.723 159.964L193.056 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_6"></path><path d="M174.723 167.964L193.056 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_7"></path><path d="M50.056 159.964L35.7231 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_8"></path><path d="M54.0559 167.964L35.7231 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_9"></path><path d="M190 77C192.761 77 195 74.7614 195 72C195 69.2386 192.761 67 190 67C187.239 67 185 69.2386 185 72C185 74.7614 187.239 77 190 77Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_10"></path><path d="M153 30.0105C155.094 28.2536 156.65 30.1089 158.718 28.3742C160.811 26.6174 159.255 24.7621 161.322 23.0275C163.416 21.2706 164.972 23.1259 167.066 21.369C169.16 19.6121 167.603 17.7569 169.697 16" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_11"></path><path d="M3 108.01C5.09375 106.254 6.65047 108.109 8.71772 106.374C10.8115 104.617 9.25476 102.762 11.322 101.028C13.4158 99.2706 14.9725 101.126 17.0662 99.369C19.16 97.6121 17.6033 95.7569 19.697 94" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_12"></path><path d="M30.5566 39C32.6504 40.7569 31.0937 42.6121 33.1609 44.3467C35.2547 46.1036 36.8114 44.2484 38.8786 45.983C40.9724 47.7399 39.4157 49.5951 41.5094 51.352C43.6032 53.1088 45.1599 51.2536 47.2537 53.0105" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_13"></path><path d="M212.557 45C214.65 46.7569 213.094 48.6121 215.161 50.3467C217.255 52.1036 218.811 50.2484 220.879 51.983C222.972 53.7399 221.416 55.5951 223.509 57.352C225.603 59.1088 227.16 57.2536 229.254 59.0105" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_14"></path><path d="M210 112C212.761 112 215 109.761 215 107C215 104.239 212.761 102 210 102C207.239 102 205 104.239 205 107C205 109.761 207.239 112 210 112Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_15"></path><path d="M62.1104 6.22089C63.276 6.22089 64.2209 5.27601 64.2209 4.11045C64.2209 2.94488 63.276 2 62.1104 2C60.9449 2 60 2.94488 60 4.11045C60 5.27601 60.9449 6.22089 62.1104 6.22089Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_16"></path><path d="M81.1104 55.2209C82.276 55.2209 83.2209 54.276 83.2209 53.1104C83.2209 51.9449 82.276 51 81.1104 51C79.9449 51 79 51.9449 79 53.1104C79 54.276 79.9449 55.2209 81.1104 55.2209Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_17"></path><style data-made-with="vivus-instant">.jObdQmuH_0{stroke-dasharray:175 177;stroke-dashoffset:176;animation:jObdQmuH_draw 800ms ease-in-out 0ms forwards;}.jObdQmuH_1{stroke-dasharray:175 177;stroke-dashoffset:176;animation:jObdQmuH_draw 800ms ease-in-out 23ms forwards;}.jObdQmuH_2{stroke-dasharray:129 131;stroke-dashoffset:130;animation:jObdQmuH_draw 800ms ease-in-out 47ms forwards;}.jObdQmuH_3{stroke-dasharray:23 25;stroke-dashoffset:24;animation:jObdQmuH_draw 800ms ease-in-out 70ms forwards;}.jObdQmuH_4{stroke-dasharray:126 128;stroke-dashoffset:127;animation:jObdQmuH_draw 800ms ease-in-out 94ms forwards;}.jObdQmuH_5{stroke-dasharray:23 25;stroke-dashoffset:24;animation:jObdQmuH_draw 800ms ease-in-out 117ms forwards;}.jObdQmuH_6{stroke-dasharray:16 18;stroke-dashoffset:17;animation:jObdQmuH_draw 800ms ease-in-out 141ms forwards;}.jObdQmuH_7{stroke-dasharray:26 28;stroke-dashoffset:27;animation:jObdQmuH_draw 800ms ease-in-out 164ms forwards;}.jObdQmuH_8{stroke-dasharray:16 18;stroke-dashoffset:17;animation:jObdQmuH_draw 800ms ease-in-out 188ms forwards;}.jObdQmuH_9{stroke-dasharray:26 28;stroke-dashoffset:27;animation:jObdQmuH_draw 800ms ease-in-out 211ms forwards;}.jObdQmuH_10{stroke-dasharray:32 34;stroke-dashoffset:33;animation:jObdQmuH_draw 800ms ease-in-out 235ms forwards;}.jObdQmuH_11{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 258ms forwards;}.jObdQmuH_12{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 282ms forwards;}.jObdQmuH_13{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 305ms forwards;}.jObdQmuH_14{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 329ms forwards;}.jObdQmuH_15{stroke-dasharray:32 34;stroke-dashoffset:33;animation:jObdQmuH_draw 800ms ease-in-out 352ms forwards;}.jObdQmuH_16{stroke-dasharray:14 16;stroke-dashoffset:15;animation:jObdQmuH_draw 800ms ease-in-out 376ms forwards;}.jObdQmuH_17{stroke-dasharray:14 16;stroke-dashoffset:15;animation:jObdQmuH_draw 800ms ease-in-out 400ms forwards;}@keyframes jObdQmuH_draw{100%{stroke-dashoffset:0;}}@keyframes jObdQmuH_fade{0%{stroke-opacity:1;}92.5925925925926%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style></svg>';

var svgPen = '<svg style="position: relative" width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0114 10.0595C17.5579 7.94155 18.746 7.48894 19.6062 8.28758L27.6068 15.7358" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.09037 9.22605L6.02619 11.7972L29.4522 39.7153L37.6587 43.2725L35.5806 34.573L12.1545 6.6549L9.09037 9.22605ZM9.09037 9.22605L6.8049 6.50234" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.4379 33.2112C34.0294 33.554 30.1821 36.7822 28.3096 38.3535" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.8682 13.4641C17.4597 13.8069 13.6124 17.0352 11.7399 18.6064" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}}, {"value": "<style>.optly-delight-message {\n\t  position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    z-index: 1000;\n    background: rgba(173, 172, 172, 0.4);\n  opacity: 1;\n  visibility: visible;\n}\n.optly-delight-message.hidden {\n\topacity: 0;\n  visibility: hidden;\n  transition: opacity .8s ease-in-out, visibility 0s .8s;\n}\n.delight-inner {\n\t  background: white;\n    width: 100%;\n    border-top-left-radius: 40px;\n    border-top-right-radius: 40px;\n    padding: 30px 30px 60px;\n  position: relative;\n}\n.delight-inner .close {\n\tposition: absolute;\n  right: 28px;\n  top: 28px;\n  cursor: pointer;\n  z-index: 2;\n}\n.svg-bg {\n\tanimation-name: svgLoad;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.loaded .svg-bg {\n\tanimation-name: none;\n}\n.svg-label {\n    position: absolute;\n    top: 97px;\n    left: 50%;\n    transform: translateX(-55%);\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.label-bg {\n\tbackground: rgba(212, 96, 60, 0.2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: .3;\n  transition: opacity 1.2s ease-in-out .5s;\n}\n.loaded .label-bg {\n\topacity: 1;\n}\n.svg-label .count-up {\n  \tcolor: #d55f3c;\n    font-weight: bold;\n    font-size: 32px;\n  position: relative;\n}\n.svg-animation {\n\tposition: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media screen and (min-width: 992px) {\n  .optly-delight-message {\n  \talign-items: center;\n  }\n  .delight-inner {\n  \tborder-radius: 40px;\n    width: 375px;\n    max-width: 100%;\n  }\n}\n\n@keyframes svgLoad {\n  0% {opacity: 1;}\n  50% {opacity: .5;}\n  100% {opacity: 1;}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "24C293B4-15BD-4C62-92D7-76D42F5A4E45"}]}], "name": null}, {"id": "17942170028", "actions": [{"viewId": "17910860996", "changes": [{"dependencies": [], "type": "custom_code", "id": "D3A6C44A-40CE-4A89-BAF6-BD723EAA1BDD", "value": function($){var utils = window.optimizely.get("utils");

var fname = window.changeTargetingData.viewer.user.displayName ? window.changeTargetingData.viewer.user.displayName.split(" ")[0] : null;
var sigCount = window.changeTargetingData.viewer.user.signatureCount;

utils.waitForElement('.page-wrap .psf-combo-shaded-round-border .phxxl.ptl.xs-pam').then(function(mainWrap) {

  var delightMessage = document.createElement('div');
  delightMessage.className = 'optly-delight-message';
  delightMessage.innerHTML = '' + 
        '<div class="delight-inner txt-c">' +
        '    <div class="close"><span class="symbol symbol-close"></span></div>' +
        '    <div class="svg-wrap position-relative">' +
        '        <div class="svg-bg">' + svgBG + '</div>' +
    		'				 <div class="svg-label"><div class="label-bg"></div>' +(sigCount ? '<div class="count-up"></div>' : svgPen) + '</div>' +
        '        <div class="svg-animation"></div>' +
        '    </div>' +
        '    <h1>You get it' + (fname ? ', ' + fname : '') + ' - people power works!</h1>' +
        '    <p class="type-l">' +  
    						'This is the '+ (sigCount ?'<strong class="type-branded">' + ordinal_suffix_of(sigCount) + '</strong>' : 'latest') + ' petition you\'ve supported, and we\'re guessing you\'re just getting started!</p>';
  mainWrap.appendChild(delightMessage);
  
  var count = 1;
  var countTime = 1200 / sigCount;
  window.onload = function() {
  	setTimeout(function(){
    	delightMessage.querySelector('.svg-animation').innerHTML = svgAnim;
      delightMessage.classList.add('loaded');
      var countInterval = setInterval(function() {
      	if (count <= sigCount) {
        	document.querySelector('.count-up').innerText = count;
        	count++;
        } else {
        	clearInterval(countInterval);
        }
      }, countTime);
      setTimeout(function() {
      		delightMessage.classList.add('hidden');
      }, 4000);
    }, 500);
  };
  
  delightMessage.querySelector('.close').addEventListener('click', function() {
    delightMessage.classList.add('hidden');
    utils.waitUntil(function() { return !!window.App; }).then(function() {
      window.App.trackEvent('optly_AA_reward_close');
    });
  });
  utils.waitUntil(function() { return !!window.App; }).then(function() {
  	window.App.trackEvent('optly_AA_reward_view');
  });
});

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

var svgBG = '<svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.2"><path d="M94.5088 91.4073L96.9708 85.5394C97.6274 84.0212 99.3918 83.3646 100.869 84.1443L106.491 87.1398C107.599 87.7553 108.994 87.5091 109.855 86.5653L114.164 81.8874C115.272 80.6974 117.201 80.6974 118.308 81.9285L122.617 86.6474C123.479 87.5911 124.833 87.8373 125.982 87.2629L131.644 84.3495C133.122 83.6108 134.886 84.2674 135.502 85.7856L137.882 91.6945C138.374 92.8845 139.564 93.5821 140.836 93.4179L147.155 92.5973C148.797 92.3921 150.233 93.6231 150.315 95.2645L150.561 101.625C150.602 102.897 151.505 103.964 152.736 104.251L158.932 105.646C160.532 106.015 161.476 107.657 160.984 109.257L159.014 115.33C158.604 116.52 159.096 117.874 160.163 118.531L165.538 121.977C166.934 122.88 167.262 124.768 166.236 126.04L162.338 131.046C161.558 132.031 161.558 133.467 162.297 134.452L166.154 139.54C167.139 140.853 166.81 142.741 165.415 143.602L159.999 146.967C158.932 147.624 158.44 148.937 158.809 150.168L160.696 156.241C161.189 157.8 160.204 159.482 158.604 159.811L152.367 161.124C151.135 161.37 150.233 162.478 150.151 163.709L149.822 170.069" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M133.286 173.639L130.824 179.507C130.167 181.025 128.403 181.682 126.925 180.902L121.304 177.907C120.196 177.291 118.801 177.537 117.939 178.481L113.589 183.159C112.481 184.349 110.553 184.349 109.445 183.118L105.177 178.399C104.316 177.455 102.962 177.209 101.813 177.784L96.15 180.697C94.6728 181.436 92.9083 180.779 92.2928 179.261L89.9129 173.352C89.4204 172.162 88.2305 171.464 86.9584 171.628L80.6392 172.449C78.9978 172.654 77.5617 171.423 77.4796 169.782L77.2334 163.422C77.1924 162.15 76.2896 161.083 75.0586 160.796L68.8625 159.359C67.2622 158.99 66.3184 157.349 66.8108 155.748L68.7804 149.675C69.1908 148.485 68.6984 147.131 67.6315 146.475L62.2971 143.028C60.9019 142.125 60.5737 140.238 61.5995 138.966L65.4977 133.959C66.2774 132.975 66.2774 131.538 65.5388 130.554L61.6816 125.465C60.6968 124.152 61.025 122.265 62.4202 121.403L67.8366 118.038C68.9035 117.382 69.3959 116.069 69.0266 114.838L67.1391 108.765C66.6467 107.205 67.6315 105.523 69.2318 105.195L75.4279 103.841C76.6589 103.594 77.5617 102.486 77.6437 101.255L77.972 94.8952" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M70.5366 177.086L54 216.273L74.7221 212.375L86.2526 230.061L103.364 190.217" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M82.8056 191.571L74.1885 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M157.528 177.086L174.475 216.273L153.712 212.375L142.223 230.061L126.343 193.089" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M145.177 191.489L154.246 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M178.723 159.964L193.056 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M174.723 167.964L193.056 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M50.056 159.964L35.7231 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M54.0559 167.964L35.7231 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round"></path><path d="M190 77C192.761 77 195 74.7614 195 72C195 69.2386 192.761 67 190 67C187.239 67 185 69.2386 185 72C185 74.7614 187.239 77 190 77Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M153 30.0105C155.094 28.2536 156.65 30.1089 158.718 28.3742C160.811 26.6174 159.255 24.7621 161.322 23.0275C163.416 21.2706 164.972 23.1259 167.066 21.369C169.16 19.6121 167.603 17.7569 169.697 16" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 108.01C5.09375 106.254 6.65047 108.109 8.71772 106.374C10.8115 104.617 9.25476 102.762 11.322 101.028C13.4158 99.2706 14.9725 101.126 17.0662 99.369C19.16 97.6121 17.6033 95.7569 19.697 94" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M30.5566 39C32.6504 40.7569 31.0937 42.6121 33.1609 44.3467C35.2547 46.1036 36.8114 44.2484 38.8786 45.983C40.9724 47.7399 39.4157 49.5951 41.5094 51.352C43.6032 53.1088 45.1599 51.2536 47.2537 53.0105" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M212.557 45C214.65 46.7569 213.094 48.6121 215.161 50.3467C217.255 52.1036 218.811 50.2484 220.879 51.983C222.972 53.7399 221.416 55.5951 223.509 57.352C225.603 59.1088 227.16 57.2536 229.254 59.0105" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M210 112C212.761 112 215 109.761 215 107C215 104.239 212.761 102 210 102C207.239 102 205 104.239 205 107C205 109.761 207.239 112 210 112Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M62.1104 6.22089C63.276 6.22089 64.2209 5.27601 64.2209 4.11045C64.2209 2.94488 63.276 2 62.1104 2C60.9449 2 60 2.94488 60 4.11045C60 5.27601 60.9449 6.22089 62.1104 6.22089Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M81.1104 55.2209C82.276 55.2209 83.2209 54.276 83.2209 53.1104C83.2209 51.9449 82.276 51 81.1104 51C79.9449 51 79 51.9449 79 53.1104C79 54.276 79.9449 55.2209 81.1104 55.2209Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g><path opacity="0.2" d="M113.674 166.347C132.823 166.347 148.347 150.823 148.347 131.674C148.347 112.524 132.823 97 113.674 97C94.5239 97 79 112.524 79 131.674C79 150.823 94.5239 166.347 113.674 166.347Z" fill="#D4603C" fill-opacity="0.2"></path></svg>';

var svgAnim = '<svg width="233" height="233" viewBox="0 0 233 233" fill="none" xmlns="http://www.w3.org/2000/svg" style=""><path d="M94.5088 91.4073L96.9708 85.5394C97.6274 84.0212 99.3918 83.3646 100.869 84.1443L106.491 87.1398C107.599 87.7553 108.994 87.5091 109.855 86.5653L114.164 81.8874C115.272 80.6974 117.201 80.6974 118.308 81.9285L122.617 86.6473C123.479 87.5911 124.833 87.8373 125.982 87.2629L131.644 84.3495C133.122 83.6108 134.886 84.2674 135.502 85.7856L137.882 91.6945C138.374 92.8845 139.564 93.5821 140.836 93.4179L147.155 92.5973C148.797 92.3921 150.233 93.6231 150.315 95.2645L150.561 101.625C150.602 102.897 151.505 103.964 152.736 104.251L158.932 105.646C160.532 106.015 161.476 107.657 160.984 109.257L159.014 115.33C158.604 116.52 159.096 117.874 160.163 118.531L165.538 121.977C166.934 122.88 167.262 124.768 166.236 126.04L162.338 131.046C161.558 132.031 161.558 133.467 162.297 134.452L166.154 139.54C167.139 140.853 166.81 142.741 165.415 143.602L159.999 146.967C158.932 147.624 158.44 148.937 158.809 150.168L160.696 156.241C161.189 157.8 160.204 159.482 158.604 159.811L152.367 161.124C151.135 161.37 150.233 162.478 150.151 163.709L149.822 170.069" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_0"></path><path d="M133.286 173.639L130.824 179.507C130.167 181.025 128.403 181.682 126.925 180.902L121.304 177.907C120.196 177.291 118.801 177.537 117.939 178.481L113.589 183.159C112.481 184.349 110.553 184.349 109.445 183.118L105.177 178.399C104.316 177.455 102.962 177.209 101.813 177.783L96.15 180.697C94.6728 181.436 92.9083 180.779 92.2928 179.261L89.9129 173.352C89.4204 172.162 88.2305 171.464 86.9584 171.628L80.6392 172.449C78.9978 172.654 77.5617 171.423 77.4796 169.782L77.2334 163.422C77.1924 162.15 76.2896 161.083 75.0586 160.795L68.8625 159.359C67.2622 158.99 66.3184 157.349 66.8108 155.748L68.7804 149.675C69.1908 148.485 68.6984 147.131 67.6315 146.475L62.2971 143.028C60.9019 142.125 60.5737 140.238 61.5995 138.965L65.4977 133.959C66.2774 132.975 66.2774 131.538 65.5388 130.554L61.6816 125.465C60.6968 124.152 61.025 122.265 62.4202 121.403L67.8366 118.038C68.9035 117.382 69.3959 116.069 69.0266 114.838L67.1391 108.765C66.6467 107.205 67.6315 105.523 69.2318 105.195L75.4279 103.841C76.6589 103.594 77.5617 102.486 77.6437 101.255L77.972 94.8951" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_1"></path><path d="M70.5366 177.086L54 216.273L74.7221 212.375L86.2526 230.061L103.364 190.217" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_2"></path><path d="M82.8056 191.571L74.1885 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_3"></path><path d="M157.528 177.086L174.475 216.273L153.712 212.375L142.223 230.061L126.343 193.089" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_4"></path><path d="M145.177 191.489L154.246 212.211" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_5"></path><path d="M178.723 159.964L193.056 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_6"></path><path d="M174.723 167.964L193.056 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_7"></path><path d="M50.056 159.964L35.7231 164.406" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_8"></path><path d="M54.0559 167.964L35.7231 186.297" stroke="#F9D266" stroke-width="4" stroke-linecap="round" class="jObdQmuH_9"></path><path d="M190 77C192.761 77 195 74.7614 195 72C195 69.2386 192.761 67 190 67C187.239 67 185 69.2386 185 72C185 74.7614 187.239 77 190 77Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_10"></path><path d="M153 30.0105C155.094 28.2536 156.65 30.1089 158.718 28.3742C160.811 26.6174 159.255 24.7621 161.322 23.0275C163.416 21.2706 164.972 23.1259 167.066 21.369C169.16 19.6121 167.603 17.7569 169.697 16" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_11"></path><path d="M3 108.01C5.09375 106.254 6.65047 108.109 8.71772 106.374C10.8115 104.617 9.25476 102.762 11.322 101.028C13.4158 99.2706 14.9725 101.126 17.0662 99.369C19.16 97.6121 17.6033 95.7569 19.697 94" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_12"></path><path d="M30.5566 39C32.6504 40.7569 31.0937 42.6121 33.1609 44.3467C35.2547 46.1036 36.8114 44.2484 38.8786 45.983C40.9724 47.7399 39.4157 49.5951 41.5094 51.352C43.6032 53.1088 45.1599 51.2536 47.2537 53.0105" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_13"></path><path d="M212.557 45C214.65 46.7569 213.094 48.6121 215.161 50.3467C217.255 52.1036 218.811 50.2484 220.879 51.983C222.972 53.7399 221.416 55.5951 223.509 57.352C225.603 59.1088 227.16 57.2536 229.254 59.0105" stroke="#EBB3A9" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_14"></path><path d="M210 112C212.761 112 215 109.761 215 107C215 104.239 212.761 102 210 102C207.239 102 205 104.239 205 107C205 109.761 207.239 112 210 112Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_15"></path><path d="M62.1104 6.22089C63.276 6.22089 64.2209 5.27601 64.2209 4.11045C64.2209 2.94488 63.276 2 62.1104 2C60.9449 2 60 2.94488 60 4.11045C60 5.27601 60.9449 6.22089 62.1104 6.22089Z" stroke="#F9D266" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_16"></path><path d="M81.1104 55.2209C82.276 55.2209 83.2209 54.276 83.2209 53.1104C83.2209 51.9449 82.276 51 81.1104 51C79.9449 51 79 51.9449 79 53.1104C79 54.276 79.9449 55.2209 81.1104 55.2209Z" stroke="#037171" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" class="jObdQmuH_17"></path><style data-made-with="vivus-instant">.jObdQmuH_0{stroke-dasharray:175 177;stroke-dashoffset:176;animation:jObdQmuH_draw 800ms ease-in-out 0ms forwards;}.jObdQmuH_1{stroke-dasharray:175 177;stroke-dashoffset:176;animation:jObdQmuH_draw 800ms ease-in-out 23ms forwards;}.jObdQmuH_2{stroke-dasharray:129 131;stroke-dashoffset:130;animation:jObdQmuH_draw 800ms ease-in-out 47ms forwards;}.jObdQmuH_3{stroke-dasharray:23 25;stroke-dashoffset:24;animation:jObdQmuH_draw 800ms ease-in-out 70ms forwards;}.jObdQmuH_4{stroke-dasharray:126 128;stroke-dashoffset:127;animation:jObdQmuH_draw 800ms ease-in-out 94ms forwards;}.jObdQmuH_5{stroke-dasharray:23 25;stroke-dashoffset:24;animation:jObdQmuH_draw 800ms ease-in-out 117ms forwards;}.jObdQmuH_6{stroke-dasharray:16 18;stroke-dashoffset:17;animation:jObdQmuH_draw 800ms ease-in-out 141ms forwards;}.jObdQmuH_7{stroke-dasharray:26 28;stroke-dashoffset:27;animation:jObdQmuH_draw 800ms ease-in-out 164ms forwards;}.jObdQmuH_8{stroke-dasharray:16 18;stroke-dashoffset:17;animation:jObdQmuH_draw 800ms ease-in-out 188ms forwards;}.jObdQmuH_9{stroke-dasharray:26 28;stroke-dashoffset:27;animation:jObdQmuH_draw 800ms ease-in-out 211ms forwards;}.jObdQmuH_10{stroke-dasharray:32 34;stroke-dashoffset:33;animation:jObdQmuH_draw 800ms ease-in-out 235ms forwards;}.jObdQmuH_11{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 258ms forwards;}.jObdQmuH_12{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 282ms forwards;}.jObdQmuH_13{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 305ms forwards;}.jObdQmuH_14{stroke-dasharray:25 27;stroke-dashoffset:26;animation:jObdQmuH_draw 800ms ease-in-out 329ms forwards;}.jObdQmuH_15{stroke-dasharray:32 34;stroke-dashoffset:33;animation:jObdQmuH_draw 800ms ease-in-out 352ms forwards;}.jObdQmuH_16{stroke-dasharray:14 16;stroke-dashoffset:15;animation:jObdQmuH_draw 800ms ease-in-out 376ms forwards;}.jObdQmuH_17{stroke-dasharray:14 16;stroke-dashoffset:15;animation:jObdQmuH_draw 800ms ease-in-out 400ms forwards;}@keyframes jObdQmuH_draw{100%{stroke-dashoffset:0;}}@keyframes jObdQmuH_fade{0%{stroke-opacity:1;}92.5925925925926%{stroke-opacity:1;}100%{stroke-opacity:0;}}</style></svg>';

var svgPen = '<svg style="position: relative" width="46" height="49" viewBox="0 0 46 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0114 10.0595C17.5579 7.94155 18.746 7.48894 19.6062 8.28758L27.6068 15.7358" stroke="#D4603C" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.09037 9.22605L6.02619 11.7972L29.4522 39.7153L37.6587 43.2725L35.5806 34.573L12.1545 6.6549L9.09037 9.22605ZM9.09037 9.22605L6.8049 6.50234" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M34.4379 33.2112C34.0294 33.554 30.1821 36.7822 28.3096 38.3535" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.8682 13.4641C17.4597 13.8069 13.6124 17.0352 11.7399 18.6064" stroke="#D4603C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}}, {"value": "<style>.optly-delight-message {\n\t  position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    z-index: 1000;\n    background: rgba(173, 172, 172, 0.4);\n  opacity: 1;\n  visibility: visible;\n}\n.optly-delight-message.hidden {\n\topacity: 0;\n  visibility: hidden;\n  transition: opacity .8s ease-in-out, visibility 0s .8s;\n}\n.delight-inner {\n\t  background: white;\n    width: 100%;\n    border-top-left-radius: 40px;\n    border-top-right-radius: 40px;\n    padding: 30px 30px 60px;\n  position: relative;\n}\n.delight-inner .close {\n\tposition: absolute;\n  right: 28px;\n  top: 28px;\n  cursor: pointer;\n  z-index: 2;\n}\n.svg-bg {\n\tanimation-name: svgLoad;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.loaded .svg-bg {\n\tanimation-name: none;\n}\n.svg-label {\n    position: absolute;\n    top: 97px;\n    left: 50%;\n    transform: translateX(-55%);\n    height: 70px;\n    width: 70px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.label-bg {\n\tbackground: rgba(212, 96, 60, 0.2);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: .3;\n  transition: opacity 1.2s ease-in-out .5s;\n}\n.loaded .label-bg {\n\topacity: 1;\n}\n.svg-label .count-up {\n  \tcolor: #d55f3c;\n    font-weight: bold;\n    font-size: 32px;\n  position: relative;\n}\n.svg-animation {\n\tposition: absolute;\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media screen and (min-width: 992px) {\n  .optly-delight-message {\n  \talign-items: center;\n  }\n  .delight-inner {\n  \tborder-radius: 40px;\n    width: 375px;\n    max-width: 100%;\n  }\n}\n\n@keyframes svgLoad {\n  0% {opacity: 1;}\n  50% {opacity: .5;}\n  100% {opacity: 1;}\n}</style>", "selector": "head", "dependencies": [], "type": "append", "id": "65AE517C-5961-449D-999B-6C99AC038D92"}]}], "name": null}], "audienceIds": null, "changes": null, "id": "17935980754", "integrationSettings": null}], "id": "17951190049", "weightDistributions": null, "name": null, "groupId": null, "commitId": "17917682693", "decisionMetadata": null, "policy": "single_experiment", "changes": null}], "listTargetingKeys": [], "groups": [], "views": [{"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/search", "match": "simple"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_search", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11469911702"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/start-a-petition", "match": "simple"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_start_a_petition", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11470010864"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "custom_code", "value": function jsCondition() {
  return window.location.pathname === "/";
}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var user = window.changeTargetingData.viewer.user;
  var appStateLocale = window.changeTargetingData.appState.locale;
  var lang = '';
  if (appStateLocale) {
   	// based on settings
    lang = appStateLocale.split('-')[0];
  } else {
   	// based on browser
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    if (!!browserLocale.locale) {
    	lang = browserLocale.locale.split('-')[0];
    } else {
    	lang = browserLocale.split('-')[0];
    }
  }
  var langLower = lang.toLowerCase();
	return langLower === 'en' || langLower === 'es' || langLower === 'it' || langLower === 'fr';
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_homepage", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "11475710429"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/petitions", "match": "simple"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_petitions", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11484812307"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "change.org", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_sitewide", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11492601598"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/s/member", "match": "simple"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_membership", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11538580249"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/impact", "match": "simple"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_impact", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11544610156"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/promote_or_share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var user = window.changeTargetingData.viewer.user;
  var appStateLocale = window.changeTargetingData.appState.locale;
  var lang = '';
  if (appStateLocale) {
   	// based on settings
    lang = appStateLocale.split('-')[0];
  } else {
   	// based on browser
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    if (!!browserLocale.locale) {
    	lang = browserLocale.locale.split('-')[0];
    } else {
    	lang = browserLocale.split('-')[0];
    }
  }
  lang = lang.toLowerCase();
	return lang === 'en' || lang === 'de' || lang === 'es' || lang === 'fr' || lang === 'it' || lang === 'ru';
}
}], ["not", ["or", {"type": "url", "value": "the-new-prime-minister-of-the-united-kingdom-boris-johnson-end-the-social-care-crisis-so-no-one-has-to-sell-their-home-to-pay-for-dementia-care", "match": "substring"}]], ["not", ["or", {"type": "url", "value": "petition_update", "match": "substring"}]], ["not", ["or", {"type": "url", "value": "petition_show", "match": "substring"}]]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifticcomboheroboard_v16_1_1_1", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "11804852214"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/p/biogen-without-spinraza-zahra-will-die/sponsors/new?source_location=combo_psf&psf_variant=combo", "match": "simple"}]], "name": null, "apiName": "11391265293_ppmu_psf", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "11929431240"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/share\\_for\\_starters.*just\\_created\\=true.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var user = window.changeTargetingData.viewer.user;
  var appStateLocale = window.changeTargetingData.appState.locale;
  var lang = '';
  if (appStateLocale) {
   	// based on settings
    lang = appStateLocale.split('-')[0];
  } else {
   	// based on browser
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    if (!!browserLocale.locale) {
    	lang = browserLocale.locale.split('-')[0];
    } else {
    	lang = browserLocale.split('-')[0];
    }
  }
	return lang.toLowerCase() === 'en';
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifticsapshare_page_v1_1", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "11938771521"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share.*$", "match": "regex"}], ["or", {"type": "url", "value": "share_abi=1", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifticshare_abi_feed", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12195012439"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\.*$", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifticpetition_sign_success_1_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12349002164"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/u\\/.*$", "match": "regex"}]], "name": null, "apiName": "11391265293_url_targeting_for_start_petition_button_on_petition_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12377650215"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https:\\/\\/(www\\.)?change\\.org\\/s\\/member\\?lpv_id=1757&amount=500&source_location=psf_carousel(.+)?", "match": "regex"}]], "name": null, "apiName": "11391265293_membership_page_gb", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "12381261667"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/share\\_for\\_starters.*just\\_created\\=true.*$", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_starter_share_page", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "12399190432"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/u/me", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_my_petitions", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13014010435"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^(?!.*?share_abi=1).*https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share\\?share=1.*$", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifticshare_second_share", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13190290309"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^(?!.*?share_abi=1).*https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return (window.changeTargetingData.recruiter ? window.changeTargetingData.recruiter.id : false) === (window.changeTargetingData.petition.user.id ? window.changeTargetingData.petition.user.id : false);
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_psf_share__recruited_by_starter", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13323040305"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/promote_or_share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'au', 'gb', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_psf_combo__recruited_by_starter", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "13340170221"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/s/membership?lpv_id=2460&amount=300", "match": "simple"}], ["or", {"type": "url", "value": "https://www.change.org/s/socios?lpv_id=2587", "match": "simple"}]], "name": null, "apiName": "11391265293_membership_pages__all_gb", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13485790361"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/u\\/.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
	return window.changeTargetingData.viewer.loginState !== 'guest';
}
}], ["or", {"type": "element_present", "value": ".js-combo-button"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_petition_update", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "13499040282"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/s/member?lpv_id=1757&amount=500&source_location=psf_carousel", "match": "exact"}, {"type": "url", "value": "https://www.change.org/s/membership?lpv_id=1713&amount=300&source_location=psf_carousel", "match": "exact"}, {"type": "url", "value": "https://www.change.org/s/socios?lpv_id=1708&amount=500&source_location=psf_carousel", "match": "exact"}, {"type": "url", "value": "https://www.change.org/s/members-canada?lpv_id=1801&amount=500&source_location=psf_carousel", "match": "exact"}]], "name": null, "apiName": "11391265293_membership_landing_page__all_regions", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13565330461"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "p\\/[^/]+\\/sponsors\\/new.*", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
return (window.changeTargetingData.viewer.loginState === "authenticated" || window.changeTargetingData.viewer.loginState === "guest");
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifticppmu_feed_gif_2_1_1_1_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "13676770410"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/s/soutiens?lpv_id=1527&amount=500&source_location=psf_carousel", "match": "exact"}, {"type": "url", "value": "https://www.change.org/s/sustainers?lpv_id=&amount=800&source_location=psf_carousel", "match": "exact"}]], "name": null, "apiName": "11391265293_membership_landing_page__multiregion_group_b", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13723460529"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/s/friends?lpv_id=&amount=20000&source_location=psf_carousel", "match": "exact"}]], "name": null, "apiName": "11391265293_membership_landing_page__multiregion_group_c", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13729280286"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https://www.change.org/s/sottoscrittori?lpv_id=&amount=500&source_location=psf_carousel", "match": "exact"}]], "name": null, "apiName": "11391265293_membership_landing_page__multiregion_italy", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "13787150245"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^(?!.*share_abi=1)(?!.*skip=1)(?!.*share=1).*https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return !window.changeTargetingData.psfShareCopyBandit;
}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var user = window.changeTargetingData.viewer.user;
  var appStateLocale = window.changeTargetingData.appState.locale;
  var lang = '';
  if (appStateLocale) {
   	// based on settings
    lang = appStateLocale.split('-')[0];
  } else {
   	// based on browser
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    if (!!browserLocale.locale) {
    	lang = browserLocale.locale.split('-')[0];
    } else {
    	lang = browserLocale.split('-')[0];
    }
  }
	return lang.toLowerCase() === 'en';
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_psf__share_initial", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "14270340384"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "p\\/[^/]+\\/sponsors\\/new.*", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_payment_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "14280610173"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "element_present", "value": "div[data-testid=\"ppmu-modal\"]"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}]], "activationType": "dom_changed", "name": null, "apiName": "11391265293_ppmu_modal", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "14495670450"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.change.org/start-a-petition", "match": "substring"}], ["or", {"type": "element_present", "value": "#content .new-modular[data-step=\"ask\"]"}]], "activationType": "dom_changed", "name": null, "apiName": "11391265293_sap_flow", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "14511190200"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/promote_or_share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

  var serve = false;
  var currentSource = window.changeTargetingData.appState.utmParams.currentSource;
  var currentTerm = 
window.changeTargetingData.appState.utmParams.currentTerm;
  if (currentSource || currentTerm) {
    if (currentSource === 'petition_signer_confirmation' || currentSource === 'guest_sign_login_link' || currentTerm === 'new_signature_confirmation_reminder_one-sfmc' || currentTerm === 'new_signature_confirmation_reminder_two-sfmc') {
      serve = true;
    }
  }
  return serve;
/*
  var serve = true;
  return serve;*/
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_combo_gdpr_verification", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "14622620409"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\.*$", "match": "regex"}], ["or", {"type": "element_present", "value": ".js-combo-button"}], ["or", {"type": "custom_code", "value": function jsCondition() {
	return window.changeTargetingData.viewer.loginState !== 'guest';
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_supa", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "14690260103"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "element_present", "value": ".modular-form[data-view=\"petitions/new/components/form\"],.modular-form[data-step=\"ask\"]"}], ["or", {"type": "url", "value": "start-a-petition", "match": "substring"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var user = window.changeTargetingData.viewer.user;
  var appStateLocale = window.changeTargetingData.appState.locale;
  var lang = '';
  if (appStateLocale) {
       // based on settings
    lang = appStateLocale.split('-')[0];
  } else {
       // based on browser
    var browserLocale = window.navigator.userLanguage || window.navigator.language;
    if (!!browserLocale.locale) {
        lang = browserLocale.locale.split('-')[0];
    } else {
        lang = browserLocale.split('-')[0];
    }
  }
  return true;
  // return lang.toLowerCase() === 'en';
}
}]], "activationType": "dom_changed", "name": null, "apiName": "11391265293_sap_flow_1", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "14710640274"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https:\\/\\/www\\.change\\.org\\/s\\/animals\\?lpv_id=2818\\&amount=500", "match": "regex"}]], "name": null, "apiName": "11391265293_fight_for_animals_landing_page", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "14713460012"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "^(?!.*share_abi=1)(?!.*share=1).*https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share.*$", "match": "regex"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_psf__share_initial_test", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "14739070525"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return window.changeTargetingData.reactFe;
}
}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en', 'fr', 'it', 'es', 'de', 'ru', 'tr'];
    var locales = ['us', 'gb', 'ca', 'au', 'fr', 'it', 'es', 'de', 'ru', 'tr'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_petition__react_guests", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "14768320679"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https\\:\\/\\/www\\.change\\.org\\/s\\/sustainers\\?lpv_id=2924\\&amount=1500", "match": "regex"}]], "name": null, "apiName": "11391265293_sustainers_2924_lp", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "14806040196"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https\\:\\/\\/www\\.change\\.org\\/s\\/animals\\?lpv_id=2942", "match": "regex"}]], "name": null, "apiName": "11391265293_animals_2942", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "14832870840"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "https\\:\\/\\/www\\.change\\.org\\/s\\/friends\\?lpv_id=1975", "match": "regex"}]], "name": null, "apiName": "11391265293_friends_1975", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "14888160118"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.change.org/s/socios?lpv_id=2986", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_member_banner_test_es", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15058791086"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.change.org/s/member?lpv_id=2989", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_member_banner_test", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15075190379"}, {"category": "other", "staticConditions": ["or", ["or", {"type": "url", "value": "www.change.org/s/friends?lpv_id=2988&amount=35000", "match": "substring"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_member_banner_ru", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15112960406"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.change.org/p/support-the-equality-act/psf/promote_or_share?source_location=petition_show", "match": "simple"}]], "name": null, "apiName": "11391265293_taylor_swift_petition", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15292660566"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "https://www.change.org/p/the-new-prime-minister-of-the-united-kingdom-boris-johnson-or-jeremy-hunt-end-the-social-care-crisis-so-no-one-has-to-sell-their-home-to-pay-for-dementia-care/psf/promote_or_share", "match": "simple"}]], "name": null, "apiName": "11391265293_gb_dementiacare_petition", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "15698160291"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "lpv_id=2843", "match": "substring"}, {"type": "url", "value": "lpv_id=1801", "match": "substring"}, {"type": "url", "value": "lpv_id=2892", "match": "substring"}, {"type": "url", "value": "lpv_id=2889", "match": "substring"}, {"type": "url", "value": "lpv_id=2888", "match": "substring"}, {"type": "url", "value": "lpv_id=2443", "match": "substring"}, {"type": "url", "value": "pv_id=2890", "match": "substring"}, {"type": "url", "value": "lpv_id=2899", "match": "substring"}], ["or", {"type": "element_present", "value": ".js-landing-header.js-contribute-box"}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_nifitc__member__social_proofing_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "16861226028"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/share_for_starters.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en','it','es'];
    var locales = ['us','ca','au','gb','it','es'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_niftic__sap__share_optimizations_1_1", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "17192850626"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share.*$", "match": "regex"}], ["or", {"type": "url", "value": "share=1", "match": "substring"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'au', 'gb', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  var ua = window.changeTargetingData.viewer.activity;
  //var sigCount = window.changeTargetingData.viewer.user.signatureCount ? window.changeTargetingData.viewer.user.signatureCount : 0;
  if (ua) {
    var recruitCount = 0;
    var shareCount = 0;
    Object.keys(ua).forEach(function(k) {
      var parts = k.split('.');
      if (parts[0] === 'recruit' && parts[1] && parts[2] === 'count') {
        recruitCount += ua[k];
      } else if (parts[0] === 'share' && parts[1] && parts[2] === 'count') {
        shareCount += ua[k];
      }
    });
    return (recruitCount > 500 && shareCount > 2);
  } else {
    return false;
  }
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_copy_of_niftic__second_share__uas_", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17838010053"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/promote_or_share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'au', 'gb', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return !!window.changeTargetingData.appState.utmParams.currentSource && window.changeTargetingData.appState.utmParams.currentSource.indexOf('aa_') !== -1;
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_copy_of_niftic__combo__aa_signer_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17910860996"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'au', 'gb', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return window.changeTargetingData.petition.user.id === window.changeTargetingData.recruiter.id;
}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_copy_of_niftic__petition_page__sha", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17918520550"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/starter_phone_ask.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'au', 'ca', 'gb'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_copy_of_niftic__sap__scaled_supp_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": false, "id": "17918980302"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^(?!.*share=1)(?!.*skip=1)(?!.*share_abi).*https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": //
function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'gb', 'au', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}], ["or", {"type": "custom_code", "value": function jsCondition() {
  return window.changeTargetingData.recruiter.id === window.changeTargetingData.petition.user.id;
}
}]], "activationType": "dom_changed", "name": null, "apiName": "11391265293_url_targeting_for_copy_of_niftic__share__clap_stri_2", "tags": [], "undoOnDeactivation": true, "deactivationEnabled": true, "id": "17926210741"}, {"category": "other", "staticConditions": ["and", ["or", {"type": "url", "value": "^https:\\/\\/www\\.change\\.org\\/p\\/[^/]+\\/psf\\/promote_or_share.*$", "match": "regex"}], ["or", {"type": "custom_code", "value": function jsCondition() {

    var languages = ['en'];
    var locales = ['us', 'au', 'gb', 'ca'];

    var justLanguages = false;
    var justLocales = false;

    // Don't change
    var appStateLocale = window.changeTargetingData.appState.locale;
    var lang = '';
    var locale = '';
    if (appStateLocale) {
        var localeData = appStateLocale.split('-');
        lang = localeData[0];
        locale = localeData[1];
        var appCountryCode = window.changeTargetingData.appState.countryCode;
        if (appCountryCode && appCountryCode !== locale) {
            locale = appCountryCode;
        }
    } else {
        var browserLocale = window.navigator.userLanguage || window.navigator.language;
        var browserLocaleData = !!browserLocale.locale ? browserLocale.locale.split('-') : browserLocale.split('-');
        lang = browserLocaleData[0];
        locale = browserLocaleData[1];
    }

    var localeMatch = locales.indexOf(locale.toLowerCase()) != -1;
    var languageMatch = languages.indexOf(lang.toLowerCase()) != -1;
    if (justLanguages) {
        return languageMatch;
    } else if (justLocales) {
        return localeMatch;
    } else {
        return localeMatch && languageMatch;
    }

}
}]], "activationType": "url_changed", "name": null, "apiName": "11391265293_url_targeting_for_copy_of_niftic__combo__victory_f_1", "tags": [], "undoOnDeactivation": false, "deactivationEnabled": true, "id": "17936461527"}], "projectId": "11391265293", "plugins": [function(PluginManager) {
  
  PluginManager.registerAnalyticsTracker('11403094673', {
      preRedirectPolicy: 'PERSIST_BEFORE_REDIRECT',
      postRedirectPolicy: 'TRACK_IMMEDIATELY',
      nonRedirectPolicy: 'TRACK_IMMEDIATELY',
      trackLayerDecision: function(decisionData) {
        var extension = decisionData.integrationSettings && decisionData.integrationSettings['11403094673'];
        if (!extension) {
          return;
        }
        var campaign = {
          id: decisionData.layerId,
          name: decisionData.layerName,
          policy: decisionData.layerPolicy,
          integrationStringVersion: decisionData.integrationStringVersion,
        };
        var campaignId = campaign.id;
        var experimentId = decisionData.experimentId;
        var variationId = decisionData.variationId;
        var isHoldback = decisionData.isLayerHoldback;
        extension.$fieldDefaults = [];
        (function(widg) {
  var i = 0;
  var field;
  for (; i < widg.$fieldDefaults.length; ++i) {
    field = widg.$fieldDefaults[i];
    if (!widg.hasOwnProperty(field.name)) {
      widg[field.name] = field.default_value;
    }
  }
  })(extension);
        console.log('track decision');
if (!window.optimizelyTreatments) window.optimizelyTreatments = [];

var treatmentData = {};
treatmentData[experimentId] = variationId;

window.optimizelyTreatments.push(treatmentData);
      },
      serializeSettings: JSON.stringify,
      deserializeSettings: JSON.parse,
    });
    
}
], "namespace": "11391265293", "tagGroups": [], "integrationSettings": [], "interestGroups": [], "dimensions": [{"segmentId": null, "id": "12161354792", "apiName": "content_score", "name": null}], "audiences": [{"conditions": ["and", ["or", ["or", {"value": "iphone", "type": "device", "name": null, "match": null}, {"value": "mobile", "type": "device", "name": null, "match": null}]]], "id": "11487071591", "name": null}, {"conditions": ["and", ["or", ["or", {"value": "screen.width < 768", "type": "code", "name": null, "match": null}]]], "id": "11800860209", "name": null}, {"conditions": ["and", ["or", ["or", {"value": "AU", "type": "location", "name": null, "match": null}, {"value": "CA", "type": "location", "name": null, "match": null}, {"value": "ES", "type": "location", "name": null, "match": null}, {"value": "FR", "type": "location", "name": null, "match": null}, {"value": "GB", "type": "location", "name": null, "match": null}, {"value": "IT", "type": "location", "name": null, "match": null}, {"value": "US", "type": "location", "name": null, "match": null}]], ["or", ["or", {"value": "en", "type": "language", "name": null, "match": null}, {"value": "fr", "type": "language", "name": null, "match": null}, {"value": "es", "type": "language", "name": null, "match": null}, {"value": "it", "type": "language", "name": null, "match": null}]]], "id": "15430400511", "name": null}], "anonymizeIP": true, "projectJS": function(){window.optimizely = window.optimizely || [];
var PJS = {};
PJS.isDev = /cro(metrics)?-debug|optimizely_local/.test(window.location.search) || localStorage && localStorage.getItem("cro-debug");
PJS.log = PJS.isDev && console && console.info && console.info.bind(console, '[PJS]') || function () {};
PJS.error = function (errorCode, details) {
  if (console && console.error) console.error('PJS Error:', errorCode, '\n', details);
};

try {
  (function () {
    /**
     * Local Storage Required
     * @author Eric Newland <eric@crometrics.com>
     * @author Andrew Wessels <andrew.wessels@crometrics.com>
     * Date: 2/1/18
     *
     * Disable Optimizely if localStorage isn't available.
     */
    try {
      var key = 'optimizely-store-required';
      window.localStorage.setItem(key, true);
      window.localStorage.removeItem(key);
    } catch (e) {
      //Disable Optimizely if localStorage fails.
      window.optimizely.push({
        "type": "disable"
      });
    }
  })();
} catch (e) {
  PJS.error('x/local-storage-required', e);
}

try {
  (function () {
    /*
      [PJS] Crometrics Test Cookie
      Authors: 
        Matthew Tyree (matthew.tyree@crometrics.com)
        Matthew Gossage (matthew.gossage@crometrics.com)
      Last Modified: 06/13/2018
      Version: crometrics-test-cookie-1.0.0
    
      Track and persist the crometrics QA cookie if a given url param, or the cookie
      itself, is present.
    
      This cookie defaults to a lifetime of 15 minutes (renewed every time this module runs).
      The default for Optimizely QA links is 15 minutes, so that's what we're using here.
    */
    var COOKIE_NAME = "crometrics_test_cookie";
    var DISABLE_RE = /crometrics_test_cookie=false/;
    var ENABLE_RE = /crometrics_test_cookie=true/;

    var disable = DISABLE_RE.test(window.location.search);
    var enable = ENABLE_RE.test(window.location.search) || ENABLE_RE.test(window.document.cookie);

    // This will match if the cookie or enable query param are present.
    if (enable) {
      if (disable) {
        // If we've been told to disable it, then do so.
        window.document.cookie = COOKIE_NAME + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
      } else {
        // Otherwise, persist (or enable) the cookie.
        var date = new Date();
        date.setTime(date.getTime() + 15 * 60 * 1000);

        window.document.cookie = COOKIE_NAME + '=true; expires=' + date.toGMTString() + '; path=/';

        window.optimizely.push({
          type: "addListener",
          filter: { type: "analytics", name: "trackEvent" },
          handler: function handler(event) {
            PJS.log('Metric fired: ' + event.data.name + ' <' + event.data.apiName + '>');
          }
        });
      }
    }
  })();
} catch (e) {
  PJS.error('x/crometrics-test-cookie', e);
}

try {
  (function () {
    /*
      Hide QA Modal
      Author: Eric Newland (eric@crometrics.com)
      Last Modified: 05/02/17
      Version: crometrics-hideqamodal-1.0.0
    
      Logic for hiding the QA modal in Optimizely X
    */
    function getCookie(name) {
      'use strict';

      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
        }if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    function getParam(name, optSearch) {
      'use strict';

      optSearch = optSearch || location.search;
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
          results = regex.exec(optSearch);
      return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    var hideModal = function hideModal() {
      var qaParam = getParam('qa');
      if (qaParam === 'hide') {
        // Set a long-term cookie that will hide the modal at all resolutions.
        var date = new Date();
        date.setFullYear(date.getFullYear() + 10);
        document.cookie = 'CRO_HideQAModal=true; path=/; expires=' + date.toUTCString() + ';';
      } else if (qaParam === 'show') {
        // Clear the cookie.
        document.cookie = 'CRO_HideQAModal=true; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      }

      var cookie = getCookie('CRO_HideQAModal');
      if (cookie) {
        var html = document.documentElement;
        html.className += ' hide-optly-qa-modal';
      }

      // CSS to go inside a media query for small screens
      var hideModalMobile = 'optly-preview__firstvisit { display: none; } optly-preview { top: 75px; right: 15px; max-width: calc(100vw - 30px); } optly-preview optly-wrap { border-width: 0; } optly-preview.is-collapsed { opacity: .25; } optly-preview .optly-tabs-nav__item:last-child { padding-left: 40px; }';

      // Add our cookie class to each rule and add an additional rule for large screens only.
      // This will appear outside the mobile media query.
      var hideModalEverywhere = hideModalMobile.replace(/([^}]*})/gi, '.hide-optly-qa-modal $1') + ' @media (min-width:471px) and (min-height:701px) { .hide-optly-qa-modal optly-preview.is-collapsed:hover { opacity: 1; } }';
      document.addEventListener('DOMContentLoaded', function () {
        var mediaQuery = document.createElement('style');
        mediaQuery.innerHTML = '@media (max-width: 470px), (max-height: 700px) { ' + hideModalMobile + ' } ' + hideModalEverywhere;
        document.body.appendChild(mediaQuery);
      }, false);
    };

    // Paste from here down into PJS with Optimizely already initialized.
    window.optimizely.push({
      type: "addListener",
      filter: {
        type: "lifecycle",
        name: "initialized"
      },
      handler: hideModal
    });
  })();
} catch (e) {
  PJS.error('x/hide-qa-modal', e);
}
}, "visitorAttributes": [], "enableForceParameters": true, "accountId": "11391265293", "events": [{"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "activate_petition", "id": "11467840433", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "subs_landing_page_view", "id": "11468030315", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "modular_sap_description_click_continue", "id": "11468040328", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sponsor_view", "id": "11469840549", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_profile_phone_entered", "id": "11469980476", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_media_save_click", "id": "11469990308", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "combo_psf_share", "id": "11471910676", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_complete_profile_click_continue", "id": "11475750387", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "post_promote_offer_success", "id": "11475780604", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "petition_view", "id": "11479390270", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "combo_psf_view", "id": "11481150205", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "modular_sap_target_click_continue", "id": "11481180580", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "post_promote_membership_ask_modal_view", "id": "11481190363", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "modular_sap_enter_text_ask", "id": "11488470430", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_media_add_media_attempt", "id": "11488560312", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sign_intent", "id": "11490360336", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "combo_psf_promote", "id": "11492430467", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "share_petition", "id": "11492430469", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_media_upload_photo_click", "id": "11496460266", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "petition_edit_view", "id": "11498310293", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "combo_psf_share_initial_view", "id": "11498320364", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "identified_sap_cont_w_email_click", "id": "11498470577", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sign", "id": "11500210170", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "combo_psf_skip", "id": "11500380505", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "subs_customer_cancellation", "id": "11500510695", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "modular_sap_ask_click_continue", "id": "11502160438", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_auth_or_id_intent", "id": "11502180118", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sap_media_add_media_success", "id": "11504170091", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "pp_model_success", "id": "11504340212", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "subs_modal_success", "id": "11504360266", "eventFilter": null}, {"category": "other", "name": null, "eventType": "custom", "viewId": null, "apiName": "sign_intent_valid", "id": "11535256198", "eventFilter": null}, {"category": "other", "name": null, "eventType": "click", "viewId": "12381261667", "apiName": "11391265293_submit_payment", "id": "12375422843", "eventFilter": {"filterType": "target_selector", "selector": ".js-submit-payment"}}], "experimental": {"trimPages": false}, "revision": "23159"},p=n(134),h="initializeOptimizelyPreview";if(d.populateDirectiveData(),s.clientHasAlreadyInitialized())return void a.warn("Main / Disabling because Optimizely has already initialized on this page load. Are there multiple snippets on the page?");if(s.shouldBailForDesktopApp())return void a.log("Main / Disabling because of desktop app.");if(s.conflictInObservingChanges())return void a.log("Main / Disabling: Observe Changes Indefinitely is on, but browser does not support it.");if(s.shouldLoadInnie())l.registerFunction("getProjectId",(function(){return g.projectId})),l.registerFunction("getAccountId",(function(){return g.accountId})),f.addScriptAsync("https://app.optimizely.com/js/innie.js"),a.log("Main / Disabling in favor of the editor client.");else if(s.shouldLoadPreview()){var _;_=s.isSlave()?window.optimizely:window.optimizely=window.optimizely||[],_.push({type:"load",data:g}),a.log("Main / Disabling in favor of the preview client."),n(148).setupPreviewGlobal(),n(148).pushToPreviewGlobal({type:"pushPreviewData",name:"liveCommitData",data:g}),s.isSlave()||(l.registerFunction("getProjectId",(function(){return g.projectId})),f.addScriptSync("https://cdn-assets-prod.s3.amazonaws.com/js/preview2/11391265293.js"))}else if(s.shouldBootstrapDataForPreview()){l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)}));var v=s.isSlave()?PROJECT_ID_FOR_SLAVE_PREVIEW:l.getFunction("getProjectId")();c=t(s.getProjectToken(),v,s.getPreviewLayerIds()),f.addScriptSync(c),n(148).setupPreviewGlobal(),f.addScriptAsync("/dist/js/preview_ui.js")}else s.shouldBootstrapDataForEditor()?(l.registerFunction(h,(function(t){e(t),l.unregisterFunction(h)})),f.addScriptAsync(window.optimizely_editor_data_endpoint)):s.shouldInitialize()&&e(g);r.timeEnd("block")}try{i()}catch(e){try{n(121).handleError(e)}catch(e){console.log(e)}}}),(function(e,t,n){function i(){s();var e=x.getRumData();return e.extras=e.extras||{},e.extras.beacon={cjsTimeout:!0},e=_.pickBy(e,(function(e){return!_.isUndefined(e)})),a(e)}function r(e){var t=L.getPromise("RUM_FIRST_BEACON");return t?t.then(e):E.makeAsyncRequest("RUM_FIRST_BEACON",e)}function a(e){return _.isEmpty(e)?w.resolve():r((function(){return O.request({url:B,method:"POST",data:e,withCredentials:!0}).then((function(e){return E.resolveRequest("RUM_FIRST_BEACON",e),e}))["catch"]((function(e){throw T.error("POST to client-rum failed:",e),E.rejectRequest("RUM_FIRST_BEACON",e),e}))}))}function o(){var e=y.getCurrentScript();if(e)return e.src}function s(){var e={id:x.getRumId(),v:j,account:k.getAccountId(),project:k.getSnippetId()||k.getProjectId(),snippet:k.getSnippetId(),revision:k.getRevision(),clientVersion:V.getClientVersion(),hasSlave:!1,wxhr:!0};try{e["numBehaviorEvents"]=m.getEvents().length}catch(e){T.debug("Unable to get behavior events for RUM:",e)}_.assign(e,u(),d()),S.dispatch(N.SET_RUM_DATA,{data:e})}function u(){var e=b.getGlobal("performance");if(e){var t,n=x.getScriptSrc();try{if(n){T.debug("Using derived script src: ",n);var i=e.getEntriesByName(n);i.length>0&&(t=i[0])}if(!t){var r=/\/\/[^.]+\.optimizely\.(com|test)\/(js|api\/client)\/[\d]+\.js/gi;T.debug("Scanning resource timing entries with regex");var a=e.getEntriesByType("resource");t=_.find(a,(function(e){return r.test(e.name)}))}if(t)return _.mapValues(C.ResourceTimingAttributes,(function(e,n){var i=t[n];return"number"==typeof i?Math.round(1e3*(i||0))/1e3:"serverTiming"===n?i||[]:void 0}))}catch(e){return}}}function c(){try{return!y.querySelector("body")}catch(e){return null}}function l(){try{b.getGlobal("requestAnimationFrame")((function(){var e=x.getRumData().timebase;S.dispatch(N.SET_RUM_DATA,{data:{render:I.now()-(e||0)}})}))}catch(e){return}}function d(){return F.getDurationsFor(_.values(C.RUMPerformanceTimingAttributes))}function f(){var e=A.keys(),t=_.filter(_.map(e,(function(e){var t=D.getStorageKeyFromKey(e);return t?{key:e,isForeign:D.isForeignKey(e),category:t,size:e.length+A.getItem(e).length}:null}))),n=_.reduce(t,(function(e,t){var n=t.key,i=D.getIdFromKey(n);if(!i)return e;var r=t.isForeign?e.foreign:e.local;return r[i]=!0,e}),{local:{},foreign:{}}),i=_.chain(t).filter({isForeign:!0}).reduce((function(e,t){var n=t.key.split("_")[0];return e[n]=!0,e}),{}).value(),r={local:0,foreign:0},a={local:{},foreign:{}};_.forEach(t,(function(e){var t=e.isForeign?"foreign":"local";r[t]+=e.size,a[t][e.category]||(a[t][e.category]=0),a[t][e.category]+=e.size}));var o={numKeys:A.allKeys().length,sizeKeys:A.allKeys().toString().length,sizeValues:A.allValues().toString().length,idCounts:{local:_.keys(n.local).length,foreign:_.keys(n.foreign).length},foreignOriginCount:_.keys(i).length,byteTotals:r,byteTotalsByCategory:a},s=R.estimateStorage();return s.then((function(e){return _.assign(o,{storageEstimate:e})}))}function g(){var e=b.getGlobal("performance"),t=e?e.timing:{},n=F.getMarks()||{},i=x.getApiData(),r=x.getDOMObservationData(),o=G.get("state").getActiveExperimentIds(),s=x.getFeaturesNeededData(),u=y.parseUri(x.getScriptSrc()),c=x.getRumData()||{},l=c.extras||{};_.assign(l,{apiCalls:i,DOMObservationData:r,paintTimings:h(),activeExperimentIds:o,numPages:U.getNumberOfPages(),snippet:{scheme:u.protocol.slice(0,-1),host:u.host,path:u.pathname},networkInfo:p(),experimental:k.getExperimental(),featuresNeeded:s,beacon:{cjsOnload:!0}});var d=b.getGlobal("Prototype");d&&!_.isUndefined(d.Version)&&(l.prototypeJS=d.Version);var g=!1;g=!0;var v=M.getFrames();v.length&&(l.xdFramesLoaded=v.length);var E={id:x.getRumId(),v:j,project:k.getSnippetId()||k.getProjectId(),navigationTimings:t,userTimings:n,xd:g,apis:_.keys(i),extras:l};f().then((function(e){var t=_.assign(E,{lsMetrics:e});a(t)}))}function p(){var e=b.getGlobal("navigator");if(e&&e.connection)return _.pick(e.connection,["downlink","rtt","effectiveType"])}function h(){var e=b.getGlobal("performance");if(e)try{var t=e.getEntriesByType("paint");if(_.isEmpty(t))return;return _.reduce(t,(function(e,t){return e[t.name]=Math.round(t.startTime),e}),{})}catch(e){return}}var _=n(2),v=n(5),E=n(6),m=n(72),I=n(24),y=n(81),S=n(9),A=n(82).LocalStorage,T=n(23),R=n(90),w=n(12).Promise,D=n(75),b=n(41),O=n(91),N=n(7),C=n(25),P=n(16),L=P.get("stores/async_request"),V=P.get("stores/client_metadata"),k=P.get("stores/global"),x=P.get("stores/rum"),F=P.get("stores/performance"),M=P.get("stores/xdomain"),U=P.get("stores/view_data"),G=n(93),B="https://rum.optimizely.com/rum",z=3e3,j="1.0",H=.01;t.initialize=function(){var e,t=v.generate().replace(/-/g,"");e=Math.random()<H;var n=o();S.dispatch(N.SET_RUM_DATA,{id:t,RumHost:B,inRumSample:e,src:n,data:{id:t,sync:c(),timebase:I.now(),sampleRate:H,url:n}})},t.queueBeacons=function(){return x.getSampleRum()?(l(),y.isLoaded()?b.setTimeout(g,z):b.addEventListener("load",g),new w(function(e,t){b.setTimeout((function(){i().then(e,t)}),z)}).catch((function(e){T.warn("RUM / Error sending data:",e)}))):w.resolve()}}),(function(e,t,n){e.exports=n(3)._.noConflict()}),(function(e,t,n){(function(e,n){(function(){function i(e,t){return e.set(t[0],t[1]),e}function r(e,t){return e.add(t),e}function a(e,t){return u(De(e),gn)}function o(e,t){return!!e.length&&f(e,t,0)>-1}function s(e,t,n){for(var i=-1,r=e.length;++i<r;)if(n(t,e[i]))return!0;return!1}function u(e,t){for(var n=-1,i=t.length,r=e.length;++n<i;)e[r+n]=t[n];return e}function c(e,t,n){for(var i=-1,r=e.length;++i<r;){var a=e[i],o=t(a);if(null!=o&&(s===Tn?o===o:n(o,s)))var s=o,u=a}return u}function l(e,t,n,i){var r;return n(e,(function(e,n,a){if(t(e,n,a))return r=i?n:e,!1})),r}function d(e,t,n){for(var i=e.length,r=n?i:-1;n?r--:++r<i;)if(t(e[r],r,e))return r;return-1}function f(e,t,n){if(t!==t)return I(e,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function g(e,t,n,i,r){return r(e,(function(e,r,a){n=i?(i=!1,e):t(n,e,r,a)})),n}function p(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);return i}function h(e){return function(t){return e(t)}}function _(e,t){return me(t,(function(t){return e[t]}))}function v(e){return e&&e.Object===Object?e:null}function E(e,t){if(e!==t){var n=null===e,i=e===Tn,r=e===e,a=null===t,o=t===Tn,s=t===t;if(e>t&&!a||!r||n&&!o&&s||i&&s)return 1;if(e<t&&!n||!s||a&&!i&&r||o&&r)return-1}return 0}function m(e){return pi[e]}function I(e,t,n){for(var i=e.length,r=t+(n?0:-1);n?r--:++r<i;){var a=e[r];if(a!==a)return r}return-1}function y(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function S(e,t){return e="number"==typeof e||di.test(e)?+e:-1,t=null==t?Vn:t,e>-1&&e%1==0&&e<t}function A(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}function T(e){var t=-1,n=Array(e.size);return e.forEach((function(e,i){n[++t]=[i,e]})),n}function R(e){var t=-1,n=Array(e.size);return e.forEach((function(e){n[++t]=e})),n}function w(e){if(jt(e)&&!dr(e)){if(e instanceof D)return e;if(Di.call(e,"__wrapped__"))return tt(e)}return new D(e)}function D(e,t){this.e=e,this.u=[],this.l=!!t}function b(){}function O(e,t){return C(e,t)&&delete e[t]}function N(e,t){if(Xi){var n=e[t];return n===bn?Tn:n}return Di.call(e,t)?e[t]:Tn}function C(e,t){return Xi?e[t]!==Tn:Di.call(e,t)}function P(e,t,n){e[t]=Xi&&n===Tn?bn:n}function L(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function V(){this.d={hash:new b,map:Yi?new Yi:[],string:new b}}function k(e){var t=this.d;return Ze(e)?O("string"==typeof e?t.string:t.hash,e):Yi?t.map["delete"](e):W(t.map,e)}function x(e){var t=this.d;return Ze(e)?N("string"==typeof e?t.string:t.hash,e):Yi?t.map.get(e):X(t.map,e)}function F(e){var t=this.d;return Ze(e)?C("string"==typeof e?t.string:t.hash,e):Yi?t.map.has(e):Q(t.map,e)}function M(e,t){var n=this.d;return Ze(e)?P("string"==typeof e?n.string:n.hash,e,t):Yi?n.map.set(e,t):J(n.map,e,t),this}function U(e){var t=-1,n=e?e.length:0;for(this.d=new L;++t<n;)this.push(e[t])}function G(e,t){var n=e.d;if(Ze(t)){var i=n.d,r="string"==typeof t?i.string:i.hash;return r[t]===bn}return n.has(t)}function B(e){var t=this.d;if(Ze(e)){var n=t.d,i="string"==typeof e?n.string:n.hash;i[e]=bn}else t.set(e,bn)}function z(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function j(){this.d={array:[],map:null}}function H(e){var t=this.d,n=t.array;return n?W(n,e):t.map["delete"](e)}function K(e){var t=this.d,n=t.array;return n?X(n,e):t.map.get(e)}function Y(e){var t=this.d,n=t.array;return n?Q(n,e):t.map.has(e)}function q(e,t){var n=this.d,i=n.array;i&&(i.length<wn-1?J(i,e,t):(n.array=null,n.map=new L(i)));var r=n.map;return r&&r.set(e,t),this}function W(e,t){var n=$(e,t);if(n<0)return!1;var i=e.length-1;return n==i?e.pop():zi.call(e,n,1),!0}function X(e,t){var n=$(e,t);return n<0?Tn:e[n][1]}function Q(e,t){return $(e,t)>-1}function $(e,t){for(var n=e.length;n--;)if(Nt(e[n][0],t))return n;return-1}function J(e,t,n){var i=$(e,t);i<0?e.push([t,n]):e[i][1]=n}function Z(e,t,n,i){return e===Tn||Nt(e,Ri[n])&&!Di.call(i,n)?t:e}function ee(e,t,n){(n===Tn||Nt(e[t],n))&&("number"!=typeof t||n!==Tn||t in e)||(e[t]=n)}function te(e,t,n){var i=e[t];Di.call(e,t)&&Nt(i,n)&&(n!==Tn||t in e)||(e[t]=n)}function ne(e,t){return e&&ir(t,sn(t),e)}function ie(e){return"function"==typeof e?e:_n}function re(e,t,n,i,r,a,o){var s;if(i&&(s=a?i(e,r,a,o):i(e)),s!==Tn)return s;if(!zt(e))return e;var u=dr(e);if(u){if(s=Xe(e),!t)return De(e,s)}else{var c=We(e),l=c==Gn||c==Bn;if(fr(e))return Ne(e,t);if(c==Hn||c==kn||l&&!a){if(y(e))return a?e:{};if(s=Qe(l?{}:e),!t)return s=ne(s,e),n?Me(e,s):s}else{if(!gi[c])return a?e:{};s=$e(e,c,t)}}o||(o=new z);var d=o.get(e);return d?d:(o.set(e,s),(u?tr:fe)(e,(function(r,a){te(s,a,re(r,t,n,i,a,e,o))})),n&&!u?Me(e,s):s)}function ae(e){return zt(e)?Gi(e):{}}function oe(e,t,n){if("function"!=typeof e)throw new TypeError(Dn);return setTimeout((function(){e.apply(Tn,n)}),t)}function se(e,t,n,i){var r=-1,a=o,u=!0,c=e.length,l=[],d=t.length;if(!c)return l;n&&(t=me(t,h(n))),i?(a=s,u=!1):t.length>=wn&&(a=G,u=!1,t=new U(t));e:for(;++r<c;){var f=e[r],g=n?n(f):f;if(u&&g===g){for(var p=d;p--;)if(t[p]===g)continue e;l.push(f)}else a(t,g,i)||l.push(f)}return l}function ue(e,t){var n=!0;return tr(e,(function(e,i,r){return n=!!t(e,i,r)})),n}function ce(e,t){var n=[];return tr(e,(function(e,i,r){t(e,i,r)&&n.push(e)})),n}function le(e,t,n,i){i||(i=[]);for(var r=-1,a=e.length;++r<a;){var o=e[r];t>0&&Vt(o)&&(n||dr(o)||Pt(o))?t>1?le(o,t-1,n,i):u(i,o):n||(i[i.length]=o)}return i}function de(e,t){return null==e?e:nr(e,t,un)}function fe(e,t){return e&&nr(e,t,sn)}function ge(e,t){return ce(t,(function(t){return Gt(e[t])}))}function pe(e,t,n,i,r){return e===t||(null==e||null==t||!zt(e)&&!jt(t)?e!==e&&t!==t:he(e,t,pe,n,i,r))}function he(e,t,n,i,r,a){var o=dr(e),s=dr(t),u=xn,c=xn;o||(u=Ni.call(e),u=u==kn?Hn:u),s||(c=Ni.call(t),c=c==kn?Hn:c);var l=u==Hn&&!y(e),d=c==Hn&&!y(t),f=u==c;a||(a=[]);var g=_t(a,(function(t){return t[0]===e}));if(g&&g[1])return g[1]==t;if(a.push([e,t]),f&&!l){var p=o||$t(e)?He(e,t,n,i,r,a):Ke(e,t,u,n,i,r,a);return a.pop(),p}if(!(r&Pn)){var h=l&&Di.call(e,"__wrapped__"),_=d&&Di.call(t,"__wrapped__");if(h||_){var p=n(h?e.value():e,_?t.value():t,i,r,a);return a.pop(),p}}if(!f)return!1;var p=Ye(e,t,n,i,r,a);return a.pop(),p}function _e(e){var t=typeof e;return"function"==t?e:null==e?_n:("object"==t?Ie:Re)(e)}function ve(e){return Hi(Object(e))}function Ee(e){e=null==e?e:Object(e);var t=[];for(var n in e)t.push(n);return t}function me(e,t){var n=-1,i=Lt(e)?Array(e.length):[];return tr(e,(function(e,r,a){i[++n]=t(e,r,a)})),i}function Ie(e){var t=sn(e);return function(n){var i=t.length;if(null==n)return!i;for(n=Object(n);i--;){var r=t[i];if(!(r in n&&pe(e[r],n[r],Tn,Cn|Pn)))return!1}return!0}}function ye(e,t,n,i,r){if(e!==t){var a=dr(t)||$t(t)?Tn:un(t);tr(a||t,(function(o,s){if(a&&(s=o,o=t[s]),zt(o))r||(r=new z),Se(e,t,s,n,ye,i,r);else{var u=i?i(e[s],o,s+"",e,t,r):Tn;u===Tn&&(u=o),ee(e,s,u)}}))}}function Se(e,t,n,i,r,a,o){var s=e[n],u=t[n],c=o.get(u);if(c)return void ee(e,n,c);var l=a?a(s,u,n+"",e,t,o):Tn,d=l===Tn;d&&(l=u,dr(u)||$t(u)?dr(s)?l=s:Vt(s)?l=De(s):(d=!1,l=re(u,!a)):Wt(u)||Pt(u)?Pt(s)?l=tn(s):!zt(s)||i&&Gt(s)?(d=!1,l=re(u,!a)):l=s:d=!1),o.set(u,l),d&&r(l,u,i,a,o),o["delete"](u),ee(e,n,l)}function Ae(e,t){return e=Object(e),It(t,(function(t,n){return n in e&&(t[n]=e[n]),t}),{})}function Te(e,t){var n={};return de(e,(function(e,i){t(e,i)&&(n[i]=e)})),n}function Re(e){return function(t){return null==t?Tn:t[e]}}function we(e,t,n){var i=-1,r=e.length;t<0&&(t=-t>r?0:r+t),n=n>r?r:n,n<0&&(n+=r),r=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(r);++i<r;)a[i]=e[i+t];return a}function De(e){return we(e,0,e.length)}function be(e,t){var n;return tr(e,(function(e,i,r){return n=t(e,i,r),!n})),!!n}function Oe(e,t){var n=e;return It(t,(function(e,t){return t.func.apply(t.thisArg,u([e],t.args))}),n)}function Ne(e,t){if(t)return e.slice();var n=new e.constructor(e.length);return e.copy(n),n}function Ce(e){var t=new e.constructor(e.byteLength);return new xi(t).set(new xi(e)),t}function Pe(e){return It(T(e),i,new e.constructor)}function Le(e){var t=new e.constructor(e.source,ci.exec(e));return t.lastIndex=e.lastIndex,t}function Ve(e){return It(R(e),r,new e.constructor)}function ke(e){return er?Object(er.call(e)):{}}function xe(e,t){var n=t?Ce(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Fe(e,t,n,i){n||(n={});for(var r=-1,a=t.length;++r<a;){var o=t[r],s=i?i(n[o],e[o],o,n,e):e[o];te(n,o,s)}return n}function Me(e,t){return ir(e,ar(e),t)}function Ue(e){return Dt((function(t,n){var i=-1,r=n.length,a=r>1?n[r-1]:Tn;for(a="function"==typeof a?(r--,a):Tn,t=Object(t);++i<r;){var o=n[i];o&&e(t,o,i,a)}return t}))}function Ge(e,t){return function(n,i){if(null==n)return n;if(!Lt(n))return e(n,i);for(var r=n.length,a=t?r:-1,o=Object(n);(t?a--:++a<r)&&i(o[a],a,o)!==!1;);return n}}function Be(e){return function(t,n,i){for(var r=-1,a=Object(t),o=i(t),s=o.length;s--;){var u=o[e?s:++r];if(n(a[u],u,a)===!1)break}return t}}function ze(e){return function(){var t=arguments,n=ae(e.prototype),i=e.apply(n,t);return zt(i)?i:n}}function je(e,t,n,i){function r(){for(var t=-1,s=arguments.length,u=-1,c=i.length,l=Array(c+s),d=this&&this!==Ai&&this instanceof r?o:e;++u<c;)l[u]=i[u];for(;s--;)l[u++]=arguments[++t];return d.apply(a?n:this,l)}if("function"!=typeof e)throw new TypeError(Dn);var a=t&On,o=ze(e);return r}function He(e,t,n,i,r,a){var o=-1,s=r&Pn,u=r&Cn,c=e.length,l=t.length;if(c!=l&&!(s&&l>c))return!1;for(var d=!0;++o<c;){var f,g=e[o],p=t[o];if(f!==Tn){if(f)continue;d=!1;break}if(u){if(!be(t,(function(e){return g===e||n(g,e,i,r,a)}))){d=!1;break}}else if(g!==p&&!n(g,p,i,r,a)){d=!1;break}}return d}function Ke(e,t,n,i,r,a,o){switch(n){case Fn:case Mn:return+e==+t;case Un:return e.name==t.name&&e.message==t.message;case jn:return e!=+e?t!=+t:e==+t;case Kn:case qn:return e==t+""}return!1}function Ye(e,t,n,i,r,a){var o=r&Pn,s=sn(e),u=s.length,c=sn(t),l=c.length;if(u!=l&&!o)return!1;for(var d=u;d--;){var f=s[d];if(!(o?f in t:Di.call(t,f)))return!1}for(var g=!0,p=o;++d<u;){f=s[d];var h,_=e[f],v=t[f];if(!(h===Tn?_===v||n(_,v,i,r,a):h)){g=!1;break}p||(p="constructor"==f)}if(g&&!p){var E=e.constructor,m=t.constructor;E!=m&&"constructor"in e&&"constructor"in t&&!("function"==typeof E&&E instanceof E&&"function"==typeof m&&m instanceof m)&&(g=!1)}return g}function qe(e,t){var n=e[t];return Kt(n)?n:Tn}function We(e){return Ni.call(e)}function Xe(e){var t=e.length,n=e.constructor(t);return t&&"string"==typeof e[0]&&Di.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Qe(e){return"function"!=typeof e.constructor||et(e)?{}:ae(Mi(e))}function $e(e,t,n){var i=e.constructor;switch(t){case Qn:return Ce(e);case Fn:case Mn:return new i(+e);case $n:case Jn:case Zn:case ei:case ti:case ni:case ii:case ri:case ai:return xe(e,n);case zn:return Pe(e);case jn:case qn:return new i(e);case Kn:return Le(e);case Yn:return Ve(e);case Wn:return ke(e)}}function Je(e){var t=e?e.length:Tn;return Bt(t)&&(dr(e)||Qt(e)||Pt(e))?p(t,String):null}function Ze(e){var t=typeof e;return"number"==t||"boolean"==t||"string"==t&&"__proto__"!=e||null==e}function et(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||Ri;return e===n}function tt(e){var t=new D(e.e,e.l);return t.u=De(e.u),t}function nt(e){return ce(e,Boolean)}function it(e,t){return e&&e.length?d(e,_e(t,3)):-1}function rt(e){var t=e?e.length:0;return t?le(e,1):[]}function at(e){var t=e?e.length:0;return t?le(e,Ln):[]}function ot(e){return e?e[0]:Tn}function st(e,t,n){var i=e?e.length:0;n="number"==typeof n?n<0?Ki(i+n,0):n:0;for(var r=(n||0)-1,a=t===t;++r<i;){var o=e[r];if(a?o===t:o!==o)return r}return-1}function ut(e){var t=e?e.length:0;return t?e[t-1]:Tn}function ct(e,t,n){var i=e?e.length:0;return t=null==t?0:+t,n=n===Tn?i:+n,i?we(e,t,n):[]}function lt(e){var t=w(e);return t.l=!0,t}function dt(e,t){return t(e),e}function ft(e,t){return t(e)}function gt(){return Oe(this.e,this.u)}function pt(e,t,n){return t=n?Tn:t,ue(e,_e(t))}function ht(e,t){return ce(e,_e(t))}function _t(e,t){return l(e,_e(t),tr)}function vt(e,t){return tr(e,ie(t))}function Et(e,t,n,i){e=Lt(e)?e:gn(e),n=n&&!i?gr(n):0;var r=e.length;return n<0&&(n=Ki(r+n,0)),Qt(e)?n<=r&&e.indexOf(t,n)>-1:!!r&&f(e,t,n)>-1}function mt(e,t){return me(e,_e(t))}function It(e,t,n){return g(e,_e(t),n,arguments.length<3,tr)}function yt(e){return null==e?0:(e=Lt(e)?e:sn(e),e.length)}function St(e,t,n){return t=n?Tn:t,be(e,_e(t))}function At(e,t){var n=0;return t=_e(t),me(me(e,(function(e,i,r){return{value:e,index:n++,criteria:t(e,i,r)}})).sort((function(e,t){return E(e.criteria,t.criteria)||e.index-t.index})),Re("value"))}function Tt(e,t){var n;if("function"!=typeof t)throw new TypeError(Dn);return e=gr(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=Tn),n}}function Rt(e){if("function"!=typeof e)throw new TypeError(Dn);return function(){return!e.apply(this,arguments)}}function wt(e){return Tt(2,e)}function Dt(e,t){if("function"!=typeof e)throw new TypeError(Dn);return t=Ki(t===Tn?e.length-1:gr(t),0),function(){for(var n=arguments,i=-1,r=Ki(n.length-t,0),a=Array(r);++i<r;)a[i]=n[t+i];var o=Array(t+1);for(i=-1;++i<t;)o[i]=n[i];return o[t]=a,e.apply(this,o)}}function bt(e){return zt(e)?dr(e)?De(e):ir(e,sn(e)):e}function Ot(e){return re(e,!0,!0)}function Nt(e,t){return e===t||e!==e&&t!==t}function Ct(e,t){return e>t}function Pt(e){return Vt(e)&&Di.call(e,"callee")&&(!Bi.call(e,"callee")||Ni.call(e)==kn)}function Lt(e){return null!=e&&Bt(rr(e))&&!Gt(e)}function Vt(e){return jt(e)&&Lt(e)}function kt(e){return e===!0||e===!1||jt(e)&&Ni.call(e)==Fn}function xt(e){return jt(e)&&Ni.call(e)==Mn}function Ft(e){if(Lt(e)&&(dr(e)||Qt(e)||Gt(e.splice)||Pt(e)))return!e.length;for(var t in e)if(Di.call(e,t))return!1;return!0}function Mt(e,t){return pe(e,t)}function Ut(e){return"number"==typeof e&&ji(e)}function Gt(e){var t=zt(e)?Ni.call(e):"";return t==Gn||t==Bn}function Bt(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Vn}function zt(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function jt(e){return!!e&&"object"==typeof e}function Ht(e){return qt(e)&&e!=+e}function Kt(e){return null!=e&&(Gt(e)?Pi.test(wi.call(e)):jt(e)&&(y(e)?Pi:li).test(e))}function Yt(e){return null===e}function qt(e){return"number"==typeof e||jt(e)&&Ni.call(e)==jn}function Wt(e){if(!jt(e)||Ni.call(e)!=Hn||y(e))return!1;var t=Mi(e);if(null===t)return!0;var n=t.constructor;return"function"==typeof n&&n instanceof n&&wi.call(n)==Oi}function Xt(e){return zt(e)&&Ni.call(e)==Kn}function Qt(e){return"string"==typeof e||!dr(e)&&jt(e)&&Ni.call(e)==qn}function $t(e){return jt(e)&&Bt(e.length)&&!!fi[Ni.call(e)]}function Jt(e){return e===Tn}function Zt(e,t){return e<t}function en(e){return Lt(e)?e.length?De(e):[]:gn(e)}function tn(e){return ir(e,un(e))}function nn(e){return"string"==typeof e?e:null==e?"":e+""}function rn(e,t){var n=ae(e);return t?hr(n,t):n}function an(e,t){return e&&fe(e,ie(t))}function on(e,t){return null!=e&&Di.call(e,t)}function sn(e){var t=et(e);if(!t&&!Lt(e))return ve(e);var n=Je(e),i=!!n,r=n||[],a=r.length;for(var o in e)!Di.call(e,o)||i&&("length"==o||S(o,a))||t&&"constructor"==o||r.push(o);return r}function un(e){for(var t=-1,n=et(e),i=Ee(e),r=i.length,a=Je(e),o=!!a,s=a||[],u=s.length;++t<r;){var c=i[t];o&&("length"==c||S(c,u))||"constructor"==c&&(n||!Di.call(e,c))||s.push(c)}return s}function cn(e,t){var n={};return t=_e(t,3),fe(e,(function(e,i,r){n[i]=t(e,i,r)})),n}function ln(e,t){return t=_e(t),Te(e,(function(e,n){return!t(e,n)}))}function dn(e,t){return null==e?{}:Te(e,_e(t))}function fn(e,t,n){var i=null==e?Tn:e[t];return i===Tn&&(i=n),Gt(i)?i.call(e):i}function gn(e){return e?_(e,sn(e)):[]}function pn(e){return e=nn(e),e&&si.test(e)?e.replace(oi,m):e}function hn(e){return function(){return e}}function _n(e){return e}function vn(e){return Ie(hr({},e))}function En(e,t,n){var i=sn(t),r=ge(t,i);null!=n||zt(t)&&(r.length||!i.length)||(n=t,t=e,e=this,r=ge(t,sn(t)));var a=!(zt(n)&&"chain"in n)||n.chain,o=Gt(e);return tr(r,(function(n){var i=t[n];e[n]=i,o&&(e.prototype[n]=function(){var t=this.l;if(a||t){var n=e(this.e),r=n.u=De(this.u);return r.push({func:i,args:arguments,thisArg:e}),n.l=t,n}return i.apply(e,u([this.value()],arguments))})})),e}function mn(){return Ai._===this&&(Ai._=Ci),this}function In(){}function yn(e){var t=++bi;return nn(e)+t}function Sn(e){return e&&e.length?c(e,_n,Ct):Tn}function An(e){return e&&e.length?c(e,_n,Zt):Tn}var Tn,Rn="4.6.1",wn=200,Dn="Expected a function",bn="__lodash_hash_undefined__",On=1,Nn=32,Cn=1,Pn=2,Ln=1/0,Vn=9007199254740991,kn="[object Arguments]",xn="[object Array]",Fn="[object Boolean]",Mn="[object Date]",Un="[object Error]",Gn="[object Function]",Bn="[object GeneratorFunction]",zn="[object Map]",jn="[object Number]",Hn="[object Object]",Kn="[object RegExp]",Yn="[object Set]",qn="[object String]",Wn="[object Symbol]",Xn="[object WeakMap]",Qn="[object ArrayBuffer]",$n="[object Float32Array]",Jn="[object Float64Array]",Zn="[object Int8Array]",ei="[object Int16Array]",ti="[object Int32Array]",ni="[object Uint8Array]",ii="[object Uint8ClampedArray]",ri="[object Uint16Array]",ai="[object Uint32Array]",oi=/[&<>"'`]/g,si=RegExp(oi.source),ui=/[\\^$.*+?()[\]{}|]/g,ci=/\w*$/,li=/^\[object .+?Constructor\]$/,di=/^(?:0|[1-9]\d*)$/,fi={};fi[$n]=fi[Jn]=fi[Zn]=fi[ei]=fi[ti]=fi[ni]=fi[ii]=fi[ri]=fi[ai]=!0,fi[kn]=fi[xn]=fi[Qn]=fi[Fn]=fi[Mn]=fi[Un]=fi[Gn]=fi[zn]=fi[jn]=fi[Hn]=fi[Kn]=fi[Yn]=fi[qn]=fi[Xn]=!1;var gi={};gi[kn]=gi[xn]=gi[Qn]=gi[Fn]=gi[Mn]=gi[$n]=gi[Jn]=gi[Zn]=gi[ei]=gi[ti]=gi[zn]=gi[jn]=gi[Hn]=gi[Kn]=gi[Yn]=gi[qn]=gi[Wn]=gi[ni]=gi[ii]=gi[ri]=gi[ai]=!0,gi[Un]=gi[Gn]=gi[Xn]=!1;var pi={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},hi={"function":!0,object:!0},_i=hi[typeof t]&&t&&!t.nodeType?t:Tn,vi=hi[typeof e]&&e&&!e.nodeType?e:Tn,Ei=vi&&vi.exports===_i?_i:Tn,mi=v(_i&&vi&&"object"==typeof n&&n),Ii=v(hi[typeof self]&&self),yi=v(hi[typeof window]&&window),Si=v(hi[typeof this]&&this),Ai=mi||yi!==(Si&&Si.window)&&yi||Ii||Si||Function("return this")(),Ti=Array.prototype,Ri=Object.prototype,wi=Function.prototype.toString,Di=Ri.hasOwnProperty,bi=0,Oi=wi.call(Object),Ni=Ri.toString,Ci=Ai._,Pi=RegExp("^"+wi.call(Di).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Li=Ei?Tn:Tn,Vi=Ai.Reflect,ki=Ai.Symbol,xi=Ai.Uint8Array,Fi=Vi?Vi.enumerate:Tn,Mi=Object.getPrototypeOf,Ui=Object.getOwnPropertySymbols,Gi=Object.create,Bi=Ri.propertyIsEnumerable,zi=Ti.splice,ji=Ai.isFinite,Hi=Object.keys,Ki=Math.max,Yi=qe(Ai,"Map"),qi=qe(Ai,"Set"),Wi=qe(Ai,"WeakMap"),Xi=qe(Object,"create"),Qi=Yi?wi.call(Yi):"",$i=qi?wi.call(qi):"",Ji=Wi?wi.call(Wi):"",Zi=ki?ki.prototype:Tn,er=Zi?Zi.valueOf:Tn,tr=Ge(fe),nr=Be();Fi&&!Bi.call({valueOf:1},"valueOf")&&(Ee=function(e){return A(Fi(e))});var ir=Fe,rr=Re("length"),ar=Ui||function(){return[]};(Yi&&We(new Yi)!=zn||qi&&We(new qi)!=Yn||Wi&&We(new Wi)!=Xn)&&(We=function(e){var t=Ni.call(e),n=t==Hn?e.constructor:null,i="function"==typeof n?wi.call(n):"";if(i)switch(i){case Qi:return zn;case $i:return Yn;case Ji:return Xn}return t});var or=Dt((function(e,t){return dr(e)||(e=null==e?[]:[Object(e)]),t=le(t,1),a(e,t)})),sr=Dt((function(e,t,n){return je(e,On|Nn,t,n)})),ur=Dt((function(e,t){return oe(e,1,t)})),cr=Dt((function(e,t,n){return oe(e,pr(t)||0,n)})),lr=Dt((function(e,t){return je(e,Nn,Tn,t)})),dr=Array.isArray,fr=Li?function(e){return e instanceof Li}:hn(!1),gr=Number,pr=Number,hr=Ue((function(e,t){ir(t,sn(t),e)})),_r=Ue((function(e,t){ir(t,un(t),e)})),vr=Ue((function(e,t,n,i){Fe(t,un(t),e,i)})),Er=Dt((function(e){return e.push(Tn,Z),vr.apply(Tn,e)})),mr=Ue((function(e,t,n){ye(e,t,n)})),Ir=Dt((function(e,t){return null==e?{}:(t=me(le(t,1),String),Ae(e,se(un(e),t)))})),yr=Dt((function(e,t){return null==e?{}:Ae(e,le(t,1))})),Sr=_e;D.prototype=ae(w.prototype),D.prototype.constructor=D,b.prototype=Xi?Xi(null):Ri,L.prototype.clear=V,L.prototype["delete"]=k,L.prototype.get=x,L.prototype.has=F,L.prototype.set=M,U.prototype.push=B,z.prototype.clear=j,z.prototype["delete"]=H,z.prototype.get=K,z.prototype.has=Y,z.prototype.set=q,w.assign=hr,w.assignIn=_r,w.before=Tt,w.bind=sr,w.chain=lt,w.compact=nt,w.concat=or,w.create=rn,w.defaults=Er,w.defer=ur,w.delay=cr,w.filter=ht,w.flatten=rt,w.flattenDeep=at,w.iteratee=Sr,w.keys=sn,w.map=mt,w.mapValues=cn,w.matches=vn,w.merge=mr,w.mixin=En,w.negate=Rt,w.omit=Ir,w.omitBy=ln,w.once=wt,w.partial=lr,w.pick=yr,w.pickBy=dn,w.slice=ct,w.sortBy=At,w.tap=dt,w.thru=ft,w.toArray=en,w.values=gn,w.extend=_r,En(w,w),w.clone=bt,w.cloneDeep=Ot,w.escape=pn,w.every=pt,w.find=_t,w.findIndex=it,w.forEach=vt,w.forOwn=an,w.has=on,w.head=ot,w.identity=_n,w.includes=Et,w.indexOf=st,w.isArguments=Pt,w.isArray=dr,w.isBoolean=kt,w.isDate=xt,w.isEmpty=Ft,w.isEqual=Mt,w.isFinite=Ut,w.isFunction=Gt,w.isNaN=Ht,w.isNull=Yt,w.isNumber=qt,w.isObject=zt,w.isRegExp=Xt,w.isString=Qt,w.isUndefined=Jt,w.last=ut,w.max=Sn,w.min=An,w.noConflict=mn,w.noop=In,w.reduce=It,w.result=fn,w.size=yt,w.some=St,w.uniqueId=yn,w.each=vt,w.first=ot,En(w,(function(){var e={};return fe(w,(function(t,n){Di.call(w.prototype,n)||(e[n]=t)})),e})(),{chain:!1}),w.VERSION=Rn,tr(["pop","join","replace","reverse","split","push","shift","sort","splice","unshift"],(function(e){var t=(/^(?:replace|split)$/.test(e)?String.prototype:Ti)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|join|replace|shift)$/.test(e);w.prototype[e]=function(){var e=arguments;return i&&!this.l?t.apply(this.value(),e):this[n]((function(n){return t.apply(n,e)}))}})),w.prototype.toJSON=w.prototype.valueOf=w.prototype.value=gt,(yi||Ii||{})._=w,_i&&vi&&(Ei&&((vi.exports=w)._=w),_i._=w)}).call(this)}).call(t,n(4)(e),(function(){return this})())}),(function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}}),(function(e,t){t.generate=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}}),(function(e,t,n){var i=n(7),r=n(9),a=n(12).Promise,o=n(16),s=o.get("stores/async_request");t.makeAsyncRequest=function(e,t){var n=s.getPromise(e);if(n)return n;var o,u,c=new a(function(e,t){o=e,u=t});return r.dispatch(i.REGISTER_ASYNC_DEFERRED,{source:e,promise:c,resolver:o,rejecter:u}),t&&t(),c},t.resolveRequest=function(e,t){r.dispatch(i.RESOLVE_DEFERRED,{source:e,resolveWith:t})},t.rejectRequest=function(e,t){r.dispatch(i.REJECT_DEFERRED,{source:e,rejectWith:t})}}),(function(e,t,n){var i=n(8);e.exports=i({LOG:null,SET_LOGLEVEL:null,INITIALIZE_STATE:null,SET_DOMCONTENTLOADED:null,ACTIVATE:null,UPDATE_BEHAVIOR_STORE:null,DATA_LOADED:null,SET_CLIENT_NAME:null,SET_CLIENT_VERSION:null,LOAD_PERSISTED_LAYER_STATES:null,RECORD_GLOBAL_DECISION:null,RECORD_LAYER_DECISION:null,ENSURE_ORIGINAL_PUSHSTATE:null,ENSURE_ORIGINAL_REPLACESTATE:null,SET_VISITOR_ATTRIBUTES:null,SET_VISITOR_ATTRIBUTE_PENDING:null,LOAD_EXISTING_VISITOR_PROFILE:null,SET_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENTS:null,SET_FOREIGN_VISITOR_EVENT_QUEUE:null,SET_VISITOR_ID:null,SET_VISITOR_ID_VIA_API:null,REFRESH_SESSION:null,LOAD_SESSION_STATE:null,UPDATE_VARIATION_ID_MAP:null,MERGE_VARIATION_ID_MAP:null,UPDATE_PREFERRED_LAYER_MAP:null,MERGE_PREFERRED_LAYER_MAP:null,RECORD_LAYER_DECISION_EVENT_ID:null,TRACK_VIEW_ACTIVATED_EVENT:null,REGISTER_ASYNC_DEFERRED:null,RESOLVE_DEFERRED:null,REJECT_DEFERRED:null,REGISTER_PLUGIN:null,ADD_CLEANUP_FN:null,CLEAR_CLEANUP_FN:null,ACTION_EXECUTED:null,REGISTER_ACTION:null,SET_VIEW_ACTIVE_STATE:null,UPDATE_PARSED_VIEW_METADATA:null,UPDATE_USER_SUPPLIED_METADATA:null,REGISTER_VIEWS:null,SET_GLOBAL_TAGS:null,SET_VIEW_BATCHING:null,ATTACH_EVENT_STREAM_PUBLISHERS:null,DETACH_EVENT_STREAM_PUBLISHERS:null,LOAD_DIRECTIVE:null,SET_COOKIE_AGE:null,SET_COOKIE_DOMAIN:null,SET_COOKIE_AUTO_REFRESH:null,XDOMAIN_SET_DEFAULT_FRAME:null,XDOMAIN_ADD_FRAME:null,XDOMAIN_SET_MESSAGE:null,XDOMAIN_ADD_SUBSCRIBER:null,XDOMAIN_SET_CANONICAL_ORIGINS:null,XDOMAIN_SET_DISABLED:null,ADD_EMITTER_HANDLER:null,REMOVE_EMITTER_HANDLER:null,SET_INTEGRATION_SETTINGS:null,
ADD_CHANGE:null,SET_CHANGE_APPLIER:null,REMOVE_ACTION_STATE:null,ANNOUNCE_PENDING_REDIRECT:null,LOAD_REDIRECT_DATA:null,REGISTER_TRACKED_REDIRECT_DATA:null,SET_PENDING_EVENT:null,REMOVE_PENDING_EVENT:null,LOAD_PENDING_EVENTS:null,SANDBOXED_FUNCTIONS_ADDED:null,SET_RUM_DATA:null,RECORD_API_USAGE:null,INITIALIZE_CHANGE_METRICS:null,RECORD_ACTIVATION_TYPE_USAGE:null,RECORD_AUDIENCE_USAGE:null,RECORD_CHANGE_MACROTASK_RATE:null,RECORD_CHANGE_OVERHEATED:null,RECORD_CHANGE_TYPE_USAGE:null,RECORD_DOM_OBSERVATION_OCCURENCE:null,RECORD_INTEGRATION_USAGE:null,RECORD_LAYER_FEATURE_USAGE:null,RECORD_LAYER_POLICY_USAGE:null,RECORD_RECOMMENDATIONS_USAGE:null,RECORD_VIEW_FEATURE_USAGE:null,SET_PERFORMANCE_MARKS_DATA:null,FINALIZE_BATCH_SNAPSHOT:null,REGISTER_PREVIOUS_BATCH:null,REGISTER_TRACKER_VISITOR:null,REGISTER_TRACKER_EVENT:null,REGISTER_TRACKER_DECISION:null,RESET_TRACKER_EVENTS:null,RESET_TRACKER_PREVIOUS_BATCHES:null,RESET_TRACKER_STORE:null,SET_TRACKER_POLLING:null,SET_TRACKER_BATCHING:null,SET_TRACKER_SEND_EVENTS:null,SET_TRACKER_PERSISTABLE_STATE:null,SET_TRACKER_DIRTY:null,UPDATE_TRACKER_VISITOR_ATTRIBUTES:null,SET_UA_DATA:null})}),(function(e,t){"use strict";var n=function(e){var t,n={};if(!(e instanceof Object)||Array.isArray(e))throw new Error("keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=n}),(function(e,t,n){var i=n(10);e.exports=i.create()}),(function(e,t,n){function i(e){e=e||{},this.f={},this.g={},this.I=0,this.S=[],this.A=[]}function r(e,t){return function(){var n=e.indexOf(t);n!==-1&&e.splice(n,1)}}var a=n(2),o=n(11);i.prototype.registerStores=function(e){a.forOwn(e,a.bind((function(e,t){this.f[t]=new o(t,this,e)}),this))},i.prototype.getStore=function(e){return this.f[e]},i.prototype.dispatch=function(e,t){this.dispatchId++,a.each(this.S,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,(function(n){n.T(e,t)})),a.each(this.A,a.bind((function(n){n.call(this,e,t)}),this)),a.forOwn(this.f,a.bind((function(e,t){e.hasChanges()&&this.g[t]&&(e.resetChange(),a.each(this.g[t],(function(t){t(e)})))}),this))},i.prototype.reset=function(){this.g={},a.forOwn(this.f,(function(e,t){e.R()}))},i.prototype.getState=function(){var e={};return a.forOwn(this.f,(function(t,n){e[n]=t.w()})),e},i.prototype.onPreAction=function(e){var t=this.S;return t.push(e),r(t,e)},i.prototype.onPostAction=function(e){var t=this.A;return t.push(e),r(t,e)},i.prototype.D=function(e,t){this.g[e]||(this.g[e]=[]),this.g[e].push(t);var n=this.g[e];return r(n,t)},e.exports={create:function(e){return new i(e)}}}),(function(e,t,n){function i(e,t,n){this.b=e,this.O=t,this.N=0,this.C=!1,this.P={},r.extend(this,n),this.L={},this.initialize&&this.initialize()}var r=n(2);i.prototype.T=function(e,t){var n=this.P[e];n&&"function"==typeof n&&n.call(this,t,e)},i.prototype.w=function(){return r.cloneDeep(this.L)},i.prototype.on=function(e,t){this.P[e]=r.bind(t,this)},i.prototype.observe=function(e){return this.O.D(this.b,e)},i.prototype.emitChange=function(){this.C=!0,this.N++},i.prototype.hasChanges=function(){return this.C},i.prototype.resetChange=function(){this.C=!1},i.prototype.getStateId=function(){return this.N},i.prototype.R=function(){this.reset&&"function"==typeof this.reset&&this.reset(),this.initialize()},e.exports=i}),(function(e,t,n){e.exports=n(13)}),(function(e,t,n){(function(t,i){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!(function(t,n){e.exports=n()})(this,(function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function r(e){return"function"==typeof e}function a(e){X=e}function o(e){Q=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof W?function(){W(f)}:d()}function c(){var e=0,t=new Z(f),n=document.createTextNode("");return t.observe(n,{characterData:!0}),function(){n.data=e=++e%2}}function l(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<q;e+=2){var t=ne[e],n=ne[e+1];t(n),ne[e]=void 0,ne[e+1]=void 0}q=0}function g(){try{var e=n(15);return W=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function p(e,t){var n=arguments,i=this,r=new this.constructor(_);void 0===r[re]&&k(r);var a=i._state;return a?!(function(){var e=n[a-1];Q((function(){return P(a,r,e,i._result)}))})():b(i,r,e,t),r}function h(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var n=new t(_);return T(n,e),n}function _(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function E(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(e){return ue.error=e,ue}}function I(e,t,n,i){try{e.call(t,n,i)}catch(e){return e}}function y(e,t,n){Q((function(e){var i=!1,r=I(n,t,(function(n){i||(i=!0,t!==n?T(e,n):w(e,n))}),(function(t){i||(i=!0,D(e,t))}),"Settle: "+(e._label||" unknown promise"));!i&&r&&(i=!0,D(e,r))}),e)}function S(e,t){t._state===oe?w(e,t._result):t._state===se?D(e,t._result):b(t,void 0,(function(t){return T(e,t)}),(function(t){return D(e,t)}))}function A(e,t,n){t.constructor===e.constructor&&n===p&&t.constructor.resolve===h?S(e,t):n===ue?(D(e,ue.error),ue.error=null):void 0===n?w(e,t):r(n)?y(e,t,n):w(e,t)}function T(t,n){t===n?D(t,v()):e(n)?A(t,n,m(n)):w(t,n)}function R(e){e._onerror&&e._onerror(e._result),O(e)}function w(e,t){e._state===ae&&(e._result=t,e._state=oe,0!==e._subscribers.length&&Q(O,e))}function D(e,t){e._state===ae&&(e._state=se,e._result=t,Q(R,e))}function b(e,t,n,i){var r=e._subscribers,a=r.length;e._onerror=null,r[a]=t,r[a+oe]=n,r[a+se]=i,0===a&&e._state&&Q(O,e)}function O(e){var t=e._subscribers,n=e._state;if(0!==t.length){for(var i=void 0,r=void 0,a=e._result,o=0;o<t.length;o+=3)i=t[o],r=t[o+n],i?P(n,i,r,a):r(a);e._subscribers.length=0}}function N(){this.error=null}function C(e,t){try{return e(t)}catch(e){return ce.error=e,ce}}function P(e,t,n,i){var a=r(n),o=void 0,s=void 0,u=void 0,c=void 0;if(a){if(o=C(n,i),o===ce?(c=!0,s=o.error,o.error=null):u=!0,t===o)return void D(t,E())}else o=i,u=!0;t._state!==ae||(a&&u?T(t,o):c?D(t,s):e===oe?w(t,o):e===se&&D(t,o))}function L(e,t){try{t((function(t){T(e,t)}),(function(t){D(e,t)}))}catch(t){D(e,t)}}function V(){return le++}function k(e){e[re]=le++,e._state=void 0,e._result=void 0,e._subscribers=[]}function x(e,t){this._instanceConstructor=e,this.promise=new e(_),this.promise[re]||k(this.promise),Y(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?w(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&w(this.promise,this._result))):D(this.promise,F())}function F(){return new Error("Array Methods must be provided an Array")}function M(e){return new x(this,e).promise}function U(e){var t=this;return new t(Y(e)?function(n,i){for(var r=e.length,a=0;a<r;a++)t.resolve(e[a]).then(n,i)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function G(e){var t=this,n=new t(_);return D(n,e),n}function B(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function j(e){this[re]=V(),this._result=this._state=void 0,this._subscribers=[],_!==e&&("function"!=typeof e&&B(),this instanceof j?L(this,e):z())}function H(){var e=void 0;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===n&&!t.cast)return}e.Promise=j}var K=void 0;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var Y=K,q=0,W=void 0,X=void 0,Q=function(e,t){ne[q]=e,ne[q+1]=t,q+=2,2===q&&(X?X(f):ie())},$="undefined"!=typeof window?window:void 0,J=$||{},Z=J.MutationObserver||J.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3),ie=void 0;ie=ee?s():Z?c():te?l():void 0===$?g():d();var re=Math.random().toString(36).substring(16),ae=void 0,oe=1,se=2,ue=new N,ce=new N,le=0;return x.prototype._enumerate=function(){for(var e=this.length,t=this._input,n=0;this._state===ae&&n<e;n++)this._eachEntry(t[n],n)},x.prototype._eachEntry=function(e,t){var n=this._instanceConstructor,i=n.resolve;if(i===h){var r=m(e);if(r===p&&e._state!==ae)this._settledAt(e._state,t,e._result);else if("function"!=typeof r)this._remaining--,this._result[t]=e;else if(n===j){var a=new n(_);A(a,e,r),this._willSettleAt(a,t)}else this._willSettleAt(new n(function(t){return t(e)}),t)}else this._willSettleAt(i(e),t)},x.prototype._settledAt=function(e,t,n){var i=this.promise;i._state===ae&&(this._remaining--,e===se?D(i,n):this._result[t]=n),0===this._remaining&&w(i,this._result)},x.prototype._willSettleAt=function(e,t){var n=this;b(e,void 0,(function(e){return n._settledAt(oe,t,e)}),(function(e){return n._settledAt(se,t,e)}))},j.all=M,j.race=U,j.resolve=h,j.reject=G,j._setScheduler=a,j._setAsap=o,j._asap=Q,j.prototype={constructor:j,then:p,"catch":function(e){return this.then(null,e)}},j.polyfill=H,j.Promise=j,j}))}).call(t,n(14),(function(){return this})())}),(function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function o(){h&&g&&(h=!1,g.length?p=g.concat(p):_=-1,p.length&&s())}function s(){if(!h){var e=r(o);h=!0;for(var t=p.length;t;){for(g=p,p=[];++_<t;)g&&g[_].run();_=-1,t=p.length}g=null,h=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,d,f=e.exports={};!(function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}})();var g,p=[],h=!1,_=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||h||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}}),(function(e,t){}),(function(e,t,n){var i=n(2),r=n(17),a=n(9),o=n(18),s=r.create(),u={action_data:n(21),async_request:n(27),audience_data:n(28),change_data:n(29),cleanup:n(30),client_metadata:n(31),cookie_options:n(33),event_data:n(34),event_emitter:n(35),dimension_data:n(36),directive:n(37),global:n(38),global_state:n(39),history:n(40),integration_settings:n(42),layer:n(43),layer_data:n(44),log:n(46),observed_redirect:n(47),pending_events:n(48),performance:n(49),plugins:n(50),provider_status:n(51),pending_redirect:n(52),rum:n(53),sandbox:n(54),session:n(55),tracker_optimizely:n(56),ua_data:n(57),view:n(58),view_data:n(59),visitor:n(60),visitor_attribute_entity:n(61),visitor_events:n(62),visitor_events_manager:n(67),visitor_id:n(68),visitor_bucketing:n(69),xdomain:n(70)};u["group_data"]=n(71),a.registerStores(u),i.forOwn(u,(function(e,t){s.register("stores/"+t,a.getStore(t))})),s.register("core/plugins/matchers/key_value",o),e.exports=s}),(function(e,t,n){function i(){this.V={}}var r=n(2);i.prototype.register=function(e,t){if(1===arguments.length){var n=this;return void r.each(e,(function(e,t){n.register(t,e)}))}if(this.V[e])throw new Error("Module already registered for: "+e);this.V[e]=t},i.prototype.get=function(e){return this.V[e]},i.prototype.getModuleKeys=function(){var e=this.V;return r.keys(e)},i.prototype.evaluate=function(e){var t=e.length,n=e.slice(0,t-1),i=e[t-1];if("function"!=typeof i)throw new Error("Evaluate must take a function as last element in array");var a=r.map(n,r.bind(this.get,this));return i.apply(null,a)},i.prototype.reset=function(){this.V={}},e.exports={create:function(){return new i}}}),(function(e,t,n){var i=n(2),r=n(19).getFieldValue,a=n(20);e.exports=function(e,t){var n=r(e,t.name.split("."));return i.isArray(n)?i.some(n,i.partial(a.hasMatch,t.value,t.match)):a.hasMatch(t.value,t.match,n)}}),(function(e,t,n){var i=n(2);t.getFieldValue=function(e,t){i.isArray(t)||(t=[t]);for(var n=e,r=0;r<t.length;r++){var a=t[r];if(!i.isObject(n)||!n.hasOwnProperty(a))return;n=n[a]}return n},t.setFieldValue=function(e,t,n){if(!i.isArray(t)||i.isEmpty(t))throw new Error("Attempted to set an invalid key path: "+t);for(var r=e,a=0;a<t.length-1;a++){var o=t[a];i.isObject(r[o])||(r[o]={}),r=r[o]}r[t[t.length-1]]=n}}),(function(e,t,n){var i=n(2);t.hasMatch=function(e,t,n){var r=!i.isUndefined(n)&&null!==n,a=!i.isUndefined(e)&&null!==e,o=t||(a?"exact":"exists");switch(o){case"exists":return r;case"exact":return r&&String(n)===e;case"substring":return r&&String(n).indexOf(e)>-1;case"regex":try{if(a&&r){var s=new RegExp(e);return s.test(String(n))}return!1}catch(e){}return!1;case"range":var u=e.split(":"),c=parseFloat(u[0]),l=parseFloat(u[1]),d=parseFloat(n);return d>=c&&d<=l;default:return!1}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(23);e.exports={initialize:function(){this.L={actions:{},actionState:{}},this.on(r.DATA_LOADED,this.k),this.on(r.ACTION_EXECUTED,this.F),this.on(r.SET_CHANGE_APPLIER,this.M),this.on(r.REMOVE_ACTION_STATE,this.U)},k:function(e){var t=this;i.isEmpty(e.data.layers)||(i.each(e.data.layers,(function(e){var n;if(e.changes){var r="layerId:"+e.id;n={id:r,layerId:e.id,changeSet:e.changes,type:"layer"},a.deepFreeze(n),t.L.actions[r]=n}i.each(e.experiments,(function(r){if(r.changes){var o="experimentId:"+r.id;n={id:o,layerId:e.id,experimentId:r.id,changeSet:r.changes,type:"experiment"},a.deepFreeze(n),t.L.actions[o]=n}i.each(r.variations,(function(o){i.each(o.actions,(function(i){var s=i.pageId||i.viewId,u=r.id+":"+o.id+":"+s;n={id:u,layerId:e.id,experimentId:r.id,variationId:o.id,pageId:s,changeSet:i.changes,type:"variation"},a.deepFreeze(n),t.L.actions[u]=n}))}))}))})),this.emitChange())},F:function(e){var t=e.actionId;i.isUndefined(t)||this.L.actionState[t]||(this.L.actionState[t]={})},M:function(e){var t=e.actionId,n=e.changeId;return this.L.actionState[t]?void(this.L.actionState[t][n]=e.changeApplier):void o.warn("Action Data / Attempted to set changeApplier for inactive action: ",t)},U:function(e){delete this.L.actionState[e.actionId]},get:function(e){return a.safeReference(this.L.actions[e])},getActionState:function(e){return a.safeReference(this.L.actionState[e])},getByChangeId:function(e){return i.find(this.L.actions,{changeSet:[{id:e}]})},getAllActionIdsByPageId:function(e){return i.map(i.filter(this.L.actions,{pageId:e}),"id")},getChangeApplier:function(e,t){var n=this.L.actionState[t];if(n)return n[e]},getExperimentVariationActions:function(e,t){return a.safeReference(i.filter(this.L.actions,{experimentId:e,variationId:t}))},getLayerActions:function(e){return a.safeReference(i.filter(this.L.actions,{id:"layerId:"+e}))},getExperimentActions:function(e){return a.safeReference(i.filter(this.L.actions,{id:"experimentId:"+e}))},getAll:function(){return a.safeReference(i.values(this.L.actions))}}}),(function(e,t,n){var i=n(2),r=!1;t.deepFreeze=function e(t){r&&i.isObject(t)&&!i.isFunction(t)&&(i.forOwn(t,e),Object.freeze(t))},t.safeReference=function e(t){return r?!i.isObject(t)||i.isFunction(t)||Object.isFrozen(t)?t:i.isArray(t)?i.map(t,e):i.reduce(t,(function(t,n,i){return t[i]=e(n),t}),{}):i.cloneDeep(t)}}),(function(e,t,n){function i(){this.logLevel=null,this.logMatch=null,this.logs=[],this.timebase=o.now()}var r=n(2),a=n(7),o=n(24),s=n(25),u=n(9),c=n(26);i.prototype.G=function(){return!r.isNull(this.logLevel)},i.prototype.setLogLevel=function(e){var t=this.B(e);null===t?console.error("Unknown log level: "+e):this.logLevel!==t&&(this.log("Setting log level to "+t),this.logLevel=t,this.flush())},i.prototype.setLogMatcher=function(e){r.isString(e)?this.logMatcher=e:this.logMatcher="",this.logGroup=0},i.prototype.shouldLog=function(e){return this.G()&&this.logLevel>=e},i.prototype.matchesLogMessage=function(e,t){var n=this.logMatcher;if(!this.logMatcher)return!0;if(this.logGroup)return"GROUPSTART"===e?this.logGroup++:"GROUPEND"===e&&this.logGroup--,!0;var i=r.some(t,(function(e){if(!r.isString(e))try{e=c.stringify(e)}catch(e){}return r.isString(e)&&r.includes(e,n)}));return i&&"GROUPSTART"===e&&this.logGroup++,i},i.prototype.storeLog=function(e,t){var n={logLevel:e,logMessage:t};u.dispatch(a.LOG,n)},i.prototype.flush=function(){var e=n(16),t=e.get("stores/log");this.logGroup=0;var i=t.getLogs();r.each(i,r.bind((function(e){this.z(e.logLevel,e.logMessage,!0)}),this))},i.prototype.z=function(e,t,n){var i,a=e;if(console)switch(e){case"GROUPSTART":i=console.groupCollapsed,a=s.LogLevel.DEBUG;break;case"GROUPEND":i=console.groupEnd,a=s.LogLevel.DEBUG;break;case s.LogLevel.ERROR:i=console.error;break;case s.LogLevel.WARN:i=console.warn;break;case s.LogLevel.DEBUG:i=console.debug;break;default:i=console.log}try{n||this.G()&&!this.shouldLog(a)||(r.isArray(t)&&r.isString(t[0])&&(t=this.j(t)),this.storeLog(e,t)),i&&this.shouldLog(a)&&this.matchesLogMessage(e,t)&&i.apply(console,t)}catch(e){console&&(console.error?console.error(e):console.log(e))}},i.prototype.debug=function(){this.z(s.LogLevel.DEBUG,[].slice.call(arguments))},i.prototype.log=function(){this.z(s.LogLevel.INFO,[].slice.call(arguments))},i.prototype.logAlways=function(){var e=this.j([].slice.call(arguments));console&&console.log&&console.log.apply&&console.log.apply(console,e),this.storeLog(s.LogLevel.INFO,e)},i.prototype.warn=function(){this.z(s.LogLevel.WARN,[].slice.call(arguments))},i.prototype.error=function(e){var t=[].slice.call(arguments);1===t.length&&e.stack?(this.z(s.LogLevel.ERROR,[this.H(),e]),this.z(s.LogLevel.INFO,[e.stack])):this.z(s.LogLevel.ERROR,t)},i.prototype.groupCollapsed=function(){this.z("GROUPSTART",[].slice.call(arguments))},i.prototype.groupEnd=function(){this.z("GROUPEND",[].slice.call(arguments))},i.prototype.j=function(e){var t=this.H().toString();return t.length<6&&(t=("     "+t).slice(-6)),[t+"| Optly / "+e[0]].concat(e.slice(1))},i.prototype.H=function(){return this.timebase?o.now()-this.timebase:0},i.prototype.B=function(e){return e&&(e=e.toUpperCase(),"TRUE"===e&&(e="INFO"),"FALSE"===e&&(e="OFF"),"ALL"===e&&(e="DEBUG"),!r.isUndefined(s.LogLevel[e]))?s.LogLevel[e]:null},e.exports=new i}),(function(e,t){t.now=function(){return+new Date}}),(function(e,t,n){var i=n(2),r=n(8);t.COOKIES={OPT_OUT:"optimizelyOptOut",PREVIEW:"optimizelyPreview",REDIRECT:"optimizelyRedirectData",SESSION_STATE:"optimizelySessionState",TOKEN:"optimizelyToken",VISITOR_ID:"optimizelyEndUserId",VISITOR_UUID:"optimizelyPPID"},t.LayerActivationTypes={CONDITIONAL:"conditional",IMMEDIATE:"immediate",MANUAL:"manual",READY:"ready",TIMEOUT:"timeout"},t.LogLevel={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4},t.Lifecycle=r({preActivate:null,postVisitorProfileLoad:null,postViewsActivated:null,postActivate:null}),t.ViewActivationTypes={immediate:"immediate",manual:"manual",callback:"callback",polling:"polling",URLChanged:"url_changed",DOMChanged:"dom_changed"},t.StorageKeys={PENDING_EVENTS:"pending_events",RELAYED_EVENTS:"relayed_events"},t.PluginTypes=r({visitorProfileProviders:null,viewProviders:null,audienceMatchers:null,viewMatchers:null,analyticsTrackers:null,viewTagLocators:null,userFeatureDefs:null,apiModules:null,changeAppliers:null,deciders:null,eventImplementations:null,viewTriggers:null}),t.ResourceTimingAttributes=r({connectStart:null,connectEnd:null,decodedBodySize:null,domainLookupStart:null,domainLookupEnd:null,duration:null,encodedBodySize:null,fetchStart:null,requestStart:null,responseStart:null,responseEnd:null,secureConnectionStart:null,startTime:null,transferSize:null,serverTiming:null}),t.RUMPerformanceTimingAttributes=r({blockTime:null}),t.AttributionTypes=r({FIRST_TOUCH:null,LAST_TOUCH:null}),t.SandboxedFunctions=r({XMLHttpRequest:null}),t.PerformanceData=r({performance_marks:null,resource_timing:null,performance_timing:null}),t.PerformanceCounters=r({mutation_observer_invocation:null,polling_invocation:null,match_selector_invocation:null}),t.VisitorStorageKeys={EVENTS:"events",EVENT_QUEUE:"event_queue",LAYER_MAP:"layer_map",LAYER_STATES:"layer_states",SESSION_STATE:"session_state",VISITOR_PROFILE:"visitor_profile",VARIATION_MAP:"variation_map",TRACKER_OPTIMIZELY:"tracker_optimizely"},t.AllStorageKeys=i.assign({},t.StorageKeys,t.VisitorStorageKeys),t.ListTargetingKeyTypes={COOKIE:"c",QUERY:"q",JS_VARIABLE:"j"}}),(function(e,t,n){function i(e){var t=[Array.prototype],n=[];r.each(t,(function(e){r.isUndefined(e.toJSON)||(n.push(e.toJSON),delete e.toJSON)}));var i,a;try{i=e()}catch(e){a=e}finally{r.each(n,(function(e,n){t[n].toJSON=e}))}if(a)throw a;return i}var r=n(2);t.stringify=function(){return i(r.bind((function(){return JSON.stringify.apply(null,this)}),arguments))},t.parse=JSON.parse}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={},this.on(i.REGISTER_ASYNC_DEFERRED,this.K),this.on(i.RESOLVE_DEFERRED,this.Y),this.on(i.REJECT_DEFERRED,this.q)},getRequest:function(e){return this.L[e]},getPromise:function(e){var t=this.getRequest(e);if(t)return t.promise},K:function(e){this.L[e.source]={promise:e.promise,resolver:e.resolver,rejecter:e.rejecter}},Y:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);t.resolver(e.resolveWith)},q:function(e){var t=this.getRequest(e.source);if(!t)throw new Error("No request registered for source: "+e.source);if(!t.rejecter)throw new Error("No rejecter registered for source: "+e.source);t.rejecter(e.rejectWith)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.k)},k:function(e){i.isEmpty(e.data.audiences)||(i.each(e.data.audiences,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.L))},getAudiencesMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])},getAudienceName:function(e){var t=i.find(i.values(this.L),{id:e});return t.name||"Aud "+e}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.ADD_CHANGE,this.W),this.on(r.DATA_LOADED,this.k)},getChange:function(e){return this.L[e]},k:function(e){i.isEmpty(e.data.changes)||i.each(e.data.changes,i.bind(this.W,this))},W:function(e){a.deepFreeze(e),this.L[e.id]=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.L={},i.each(a.Lifecycle,i.bind((function(e){this.L[e]=[]}),this)),this.on(r.ADD_CLEANUP_FN,this.X),this.on(r.CLEAR_CLEANUP_FN,this.Q)},getCleanupFns:function(e){return i.cloneDeep(this.L[e])},X:function(e){this.L[e.lifecycle].push(e.cleanupFn),this.emitChange()},Q:function(e){var t=this.L[e.lifecycle];if(e.cleanupFn){var n=t.indexOf(e.cleanupFn);n>-1&&(t.splice(n,1),this.emitChange())}else this.L[e.lifecycle]=[],this.emitChange()}}}),(function(e,t,n){var i=n(7),r=n(32);e.exports={initialize:function(){this.L={name:r.NAME,version:r.VERSION},this.on(i.SET_CLIENT_NAME,this.$),this.on(i.SET_CLIENT_VERSION,this.J)},getClientName:function(){return this.L.name},getClientVersion:function(){return this.L.version},$:function(e){e&&(this.L.name=e),this.emitChange()},J:function(e){e&&(this.L.version=e),this.emitChange()}}}),(function(e,t,n){t.VERSION="0.139.0",t.NAME="js"}),(function(e,t,n){var i=n(7),r=15552e3,a=!0;e.exports={initialize:function(){this.L={currentDomain:null,defaultAgeSeconds:r,autoRefresh:a},this.on(i.SET_COOKIE_DOMAIN,this.Z),this.on(i.SET_COOKIE_AGE,this.ee),this.on(i.SET_COOKIE_AUTO_REFRESH,this.te)},getCurrentDomain:function(){return this.L.currentDomain},getDefaultAgeInSeconds:function(){return this.L.defaultAgeSeconds},getAutoRefresh:function(){return this.L.autoRefresh},Z:function(e){this.L.currentDomain=e,this.emitChange()},ee:function(e){this.L.defaultAgeSeconds=e,this.emitChange()},te:function(e){this.L.autoRefresh=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.k)},getAll:function(){return a.safeReference(i.values(this.L))},getEventsMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.L),{apiName:e}))},getByPageId:function(e){return a.safeReference(i.filter(this.L,{pageId:e}))},k:function(e){i.isEmpty(e.data.events)||(i.each(e.data.events,i.bind((function(e){e.pageId||(e.pageId=e.viewId),a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){function i(e){var t=[];return e&&r.isObject(e)?(e.type&&t.push(e.type),t.push(o),e.type&&e.name&&t.push(e.name),t.join("")):o}var r=n(2),a=n(7),o="|";e.exports={initialize:function(){this.L={handlers:{}},this.on(a.ADD_EMITTER_HANDLER,this.ne),this.on(a.REMOVE_EMITTER_HANDLER,this.re)},getHandlers:function(e,t){var n=[null,{type:e.type},{type:e.type,name:e.name}],a=[];return r.each(n,r.bind((function(e){var t=i(e),n=this.L.handlers[t];n&&(a=a.concat(n))}),this)),t&&(a=r.filter(a,(function(e){return!e.publicOnly}))),a},ne:function(e){var t=i(e.filter);this.L.handlers[t]||(this.L.handlers[t]=[]),this.L.handlers[t].push({handler:e.handler,token:e.token,publicOnly:!!e.publicOnly,emitErrors:!!e.emitErrors}),this.emitChange()},re:function(e){var t=!1,n=e.token;r.forOwn(this.L.handlers,r.bind((function(e,i){var a=r.filter(e,(function(e){return e.token!==n}));a.length!==e.length&&(t=!0,this.L.handlers[i]=a)}),this)),t&&this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.k)},k:function(e){i.isEmpty(e.data.dimensions)||(i.each(e.data.dimensions,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.L))},getById:function(e){return a.safeReference(this.L[e])},getByApiName:function(e){return a.safeReference(i.find(i.values(this.L),{apiName:e}))}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={disabled:!1,forceAudienceIds:[],forceVariationIds:[],alreadyInitialized:!1,mutationObserverAPISupported:!1,isEditor:!1,isPreview:!1,isLegacyPreview:!1,isSlave:!1,previewLayerIds:[],projectToken:null,shouldOptOut:!1,trackingDisabled:!1,isRunningInV2Editor:!1,isRunningInDesktopApp:!1,forceTracking:!1},this.on(r.LOAD_DIRECTIVE,this.ae)},getAll:function(){return i.cloneDeep(this.L)},conflictInObservingChanges:function(){return!this.L.mutationObserverAPISupported},isDisabled:function(){return this.L.disabled},isEditor:function(){return this.L.isEditor},clientHasAlreadyInitialized:function(){return this.L.alreadyInitialized},getForceAudienceIds:function(){return this.L.forceAudienceIds},getForceVariationIds:function(){return this.L.forceVariationIds},getPreviewLayerIds:function(){return this.L.previewLayerIds},getProjectToken:function(){return this.L.projectToken},getForceTracking:function(){return this.L.forceTracking},shouldActivate:function(){return!this.L.isEditor&&!this.isDisabled()},shouldBootstrapDataForPreview:function(){return this.L.isPreview},shouldBootstrapDataForEditor:function(){return this.L.isEditor},shouldInitialize:function(){return!(this.shouldLoadPreview()||this.isDisabled()||this.getProjectToken())},shouldLoadPreview:function(){return!(this.L.isPreview||this.L.isLegacyPreview||!this.getProjectToken()||this.L.isEditor)},shouldBailForDesktopApp:function(){return!this.L.isEditor&&this.L.isRunningInDesktopApp},shouldLoadInnie:function(){return!this.L.isSlave&&!this.L.isEditor&&this.L.isRunningInV2Editor},shouldObserveChangesIndefinitely:function(){return this.L.mutationObserverAPISupported},shouldObserveChangesUntilTimeout:function(){return!this.shouldObserveChangesIndefinitely()},shouldOptOut:function(){return this.L.shouldOptOut},shouldSendTrackingData:function(){return!this.L.trackingDisabled&&(!!this.L.forceTracking||!this.L.isPreview&&i.isEmpty(this.getForceVariationIds())&&i.isEmpty(this.getForceAudienceIds()))},isSlave:function(){return this.L.isSlave},isRunningInDesktopApp:function(){return this.L.isRunningInDesktopApp},isRunningInV2Editor:function(){return this.L.isRunningInV2Editor},ae:function(e){i.extend(this.L,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={holdback:0,isGlobalHoldback:null,listTargetingKeys:[],revision:null,projectId:null,accountId:null,namespace:null,activationId:null,activationTimestamp:null,dcpServiceId:null,dcpKeyfieldLocators:[],recommenderServices:[],anonymizeIP:null,projectJS:null,snippetId:null,plugins:[],domContentLoaded:!1,experimental:{}},this.on(r.DATA_LOADED,this.oe),this.on(r.ACTIVATE,this.se),this.on(r.RECORD_GLOBAL_DECISION,this.ue),this.on(r.SET_DOMCONTENTLOADED,this.ce)},getRevision:function(){return this.L.revision},getGlobalHoldbackThreshold:function(){return this.L.holdback},getProjectId:function(){return this.L.projectId},getSnippetId:function(){return this.L.snippetId},getAccountId:function(){return this.L.accountId},getNamespace:function(){return this.L.namespace},getActivationId:function(){return this.L.activationId},getActivationTimestamp:function(){return this.L.activationTimestamp},getAnonymizeIP:function(){return this.L.anonymizeIP},isGlobalHoldback:function(){return!!this.L.isGlobalHoldback},getListTargetingKeys:function(){return this.L.listTargetingKeys.slice()},getDCPServiceId:function(){return this.L.dcpServiceId},getDCPKeyfieldLocators:function(){return this.L.dcpKeyfieldLocators},getRecommenderServices:function(){return this.L.recommenderServices},getProjectJS:function(){return this.L.projectJS},getPlugins:function(){return this.L.plugins},getExperimental:function(){return a.safeReference(this.L.experimental)},domContentLoadedHasFired:function(){return this.L.domContentLoaded},se:function(e){this.L.activationId=e.activationId,this.L.activationTimestamp=e.activationTimestamp,this.L.isGlobalHoldback=null},ue:function(e){var t=e.isGlobalHoldback;if(null!==this.L.isGlobalHoldback&&this.L.isGlobalHoldback!==t)throw new Error("Attempted to change already set global holdback!");this.L.isGlobalHoldback=t,this.emitChange()},oe:function(e){var t=i.pick(e.data,["holdback","accountId","projectId","snippetId","namespace","revision","listTargetingKeys","dcpServiceId","dcpKeyfieldLocators","recommenderServices","anonymizeIP","plugins","projectJS","experimental"]);if(0!==i.keys(t).length){var n={listTargetingKeys:[],dcpServiceId:null,dcpKeyfieldLocators:[]};i.extend(this.L,n,t),this.emitChange()}},ce:function(){this.L.domContentLoaded=!0,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={effectiveReferrer:null,effectiveVariationId:null},this.on(r.INITIALIZE_STATE,this.le)},getEffectiveReferrer:function(){return this.L.effectiveReferrer},getEffectiveVariationId:function(){return this.L.effectiveVariationId},le:function(e){i.isUndefined(e.effectiveReferrer)||(this.L.effectiveReferrer=e.effectiveReferrer),i.isUndefined(e.effectiveVariationId)||(this.L.effectiveVariationId=e.effectiveVariationId),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(41);e.exports={initialize:function(){this.L={originalPushState:null,originalReplaceState:null},this.on(r.ENSURE_ORIGINAL_PUSHSTATE,this.de),this.on(r.ENSURE_ORIGINAL_REPLACESTATE,this.fe)},getOriginalPushState:function(){return this.L.originalPushState},getOriginalReplaceState:function(){return this.L.originalReplaceState},de:function(){this.L.originalPushState||(this.L.originalPushState=i.bind(a.getGlobal("history").pushState,a.getGlobal("history")))},fe:function(){this.L.originalReplaceState||(this.L.originalReplaceState=i.bind(a.getGlobal("history").replaceState,a.getGlobal("history")))}}}),(function(e,t,n){var i=n(2),r=n(23);t.getUserAgent=function(){return window.navigator.userAgent},t.getLocationSearch=function(){return window.location.search},t.getNavigatorLanguage=function(){return window.navigator.language||window.navigator.userLanguage},t.getHref=function(){return window.location.href},t.getLocation=function(){return window.location},t.setLocation=function(e){window.location.replace(e)},t.setGlobal=function(e,t){window[e]=t},t.getGlobal=function(e){return window[e]},t.addEventListener=function(){return window.addEventListener.apply(window,arguments)},t.removeEventListener=function(){return window.removeEventListener.apply(window,arguments)},t.isMutationObserverAPISupported=function(){return!i.isUndefined(window.MutationObserver)},t.alert=function(e){alert(e)},t.setTimeout=function(e,t){return setTimeout((function(){try{e()}catch(e){r.warn("Deferred function threw error:",e)}}),t)},t.setInterval=function(e,t){return setInterval((function(){try{e()}catch(e){r.warn("Polling function threw error:",e)}}),t)}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.k),this.on(r.SET_INTEGRATION_SETTINGS,this.ge)},k:function(e){i.isEmpty(e.data.integrationSettings)||(i.each(e.data.integrationSettings,i.bind((function(e){this.L[e.id]=e}),this)),this.emitChange())},ge:function(e){var t=this.L[e.id];t?i.extend(t,e):this.L[e.id]=e},getAll:function(){return i.cloneDeep(i.values(this.L))},get:function(e){return i.cloneDeep(this.L[e])},getReference:function(e){return this.L[e]}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o="*";e.exports={initialize:function(){this.L={},this.on(r.LOAD_PERSISTED_LAYER_STATES,this.pe),this.on(r.RECORD_LAYER_DECISION,this.he),this.on(r.RECORD_LAYER_DECISION_EVENT_ID,this._e)},getLayerState:function(e,t){if(this.L[e]){var n=this.L[e];if(i.keys(n).length>1&&!t)throw new Error("View Id must be specified when more than one layerState for layer.");return t?i.cloneDeep(i.find(n,{pageId:t})):i.cloneDeep(n[o])}},getLayerStates:function(e){var t=[];for(var n in this.L)i.forEach(this.L[n],(function(n){(i.isUndefined(e)||n.namespace===e)&&t.push(i.cloneDeep(n))}));return t},getLayerStatesForAnalytics:function(){var e=[];for(var t in this.L)i.forEach(this.L[t],(function(t){e.push(i.pick(t,["layerId","decision","decisionEventId"]))}));return e},pe:function(e){e.merge||(this.L={}),i.each(e.layerStates,i.bind((function(e){var t=e.layerId;e.pageId||(e.pageId=e.viewId);var n=e.pageId||o,r=this.L[t];if(i.isUndefined(r))this.L[t]={},this.L[t][n]=e;else{var a=r[n];(!a||e.decisionTimestamp>(a.decisionTimestamp||0))&&(this.L[t][n]=e);
}}),this)),this.emitChange()},he:function(e){var t={layerId:e.layerId,revision:e.revision,namespace:e.namespace,pageId:e.pageId,decisionTicket:e.decisionTicket,decision:e.decision,decisionActivationId:e.activationId,decisionTimestamp:e.timestamp,decisionEventId:null},n=this.L[e.layerId]||{};e.pageId?(delete n[o],n[e.pageId]=t):(n={},n[o]=t),this.L[e.layerId]=n,this.emitChange()},_e:function(e){var t=e.layerId,n=e.pageId||o;return this.L[t]?this.L[t][n]?(this.L[t][n].decisionEventId=e.decisionId,void this.emitChange()):void a.warn("Not recording decision event: Layer state not found for view",n):void a.warn("Not recording decision event: Campaign not registered",t)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22),o=n(45);e.exports={initialize:function(){this.L={layers:{},experiments:{},variations:{}},this.on(r.DATA_LOADED,this.k)},k:function(e){if(!i.isEmpty(e.data.layers)){var t=this;i.each(e.data.layers,(function(e){i.each(e.experiments,(function(n){e.pageIds||(e.pageIds=e.viewIds),n.campaignName||o.isSingleExperimentPolicy(e.policy)?o.isSingleExperimentPolicy(e.policy)&&e.groupId&&(n.groupId=e.groupId):n.campaignName=e.name,i.each(n.variations,(function(e){i.each(e.actions,(function(e){e.pageId||(e.pageId=e.viewId)})),t.L.variations[e.id]=e})),t.L.experiments[n.id]=n})),a.deepFreeze(e),t.L.layers[e.id]=e})),this.emitChange()}},getAll:function(){return a.safeReference(i.values(this.L.layers))},getCampaignsMap:function(){return a.safeReference(this.L.layers)},getExperimentsMap:function(){return a.safeReference(this.L.experiments)},getVariationsMap:function(){return a.safeReference(this.L.variations)},getCount:function(){return i.keys(this.L.layers).length},getAllByPageIds:function(e){return a.safeReference(i.filter(this.L.layers,(function(t){return i.some(e,i.partial(i.includes,t.pageIds))})))},get:function(e){return a.safeReference(this.L.layers[e])},getLayerByExperimentId:function(e){var t=i.find(this.L.layers,(function(t){return i.find(t.experiments,{id:e})}));return a.safeReference(t)},getExperimentByVariationId:function(e){var t;return i.some(this.L.layers,(function(n){return i.some(n.experiments,(function(n){return i.find(n.variations,{id:e})&&(t=n),t})),t})),a.safeReference(t)}}}),(function(e,t){var n="single_experiment",i="multivariate";t.isSingleExperimentPolicy=function(e){return e===n||e===i}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={logs:[]},this.on(i.LOG,this.ve)},getLogs:function(){return this.L.logs},ve:function(e){this.L.logs.push(e),this.emitChange()},w:function(){return this.L.logs.slice()}}}),(function(e,t,n){var i=n(7),r=n(22);e.exports={initialize:function(){this.L={data:null,hasTracked:null},this.on(i.LOAD_REDIRECT_DATA,this.Ee),this.on(i.REGISTER_TRACKED_REDIRECT_DATA,this.me)},get:function(){return r.safeReference(this.L.data)},hasTracked:function(){return this.L.hasTracked},Ee:function(e){r.deepFreeze(e),this.L.data=e,this.L.hasTracked=!1,this.emitChange()},me:function(){this.L.hasTracked=!0}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26),o=1e3;e.exports={initialize:function(){this.L={},this.on(r.SET_PENDING_EVENT,this.Ie),this.on(r.REMOVE_PENDING_EVENT,this.ye),this.on(r.LOAD_PENDING_EVENTS,this.Se)},getEvents:function(){return this.L},getEventsString:function(){return a.stringify(this.L)},Ie:function(e){i.keys(this.L).length>=o&&this.Ae();var t=e.id,n=e.retryCount;this.L[t]&&this.L[t].retryCount===n||(this.L[t]={id:t,timeStamp:e.timeStamp,data:e.data,retryCount:n},this.emitChange())},ye:function(e){delete this.L[e.id],this.emitChange()},Se:function(e){this.L=e.events,this.Ae(),this.emitChange()},Ae:function(){for(var e=i.sortBy(this.L,"timeStamp"),t=0;t<=e.length-o;t++)delete this.L[e[t].id];this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25);e.exports={initialize:function(){this.L={},this.L[a.PerformanceData.performance_marks]={},this.on(r.SET_PERFORMANCE_MARKS_DATA,this.Te)},Te:function(e){i.isUndefined(this.L[a.PerformanceData.performance_marks][e.name])&&(this.L[a.PerformanceData.performance_marks][e.name]=[]),this.L[a.PerformanceData.performance_marks][e.name].push(e.data),this.emitChange()},getMarks:function(){return i.mapValues(this.L[a.PerformanceData.performance_marks],(function(e){return i.map(e,(function(e){return[e.startTime,e.duration]}))}))},getDurationsFor:function(e){return i.reduce(e,i.bind((function(e,t){var n=this.L[a.PerformanceData.performance_marks][t];return n&&(e[t]=Math.round(i.reduce(n,(function(e,t){return e+t.duration}),0))),e}),this),{})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(25),o=n(23);e.exports={initialize:function(){this.L=i.mapValues(a.PluginTypes,(function(){return{}})),this.on(r.REGISTER_PLUGIN,this.Re)},Re:function(e){var t=e.type,n=e.name,i=e.plugin;if(!t||!n)throw new Error("Missing information needed to register plugins: "+t+":"+n);if(!this.L[t])throw new Error("Invalid plugin type specified: "+t);this.L[t][n]=i,o.debug("Plugin Store: Registering Plugin :",e)},getAllPlugins:function(e){if(e){if(this.L[e])return this.L[e];throw new Error("Invalid plugin type: "+e)}return this.L},getPlugin:function(e,t){if(!t||!e)throw new Error("Missing plugin parameters");var n=this.getAllPlugins(e);return n[t]||null}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.L={},this.on(r.SET_VISITOR_ATTRIBUTE_PENDING,this.we)},getPendingAttributeValue:function(e){return e=i.isArray(e)?e.concat("pending"):[e,"pending"],a.getFieldValue(this.L,e)},we:function(e){a.setFieldValue(this.L,e.key,{pending:e.pending}),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={layerId:null},this.on(r.ANNOUNCE_PENDING_REDIRECT,this.Ee)},isExpectingRedirect:function(){return i.isString(this.L.layerId)},getLayerId:function(){return this.L.layerId},Ee:function(e){this.isExpectingRedirect()||(this.L.layerId=e.layerId,this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={inRumSample:!1,id:null,src:null,RumHost:null,data:{extras:{}},apis:{},DOMObservation:{},featuresNeeded:{}},this.on(r.SET_RUM_DATA,this.De),this.on(r.RECORD_API_USAGE,this.be),this.on(r.INITIALIZE_CHANGE_METRICS,this.Oe),this.on(r.RECORD_ACTIVATION_TYPE_USAGE,this.Ne),this.on(r.RECORD_AUDIENCE_USAGE,this.Ce),this.on(r.RECORD_CHANGE_MACROTASK_RATE,this.Pe),this.on(r.RECORD_CHANGE_OVERHEATED,this.Le),this.on(r.RECORD_CHANGE_TYPE_USAGE,this.Ve),this.on(r.RECORD_DOM_OBSERVATION_OCCURENCE,this.ke),this.on(r.RECORD_INTEGRATION_USAGE,this.xe),this.on(r.RECORD_LAYER_FEATURE_USAGE,this.Fe),this.on(r.RECORD_LAYER_POLICY_USAGE,this.Me),this.on(r.RECORD_VIEW_FEATURE_USAGE,this.Ue)},De:function(e){i.merge(this.L,e),this.emitChange()},be:function(e){this.L.apis[e.methodName]||(this.L.apis[e.methodName]=0),this.L.apis[e.methodName]++,this.emitChange()},Oe:function(){i.isUndefined(this.L.data.extras.changeMacrotaskRate)&&(this.L.data.extras.changeMacrotaskRate=0),i.isUndefined(this.L.data.extras.numOverheatedChanges)&&(this.L.data.extras.numOverheatedChanges=0)},Pe:function(e){i.isUndefined(this.L.data.extras.changeMacrotaskRate)&&(this.L.data.extras.changeMacrotaskRate=0),e.changeMacrotaskRate>this.L.data.extras.changeMacrotaskRate&&(this.L.data.extras.changeMacrotaskRate=e.changeMacrotaskRate),this.emitChange()},Le:function(){i.isUndefined(this.L.data.extras.numOverheatedChanges)&&(this.L.data.extras.numOverheatedChanges=0),this.L.data.extras.numOverheatedChanges++,this.emitChange()},ke:function(e){this.L.DOMObservation[e.counterName]||(this.L.DOMObservation[e.counterName]=0),this.L.DOMObservation[e.counterName]++,this.emitChange()},Ge:function(e,t,n){i.isUndefined(this.L.featuresNeeded[e])&&(this.L.featuresNeeded[e]={});var r=this.L.featuresNeeded[e];i.each(t,(function(e){r[e]||(r[e]={}),r[e][n]||(r[e][n]=!0)}))},xe:function(e){this.Ge("integrations",e.integrations,e.layerId)},Ve:function(e){this.Ge("changeTypes",e.changeTypes,e.layerId)},Ne:function(e){this.Ge("activationTypes",[e.activationType],e.entityId),this.emitChange()},Ue:function(e){this.Ge("viewFeatures",e.featuresUsed,e.entityId),this.emitChange()},Fe:function(e){this.Ge("layerFeatures",[e.feature],e.entityId),this.emitChange()},Me:function(e){this.Ge("policy",[e.policy],e.layerId),this.emitChange()},Ce:function(e){this.Ge("audiences",e.audienceTypes,e.layerId),this.emitChange()},getSampleRum:function(){return this.L.inRumSample},getRumId:function(){return this.L.id},getRumHost:function(){return this.L.RumHost},getApiData:function(){return this.L.apis},getDOMObservationData:function(){return this.L.DOMObservation},getRumData:function(){return i.cloneDeep(this.L.data)},getScriptSrc:function(){return this.L.src},getFeaturesNeededData:function(){var e=this.L.featuresNeeded,t={};return i.forOwn(e,(function(e,n){var r=i.keys(e);i.isEmpty(r)||(t[n]={}),i.forEach(r,(function(r){t[n][r]=i.keys(e[r]).length}))})),t}}}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={initialized:!1,natives:{}},this.on(i.SANDBOXED_FUNCTIONS_ADDED,this.Be)},Be:function(e){if(!e.sandboxedFunctions)throw new Error("No sandboxedFunctions found in payload");this.L.natives=e.sandboxedFunctions,this.L.initialized=!0,this.emitChange()},getAll:function(){return this.L.natives},get:function(e){if(!e)throw new Error("Missing name parameter");return this.L.natives[e]||null},isInitialized:function(){return this.L.initialized}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(5),s=18e5;e.exports={initialize:function(){this.L={lastSessionTimestamp:0,sessionId:null},this.on(r.REFRESH_SESSION,this.ze),this.on(r.LOAD_SESSION_STATE,this.je)},getState:function(){return i.cloneDeep(this.L)},getSessionId:function(){return this.L.sessionId},je:function(e){this.L.sessionId=e.sessionId,this.L.lastSessionTimestamp=e.lastSessionTimestamp,this.emitChange()},ze:function(){var e=a.now(),t=this.L.lastSessionTimestamp;(!this.L.sessionId||e-t>s)&&(this.L.sessionId=o.generate()),this.L.lastSessionTimestamp=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.He(),this.on(r.FINALIZE_BATCH_SNAPSHOT,this.Ke),this.on(r.REGISTER_PREVIOUS_BATCH,this.Ye),this.on(r.REGISTER_TRACKER_VISITOR,this.qe),this.on(r.REGISTER_TRACKER_EVENT,this.We),this.on(r.REGISTER_TRACKER_DECISION,this.Xe),this.on(r.RESET_TRACKER_EVENTS,this.Qe),this.on(r.RESET_TRACKER_STORE,this.He),this.on(r.RESET_TRACKER_PREVIOUS_BATCHES,this.$e),this.on(r.SET_TRACKER_POLLING,this.Je),this.on(r.SET_TRACKER_BATCHING,this.Ze),this.on(r.SET_TRACKER_SEND_EVENTS,this.et),this.on(r.SET_TRACKER_PERSISTABLE_STATE,this.tt),this.on(r.SET_TRACKER_DIRTY,this.nt),this.on(r.UPDATE_TRACKER_VISITOR_ATTRIBUTES,this.it)},getPersistableState:function(){return this.L.isDirty?this.hasEventsToSend()||this.hasPreviousBatchesToSend()?{data:this.L.data,decisions:this.L.decisions,decisionEvents:this.L.decisionEvents,previousBatches:this.L.previousBatches}:{}:null},tt:function(e){i.isEmpty(this.L.data)||i.isEmpty(e.data)||(this.Ke(),this.L.previousBatches.push(this.getEventBatch())),this.L.data=e.data||{},this.L.decisions=e.decisions||[],this.L.decisionEvents=e.decisionEvents||[],i.isEmpty(this.L.previousBatches)||i.isEmpty(e.previousBatches)?this.L.previousBatches=e.previousBatches||[]:this.L.previousBatches=this.L.previousBatches.concat(e.previousBatches),this.emitChange()},nt:function(e){this.L.isDirty=e,this.emitChange()},We:function(e){var t=this.rt();!i.isEmpty(t.snapshots)&&i.isEmpty(this.L.decisionEvents)||this.at(),this.ot().events.push(e.event),this.L.decisions=e.decisions,this.nt(!0)},Xe:function(e){this.L.decisionEvents.push(e.decisionEvent),this.L.decisions=e.decisions,this.nt(!0)},qe:function(e){i.isEmpty(this.L.data)?this.L.data=e.data:this.Ke(),this.L.data.visitors.push(e.visitor),this.L.decisions=e.decisions,this.L.decisionEvents=[],this.nt(!0)},Ye:function(e){this.L.previousBatches.push(e),this.nt(!0)},He:function(){this.L={polling:!1,shouldBatch:!0,data:{},decisions:[],decisionEvents:[],canSend:!1,isDirty:!1,previousBatches:[]},this.emitChange()},Qe:function(){var e=this.rt();this.L.data.visitors=[e],e.snapshots=[],this.nt(!0)},$e:function(){this.L.previousBatches=[],this.nt(!0)},Je:function(e){this.L.polling=e,this.emitChange()},Ze:function(e){this.L.shouldBatch=e,this.emitChange()},et:function(e){this.L.canSend=e,this.emitChange()},getEventBatch:function(){return i.cloneDeep(this.L.data)},getPreviousBatches:function(){return i.cloneDeep(this.L.previousBatches)},st:function(){return this.L.decisionEvents.slice()},ut:function(){this.L.decisionEvents=[]},ct:function(){return this.L.decisions.slice()},isPolling:function(){return this.L.polling},shouldBatch:function(){return this.L.shouldBatch},ot:function(){return i.last(this.rt().snapshots)},rt:function(){return i.last(this.L.data.visitors)},at:function(){var e=this.st(),t=this.rt();t.snapshots.push({decisions:this.ct(),events:e}),this.ut(),this.nt(!0)},Ke:function(){this.L.decisionEvents.length>0&&this.at()},hasEventsToSend:function(){if(!i.isEmpty(this.L.decisionEvents))return!0;if(!i.isEmpty(this.L.data)){var e=i.some(this.L.data.visitors||[],(function(e){return e.snapshots.length>0}));if(e)return!0}return!1},hasPreviousBatchesToSend:function(){return!i.isEmpty(this.L.previousBatches)},canSend:function(){return this.L.canSend},it:function(e){var t=this.rt();t&&(t.attributes=e.attributes)}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={},this.on(r.SET_UA_DATA,this.k)},k:function(e){i.isEmpty(this.L)&&(this.L=e.data)},get:function(){return i.cloneDeep(this.L)}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(23),o={globalTags:{},viewStates:{},shouldBatch:!1};e.exports={initialize:function(){this.L=i.cloneDeep(o),this.on(r.REGISTER_VIEWS,this.dt),this.on(r.SET_VIEW_ACTIVE_STATE,this.ft),this.on(r.UPDATE_PARSED_VIEW_METADATA,this.pt),this.on(r.UPDATE_USER_SUPPLIED_METADATA,this.ht),this.on(r.TRACK_VIEW_ACTIVATED_EVENT,this._t),this.on(r.SET_GLOBAL_TAGS,this.vt),this.on(r.ACTIVATE,this.Et),this.on(r.SET_VIEW_BATCHING,this.Ze)},getAll:function(){var e={};for(var t in this.L.viewStates)e[t]=this.getViewState(t);return e},shouldBatch:function(){return this.L.shouldBatch},getViewState:function(e){var t=i.cloneDeep(this.L.viewStates[e]),n=this.L.globalTags;return t.metadata=i.extend({},t.parsedMetadata,n,t.userSuppliedMetadata),t},getActiveViewTags:function(){var e=this.getActiveViewStates(),t=i.map(e,(function(e){return e.metadata})),n=[{}].concat(t);return i.extend.apply(i,n)},getActivationEventId:function(e){return this.L.viewStates[e]?this.L.viewStates[e].activationEventId:null},getActiveViewStates:function(){return i.reduce(this.L.viewStates,i.bind((function(e,t,n){return this.isViewActive(n)&&e.push(this.getViewState(n)),e}),this),[])},isViewActive:function(e){var t=this.L.viewStates[e];return t||a.warn("No Page registered with id",e),!!t.isActive},getGlobalTags:function(){return i.cloneDeep(this.L.globalTags)},Et:function(){this.L.viewStates={},this.emitChange()},dt:function(e){i.each(e.views,i.bind((function(e){var t=e.id;this.L.viewStates[t]={id:t,isActive:!1,activatedTimestamp:null,activationEventId:null,parsedMetadata:{},userSuppliedMetadata:{}}}),this)),this.emitChange()},ft:function(e){var t=e.view.id;if(!this.L.viewStates[t])throw new Error("No view exists with id "+t);this.L.viewStates[t].isActive=e.isActive,e.isActive?this.L.viewStates[t].activatedTimestamp=e.timestamp:(this.L.viewStates[t].parsedMetadata={},this.L.viewStates[t].userSuppliedMetadata={}),this.emitChange()},pt:function(e){var t=e.pageId;if(!this.L.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.L.viewStates[t].parsedMetadata,e.metadata),this.emitChange()},ht:function(e){var t=e.pageId;if(!this.L.viewStates[t])throw new Error("No view exists with id "+t);i.assign(this.L.viewStates[t].userSuppliedMetadata,e.metadata),this.emitChange()},_t:function(e){var t=e.pageId;this.L.viewStates[t]&&(this.L.viewStates[t].activationEventId=e.eventData.eventId,this.emitChange())},vt:function(e){i.extend(this.L.globalTags,e),this.emitChange()},Ze:function(e){this.L.shouldBatch=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={views:{},apiNamesToViews:{}},this.on(r.DATA_LOADED,this.k)},getAll:function(){return a.safeReference(i.values(this.L.views))},getPagesMap:function(){return a.safeReference(this.L.views)},get:function(e){return a.safeReference(this.L.views[e])},getByApiName:function(e){return a.safeReference(this.L.apiNamesToViews[e])},apiNameToId:function(e){var t=this.L.apiNamesToViews[e];if(t)return t.id},idToApiName:function(e){var t=this.L.views[e];if(t)return t.apiName},getNumberOfPages:function(){return i.keys(this.L.views).length},getAllViewsForActivationType:function(e){return i.filter(this.L.views,{activationType:e})},k:function(e){i.isEmpty(e.data.views)||(i.each(e.data.views,i.bind((function(e){a.deepFreeze(e),this.L.views[e.id]=e,this.L.apiNamesToViews[e.apiName]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(19);e.exports={initialize:function(){this.L={profile:{},metadata:{},visitorId:null},this.on(r.SET_VISITOR_ID_VIA_API,this.mt),this.on(r.SET_VISITOR_ATTRIBUTES,this.It),this.on(r.LOAD_EXISTING_VISITOR_PROFILE,this.yt)},getVisitorProfile:function(){return this.L.profile},getVisitorProfileMetadata:function(){return this.L.metadata},getAttribute:function(e){var t=this.L.profile;return i.cloneDeep(a.getFieldValue(t,e))},getAttributeMetadata:function(e){return i.cloneDeep(this.L.metadata[e])},getVisitorIdFromAPI:function(){return this.L.visitorId},yt:function(e){this.L.profile=e.profile,this.L.metadata=e.metadata,this.emitChange()},It:function(e){i.each(e.attributes,i.bind((function(e){var t=e.key;a.setFieldValue(this.L.profile,t,e.value),e.metadata&&i.forOwn(e.metadata,i.bind((function(e,n){a.setFieldValue(this.L.metadata,t.concat(n),e)}),this))}),this)),this.emitChange()},mt:function(e){this.L.visitorId=e,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.St)},getCustomBehavioralAttributes:function(){return i.filter(this.L,(function(e){return!!e.rule_json}))},getVisitorAttribute:function(e){var t=i.values(this.L);if(e.datasourceId&&(t=i.filter(t,{dcp_datasource_id:String(e.datasourceId)})),e.attributeName&&e.attributeId)throw new Error("Must not specify both attribute name and attribute ID");if(e.attributeId){var n=this.L[e.attributeId];if(!n)throw new Error("Unrecognized attribute ID: "+e.attributeId);return n}if(e.attributeName){var r=i.filter(t,{name:e.attributeName});if(!r.length)throw new Error("Unrecognized attribute name: "+e.attributeName);if(r.length>1)throw new Error("Too many attributes with name: "+e.attributeName);return r[0]}throw new Error("Must specify attribute name or attribute ID")},St:function(e){i.isEmpty(e.data.visitorAttributes)||(i.each(e.data.visitorAttributes,i.bind((function(e){this.L[e.id]=e}),this)),this.emitChange())}}}),(function(e,t,n){var i=(n(2),n(7));n(63).Event;e.exports={initialize:function(){this.L={events:[],foreignEvents:{},foreignEventQueues:{}},this.on(i.SET_VISITOR_EVENTS,this.k),this.on(i.SET_FOREIGN_VISITOR_EVENTS,this.At),this.on(i.SET_FOREIGN_VISITOR_EVENT_QUEUE,this.Tt)},getEvents:function(){return this.L.events},getForeignEvents:function(){return this.L.foreignEvents},getForeignEventQueues:function(){return this.L.foreignEventQueues},k:function(e){this.L.events=e,this.emitChange()},At:function(e){this.L.foreignEvents[e.key]=e.value},Tt:function(e){this.L.foreignEventQueues[e.key]=e.value}}}),(function(e,t,n){function i(e,t,n,i,r){this[o.FIELDS.NAME]=e,this[o.FIELDS.TYPE]=t,a.isString(n)&&n.trim().length>0&&(this[o.FIELDS.CATEGORY]=n),i&&a.keys(i).length>0&&(this[o.FIELDS.OPTIONS]=i),a.isUndefined(r)||(this[o.FIELDS.REVENUE]=r)}function r(e,t,n,i){this.eventBase=e,this[o.FIELDS.TIME]=t,a.isUndefined(n)||(this[o.FIELDS.SESSION_ID]=n),a.isUndefined(i)||(this[o.FIELDS.SESSION_INDEX]=i)}var a=n(2),o=n(64),s=n(19).getFieldValue,u=n(65);t.EventBase=i,i.prototype.digest=function(){var e=function(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)},t=[];if(t.push(e(o.FIELDS.NAME,this[o.FIELDS.NAME])),t.push(e(o.FIELDS.TYPE,this[o.FIELDS.TYPE])),this[o.FIELDS.CATEGORY]&&t.push(e(o.FIELDS.CATEGORY,this[o.FIELDS.CATEGORY])),this[o.FIELDS.REVENUE]&&t.push(e(o.FIELDS.REVENUE,this[o.FIELDS.REVENUE])),!this[o.FIELDS.OPTIONS])return t.join("&");var n=this[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));i=i.sort();for(var r=0;r<i.length;r++)t.push(e(i[r],n[i[r]]));return t.join("&")},i.prototype.hash=function(){return this.hash_?this.hash_:(this.hash_=u.hashToHex(u.toByteString(this.digest()),u.Seed.BEHAVIOR_EVENT),this.hash_)},i.prototype.setHash=function(e){this.hash_=e},i.prototype.reHash=function(){this.hash_=null,this.hash()},i.prototype.equals=function(e){if(this.hash()!==e.hash())return!1;if(this[o.FIELDS.NAME]!==e[o.FIELDS.NAME]||this[o.FIELDS.TYPE]!==e[o.FIELDS.TYPE]||this[o.FIELDS.CATEGORY]!==e[o.FIELDS.CATEGORY]||this[o.FIELDS.REVENUE]!==e[o.FIELDS.REVENUE])return!1;if(!this[o.FIELDS.OPTIONS]&&!e[o.FIELDS.OPTIONS])return!0;var t=this[o.FIELDS.OPTIONS]||{},n=e[o.FIELDS.OPTIONS]||{},i=a.filter(a.keys(t),(function(e){return t.hasOwnProperty(e)})),r=a.filter(a.keys(n),(function(e){return n.hasOwnProperty(e)}));if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++){var u=i[s];if(!n.hasOwnProperty(u)||t[u]!==n[u])return!1}return!0},i.prototype.getValueOrDefault=function(e,t){var n=s(this,e);return a.isUndefined(n)?t:n},i.prototype.setFieldValue=function(e,t){e!==o.FIELDS.NAME&&e!==o.FIELDS.TYPE&&e!==o.FIELDS.CATEGORY&&e!==o.FIELDS.REVENUE&&e!==o.FIELDS.OPTIONS||(this[e]=t,this.reHash())},t.Event=r,r.prototype.getValueOrDefault=function(e,t){if(0===e.length)return this;var n={};n[o.FIELDS.TIME]=this[o.FIELDS.TIME],n[o.FIELDS.SESSION_ID]=this[o.FIELDS.SESSION_ID],n[o.FIELDS.SESSION_INDEX]=this[o.FIELDS.SESSION_INDEX];var i=s(n,e);return a.isUndefined(i)?this.eventBase.getValueOrDefault(e,t):i},r.prototype.setFieldValue=function(e,t){e===o.FIELDS.TIME||e===o.FIELDS.SESSION_ID||e===o.FIELDS.SESSION_INDEX?this[e]=t:this.eventBase.setFieldValue(e,t)};var c={n:"name",y:"type",c:"category",r:"revenue",s:"session_id",o:"tags",si:"session_index"};r.prototype.readableEvent=function(){var e,t,n=function(e){return a.isString(e)?'"'+e+'"':e},i=this,r=[];a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.SESSION_ID],(function(o){e=c[o],t=i.getValueOrDefault([o]),a.isUndefined(t)||r.push(e+": "+n(t))}));var s=[];if(e=c[o.FIELDS.OPTIONS],t=i.getValueOrDefault([o.FIELDS.OPTIONS]),a.isUndefined(t)||(a.each(t,(function(e,t){s.push(t+": "+String(n(e)))})),r.push(e+": {\n\t\t"+s.join(",\n\t\t")+"\n\t}")),t=i.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(t)&&(t=n(new Date(t).toString())),!a.isUndefined(t)){var u="timestamp";r.push(u+": "+t)}return"{\n\t"+r.join(",\n\t")+"\n}"},r.prototype.toObject=function(e){var t,n,i={},r=this;a.each([o.FIELDS.NAME,o.FIELDS.TYPE,o.FIELDS.CATEGORY,o.FIELDS.REVENUE,o.FIELDS.OPTIONS,o.FIELDS.SESSION_INDEX],(function(e){t=c[e],n=r.getValueOrDefault([e],e===o.FIELDS.OPTIONS?{}:void 0),a.isUndefined(n)||(i[t]=n)}));var s=c[o.FIELDS.OPTIONS],u=c[o.FIELDS.REVENUE];if(e&&e.revenueAsTag&&i[u]&&(i[s]=i[s]||{},i[s][u]=i[u],delete i[u]),n=r.getValueOrDefault([o.FIELDS.TIME]),a.isNumber(n))if(e&&e.timeAsTimestamp){var l="timestamp";i[l]=new Date(n)}else{var d="time";i[d]=n}return i}}),(function(e,t){t.FIELDS={NAME:"n",TIME:"t",TYPE:"y",CATEGORY:"c",REVENUE:"r",SESSION_ID:"s",OPTIONS:"o",SESSION_INDEX:"si"},t.FIELDS_V0_2={name:t.FIELDS.NAME,time:t.FIELDS.TIME,type:t.FIELDS.TYPE,category:t.FIELDS.CATEGORY,tags:t.FIELDS.OPTIONS,session_index:t.FIELDS.SESSION_INDEX}}),(function(e,t,n){var i=n(66).v3,r={IGNORING:0,BUCKETING:1,FALLBACK:2,HOLDBACK:3,BEHAVIOR_EVENT:2716770798},a=Math.pow(2,32),o=function(e,t,n){return Math.floor(u(e,t)*n)},s=function(e,t){var n=i(e,t);return(n>>>16).toString(16)+(65535&n).toString(16)},u=function(e,t){var n=i(e,t);return(n>>>0)/a},c=function(e){var t=String.fromCharCode;return e.replace(/[\S\s]/gi,(function(e){e=e.charCodeAt(0);var n=t(255&e);return e>255&&(n=t(e>>>8&255)+n),e>65535&&(n=t(e>>>16)+n),n}))};e.exports={Seed:r,hashToHex:s,hashToInt:o,hashToReal:u,toByteString:c}}),(function(e,t,n){!(function(){function t(e,t){for(var n,i=e.length,r=t^i,a=0;i>=4;)n=255&e.charCodeAt(a)|(255&e.charCodeAt(++a))<<8|(255&e.charCodeAt(++a))<<16|(255&e.charCodeAt(++a))<<24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>24,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)^n,i-=4,++a;switch(i){case 3:r^=(255&e.charCodeAt(a+2))<<16;case 2:r^=(255&e.charCodeAt(a+1))<<8;case 1:r^=255&e.charCodeAt(a),r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16)}return r^=r>>>13,r=1540483477*(65535&r)+((1540483477*(r>>>16)&65535)<<16),r^=r>>>15,r>>>0}function n(e,t){var n,i,r,a,o,s,u,c;for(n=3&e.length,i=e.length-n,r=t,o=3432918353,s=461845907,c=0;c<i;)u=255&e.charCodeAt(c)|(255&e.charCodeAt(++c))<<8|(255&e.charCodeAt(++c))<<16|(255&e.charCodeAt(++c))<<24,++c,u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u,r=r<<13|r>>>19,a=5*(65535&r)+((5*(r>>>16)&65535)<<16)&4294967295,r=(65535&a)+27492+(((a>>>16)+58964&65535)<<16);switch(u=0,n){case 3:u^=(255&e.charCodeAt(c+2))<<16;case 2:u^=(255&e.charCodeAt(c+1))<<8;case 1:u^=255&e.charCodeAt(c),u=(65535&u)*o+(((u>>>16)*o&65535)<<16)&4294967295,u=u<<15|u>>>17,u=(65535&u)*s+(((u>>>16)*s&65535)<<16)&4294967295,r^=u}return r^=e.length,r^=r>>>16,r=2246822507*(65535&r)+((2246822507*(r>>>16)&65535)<<16)&4294967295,r^=r>>>13,r=3266489909*(65535&r)+((3266489909*(r>>>16)&65535)<<16)&4294967295,r^=r>>>16,r>>>0}var i=n;i.v2=t,i.v3=n;e.exports=i})()}),(function(e,t,n){var i=n(7);e.exports={initialize:function(){this.L={baseMap:{},eventQueue:[],lastEvent:null,initialized:!1,cleared:!1},this.on(i.UPDATE_BEHAVIOR_STORE,this.Rt)},getBaseMap:function(){return this.L.baseMap},getEventQueue:function(){return this.L.eventQueue},getLastEvent:function(){return this.L.lastEvent},getCleared:function(){return this.L.cleared},getInitialized:function(){return this.L.initialized},Rt:function(e){this.L[e.key]=e.value}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={randomId:null},this.on(r.SET_VISITOR_ID,this.k)},getBucketingId:function(){return this.getRandomId()},getRandomId:function(){return this.L.randomId},k:function(e){i.extend(this.L,e),this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(26);e.exports={initialize:function(){this.L={variationIdMap:{},preferredLayerMap:{}},this.on(r.UPDATE_VARIATION_ID_MAP,this.wt),this.on(r.MERGE_VARIATION_ID_MAP,this.Dt),this.on(r.UPDATE_PREFERRED_LAYER_MAP,this.bt),this.on(r.MERGE_PREFERRED_LAYER_MAP,this.Ot)},getVariationIdMap:function(){return i.cloneDeep(this.L.variationIdMap)},getVariationIdMapString:function(){return a.stringify(this.L.variationIdMap)},wt:function(e){var t=this.L.variationIdMap,n=t[e.layerId]||{};n[e.experimentId]!==e.variationId&&(n[e.experimentId]=e.variationId,this.L.variationIdMap[e.layerId]=n,this.emitChange())},Dt:function(e){var t=this.getVariationIdMap(),n=e.variationIdMap;i.each(t||{},(function(e,t){n[t]?i.assign(n[t],e):n[t]=e})),this.L.variationIdMap=n,this.emitChange()},getPreferredLayerMap:function(){return i.cloneDeep(this.L.preferredLayerMap)},getPreferredLayerMapString:function(){return a.stringify(this.L.preferredLayerMap)},getPreferredLayerId:function(e){return this.L.preferredLayerMap[e]},bt:function(e){this.L.preferredLayerMap[e.groupId]!==e.layerId&&(this.L.preferredLayerMap[e.groupId]=e.layerId,this.emitChange())},Ot:function(e){var t=this.getPreferredLayerMap(),n=e.preferredLayerMap;i.assign(n,t),this.L.preferredLayerMap=n,this.emitChange()}}}),(function(e,t,n){var i=n(2),r=n(7);e.exports={initialize:function(){this.L={frames:[],defaultFrame:null,messages:[],subscribers:[],canonicalOrigins:null,disabled:!1},this.on(r.XDOMAIN_SET_DEFAULT_FRAME,this.Nt),this.on(r.XDOMAIN_ADD_FRAME,this.Ct),this.on(r.XDOMAIN_SET_MESSAGE,this.Pt),this.on(r.XDOMAIN_ADD_SUBSCRIBER,this.Lt),this.on(r.XDOMAIN_SET_CANONICAL_ORIGINS,this.Vt),this.on(r.XDOMAIN_SET_DISABLED,this.kt)},getMessages:function(){return i.cloneDeep(this.L.messages)},getNextMessageId:function(){return this.L.messages.length},getMessageById:function(e){return this.L.messages[e]},getSubscribers:function(){return this.L.subscribers},getFrames:function(){return this.L.frames},getNextFrameId:function(){return this.L.frames.length},getDefaultFrame:function(){return this.L.defaultFrame},getCanonicalOrigins:function(){return i.cloneDeep(this.L.canonicalOrigins)},isDisabled:function(){return this.L.disabled},Nt:function(e){this.L.defaultFrame=e},Ct:function(e){this.L.frames.push(e)},Pt:function(e){this.L.messages[e.messageId]=e.message},Lt:function(e){this.L.subscribers.push(e.subscriber)},Vt:function(e){this.L.canonicalOrigins=e.canonicalOrigins},kt:function(e){this.L.disabled=e.disabled}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(22);e.exports={initialize:function(){this.L={},this.on(r.DATA_LOADED,this.k)},k:function(e){i.isEmpty(e.data.groups)||(i.each(e.data.groups,i.bind((function(e){a.deepFreeze(e),this.L[e.id]=e}),this)),this.emitChange())},getAll:function(){return a.safeReference(i.values(this.L))},getGroupsMap:function(){return a.safeReference(this.L)},get:function(e){return a.safeReference(this.L[e])}}}),(function(e,t,n){var i=n(73);t.initializeStore=i.initialize,t.addEvent=i.addEvent,t.getEvents=i.getEvents,t.usageInBytes=i.usageInBytes}),(function(e,t,n){function i(e){I.dispatch(v.SET_VISITOR_EVENTS,e)}function r(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"baseMap",value:e})}function a(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"eventQueue",value:e})}function o(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"lastEvent",value:e})}function s(e){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"cleared",value:e})}function u(){I.dispatch(v.UPDATE_BEHAVIOR_STORE,{key:"initialized",value:!0})}function c(){return O.getEvents()}function l(){return N.getBaseMap()}function d(){return N.getEventQueue()}function f(){return N.getLastEvent()}function g(){return N.getCleared()}function p(){return N.getInitialized()}function h(){var e=c().concat(d()),t=!1;return e.length>P&&(e=e.slice(-P),t=!0),i(e),a([]),t}var _=n(2),v=n(7),E=n(24),m=n(74),I=n(9),y=n(23),S=n(75),A=t,T=n(63).Event,R=n(64),w=n(63).EventBase,D=n(89),b=n(16),O=b.get("stores/visitor_events"),N=b.get("stores/visitor_events_manager"),C={EVENTBASE:"eb",HASH:"h",TIMEBASE:"tb",TIMESTAMPS:"ts",DELTA:"d",INDEX:"i"},P=1e3;t.initialize=function(e,t){if(!p()){A.xt(e,t);var n=c();n.length>0&&o(n[n.length-1]);var i=d();i.length>0&&o(i[i.length-1]),u()}},t.addEvent=function(e){y.debug("Behavior store: adding event",e);var t=A.Ft(e);o(t),a(d().concat(t)),D.reindexIfNecessary(f(),c(),d()),A.Mt(d())},t.getEvents=function(){return d().length>0&&(h()&&D.sessionize(c()),A.Ut(c()),A.Mt(d())),c()},A.xt=function(e,t){A.Gt(e,t)&&(A.Ut(c()),A.Mt(d())),D.sessionize(c())},A.Gt=function(e,t){if(0===e.length&&0===t.length)return i([]),a([]),!1;var n=!1,r=e[0]||t[0];return C.EVENTBASE in r?(i(A.Bt(e)),a(A.Bt(t))):(n=!0,i(A.zt(e)),a(A.zt(t))),d().length>0&&(h(),n=!0),i(A._updateBaseMapAndMaybeDedupe(c())),A._migrateEventBasesAndUpdateStore()&&(n=!0),n},A.zt=function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=A.jt(i);t[n]=new T(r,i[R.FIELDS.TIME])}return t},A._migrateEventBasesAndUpdateStore=function(){var e=!1,t=A.Ht();return D.applyMigrations(t)&&(e=!0,r({}),i(A._updateBaseMapAndMaybeDedupe(c())),a(A._updateBaseMapAndMaybeDedupe(d()))),e},A.Kt=function(){return E.now()},A.Ft=function(e){var t,n=e.name,i=e.type||"default",r=e.category||m.OTHER,a=e.tags||{};e.revenue&&(t=e.revenue);var o=new w(n,i,r,a,t);o=A.Yt(o);var s=A.Kt(),u=new T(o,s,-1);return D.updateSessionId(f(),u),D.updateSessionIndex(f(),u),u},A._updateBaseMapAndMaybeDedupe=function(e){for(var t=0;t<e.length;t++)e[t].eventBase=A.Yt(e[t].eventBase);
return e},A.Ut=function(e){var t=A.qt(e);S.persistBehaviorEvents(t)},A.Mt=function(e){var t=A.qt(e);S.persistBehaviorEventQueue(t)},A.Wt=function(){g()||(i([]),a([]),A.Ut(c()),A.Mt(d()),r({}),o(null),s(!0))},A.Yt=function(e){var t=e.hash(),n=l(),i=n[t];if(_.isUndefined(i))return n[t]=[e],r(n),e;for(var a=0;a<i.length;a++)if(e.equals(i[a]))return i[a];return i.push(e),r(n),e},A.Ht=function(){var e=[],t=l();for(var n in t)t.hasOwnProperty(n)&&(e=e.concat(t[n]));return e},A.qt=function(e){for(var t=function(e){var t={};t[R.FIELDS.NAME]=e.getValueOrDefault([R.FIELDS.NAME]),t[R.FIELDS.TYPE]=e.getValueOrDefault([R.FIELDS.TYPE]);var n=e.getValueOrDefault([R.FIELDS.CATEGORY]);_.isUndefined(n)||(t[R.FIELDS.CATEGORY]=n);var i=e.getValueOrDefault([R.FIELDS.REVENUE]);_.isUndefined(i)||(t[R.FIELDS.REVENUE]=i);var r=e.getValueOrDefault([R.FIELDS.OPTIONS]);return _.isUndefined(r)||(t[R.FIELDS.OPTIONS]=r),t},n=C,i=[],r="_idx_",a=0;a<e.length;a++){var o,s,u=e[a],c=u.eventBase;if(c.hasOwnProperty(r)){o=i[c[r]];var l=u[R.FIELDS.TIME]-(o[n.TIMEBASE]||0);s={},s[n.DELTA]=l,s[n.INDEX]=a,o[n.TIMESTAMPS].push(s)}else o={},o[n.EVENTBASE]=t(u),o[n.HASH]=c.hash(),o[n.TIMEBASE]=u[R.FIELDS.TIME],s={},s[n.DELTA]=0,s[n.INDEX]=a,o[n.TIMESTAMPS]=[s],i.push(o),c[r]=i.length-1}for(a=0;a<e.length;a++)delete e[a].eventBase[r];return i},A.jt=function(e,t){var n=new w(e[R.FIELDS.NAME],e[R.FIELDS.TYPE],e[R.FIELDS.CATEGORY],e[R.FIELDS.OPTIONS],e[R.FIELDS.REVENUE]);return _.isUndefined(t)||n.setHash(t),n},A.Bt=function(e){for(var t=C,n=[],i=0;i<e.length;i++)for(var r=e[i],a=A.jt(r[t.EVENTBASE],r[t.HASH]),o=r[t.TIMEBASE],s=r[t.TIMESTAMPS],u=0;u<s.length;u++){var c=s[u],l=new T(a,o+c[t.DELTA]),d=c[t.INDEX];n[d]=l}return n},t.deserialize=function(e){return A.Bt(e)},t.mergeAllEvents=function(e){var t=[].concat.apply([],e);return t.sort(D.sessionSortPredicate),D.sessionize(t),t}}),(function(e,t){e.exports={OTHER:"other"}}),(function(e,t,n){function i(){return c(z.LAYER_MAP)||{}}function r(e,t){O.dispatch(N.UPDATE_PREFERRED_LAYER_MAP,{groupId:e,layerId:t})}function a(){var e=X.getPreferredLayerMapString();p(z.LAYER_MAP,e,!0)}function o(e){O.dispatch(N.SET_TRACKER_PERSISTABLE_STATE,e)}function s(e,t){function n(e,n){var i;t.attributionType&&(i=V.now()),O.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:[{key:e,value:n,metadata:{lastModified:i}}]})}if(t.getter){var i=t.provides;if(b.isArray(i)||(i=[i]),!J||!b.includes(["queryParams","url"],i[0])){var r=t.isSticky&&!b.isUndefined(M.getFieldValue(e,i));if(!r){var a;try{var o=k.evaluate(t.getter);b.isFunction(o)&&(o=o((function(){return M.getFieldValue(e,i)}),(function(e){n(i,e)}))),b.isUndefined(o)||(t.isAsync?(a=o.then((function(e){n(i,e)}),(function(e){G.warn('Failed to evaluate provider for "'+t.provides+'"; error was:',e)})),O.dispatch(N.SET_VISITOR_ATTRIBUTE_PENDING,{key:i,pending:a})):n(i,o))}catch(e){G.warn('Failed to evaluate getter for provider for "'+t.provides+'"; error was: '+e.message)}return a}}}}function u(){y(c(z.EVENTS)||[],c(z.EVENT_QUEUE)||[]);var e=f(z.LAYER_STATES);b.forEach(e,(function(e){e.item=b.map(e.item,d)})),S(l(e)),A(c(z.SESSION_STATE)||{}),R(c(z.VISITOR_PROFILE)||{});var n=c(z.TRACKER_OPTIMIZELY);n&&o(n),t.loadForeignData(),t.removeLegacySessionStateCookies()}function c(e){var t=h(e),n=U.getItem(t);if(!n){var i=_(e);n=U.getItem(i),g(e,n)}return b.isString(n)&&(n=w(n)),n}function l(e){var t=[];return b.each(e,(function(e){b.each(e.item,(function(n){n.namespace=e.namespace,t.push(n)}))})),t}function d(e){var t;return t=e.layerId?e:{layerId:e.i,pageId:e.p,decisionTimestamp:e.t,decisionTicket:{audienceIds:e.a||[]},decision:{layerId:e.i,experimentId:e.x||null,variationId:e.v||null,isLayerHoldback:e.h||!1}}}function f(e){var t=W.getBucketingId(),n=[],i=t+"\\$\\$([^$]+?)\\$\\$"+e,r=new RegExp(i);return b.each(U.keys(),(function(e){var i=e.match(r);if(i){var a={namespace:i[1],userId:t,item:w(U.getItem(e))};n.push(a)}})),n}function g(e,t){var n=h(e),i=_(e);U.setItem(n,t),U.removeItem(i)}function p(e,t,n){try{var i=h(e);n||(t=F.stringify(t));try{U.removeItem(_(e)),U.setItem(i,t)}catch(e){throw G.warn("Visitor / Unable to set localStorage key, error was:",e),new Error("Unable to set localStorage")}D.setItem(i,t)}catch(e){G.warn("Unable to persist visitor data:",e.message)}}function h(e){var n=W.getBucketingId();if(!n)throw new Error("Visitor bucketingId not set");var i=t.getNamespace();if(!i)throw new Error("Namespace is not set");return[n,i,e].join("$$")}function _(e){var t=W.getBucketingId();if(!t)throw new Error("Cannot get legacy key: visitor bucketingId not set");return[t,e].join("$$")}function v(e,n){if(!W.getBucketingId())throw new Error("Cannot update local store because bucketingId not set");if(m(e)){var i=t.getStorageKeyFromKey(e);if(b.includes(z,i)){var r=h(i);if(!(e.indexOf(r)<=0))if(i===z.EVENT_QUEUE)O.dispatch(N.SET_FOREIGN_VISITOR_EVENT_QUEUE,{key:e,value:P.deserialize(w(n))});else if(i===z.EVENTS)O.dispatch(N.SET_FOREIGN_VISITOR_EVENTS,{key:e,value:P.deserialize(w(n))});else if(i===z.LAYER_STATES)O.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:b.map(w(n),d),merge:!0});else if(i===z.VARIATION_MAP)O.dispatch(N.MERGE_VARIATION_ID_MAP,{variationIdMap:w(n)});else if(i===z.VISITOR_PROFILE){var a=["custom"],o=w(n);b.each(a,(function(e){var t=Y.getPlugin(x.PluginTypes.visitorProfileProviders,e);if(t){if(o.profile&&o.metadata){var n=E(o,e,t.attributionType);if(!b.isEmpty(n)){var i=[];b.forOwn(n.data,(function(t,r){var a=n.metadata[r],o={key:[e,r],value:t,metadata:a};i.push(o)})),O.dispatch(N.SET_VISITOR_ATTRIBUTES,{attributes:i})}}}else G.debug("Attribute type",e,"not used by any audiences")}))}}}}function E(e,t,n){var i=Q.getAttribute(t),r=Q.getAttributeMetadata(t),a=e.profile[t],o=e.metadata[t];if(b.isEmpty(i))return{data:a,metadata:o};var s={};return b.forOwn(a,(function(e,t){var i;r&&r[t]&&(i=r[t].lastModified);var a;o&&o[t]&&(a=o[t].lastModified),(n===x.AttributionTypes.FIRST_TOUCH&&i>=a||n===x.AttributionTypes.LAST_TOUCH&&a>=i||b.isUndefined(i)&&a)&&(s.data=s.data||{},s.data[t]=e,a&&(s.metadata=s.metadata||{},s.metadata[t]=s.metadata[t]||{},s.metadata[t].lastModified=a))})),s}function m(e){var t=e.split("$$")[0];return t.indexOf("://")>0}function I(){var e=Q.getVisitorProfile(),t=Q.getVisitorProfileMetadata(),n=Y.getAllPlugins(x.PluginTypes.visitorProfileProviders);if(n){var i=b.reduce(n,(function(e,t){return t.provides&&(e[t.provides]=t),e}),{});e=b.omitBy(e,(function(e,t){var n=i[t];return n&&n.isTransient}))}return{profile:e,metadata:t}}function y(e,t){C.initializeStore(e,t)}function S(e){O.dispatch(N.LOAD_PERSISTED_LAYER_STATES,{layerStates:b.filter(e,(function(e){return!!e.decision}))})}function A(e){e=b.extend({lastSessionTimestamp:0,sessionId:null},e),O.dispatch(N.LOAD_SESSION_STATE,e)}function T(){return"oeu"+V.now()+"r"+Math.random()}function R(e){var t,n,i=Y.getAllPlugins(x.PluginTypes.visitorProfileProviders),r=b.filter(i,(function(e){return b.isFunction(e.restorer)}));e.profile&&e.metadata?(t=e.profile,n=e.metadata):(t=e,n={}),t=b.reduce(t,(function(e,t,n){var i=t,a=b.find(r,{provides:n});return a&&(i=a.restorer(t)),e[n]=i,e}),{}),O.dispatch(N.LOAD_EXISTING_VISITOR_PROFILE,{profile:t,metadata:n})}function w(e){try{return F.parse(e)}catch(t){return G.debug("Failed to parse: ",e,t),null}}var D,b=n(2),O=n(9),N=n(7),C=n(72),P=n(73),L=n(76),V=n(24),k=n(16),x=n(25),F=n(26),M=n(19),U=n(82).LocalStorage,G=n(23),B=n(12).Promise,z=n(25).VisitorStorageKeys;D=n(85);var j=k.get("stores/cookie_options"),H=k.get("stores/global"),K=k.get("stores/layer"),Y=k.get("stores/plugins"),q=k.get("stores/session"),W=k.get("stores/visitor_id"),X=k.get("stores/visitor_bucketing"),Q=k.get("stores/visitor"),$=k.get("stores/provider_status"),J=!1;t.getOrGenerateId=function(){var e=t.getCurrentId();return e||(e=T()),{randomId:e}},t.getCurrentId=function(){return Q.getVisitorIdFromAPI()||L.get(x.COOKIES.VISITOR_ID)},t.hasSomeData=function(){return U.keys().length>0},t.setId=function(e){var n=W.getBucketingId();O.dispatch(N.SET_VISITOR_ID,e),W.getBucketingId()!==n&&(u(),t.deleteOldLocalData(),D.deleteData(e));try{t.maybePersistVisitorId(e)}catch(e){if(G.error("Visitor / Unable to persist visitorId, disabling tracking"),O.dispatch(N.LOAD_DIRECTIVE,{trackingDisabled:!0}),e instanceof L.MismatchError)throw G.error("Visitor / Cookie not set to correct value:",e),new Error("Cookie mismatch error while persisting visitorId");throw e}t.refreshSession()},t.getVariationIdMap=function(){return c(z.VARIATION_MAP)||{}},t.updateVariationIdMap=function(e,t,n){O.dispatch(N.UPDATE_VARIATION_ID_MAP,{layerId:e,experimentId:t,variationId:n})},t.persistVariationIdMap=function(){var e=X.getVariationIdMapString();p(z.VARIATION_MAP,e,!0)},t.getPreferredLayerMap=i,t.updatePreferredLayerMap=r,t.persistTrackerOptimizelyData=function(e){p(z.TRACKER_OPTIMIZELY,e)},t.refreshSession=function(){O.dispatch(N.REFRESH_SESSION)},t.populateEagerVisitorData=function(e,n){var i=b.filter(e,(function(e){return!e.isLazy})),r=t.populateVisitorData(i,n);return r},t.populateLazyVisitorData=function(e,n){var i=b.filter(e,(function(e){return e.isLazy}));return t.populateVisitorData(i,n)},t.populateVisitorData=function(e,t){t=t||{};var n=b.partial(s,t),i=b(e).filter({isAsync:!0}).map(n).filter().value();return b.forEach(b.filter(e,(function(e){return!e.isAsync})),n),i.length>0?B.all(i):B.resolve()},t.persistBehaviorEvents=function(e){p(z.EVENTS,e)},t.persistBehaviorEventQueue=function(e){p(z.EVENT_QUEUE,e)},t.persistLayerStates=function(){var e=K.getLayerStates(t.getNamespace());e=b.map(e,(function(e){return b.omit(e,"namespace")})),p(z.LAYER_STATES,e)},t.persistSessionState=function(){p(z.SESSION_STATE,q.getState())},t.persistVisitorProfile=function(){p(z.VISITOR_PROFILE,I())},t.persistVisitorBucketingStore=function(){t.persistVariationIdMap(),a()},t.getUserIdFromKey=function(e,n){var i;return b.includes(e,n)&&b.includes(e,"_")&&b.includes(e,"$$")&&b.includes(e.slice(e.indexOf("$$")),t.getNamespace())&&(i=e.slice(e.indexOf("_")+1,e.indexOf("$$"))),i},t.maybePersistVisitorId=function(e){L.remove(x.COOKIES.VISITOR_UUID),e.randomId&&(j.getAutoRefresh()||t.getCurrentId()!==e.randomId?(L.set(x.COOKIES.VISITOR_ID,e.randomId),G.log("Persisting visitorId:",e.randomId)):G.log("Not persisting visitorId: value is not changed and also auto-refresh is disabled"))},t.getAttribute=function(e){return Q.getAttribute(e)},t.getPendingAttributeValue=function(e){return $.getPendingAttributeValue(e)},t.isForeignKey=m,t.checkKeyForVisitorId=function(e){var n=W.getBucketingId()||t.getCurrentId(),i=t.getIdFromKey(e);return!i||i===n},t.getIdFromKey=function(e){var n=e.split("$$")[0],i=t.getStorageKeyFromKey(e),r=b.includes(x.StorageKeys,i);if(r)return null;var a=n.indexOf("_"),o=a===-1;return o?n:n.substring(a+1)},t.getStorageKeyFromKey=function(e){var t,n=e.split("$$").pop(),i=n.indexOf("://")>-1;if(i){var r=n.indexOf("_");t=n.substring(r+1)}else t=n;return b.includes(b.values(x.AllStorageKeys),t)?t:null},t.deleteOldLocalData=function(){var e=U.keys();b.each(e,(function(e){t.isForeignKey(e)||t.checkKeyForVisitorId(e)||U.removeItem(e)}))},t.deleteOldForeignData=function(){var e=U.keys();b.each(e,(function(e){t.isForeignKey(e)&&U.removeItem(e)}))},t.loadForeignData=function(){b.each(U.keys(),(function(e){var t=U.getItem(e);t&&v(e,t)}))},t.getNamespace=function(){return H.getNamespace()},t.serializeFieldKey=function(e){return b.isArray(e)?e.join("$$"):e},t.removeLegacySessionStateCookies=function(){var e=L.getAll();b.forEach(b.keys(e),(function(e){0===e.indexOf(x.COOKIES.SESSION_STATE+"$$")&&L.remove(e)}))}}),(function(e,t,n){function i(e,n){n!==!1&&(n=!0);for(var i,a,o=e.hostname.split("."),s=[],u=null,l=o.length-1;l>=0;l--)if(s.unshift(o[l]),i=s.join("."),!r.includes(h,i)){a={domain:n?"."+i:i};try{t.set(_,Math.random().toString(),a),t.remove(_,a),u=a.domain;break}catch(e){}}return d.dispatch(c.SET_COOKIE_DOMAIN,u),u}var r=n(2),a=n(77).create,o=n(24),s=n(81),u=n(41),c=n(7),l=n(16),d=n(9),f=l.get("stores/cookie_options"),g=t.SetError=a("CookieSetError"),p=t.MismatchError=a("CookieMismatchError");t.getAll=function(e){r.isUndefined(e)&&(e=!0);var n,i,a,o,u;n=s.getCookieString().split(/\s*;\s*/);var c={};for(a=0;a<n.length;a++)if(i=n[a],o=i.indexOf("="),o>0&&(u=t.safeDecodeURIComponent(i.substring(0,o)),void 0===c[u])){var l=i.substring(o+1);e&&(l=t.safeDecodeURIComponent(l)),c[u]=l}return c},t.safeDecodeURIComponent=function(e){try{return decodeURIComponent(e)}catch(t){return e}},t.get=function(e,n){var i=t.getAll(n);return i[e]},t.set=function(e,n,a,c){a=r.extend({encodeValue:!0},a),c!==!1&&(c=!0);var l=[];if(r.isUndefined(a.domain)){var d=f.getCurrentDomain();d||(d=i(u.getLocation(),!0)),a.domain=d}if(a.domain&&l.push("domain="+a.domain),r.isUndefined(a.path)&&(a.path="/"),a.path&&l.push("path="+a.path),r.isUndefined(a.expires)){var h=r.isUndefined(a.maxAge)?f.getDefaultAgeInSeconds():a.maxAge;a.expires=new Date(o.now()+1e3*h)}if(r.isUndefined(a.expires)||l.push("expires="+a.expires.toUTCString()),a.secure&&l.push("secure"),l=l.join(";"),s.setCookie(e+"="+(a.encodeValue?encodeURIComponent(n):n)+";"+l),c){var _=a.encodeValue,v=t.get(e,_);if(v!==n){if(!v)throw new g('Failed to set cookie "'+e+'"');throw new p('Expected "'+n+'" for "'+e+'", got "'+v+'"')}}},t.remove=function(e,n){for(var i=u.getLocation().hostname.split(".");i.length>0;)t.set(e,null,r.extend({},n,{domain:"."+i.join("."),expires:new Date(0)}),!1),i.shift()};var h=["optimizely.test"],_="optimizelyDomainTestCookie"}),(function(e,t,n){var i=n(78),r=i("InternalError");t.BaseError=r,t.create=function(e){return i(e,r)}}),(function(e,t,n){function i(e,t){function n(t){if(!(this instanceof n))return new n(t);try{throw new Error(t)}catch(t){t.name=e,this.stack=t.stack}r&&this.stack&&(this.stack=a(this.stack,e,t)),this.message=t||"",this.name=e}return n.prototype=new(t||Error),n.prototype.constructor=n,n.prototype.inspect=function(){return this.message?"["+e+": "+this.message+"]":"["+e+"]"},n.prototype.name=e,n}var r=n(79)(),a=n(80);e.exports=i}),(function(e,t){"use strict";e.exports=function(){var e=new Error("yep");return!!e.stack&&"Error: yep\n"===e.stack.substr(0,11)}}),(function(e,t){"use strict";e.exports=function(e,t,n){var i=t;return n&&(i+=": "+n),e=i+e.slice(e.indexOf("\n"))}}),(function(e,t,n){function i(){return"loading"===t.getReadyState()}var r=n(16),a=r.get("stores/global");t.getDocumentElement=function(){return document.documentElement},t.getCookieString=function(){return document.cookie||""},t.setCookie=function(e){document.cookie=e},t.querySelector=function(e){return document.querySelector(e)},t.querySelectorAll=function(e){return document.querySelectorAll(e)},t.parseUri=function(e){var n=t.createElement("a");return n.href=e,n},t.childrenOf=function(e){return Array.prototype.slice.call(e.querySelectorAll("*"))},t.createElement=function(e){return document.createElement(e)},t.isReady=function(){return a.domContentLoadedHasFired()||"interactive"===document.readyState||"complete"===document.readyState},t.isLoaded=function(){return"complete"===document.readyState},t.addReadyHandler=function(e){return document.addEventListener("DOMContentLoaded",e),function(){t.removeReadyHandler(e)}},t.removeReadyHandler=function(e){return function(){document.removeEventListener("DOMContentLoaded",e)}},t.getReferrer=function(){return document.referrer},t.getReadyState=function(){return document.readyState},t.write=function(e){if(!i())throw new Error("Aborting attempt to write to already-loaded document");document.write(e)},t.appendToHead=function(e){return t.appendTo(document.head,e)},t.appendTo=function(e,t){e.appendChild(t)},t.addEventListener=function(e,t,n){return document.addEventListener(e,t,n),function(){document.removeEventListener(e,t,n)}},t.getCurrentScript=function(){if(document.currentScript)return document.currentScript},t.parentElement=function(e){for(var t=e.parentNode;t.nodeType!==Node.ELEMENT_NODE;)t=t.parentNode;return t}}),(function(e,t,n){var i,r,a="optimizely_data",o=n(77).create,s=n(83),u=n(41),c=t.Error=o("StorageError");try{r=u.getGlobal("localStorage")}catch(e){throw new c("Unable to read localStorage: "+e.toString())}if(!r)throw new c("localStorage is undefined");i=s.create(r,a),t.LocalStorage=i,t.isOptimizelyKey=function(e){return e.slice(0,a.length)===a}}),(function(e,t,n){function i(e,t){this.Xt=e,this.Qt=t}var r=n(2),a=n(23),o="$$";i.prototype.$t=function(e){return[this.Qt,e].join(o)},i.prototype.Jt=function(e){return e.replace(this.Qt+o,"")},i.prototype.setItem=function(e,t){try{this.Xt.setItem(this.$t(e),t)}catch(t){a.warn("Failed to save",e,"to localStorage:",t)}},i.prototype.removeItem=function(e){this.Xt.removeItem(this.$t(e))},i.prototype.getItem=function(e){var t=null;try{t=this.Xt.getItem(this.$t(e))}catch(e){}return t},i.prototype.keys=function(){var e=r.keys(this.Xt);return r.map(r.filter(e,r.bind((function(e){return r.includes(e,this.Qt)}),this)),r.bind(this.Jt,this))},i.prototype.allKeys=function(){return r.keys(this.Xt)},i.prototype.allValues=function(){return r.values(this.Xt)},e.exports={create:function(e,t){return new i(e,t)},mockStorage:{keys:function(){},getItem:function(e){},removeItem:function(e){},setItem:function(e,t){}}}}),(function(e,t,n){function i(){return u.getGlobal("performance")}var r=n(7),a=n(77).create,o=n(24),s=n(9),u=n(41),c=n(16),l=c.get("stores/rum"),d="optimizely:",f=t.Error=a("PerformanceError");t.time=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e;t.clearMarks(n+"Begin"),t.mark(n+"Begin")}}},t.timeEnd=function(e){if(l.getSampleRum()){var t=i();if(t&&t.mark){var n=d+e,a=t.getEntriesByName(n+"Begin");if(0===a.length)throw new f("Called timeEnd without matching time: "+e);t.clearMarks(n+"End"),t.mark(n+"End");var o=t.getEntriesByName(n+"End"),u=e+"Time",c=o[0].startTime-a[0].startTime;s.dispatch(r.SET_PERFORMANCE_MARKS_DATA,{name:u,data:{startTime:Math.round(1e3*a[0].startTime)/1e3,duration:Math.round(1e3*c)/1e3}})}}},t.now=function(){var e=i();return e?e.now():o.now()}}),(function(e,t,n){function i(e){var t;if(!o.find(I.getFrames(),{origin:e.origin}))return void m.debug("XDomain","No frame found for origin: "+e.origin);try{t=h.parse(e.data)}catch(t){return void m.debug("XDomain","Ignoring malformed message event:",e)}if("ERROR"===t.type)l.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0}),d.emitInternalError(new y("Xdomain Error: "+t.response));else if("SYNC"===t.type)o.each(I.getSubscribers(),(function(e){e(t.response.key,t.response.value)}));else{var n=I.getMessageById(t.id);if(!n){if(m.warn("XDomain","No stored message found for ID",t.id),o.isNumber(t.id)){var i=I.getNextMessageId();t.id>=i?d.emitInternalError(new y("Message ID is greater than expected maximum ID ("+t.id+">"+i+")")):t.id<0?d.emitInternalError(new y("Message ID is < 0: "+t.id)):d.emitInternalError(new y("No stored message found for message ID: "+t.id))}else d.emitInternalError(new y("Message ID is not a number: "+t.id));return}n.resolver(t.response),l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:t.id,message:o.extend({},n,{endTime:g.now(),response:t.response})})}}function r(e,t){return t||(t=I.getDefaultFrame()),new s(function(n){var i={data:o.extend({},e,{id:I.getNextMessageId()}),resolver:n};t?I.isDisabled()||a(i,t):l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:i.data.id,message:i})})}function a(e,t){var n=e.data;l.dispatch(u.XDOMAIN_SET_MESSAGE,{messageId:e.data.id,message:o.extend({},e,{startTime:g.now()})}),t.target.postMessage(h.stringify(n),t.origin)}var o=n(2),s=n(12).Promise,u=n(7),c=n(16),l=n(9),d=n(86),f=n(77).create,g=n(24),p=n(81),h=n(26),_=n(88),v=n(75),E=n(41),m=n(23),I=c.get("stores/xdomain"),y=t.Error=f("XDomainStorageError");t.setItem=function(e,t,n){return r({type:"PUT",key:e,value:t},n)},t.getItem=function(e,t){return r({type:"GET",key:e},t)},t.fetchAll=function(e){return r({type:"GETALL"},e)},t.deleteData=function(e,t){return r({type:"DELETE",visitorId:e},t)},t.subscribe=function(e){l.dispatch(u.XDOMAIN_ADD_SUBSCRIBER,{subscriber:e})},t.loadIframe=function(e,t){return new s(function(n){var i=p.createElement("iframe");i.src=e+t,i.hidden=!0,i.setAttribute("tabindex","-1"),i.setAttribute("title","Optimizely Internal Frame"),i.style.display="none",i.height=0,i.width=0,i.onload=function(){var r={id:I.getNextFrameId(),target:i.contentWindow,origin:e,path:t};l.dispatch(u.XDOMAIN_ADD_FRAME,r),n(r)},p.appendTo(p.querySelector("body"),i)})},t.getXDomainUserId=function(e,t){var n,i={},r=o.keys(e);return o.each(t,(function(e){i[e]=[],o.each(r,(function(t){var r=v.getUserIdFromKey(t,e);!n&&r&&(n=r),r&&!o.includes(i[e],r)&&i[e].push(r)}))})),m.debug("XDomain: Found userIds:",i),n},t.load=function(e,n){E.addEventListener("message",i);var r=function(){return!!p.querySelector("body")},s=function(){return t.loadIframe(e,n)};return _.pollFor(r).then(s).then((function(e){l.dispatch(u.XDOMAIN_SET_DEFAULT_FRAME,e),I.isDisabled()||o.each(I.getMessages(),(function(t){t.startTime||a(t,e)}))}))}}),(function(e,t,n){var i=n(87);t.emitError=function(e,t,n){var r=!0;i.emit({type:"error",name:e.name||"Error",data:{error:e,metadata:t}},n||!1,r)},t.emitInternalError=function(e,n){t.emitError(e,n,!0)},t.emitAnalyticsEvent=function(e,t){var n={type:"analytics",name:"trackEvent",data:e};i.emit(n,t)}}),(function(e,t,n){var i=n(2),r=n(5),a=n(7),o=n(86),s=n(16),u=n(9),c=n(23),l=s.get("stores/event_emitter");t.on=function(e){return e.token||(e.token=r.generate()),u.dispatch(a.ADD_EMITTER_HANDLER,e),e.token},t.off=function(e){u.dispatch(a.REMOVE_EMITTER_HANDLER,{token:e})},t.emit=function(e,t,n){var r=l.getHandlers(e,t);i.each(r,(function(i){try{i.handler.call({$di:s},e)}catch(r){!n&&i.emitErrors?(c.error("Error in handler for event:",e,r),o.emitError(r,null,t)):c.warn("Suppressed error in handler for event:",e,r)}}))}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=n(41),o=100,s=50;t.pollFor=function(e,t,n){var u,c;return i.isFunction(n)?c=n:(u=n||o,c=function(){return u--,u<-1}),t=t||s,new r(function(n,i){!(function r(){var o;if(!c()){try{var s=e();if(s)return n(s)}catch(e){o=e}return a.setTimeout(r,t)}i(o||new Error("Poll timed out"))})()})}}),(function(e,t,n){function i(e,n){var i;i=t.isInSameSession(e,n)?e.getValueOrDefault([s.FIELDS.SESSION_ID]):n.getValueOrDefault([s.FIELDS.TIME]),n.setFieldValue(s.FIELDS.SESSION_ID,i)}function r(e,n,i){var r,a=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]);r=t.isInSameSession(n,e)?a:i?a+1:a-1,n.setFieldValue(s.FIELDS.SESSION_INDEX,r)}var a=n(63).Event,o=n(24),s=n(64),u=n(63).EventBase;t.CURRENT_SESSION_INDEX=0;var c=18e5;t.isInSameSession=function(e,t){var n=e.getValueOrDefault([s.FIELDS.TIME],0),i=t.getValueOrDefault([s.FIELDS.TIME],0);return Math.abs(n-i)<c},t.updateSessionId=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_ID,t.getValueOrDefault([s.FIELDS.TIME]));var n=e.getValueOrDefault([s.FIELDS.TIME]),r=e.getValueOrDefault([s.FIELDS.SESSION_ID]),o=t.getValueOrDefault([s.FIELDS.TIME]);n="number"!=typeof n?o-36e5:n,r="number"!=typeof r?n:r,e=new a(new u("",""),n,r),i(e,t)},t.updateSessionIndex=function(e,t){if(!e)return void t.setFieldValue(s.FIELDS.SESSION_INDEX,0);var n=e.getValueOrDefault([s.FIELDS.TIME]),i=e.getValueOrDefault([s.FIELDS.SESSION_INDEX]),o=t.getValueOrDefault([s.FIELDS.TIME]),c=e.getValueOrDefault([s.FIELDS.SESSION_ID]);n="number"!=typeof n?o-36e5:n,i="number"!=typeof i?0:i,c="number"!=typeof c?n:c,e=new a(new u("",""),n,c,i),r(e,t,!1)},t.sessionize=function(e){var n=e.length;if(0!==n){e[0].setFieldValue(s.FIELDS.SESSION_ID,e[0].getValueOrDefault([s.FIELDS.TIME]));for(var a=1;a<n;a++)i(e[a-1],e[a]);var u=t.CURRENT_SESSION_INDEX,l=e[n-1].getValueOrDefault([s.FIELDS.TIME]),d=o.now();d-l>c&&(u+=1),e[n-1].setFieldValue(s.FIELDS.SESSION_INDEX,u);for(var a=n-1;a>0;a--)r(e[a],e[a-1],!0)}},t.reindexIfNecessary=function(e,t,n){function i(e){for(var t=0;t<e.length;t++){var n=e[t].getValueOrDefault([s.FIELDS.SESSION_INDEX]);e[t].setFieldValue(s.FIELDS.SESSION_INDEX,n+1)}}e.getValueOrDefault([s.FIELDS.SESSION_INDEX])===-1&&(i(t),i(n))},t.sessionSortPredicate=function(e,t){return e[s.FIELDS.TIME]-t[s.FIELDS.TIME]},t.applyMigrations=function(e){return!1}}),(function(e,t,n){var i=n(12).Promise,r=n(41);t.estimateStorage=function(){var e=r.getGlobal("navigator");try{return e.storage.estimate()}catch(e){return i.resolve({usage:null,quota:null})}}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(9),s=n(26),u=n(23),c=n(12).Promise,l=n(92),d=3;t.isCORSSupported=function(){var e=l.get("XMLHttpRequest");return"withCredentials"in new e},t.request=function(e){return e=i.extend({method:"GET",async:!0,contentType:"text/plain;charset=UTF-8"},e),new c(function(n,r){if(!t.isCORSSupported())return r("CORS is not supported");var a=l.get("XMLHttpRequest"),o=new a;o.onload=function(){e.success&&e.success(o),n(o)},o.onerror=function(){e.error&&e.error(o),r(o)},i.isObject(e.data)&&(e.data=s.stringify(e.data)),o.open(e.method,e.url,e.async),e.withCredentials&&(o.withCredentials=e.withCredentials),o.setRequestHeader("Content-Type",e.contentType),o.send(e.data)})},t.retryableRequest=function(e,n,s,l){if(!n)return c.reject(new Error("No id specified for request."));if(!t.isCORSSupported())return c.reject(new Error("CORS is not supported."));i.isUndefined(l)&&(l=d),i.isUndefined(s)&&(s=0);var f={id:n,timeStamp:a.now(),data:e,retryCount:s};return o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Sending event ",n),t.request(e).then((function(e){return o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),e}),(function(e){throw f.retryCount>=l?(o.dispatch(r.REMOVE_PENDING_EVENT,{id:n}),u.warn("Event ",f," could not be sent after ",l," attempts.")):(f.retryCount++,o.dispatch(r.SET_PENDING_EVENT,f),u.debug("Event ",f," failed to send, with error ",e," It will be retried ",l-s," times.")),e}))},t.sendBeacon=t.request}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(81),u=n(25),c=n(9),l=n(23),d=o.get("stores/sandbox"),f=n(41);t.shouldSandbox=function(){return!1},t.get=function(e){if(!e)throw new Error("Name is required");if(t.shouldSandbox()){d.isInitialized()||g();var n=d.get(e);if(n)return n}return f.getGlobal(e)};var g=function(){try{var e="optimizely_"+a.now(),t=s.createElement("iframe");t.name=e,t.style.display="none",s.appendToHead(t);var n=t.contentWindow,o=t.contentDocument;o.write("<script></script>"),o.close();var d=i.mapValues(u.SandboxedFunctions,(function(e){return n[e]}));c.dispatch(r.SANDBOXED_FUNCTIONS_ADDED,{sandboxedFunctions:d}),t.parentNode.removeChild(t)}catch(e){l.warn("Unable to create a sandbox: ",e)}}}),(function(e,t,n){var i=n(2),r=n(23),a=n(94),o=n(16),s=o.get("stores/plugins"),u=n(7),c=n(25),l=n(9),d=[n(107),n(108),n(129)],f=["clientMetadata","disable","load","optOut","rum"];t.push=function(e,t){var n,a,o,s;if(!i.isArray(e)&&i.isObject(e))s=i.isUndefined(e.version)?1:e.version,n=e.type,o=[e];else if(i.isArray(e))s=0,n=e[0],o=e.slice(1);else{if(!i.isString(e))return r.warn("API / Ignoring non-array/object/string argument:",e),!1;s=0,n=e,o=[]}if(d[s]&&(a=d[s][n]),t&&f.indexOf(n)===-1)return r.debug("API / Ignoring non high priority function:",n,o),!1;if(!a)return r.warn('API / No function found for "'+n+'" (v'+s+") with arguments:",o),!1;r.log('API / Executing: "'+n,'" with arguments:',o);try{a.apply(null,o),l.dispatch(u.RECORD_API_USAGE,{methodName:s?"v"+s+"."+n:n})}catch(e){r.error(e)}return!0},t.get=function(e){r.log('API / Getting module: "'+e+'"');var t=a[e];return t?i.isArray(t)&&(t=o.evaluate(t)):t=s.getPlugin(c.PluginTypes.apiModules,e),t?(l.dispatch(u.RECORD_API_USAGE,{methodName:"get."+e}),t):void r.warn('Module "'+e+'" not found.')}}),(function(e,t,n){function i(e,t,n,i){var r=e.getLayerState(i),a=t.get(i),s=n.get();if(!r||!a)return s?{layer:{name:s.layerName,id:s.layerId,policy:s.layerPolicy,integrationStringVersion:s.integrationStringVersion},experiment:{name:s.experimentName,id:s.experimentId},variation:{name:s.variationName,id:s.variationId},isLayerHoldback:!1}:null;if(l.isSingleExperimentPolicy(a.policy)&&r.decision.isLayerHoldback)return null;var u=r.decision.experimentId,c=r.decision.variationId;if(!u||!c)return null;var d,f;return(d=o.find(a.experiments,{id:u}))?(f=o.find(d.variations,{id:c}),f?{layer:{name:a.name,id:a.id,policy:a.policy,integrationStringVersion:a.integrationStringVersion},experiment:{name:d.name,id:d.id},variation:{name:f.name,id:f.id},isLayerHoldback:r.decision.isLayerHoldback}:null):null}function r(e,t,n,i,r,s){var u=[],c=e.getLayerStates();s.onlySingleExperiments&&(c=o.filter(c,(function(e){var n=t.get(e.layerId);return n&&l.isSingleExperimentPolicy(n.policy)})));var f=o.map(c,(function(e){var t=!!e.decision.variationId,n=e.decisionActivationId&&e.decisionActivationId===i.getActivationId(),r=d.getExperimentAndVariation(),a=r?r.variationId:null,s=t&&e.decision.variationId===a;return o.extend(e,{isActive:t&&n||s,visitorRedirected:s})})),g=r?o.filter(f,r):f;return o.each(g,(function(e){var i=a(e,t,n,s.includeOfferConsistency);i&&u.push(i)})),u}function a(e,t,n,i){var r,a,s=e.layerId,u=t.get(s)||{},c=o.map(u.experiments,(function(e){return o.pick(e,["id","name"])}));if(i||!u.decisionMetadata||!u.decisionMetadata.offerConsistency){var l={id:s,campaignName:u.name||null,experiment:null,allExperiments:c,variation:null,reason:e.decision.reason,isActive:e.isActive,visitorRedirected:e.visitorRedirected,isInCampaignHoldback:e.decision.isLayerHoldback};e.decision&&e.decision.experimentId&&(r=o.find(u.experiments,{id:e.decision.experimentId})),r&&(l.experiment=o.pick(r,["id","name","campaignName"])),r&&e.decision.variationId&&(a=o.find(r.variations,{id:e.decision.variationId})),a&&(l.variation=o.pick(a,["id","name"]));var d=o.map(e.decisionTicket.audienceIds,(function(e){return o.pick(n.get(e),["id","name"])}));return l.audiences=d,u.decisionMetadata&&u.decisionMetadata.offerConsistency&&(l.pageId=e.pageId),l}}var o=n(2),s=n(95),u=n(96),c=n(98),l=n(45),d=n(99);t.data=["stores/audience_data","stores/client_metadata","stores/event_data","stores/layer_data","stores/view_data","stores/group_data","stores/interest_group","stores/tag_group","stores/global",function(e,t,n,i,r,a,s,l,d){var f={},g={},p={},h={audiences:e.getAudiencesMap(),events:n.getEventsMap(),campaigns:f,pages:r.getPagesMap(),experiments:g,variations:p,projectId:d.getProjectId(),snippetId:d.getSnippetId(),accountId:d.getAccountId(),dcpServiceId:d.getDCPServiceId(),revision:d.getRevision(),clientName:t.getClientName(),clientVersion:t.getClientVersion()},_=c.dereferenceChangeId;return o.each(i.getAll(),(function(e){u.defineProperty(f,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"changes",(function(){return o.map(e.changes,_)}),"campaign"),u.defineProperty(t,"experiments",(function(){return o.map(e.experiments,(function(e){return g[e.id]}))}),"campaign"),t}),"campaignMap","byId"),o.each(e.experiments,(function(e){u.defineProperty(g,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"changes",(function(){return o.map(e.changes,_)}),"experiment"),u.defineProperty(t,"variations",(function(){return o.map(e.variations,(function(e){return p[e.id]}))}),"experiment"),t}),"experimentMap","byId"),o.each(e.variations,(function(e){u.defineProperty(p,e.id,(function(){var t=o.extend({},e);return u.defineProperty(t,"actions",(function(){return o.map(e.actions,(function(e){return o.extend({},e,{changes:o.map(e.changes,_)})}))}),"variation"),t}),"variationMap","byId")}))}))})),h.groups=a.getGroupsMap(),h}],t.session=["stores/session",function(e){return e.getState()}],t.visitor=["stores/visitor",function(e){return o.cloneDeep(e.getVisitorProfile())}],t.visitor_id=["stores/visitor_id",function(e){return{randomId:e.getRandomId()}}],t.state=["stores/audience_data","stores/layer_data","stores/layer","stores/view_data","stores/view","stores/global","stores/observed_redirect",function(e,t,n,a,u,c,f){return{getCampaignStates:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!1});return o.each(s,(function(e){a[e.id]=e})),a},getExperimentStates:function(i){var a=r(n,t,e,c,i,{includeOfferConsistency:!1,onlySingleExperiments:!0}),s=["audiences","variation","reason","visitorRedirected","isActive"],u=o.reduce(a,(function(e,t){var n=t.allExperiments[0];return e[n.id]=o.extend({},o.pick(t,s),{
id:n.id,experimentName:n.name,isInExperimentHoldback:t.isInCampaignHoldback}),e}),{});return u},getCampaignStateLists:function(i){var a={},s=r(n,t,e,c,i,{includeOfferConsistency:!0});return o.each(s,(function(e){var t=e.id;a[t]||(a[t]=[]),a[t].push(e)})),a},getPageStates:function(e){var t=u.getAll(),n=o.reduce(t,(function(e,t){var n=a.get(t.id);return e[t.id]=o.extend({},o.pick(n,["id","name","apiName","category","staticConditions","tags"]),o.pick(t,["isActive","metadata"])),e}),{});return e?o.pickBy(n,e):n},isGlobalHoldback:function(){return c.isGlobalHoldback()},getActivationId:function(){return c.getActivationId()},getVariationMap:function(){var e=n.getLayerStates(),i={};return o.each(e,(function(e){var n=t.get(e.layerId);if(e.decision&&e.decision.experimentId&&(i[e.decision.experimentId]={id:e.decision.variationId,name:null,index:null},n)){var r=o.find(n.experiments,{id:e.decision.experimentId});if(r&&e.decision.variationId)var a=o.find(r.variations,{id:e.decision.variationId}),s=o.findIndex(r.variations,{id:e.decision.variationId});a&&(i[e.decision.experimentId]={id:e.decision.variationId,name:a.name,index:s})}})),i},getActiveExperimentIds:function(){var e={};return o.each(this.getCampaignStateLists({isActive:!0}),(function(t){o.each(t,(function(t){e[t.experiment.id]=!0}))})),o.keys(e)},getRedirectInfo:function(){var e=d.getExperimentAndVariation();return e&&(e.referrer=d.getReferrer()),e},getDecisionString:function(e){if(!e)throw new Error("Must pass a config to getDecisionString");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);return r?s.generateAnalyticsString(r.layer,r.experiment,r.variation,r.isLayerHoldback,e.maxLength,e.shouldCleanString):null},getDecisionObject:function(e){if(!e)throw new Error("Must pass a config to getDecisionObject");e=o.extend({maxLength:255,shouldCleanString:!1},e);var r=i(n,t,f,e.campaignId);if(!r)return null;var a=s.formatNamesAndIdsForAnalytics(r.layer,r.experiment,r.variation,e.shouldCleanString),u=o.mapValues(a.names,(function(t,n){return s.combineAndTruncateIdAndName(t,a.idStrings[n],e.maxLength)})),c={experiment:u.experiment,variation:u.variation};return l.isSingleExperimentPolicy(r.layer.policy)||o.extend(c,{campaign:u.layer,holdback:r.isLayerHoldback}),c}}}],t.utils=n(100).create(),t.jquery=["env/jquery",function(e){return e}],t.event_emitter=n(106)}),(function(e,t,n){function i(e){return e.replace(/[^a-zA-Z0-9\.\~\!\*\(\)\']+/g,"_")}function r(e){return!u.isEmpty(e)&&u.includes(["and","or","not"],e[0])}function a(e,t){var n="";return u.isEmpty(t)?n=d:(n=u.reduce(t,(function(t,n){var r=e.get(n);return r?t+i(r.name?r.name:r.id)+",":t}),""),n=n.slice(0,-1)),n}function o(e,n,i,r,a,o){if(!_.isSingleExperimentPolicy(e.policy)||!r){var s=!_.isSingleExperimentPolicy(e.policy)&&r,c=t.formatNamesAndIdsForAnalytics(e,n,i,o),d=[c.names.experiment,c.names.variation],g=[c.idStrings.experiment,c.idStrings.variation];_.isSingleExperimentPolicy(e.policy)||(d.unshift(c.names.layer),g.unshift(c.idStrings.layer));var p=u.reduce(g,(function(e,t){return e+t.length}),0),h=d.length-1+(s?1:0),v=h*l.length,E=p+v;if(s&&(E+=f.length),E>a)throw new Error("The analytics string size is too low to send the entity IDs.");for(var m=a-E,I=d.length,y=[],S=d.length-1;S>=0;S--){var A=d[S],T=Math.min(A.length,Math.floor(m/I));m-=T,I--,y.unshift(A.substring(0,T))}var R=u.map(y,(function(e,t){return e+g[t]}));return s&&R.push(f),R.join(l)}}function s(e,n,i,r,a,o){var s=r?f:g,c=3*l.length,d=t.formatNamesAndIdsForAnalytics(e,n,i,o),p=d.names,h=d.idStrings,v=u.reduce(h,(function(e,t){return e+t.length}),0);if(v+c+s.length>a)throw new Error("The analytics string size is too low to send the campaign, experiment, and variation IDs.");var E=a-v-c-s.length,m={};m.variation=Math.min(p.variation.length,Math.floor(E/3)),E-=m.variation,m.experiment=Math.min(p.experiment.length,Math.floor(E/2)),E-=m.experiment,m.layer=E;var I={};u.each(p,(function(e,t){I[t]=e.substring(0,m[t])}));var y=[];return _.isSingleExperimentPolicy(e.policy)||y.push(I.layer+h.layer),y=y.concat([I.experiment+h.experiment,I.variation+h.variation,s]),y.join(l)}var u=n(2),c=n(16),l=":",d="everyone_else",f="holdback",g="treatment",p="",h=n(23),_=n(45);t.formatNamesAndIdsForAnalytics=function(e,t,n,o){var s={layer:e.name||p,experiment:t.name||p,variation:n.name||p};if(o&&(s=u.mapValues(s,i)),s.experiment===p&&(!e.integrationStringVersion||1===e.integrationStringVersion))if(r(t.audienceIds))s.experiment="Exp";else{var l=c.get("stores/audience_data");s.experiment=a(l,t.audienceIds)}var d={layer:"("+i(e.id)+")",experiment:"("+i(t.id)+")",variation:"("+i(n.id)+")"};return{names:s,idStrings:d}},t.combineAndTruncateIdAndName=function(e,t,n){var i=n-t.length;if(i<0&&(h.warn("maxLength must be at least long enough to fit the entity ID, which is length"+t.length+". Defaulting to only use entity ID as name."),e=p),e===p)return t;if(e.length>i){var r=Math.min(e.length,i);return e=e.substring(0,r),e+t}return e+" "+t},t.generateAnalyticsString=function(e,t,n,i,r,a){return e.integrationStringVersion&&2===e.integrationStringVersion?o(e,t,n,i,r,a):s(e,t,n,i,r,a)}}),(function(e,t,n){var i=n(97),r=n(7),a=n(9),o=n(23);t.defineProperty=function(e,t,n,s,u){i(e,t,(function(){var e=["prop",s,u||t].join(".");return o.debug('Evaluating getter: "'+e+'"'),a.dispatch(r.RECORD_API_USAGE,{methodName:e}),n()}),!0)}}),(function(e,t){"use strict";function n(e,t,n,i){Object.defineProperty(e,t,{get:function(){var e=n.call(this);return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},set:function(e){return Object.defineProperty(this,t,{value:e,enumerable:!!i,writable:!0}),e},enumerable:!!i,configurable:!0})}e.exports=n}),(function(e,t,n){function i(e){var n=r.cloneDeep(e);return n.changes&&(n.changes=r.map(n.changes,t.dereferenceChangeId)),n.experiments&&r.each(n.experiments,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId)),e.variations&&r.each(e.variations,(function(e){e.actions&&r.each(e.actions,(function(e){e.changes&&(e.changes=r.map(e.changes,t.dereferenceChangeId))}))}))})),n}var r=n(2),a=n(16),o=n(22),s=n(96),u=a.get("stores/change_data");t.translateDecisionToCampaignDecision=function(e){return c(r.cloneDeep(e),{layerId:"campaignId",isLayerHoldback:"isCampaignHoldback"})},t.translateLayerEventToCampaignEvent=function(e){var t={};return s.defineProperty(t,"campaign",(function(){var t=i(e.data.layer);return t}),"campaignEvent"),t.decisionTicket=e.data.decisionTicket,t.decision=this.translateDecisionToCampaignDecision(e.data.decision),t.audiences=e.data.audiences,{type:"lifecycle",name:"campaignDecided",data:t}},t.translateViewActivatedToPageActivated=function(e){return{type:"lifecycle",name:"pageActivated",data:{page:e.data.view}}},t.dereferenceChangeId=function(e){var t=u.getChange(e);return t?o.safeReference(t):e};var c=function(e,t){var n=r.omit(e,r.keys(t));return r.each(t,(function(t,i){n[t]=e[i]})),n}}),(function(e,t,n){var i=n(2),r=n(16),a=r.get("stores/global_state"),o=r.get("stores/layer_data"),s=r.get("stores/observed_redirect");t.getReferrer=function(){var e=s.get();return e?e.referrer:i.isString(a.getEffectiveReferrer())?a.getEffectiveReferrer():null},t.getExperimentAndVariation=function(){var e=s.get();if(e&&i.isString(e.variationId))return i.pick(e,["experimentId","variationId"]);if(i.isString(a.getEffectiveVariationId())){var t=a.getEffectiveVariationId(),n=o.getExperimentByVariationId(t),r=n?n.id:null;return{experimentId:r,variationId:t}}return null}}),(function(e,t,n){var i=n(12).Promise,r=n(101).observeSelector,a=n(102).poll,o=n(104).waitForElement,s=n(105).waitUntil;t.create=function(){return{observeSelector:r,poll:a,Promise:i,waitForElement:o,waitUntil:s}}}),(function(e,t,n){function i(){if(f.shouldObserveChangesIndefinitely()){var e={attributes:!0,childList:!0,subtree:!0,characterData:!0},t=g.getDocumentElement(),n=new MutationObserver(function(){this.disconnect(),l.each(l.keys(E),a),this.observe(t,e)});return function(i){var r=E[i];n.observe(t,e),r.cancelObservation=function(){delete E[i],l.isEmpty(E)&&n.disconnect()}}}return function(e){var t=h.poll(l.partial(a,e));E[e].cancelObservation=function(){t(),delete E[e]}}}function r(e){var t=E[e];t&&t.cancelObservation&&t.cancelObservation()}function a(e){if(E[e]){if(o(E[e]))return 0===E[e].matchedCount&&l.isFunction(E[e].options.onTimeout)&&E[e].options.onTimeout(),void r(e);var t=document.querySelectorAll(E[e].selector);t.length&&(l.each(t,(function(t){t.Zt&&t.Zt[e]||E[e].callbackQueue.push(t)})),s(e))}}function o(e){var t=e.options.timeout;if(null!==t)if("function"==typeof t)try{return t()}catch(e){}else if(Date.now()-e.startTime>t)return!0;return!1}function s(e){for(;E[e]&&E[e].callbackQueue.length;){var t=E[e].callbackQueue.shift();if(u(t,e),E[e].matchedCount=E[e].matchedCount+1,E[e].callback(t),E[e]&&E[e].options.once)return void r(e)}}function u(e,t){e.Zt||(e.Zt={}),e.Zt[t]=!0}function c(e){try{document.querySelector(e)}catch(e){return!1}return!0}var l=n(2),d=(n(7),n(16)),f=d.get("stores/directive"),g=n(81),p=(n(25),n(9),n(5).generate),h=n(102),_=n(41),v=(d.get("stores/rum"),{once:!1,onTimeout:null,timeout:null}),E={},m=function(e){(m=i())(e)};t.observeSelector=function(e,t,n){if(!c(e))throw new Error("observeSelector expects a valid css selector as its first argument");if(!l.isFunction(t))throw new Error("observeSelector expects a function as its second argument");if(n&&(!l.isObject(n)||l.isFunction(n)))throw new Error("observeSelector expects an object as its third argument");var i=p();return n=l.assign({},v,n||{}),E[i]={callback:t,callbackQueue:[],matchedCount:0,options:n,selector:e,startTime:Date.now()},m(i),_.setTimeout(l.bind(a,null,i),0),l.partial(r,i)}}),(function(e,t,n){function i(e){l[e]&&a.each(l[e].callbacks,(function(e){e.call(null)}))}function r(e,t){l[t]&&l[t].callbacks[e]&&(delete l[t].callbacks[e],a.some(l[t].callbacks)||(clearInterval(l[t].id),delete l[t]))}var a=n(2),o=(n(7),n(16)),s=(n(25),n(9),n(5).generate),u=n(41),c=n(103).DEFAULT_INTERVAL,l=(o.get("stores/rum"),{});t.poll=function(e,t){a.isNumber(t)||(t=c),l[t]||(l[t]={callbacks:{},id:u.setInterval(a.partial(i,t),t)});var n=s();return l[t].callbacks[n]=e,a.partial(r,n,t)},t.cancelAll=function(){a.each(l,(function(e,t){clearInterval(e.id),delete l[t]}))}}),(function(e,t){e.exports={DEFAULT_INTERVAL:20}}),(function(e,t,n){var i=n(12).Promise,r=n(101).observeSelector;t.waitForElement=function(e){return new i(function(t,n){r(e,t,{once:!0})})}}),(function(e,t,n){var i=n(12).Promise,r=n(102).poll;t.waitUntil=function(e){return new i(function(t,n){if(e())return void t();var i=r((function(){e()&&(i(),t())}))})}}),(function(e,t,n){var i=n(87);t.on=function(e){return e.publicOnly=!0,i.on(e)},t.off=i.off,t.emit=function(e){i.emit(e)}}),(function(e,t,n){function i(e){var t,n={};if(e)if(r(e))t=Number(e);else{if("object"!=typeof e)throw new Error("tracker","Revenue argument",e,"not a number.");if(n=a.extend({},e),"revenue"in n){if(!r(n["revenue"]))throw new Error("tracker","Revenue value",n["revenue"],"not a number.");t=Number(n["revenue"]),delete n["revenue"]}}return a.isUndefined(t)||(n.revenue=t),n}function r(e){return a.isNumber(e)||a.isString(e)&&Number(e)==e}var a=n(2),o=n(108);t.activateGeoDelayedExperiments=function(e,t){t||(t=e.lists?"odds":"cdn3"),o.dataFromSource({data:e,source:t})},t.activateSiteCatalyst=function(e){e&&e.sVariable&&o.integrationSettings({id:"adobe_analytics",settings:{sVariableReference:e.sVariable}})},t.bucketUser=t.bucketVisitor=function(e,t){if(e&&t){var n={experimentId:String(e)};t>256?n.variationId=String(t):n.variationIndex=String(t),o.bucketVisitor(n)}},t.disable=function(e){o.disable({scope:e})},t.log=function(e){a.isUndefined(e)&&(e=!0),o.log({level:e?"INFO":"OFF"})},t.optOut=function(e){a.isUndefined(e)&&(e=!0),o.optOut({isOptOut:e})},t.setCookieDomain=function(e){o.cookieDomain({cookieDomain:e})},t.setCookieExpiration=function(e){o.cookieExpiration({cookieExpirationDays:e})},t.setDimensionValue=function(e,t){var n={};n[e]=t,o.user({attributes:n})},t.setUserId=function(e){o.user({userId:e})},t.storeThirdPartyData=function(e,t){o.dataFromSource({source:e,data:t})},t.trackEvent=function(e,t){o.event({eventName:e,tags:i(t)})}}),(function(e,t,n){function i(e){var t;return e.eventId&&(t=I.create(e.eventId,e.eventName,"custom")),b.updateAllViewTags(),function(){var n=g.trackCustomEvent(e.eventName,e.tags,t);n?R.log("API / Tracking custom event:",e.eventName,e.tags):R.log("API / Not tracking custom event:",e.eventName)}}function r(e){var t;return e.eventData&&(t=I.create(e.eventData.id,e.eventData.apiName,"click",e.eventData)),function(){var e=g.trackClickEvent(t);e?R.log("API / Tracking click event:",e):R.log("API / Not tracking click event:",e)}}function a(e){var t=e.eventData,n=T.createLayerState(t.layerId,t.experimentId,t.variationId),i=T.createSingle(t.layerId,t.experimentId,t.variationId);return function(){T.recordLayerDecision(n.layerId,n.decisionTicket,n.decision),R.log("API / Tracking decision event:",n),g.trackDecisionEvent(n.decision,n.decisionTicket,i)}}function o(e){var t=b.create(e.eventData.id,e.eventData.apiName),n=b.createState(t.id);return function(){var e=g.trackViewActivation(t,n);e?R.log("API / Tracking pageview event:",e):R.log("API / Not tracking pageview event:",e)}}var s=n(2),u=n(7),c=n(93),l=n(94),d=n(109),f=n(25),g=n(110),p=n(117),h=n(6),_=n(77).create,v=n(24),E=n(118),m=n(121),I=n(122),y=n(87),S=n(9),A=n(26),T=n(113),R=n(23),w=n(123),D=n(114),b=n(124),O=n(75),N=n(16),C=N.get("stores/dimension_data"),P=N.get("stores/view_data"),L=N.get("stores/visitor_id"),V=N.get("stores/layer_data"),k=N.get("stores/directive"),x=!1,F=!1,M=x||F,U=86400,G=90,B=t.ApiListenerError=_("ApiListenerError");t.event=function(e){var t;switch(e.eventType){case"click":t=r(e);break;case"decision":t=a(e);break;case"pageview":t=o(e);break;case"custom":default:t=i(e)}L.getBucketingId()?t():S.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postActivate,cleanupFn:t})},t.clientMetadata=function(e){M&&(S.dispatch(u.SET_CLIENT_NAME,e.clientName),S.dispatch(u.SET_CLIENT_VERSION,e.clientVersion)),x&&e.forceVariationIds&&S.dispatch(u.LOAD_DIRECTIVE,{forceVariationIds:e.forceVariationIds})},t.priorRedirectString=function(e){M&&D.load(e.value)},t.microsnippetError=function(e){if(M){var t=e.errorData.metadata&&e.errorData.metadata.err||{};t.name=e.errorData.code;var n={engine:e.engine,msVersion:e.errorData.msVersion,requestId:e.errorData.requestId,projectId:e.errorData.projectId,snippetKey:e.errorData.snippetKey,args:e.errorData.args};m.handleError(t,n)}},t.rum=function(e){S.dispatch(u.SET_RUM_DATA,e.eventData)},t.page=function(e){var t=P.getByApiName(e.pageName);if(!t)throw new Error('Unknown page "'+e.pageName+'"');var n=!e.hasOwnProperty("isActive")||e.isActive,i=function(){n?b.activateViaAPI(t,e.tags):(b.deactivate(t),R.log("API / Deactivated Page",b.description(t)))};L.getBucketingId()?i():S.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postViewsActivated,cleanupFn:i})},t.tags=function(e){b.setGlobalTags(e.tags)},t.user=function(e){M&&e.visitorId&&(L.getBucketingId()?(R.log("API / Setting visitor Id:",e.visitorId),O.setId({randomId:e.visitorId})):(R.log("API / Setting visitor Id for activation:",e.visitorId),S.dispatch(u.SET_VISITOR_ID_VIA_API,e.visitorId))),x&&s.each(["IP","location","queryParams","url"],(function(t){e[t]&&(R.log("API / Setting",t,":",e[t]),z(t,e[t],!1))})),R.log("API / Setting visitor custom attributes:",e.attributes),s.each(e.attributes,(function(e,t){var n,i,r=t,a=C.getById(t)||C.getByApiName(t);a&&(r=a.id,n=a.apiName,i=a.segmentId||a.id);var o={id:i,value:e};n&&(o.name=n),z(r,o,!0)}))};var z=function(e,t,n){var i=[{key:n?["custom",e]:[e],value:t,metadata:{lastModified:v.now()}}],r=function(){S.dispatch(u.SET_VISITOR_ATTRIBUTES,{attributes:i})};L.getBucketingId()?r():S.dispatch(u.ADD_CLEANUP_FN,{lifecycle:f.Lifecycle.postVisitorProfileLoad,cleanupFn:r})};t.optOut=function(e){var t=!e.hasOwnProperty("isOptOut")||e.isOptOut;E.setOptOut(t)},t.cookieExpiration=function(e){var t=e.cookieExpirationDays;t<G&&(R.error('Argument "cookieExpirationDays"=',t,"less than minimum days:",G,", setting to minimum."),t=G),R.log("API / Setting cookie age to",t,"days."),S.dispatch(u.SET_COOKIE_AGE,t*U)},t.extendCookieLifetime=function(e){e=s.extend({isEnabled:!0},e),R.log("API / Setting cookie automatic lifetime extension to",e.isEnabled),S.dispatch(u.SET_COOKIE_AUTO_REFRESH,e.isEnabled)},t.cookieDomain=function(e){R.log("API / Setting cookie domain to",e.cookieDomain),S.dispatch(u.SET_COOKIE_DOMAIN,e.cookieDomain)},t.disable=function(e){if(e.scope){if("tracking"!==e.scope)throw new Error('Unknown "scope" for disable: '+e.scope);R.log("API / Disabling tracking"),S.dispatch(u.LOAD_DIRECTIVE,{trackingDisabled:!0})}else R.log("API / Disabling everything"),S.dispatch(u.LOAD_DIRECTIVE,{disabled:!0})},t.log=function(e){var t=e.level,n=e.match;s.isUndefined(t)&&(t="INFO"),s.isUndefined(n)&&(n=""),R.setLogMatcher(n),R.setLogLevel(t)},t.registerModule=function(e){var t="custom/"+e.moduleName;if(l[t]||c.get(t))throw new Error('Module name "'+t+'" is reserved. Will not be registered as plugin.');w.registerApiModule(t,e.module)},t.dataFromSource=function(e){var t=e.source;h.makeAsyncRequest(t),h.resolveRequest(t,e.data)},t.addListener=function(e){if(!s.isFunction(e.handler))throw new Error("A handler function must be supplied");e=s.omit(e,"type"),e.publicOnly=!0,e.emitErrors=!0;var t=e.handler;e.handler=function(e){try{return t(e)}catch(e){throw new B(e)}},y.on(e)},t.removeListener=function(e){if(!e.token)throw new Error("Must supply a token to removeListener");y.off(e.token)},t.load=function(e){e.data=s.extend({},e.data),d.normalizeClientData(e.data),S.dispatch(u.DATA_LOADED,{data:e.data})},t.integrationSettings=function(e){if(!e.id)throw new Error("id is required");if(!e.settings)throw new Error("settings is required");S.dispatch(u.SET_INTEGRATION_SETTINGS,s.extend({},e.settings,{id:e.id}))},t.bucketVisitor=function(e){if(!e.variationId&&s.isUndefined(e.variationIndex)||e.variationId&&e.variationIndex)throw new Error("One of a variationId or a variationIndex is required.");if(!e.experimentId)throw new Error("An experimentId is required.");var t,n,i=e.campaignId;if(i){if(t=V.get(i),!t)throw new Error("Could not find layer "+i)}else if(t=V.getLayerByExperimentId(e.experimentId),i=t.id,!i)throw new Error("Could not find layer for experiment "+e.experimentId);if(n=s.find(t.experiments,{id:e.experimentId}),!n)throw new Error("Could not find experiment "+e.experimentId+" in layer "+i);var r=e.variationId;if(s.isUndefined(e.variationIndex)){if(!s.find(n.variations,{id:r}))throw new Error("Cound not find variation "+r+" in experiment "+e.experimentId)}else if(r=n.variations[e.variationIndex].id,!r)throw new Error("Could not find variation at index "+e.variationIndex+" in experiment "+e.experimentId);O.updateVariationIdMap(i,e.experimentId,r),L.getBucketingId()&&O.persistVariationIdMap()},t.waitForOriginSync=function(e){if(!s.isArray(e.canonicalOrigins))throw new Error("canonicalOrigins must be an array. Got: "+A.stringify(e.canonicalOrigins));s.each(e.canonicalOrigins,(function(e){if(!s.isString(e))throw new Error("Each item in canonicalOrigins must be a string. Found type "+typeof e)})),S.dispatch(u.XDOMAIN_SET_CANONICAL_ORIGINS,{canonicalOrigins:e.canonicalOrigins})},t.disableCrossOrigin=function(){R.log("API / cross origin tracking is DISABLED"),S.dispatch(u.XDOMAIN_SET_DISABLED,{disabled:!0})},t.activate=function(){k.shouldActivate()?p.emitActivateEvent():R.debug("Not activating.")},t.sendEvents=function(){p.emitSendEvents()},t.holdEvents=function(){p.emitHoldEvents()}}),(function(e,t,n){var i=n(2),r=n(25);t.normalizeClientData=function(e){!e.listTargetingKeys&&e.listTargetingCookies&&(e.listTargetingKeys=i.map(e.listTargetingCookies,(function(e){return{type:r.ListTargetingKeyTypes.COOKIE,key:e}})),delete e.listTargetingCookies)}}),(function(e,t,n){function i(e,t){var n=V.description(t),i=Q.isExpectingRedirect(),r=Q.getLayerId();if(i&&r===t.id){var a=G.TrackLayerDecisionTimingFlags.preRedirectPolicy;e.timing=a,E(a,[G.PreRedirectPolicies.PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT],e),k.log("Called trackLayerDecision for redirect Campaign",n,e)}else{var a=G.TrackLayerDecisionTimingFlags.nonRedirectPolicy;e.timing=a,E(a,[G.NonRedirectPolicies.TRACK_IMMEDIATELY],e),k.log("Called trackLayerDecision for non-redirect Campaign",n,e)}}function r(e,t,n,i,r,a){var o=V.description(a),s=d(e,t,n,i);_("onLayerDecision",s,r?"trackLayerDecision":void 0),k.log("Analytics / Called onLayerDecision for Campaign",o,s)}function a(e,t,n){var i=f({activeViewStates:K.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()}),r=n&&n.pageId?p(n):K.getActiveViewTags(),a=I.extend({},r,t),o=n&&n.category?n.category:O.OTHER;return I.extend(i,{eventEntityId:n&&n.id,eventApiName:e,eventCategory:o,eventTags:a})}function o(e,t){var n=f({activeViewStates:K.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()});return I.extend(n,{pageId:e.id,viewCategory:e.category,eventTags:t.metadata})}function s(e){var t=f({activeViewStates:K.getActiveViewStates(),visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()}),n=e.config&&e.config.selector?e.config.selector:e.eventFilter.selector,i=e.apiName,r=e.category||O.OTHER,a=e.id,o=p(e);return I.extend(t,{eventApiName:i,eventCategory:r,eventEntityId:a,eventTags:o,pageId:e.pageId,selector:n})}function u(){var e=f({activeViewStates:[],visitorProfile:$.getVisitorProfile(),layerStates:q.getLayerStatesForAnalytics()});return I.extend(e,{eventTags:{}})}function c(e,t,n,i){var r=null,a=null,o=null;if(t.experimentId){var s=I.find(i.experiments,{id:t.experimentId});if(s&&(r=s.name||null,o=s.integrationSettings,t.variationId)){var u=I.find(s.variations,{id:t.variationId});u&&(a=u.name||null)}}var c=F.getReferrer()||D.getReferrer(),l={sessionId:H.getSessionId(),decisionTicketAudienceIds:n.audienceIds,visitorId:ee.getRandomId(),decisionId:e,activationId:j.getActivationId(),namespace:j.getNamespace(),timestamp:T.now(),pageId:n.pageId||null,variationId:t.variationId,variationName:a,experimentId:t.experimentId,experimentName:r,layerId:t.layerId,layerName:i.name,layerPolicy:i.policy,accountId:j.getAccountId(),projectId:j.getProjectId(),revision:String(j.getRevision()),clientName:z.getClientName(),clientVersion:z.getClientVersion(),referrer:c,integrationStringVersion:i.integrationStringVersion||1,integrationSettings:I.extend({},i.integrationSettings,o)};return l}function l(e,t,n){var i=I.extend({},e,{isLayerHoldback:t,isGlobalHoldback:!1,clientName:I.isNull(e.clientName)?R.NAME:e.clientName,integrationStringVersion:I.isNull(e.integrationStringVersion)?1:e.integrationStringVersion,anonymizeIP:I.isNull(j.getAnonymizeIP())?void 0:j.getAnonymizeIP(),activationId:j.getActivationId(),decisionTicketAudienceIds:[],sessionId:H.getSessionId(),activeViewStates:[],userFeatures:h(n),layerStates:q.getLayerStatesForAnalytics()});return i}function d(e,t,n,i){return{decisionId:e,timestamp:T.now(),revision:j.getRevision(),clientName:z.getClientName(),clientVersion:z.getClientVersion(),projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:H.getSessionId(),visitorId:ee.getRandomId(),decision:t,decisionTicket:n,userFeatures:h(i),layerStates:q.getLayerStatesForAnalytics()}}function f(e){var t=F.getReferrer()||D.getReferrer(),n={eventId:B.generate(),timestamp:T.now(),revision:j.getRevision(),clientName:z.getClientName(),clientVersion:z.getClientVersion(),projectId:j.getProjectId(),accountId:j.getAccountId(),activationId:j.getActivationId(),sessionId:H.getSessionId(),isGlobalHoldback:j.isGlobalHoldback(),namespace:j.getNamespace(),referrer:t,visitorId:ee.getRandomId(),activeViewStates:e.activeViewStates,layerStates:e.layerStates,userFeatures:h(e.visitorProfile)};return n}function g(e){var t=K.getViewState(e),n=t&&t.isActive?t.metadata:{};return n}function p(e){var t={};return e.pageId?g(e.pageId):t}function h(e){var t=Y.getAllPlugins(b.PluginTypes.visitorProfileProviders),n=I.filter(t,{shouldTrack:!0}),i={id:null,type:null,name:"",value:null,shouldIndex:!0};return I.reduce(n,(function(t,n){try{var r=n.provides,a=e[r],o=[];if(!I.isUndefined(a)){I.isObject(a)?o=I.map(a,(function(e,t){var n=I.isObject(e)?e:{value:e};return I.extend({},{type:r,name:t},n)})):o.push({type:r,value:a});var s=I(o).map((function(e){return I.pick(I.extend({},i,e),I.keys(i))})).filter((function(e){return!!e.value})).value();t=t.concat(s)}}catch(e){k.warn("Error evaluating userFeature against visitorProfile:",e)}return t}),[])}function _(e,t,n){var i=v(e,n);k.debug("Found "+i.length+" analytics integrations defining a "+e+" hook"),k.debug("Calling each with data: ",t),I.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(t),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function v(e,t){var n=[];return I.each(Y.getAllPlugins(b.PluginTypes.analyticsTrackers),(function(i,r){if(i[e]&&(!t||!i[t]))try{n.push({name:r,hookFn:w.evaluate(i[e])})}catch(e){k.error(e)}})),n}function E(e,t,n){var i=m(e,t);k.debug("Found "+i.length+" analytics integrations  defining a trackLayerDecision "+e+" timing of "+t.join("|")),k.debug("Calling each with data: ",n),I.each(i,(function(e){try{k.debug("Calling plugin: "+e.name),e.hookFn(n),k.debug("Called plugin: "+e.name)}catch(e){k.error(e)}}))}function m(e,t){var n=[];return I.each(Y.getAllPlugins(b.PluginTypes.analyticsTrackers),(function(i,r){I.includes(t,i[e])&&n.push({name:r,hookFn:i.trackLayerDecision})})),n}var I=n(2),y=n(7),S=n(86),A=n(72),T=n(24),R=n(32),w=n(16),D=n(81),b=n(25),O=n(74),N=n(87),C=n(111),P=n(112),L=n(9),V=n(113),k=n(23),x=(n(84),n(12).Promise),F=n(99),M=n(114),U=n(116),G=n(115),B=n(5),z=w.get("stores/client_metadata"),j=w.get("stores/global"),H=w.get("stores/session"),K=w.get("stores/view"),Y=w.get("stores/plugins"),q=w.get("stores/layer"),W=w.get("stores/layer_data"),X=w.get("stores/observed_redirect"),Q=w.get("stores/pending_redirect"),$=w.get("stores/visitor"),J=w.get("stores/directive"),Z=w.get("stores/event_data"),ee=w.get("stores/visitor_id"),te="COOKIE",ne=!0,ie=1e3;t.trackClientActivation=function(){if(J.shouldSendTrackingData()){var e=u();return _("onClientActivation",e),e}},t.trackCustomEvent=function(e,t,n){t=t||{},n||(n=Z.getByApiName(e));var i=a(e,t,n),r={name:e,type:P.CUSTOM,category:i.eventCategory,tags:I.omit(i.eventTags,"revenue")};if(I.isUndefined(t.revenue)||(r.revenue=t.revenue),S.emitAnalyticsEvent({name:n?n.name||n.apiName:e,apiName:n?n.apiName:void 0,type:P.CUSTOM,tags:I.omit(i.eventTags,"revenue"),category:i.eventCategory,metrics:r.revenue?{revenue:r.revenue}:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData())return A.addEvent(r),_("onCustomEvent",i),i},t.trackDecisionEvent=function(e,t,n){n||(n=W.get(e.layerId));var a=B.generate();L.dispatch(y.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t.pageId,decisionId:a});var o;if(te){o=c(a,e,t,n);var s=Q.isExpectingRedirect(),u=Q.getLayerId();if(s&&u===n.id){M.persist(o,te);var d=V.description(n);k.log("Relaying decision for redirect Campaign",d,V.description(n))}}if(!J.shouldSendTrackingData())return void k.log("Analytics / Not tracking decision for Campaign",V.description(n));var f=$.getVisitorProfile();if(te){var g=l(o,e.isLayerHoldback,f);i(g,n),r(a,e,t,f,!0,n)}else r(a,e,t,f,!1,n)},t.trackPostRedirectDecisionEvent=function(){if(!J.shouldSendTrackingData())return x.resolve();if(X.hasTracked())return x.resolve();var e=X.get();if(!e)return x.resolve();var t=$.getVisitorProfile(),n=l(e,!1,t),i=G.TrackLayerDecisionTimingFlags.postRedirectPolicy;if(n.timing=i,E(i,[G.PostRedirectPolicies.TRACK_IMMEDIATELY],n),ne){var r=new x(function(e,t){var n=N.on({filter:{type:C.TYPES.LIFECYCLE,name:"originsSynced"},handler:function(){e(),N.off(n)}})}),a=U.makeTimeoutPromise(ie);return x.race([r,a]).then((function(){k.log("Calling trackers after successful sync")}),(function(e){k.warn("Calling trackers after failed sync:",e)})).then((function(){t=$.getVisitorProfile(),n=l(e,!1,t),n.timing=G.TrackLayerDecisionTimingFlags.postRedirectPolicy,E(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA)}))["catch"]((function(e){k.error("Error when calling trackers after sync:",e)}))}return E(G.TrackLayerDecisionTimingFlags.postRedirectPolicy,[G.PostRedirectPolicies.TRACK_AFTER_SYNC],n),L.dispatch(y.REGISTER_TRACKED_REDIRECT_DATA),x.resolve()},t.trackClickEvent=function(e){var t=s(e),n={name:e.apiName,type:e.eventType,category:t.eventCategory,tags:t.eventTags};if(S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e?e.apiName:void 0,type:e.eventType,category:t.eventCategory,tags:t.eventTags,metrics:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData())return A.addEvent(n),_("onClickEvent",t),t},t.trackViewActivation=function(e,t){if(t||(t=K.getViewState(e.id)),!t.isActive)return void k.debug("Inactive view passed to `trackViewActivation`");var n=o(e,t),i={name:e.apiName,type:P.PAGEVIEW,category:n.viewCategory,tags:n.eventTags};return S.emitAnalyticsEvent({name:e.name||e.apiName,apiName:e.apiName,type:P.PAGEVIEW,category:n.viewCategory,tags:n.eventTags,metrics:{}},!J.shouldSendTrackingData()),J.shouldSendTrackingData()?(A.addEvent(i),L.dispatch(y.TRACK_VIEW_ACTIVATED_EVENT,{pageId:e.id,eventData:n}),_("onPageActivated",n),n):void 0}}),(function(e,t){t.TYPES={ACTION:"action",ANALYTICS:"analytics",EDITOR:"editor",LIFECYCLE:"lifecycle"}}),(function(e,t){e.exports={CLICK:"click",CUSTOM:"custom",ENGAGEMENT:"engagement",PAGEVIEW:"pageview"}}),(function(e,t,n){var i=n(2),r=n(7),a=n(24),o=n(16),s=n(9),u=o.get("stores/global"),c=o.get("stores/session"),l=2e3;t.recordLayerDecision=function(e,t,n){return s.dispatch(r.RECORD_LAYER_DECISION,{layerId:e,decision:n,decisionTicket:t,sessionId:c.getSessionId(),activationId:u.getActivationId(),timestamp:a.now(),revision:u.getRevision(),namespace:u.getNamespace(),pageId:t.pageId}),n},t.relatedAudienceIds=function(e){var t={},n=["and","or","not"];return i.each(e.experiments,(function(e){i.each(i.flattenDeep(e.audienceIds),(function(e){i.includes(n,e)||(t[e]=!0)}))})),i.keys(t)},t.getActivationTimeout=function(e){var t=e.activation;return t&&null!==t.timeout&&void 0!==t.timeout?t.timeout:l},t.description=function(e){return(e.name?'"'+e.name+'" ':"")+"("+e.id+")"},t.createSingle=function(e,t,n){var i={id:e,policy:"single_experiment",holdback:0,experiments:[{id:t,variations:[{id:n,actions:[]}]}]};return i},t.createLayerState=function(e,t,n){var i={layerId:e,decision:{layerId:e,experimentId:t,variationId:n,isLayerHoldback:!1},decisionTicket:{audienceIds:[]}};return i},t.getIntegrationTypes=function(e){return i.keys(i.reduce(i.keys(e.integrationSettings),(function(e,t){return i.isNaN(Number(t))||(t="custom"),e[t]=1,e}),{}))}}),(function(e,t,n){function i(e){try{var t=r(e)}catch(e){return v.error("Relay / Error computing redirect relay cookie: ",e),void g.emitError(e)}v.debug("Relay / Setting redirect relay cookie:",t);try{f.set(h.COOKIES.REDIRECT,t,{maxAge:5,encodeValue:!1})}catch(e){v.error("Relay / Failed to set redirect relay cookie",e),g.emitError(e)}}function r(e){var t=[],n=l.reduce(e,(function(e,n,i){var r=S[i];return r?(r.isMulti?l.forEach(n,(function(t,n){t=r.valueToValueString?r.valueToValueString(t,n):String(t),l.isNull(t)||(t=(r.encodeValueString||encodeURIComponent)(t),e.push(encodeURIComponent(r.relayName+I+n)+"="+t))})):l.isNull(n)||(n=(r.valueToValueString||String)(n),n=(r.encodeValueString||encodeURIComponent)(n),e.push(r.relayName+"="+n)),e):(t.push(i),e)}),[]);if(t.length)throw new Error("Relay / Don't know how to relay some fields:",t);return n.sort(),n.join("&")}function a(){var e=f.get(h.COOKIES.REDIRECT,!1);if(e)return v.log("Relay / Found redirect cookie:",e),e}function o(e){var t={},n=e.split("&");return l.forEach(n,(function(e){var n=e.split("=");if(2!==n.length)return void v.warn("Relay / Skipping invalid segment:",e);
var i=f.safeDecodeURIComponent(n[0]),r=A[i];if(!r&&(r=l.find(y,(function(e){return e.isMulti&&0===i.indexOf(e.relayName+I)})),!r))return void v.warn("Relay / Skipping segment with unknown field identifier:",e,i);var a=n[1];try{if(r.isMulti){t[r.name]=t[r.name]||{};var o=i.substring(r.relayName.length+I.length);a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a,o),t[r.name][o]=a}else a=(r.decodeValueString||f.safeDecodeURIComponent)(a),a=(r.valueFromValueString||l.identity)(a),t[r.name]=a}catch(t){return v.warn("Relay / Skipping segment due to decode or parse error:",e,t),void g.emitError(t)}})),t}function s(e,t){var n=null;if(e){var i=m.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.serializeSettings))try{n=i.serializeSettings(e)}catch(e){v.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}}return n}function u(e,t){var n=null,i=m.getPlugin(h.PluginTypes.analyticsTrackers,t);if(i&&l.isFunction(i.deserializeSettings))try{n=i.deserializeSettings(e)}catch(e){v.warn("Analytics / Failed to persist integrationSettings for plugin:",t,e)}return n}function c(e){var t=e.pageId||void 0;_.dispatch(d.RECORD_LAYER_DECISION,{layerId:e.layerId,decision:{layerId:e.layerId,experimentId:e.experimentId,variationId:e.variationId,isLayerHoldback:!1},decisionTicket:{audienceIds:e.decisionTicketAudienceIds,bucketingId:e.visitorId,globalHoldback:0,preferredVariationMap:void 0,pageId:t,activationId:e.activationId},sessionId:e.sessionId,activationId:e.activationId,timestamp:e.timestamp,revision:e.revision,namespace:e.namespace,pageId:t}),_.dispatch(d.RECORD_LAYER_DECISION_EVENT_ID,{layerId:e.layerId,pageId:t,decisionId:e.decisionId}),_.dispatch(d.ACTION_EXECUTED,{sessionId:e.sessionId,layerId:e.layerId,pageId:e.pageId,timestamp:e.timestamp,activationId:e.activationId})}var l=n(2),d=n(7),f=n(76),g=n(86),p=n(16),h=n(25),_=n(9),v=n(23),E=n(115),m=p.get("stores/plugins"),I=".",y=[{name:"sessionId",relayName:"s"},{name:"decisionTicketAudienceIds",relayName:"as",valueToValueString:function(e){return l.map(e,encodeURIComponent).join(",")},encodeValueString:l.identity,decodeValueString:l.identity,valueFromValueString:function(e){return l.map(e.split(","),f.safeDecodeURIComponent)}},{name:"decisionId",relayName:"d"},{name:"activationId",relayName:"aId"},{name:"pageId",relayName:"vId",isNullable:!0},{name:"variationId",relayName:"v",isNullable:!0},{name:"referrer",relayName:"r"},{name:"timestamp",relayName:"t",valueFromValueString:Number},{name:"visitorId",relayName:"i"},{name:"projectId",relayName:"p"},{name:"revision",relayName:"n"},{name:"clientName",relayName:"cN",isNullable:!0},{name:"clientVersion",relayName:"cV"},{name:"namespace",relayName:"ns"},{name:"accountId",relayName:"a"},{name:"layerId",relayName:"l"},{name:"layerName",relayName:"lN",isNullable:!0},{name:"layerPolicy",relayName:"lP"},{name:"experimentId",relayName:"x",isNullable:!0},{name:"experimentName",relayName:"xN",isNullable:!0},{name:"variationName",relayName:"vN",isNullable:!0},{name:"integrationStringVersion",relayName:"isv",valueFromValueString:Number,isNullable:!0},{name:"integrationSettings",relayName:"iS",isMulti:!0,valueToValueString:s,valueFromValueString:u,isNullable:!0}],S={},A={};l.forEach(y,(function(e){S[e.name]=e,A[e.relayName]=e})),t.persist=function(e,t){t===E.RedirectRelayMedia.COOKIE?i(e):v.error("Relay / Unsupported redirect relay medium: "+t)},t.load=function(e){if(e||(e=a()),e){var t=o(e);if(t){var n=[];return l.forEach(y,(function(e){(l.isNull(t[e.name])||l.isUndefined(t[e.name]))&&(e.isNullable?t[e.name]=null:(delete t[e.name],n.push(e.name)))})),n.length?void v.error("Relay / Observed redirect data with missing fields:",n):(_.dispatch(d.LOAD_REDIRECT_DATA,t),_.dispatch(d.ADD_CLEANUP_FN,{lifecycle:h.Lifecycle.postVisitorProfileLoad,cleanupFn:function(){c(t)}}),t)}}}}),(function(e,t,n){var i=n(8);t.TrackLayerDecisionTimingFlags=i({preRedirectPolicy:null,postRedirectPolicy:null,nonRedirectPolicy:null}),t.PreRedirectPolicies=i({PERSIST_BEFORE_AND_TRACK_DURING_REDIRECT:null,PERSIST_BEFORE_REDIRECT:null}),t.PostRedirectPolicies=i({TRACK_IMMEDIATELY:null,TRACK_AFTER_SYNC:null}),t.NonRedirectPolicies=i({TRACK_IMMEDIATELY:null}),t.RedirectRelayMedia=i({COOKIE:null})}),(function(e,t,n){var i=n(12).Promise,r=n(41);t.makeTimeoutPromise=function(e){return new i(function(t,n){r.setTimeout((function(){n(new Error("Timed out after "+e+" ms"))}),e)})}}),(function(e,t,n){function i(e){var t=["type","selector","attributes","value"],n=r.extend({},e);return n.changeSet=r.map(e.changeSet,(function(e){return r.pick(l.dereferenceChangeId(e),t)})),n}var r=n(2),a=n(16),o=a.get("stores/audience_data"),s=n(87),u=n(111),c=n(96),l=n(98);t.emitLayerDecided=function(e){var t=e.decisionTicket?e.decisionTicket.audienceIds:[],n=r.map(t,(function(e){return{id:e,name:o.get(e).name}})),i={type:u.TYPES.LIFECYCLE,name:"layerDecided",data:r.extend(e,{audiences:n})},a=l.translateLayerEventToCampaignEvent(i);s.emit(i),s.emit(a)},t.emitViewActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewActivated",data:e},n=l.translateViewActivatedToPageActivated(t);s.emit(t),s.emit(n)},t.emitViewsActivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"viewsActivated",data:e};s.emit(t)},t.emitPageDeactivated=function(e){var t={type:u.TYPES.LIFECYCLE,name:"pageDeactivated",data:e};s.emit(t)},t.emitActivateEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activate"},!0)},t.emitActivatedEvent=function(){s.emit({type:u.TYPES.LIFECYCLE,name:"activated"})},t.emitInitializedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"initialized"};window.optimizely&&(window.optimizely.initialized=!0),s.emit(e)},t.emitOriginsSyncedEvent=function(){var e={type:u.TYPES.LIFECYCLE,name:"originsSynced"};s.emit(e)},t.emitActionAppliedEvent=function(e){var t={type:e.type,campaignId:e.layerId,pageId:e.pageId,experimentId:e.experimentId,variationId:e.variationId};c.defineProperty(t,"changes",(function(){return i(e).changeSet}),"actionAppliedEvent");var n={type:u.TYPES.ACTION,name:"applied",data:t};s.emit(n)},t.emitActionsForDecisionAppliedEvent=function(e,t){var n={decision:e};c.defineProperty(n,"actions",(function(){return r.map(t,i)}),"appliedAllForDecisionEvent");var a={type:u.TYPES.ACTION,name:"appliedAllForDecision",data:n};s.emit(a)},t.emitSendEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"sendEvents"};s.emit(e)},t.emitHoldEvents=function(){var e={type:u.TYPES.ANALYTICS,name:"holdEvents"};s.emit(e)}}),(function(e,t,n){function i(){var e=Boolean(m.result(window.optimizely,"initialized"));R.dispatch(I.LOAD_DIRECTIVE,{alreadyInitialized:e})}function r(){R.dispatch(I.LOAD_DIRECTIVE,{mutationObserverAPISupported:N.isMutationObserverAPISupported()})}function a(){var e=N.getUserAgent()||"";if(!m.isString(e))return void w.warn("Directive / userAgent not a string");e=e.toLowerCase();var t=["googlebot","yahoo! slurp","bingbot","bingpreview","msnbot","keynote","ktxn","khte","gomezagent","alertsite","yottaamonitor","pingdom.com_bot","aihitbot","baiduspider","adsbot-google","mediapartners-google","applebot","catchpoint","phantomjs","moatbot","facebookexternalhit"],n=function(t){if(m.includes(e,t))return w.warn("Directive / Matches bot:",t),!0};m.some(t,n)&&(w.log("Directive / Disabling tracking"),R.dispatch(I.LOAD_DIRECTIVE,{trackingDisabled:!0}))}function o(){var e=S.get(T.COOKIES.OPT_OUT),n=b.getQueryParamValue(C.OPT_OUT),i="You have successfully opted out of Optimizely for this domain.",r="You are NOT opted out of Optimizely for this domain.",a="true"===n||"false"===n;e?a&&n!==e?t.setOptOut("true"===n):R.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:"true"===e}):"true"===n&&t.setOptOut(!0),a&&N.alert("true"===n?i:r)}function s(){var e=!1,t=[C.AB_PREVIEW,C.DISABLE];t.push(C.EDITOR);for(var n=0;n<t.length;n++)if("true"===b.getQueryParamValue(t[n])){w.warn("Directive / Not activating because "+t[n]+" is set."),e=!0;break}R.dispatch(I.LOAD_DIRECTIVE,{disabled:e})}function u(){R.dispatch(I.LOAD_DIRECTIVE,{isPreview:!1})}function c(){var e=b.getQueryParamValue(C.LEGACY_PREVIEW);e&&w.log("Directive / Is legacy preview mode"),R.dispatch(I.LOAD_DIRECTIVE,{isLegacyPreview:!!e})}function l(){R.dispatch(I.LOAD_DIRECTIVE,{isEditor:!1})}function d(){R.dispatch(I.LOAD_DIRECTIVE,{isSlave:!1})}function f(){var e=N.getGlobal("optlyDesktop"),t=!(!e||m.isUndefined(e["p13nInner"]));t&&w.log("Directive / Is running in desktop app editor"),R.dispatch(I.LOAD_DIRECTIVE,{isRunningInDesktopApp:t})}function g(){var e="true"===b.getQueryParamValue(C.EDITOR_V2);e&&w.log("Directive / Is running in editor"),R.dispatch(I.LOAD_DIRECTIVE,{isRunningInV2Editor:e})}function p(){var e=S.get(T.COOKIES.TOKEN)||null,t=b.getQueryParamValue(C.TOKEN)||e;R.dispatch(I.LOAD_DIRECTIVE,{projectToken:t})}function h(){var e=S.get(T.COOKIES.PREVIEW),t=[],n=b.getQueryParamValue(C.FORCE_AUDIENCES);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=O.parse(e);t=i.forceAudienceIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceAudienceIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&(w.log("Directive / Force Audience IDs:",t),R.dispatch(I.LOAD_DIRECTIVE,{forceAudienceIds:t}))}function _(){var e=S.get(T.COOKIES.PREVIEW),t=[],n=b.getQueryParamValue(C.FORCE_VARIATIONS);if(n)t=S.safeDecodeURIComponent(n).split(",");else if(e)try{var i=O.parse(e);t=i.forceVariationIds}catch(t){var r=new D("Failed to parse previewCookie in registerForceVariationIds: "+e),a={originalMessage:t.message,userError:!0};y.emitError(r,a)}t.length&&(w.log("Directive / Force Variation IDs:",t),R.dispatch(I.LOAD_DIRECTIVE,{forceVariationIds:t}))}function v(){var e=b.getQueryParamValue(C.FORCE_TRACKING);e&&R.dispatch(I.LOAD_DIRECTIVE,{forceTracking:e})}function E(){var e="OFF",t=b.getQueryParamValue("optimizely_log");if(t){var n=t.split(":");""!==n[0]&&(e=String(n[0]).toUpperCase()),"undefined"!=typeof n[1]&&w.setLogMatch(n[1])}w.setLogLevel(e)}var m=n(2),I=n(7),y=n(86),S=n(76),A=n(77).create,T=n(25),R=n(9),w=n(23),D=t.JSONParseError=A("JSONParseError"),b=n(119),O=n(26),N=n(41),C={AB_PREVIEW:"optimizely_show_preview",DISABLE:"optimizely_disable",EDITOR:"optimizely_editor",EDITOR_V2:"optimizely_p13n",FORCE_AUDIENCES:"optimizely_x_audiences",FORCE_VARIATIONS:"optimizely_x",LEGACY_PREVIEW:"optimizely_show_preview",OPT_OUT:"optimizely_opt_out",PREVIEW_LAYER_IDS:"optimizely_preview_layer_ids",TOKEN:"optimizely_token",FORCE_TRACKING:"optimizely_force_tracking"};t.populateDirectiveData=function(){E(),a(),i(),r(),o(),s(),l(),u(),c(),d(),f(),g(),p(),h(),_(),v()};var P=31536e3;t.setOptOut=function(e){e?(w.warn("Directive / Opting out"),S.set(T.COOKIES.OPT_OUT,"true",{maxAge:10*P},!0)):S.remove(T.COOKIES.OPT_OUT),R.dispatch(I.LOAD_DIRECTIVE,{shouldOptOut:e})}}),(function(e,t,n){var i=n(120),r=n(41);t.getLanguage=function(){return r.getNavigatorLanguage()},t.getQueryParams=i.getQueryParams,t.getQueryParamValue=i.getQueryParamValue,t.getUrl=function(){return r.getHref()}}),(function(e,t,n){var i=n(2),r=n(41);t.getQueryParams=function(){var e=r.getLocationSearch()||"";if(0===e.indexOf("?")&&(e=e.substring(1)),0===e.length)return[];for(var t=e.split("&"),n=[],i=0;i<t.length;i++){var a="",o="",s=t[i].split("=");s.length>0&&(a=s[0]),s.length>1&&(o=s[1]),n.push([a,o])}return n},t.getQueryParamValue=function(e){for(var n=t.getQueryParams(),i=0;i<n.length;i++)if(n[i][0]===e)return n[i][1]},t.queryStringFromMap=function(e){return i.map(e,(function(e,t){return t+"="+e})).join("&")}}),(function(e,t,n){var i=n(2),r=n(77).BaseError,a=n(24),o=n(16),s=n(81),u=n(23),c=n(41),l=n(91),d=o.get("stores/client_metadata"),f=o.get("stores/global"),g="https://errors.client.optimizely.com";t.handleError=function(e,t){function n(){return l.request({url:g+"/log",method:"POST",data:v,contentType:"application/json"}).then((function(e){u.log("Error Monitor / Logged error with response: ",e)}),(function(e){u.error("Failed to log error, response was: ",e)}))}var o=e.name||"Error",p=e.message||"",h=e.stack||null;e instanceof r&&(p instanceof Error?(p=p.message,h=e.message.stack):h=null);var _=!1,v={timestamp:a.now(),clientEngine:_&&t&&t.engine?t.engine:d.getClientName(),clientVersion:d.getClientVersion(),accountId:f.getAccountId(),projectId:f.getProjectId(),errorClass:o,message:p,stacktrace:h},E=i.map(f.getExperimental(),(function(e,t){return{key:"exp_"+t,value:String(e)}}));t&&i.forEach(t,(function(e,t){i.isObject(e)||E.push({key:t,value:String(e)})}),[]),i.isEmpty(E)||(v.metadata=E),u.error("Logging error",v),s.isLoaded()?n():c.addEventListener("load",n)}}),(function(e,t,n){var i=n(2);t.create=function(e,t,n,r){var a=i.extend({category:"other"},r,{id:e,apiName:t,eventType:n});return a}}),(function(e,t,n){var i=n(2),r=n(7),a=n(16),o=n(25),s=n(87),u=n(9);t.registerApiModule=function(e,t){i.isArray(t)&&(t=a.evaluate(t)),u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.apiModules,name:e,plugin:t})},t.registerDependency=function(e,t){var n=a.get(e);n||a.register(e,t)},t.registerVisitorProfileProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.visitorProfileProviders,name:e.provides,plugin:e})},t.registerViewProvider=function(e){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewProviders,name:e.provides,plugin:e})},t.registerAudienceMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.audienceMatchers,name:e,plugin:t})},t.registerViewMatcher=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewMatchers,name:e,plugin:t})},t.registerAnalyticsTracker=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.analyticsTrackers,name:e,plugin:t})},t.registerViewTagLocator=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTagLocators,name:e,plugin:t})},t.registerAudiencePlugin=function(e){e.dependencies&&i.each(e.dependencies,(function(e,n){t.registerDependency(n,e)}));var n,r="vendor."+e.vendor;n=i.isString(e.provider)?a.get(e.provider)(e.vendor):i.isFunction(e.provider)?e.provider(e.vendor):i.cloneDeep(e.provider),t.registerVisitorProfileProvider(i.extend(n,{provides:r}));var o;o=i.isString(e.matcher)?a.get(e.matcher):e.matcher;var s={fieldsNeeded:[r],match:function(e,t){return o(e[r],t)}};t.registerAudienceMatcher(r,s)},t.registerWidget=function(e){i.isArray(e)&&(e=a.evaluate(e));var t=s.on({filter:{type:"showWidget",name:e.widgetId},handler:e.showFn}),n=s.on({filter:{type:"hideWidget",name:e.widgetId},handler:e.hideFn});return{showToken:t,hideToken:n}},t.registerChangeApplier=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.changeAppliers,name:e,plugin:t})},t.registerDecider=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.deciders,name:e,plugin:t})},t.registerEventImplementation=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.eventImplementations,name:e,plugin:t})},t.registerViewTrigger=function(e,t){u.dispatch(r.REGISTER_PLUGIN,{type:o.PluginTypes.viewTriggers,name:e,plugin:t})}}),(function(e,t,n){function i(e,t){r.forEach(e,(function(e){if(e.eventType!==d.CUSTOM){var n=_.getPlugin(l.PluginTypes.eventImplementations,e.eventType);n?t?n.attach(e):n.detach(e):g.warn("No implementation found for event type:",e.eventType,"needed for event:",e)}}))}var r=n(2),a=n(7),o=n(117),s=n(125),u=n(24),c=n(16),l=n(25),d=n(112),f=n(9),g=n(23),p=n(126),h=c.get("stores/event_data"),_=c.get("stores/plugins"),v=c.get("stores/rum"),E=c.get("stores/view"),m=c.get("stores/view_data");t.parseViewTags=function(e){var n=t.evaluateViewTags(e);t.setParsedViewTags(e.id,n)},t.updateAllViewTags=function(){var e=E.getActiveViewStates();r.each(e,(function(e){var n=m.get(e.id);t.parseViewTags(n)}))},t.evaluateViewTags=function(e){if(!e.tags)return{};var t=r.reduce(e.tags,(function(e,t){try{e[t.apiName]=p.getTagValue(t)}catch(e){e instanceof p.Error?g.warn("Page / Ignoring unparseable tag",t,e):g.error(e)}return e}),{});return t},t.createViewTicket=function(){var e={};return r.each(_.getAllPlugins(l.PluginTypes.viewProviders),(function(t){e[t.provides]=c.evaluate(t.getter)})),e},t.registerViews=function(e){f.dispatch(a.REGISTER_VIEWS,{views:e})},t.activateViaAPI=function(e,n){n&&t.setUserSuppliedViewTags(e.id,n),t.activateMultiple([e],n)},t.getViewsAndActivate=function(e){var n=m.getAllViewsForActivationType(e);t.activateMultiple(n)},t.activateMultiple=function(e,n){var s=[];r.each(e,(function(e){var r,u=E.getViewState(e.id),c=t.createViewTicket();if(u.isActive)if(e.deactivationEnabled)try{t.hasValidStaticConditions(e,c)||t.deactivate(e)}catch(n){g.error("Page / Error evaluating whether to deactivate page ",t.description(e),n)}else g.log("Not activating Page, already active ",t.description(e));else{try{if(r=t.hasValidStaticConditions(e,c),!r)return void g.log("Page / Failed to match page conditions for "+t.description(e),e.staticConditions)}catch(n){return void g.error("Page / Error evaluating whether to activate page ",t.description(e),n)}if(s.push(e),t.setViewActiveState(e,!0),g.log("Activated Page",t.description(e)),o.emitViewActivated({view:e,metadata:n}),v.getSampleRum()){var d=e.activationType||l.ViewActivationTypes.immediate;f.dispatch(a.RECORD_ACTIVATION_TYPE_USAGE,{activationType:d,entityId:e.id})}var p=h.getByPageId(e.id);i(p,!0)}})),r.isEmpty(s)||o.emitViewsActivated({views:s})},t.deactivate=function(e){var n=E.getViewState(e.id);if(!n.isActive)return void g.log("Not deactivating Page, already inactive ",t.description(e));t.setViewActiveState(e,!1),g.log("Deactivated Page",t.description(e)),o.emitPageDeactivated({page:e});var r=h.getByPageId(e.id);i(r,!1)},t.setViewActiveState=function(e,t){f.dispatch(a.SET_VIEW_ACTIVE_STATE,{view:e,timestamp:u.now(),isActive:t})},t.setGlobalTags=function(e){f.dispatch(a.SET_GLOBAL_TAGS,e)},t.setParsedViewTags=function(e,t){f.dispatch(a.UPDATE_PARSED_VIEW_METADATA,{pageId:e,metadata:t})},t.setUserSuppliedViewTags=function(e,t){f.dispatch(a.UPDATE_USER_SUPPLIED_METADATA,{pageId:e,metadata:t})},t.hasValidStaticConditions=function(e,t){var n={};if(r.isEmpty(e.staticConditions))return!0;var i=_.getAllPlugins(l.PluginTypes.viewMatchers);g.groupCollapsed("Page / Evaluating staticConditions:",e.staticConditions),g.debug("Matching to current value:",t);var o=s.evaluate(e.staticConditions,(function(e){var r=e.type,a=i[r];if(!a)throw new Error("Page / No matcher found for type="+r);return a&&(n[e.type]||(n[e.type]=!0)),a.match(t,e)}));return g.groupEnd(),v.getSampleRum()&&o&&f.dispatch(a.RECORD_VIEW_FEATURE_USAGE,{featuresUsed:r.keys(n),entityId:e.id}),o},t.description=function(e){return'"'+e.name+'" ('+e.id+")"},t.shouldTriggerImmediately=function(e){return e===l.ViewActivationTypes.DOMChanged||e===l.ViewActivationTypes.URLChanged||e===l.ViewActivationTypes.immediate||!e},t.create=function(e,t){var n={id:e,apiName:t,category:"other"};return n},t.createState=function(e){var t={id:e,isActive:!0,metadata:{},parsedMetadata:{},userSuppliedMetadata:{}};return t}}),(function(e,t,n){function i(e,t){for(var n,i,r=0;r<e.length;r++){if(n=o(e[r],t),n===!1)return!1;s.isUndefined(n)&&(i=!0)}if(!i)return!0}function r(e,t){for(var n,i=!1,r=0;r<e.length;r++){if(n=o(e[r],t),n===!0)return!0;s.isUndefined(n)&&(i=!0)}if(!i)return!1}function a(e,t){if(1!==e.length)return!1;var n=o(e[0],t);return s.isUndefined(n)?void 0:!n}function o(e,t){var n;if(s.isArray(e)){var i,r;e[0]in d?(i=e[0],r=e.slice(1)):(i=l.OR,r=e),c.groupCollapsed('Condition / Applying operator "'+i+'" with args',u.stringify(r));try{n=d[i](r,t),c.debug("Condition / Result:",n)}finally{c.groupEnd()}return n}return n=t(e),c.debug("Condition / Evaluated:",u.stringify(e),":",n),n}var s=n(2),u=n(26),c=n(23),l={AND:"and",OR:"or",NOT:"not"},d={};d[l.AND]=i,d[l.OR]=r,d[l.NOT]=a,e.exports={evaluate:o}}),(function(e,t,n){var i=n(25).PluginTypes,r=n(16),a=r.get("stores/plugins");t.getTagValue=function(e){var n=a.getPlugin(i.viewTagLocators,e.locatorType);if(!n)throw new t.Error("No locator registered for tag locatorType: "+e.locatorType);return n(e)},t.enums=n(127),t.Error=n(128).Error}),(function(e,t){t.locatorType={CSS_SELECTOR:"css_selector",JAVASCRIPT:"javascript",URL_REGEX:"url_regex"},t.valueType={STRING:"string",NUMBER:"number",CURRENCY:"currency"},t.nodeNames={INPUT:"INPUT",SELECT:"SELECT"}}),(function(e,t,n){var i=n(77).create;t.Error=i("TagError")}),(function(e,t){}),(function(e,t,n){var i=n(16);i.register("env/jquery",n(131))}),(function(e,t,n){var i,r=n(41);try{i=$}catch(e){}var a=r.getGlobal("$");i&&i!==a?e.exports=i:e.exports=a}),(function(e,t,n){var i=n(23),r=n(41),a="optimizelyDataApi";t.registerFunction=function(e,t){var n=r.getGlobal(a);n||(n={},r.setGlobal(a,n)),n[e]||(n[e]=t)},t.unregisterFunction=function(e){var t=r.getGlobal(a);t&&t[e]&&(t[e]=function(){i.log('Ignoring attempt to call "'+a+"."+e+'" which has been unregistered.')})},t.getFunction=function(e){return r.getGlobal(a)[e]}}),(function(e,t,n){var i=n(81),r=n(23),a=n(91);t.addScriptAsync=function(e,t){var n=i.querySelector("head"),a=i.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,t&&(a.onload=t),n.insertBefore(a,n.firstChild),r.debug("Asynchronously requesting "+e)},t.addScriptSync=function(e,n){try{var o="optimizely_synchronous_script_"+Math.floor(1e5*Math.random());if(e.indexOf('"')!==-1)return void r.error("Blocked attempt to load unsafe script: "+e);i.write('<script id="'+o+'" src="'+e+'"></script>');var s=i.querySelector("#"+o);if(!s)throw new Error("Document.write failed to append script");s.onload=n,s.onerror=function(i){r.warn("Failed to load script ("+e+") synchronously:",i),t.addScriptAsync(e,n)}}catch(i){r.debug("Document.write failed for "+e+": "+i.message);var u=function(e){var t=new Function(e.responseText);t(),n&&n()};return a.request({url:e,async:!1,contentType:"text/plain",success:u})["catch"]((function(i){r.error("Failed to load "+e+" via synchronous XHR: "+i.message),t.addScriptAsync(e,n)}))}}}),(function(e,t,n){function i(){var e=null;D.isNumber(e)&&0===ve.getCount()?($.log("Activating after delay of",e,"ms because no Experiments are running"),q.dispatch(P.SET_RUM_DATA,{data:{activateDfd:!0}}),ce.setTimeout(V.emitActivateEvent,e)):V.emitActivateEvent()}function r(e){Oe.handleError(e.data.error,e.data.metadata)}function a(){D.isArray(window.optimizely)&&(window.optimizely=D.filter(window.optimizely,(function(e){var t=!0;return!be.push(e,t)})))}function o(){var e=n(85),i=!!ue.getCurrentId(),r=!!i&&ue.hasSomeData();i?r?$.log("xd / Existing visitor; has data on this origin"):$.log("xd / Existing visitor; new to this origin"):$.log("xd / New visitor");var a=he.getAccountId(),o="https://a11391265293.cdn.optimizely.com".replace("__SUBDOMAIN__","a"+a+"."),u="/client_storage/a"+a+".html";e.subscribe((function(e,t){ue.checkKeyForVisitorId(e)&&Q.setItem(e,t)}));var c=e.fetchAll().then((function(t){var n=De.getCanonicalOrigins();if(n){var i=e.getXDomainUserId(t,n);i&&($.log("Syncing cross-origin visitor randomId:",i),ue.maybePersistVisitorId({randomId:i}))}return ue.deleteOldForeignData(),t})).then(t.persistItemsWithId).then((function(e){if(ue.loadForeignData(),i&&!r){var t=!D.isEmpty(e);$.debug("xd / Loaded foreign data? ",t),s(t)}$.log("Loaded visitor data from foreign origins"),V.emitOriginsSyncedEvent()}),(function(e){throw i&&!r&&($.debug("xd / Failed to load foreign data:",e),s(!1,e)),e}));return ne.all([e.load(o,u)["catch"]((function(e){throw $.debug("xd / Failed to load iframe:",e),i&&!r&&s(!1,e),e})),c["catch"]((function(e){$.debug("xd / Ignored error syncing foreign data (expected if waitForOriginSync used):",e.message),$.debug("xd / Enqueuing sync to happen after visitorId set."),q.dispatch(P.ADD_CLEANUP_FN,{lifecycle:j.Lifecycle.postVisitorProfileLoad,cleanupFn:V.emitOriginsSyncedEvent})}))])}function s(e,t){q.dispatch(P.SET_RUM_DATA,{data:{extras:{xdAttempt:e,xdError:t?t.toString():void 0}}})}function u(e){var t=Se.getVisitorProfile();return ue.populateEagerVisitorData(e,t)}function c(e,t,n){e=e||[];var i=Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders),r=he.getGlobalHoldbackThreshold(),a=Se.getVisitorProfile();ue.populateLazyVisitorData(i,a);var o=Re.getBucketingId();if(!o)throw new Error("bucketingId not set");var s,u=Se.getVisitorProfile();if(t&&!Le){var c=we.getVariationIdMap();s=c[t.id]}var l={bucketingId:o,visitorProfile:u,audiences:e,globalHoldback:r,preferredVariationMap:s,layer:t};return t&&n&&G.isPageIdRelevant(t)?D.map(n,(function(e){return G.createTicket(D.extend({},l,{pageId:e}))})):[G.createTicket(l)]}function l(e){return{bucketingId:Re.getBucketingId(),preferredLayerId:we.getPreferredLayerMap()[e.id]}}function d(e){var n=ve.getAllByPageIds(e),i=pe.getForceVariationIds(),r=pe.getForceAudienceIds(),a=!D.isEmpty(i);a&&$.log("Force variations are in use. Disabling mutual exclusivity.");var o=a?{individual:n}:D.reduce(n,(function(e,t){return t.groupId?e.groups[t.groupId]||(e.groups[t.groupId]=_e.get(t.groupId)):e.individual.push(t),e}),{groups:{},individual:[]});$.log("Deciding Campaigns/Experiments for Page(s)",e);var s=D.map(o.groups,W.description).join(", ");$.log("Groups:",s);var u=D.map(o.individual,X.description).join(", ");$.log("Campaigns/Experiments not in Groups (by Campaign id):",u);var c=D.map(o.groups,D.partial(f,i,r,e))||[],l=D.map(o.individual,(function(n){var a=D.filter(n.pageIds,D.partial(D.includes,e));return t.decideAndExecuteLayerASAP(i,r,a,n)})),d=c.concat(l);return ne.all(d).then((function(t){var n=D.filter(t,(function(e){return!!e}));return $.log("All Campaigns/Experiments for Page(s) (by Campaign id)",e,"resolved:",D.map(n,X.description).join(", ")),n}))}function f(e,n,i,r){try{var a=l(r),o=G.decideGroup(r,a);if(o.reason)return $.debug("Not activating Group",W.description(r),"; reason:",o.reason),ye.getSampleRum()&&q.dispatch(P.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),ne.resolve();var s=ve.get(o.layerId);if(!s)return $.debug("Visitor was bucketed into a Campaign ("+o.layerId+") which is not in this snippet"),ne.resolve();var u=D.filter(s.pageIds,D.partial(D.includes,i));return D.isEmpty(u)?($.debug("Not activating Group",W.description(r),"; reason: visitor was bucketed into a Campaign/Experiment not related to the currently-activating Page(s)"),ne.resolve()):(ye.getSampleRum()&&q.dispatch(P.RECORD_LAYER_FEATURE_USAGE,{feature:"mutex",entityId:r.id}),t.decideAndExecuteLayerASAP(e,n,u,s))}catch(e){return $.error("Error getting decision for Group",W.description(r),"; ",e),ne.reject(e)}}function g(e,t,n,i){return new ne(function(r,a){try{E(i,e,t,n,(function(a){D.each(a,(function(r){var a=r.pageId?[r.pageId]:n;$.debug("Deciding layer: ",i,"with decisionTicket: ",r,"and actionViewIds: ",a),p(i,e,t,a,r)})),r(i)}))}catch(e){$.error("Error getting decision for Campaign: "+X.description(i),e),a(e)}})}function p(e,n,i,r,a){var o=X.description(e);$.log("Activating Campaign",o,"on Page(s)",r),i.length&&($.log("Applying force audienceIds:",i,"to Campaign",o),a=D.cloneDeep(a),a.audienceIds=i);var s=t.decideLayer(e,a,n),u=!(!n.length&&!i.length),c=t.getActionsForDecision(e,s,u),l=w(c.actions,r);if(c.maybeExecute?h(l,e,s,r):$.warn("Not preparing actions because LIVE_CHANGES is false"),D.forEach(r,(function(){L.trackDecisionEvent(s,a)})),V.emitLayerDecided({layer:e,decisionTicket:a,decision:s}),s.error)throw s.error;if(ye.getSampleRum()){q.dispatch(P.RECORD_LAYER_POLICY_USAGE,{policy:e.policy,layerId:e.id});var d=v(c.actions);q.dispatch(P.RECORD_CHANGE_TYPE_USAGE,{changeTypes:D.keys(d),layerId:e.id}),D.isEmpty(e.integrationSettings)||q.dispatch(P.RECORD_INTEGRATION_USAGE,{integrations:X.getIntegrationTypes(e),layerId:e.id})}return G.isInCohort(s)?void(c.maybeExecute?_(l,e,s,r):$.warn("Not executing actions because LIVE_CHANGES is false")):void $.log("Not activating Campaign: "+X.description(e)+"; not in the cohort because:",s.reason)}function h(e,t,n,i){var r=X.description(t);$.log("Preparing actions",e,"for Campaign",r,"on Page(s)",i),D.forEach(e,C.prepareAction)}function _(e,t,n,i){var r=X.description(t);return $.log("Executing actions",e,"for Campaign",r,"on Page(s)",i),ne.all(D.map(e,(function(e){return C.executePreparedAction(e).then(D.partial(V.emitActionAppliedEvent,e))}))).then((function(){$.log("All page actions for",n,"applied:",e),V.emitActionsForDecisionAppliedEvent(n,e)}))["catch"]((function(e){$.warn("Error evaluating page actions for decision",n,"because:",e)}))}function v(e){var t={};return D.each(e,(function(e){D.each(e.changeSet,(function(e){t[e.type]||(t[e.type]=!0)}))})),t}function E(e,t,n,i,r){if(t.length||n.length)return void r(c([],void 0,i));var a=X.relatedAudienceIds(e),o=D.reduce(a,(function(e,t){var n=de.get(t);return n&&e.push(n),e}),[]),s=Ie.getAllPlugins(j.PluginTypes.audienceMatchers);if(ye.getSampleRum()){var u={};if(D.each(o,(function(e){D.extend(u,m(e.conditions,s))})),!D.isEmpty(u)){var l=D.keys(u);q.dispatch(P.RECORD_AUDIENCE_USAGE,{audienceTypes:l,layerId:e.id})}}S(o,s,X.getActivationTimeout(e),(function(){var t=c(o,e,i);D.map(t,(function(t){I(t,o,e)})),r(t)}))}function m(e,t){var n={};return D.each(e,(function(e){D.isArray(e)?D.extend(n,m(e,t)):D.isObject(e)&&t[e.type]&&(n[e.type]=!0)})),n}function I(e,t,n){var i=D.map(e.audienceIds,D.bind(de.get,de)),r=D.filter(t,(function(t){return!D.includes(e.audienceIds,t.id)}));$.log("When deciding Campaign",X.description(n),"visitor is in audiences:",y(i),"and not in audiences:",y(r))}function y(e){var t=[];return D.each(e,(function(e){t.push(e.name,e)})),t}function S(e,t,n,i){var r=D.reduce(e,(function(e,n){return D.extend(e,k.requiredAudienceFieldsForConditions(n.conditions,t))}),{}),a=D.reduce(r,(function(e,t){if(D.isUndefined(ue.getAttribute(t))){var n=ue.getPendingAttributeValue(t);D.isUndefined(n)||e.push(n)}return e}),[]);if(0===a.length)return i();var o=[].concat(e),s=ie.firstToResolve(D.map(a,(function(e){return ne.resolve(e).then((function(){var e=Se.getVisitorProfile();if(o=D.filter(o,(function(n){return D.isUndefined(k.isInAudience(e,n,t))})),!D.isEmpty(o))throw new Error("At least one audience is still pending")}))})));ne.race([s,new ne(function(e,t){ce.setTimeout(t,n)})]).then((function(){$.log("Activating Campaign after pending Audiences resolved",e),i()}),(function(){$.log("Activating Campaign after timeout on Audiences",e),i()}))}function A(e,t,n){var i,r=X.description(e);return i=n.length?G.getDummyLayerDecision(e,n):G.decideLayer(e,t),$.log("Recording decision for Campaign",r,t,"->",i),X.recordLayerDecision(e.id,t,i),Le||(i.variationId&&i.experimentId&&ue.updateVariationIdMap(e.id,i.experimentId,i.variationId),e.groupId&&ue.updatePreferredLayerMap(e.groupId,e.id)),i}function T(e){var t=ge.getCleanupFns(e);if(t.length>0){for(;t.length>0;)t.shift()();q.dispatch(P.CLEAR_CLEANUP_FN,{lifecycle:e})}}function R(e,t,n){var i=X.description(e),r="NOT applying changes for Campaign",a={actions:[],maybeExecute:!1};return a.actions=[].concat(fe.getLayerActions(t.layerId)||[],fe.getExperimentActions(t.experimentId)||[],fe.getExperimentVariationActions(t.experimentId,t.variationId)||[]),!n&&he.isGlobalHoldback()?($.log(r,i,"(visitor is in global holdback)"),a):t.isLayerHoldback?($.log(r,i,"(visitor is in layer holdback)"),a):t.experimentId&&t.variationId?(a.maybeExecute=!0,$.log("Got Actions for Campaign:",i,a.actions),a):($.log(r,i,"(visitor is not eligible for any Experiments)"),a)}function w(e,t){return D.filter(e,(function(e){return D.isUndefined(e.pageId)||D.includes(t,e.pageId)}))}var D=n(2),b=n(77).create,O=t.ActivationCodeError=b("ActivationCodeError"),N=t.ProjectJSError=b("ProjectJSError"),C=n(135),P=n(7),L=n(110),V=n(117),k=n(139),x=n(76),F=n(86),M=n(109),U=n(24),G=n(140),B=n(16),z=n(81),j=n(25),H=n(87),K=n(111),Y=n(145),q=n(9),W=n(144),X=n(113),Q=n(82).LocalStorage,$=n(23),J=n(146),Z=n(84),ee=n(123),te=n(88),ne=n(12).Promise,ie=n(147),re=n(114),ae=n(116),oe=n(137),se=n(124),ue=n(75),ce=n(41),B=n(16),le=B.get("stores/session"),de=B.get("stores/audience_data"),fe=B.get("stores/action_data"),ge=B.get("stores/cleanup"),pe=B.get("stores/directive"),he=B.get("stores/global"),_e=B.get("stores/group_data"),ve=B.get("stores/layer_data"),Ee=B.get("stores/layer"),me=B.get("stores/pending_events"),Ie=B.get("stores/plugins"),ye=B.get("stores/rum"),Se=B.get("stores/visitor"),Ae=B.get("stores/view_data"),Te=B.get("stores/view"),Re=B.get("stores/visitor_id"),we=B.get("stores/visitor_bucketing"),De=B.get("stores/xdomain"),be=n(93),Oe=n(121),Ne=n(1),Ce=1e3,Pe=!1,Le=!1,Ve=!1,ke=Le||Ve,xe=1e3,Fe=t;
t.initialize=function(e){var n=e.clientData;if(M.normalizeClientData(e.clientData),H.on({filter:{type:"error"},handler:r}),q.dispatch(P.DATA_LOADED,{data:n}),$.log("Initialized with DATA:",n),a(),pe.isDisabled()||pe.shouldOptOut())return void $.log("Controller / Is disabled");Ne.queueBeacons(),z.isReady()?q.dispatch(P.SET_DOMCONTENTLOADED):z.addReadyHandler((function(){q.dispatch(P.SET_DOMCONTENTLOADED)}));var o=!1,s=x.get(j.COOKIES.REDIRECT);if(s){var u=s.match(/^(\d+)\|(.*)/);if(u){$.debug("Found legacy redirect data:",s);var c=u[1],l=u[2];q.dispatch(P.INITIALIZE_STATE,{effectiveVariationId:c,effectiveReferrer:l}),o=!0}}if(!ke){Z.time("projectJS");var d=he.getProjectJS();if(D.isFunction(d))try{Y.apply(d)}catch(e){$.error("Error while executing projectJS: ",e),F.emitError(new N(e))}Z.timeEnd("projectJS")}D.each(e.plugins||[],(function(e){try{e(ee)}catch(e){F.emitInternalError(e)}})),D.each(he.getPlugins()||[],(function(e){try{Y.apply(e,[ee])}catch(e){F.emitError(e)}})),o||re.load();var f=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){Se.observe(ue.persistVisitorProfile),Ee.observe(ue.persistLayerStates),le.observe(ue.persistSessionState),me.observe(J.persistPendingEvents),Le||we.observe(ue.persistVisitorBucketingStore),H.off(f)}});H.on({filter:{type:"lifecycle",name:"viewsActivated"},handler:t.onViewsActivated}),H.on({filter:{type:"lifecycle",name:"pageDeactivated"},handler:t.onPageDeactivated}),t.initializeApi();var g=J.getPendingEvents();if(g&&(q.dispatch(P.LOAD_PENDING_EVENTS,{events:g}),J.retryPendingEvents(g)),H.on({filter:{type:"lifecycle",name:"activate"},handler:t.activate}),V.emitInitializedEvent(),!pe.shouldActivate())return ne.resolve();var p=[];if(De.isDisabled())i();else{var h=t.initializeXDomainStorage();p.push(h);var _=Boolean(De.getCanonicalOrigins());if(_){var v=ae.makeTimeoutPromise(xe);ne.race([h,v])["catch"]((function(e){$.error("Failed to initialize xDomain storage: ",e)})).then(i)["catch"](Oe.handleError)}else i()}return ne.all(p)},t.activate=function(){try{var e=[];$.log("Activated client"),D.forEach(Te.getActiveViewStates(),(function(e){se.deactivate(Ae.get(e.id))})),T(j.Lifecycle.preActivate);var t=U.now();q.dispatch(P.ACTIVATE,{activationId:String(t),activationTimestamp:t});var n=Ae.getAll();se.registerViews(n),ue.setId(ue.getOrGenerateId()),e.push(L.trackPostRedirectDecisionEvent()),q.dispatch(P.MERGE_VARIATION_ID_MAP,{variationIdMap:ue.getVariationIdMap()}),q.dispatch(P.MERGE_PREFERRED_LAYER_MAP,{preferredLayerMap:ue.getPreferredLayerMap()}),T(j.Lifecycle.postVisitorProfileLoad),e.push(u(Ie.getAllPlugins(j.PluginTypes.visitorProfileProviders)).then((function(){$.log("Populated visitor profile")})));var i=c(),r=G.decideGlobal(i);$.log("Made global decision",i,"->",r),q.dispatch(P.RECORD_GLOBAL_DECISION,r);var a=L.trackClientActivation();a?$.log("Tracked activation event",a):$.log("Not tracking activation event");var o=Fe.setUpViewActivation(n);return Pe?se.activateMultiple(o):D.each(o,(function(e){se.activateMultiple([e])})),T(j.Lifecycle.postViewsActivated),T(j.Lifecycle.postActivate),V.emitActivatedEvent(),ne.all(e).then((function(){H.emit({type:K.TYPES.LIFECYCLE,name:"activateDeferredDone"}),$.log("All immediate effects of activation resolved")}),F.emitError)}catch(e){return F.emitError(e),ne.reject(e)}},Fe.setUpViewActivation=function(e){var t=[];return D.each(e,(function(e){se.shouldTriggerImmediately(e.activationType)?t.push(e):e.activationType===j.ViewActivationTypes.callback?($.debug("Setting up conditional activation for Page",se.description(e)),Fe.activateViewOnCallback(e)):e.activationType===j.ViewActivationTypes.polling?($.debug("Setting up polling activation for Page",se.description(e)),te.pollFor(D.partial(Y.apply,e.activationCode),null,D.partial(oe.isTimedOut,U.now())).then((function(){se.activateMultiple([e])}))["catch"]((function(t){$.warn("Failed to activate view ",e,t)}))):e.activationType!==j.ViewActivationTypes.manual&&F.emitError(new Error("Unknown view activationType: "+e.activationType))})),t},Fe.activateViewOnCallback=function(e){var t=function(t){var n=D.extend({},t,{pageName:e.apiName,type:"page"});be.push(n)},n={pageId:e.id};Object.defineProperty(n,"isActive",{get:function(){return Te.isViewActive(e.id)}});try{Y.apply(e.activationCode,[t,n])}catch(t){var i=new O("("+t.toString()+") in activationCode for "+se.description(e));F.emitError(i,{originalError:t,userError:!0})}},t.onViewsActivated=function(e){var t,n=e.data.views,i=D.map(n,"id");try{if(!Re.getBucketingId())throw new Error("View activated with no visitorId set");var r=d(i)["catch"](F.emitError);return t=ne.all(D.map(n,(function(e){var t=function(){se.parseViewTags(e);var t=L.trackViewActivation(e);t?$.log("Tracked activation for Page",se.description(e),t):$.log("Not Tracking activation for Page",se.description(e))};return z.isReady()?ne.resolve(t()):te.pollFor(z.isReady,Ce).then(t)}))),ne.all([r,t])}catch(e){F.emitError(e)}},t.onPageDeactivated=function(e){var t=e.data.page,n=fe.getAllActionIdsByPageId(t.id);D.each(n,(function(e){var n=fe.getActionState(e);n&&(D.each(n,(function(e,n){if(e.cancel)try{e.cancel(),$.debug("Controller / Canceled change",n,"observation due to deactivation of page:",t)}catch(e){$.error("Controller / Error canceling change",n,"observation upon deactivation of page.",e)}if(t.undoOnDeactivation&&e.undo)try{e.undo(),$.debug("Controller / Undid change",n,"due to deactivation of page:",t)}catch(e){$.error("Controller / Error undoing change upon deactivation of page.",e)}})),q.dispatch(P.REMOVE_ACTION_STATE,{actionId:e}),$.debug("Controller / Undid changes and/or canceled change observation due to deactivation of page:",t,e))}))},t.initializeApi=function(){var e={push:be.push};ke||(e.get=be.get);var t=window.optimizely;D.isArray(t)&&D.each(t,(function(t){e.push(t)})),e.data={note:"Obsolete, use optimizely.get('data') instead"},e.state={},window.optimizely=e},t.persistItemsWithId=function(e){return D.each(e,(function(e,t){ue.checkKeyForVisitorId(t)&&Q.setItem(t,e)})),e},t.initializeXDomainStorage=o,t.decideAndExecuteLayerASAP=g,t.decideLayer=A,t.getActionsForDecision=R}),(function(e,t,n){function i(e,t,n){var i=v.getActionState(t.id);if(!i)return void g.warn("Action / Attempted to prepare change for inactive action: ",t);var r=v.getChangeApplier(e.id,t.id);if(!a.isUndefined(r))return void g.warn("Action / Attempted to prepare a change which is already being applied: ",e);var s={changeId:e.id,actionId:t.id,changeApplier:I.create(e,t,n)};f.dispatch(o.SET_CHANGE_APPLIER,s)}function r(e,t,n,o){if(a.includes(o,t))return void g.error("Change with id "+t+" has circular dependencies: "+o.concat(t));if(!e[t]){var c=E.getChange(t);if(!c){var d="Change with id "+t+" is absent";return o.length&&(d+=" but listed as a dependency for "+o[o.length-1]),void g.warn(d)}e[t]=new p(function(d){var f=a.map(c.dependencies||[],(function(i){return r(e,i,n,o.concat([t]))}));if(c.src){var _="change_"+c.src,m=u.makeAsyncRequest(_,(function(){return h.addScriptAsync("https://cdn.optimizely.com/public/11391265293/data"+c.src,(function(){u.resolveRequest(_)}))})).then((function(){var e=E.getChange(c.id);e||s.emitError(new S("Failed to load async change from src: "+c.src)),i(e,n,l.now())}));f.push(m)}p.all(f).then((function(){var e=l.now(),i=v.getChangeApplier(t,n.id);return i?(g.debug("Action / Applying change:",c),i.apply().then((function(t){t?g.log(t):g.debug("Action / Applied change for the first time in "+(l.now()-e)+"ms:",c),d()}))):(g.debug("Action / Not applying change ",t," - No changeApplier found."),void d())}))["catch"]((function(e){g.error("Action / Failed to apply change:",c,e),d()}))})}return e[t]}var a=n(2),o=n(7),s=n(86),u=n(6),c=n(77).create,l=n(24),d=n(16),f=n(9),g=n(23),p=n(12).Promise,h=n(133),_=d.get("stores/global"),v=d.get("stores/action_data"),E=d.get("stores/change_data"),m=d.get("stores/session"),I=n(136),y=n(137);y.initialize();var S=c("ActionError");t.prepareAction=function(e){g.debug("Action / Preparing:",e),f.dispatch(o.ACTION_EXECUTED,{actionId:e.id,sessionId:m.getSessionId(),layerId:e.layerId,pageId:e.pageId,timestamp:l.now(),activationId:_.getActivationId()});var t=l.now();a.forEach(e.changeSet,(function(n){var r=a.isObject(n)?n.id:n,s=E.getChange(r);s||(f.dispatch(o.ADD_CHANGE,n),s=E.getChange(n.id)),s.src||i(s,e,t)}))},t.executePreparedAction=function(e){g.debug("Action / Executing:",e);var t={},n=a.map(e.changeSet,(function(n){var i=a.isObject(n)?n.id:n;return r(t,i,e,[])}));return p.all(n).then((function(){g.debug("changes for action id="+e.id+" applied")}))}}),(function(e,t,n){var i=n(13).Promise,r=n(24),a=n(16),o=a.get("stores/plugins"),s=n(25),u=n(23);t.create=function(e,t,n){var a={identifier:e.id,action:t,startTime:n||r.now()};try{var c=o.getPlugin(s.PluginTypes.changeAppliers,e.type);if(!c)throw new Error("Unrecognized change type "+e.type);return new c(e,a)}catch(e){u.error("Change applier was never properly constructed:",e);var l={apply:function(){return i.reject(e)}};return l}}}),(function(e,t,n){function i(){"interactive"!==document.readyState&&"complete"!==document.readyState||(t.domReadyTime=Date.now())}var r=n(138),a=n(16).get("stores/directive");t.domReadyTime=null,t.initialize=function(){i(),document.addEventListener("readystatechange",i,!0)},t.isTimedOut=function(e){var n=Date.now();if(!t.domReadyTime||!e)return!1;var i=Math.max(e,t.domReadyTime);return a.isEditor()&&(i=t.domReadyTime),!(n-i<r.SELECTOR_POLLING_MAX_TIME)}}),(function(e,t){e.exports={SELECTOR_POLLING_MAX_TIME:2e3,CHANGE_DATA_KEY:"optimizelyChangeData",CHANGE_ID_ATTRIBUTE_PREFIX:"data-optly-"}}),(function(e,t,n){function i(e,t){return function(n){var i=n.type,a=t[i];if(!a)throw new Error("Audience / No matcher found for type="+i);if(a.fieldsNeeded)for(var s=r(a.fieldsNeeded,n),l=0;l<s.length;l++){var d=s[l],f=u.getFieldValue(e,d);if(o.isUndefined(f))return void c.debug("Audience / Required field",d,"for type",i,"has no value")}c.debug("Matching condition:",n,"to values:",e);var g=a.match(e,n);if(!o.isUndefined(g))return!!g}}function r(e,t){var n="function"==typeof e?e(t):e;return o.isString(n)&&(n=[n]),o.isArray(n)?n:(c.warn("Couldn't determine fieldsNeeded for matcher; assuming []"),[])}function a(e){return e.name?e.name+" ("+e.id+")":e.id}var o=n(2),s=n(125),u=n(19),c=n(23),l=n(75);t.isInAudience=function(e,t,n){var r=i(e,n);c.groupCollapsed("Checking audience",t.name,t.id,t),c.debug("Visitor Profile:",e);var o;try{var u=s.evaluate(t.conditions,r)}catch(e){o=e,u=!1}return c.groupEnd(),o&&c.error("Audience / Error evaluating audience",a(t),":",o),c.log("Is "+(u?"in":"NOT in")+" audience:",a(t)),u},t.requiredAudienceFieldsForConditions=function e(t,n){var i={};return o.each(t,(function(t){if(o.isArray(t))o.extend(i,e(t,n));else if(o.isObject(t)){var a=n[t.type];if(a){var s=r(a.fieldsNeeded,t);o.each(s,(function(e){i[l.serializeFieldKey(e)]=e}))}}})),i}}),(function(e,t,n){function i(e,t){v.debug("Decision / Deciding layer for group: ",h.description(e));var n,i,r=t.preferredLayerId,a=!!r;if(a)v.debug("Decision / Using preferredLayerMap to select layer for group:",h.description(e)),n=r;else try{n=l.chooseWeightedCandidate(t.bucketingId,e.id,e.weightDistributions),n&&"None"!==n||(i='Group traffic allocation. Visitor maps to a "hole" in the bucket space left by an experiment or campaign that\'s since been removed from the group')}catch(e){i="Group traffic allocation. Visitor maps to a point in the bucket space which has never been covered by any experiment or campaign."}if(i)return{layerId:null,reason:i};if(!s.find(e.weightDistributions,{entityId:n})){var o=a?" sticky-":" non-sticky ",u="Visitor was"+o+"bucketed into a campaign ("+n+") which is not in the group";if(!a)throw new f(u);return{layerId:null,reason:u}}return{layerId:n}}function r(e,t){for(var n=0;n<e.experiments.length;n++)for(var i=0;i<e.experiments[n].variations.length;i++)if(t.indexOf(e.experiments[n].variations[i].id)>-1)return{experimentId:e.experiments[n].id,variationId:e.experiments[n].variations[i].id};return null}function a(e){var t=m.getPlugin(p.PluginTypes.deciders,e);if(s.isEmpty(t))throw new Error("No deciders found for policy: "+e);return t}function o(e,t){var n=m.getAllPlugins(p.PluginTypes.audienceMatchers);return s.reduce(t,(function(t,i){return c.isInAudience(e,i,n)&&t.push(i.id),t}),[])}var s=n(2),u=n(86),c=n(139),l=n(141),d=n(142),f=n(143).DecisionError,g=n(16),p=n(25),h=n(144),_=n(113),v=n(23),E=n(45),m=g.get("stores/plugins"),I=g.get("stores/global"),y=g.get("stores/layer_data");t.isPageIdRelevant=function(e){if(!e)return!1;var t=a(e.policy);return s.isFunction(t.includePageIdInDecisionTicket)?t.includePageIdInDecisionTicket(e):t.includePageIdInDecisionTicket===!0},t.createTicket=function(e){var t=s.pick(e,["bucketingId","globalHoldback","preferredVariationMap","pageId"]);return s.extend(t,{audienceIds:o(e.visitorProfile,e.audiences),activationId:I.getActivationId()}),t},t.decideGlobal=function(e){var t=l.isHoldback(e.bucketingId,{id:null,holdback:e.globalHoldback});return{isGlobalHoldback:t}},t.decideGroup=i,t.decideLayer=function(e,t){v.debug("Deciding: ",e,t);var n,i,r=a(e.policy),o={layerId:e.id,experimentId:null,variationId:null,isLayerHoldback:l.isHoldback(t.bucketingId,e)};if(s.isEmpty(e.experiments))throw new f("No experiments in layer.");try{if(r.decideLayer){v.debug("Decision / Using decider's custom decideLayer.");var c=r.decideLayer(e,t);n=c.experiment,i=c.variation}else v.debug("Decision / Using default decideLayer behavior."),n=r.selectExperiment(e,t.audienceIds,t.bucketingId),i=d.selectVariation(n,t.audienceIds,t.bucketingId,t.activationId,t.preferredVariationMap)}catch(e){e instanceof f?o.reason=e.message:o.error=e}return o.experimentId=n?n.id:null,o.variationId=i?i.id:null,o.error&&(o.error.name="DecisionEngineError",u.emitError(o.error)),o},t.getDummyLayerDecision=function(e,t){var n,i=r(e,t);return i?(v.log("Decision / Applying force variation:",i.variationId,"to Campaign",_.description(e)),n={layerId:e.id,variationId:i.variationId,experimentId:i.experimentId,isLayerHoldback:!1,reason:"force"}):(v.log("No variation matches ids:",t,"in Campaign",_.description(e)),n={layerId:e.id,variationId:null,experimentId:null,isLayerHoldback:!1,reason:"force"}),n},t.isInCohort=function(e){if(!e.experimentId||!e.variationId)return!1;var t=y.get(e.layerId);return!(E.isSingleExperimentPolicy(t.policy)&&e.isLayerHoldback)}}),(function(e,t,n){var i=n(65),r=t.TOTAL_POINTS=1e4;t.bucketingNumber=function(e,t,n){var a=i.hashToInt(e+t,n,r);return a},t.isHoldback=function(e,n){return t.bucketingNumber(e,n.id,i.Seed.IGNORING)<(n.holdback||0)},t.chooseWeightedCandidate=function(e,n,r){for(var a=t.bucketingNumber(e,n,i.Seed.BUCKETING),o=0;o<r.length;o++)if(r[o].endOfRange>a)return r[o].entityId;throw new Error("Unable to choose candidate")}}),(function(e,t,n){var i=n(2),r=n(141),a=n(125),o=n(143).DecisionError,s=n(23),u="impression";t.isValidExperiment=function(e,t){var n,r=i.partial(i.includes,e);return s.groupCollapsed("Decision / Evaluating audiences for experiment:",t,e),n=!t.audienceIds||a.evaluate(t.audienceIds,r),s.groupEnd(),s.debug("Decision / Experiment",t,"is valid?",n),n},t.selectVariation=function(e,t,n,a,c){if(!e.variations||0===e.variations.length)throw new o('No variations in selected experiment "'+e.id+'"');if(!e.weightDistributions&&e.variations.length>1)throw new o('On selected experiment "'+e.id+'", weightDistributions must be defined if # variations > 1');var l;if(e.bucketingStrategy&&e.bucketingStrategy===u)if(1===e.variations.length)l=e.variations[0].id;else{var d=a;l=r.chooseWeightedCandidate(n+d,e.id,e.weightDistributions)}else if(c&&c[e.id]){s.debug("Decision / Using preferredVariationMap to select variation for experiment:",e.id);var f=c[e.id];if(!i.find(e.variations,{id:f}))return s.debug("Decision / Preferred variation:",f,"not found on experiment:",e.id,". Visitor not bucketed."),null;l=f}else l=1===e.variations.length?e.variations[0].id:r.chooseWeightedCandidate(n,e.id,e.weightDistributions);var g=i.find(e.variations,{id:l});if(g)return s.debug("Decision / Selected variation:",g),g;throw new o('Unable to find selected variation: "'+l+'".')},t.getExperimentById=function(e,t){var n=i.find(e.experiments,{id:t});if(n)return n;throw new o("Unable to find selected experiment.")},t.hasVariationActionsOnView=function(e,t){return s.debug("Decision / Checking variation:",e,"for actions on pageId:",t),!!i.find(e.actions,(function(e){return e.pageId===t&&!i.isEmpty(e.changes)}))}}),(function(e,t){function n(e){this.message=e}n.prototype=new Error,t.DecisionError=n}),(function(e,t,n){function i(e){return r.map(e.weightDistributions,"entityId")}var r=n(2);t.description=function(e){var t=!!e.name,n=t?'"'+e.name+'" ':"",r=i(e).join(", ");return n+"(id "+e.id+", campaigns: "+r+")"}}),(function(module,exports,__webpack_require__){var createError=__webpack_require__(78),di=__webpack_require__(16),Logger=__webpack_require__(23),CSP_MODE=!1,EXEC_WITH_JQUERY=!0,ExecError=exports.Error=createError("ExecError");exports.apply=function(e,t){t=t||[],EXEC_WITH_JQUERY&&(t=t.concat(di.get("env/jquery")));try{return e.apply(void 0,t)}catch(n){throw Logger.warn("Error applying function",e,"with args:",t,n),new ExecError(n)}},exports.eval=function(str){if(CSP_MODE)throw new ExecError("eval is not supported in CSP mode");try{return EXEC_WITH_JQUERY&&(str="var $ = optimizely.get('jquery');"+str),eval(str)}catch(e){throw Logger.warn("Error executing JS:",str,e),new ExecError(e)}}}),(function(e,t,n){var i=n(2),r=n(86),a=n(25),o=n(26),s=n(82).LocalStorage,u=n(23),c=n(91),l=n(16),d=l.get("stores/pending_events"),f=a.StorageKeys.PENDING_EVENTS;t.persistPendingEvents=function(){try{var e=d.getEventsString();s.setItem(f,e),n(85).setItem(f,e)}catch(e){u.warn("PendingEvents / Unable to set localStorage key, error was: ",e),r.emitInternalError(e)}},t.getPendingEvents=function(){try{return o.parse(s.getItem(f))}catch(e){return null}},t.retryPendingEvents=function(e){i.forOwn(e,(function(e,t){c.retryableRequest(e.data,t,e.retryCount)})),i.isEmpty(e)||u.log("Retried pending events: ",e)}}),(function(e,t,n){var i=n(2),r=n(12).Promise;t.firstToResolve=function(e){return new r(function(t){i.each(e,(function(e){r.resolve(e).then(t,(function(){}))}))})}}),(function(e,t,n){function i(e){var t=!1;if(a.isArray(window.optimizely)&&a.each(window.optimizely,(function(n){a.isArray(n)&&"verifyPreviewProject"===n[0]&&String(n[1])===e&&(t=!0)})),!t)throw new Error("Preview projectId: "+e+" does not match expected")}function r(){s.on({filter:{type:u.TYPES.ANALYTICS,name:"trackEvent"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"viewActivated"},handler:f}),s.on({filter:{type:u.TYPES.LIFECYCLE,name:"layerDecided"},handler:f}),s.on({filter:{type:"error"},publicOnly:!0,handler:f})}var a=n(2),o=n(16),s=n(87),u=n(111),c=n(41),l=o.get("stores/directive"),d="optimizelyPreview",f=function(e){var t=c.getGlobal(d);t.push(e)};t.initialize=function(e){l.isSlave()&&i(e),r()},t.setupPreviewGlobal=function(){c.getGlobal(d)||c.setGlobal(d,[])},t.pushToPreviewGlobal=function(e){f(e)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(150))}}),(function(e,t){e.exports={provides:"visitorId",getter:["stores/visitor_id",function(e){return e.getRandomId()}]}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(152)),e.registerAudienceMatcher("behavior",n(154))}}),(function(e,t,n){var i=n(153);e.exports={provides:"events",isTransient:!0,getter:[function(){return i.getEvents()}]}}),(function(e,t,n){var i=n(2),r=n(73),a=n(16),o=a.get("stores/visitor_events"),s=1e3;t.getEvents=function(){var e=r.getEvents(),t=[].concat.apply([],i.values(o.getForeignEvents())),n=[].concat.apply([],i.values(o.getForeignEventQueues())),a=r.mergeAllEvents([e,t,n]);return a.slice(a.length-s)}}),(function(e,t,n){var i=n(2),r=n(26),a=n(155),o=n(156);e.exports={fieldsNeeded:["events"],match:function(e,t){var n=[],s=r.parse(t.value);return n=i.isUndefined(s.version)?[s]:a.buildFromSpecV0_1(s),i.every(n,(function(t){return o.isSatisfied(t,e.events)}))}}}),(function(e,t,n){function i(e){return e=(e||"").toString().trim(),g[e]||e}function r(e,t,n){var i={where:t};if(e.count&&(i["limit"]=e.count),e.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT){var r=s.getFieldKeyPathForSource(e.name,n),a=s.aggregate("count"),o=s.aggregateField("count"),l=s.groupField(r);return u.extend(i,{select:[{field:l}],groupBy:s.groupBy([r]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}]})}return u.extend(i,{orderBy:[{field:[c.FIELDS.TIME],direction:"DESC"}]})}function a(e){var t=[];if(u.isUndefined(e))throw new Error("rule is undefined");if(!u.isObject(e))throw new Error("rule is not an Object");"0.2"!==e["version"]&&t.push('version: not "0.2"'),e["filter"]&&(u.isArray(e["filter"])?u.each(e["filter"],(function(e,n){var i=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.FILTER);i&&t.push("filter["+n+"]: "+i);var r=s.validateComparatorAndValue(e["comparator"],e["value"]);r&&t.push("filter["+n+"]: "+r)})):t.push("filter: not an array"));var n=[],i=[];if(e["sort"]&&(e["reduce"]&&e["reduce"]["aggregator"]&&"nth"!==e["reduce"]["aggregator"]&&t.push("sort: superfluous because we can apply aggregator "+l.stringify(e["reduce"]["aggregator"])+" to unsorted items"),u.isArray(e["sort"])?u.each(e["sort"],(function(e,r){var a=s.validateFieldKeyPathV0_2(e["field"],s.FieldPurpose.SORT);a&&t.push("sort["+r+"]: "+a),e["field"]&&"frequency"===e["field"][0]?n.push(e):i.push(e);var u=o(e["direction"]);u&&t.push("sort["+r+"]: "+u)})):t.push("sort: not an array"),n.length&&i.length&&t.push('sort: sorting by non-["frequency"] field is pointless because we are going to sort the picked values by ["frequency"]'),n.length&&!e["pick"]&&t.push('sort: sorting by ["frequency"] is impossible because no values have been picked')),e["pick"]){e["reduce"]&&"count"===e["reduce"]["aggregator"]&&t.push('pick: superfluous because we can apply aggregator "count" to raw events');var r=s.validateFieldKeyPathV0_2(e["pick"]["field"]);r&&t.push("pick: "+r)}if(e["reduce"]){var a=e["reduce"]["aggregator"],c="aggregator "+(l.stringify(a)||String(a)),d=e["reduce"]["n"],f="index "+(l.stringify(d)||String(d));u.includes(["sum","avg","max","min","count","nth"],a)||t.push("reduce: "+c+" is unknown"),u.includes(["sum","avg","max","min"],a)&&(e["pick"]||t.push("reduce: "+c+" is impossible to use because no values have been picked")),"nth"===a?((!u.isNumber(d)||isNaN(d)||parseInt(d,10)!==d||d<0)&&t.push("reduce: "+f+" is not a non-negative integer (mandated by "+c+")"),e["sort"]||t.push('reduce: aggregator "nth" is meaningless without a specific sort order')):u.isUndefined(d)||t.push("reduce: "+f+" is defined (not mandated by "+c+")")}if(t.length)throw new Error(t.join("\n"))}function o(e){var t="direction "+(l.stringify(e)||String(e));if(!u.includes(["ascending","descending"],e))return t+' is not "ascending" or "descending"'}var s=t,u=n(2),c={FIELDS:n(64).FIELDS,FIELDS_V0_2:n(64).FIELDS_V0_2},l=n(26),d=n(23),f=n(156);s.MILLIS_IN_A_DAY=864e5,s.aggregateField=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,[f.generateAlias(e,t)]},s.groupField=function(e){return u.isString(e)&&(e=[e]),e=e||f.DEFAULT_FIELD,[e.join(".")]};var g={"<":"lt","<=":"lte",">":"gt",">=":"gte","=":"eq","==":"eq"};s.fieldComparison=function(e,t,n){return e=i(e),u.isString(t)&&(t=[t]),"exists"===e?{op:e,args:[{field:t}]}:{op:e,args:[{field:t},{value:n}]}},s.relativeTimeComparison=function(e,t){return{op:i(e),args:[{op:"-",args:[{eval:"now"},{field:[c.FIELDS.TIME]}]},{value:t*s.MILLIS_IN_A_DAY}]}},s.rangeTimeComparison=function(e){return u.isArray(e)?{op:"between",args:[{field:[c.FIELDS.TIME]},{value:[e[0]||+new Date(0),e[1]||+new Date]}]}:(d.error("Rule builder","rangeTimeComparison passed invalid range",e),null)},s.groupBy=function(e){for(var t=[],n=0;n<e.length;n++)t[n]={field:e[n]};return t},s.aggregate=function(e,t){return u.isString(t)&&(t=[t]),t=t||f.DEFAULT_FIELD,{op:e,args:[{field:t}]}},s.SOURCE_TYPES={BEHAVIOR:"events",CUSTOM_BEHAVIOR:"custom_behavior",DCP:"dcp"},s.FREQUENCY_FILTERS={MOST_FREQUENT:"most_frequent",LEAST_FREQUENT:"least_frequent"},s.RECENCY_FILTERS={MOST_RECENT:"most_recent",LEAST_RECENT:"least_recent"},s.getFieldKeyPathForSource=function(e,t){t=t||s.SOURCE_TYPES.BEHAVIOR;var n=[];return u.isString(e)?(n=[e],t!==s.SOURCE_TYPES.BEHAVIOR||u.includes(u.values(c.FIELDS),e)||(n=[c.FIELDS.OPTIONS,e])):n=e,n},s.buildFromSpecV0_1=function(e){if(!(e.action||e.filters&&0!==e.filters.length))throw new Error('Audience spec must have an "action" field or at least one "filter" '+l.stringify(e));var t=s.fieldComparison("gt",c.FIELDS.TIME,0),n=[],i=[];if(e.action&&(i.push(s.fieldComparison("eq",c.FIELDS.NAME,e.action.value)),e.action.type&&i.push(s.fieldComparison("eq",c.FIELDS.TYPE,e.action.type))),e.time)if("last_days"===e.time.type)i.push(s.relativeTimeComparison("lte",e.time.days));else if("range"===e.time.type){var a=s.rangeTimeComparison([e.time.start,e.time.stop]);a&&i.push(a)}else d.error("Rule builder",'Audience spec has bad "time" type',e.time.type);if(t={op:"and",args:i},e.count&&n.push({where:s.fieldComparison(e.count.comparator,"0",e.count.value),from:{select:[{field:s.aggregateField("count")}],where:t,aggregate:[s.aggregate("count")]}}),e.filters&&u.each(e.filters,(function(r){var a,o,u=s.getFieldKeyPathForSource(r.name,e.source);if(r.modifier===s.FREQUENCY_FILTERS.MOST_FREQUENT?(a=s.aggregate("count"),o=s.aggregateField("count")):r.modifier===s.RECENCY_FILTERS.MOST_RECENT&&(a=s.aggregate("max",c.FIELDS.TIME),o=s.aggregateField("max",c.FIELDS.TIME)),a){var l=u,d=s.groupField(l);n.push({where:s.fieldComparison(r.comparator,"0",r.value),from:{select:[{field:d}],where:t,groupBy:s.groupBy([l]),aggregate:[a],orderBy:[{field:o,direction:"DESC"}],limit:1}})}else i.push(s.fieldComparison(r.comparator,u,r.value))})),e.pick){if(n.length>0)throw new Error('A "pick" clause must not be specified with "count" or "most_recent", "most_frequent" modifiers'+l.stringify(e));return[r(e.pick,t,e.source)]}return n.length>0?n:[{where:t}]},s.buildFromSpecV0_2=function(e){a(e);var t={where:{op:"and",args:u.map(e["filter"]||[],(function(e){return"age"===e["field"][0]?s.relativeTimeComparison(e["comparator"]||"eq",e["value"]/s.MILLIS_IN_A_DAY):s.fieldComparison(e["comparator"]||"eq",s.convertFieldKeyPathFromSpecV0_2(e["field"]),e["value"])}))}};if(e["reduce"]&&"count"===e["reduce"]["aggregator"])return u.extend(t,{aggregate:[{op:"count",args:[{field:["*"]}]}],select:[{field:["_count_*"]}]});var n=[],i=[];if(e["sort"]&&(u.each(e["sort"],(function(e){u.includes(["ascending","descending"],e["direction"])&&(u.includes(["time","age"],e["field"][0])&&i.push(e),"frequency"===e["field"][0]&&n.push(e))})),i.length&&!n.length&&(t["orderBy"]=u.filter(u.map(i,(function(e){return"time"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"ASC":"DESC"}:"age"===e["field"][0]?{field:s.convertFieldKeyPathFromSpecV0_2(["time"]),direction:"ascending"===e["direction"]?"DESC":"ASC"}:void 0}))))),e["pick"]&&e["pick"]["field"]){var r=s.convertFieldKeyPathFromSpecV0_2(e["pick"]["field"]);if(e["reduce"]&&u.includes(["avg","max","min","sum"],e["reduce"]["aggregator"]))return u.extend(t,{aggregate:[{op:e["reduce"]["aggregator"],args:[{field:r}]}],select:[{field:[f.generateAlias(e["reduce"]["aggregator"],r)]}]});t=n.length?u.extend(t,{groupBy:[{field:r}],aggregate:[{op:"count",args:[{field:["*"]}]}],orderBy:[{field:["_count_*"],direction:"ascending"===n[0]["direction"]?"ASC":"DESC"}],select:[{field:[r.join(".")]}]}):u.extend(t,{select:[{field:r}]})}if(e["reduce"]&&"nth"===e["reduce"]["aggregator"]){var o=e["reduce"]["n"];if(u.isNumber(o)&&o>=0&&Number(o)===Math.floor(Number(o)))return u.extend(t,{offset:o,limit:1})}return t},s.convertFieldKeyPathFromSpecV0_2=function(e){return"tags"===e[0]&&"revenue"===e[1]?["r"]:[c.FIELDS_V0_2[e[0]]].concat(e.slice(1))},s.FieldPurpose={FILTER:"filter",SORT:"sort",PICK:"pick"},s.validateFieldKeyPathV0_2=function(e,t){var n="field "+(l.stringify(e)||String(e));if(!u.isArray(e)||!u.every(e,u.isString))return n+" is not an array of strings";if("tags"===e[0]&&e.length>2||"tags"!==e[0]&&e.length>1)return n+" includes too many strings";if("tags"===e[0]&&e.length<2)return n+" does not specify an exact tag";if(e.length<1)return n+" does not specify a top-level field";var i=u.keys(c.FIELDS_V0_2),r=["age","frequency"];return t===s.FieldPurpose.FILTER&&(i.push("age"),r=["frequency"]),t===s.FieldPurpose.SORT&&(i=["time","age","frequency"],r=["name","type","category","tags"]),u.includes(r,e[0])?n+" is not supported here":u.includes(i,e[0])?void 0:n+" is unknown"},s.validateComparatorAndValue=function(e,t){var n="comparator "+(l.stringify(e)||String(e)),i="value "+(l.stringify(t)||String(t));if(!u.isString(e)&&!u.isUndefined(e))return n+" is not a string";switch(e){case void 0:case"eq":case"is":case"contains":break;case"lt":case"gt":case"lte":case"gte":if(!u.isNumber(t))return i+" is not a number (mandated by "+n+")";break;case"in":if(!u.isArray(t))return i+" is not an array (mandated by "+n+")";break;case"between":if(!(u.isArray(t)&&2===t.length&&u.isNumber(t[0])&&u.isNumber(t[1])&&t[0]<=t[1]))return i+" is not a pair of increasing numbers (mandated by "+n+")";break;case"regex":if(!(u.isString(t)||u.isArray(t)&&2===t.length&&u.isString(t[0])&&u.isString(t[1])))return i+" is not a pattern string or a [pattern string, flags string] array (mandated by "+n+")";break;case"exists":if(!u.isUndefined(t))return i+" is not undefined (mandated by "+n+")";break;default:return n+" is unknown"}}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=i.bind(a.log,a),s=n(24),u=n(19).getFieldValue,c=n(26),l=function(e,t,n){if(e.getValueOrDefault)return e.getValueOrDefault(t,n);if(!i.isArray(t))return n;var r=u(e,t);return"undefined"==typeof r&&(r=n),r},d=function(e){return"string"==typeof e?e.trim().toLowerCase():e};t.clause={WHERE:"where",GROUP_BY:"groupBy",AGGREGATE:"aggregate",HAVING:"having",ORDER_BY:"orderBy",SELECT:"select",OFFSET:"offset",LIMIT:"limit",FROM:"from"},t.DEFAULT_FIELD=["*"],t.booleanOperators={eq:function(e){var t=i.map(e,d);return t[0]==t[1]},is:function(e){return e[0]===e[1]},gt:function(e){return e[0]>e[1]},lt:function(e){return e[0]<e[1]},gte:function(e){return e[0]>=e[1]},lte:function(e){return e[0]<=e[1]},"in":function(e){var t=i.map(e[1]||[],d);return i.includes(t,d(e[0]))},between:function(e){return e[1][0]<=e[0]&&e[0]<=e[1][1]},contains:function(e){var t=i.map(e,(function(e){return"string"==typeof e?e.toLowerCase():e}));return(t[0]||"").indexOf(t[1])!==-1},regex:function(e){try{var t,n;return i.isString(e[1])?(t=e[1],n="i"):(t=e[1][0]||"",n=e[1][1]||""),new RegExp(t,n).test(e[0])}catch(e){return a.error("Rules",'In operator "regex", error: '+(e.message||"invalid RegExp /"+[t,n].join("/"))),!1}},exists:function(e){return"undefined"!=typeof e[0]},and:function(e){return i.every(e,(function(e){return e}))},or:function(e){return i.some(e,(function(e){return e}))},not:function(e){return!e[0]}},t.arithmeticOperators={"+":function(e){return(e[0]||0)+(e[1]||0)},"-":function(e){return(e[0]||0)-(e[1]||0)},"/":function(e){return(e[0]||0)/(e[1]||1)},"%":function(e){return(e[0]||0)%(e[1]||1)}},t.aggregateOperators={sum:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r},avg:function(e,n){if(0===n.length)return 0;for(var i=e[0]||t.DEFAULT_FIELD,r=0,a=0;a<n.length;a++)r+=l(n[a],i,0);return r/n.length},max:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.NEGATIVE_INFINITY,a=0;a<n.length;a++)r=Math.max(r,l(n[a],i,Number.NEGATIVE_INFINITY));return r},min:function(e,n){for(var i=e[0]||t.DEFAULT_FIELD,r=Number.POSITIVE_INFINITY,a=0;a<n.length;a++)r=Math.min(r,l(n[a],i,Number.POSITIVE_INFINITY));return r},count:function(e,t){return t.length}};var f={now:function(){return s.now()}},g=function(e){return e in t.booleanOperators?t.booleanOperators[e]:e in t.arithmeticOperators?t.arithmeticOperators[e]:null},p=function(e,t){if(t.hasOwnProperty("value"))return t["value"];if(t.hasOwnProperty("field"))return l(e,t["field"]);
if(t.hasOwnProperty("eval"))return t["eval"]in f?f[t["eval"]]():void a.error("Rules","Unknown function: "+t["eval"]);if(!t["op"])return void a.error("Rules","No operator specified: "+c.stringify(t));var n=g(t["op"]);if(!n)return void a.error("Rules","Unknown operator: "+t["op"]);var r=i.partial(p,e),o=t["args"]||[],s=i.map(o,(function(e){return r(e)}));return n(s,e)},h=function(e,t){var n={};if("undefined"==typeof e||!i.isArray(e)||0===e.length)return n["*"]={fieldValues:{},events:t},n;for(var r=i.map(e,(function(e){return e["field"]})),a=0;a<t.length;a++){for(var o=t[a],s=[],u={},d=0;d<r.length;d++){var f=r[d],g=l(o,f),p=f.join(".");u[p]=g,s.push(encodeURIComponent(p)+"="+encodeURIComponent(c.stringify(g)))}var h=s.join("&");n.hasOwnProperty(h)||(n[h]={fieldValues:u,events:[]}),n[h].events.push(o)}return n};t.generateAlias=function(e,t){return"_"+e+"_"+t.join(".")};var _=function(e,n){var r={};return i.each(n,(function(n,i){r[i]={};for(var o=0;o<e.length;o++){var s=e[o],u=s["op"];if(u in t.aggregateOperators){var c=(s["args"]&&s["args"][0]||{})["field"]||t.DEFAULT_FIELD,l=t.generateAlias(u,c),d=t.aggregateOperators[u]([c],n.events);r[i][l]=d}else a.error("Rules","Unknown aggregate operator "+u)}})),r},v=function(e,t){var n=[];return i.each(e,(function(e,r){var a=i.extend({},e.fieldValues),o=t[r]||{};i.extend(a,o),n.push(a)})),n},E=function(e,t){return i.isArray(e)?0===e.length?t:t.sort((function(t,n){for(var i=0;i<e.length;i++){var r=e[i],a=r["direction"]||"ASC",o="ASC"===a?1:-1,s=r["field"],u=l(t,s,0),c=l(n,s,0);if(u<c)return-o;if(u>c)return o}return 0})):(o("Rules","groupBy rule must be an array"),t)};t.rewrite=function(e){function n(e,s){if(i.isArray(e)&&("and"!==e[0]&&"or"!==e[0]&&"not"!==e[0]&&a.error("Rules","Unexpected operation "+e[0]+". Continuing optimistically."),e={op:e[0],args:e.slice(1)}),e.hasOwnProperty("field")||e.hasOwnProperty("value")||e.hasOwnProperty("eval"))return e;if(s&&e["op"]in t.aggregateOperators){var u=(e["args"]&&e["args"][0]||{})["field"]||t.DEFAULT_FIELD,c=t.generateAlias(e["op"],u);return c in o||(r.push({op:e["op"],args:e["args"]}),o[c]=!0),{field:[c]}}for(var l=[],d=e["args"]||[],f=0;f<d.length;f++)l[f]=n(d[f],s);return{op:e["op"],args:l}}var r=[],o={},s={};e.hasOwnProperty(t.clause.WHERE)&&(s[t.clause.WHERE]=n(e[t.clause.WHERE],!1)),e.hasOwnProperty(t.clause.HAVING)&&(s[t.clause.HAVING]=n(e[t.clause.HAVING],!0)),(e.hasOwnProperty(t.clause.AGGREGATE)||r.length>0)&&(s[t.clause.AGGREGATE]=(e[t.clause.AGGREGATE]||[]).concat(r));for(var u=[t.clause.GROUP_BY,t.clause.ORDER_BY,t.clause.SELECT,t.clause.OFFSET,t.clause.LIMIT],c=0;c<u.length;c++)e.hasOwnProperty(u[c])&&(s[u[c]]=e[u[c]]);return e.hasOwnProperty(t.clause.FROM)&&(s[t.clause.FROM]=t.rewrite(e[t.clause.FROM])),s};var m=function(e,n){n=n||0;var r=[];if(e.hasOwnProperty(t.clause.WHERE)?e[t.clause.WHERE]["op"]?e[t.clause.WHERE]["op"]in t.booleanOperators||r.push("Non-boolean WHERE clause operator"):r.push("Missing WHERE clause operator"):r.push("Missing WHERE clause"),e.hasOwnProperty(t.clause.HAVING)&&(e[t.clause.HAVING]["op"]?e[t.clause.HAVING]["op"]in t.booleanOperators||r.push("Non-boolean HAVING clause operator"):r.push("Missing HAVING clause operator")),e.hasOwnProperty(t.clause.GROUP_BY)&&!e.hasOwnProperty(t.clause.AGGREGATE)&&r.push("No AGGREGATE clause specified with GROUP_BY clause"),e.hasOwnProperty(t.clause.SELECT)){var a=e[t.clause.SELECT];if(i.isArray(a))for(var o=0;o<a.length;o++)a[o]["op"]&&a[o]["op"]in t.aggregateOperators&&r.push('In SELECT clause, aggregate operator "'+a[o]["op"]+'" specified in selector at index '+o);else r.push("SELECT clause must be an array")}if(e.hasOwnProperty(t.clause.OFFSET)){var s=e[t.clause.OFFSET];(!i.isNumber(s)||Number(s)<0||Number(s)!==Math.floor(Number(s)))&&r.push("OFFSET must be a non-negative integer")}if(e.hasOwnProperty(t.clause.LIMIT)){var u=e[t.clause.LIMIT];(!i.isNumber(u)||Number(u)<0||Number(u)!==Math.floor(Number(u)))&&r.push("LIMIT must be a non-negative integer")}return n>0&&(r=i.map(r,(function(e){return"Sub-rule "+n+": "+e}))),e.hasOwnProperty(t.clause.FROM)&&(r=r.concat(m(e[t.clause.FROM],n+1))),r},I=function(e,t){return i.map(t,(function(t){return i.map(e,(function(e){return p(t,e)}))}))},y=function(e,n){var r=n;if(e.hasOwnProperty(t.clause.FROM)&&(a.debug("Evaluating FROM clause:",e[t.clause.FROM]),r=y(e[t.clause.FROM],r),a.debug("Results after FROM:",r)),a.debug("Evaluating WHERE clause:",e[t.clause.WHERE]),r=i.filter(r,(function(n){return p(n,e[t.clause.WHERE])})),a.debug("Results after WHERE:",r),e.hasOwnProperty(t.clause.AGGREGATE)){a.debug("Evaluating AGGREGATE clause:",e[t.clause.AGGREGATE]);var o=h(e[t.clause.GROUP_BY],r),s=_(e[t.clause.AGGREGATE],o);r=v(o,s),a.debug("Results after AGGREGATE:",r)}e.hasOwnProperty(t.clause.HAVING)&&(a.debug("Evaluating HAVING clause:",e[t.clause.HAVING]),r=i.filter(r,(function(n){return p(n,e[t.clause.HAVING])})),a.debug("Results after HAVING:",r)),e.hasOwnProperty(t.clause.ORDER_BY)&&(a.debug("Evaluating ORDER_BY clause:",e[t.clause.ORDER_BY]),r=E(e[t.clause.ORDER_BY],r),a.debug("Results after ORDER_BY:",r));var u=0;e.hasOwnProperty(t.clause.OFFSET)&&(a.debug("Evaluating OFFSET clause:",e[t.clause.OFFSET]),u=Number(e[t.clause.OFFSET]));var c;return e.hasOwnProperty(t.clause.LIMIT)&&(a.debug("Evaluating LIMIT clause:",e[t.clause.LIMIT]),c=u+Number(e[t.clause.LIMIT])),(u>0||!i.isUndefined(c))&&(r=r.slice(u,c),a.debug("Results after OFFSET/LIMIT:",r)),e.hasOwnProperty(t.clause.SELECT)&&(a.debug("Evaluating SELECT clause:",e[t.clause.SELECT]),r=I(e[t.clause.SELECT],r),a.debug("Results after SELECT:",r)),r};t.execute=function(e,n){e=t.rewrite(e),a.shouldLog(r.LogLevel.DEBUG)&&a.groupCollapsed("Evaluating Behavioral Rule"),a.debug("Rule:",e,c.stringify(e)),a.debug("Events:",n);var i=m(e);if(i.length>0)throw new Error("Rule "+c.stringify(e)+" has violations: "+i.join("\n"));var o=y(e,n);return a.debug("Rule result:",o),a.shouldLog(r.LogLevel.DEBUG)&&a.groupEnd(),o},t.isSatisfied=function(e,n){try{return t.execute(e,n).length>0}catch(t){return a.error("Rules","Error "+t.toString()+" while evaluating rule "+c.stringify(e)),!1}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(158))}}),(function(e,t,n){var i=n(2),r=n(159),a=n(153),o=n(26),s=n(155);e.exports={provides:"customBehavior",shouldTrack:!0,isLazy:!1,getter:["stores/global","stores/visitor_attribute_entity",function(e,t){var n=e.getProjectId(),u=i.filter(i.map(t.getCustomBehavioralAttributes(n),(function(e){try{return{id:e.id,granularity:r.GRANULARITY.ALL,rule:s.buildFromSpecV0_2(o.parse(e.rule_json))}}catch(e){return}}))),c=a.getEvents();return r.evaluate(u,c)}]}}),(function(e,t,n){function i(e){if(0===e.length)return[];for(var t=e.length-1,n=o.FIELDS.SESSION_ID,i=e[t][n];t>0&&i===e[t-1][n];)t--;return e.slice(t)}function r(e,t){if(0===e.length||t<=0)return[];var n=+new Date-t*s.MILLIS_IN_A_DAY;n-=n%s.MILLIS_IN_A_DAY;for(var i=e.length;i>0&&n<=e[i-1][o.FIELDS.TIME];)i--;return e.slice(i)}var a=n(23),o={FIELDS:n(64).FIELDS},s=n(155),u=n(156);t.GRANULARITY={ALL:"all",CURRENT_SESSION:"current_session",LAST_30_DAYS:"last_30_days",LAST_60_DAYS:"last_60_days"},t.evaluate=function(e,n){var o={};if(0===n.length){for(var s=0;s<e.length;s++)o[e[s].id]=e[s].defaultValue;return o}var c=i(n),l=r(n,60);for(s=0;s<e.length;s++){var d=e[s],f=n;d.granularity===t.GRANULARITY.CURRENT_SESSION?f=c:d.granularity===t.GRANULARITY.LAST_60_DAYS&&(f=l);try{var g=f;d.rule&&(g=u.execute(d.rule,f)),o[d.id]=d.defaultValue,1===g.length?o[d.id]=g[0][0]||d.defaultValue:a.debug("Behavior / Rule for",d.id,"returned",g.length,"results, expected 1")}catch(e){a.error("Behavior / Rule for",d.id,"failed with",e.message||"")}}return o}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(161)),e.registerAudienceMatcher("first_session",n(162))}}),(function(e,t,n){var i=n(64),r=n(153),a=n(19).getFieldValue,o=n(89).CURRENT_SESSION_INDEX;e.exports={provides:"first_session",shouldTrack:!0,getter:[function(){var e=r.getEvents();if(e&&e.length>0){var t=e[0],n=a(t,[i.FIELDS.SESSION_INDEX]);return n===o}return!0}]}}),(function(e,t){e.exports={fieldsNeeded:["first_session"],match:function(e){return!!e.first_session}}}),(function(e,t,n){e.exports=function(e){e.registerApiModule("behavior",n(164))}}),(function(e,t,n){function i(e,t){var n=d.buildFromSpecV0_1(t);if(1!==n.length)throw new Error("Invalid query descriptor; verify that no aggregators are specified");return f.execute(n[0],e)}function r(e,t){return c.map(e,(function(e){return c.isFunction(e.toObject)?e.toObject(t):e}))}function a(e,t){if(!e)return["Descriptor not defined"];var n=[];return e.count&&n.push('Unexpected "count" clause specified'),e.pick&&e.pick.modifier&&t.indexOf(e.pick.modifier)===-1&&n.push('Invalid "pick" modifier "'+e.pick.modifier+'"'),c.each(e.filters,(function(e){c.isUndefined(e.modifier)||n.push('Unexpected "filter" modifier "'+e.modifier+'"')})),n.length>0?n:void 0}function o(e,t){var n,o={revenueAsTag:!1,timeAsTimestamp:!0};if(c.isUndefined(t))return n=l.getEvents(e),r(n,o);if(c.isNumber(t)){if(t<=0)throw new Error("Count must be a positive integer, got "+t);return n=l.getEvents(e),r(n.slice(-t),o)}var s=a(t,c.values(d.RECENCY_FILTERS));if(s)throw new Error(s.join("\n"));return n=l.getEvents(e),r(i(n,t),o)}function s(e,t){if(t=c.cloneDeep(t)||{},!t.pick)throw new Error('No "pick" clause provided in query descriptor');if(!t.pick.name)throw new Error('No field name provided in "pick" clause');t.pick.modifier=t.pick.modifier||d.FREQUENCY_FILTERS.MOST_FREQUENT;var n=a(t,c.values(d.FREQUENCY_FILTERS));if(n)throw new Error(n.join("\n"));var r=l.getEvents(e);return i(r,t)}function u(e,t){var n=d.buildFromSpecV0_2(t),i=l.getEvents(e),a=r(f.execute(n,i),{revenueAsTag:!0,timeAsTimestamp:!1});return(t.pick||t.reduce&&"count"===t.reduce.aggregator)&&(a=c.flatten(a)),t.reduce&&(a=a[0]),a}var c=n(2),l=n(153),d=n(155),f=n(156);e.exports=["stores/visitor_events",function(e){return{getEvents:c.partial(o,e),getByFrequency:c.partial(s,e),query:c.partial(u,e)}}]}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/browser_id",n(166)),e.registerVisitorProfileProvider(n(171)),e.registerVisitorProfileProvider(n(172)),e.registerAudienceMatcher("browser_version",n(173))}}),(function(e,t,n){var i=n(167);t.getId=function(){return i.get().browser.id},t.getVersion=function(){return i.get().browser.version}}),(function(e,t,n){var i=n(2),r=n(168),a=n(41),o=n(7),s=n(16),u=n(9),c=s.get("stores/ua_data");t.get=function(){var e=c.get();return i.isEmpty(e)&&(e=r.parseUA(a.getUserAgent()),u.dispatch(o.SET_UA_DATA,{data:e})),e}}),(function(e,t,n){function i(e){if(e=(e||"").toLowerCase(),e in u)return e;var t=a.keys(u);return a.find(t,(function(t){var n=u[t];return a.includes(n,e)}))||"unknown"}function r(e,t,n){return t?t:"unknown"===e?"unknown":n?"mobile":"desktop_laptop"}var a=n(2),o=n(169);t.parseUA=function(e){var t=new o(e),n=t.getBrowser(),a=t.getOS(),u=t.getDevice(),l=(a.name||"unknown").toLowerCase(),d=(n.name||"unknown").toLowerCase(),f=s(u.type,d,l);return{browser:{id:i(n.name),version:n.version},platform:{name:l,version:a.version},device:{model:c[u.model]||"unknown",type:r(d,u.type,f),isMobile:f}}};var s=function(e,t,n){if(a.includes(["mobile","tablet"],e))return!0;if(a.includes(["opera mini"],t))return!0;var i=["android","blackberry","ios","windows phone"];return!!a.includes(i,n)},u={gc:["chrome","chromium","silk","yandex","maxthon","chrome webview"],edge:["edge"],ie:["internet explorer","iemobile"],ff:["firefox","iceweasel"],opera:["opera","opera mini","opera tablet"],safari:["safari","mobile safari","webkit"],ucbrowser:["uc browser"]},c={iPhone:"iphone",iPad:"ipad"}}),(function(e,t,n){var i;!(function(r,a){"use strict";var o="0.7.17",s="",u="?",c="function",l="undefined",d="object",f="string",g="major",p="model",h="name",_="type",v="vendor",E="version",m="architecture",I="console",y="mobile",S="tablet",A="smarttv",T="wearable",R="embedded",w={extend:function(e,t){var n={};for(var i in e)t[i]&&t[i].length%2===0?n[i]=t[i].concat(e[i]):n[i]=e[i];return n},has:function(e,t){return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===f?e.replace(/[^\d\.]/g,"").split(".")[0]:a},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},D={rgx:function(e,t){for(var n,i,r,o,s,u,l=0;l<t.length&&!s;){var f=t[l],g=t[l+1];for(n=i=0;n<f.length&&!s;)if(s=f[n++].exec(e))for(r=0;r<g.length;r++)u=s[++i],o=g[r],typeof o===d&&o.length>0?2==o.length?typeof o[1]==c?this[o[0]]=o[1].call(this,u):this[o[0]]=o[1]:3==o.length?typeof o[1]!==c||o[1].exec&&o[1].test?this[o[0]]=u?u.replace(o[1],o[2]):a:this[o[0]]=u?o[1].call(this,u,o[2]):a:4==o.length&&(this[o[0]]=u?o[3].call(this,u.replace(o[1],o[2])):a):this[o]=u?u:a;l+=2}},str:function(e,t){for(var n in t)if(typeof t[n]===d&&t[n].length>0){for(var i=0;i<t[n].length;i++)if(w.has(t[n][i],e))return n===u?a:n}else if(w.has(t[n],e))return n===u?a:n;return e}},b={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},O={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[h,E],[/(opios)[\/\s]+([\w\.]+)/i],[[h,"Opera Mini"],E],[/\s(opr)\/([\w\.]+)/i],[[h,"Opera"],E],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[h,E],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[h,"IE"],E],[/(edge)\/((\d+)?[\w\.]+)/i],[h,E],[/(yabrowser)\/([\w\.]+)/i],[[h,"Yandex"],E],[/(puffin)\/([\w\.]+)/i],[[h,"Puffin"],E],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[h,"UCBrowser"],E],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],E],[/(micromessenger)\/([\w\.]+)/i],[[h,"WeChat"],E],[/(QQ)\/([\d\.]+)/i],[h,E],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[h,E],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[E,[h,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[E,[h,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[E,[h,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[h,/(.+)/,"$1 WebView"],E],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[h,/(.+(?:g|us))(.+)/,"$1 $2"],E],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[E,[h,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[h,E],[/(dolfin)\/([\w\.]+)/i],[[h,"Dolphin"],E],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[h,"Chrome"],E],[/(coast)\/([\w\.]+)/i],[[h,"Opera Coast"],E],[/fxios\/([\w\.-]+)/i],[E,[h,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[E,[h,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[E,h],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[h,"GSA"],E],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[h,[E,D.str,b.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[h,E],[/(navigator|netscape)\/([\w\.-]+)/i],[[h,"Netscape"],E],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[h,E]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,w.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[m,/ower/,"",w.lowerize]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[m,w.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[p,v,[_,S]],[/applecoremedia\/[\w\.]+ \((ipad)/],[p,[v,"Apple"],[_,S]],[/(apple\s{0,1}tv)/i],[[p,"Apple TV"],[v,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[v,p,[_,S]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[p,[v,"Amazon"],[_,S]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[p,D.str,b.device.amazon.model],[v,"Amazon"],[_,y]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[p,v,[_,y]],[/\((ip[honed|\s\w*]+);/i],[p,[v,"Apple"],[_,y]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[v,p,[_,y]],[/\(bb10;\s(\w+)/i],[p,[v,"BlackBerry"],[_,y]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[p,[v,"Asus"],[_,S]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[v,"Sony"],[p,"Xperia Tablet"],[_,S]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[p,[v,"Sony"],[_,y]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[v,p,[_,I]],[/android.+;\s(shield)\sbuild/i],[p,[v,"Nvidia"],[_,I]],[/(playstation\s[34portablevi]+)/i],[p,[v,"Sony"],[_,I]],[/(sprint\s(\w+))/i],[[v,D.str,b.device.sprint.vendor],[p,D.str,b.device.sprint.model],[_,y]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[v,p,[_,S]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[v,[p,/_/g," "],[_,y]],[/(nexus\s9)/i],[p,[v,"HTC"],[_,S]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[p,[v,"Huawei"],[_,y]],[/(microsoft);\s(lumia[\s\w]+)/i],[v,p,[_,y]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[p,[v,"Microsoft"],[_,I]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[v,"Microsoft"],[_,y]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[p,[v,"Motorola"],[_,y]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[p,[v,"Motorola"],[_,S]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[v,w.trim],[p,w.trim],[_,A]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[v,"Samsung"],[_,A]],[/\(dtv[\);].+(aquos)/i],[p,[v,"Sharp"],[_,A]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[v,"Samsung"],p,[_,S]],[/smart-tv.+(samsung)/i],[v,[_,A],p],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[v,"Samsung"],p,[_,y]],[/sie-(\w+)*/i],[p,[v,"Siemens"],[_,y]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[v,"Nokia"],p,[_,y]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[p,[v,"Acer"],[_,S]],[/android.+([vl]k\-?\d{3})\s+build/i],[p,[v,"LG"],[_,S]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[v,"LG"],p,[_,S]],[/(lg) netcast\.tv/i],[v,p,[_,A]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i,/android.+lg(\-?[\d\w]+)\s+build/i],[p,[v,"LG"],[_,y]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[p,[v,"Lenovo"],[_,S]],[/linux;.+((jolla));/i],[v,p,[_,y]],[/((pebble))app\/[\d\.]+\s/i],[v,p,[_,T]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[v,p,[_,y]],[/crkey/i],[[p,"Chromecast"],[v,"Google"]],[/android.+;\s(glass)\s\d/i],[p,[v,"Google"],[_,T]],[/android.+;\s(pixel c)\s/i],[p,[v,"Google"],[_,S]],[/android.+;\s(pixel xl|pixel)\s/i],[p,[v,"Google"],[_,y]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w?)?[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i],[[p,/_/g," "],[v,"Xiaomi"],[_,y]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+)?)\s+build/i],[[p,/_/g," "],[v,"Xiaomi"],[_,S]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[p,[v,"Meizu"],[_,S]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[p,[v,"OnePlus"],[_,y]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[p,[v,"RCA"],[_,S]],[/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i],[p,[v,"Dell"],[_,S]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[p,[v,"Verizon"],[_,S]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[v,"Barnes & Noble"],p,[_,S]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[p,[v,"NuVision"],[_,S]],[/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i],[[v,"ZTE"],p,[_,S]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[p,[v,"Swiss"],[_,y]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[p,[v,"Swiss"],[_,S]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[p,[v,"Zeki"],[_,S]],[/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i],[[v,"Dragon Touch"],p,[_,S]],[/android.+[;\/]\s*(NS-?.+)\s+build/i],[p,[v,"Insignia"],[_,S]],[/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i],[p,[v,"NextBook"],[_,S]],[/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[v,"Voice"],p,[_,y]],[/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i],[[v,"LvTel"],p,[_,y]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[p,[v,"Envizen"],[_,S]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i],[v,p,[_,S]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[p,[v,"MachSpeed"],[_,S]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[v,p,[_,S]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[p,[v,"Rotor"],[_,S]],[/android.+(KS(.+))\s+build/i],[p,[v,"Amazon"],[_,S]],[/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i],[v,p,[_,S]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[_,w.lowerize],v,p],[/(android.+)[;\/].+build/i],[p,[v,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[E,[h,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[h,E],[/rv\:([\w\.]+).*(gecko)/i],[E,h]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[h,E],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[h,[E,D.str,b.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[h,"Windows"],[E,D.str,b.os.windows.version]],[/\((bb)(10);/i],[[h,"BlackBerry"],E],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[h,E],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[h,"Symbian"],E],[/\((series40);/i],[h],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[h,"Firefox OS"],E],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[h,E],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[h,"Chromium OS"],E],[/(sunos)\s?([\w\.]+\d)*/i],[[h,"Solaris"],E],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[h,E],[/(haiku)\s(\w+)/i],[h,E],[/cfnetwork\/.+darwin/i,/ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[E,/_/g,"."],[h,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[h,"Mac OS"],[E,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[h,E]]},N=function(e,t){if("object"==typeof e&&(t=e,e=a),!(this instanceof N))return new N(e,t).getResult();var n=e||(r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:s),i=t?w.extend(O,t):O;return this.getBrowser=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.browser),e.major=w.major(e.version),e},this.getCPU=function(){var e={architecture:a};return D.rgx.call(e,n,i.cpu),e},this.getDevice=function(){var e={vendor:a,model:a,type:a};return D.rgx.call(e,n,i.device),e},this.getEngine=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.engine),e},this.getOS=function(){var e={name:a,version:a};return D.rgx.call(e,n,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};N.VERSION=o,N.BROWSER={NAME:h,MAJOR:g,VERSION:E},N.CPU={ARCHITECTURE:m},N.DEVICE={MODEL:p,VENDOR:v,TYPE:_,CONSOLE:I,MOBILE:y,SMARTTV:A,TABLET:S,WEARABLE:T,EMBEDDED:R},N.ENGINE={NAME:h,VERSION:E},N.OS={NAME:h,VERSION:E},typeof t!==l?(typeof e!==l&&e.exports&&(t=e.exports=N),t.UAParser=N):"function"===c&&n(170)?(i=function(){return N}.call(t,n,t,e),!(i!==a&&(e.exports=i))):r&&(r.UAParser=N)})("object"==typeof window?window:this)}),(function(e,t){(function(t){e.exports=t}).call(t,{})}),(function(e,t){e.exports={provides:"browserId",shouldTrack:!0,isSticky:!0,getter:["sources/browser_id",function(e){return e.getId()}]}}),(function(e,t){e.exports={provides:"browserVersion",getter:["sources/browser_id",function(e){return e.getVersion()}]}}),(function(e,t,n){var i=n(174).compareVersion;e.exports={fieldsNeeded:["browserVersion","browserId"],match:function(e,t){var n=t.value,r=e.browserId,a=e.browserVersion;if(0===n.indexOf(r)){var o=n.substr(r.length);return 0===i(a,o)}return!1}}}),(function(e,t,n){var i=n(2);t.compareVersion=function(e,t){if(!t)return 0;for(var n=t.toString().split("."),r=e.toString().split("."),a=0;a<n.length;a++){if(i.isUndefined(r[a]))return-1;if(isNaN(Number(r[a]))){if(r[a]!==n[a])return-1}else{if(Number(r[a])<Number(n[a]))return-1;if(Number(r[a])>Number(n[a]))return 1}}return 0}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(176)),e.registerAudienceMatcher("campaign",n(177))}}),(function(e,t,n){var i=n(119);e.exports={provides:"campaign",shouldTrack:!0,isSticky:!0,getter:[function(){return i.getQueryParamValue("utm_campaign")}]}}),(function(e,t,n){var i=n(20);e.exports={fieldsNeeded:["campaign"],match:function(e,t){return i.hasMatch(t.value,t.match,e.campaign)}}}),(function(e,t,n){e.exports=function(e){e.registerAudienceMatcher("code",n(179))}}),(function(e,t,n){var i=n(2),r=n(145);t.fieldsNeeded=[],t.match=function(e,t){if(i.isUndefined(t.value))return!0;if("function"==typeof t.value)try{return Boolean(r.apply(t.value))}catch(e){return!1}else try{return Boolean(r.eval(t.value))}catch(e){return!1}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(181));var t=n(182);e.registerAudienceMatcher("custom_attribute",t),e.registerAudienceMatcher("custom_dimension",t)}}),(function(e,t,n){var i=n(2),r=n(25),a=n(23),o=n(16),s=o.get("stores/dimension_data");e.exports={provides:"custom",attributionType:r.AttributionTypes.LAST_TOUCH,restorer:function(e){return i.reduce(e,(function(e,t,n){var r=n,o=s.getByApiName(n),u=s.getById(n),c=u;return i.isObject(t)?(!t.id&&o&&(c=o,r=o.id,i.extend(t,{id:c.segmentId||c.id})),t.name||c&&c.apiName&&(t.name=c.apiName),t.id||c||a.warn("Unable to determine ID for custom attribute:",n,"; segmentation is disabled."),e[r]=t,e):(a.error('Unable to restore custom attribute "'+n+'" because value is not an object'),e)}),{})},shouldTrack:!0}}),(function(e,t,n){var i=n(2),r=n(20);t.match=function(e,t){var n;return e.custom&&(n=e.custom[t.name]),i.isObject(n)&&(n=n.value),r.hasMatch(t.value,t.match,n)}}),(function(e,t,n){e.exports=function(e){e.registerDependency("sources/device",n(184)),e.registerVisitorProfileProvider(n(185)),e.registerAudienceMatcher("device",n(186))}}),(function(e,t,n){var i=n(167);t.getDevice=function(){var e=i.get().device;return"unknown"!==e.model?e.model:"tablet"===e.type?"tablet":e.isMobile?"mobile":"desktop"}}),(function(e,t){e.exports={provides:"device",shouldTrack:!0,isSticky:!0,getter:["sources/device",function(e){return e.getDevice()}]}}),(function(e,t){e.exports={fieldsNeeded:["device"],match:function(e,t){return e.device===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(188)),e.registerAudienceMatcher("device_type",n(189))}}),(function(e,t,n){var i=n(167);e.exports={provides:"device_type",shouldTrack:!0,isSticky:!0,getter:[function(){var e=i.get().device;switch(e.type){case"mobile":return"phone";case"tablet":case"desktop_laptop":return e.type;default:return"other"}}]}}),(function(e,t){e.exports={fieldsNeeded:["device_type"],match:function(e,t){return e.device_type===t.value}}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(191)),e.registerAudienceMatcher("language",n(192))}}),(function(e,t,n){var i=n(119);e.exports={provides:"language",getter:[function(){return i.getLanguage()}]}}),(function(e,t){t.fieldsNeeded=["language"],t.match=function(e,t){return!!e.language&&e.language.toLowerCase().indexOf(t.value)>-1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(194)),e.registerAudienceMatcher("location",n(196))}}),(function(e,t,n){var i=n(195);e.exports={provides:"location",isAsync:!0,getter:[function(){return i.getIPDerivedGeolocation()}]}}),(function(e,t,n){function i(){a.addScriptAsync(s)}var r=n(6),a=n(133),o="cdn3";t.getIP=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.ip}))},t.getIPDerivedGeolocation=function(){return r.makeAsyncRequest(o,i).then((function(e){return e.location}))};var s="//cdn3.optimizely.com/js/geo2.js"}),(function(e,t){t.fieldsNeeded=["location"],t.match=function(e,t){if(!e.hasOwnProperty("location"))return!1;var n=e.location,i=t.value,r=i.split("|"),a=(r[0]||"").trim(),o=(r[1]||"").trim(),s=(r[2]||"").trim(),u=(r[3]||"").trim();switch(r.length){case 1:if(n.country===a)return!0;break;case 2:if(n.region===o&&n.country===a)return!0;break;case 3:if(n.city===s&&(n.region===o||""===o)&&n.country===a)return!0;break;case 4:if(n.continent===u)return!0}return!1}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(198)),e.registerAudienceMatcher("referrer",n(199))}}),(function(e,t,n){var i=n(81),r=n(99);e.exports={provides:"referrer",shouldTrack:!0,isSticky:!0,getter:[function(){var e=r.getReferrer()||i.getReferrer();return""===e&&(e=null),e}]}}),(function(e,t,n){var i=n(200);t.fieldsNeeded=["referrer"],t.match=function(e,t){return null!==e.referrer&&i(e.referrer,t)}}),(function(e,t,n){function i(e){var t=e.indexOf("?");return t!==-1&&(e=e.substring(0,t)),t=e.indexOf("#"),t!==-1&&(e=e.substring(0,t)),e}function r(e){return a(i(e))}function a(e,t){e=e.replace("/?","?"),e=e.toLowerCase().replace(/[\/&?]+$/,"");var n=l.slice(0);t||(n=n.concat(u));for(var i=n.length,r=0;r<i;r++){var a=n[r],o=new RegExp("^"+a);e=e.replace(o,"")}return e}function o(e){var t=e.split("?");if(t[1]){var n=t[1].split("#"),i=n[0],r=n[1],a=i.split("&"),o=[];return s.each(a,(function(e){0!==e.indexOf(c)&&o.push(e)})),t[1]="",o.length>0&&(t[1]="?"+o.join("&")),r&&(t[1]+="#"+r),t.join("")}return e}var s=n(2);e.exports=function(e,t){e=o(e);var n=t.value;switch(t.match){case"exact":return e=a(e),e===a(n);case"regex":try{return Boolean(e.match(n))}catch(e){}return!1;case"simple":return e=r(e),n=r(n),e===n;case"substring":return e=a(e,!0),n=a(n,!0),e.indexOf(n)!==-1;default:return!1}};var u=["www."],c="optimizely_",l=["https?://.*?.?optimizelyedit.(com|test)/","https?://.*.?optimizelypreview.(com|test)/","https?://(edit|preview)(-hrd|-devel)?.optimizely.(com|test)/","https?://.*?.?optimizelyedit(-hrd)?.appspot.com/","https?://"]}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(202)),e.registerAudienceMatcher("source_type",n(204))}}),(function(e,t,n){var i=n(119),r=n(81),a=n(99),o=n(203),s=["google\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","https://(www)?\\.google\\..*?/$","bing\\.\\w{2,3}(\\.\\w{2,3})?/(search|url)","yahoo\\.\\w{2,3}(\\.\\w{2,3})?/search","baidu\\.\\w{2,3}(\\.\\w{2,3})?/s?"];
e.exports={provides:"source_type",shouldTrack:!0,isSticky:!1,getter:[function(){return function(e,t){var n=function(){if(i.getQueryParamValue("utm_source")||i.getQueryParamValue("gclid")||i.getQueryParamValue("otm_source"))return"campaign";for(var e=a.getReferrer()||r.getReferrer(),t=0;t<s.length;t++){var n=s[t],u=e.match(n);if(u)return"search"}return e&&o.guessDomain(e)!==o.guessDomain(i.getUrl())?"referral":"direct"},u=function(e,t){return!e||"direct"!==t},c=e(),l=n();u(c,l)&&t(l)}}]}}),(function(e,t){t.guessDomain=function(e,t){if(!e)return"";try{return t?e.match(/:\/\/(.[^\/]+)/)[1]:e.match(/:\/\/(?:www[0-9]?\.)?(.[^\/:]+)/)[1]}catch(e){return""}}}),(function(e,t,n){var i=n(20);t.fieldsNeeded=["source_type"],t.match=function(e,t){return i.hasMatch(t.value,t.match,e.source_type)}}),(function(e,t,n){e.exports=function(e){e.registerVisitorProfileProvider(n(206)),e.registerVisitorProfileProvider(n(207)),e.registerAudienceMatcher("time_and_day",n(208))}}),(function(e,t,n){var i=n(24);e.exports={provides:"currentTimestamp",shouldTrack:!0,isLazy:!0,getter:[function(){return i.now()}]}}),(function(e,t){e.exports={provides:"offset",shouldTrack:!0,isLazy:!0,getter:[function(){return(new Date).getTimezoneOffset()}]}}),(function(e,t,n){var i=n(209);t.fieldsNeeded=["currentTimestamp"],t.match=function(e,t){return i.test(t.value,new Date(e.currentTimestamp))}}),(function(e,t,n){function i(e){var t=e.split(o);if(3!==t.length)throw new Error("Invalid time and day string "+e);var n=t[2].split(s);return{start_time:t[0],end_time:t[1],days:n}}function r(e){var t=e.split(u);if(2!==t.length)throw new Error("optly.timeAndDayInterval.timeStringToMinutes: Invalid time string "+e);return 60*parseInt(t[0],10)+parseInt(t[1],10)}var a=n(2),o="_",s=",",u=":";t.test=function(e,t){var n=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],o=i(e),s=r(o.start_time),u=r(o.end_time),c=60*t.getHours()+t.getMinutes(),l=n[t.getDay()];return c>=s&&c<=u&&a.includes(o.days,l)}}),(function(e,t,n){function i(e){function t(e,t,n){try{u(t),e[n]=t}catch(e){C.emitError(new X("Bad value for eventTags["+n+"]: "+e.message))}return e}var n=N.keys(ie),i=N.omit(e,n),r=N.pick(e,n),a=N.reduce(i,t,{}),o=N.reduce(r,(function(e,n,i){var r=ie[i];r.excludeFeature||t(a,n,i);try{r.validate(n),e[i]=r.sanitize(n),a[i]=e[i]}catch(e){C.emitError(new X("Bad value for eventMetrics["+i+"]: "+e.message))}return e}),{});return o.tags=a,o}function r(e){var t=N.extend({entity_id:e.pageId,key:e.pageId,timestamp:e.timestamp,uuid:e.eventId,type:J},i(e.eventTags));return t}function a(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function o(e){return N.extend({entity_id:e.eventEntityId,key:e.eventApiName,timestamp:e.timestamp,uuid:e.eventId,type:e.eventCategory},i(e.eventTags))}function s(e){return{entity_id:null,type:Q,uuid:e.eventId,timestamp:e.timestamp}}function u(e){if(null==e)throw new Error("Feature value is null");if("object"==typeof e){var t;try{t=x.stringify(e)}catch(e){}throw new Error('Feature value is complex: "'+t||'[object]"')}}function c(e){if(null==e)throw new Error("Metric value is null");if(!N.isNumber(e))throw new Error("Metric value is not numeric")}function l(e){return N.reduce(e,(function(e,t){try{u(t.value),e.push({entity_id:t.id||null,key:t.name,type:t.type,value:t.value})}catch(e){F.warn("Error evaluating user feature",t,e)}return e}),[])}function d(e,t,n){Y.dispatch(V.REGISTER_TRACKER_EVENT,{event:e,decisions:n}),f(t),D()}function f(e){var t=l(e);Y.dispatch(V.UPDATE_TRACKER_VISITOR_ATTRIBUTES,{attributes:t})}function g(e){var t=l(e.userFeatures),n={account_id:e.accountId,anonymize_ip:e.anonymizeIP,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[{session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:t,snapshots:[{decisions:[{campaign_id:e.layerId,experiment_id:e.experimentId,variation_id:e.variationId,is_campaign_holdback:e.isLayerHoldback}],events:[{uuid:e.decisionId,entity_id:e.layerId,timestamp:e.timestamp,type:$}]}]}]};Y.dispatch(V.REGISTER_PREVIOUS_BATCH,n),D()}function p(e){var t=N.isNull(q.getAnonymizeIP())?void 0:q.getAnonymizeIP(),n={account_id:e.accountId,anonymize_ip:t,client_name:e.clientName,client_version:e.clientVersion,project_id:e.projectId,visitors:[]};n.revision=e.revision,ee&&(n.enrich_decisions=!0);var i={session_id:h(e.sessionId),visitor_id:e.visitorId,attributes:[],snapshots:[]},r=b(e.layerStates);Y.dispatch(V.REGISTER_TRACKER_VISITOR,{data:n,visitor:i,decisions:r}),D()}function h(e){return se?oe:e}function _(e){var t={entity_id:e.layerId,type:$,uuid:e.decisionId,timestamp:e.timestamp};Y.dispatch(V.REGISTER_TRACKER_DECISION,{decisionEvent:t,decisions:b(e.layerStates)}),f(e.userFeatures),D()}function v(){if(!W.canSend())return void F.debug("Not sending events (holding)");var e=W.hasEventsToSend(),t=W.hasPreviousBatchesToSend();return e||t?(t&&(N.each(W.getPreviousBatches(),E),Y.dispatch(V.RESET_TRACKER_PREVIOUS_BATCHES)),void(e&&(Y.dispatch(V.FINALIZE_BATCH_SNAPSHOT),E(W.getEventBatch()),Y.dispatch(V.RESET_TRACKER_EVENTS)))):void F.debug("Not sending events because there are no events to send")}function E(e){F.debug("Sending ticket:",e);var t=P.generate();B.retryableRequest({url:L,method:"POST",data:m(e)},t)}function m(e){var t=N.extend({},N.pick(e,["account_id","anonymize_ip","client_name","client_version","enrich_decisions","project_id","revision"]),{visitors:N.map(e.visitors,I)});return t}function I(e){return{visitor_id:e.visitor_id,session_id:oe,attributes:N.map(e.attributes,y),snapshots:N.map(e.snapshots,S)}}function y(e){return w(e,{entity_id:"e",key:"k",type:"t",value:"v"})}function S(e){var t=e.events;return t=A(t),{activationTimestamp:q.getActivationTimestamp(),decisions:N.map(e.decisions,T),events:N.map(t,R)}}function A(e){var t=N.reduce(e,(function(e,t){var n;if(n=t.type!==J||!N.isEmpty(t.tags)||!N.isEmpty(N.pick(t,N.keys(ie)))||t.key&&t.entity_id!==t.key?t.uuid:t.type,e[n]){var i=e[n].timestamp;t.timestamp>i&&(i=t.timestamp),e[n]=N.extend({},e[n],{key:Z,entity_id:e[n].entity_id+"-"+t.entity_id,timestamp:i})}else e[n]=t;return e}),{});return N.values(t)}function T(e){return w(e,{campaign_id:"c",experiment_id:"x",is_campaign_holdback:"h",variation_id:"v"})}function R(e){return e.key===$&&(e.type=$,delete e.key),w(e,{entity_id:"e",key:"k",quantity:"q",revenue:"$",tags:"a",timestamp:"t",uuid:"u",value:"v",type:"y"})}function w(e,t){return N.reduce(e,(function(e,n,i){return i in t&&(e[t[i]||i]=n),e}),{})}function D(){function e(){var t=!re||j.isLoaded();t&&v(),W.isPolling()&&G.setTimeout(e,ne)}return W.shouldBatch()?void(W.isPolling()||(G.setTimeout(e,ne),Y.dispatch(V.SET_TRACKER_POLLING,!0),G.setTimeout((function(){Y.dispatch(V.SET_TRACKER_BATCHING,!1),Y.dispatch(V.SET_TRACKER_POLLING,!1)}),te))):void v()}function b(e){return N.map(e,(function(e){return{campaign_id:e.layerId,experiment_id:e.decision.experimentId,variation_id:e.decision.variationId,is_campaign_holdback:e.decision.isLayerHoldback}}))}function O(){var e=W.getPersistableState();if(e)try{F.debug("Persisting pending batch:",e),U.persistTrackerOptimizelyData(e),Y.dispatch(V.SET_TRACKER_DIRTY,!1)}catch(e){F.debug("Failed to persist pending batch:",e)}}var N=n(2),C=n(86),P=n(5),L="https://logx.optimizely.com/v1/events",V=n(7),k=n(77).create,x=n(26),F=n(23),M=n(115),U=n(75),G=n(41),B=n(91),z=n(16),j=n(81),H=n(87),K=n(111),Y=n(9),q=z.get("stores/global"),W=z.get("stores/tracker_optimizely"),X=t.Error=k("OptimizelyTrackerError"),Q="client_activation",$="campaign_activated",J="view_activated",Z="multi-event",ee=!1,te=1e4,ne=1e3,ie={revenue:{validate:c,sanitize:Math.floor,excludeFeature:!0},quantity:{validate:c,sanitize:Math.floor,excludeFeature:!0},value:{validate:c,sanitize:N.identity}},re=!1,ae=!1,oe="AUTO",se=!0,ue=[function(){return function(e){_(N.extend(e,e.decision))}}],ce=function(e){e.timing===M.TrackLayerDecisionTimingFlags.postRedirectPolicy?g(e):_(e)},le=[function(){return function(e){d(r(e),e.userFeatures,b(e.layerStates))}}],de=[function(){return function(e){p(e),d(s(e),e.userFeatures,b(e.layerStates))}}],fe=[function(){return function(e){d(o(e),e.userFeatures,b(e.layerStates))}}],ge=[function(){return function(e){d(a(e),e.userFeatures,b(e.layerStates))}}],pe={onLayerDecision:ue,trackLayerDecision:ce,postRedirectPolicy:M.PostRedirectPolicies.TRACK_AFTER_SYNC,nonRedirectPolicy:M.NonRedirectPolicies.TRACK_IMMEDIATELY,onPageActivated:le,onClientActivation:de,onClickEvent:ge,onCustomEvent:fe};e.exports=function(e){e.registerAnalyticsTracker("optimizely",pe),H.on({filter:{type:K.TYPES.ANALYTICS,name:"sendEvents"},handler:function(){Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!0),W.isPolling()||v()}}),H.on({filter:{type:K.TYPES.ANALYTICS,name:"holdEvents"},handler:function(){Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!1)}}),Y.dispatch(V.SET_TRACKER_SEND_EVENTS,!ae);var t=H.on({filter:{type:"lifecycle",name:"activated"},handler:function(){W.observe(O),H.off(t)}})}}),(function(e,t,n){e.exports=function(e){e.registerViewProvider(n(212)),e.registerViewMatcher("url",n(213))}}),(function(e,t,n){var i=n(119);e.exports={provides:"url",getter:[function(){return i.getUrl()}]}}),(function(e,t,n){var i=n(200);e.exports={fieldsNeeded:["url"],match:function(e,t){return i(e.url,t)}}}),(function(e,t,n){var i=n(145),r="custom_code",a={match:function(e,t){return i.apply(t.value)}};e.exports=function(e){e.registerViewMatcher(r,a)}}),(function(e,t,n){var i="element_present",r={match:function(e,t){return!!document.querySelector(t.value)}};e.exports=function(e){e.registerViewMatcher(i,r)}}),(function(e,t,n){var i=n(81),r=n(25),a=n(87),o=n(217),s=n(124),u="DOMChanged",c={token:void 0,setUpObserver:function(){o.createDOMChangedObserver(),this.token=a.on({filter:{type:"viewTrigger",name:"DOMChanged"},handler:function(){s.getViewsAndActivate(r.ViewActivationTypes.DOMChanged)}})},turnOffObserver:function(){a.off(this.token)}};e.exports=function(e){i.isReady()?c.setUpObserver():i.addReadyHandler(c.setUpObserver),e.registerViewTrigger(u,c)}}),(function(e,t,n){var i=n(81),r=n(87),a=n(218);t.createDOMChangedObserver=function(){var e=i.getDocumentElement(),t={type:"viewTrigger",name:"DOMChanged"},n={attributes:!0,childList:!0,subtree:!0,characterData:!0},o=a.create((function(){r.emit(t,!0)}));a.observe(o,e,n)}}),(function(e,t){t.create=function(e){return new MutationObserver(e)},t.observe=function(e,t,n){e.observe(t,n)}}),(function(e,t,n){function i(){r(),a(),h.addEventListener("popstate",v,!1),h.addEventListener("hashchange",E,!1),d.on({filter:{type:"viewTrigger",name:"URLChanged"},handler:function(){p.getViewsAndActivate(l.ViewActivationTypes.URLChanged)}})}function r(){function e(){var e=g.getOriginalPushState().apply(this,arguments);return o("pushState"),e}f.dispatch(u.ENSURE_ORIGINAL_PUSHSTATE),h.getGlobal("history").pushState=e}function a(){function e(){var e=g.getOriginalReplaceState().apply(this,arguments);return o("replaceState"),e}f.dispatch(u.ENSURE_ORIGINAL_REPLACESTATE),h.getGlobal("history").replaceState=e}function o(e){d.emit({type:"viewTrigger",name:"URLChanged",data:{source:e,newURL:h.getHref()}},!0)}var s=n(2),u=n(7),c=n(16),l=n(25),d=n(87),f=n(9),g=c.get("stores/history"),p=n(124),h=n(41),_="URLChanged";e.exports=function(e){i(),e.registerViewTrigger(_)};var v=s.partial(o,"popstate"),E=s.partial(o,"hashchange")}),(function(e,t,n){function i(e){return"apiName: "+e.apiName+", selector: "+e.eventFilter.selector}var r=n(110),a=n(221),o=n(23),s=n(124);e.exports=function(e){var t=new a(function(e){s.updateAllViewTags();var t=r.trackClickEvent(e);t?o.log("Tracking click event:",e):o.log("Not tracking click event:",e)});e.registerEventImplementation("click",{attach:function(e){t.hasEvents()||t.listen(),t.addEvent(e),o.debug("Started listening for click event ("+i(e)+"):",e)},detach:function(e){t.removeEvent(e),t.hasEvents()||t.unlisten(),o.debug("Stopped listening for click event ("+i(e)+"):",e)}})}}),(function(e,t,n){function i(e){this.handler=e,this.events=[],this.unlistenFn=null,this.clickHandler=a.bind((function(e){a.forEach(this.events,a.bind((function(t){try{var n=t.config&&t.config.selector?t.config.selector:t.eventFilter.selector;r(e,n,t)&&this.handler(t)}catch(e){o.emitError(new l("Unable to handle click for selector"+n+":"+e.message))}}),this))}),this)}function r(e,t,n){for(var i=e.target,r=0;i;){var s;try{s=c(i,t)}catch(s){var u={typeofElementValue:typeof i,nodeName:a.result(i,["nodeName"],null),nodeType:a.result(i,["nodeType"],null),targetName:a.result(e,["target","nodeName"],null),targetType:a.result(e,["target","nodeType"],null),numParentsTraversed:r,selector:t,errorMessage:s.message,eventId:n.id};return o.emitError(new l("Unable to evaluate match for element"),u),!1}if(s)return!0;i=i.parentElement,r++}return!1}var a=n(2),o=n(86),s=n(77).create,u=n(81),c=n(222),l=t.Error=s("ClickDelegateError");i.prototype.listen=function(){this.unlistenFn=u.addEventListener("click",this.clickHandler,!0)},i.prototype.unlisten=function(){this.unlistenFn&&(this.unlistenFn(),this.unlistenFn=null)},i.prototype.hasEvents=function(){return this.events.length>0},i.prototype.addEvent=function(e){this.events.push(e)},i.prototype.removeEvent=function(e){this.events=a.filter(this.events,(function(t){return t.apiName!==e.apiName}))},e.exports=i}),(function(e,t,n){e.exports=n(223)}),(function(e,t){"use strict";function n(e,t){if(r)return r.call(e,t);for(var n=e.parentNode.querySelectorAll(t),i=0;i<n.length;i++)if(n[i]==e)return!0;return!1}var i=Element.prototype,r=i.matches||i.matchesSelector||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;e.exports=n}),(function(e,t,n){function i(e,t){if(this.change=e,this.identifier=t.identifier,this.startTime=t.startTime,d.shouldObserveChangesIndefinitely()){p.dispatch(a.INITIALIZE_CHANGE_METRICS),this.rateMeter=new _(m.MOVING_WINDOW_MILLISECONDS);var n=r.isNull(m.MAX_MACROTASKS_IN_MOVING_WINDOW)?Number.POSITIVE_INFINITY:m.MAX_MACROTASKS_IN_MOVING_WINDOW;this.rateMeter.addListener(n,r.bind((function(){h.warn("AppendChange",this,"has overheated and will no longer apply or reapply"),this.cancel(),p.dispatch(a.RECORD_CHANGE_OVERHEATED),o.emitError(new I("Change "+this.identifier+" has overheated"),{layerId:t.action&&t.action.layerId,experimentId:t.action&&t.action.experimentId,variationId:t.action&&t.action.variationId,changeId:e.id,changeType:e.type,movingWindowMilliseconds:m.MOVING_WINDOW_MILLISECONDS,maxMacroTasksInMovingWindow:n})}),this));for(var i=Math.min(n,50),s=0;s<=i;s++)this.rateMeter.addListener(s,r.partial((function(e){p.dispatch(a.RECORD_CHANGE_MACROTASK_RATE,{changeMacrotaskRate:e})}),s))}}var r=n(2),a=n(7),o=n(86),s=n(138),u=n(77).create,c=n(225),l=n(226),d=n(16).get("stores/directive"),f=n(81),g=n(227),p=n(9),h=n(23),_=n(228),v=n(137),E=n(100).create(),m={MOVING_WINDOW_MILLISECONDS:1e3,MAX_MACROTASKS_IN_MOVING_WINDOW:10},I=u("ChangeOverheatError");i.prototype.numberOfRootNodes=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes.length},i.prototype.getSiblingElements=function(e,t,n){for(var i=e,r=[],a=0;a<t;a++)n?(r.push(i.nextSibling),i=i.nextSibling):(r.push(i.previousSibling),i=i.previousSibling);return r},i.prototype.apply=function(){this.applyDeferred=l();try{var e=this.numberOfRootNodes(this.change.value);if(!e)throw new Error("No DOM elements to be created for this change: "+this.change.value);var t=r.partial(this.applyDeferred.reject,new Error("Unable to find selector.")),n={};d.shouldObserveChangesUntilTimeout()?n={timeout:r.partial(v.isTimedOut,this.startTime),onTimeout:t}:d.isEditor()&&E.waitUntil(r.partial(v.isTimedOut,this.startTime)).then(t,t),this.unobserveSelector=E.observeSelector(this.change.selector,r.bind(this.maybeApplyToElement,this),n);var i=f.querySelectorAll(this.change.selector);r.each(i,r.bind(this.maybeApplyToElement,this))}catch(e){this.applyDeferred.reject(e)}return this.applyDeferred},i.prototype.maybeApplyToElement=function(e){var t=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id;if(e.hasAttribute(t))return h.debug("Not applying AppendChange to element",e,"because it was inserted by this change"),void this.applyDeferred.resolve();this.rateMeter&&this.rateMeter.countCurrentTick();var n=r.bind(this.applyOrReapplyToElement,this,e,t);n(),this.applyDeferred.resolve()},i.prototype.applyOrReapplyToElement=function(e,t){var n;switch(this.change.operator){case g.DOMInsertionType.AFTER:n=g.insertAdjacentHTMLType.AFTER_END;break;case g.DOMInsertionType.APPEND:n=g.insertAdjacentHTMLType.BEFORE_END;break;case g.DOMInsertionType.BEFORE:n=g.insertAdjacentHTMLType.BEFORE_BEGIN;break;case g.DOMInsertionType.PREPEND:n=g.insertAdjacentHTMLType.AFTER_BEGIN;break;default:n=g.insertAdjacentHTMLType.BEFORE_END}e.insertAdjacentHTML(n,this.change.value),e.setAttribute(t,""),c.setData(e,this.change.id,this.identifier,[]);var i,a,o=this.numberOfRootNodes(this.change.value)-1;n===g.insertAdjacentHTMLType.BEFORE_END?(i=e.lastChild,a=this.getSiblingElements(i,o,!1)):n===g.insertAdjacentHTMLType.AFTER_BEGIN?(i=e.firstChild,a=this.getSiblingElements(i,o,!0)):n===g.insertAdjacentHTMLType.BEFORE_BEGIN?(i=e.previousSibling,a=this.getSiblingElements(i,o,!1)):n===g.insertAdjacentHTMLType.AFTER_END&&(i=e.nextSibling,a=this.getSiblingElements(i,o,!0)),a.unshift(i),r.each(a,r.bind((function(e){var n=e.nodeType===Node.ELEMENT_NODE?e:f.parentElement(e);n.setAttribute(t,"");var i=c.getData(n,this.change.id,this.identifier)||[];i.push(e),c.setData(n,this.change.id,this.identifier,i),r.each(f.childrenOf(n),(function(e){e.setAttribute(t,"")}))}),this))},i.prototype.cancel=function(){this.unobserveSelector&&this.unobserveSelector()},i.prototype.undo=function(){var e=s.CHANGE_ID_ATTRIBUTE_PREFIX+this.change.id,t=document.querySelectorAll("["+e+"]");return r.each(t,r.bind((function(t){var n=c.getData(t,this.change.id,this.identifier)||[];r.each(n,(function(e){e.parentNode.removeChild(e)})),t.removeAttribute(e),c.removeData(t,this.change.id,this.identifier),r.each(f.childrenOf(t),(function(t){t.removeAttribute(e)}))}),this)),l().resolve(g.changeState.UNAPPLIED)},e.exports=function(e){e.registerChangeApplier(g.changeType.APPEND,i)}}),(function(e,t,n){function i(e,t){return[e,t].join("_")}var r=n(2),a=n(138).CHANGE_DATA_KEY;t.getData=function(e,t,n){var r=i(t,n);return e[a]&&e[a][r]?e[a][r]:null},t.hasData=function(e){return Boolean(e&&e[a]&&!r.isEmpty(e[a]))},t.removeData=function(e,t,n){e[a]&&delete e[a][i(t,n)]},t.setData=function(e,t,n,r){if("object"!=typeof r)throw new Error("setData expects an object");e[a]||(e[a]={}),e[a][i(t,n)]=r}}),(function(e,t,n){var i=n(2),r=n(12).Promise,a=function(){var e,t,n=new r(function(n,i){e=n,t=i});return n.resolve=function(){return e.apply(null,i.toArray(arguments)),n},n.reject=function(){return t.apply(null,i.toArray(arguments)),n},n};e.exports=a}),(function(e,t,n){var i=n(8);e.exports={changeType:{CUSTOM_CODE:"custom_code",ATTRIBUTE:"attribute",APPEND:"append",REARRANGE:"rearrange",REDIRECT:"redirect",WIDGET:"widget"},DOMInsertionType:{AFTER:"after",APPEND:"append",BEFORE:"before",PREPEND:"prepend"},insertAdjacentHTMLType:{AFTER_BEGIN:"afterbegin",AFTER_END:"afterend",BEFORE_BEGIN:"beforebegin",BEFORE_END:"beforeend"},selectorChangeType:{CLASS:"class",HTML:"html",HREF:"href",SRC:"src",STYLE:"style",TEXT:"text",HIDE:"hide",REMOVE:"remove"},changeApplierState:i({APPLIED:null,APPLYING:null,UNAPPLIED:null,UNDOING:null}),changeState:i({BLOCKED:null,UNAPPLIED:null,APPLIED:null,APPLYING:null,UNDOING:null,TIMED_OUT:null,IGNORED:null,ERROR:null})}}),(function(e,t,n){function i(e){this.windowLength=e,this.count=0,this.listeners={},this.isIncrementingTick=!1}var r=n(2),a=n(23),o=n(41);i.prototype.countCurrentTick=function(){this.isIncrementingTick||(this.isIncrementingTick=!0,this.increment(),o.setTimeout(r.bind((function(){this.isIncrementingTick=!1}),this),0))},i.prototype.increment=function(){this.count+=1,r.forEach(this.listeners[String(this.count)],(function(e){e()})),o.setTimeout(r.bind(this.decrement,this),this.windowLength)},i.prototype.decrement=function(){this.count-=1,this.count<0&&(a.warn("Decremented down to negative count: ",this.count),this.count=0)},i.prototype.addListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.exports=i}),(function(e,t,n){function i(e,t){if(!r.isFunction(e.value))throw new Error("Custom code must be a function");this.change=e}var r=n(2),a=n(226),o=n(227),s=n(145);i.prototype.apply=function(){var e=a();try{s.apply(this.change.value),e.resolve()}catch(t){e.reject(t)}return e},i.prototype.undo=function(){return a().resolve(o.changeState.IGNORED)},e.exports=function(e){e.registerChangeApplier(o.changeType.CUSTOM_CODE,i)}}),(function(e,t,n){var i=n(142),r=n(143).DecisionError,a="single_experiment",o="multivariate",s={selectExperiment:function(e,t,n){if(e.experiments.length<1)throw new r("Unable to find experiment to bucket user into");var a=e.experiments[0];if(!i.isValidExperiment(t,a))throw new r('Audience conditions failed for experiment: "'+a.id+'".');return a}};e.exports=function(e){e.registerDecider(a,s),e.registerDecider(o,s)}})]);