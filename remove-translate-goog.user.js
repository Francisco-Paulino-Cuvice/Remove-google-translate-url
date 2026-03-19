// ==UserScript==
// @name         Remove Google Translate URLs
// @namespace    http://tampermonkey.net/
// @version      2026-03-19
// @description  Remove a traducao automatica que o google aplica no site ao clicar em um link da pesquisa
// @author       Francisco Paulino Cuvice
// @match        *://*.translate.goog/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    const url = new URL(window.location.href);

    // pega só a parte antes do .translate.goog
    let encodedHost = url.hostname.replace('.translate.goog', '');

    // reverte: troca - por .
    let originalHost = encodedHost.replace(/-/g, '.');

    // monta URL final
    let cleanUrl = url.protocol + '//' + originalHost + url.pathname + url.search + url.hash;

    // remove parâmetros de tradução (_x_tr_*)
    cleanUrl = cleanUrl.replace(/([?&])_x_tr_[^&]+/g, '');

    window.location.replace(cleanUrl);
})();
