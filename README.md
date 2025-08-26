# PROJETO PARA PUXAR OS DADOS DO STRAPI

Esse repositório trabalha em conjunto com um repositório BACKEND para consultar os dados, caso queira ver o repositório front end [clique aqui](https://github.com/GustavoCosta00/Hexagon-Backend/tree/main)


### `Como ele funciona`

Esse repositório tem a finalidade de criar o `FRONTEND` de uma aplicação com STRAPI, aqui você vai visualizar como funciona as requisições dentro do STRAPI, como exibir os dados, padrõe e muito mais!

### `Primeiros Passos`

Clone esse repositório em sua máquina, abra o terminal do VS CODE e depois utilize o comando:

```
npm install
```
Esse comando leva em torno de 2 minutos.

Depois crie um arquivo `.env` e coloque dentro dele:
```
STRAPI_URL=http://localhost:1337
STRAPI_TOKEN=...
```


**STRAPI_TOKEN** para colocarmos essa chave precisamos abrir o **STRAPI** e seguir esse passo a passo: ABRA O STRAPI > SETTINGS > API TOKENS > CREATE NEW API TOKEN

Depois disso, basta pegar o token e inserir no lugar de **...**


### `Estrutura do Sistema`

Depois de ter feito tudo isso, você pode rodar o comando 
```
npm run dev
```
Dentro da pasta inicio você verá um código que chama 3 principais componentes para nossa aplicação: **Banner, HeroMainSection e HeroSection**

Depois disso abra seu navegador e insira o endPoint **/inicio** para mostrar esse arquivo page.tsx, com isso, vamos abrir todos os dados que devem ser mostrados na HOMEPAGE!

### `Como funciona as Rotas?`

Todas as chamadas para o back end estão guardadas em: **LIB > STRAPI.TS** e por questões de reutilização, todos os componentes estão guardados dentro da pasta **components** 


### `Informações Importantes!`

Adicione sempre imagens relativamente grandes dentro do sistema para que não ocorra erro, pois se prestar atenção, dentro de Banner.tsx, temos uma tag assim:

```
<img
  src={base_url + img.formats?.medium?.url}
  alt={`Banner ${idx}`}
  className="w-full h-64 object-cover"/>
```

Esse **formats?.medium...** ele só encontra esse medium caso a imagem seja grande, caso contrário dentro de formats ele vai criar apenas um campo chamado tumbNail.

Nas imagens é necessário usar **base_url** pois na requisição ele não trás a url completa da imagem

Na hora de popular um campo dentro de **strapi.ts** temos que seguir esse exemplo:

const res = await fetch("http://127.0.0.1:1337/api/colecao/ID?populate[Home][populate]=*")

## Vale resaltar que esse formato vai popular apenas os elementos dentro de Home, e não os sub elementos dentro dele!


