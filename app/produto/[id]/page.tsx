'use client'; 

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios'; // Importa o axios direto aqui
import DetalheProduto from '../../../components/DetalheProduto';

interface Produto {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  thumbnail: string;
}
// Página de detalhes do produto
const PaginaDetalhe = () => {
  const { id } = useParams(); 
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    if (id) {
      // Chamada à API com o ID
      axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => setProduto(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  if (!produto) return <p>Carregando...</p>;

  return <DetalheProduto {...produto} />;
};

export default PaginaDetalhe;
