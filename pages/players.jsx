import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';

export default function PageTeams() {
  const mapping = {};
  mapping.ID = ['id', 'int'];
  mapping.Nick = ['nick', 'string'];
  mapping.Nome = ['name', 'string'];
  mapping.Email = ['email', 'string'];
  return (
    <div className="bg01 w-screen h-screen p-10 flex flex-col">
      <Head>
        <title>Moura Energy Game</title>
        <meta name="description" content="Bem vindo! Você está no Moura Energy Game" />
        <meta name="keywords" content="Moura, Moura Tech, Energy Game, Gamificação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content title="Jogadores" btnNew="Novo Jogador" placeholderSeach="Buscar Jogador" api="/api/players" mapping={mapping} />
    </div>
  );
}
