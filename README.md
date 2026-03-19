# Remove Google Translate Redirect (translate.goog)
Userscript que remove a traducao automatica que o Google aplica no site ao clicar em um link da pesquisa.

Corrige automaticamente URLs abertas pelo Google que usam o domínio `translate.goog`.
## 🚨 Problema
Ao pesquisar páginas que não estão no seu idioma preferido, o Google pode abrir páginas através de:
`https://translate.google.com/translate?u=`
ou
`*.translate.goog`.

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
3. Na interface do TamperMonkey, crie um novo userscript
4. Copie o código desse repositório e cole no userscript
5. Salve e ative o userscript na outra aba (se necessário)

## 💡 Exemplo
Usando como exemplo uma página da wiki Fandom do jogo Subnautica:

### Abrindo a página sem o script:
`https://subnautica-fandom-com.translate.goog/wiki/Sea_Dragon_Leviathan?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc`

### Usando o script:
`https://subnautica.fandom.com/wiki/Sea_Dragon`

