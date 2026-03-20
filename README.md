# Remove Google Translate Redirect (translate.goog)
Userscript que remove a traducao automatica que o Google aplica no site ao clicar em um link da pesquisa.

Corrige automaticamente URLs abertas pelo Google que usam o domínio `translate.goog`.
## 🚨 Problema
Ao pesquisar páginas que não estão no seu idioma preferido, o Google pode abrir páginas através de: `https://translate.google.com/translate?u=` ou `*.translate.goog`.

Isso:
- Altera o domínio original
- Quebra navegação
- Adiciona parâmetros desnecessários

## ✅ Solução
Este script:
- Detecta URLs `translate.goog`
- Reconstrói o URL original
- Remove os parâmetros de tradução `_x_tr_*`
- Redireciona automaticamente para o link correto

## ⚙️ Como usar
1. Instale a extensão Tampermonkey no seu navegador
2. Vá nas opções da extensão e ative a permissão para executar scripts de usuário
3. Abra o script no github e clique em RAW que o TamperMonkey automaticamente redireciona para a instalação
4. Ou crie um novo userscript, copie o código desse repositório, cole no userscript e salve
5. Certifique-se de que o script está ativado na aba "Userscripts instalados" na interface do TamperMonkey

## 💡 Exemplo
Usando como exemplo uma página da wiki Fandom do jogo Subnautica:

<img width="1920" height="1032" alt="pesquisa exemplo" src="https://github.com/user-attachments/assets/35c23fe3-691c-4fe1-9600-19493213657a" />


### ❌ Abrindo a página sem o script:
`https://subnautica-fandom-com.translate.goog/wiki/Sea_Dragon_Leviathan?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc`

<img width="1920" height="1032" alt="sem script" src="https://github.com/user-attachments/assets/16bef0b8-0554-44cc-8723-20cff0a1b1ef" />


### ✔️ Usando o script:
`https://subnautica.fandom.com/wiki/Sea_Dragon`

<img width="1920" height="1032" alt="depois script" src="https://github.com/user-attachments/assets/06fce036-681b-4bae-be77-bf7ba4870e70" />

