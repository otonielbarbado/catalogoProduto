import React from 'react';

interface Props {
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  thumbnail: string;
}

const DetalheProduto = ({ title, description, price, category, rating, thumbnail }: Props) => {
  return (
    <div>
      <img src={thumbnail} alt={title} width={300} />
      <h1>{title}</h1>
      <p><strong>Descrição:</strong> {description}</p>
      <p><strong>Preço:</strong> ${price}</p>
      <p><strong>Categoria:</strong> {category}</p>
      <p><strong>Avaliação:</strong> {rating}</p>
    </div>
  );
};

export default DetalheProduto;
