"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Importa o axios direto aqui
import CardProduto from '@/components/CardProduto';

// Tipo dos produtos
interface Produto {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

// Página inicial que lista os produtos
const Home = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]); // Estado que guarda os produtos

   // Executa ao carregar a página
  useEffect(() => {
    // Faz a requisição direto aqui
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProdutos(response.data.products);  // Salva os produtos no estado
      })
      .catch(error => {
        console.log('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      
      {produtos.map(produto => (
        <CardProduto
          key={produto.id}
          id={produto.id}
          title={produto.title}
          price={produto.price}
          thumbnail={produto.thumbnail}
        />
      ))}
    </div>
  );
};

export default Home;
