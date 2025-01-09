const blogPosts = [
  {
    id: 1,
    slug: "13-estrategias-atrair-clientes",
    title: "13 Estratégias Infalíveis Para Atrair Clientes Para Sua Loja",
    excerpt: "Para o sucesso de qualquer loja, atrair clientes é essencial...",
    image:
      "https://natomadaproducoes.com.br/wp-content/uploads/2025/01/xcomo-atrair-clientes-para-loja.jpg.pagespeed.ic.KvnvnuAesj.webp",
    content: `
      <p>Para o sucesso de qualquer loja, atrair clientes é essencial. A capacidade de conquistar novos consumidores e manter os existentes é o que impulsiona o crescimento e a sustentabilidade do negócio. Neste artigo, exploraremos 13 estratégias infalíveis que ajudarão a aumentar seu público-alvo e melhorar seu desempenho no mercado.</p>

      <h2>Conheça Seu Público</h2>
      <p>Compreender as necessidades e preferências dos clientes é um dos pilares para atrair e fidelizar consumidores. Quando você conhece bem o seu público, pode personalizar suas ofertas e estratégias de marketing, aumentando a eficácia das suas campanhas e, consequentemente, suas vendas. Essa compreensão permite que você crie uma conexão mais forte com os clientes, tornando sua marca mais relevante no dia a dia deles.</p>

      <h2>Estratégias para Redes Sociais</h2>
      <p>Para atrair clientes através das redes sociais, é essencial criar conteúdo atraente que capture a atenção do público. Invista em imagens de alta qualidade e vídeos envolventes que mostrem seus produtos de forma criativa. Os stories, por exemplo, são uma excelente forma de compartilhar atualizações rápidas e ofertas exclusivas, estimulando o engajamento instantâneo.

A consistência é igualmente importante. Mantenha uma frequência regular de postagens para manter sua marca sempre presente na mente dos consumidores. Isso ajuda a construir uma comunidade leal e aumenta a visibilidade da sua loja.

Além disso, a interação com os seguidores é crucial. Responda aos comentários e mensagens prontamente, mostrando que você valoriza o feedback e as opiniões do seu público. Faça perguntas, crie enquetes e incentive a participação ativa dos seus seguidores. Essas práticas não só aumentam o engajamento, como também fortalecem o relacionamento com os clientes.

Utilizando essas estratégias, sua presença nas redes sociais se tornará uma poderosa ferramenta para atrair e conquistar novos clientes, ampliando o alcance e a influência da sua loja no mercado.</p>
    `,
  },
  {
    id: 2,
    slug: "venda-direta-dropshipping",
    title: "Venda Direta Descomplicada E Lucrativa Para Iniciantes",
    excerpt: "A venda direta é um modelo de negócios onde produtos...",
    image: "/images/blog/venda-direta.jpg",
    content: `
      <p>A venda direta é um modelo de negócios onde produtos são comercializados diretamente ao consumidor final, sem intermediários.</p>
    `,
  },
  {
    id: 3,
    slug: "venda-sem-estoque-dropshipping",
    title: "Venda Sem Estoque E Alcance O Sucesso No Dropshipping",
    excerpt: "O dropshipping é um modelo de negócios que permite aos...",
    image: "/images/blog/dropshipping.jpg",
    content: `
      <p>O dropshipping é um modelo de negócios que permite aos empreendedores venderem produtos sem manter estoque físico.</p>
    `,
  },
  {
    id: 4,
    slug: "entrega-expressa-loja-virtual",
    title: "5 Razões Para Investir Em Entrega Expressa Na Sua Loja Virtual",
    excerpt:
      "No cenário atual do comércio eletrônico, a entrega expressa emerge...",
    image: "/images/blog/entrega-expressa.jpg",
    content: `
      <p>No cenário atual do comércio eletrônico, a entrega expressa emerge como um diferencial competitivo essencial.</p>
    `,
  },
  {
    id: 5,
    slug: "mini-envio-correios",
    title: "Como Funciona O Mini Envio Dos Correios Para Suas Compras Online",
    excerpt: "Introdução ao Mini Envio dos Correios O Mini Envio dos...",
    image: "/images/blog/correios.jpg",
    content: `
      <p>O Mini Envio dos Correios é uma solução inovadora para pequenas encomendas.</p>
    `,
  },
  {
    id: 6,
    slug: "marketing-pet-shop",
    title:
      "Marketing para pet shop: estratégias essenciais para atrair mais clientes",
    excerpt: "O marketing para pet shops é uma ferramenta essencial para...",
    image: "/images/blog/pet-shop.jpg",
    content: `
      <p>O marketing para pet shops é uma ferramenta essencial para atrair e fidelizar clientes no mercado pet.</p>
    `,
  },
];

export const getAllPosts = () => {
  return blogPosts;
};

export const getPostBySlug = (slug) => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getLatestPosts = (limit = 3) => {
  return blogPosts.slice(0, limit);
};

export const searchPosts = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term)
  );
};
