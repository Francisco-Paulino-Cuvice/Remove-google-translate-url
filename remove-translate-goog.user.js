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

(function () {
    const url = new URL(window.location.href);

    // remove .translate.goog
    let encodedHost = url.hostname.replace('.translate.goog', '');

    // 1. -- → -
    // 2. - → .
    let originalHost = encodedHost
        .replace(/--/g, '#TEMP#') // placeholder
        .replace(/-/g, '.')
        .replace(/#TEMP#/g, '-');

    // monta URL
    let cleanUrl = url.protocol + '//' + originalHost + url.pathname + url.search + url.hash;

    // remove parâmetros de tradução
    cleanUrl = cleanUrl.replace(/([?&])_x_tr_[^&]+/g, '');

    window.location.replace(cleanUrl);
})();
