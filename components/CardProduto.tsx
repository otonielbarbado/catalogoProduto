import React from 'react';
import Link from 'next/link';
import styles from '../styles/CardProduto.module.css';

interface Props {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const CardProduto = ({ id, title, price, thumbnail }: Props) => {
  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} width={200} />
      <h3>{title}</h3>
      <p>Preço: ${price}</p>
      <Link href={`/produto/${id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default CardProduto;
