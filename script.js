/* ===================================================================
   Eslaumaykne — logica da loja
=================================================================== */


const WHATSAPP_NUMERO = "244929774784";

const CORES_DISPONIVEIS = [
  "Como na foto",
  "Preto",
  "Branco",
  "Bege",
  "Castanho",
  "Verde",
  "Rosa",
  "Vermelho",
  "Cinza",
  "Dourado"
];

const PRODUTOS = [
  // ---------------- COLETES ----------------
  { id: "col-01", categoria: "coletes", nome: "Colete Xadrez Castanho", preco: 2500, img: "assets/colete_castanho.jpg" },
  { id: "col-02", categoria: "coletes", nome: "Colete Xadrez Verde",    preco: 2500, img: "assets/colete_verde_eslaumaykne.jpg" },
  { id: "col-03", categoria: "coletes", nome: "Colete Tricot Creme",    preco: 2500, img: "assets/colete_creme.jpg" },
  { id: "col-04", categoria: "coletes", nome: "Colete Tricot Azul Tiffany", preco: 2500, img: "assets/colete_azul.jpg" },

  // ---------------- PASTAS UNIVERSITARIAS ----------------
  { id: "uni-01", categoria: "universitarias", nome: "Pasta Universitária Castanha Monograma", preco: 6500, img: "assets/pasta_uni_castanha.jpg" },
  { id: "uni-02", categoria: "universitarias", nome: "Pasta Universitária Preta Monograma Azul", preco: 6500, img: "assets/pasta_uni_preta_azul.jpg" },
  { id: "uni-03", categoria: "universitarias", nome: "Pasta Universitária Preta Diamante", preco: 6500, img: "assets/pasta_uni_preta_diamante.jpg" },
  { id: "uni-04", categoria: "universitarias", nome: "Pasta Universitária Preta Clássica", preco: 6500, img: "assets/pasta_uni_preta_classica.jpg" },
  { id: "uni-05", categoria: "universitarias", nome: "Pasta Universitária Bege",     preco: 6500, img: "assets/pasta_uni_bege.jpg" },

  // ---------------- PASTAS DAS MOÇAS ----------------
  { id: "moc-01", categoria: "mocas", nome: "Bolsa Pink GG Duas Alças",     preco: 5000, img: "assets/moca_pink_gg_duas_alcas.jpg" },
  { id: "moc-02", categoria: "mocas", nome: "Bolsa Branca GG Clássica",     preco: 4800, img: "assets/moca_branca_gg_classica.jpg" },
  { id: "moc-03", categoria: "mocas", nome: "Bolsa Verde Coração",          preco: 5000, img: "assets/moca_verde_coracao.jpg" },
  { id: "moc-04", categoria: "mocas", nome: "Bolsa Verde Estilo com Lenço", preco: 4800, img: "assets/moca_verde_zara_lenco.jpg" },
  { id: "moc-05", categoria: "mocas", nome: "Bolsa Bege e Vermelho",        preco: 4500, img: "assets/moca_bege_vermelha.jpg" },
  { id: "moc-06", categoria: "mocas", nome: "Bolsa Cinza Matelassê Flap",   preco: 4800, img: "assets/moca_cinza_matelasse_flap.jpg" },
  { id: "moc-07", categoria: "mocas", nome: "Bolsa Vermelha Matelassê",     preco: 4800, img: "assets/moca_vermelha_matelasse.jpg" },
  { id: "moc-08", categoria: "mocas", nome: "Bolsa Preta Hexagonal Pequena", preco: 4500, img: "assets/moca_preta_hexagonal_pequena.jpg" },
  { id: "moc-09", categoria: "mocas", nome: "Bolsa Pink Alça Transparente", preco: 5000, img: "assets/moca_pink_alca_transparente.jpg" },
  { id: "moc-10", categoria: "mocas", nome: "Bolsa Preta GG Hexagonal",     preco: 4800, img: "assets/moca_preta_gg_hexagonal.jpg" },
  { id: "moc-11", categoria: "mocas", nome: "Bolsa Cinza Matelassê Alça",   preco: 4800, img: "assets/moca_cinza_matelasse_alca.jpg" },
  { id: "moc-12", categoria: "mocas", nome: "Bolsa Verde Menta",            preco: 4500, img: "assets/moca_verde_menta.jpg" },
  { id: "moc-13", categoria: "mocas", nome: "Bolsa Preta Corrente",         preco: 4500, img: "assets/moca_preta_corrente.jpg" },
  { id: "moc-14", categoria: "mocas", nome: "Bolsa Vermelha Corrente",      preco: 4500, img: "assets/moca_vermelha_corrente.jpg" },
  { id: "moc-15", categoria: "mocas", nome: "Bolsa Branca Redonda",         preco: 4800, img: "assets/moca_branca_redonda.jpg" },
  { id: "moc-16", categoria: "mocas", nome: "Bolsa Bege Matelassê",         preco: 4800, img: "assets/moca_bege_matelasse.jpg" },
  { id: "moc-17", categoria: "mocas", nome: "Bolsa Azul Royal",             preco: 5000, img: "assets/moca_azul_royal.jpg" },
  { id: "moc-18", categoria: "mocas", nome: "Bolsa Amarela Satchel",        preco: 5000, img: "assets/moca_amarela_satchel.jpg" },
  { id: "moc-19", categoria: "mocas", nome: "Bolsa Rosa Satchel",           preco: 4500, img: "assets/moca_rosa_satchel.jpg" },

  // ---------------- PERFUMES ----------------
  { id: "per-01", categoria: "perfumes", nome: "Perfume Blackberry",     preco: 4000, img: "assets/perfume_blackberry.jpg" },
  { id: "per-02", categoria: "perfumes", nome: "Perfume Yara Lattafa",   preco: 4000, img: "assets/perfume_yara.jpg" },
  { id: "per-03", categoria: "perfumes", nome: "Perfume Paco LeXcess",   preco: 4000, img: "assets/perfume_paco.jpg" },
  { id: "per-04", categoria: "perfumes", nome: "Perfume Intense Pink",   preco: 4000, img: "assets/perfume_intense_pink.jpg" },
  { id: "per-05", categoria: "perfumes", nome: "Perfume YSL M7",         preco: 4000, img: "assets/perfume_ysl.jpg" },

  // ---------------- CONJUNTOS DE COLARES ----------------
  { id: "col-set-01", categoria: "colares", nome: "Conjunto Trevo Vermelho",         preco: 4000, img: "assets/colar_vermelho.jpg" },
  { id: "col-set-02", categoria: "colares", nome: "Conjunto Trevo Preto & Branco",   preco: 4000, img: "assets/colar_preto_branco.jpg" },
];

const CATEGORIAS = [
  { chave: "coletes",        titulo: "Coletes",               faixa: "2.500 Kz" },
  { chave: "universitarias", titulo: "Pastas Universitárias",  faixa: "6.500 Kz" },
  { chave: "mocas",          titulo: "Pastas das Moças",       faixa: "4.500 — 5.000 Kz" },
  { chave: "perfumes",       titulo: "Perfumes",               faixa: "4.000 Kz" },
  { chave: "colares",        titulo: "Conjuntos de Colares",   faixa: "4.000 Kz" },
];

const formatarKz = (valor) => valor.toLocaleString("pt-PT") + " Kz";

/* ---------------- estado do carrinho ---------------- */
let carrinho = [];
try{
  const guardado = localStorage.getItem("eslaumaykne-carrinho");
  if (guardado) carrinho = JSON.parse(guardado);
}catch(e){ carrinho = []; }

function guardarCarrinho(){
  try{ localStorage.setItem("eslaumaykne-carrinho", JSON.stringify(carrinho)); }
  catch(e){ /* modo privado ou indisponivel — segue apenas em memoria */ }
}

/* ---------------- montagem das secoes ---------------- */
const areaSecoes = document.getElementById("areaSecoes");
const listaChips = document.getElementById("listaChips");
const navCategorias = document.getElementById("navCategorias");

CATEGORIAS.forEach(cat => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="#${cat.chave}">${cat.titulo}</a>`;
  listaChips.appendChild(li);

  const liNav = document.createElement("li");
  liNav.innerHTML = `<a href="#${cat.chave}">${cat.titulo}</a>`;
  navCategorias.appendChild(liNav);

  const secao = document.createElement("section");
  secao.className = "secao-produtos";
  secao.id = cat.chave;

  const produtosCategoria = PRODUTOS.filter(p => p.categoria === cat.chave);

  secao.innerHTML = `
    <div class="envolucro">
      <div class="cabecalho-secao">
        <h2>${cat.titulo}</h2>
        <span class="faixa-preco">${cat.faixa} · ${produtosCategoria.length} modelo${produtosCategoria.length > 1 ? "s" : ""}</span>
      </div>
      <div class="grelha-produtos" id="grelha-${cat.chave}"></div>
    </div>
  `;
  areaSecoes.appendChild(secao);

  const grelha = secao.querySelector(`#grelha-${cat.chave}`);
  produtosCategoria.forEach(produto => grelha.appendChild(criarCartaoProduto(produto)));
});

function criarCartaoProduto(produto){
  const opcoesCor = CORES_DISPONIVEIS.map(c => `<option value="${c}">${c}</option>`).join("");

  const artigo = document.createElement("article");
  artigo.className = "cartao-produto";
  artigo.innerHTML = `
    <div class="moldura-imagem">
      <img src="${produto.img}" alt="${produto.nome}" loading="lazy">
    </div>
    <div class="corpo-cartao">
      <h3>${produto.nome}</h3>
      <span class="preco">${formatarKz(produto.preco)}</span>
      <label class="campo">Cor
        <select class="seletor-cor">${opcoesCor}</select>
      </label>
      <div class="linha-qtd">
        <span class="campo" style="font-size:0.78rem;">Quantidade</span>
        <div class="seletor-qtd">
          <button type="button" class="menos" aria-label="Diminuir">−</button>
          <span class="valor-qtd">1</span>
          <button type="button" class="mais" aria-label="Aumentar">+</button>
        </div>
      </div>
      <button type="button" class="botao-adicionar">Adicionar ao pedido</button>
    </div>
  `;

  let qtd = 1;
  const valorQtd = artigo.querySelector(".valor-qtd");
  artigo.querySelector(".menos").addEventListener("click", () => {
    qtd = Math.max(1, qtd - 1);
    valorQtd.textContent = qtd;
  });
  artigo.querySelector(".mais").addEventListener("click", () => {
    qtd = Math.min(20, qtd + 1);
    valorQtd.textContent = qtd;
  });

  const botaoAdd = artigo.querySelector(".botao-adicionar");
  botaoAdd.addEventListener("click", () => {
    const cor = artigo.querySelector(".seletor-cor").value;
    adicionarAoCarrinho(produto, qtd, cor);
    botaoAdd.textContent = "Adicionado ✓";
    botaoAdd.classList.add("ok");
    setTimeout(() => {
      botaoAdd.textContent = "Adicionar ao pedido";
      botaoAdd.classList.remove("ok");
    }, 1300);
  });

  return artigo;
}

/* ---------------- logica do carrinho ---------------- */
function adicionarAoCarrinho(produto, quantidade, cor){
  const existente = carrinho.find(i => i.id === produto.id && i.cor === cor);
  if (existente){
    existente.quantidade += quantidade;
  } else {
    carrinho.push({
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      img: produto.img,
      cor,
      quantidade
    });
  }
  guardarCarrinho();
  renderizarCarrinho();
  mostrarToast(`${produto.nome} adicionada ao pedido`);
}

function removerDoCarrinho(indice){
  carrinho.splice(indice, 1);
  guardarCarrinho();
  renderizarCarrinho();
}

function totalCarrinho(){
  return carrinho.reduce((soma, item) => soma + item.preco * item.quantidade, 0);
}

function contagemCarrinho(){
  return carrinho.reduce((soma, item) => soma + item.quantidade, 0);
}

const itensCarrinhoEl = document.getElementById("itensCarrinho");
const contagemEl = document.getElementById("contagemCarrinho");
const totalEl = document.getElementById("totalCarrinho");
const botaoWhatsapp = document.getElementById("botaoWhatsapp");

function renderizarCarrinho(){
  contagemEl.textContent = contagemCarrinho();

  if (carrinho.length === 0){
    itensCarrinhoEl.innerHTML = `<p class="carrinho-vazio">O teu pedido está vazio.<br>Escolhe alguns artigos no catálogo.</p>`;
    botaoWhatsapp.disabled = true;
  } else {
    itensCarrinhoEl.innerHTML = carrinho.map((item, indice) => `
      <div class="item-carrinho">
        <img src="${item.img}" alt="${item.nome}">
        <div class="info-item">
          <h4>${item.nome}</h4>
          <p>Cor: ${item.cor} · Qtd: ${item.quantidade}</p>
          <p>${formatarKz(item.preco * item.quantidade)}</p>
        </div>
        <button type="button" class="remover-item" data-indice="${indice}">Remover</button>
      </div>
    `).join("");
    botaoWhatsapp.disabled = false;

    itensCarrinhoEl.querySelectorAll(".remover-item").forEach(botao => {
      botao.addEventListener("click", () => removerDoCarrinho(Number(botao.dataset.indice)));
    });
  }

  totalEl.textContent = formatarKz(totalCarrinho());
}

/* ---------------- abrir / fechar painel ---------------- */
const painelCarrinho = document.getElementById("painelCarrinho");
const fundoCarrinho = document.getElementById("fundoCarrinho");

function abrirCarrinho(){
  painelCarrinho.classList.add("aberto");
  fundoCarrinho.classList.add("aberto");
}
function fecharCarrinho(){
  painelCarrinho.classList.remove("aberto");
  fundoCarrinho.classList.remove("aberto");
}

document.getElementById("botaoAbrirCarrinho").addEventListener("click", abrirCarrinho);
document.getElementById("fecharCarrinho").addEventListener("click", fecharCarrinho);
fundoCarrinho.addEventListener("click", fecharCarrinho);

/* ---------------- menu mobile simples ---------------- */
const menuMobileBtn = document.getElementById("menuMobileBtn");
menuMobileBtn.addEventListener("click", () => {
  const aberto = navCategorias.classList.toggle("nav-mobile-aberta");
  navCategorias.style.display = aberto ? "flex" : "";
});

/* ---------------- finalizar pedido via WhatsApp ---------------- */
document.getElementById("formCheckout").addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nomeCliente = document.getElementById("nomeCliente").value.trim();
  const enderecoCliente = document.getElementById("enderecoCliente").value.trim();
  const notaCliente = document.getElementById("notaCliente").value.trim();

  if (!nomeCliente){
    mostrarToast("Escreve o teu nome para continuar");
    return;
  }
  if (carrinho.length === 0) return;

  let mensagem = `Olá Eslaumaykne! Quero fazer este pedido:%0A%0A`;
  carrinho.forEach((item, i) => {
    mensagem += `${i + 1}. ${item.nome} — Cor: ${item.cor} — Qtd: ${item.quantidade} — ${formatarKz(item.preco * item.quantidade)}%0A`;
  });
  mensagem += `%0ATotal: ${formatarKz(totalCarrinho())}%0A%0A`;
  mensagem += `Nome: ${nomeCliente}%0A`;
  if (enderecoCliente) mensagem += `Endereço/Bairro: ${enderecoCliente}%0A`;
  if (notaCliente) mensagem += `Observação: ${notaCliente}%0A`;

  const link = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(link, "_blank");
});

/* ---------------- toast ---------------- */
let temporizadorToast;
function mostrarToast(texto){
  const toast = document.getElementById("toast");
  toast.textContent = texto;
  toast.classList.add("mostrar");
  clearTimeout(temporizadorToast);
  temporizadorToast = setTimeout(() => toast.classList.remove("mostrar"), 2200);
}

/* ---------------- iniciar ---------------- */
document.getElementById("anoAtual").textContent = new Date().getFullYear();
renderizarCarrinho();
