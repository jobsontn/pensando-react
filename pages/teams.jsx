import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';

export default function PageTeams() {
  const mapping = {};
  mapping.ID = ['id', 'int'];
  mapping.Nome = ['name', 'string'];
  mapping['Data de criação'] = ['createdAt', 'date'];
  return (
    <div className="bg01 w-screen h-screen p-10 flex flex-col">
      <Head>
        <title>Moura Energy Game</title>
        <meta name="description" content="Bem vindo! Você está no Moura Energy Game" />
        <meta name="keywords" content="Moura, Moura Tech, Energy Game, Gamificação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content title="Equipes" btnNew="Nova Equipe" placeholderSeach="Buscar Equipe" api="/api/teams" mapping={mapping} />
    </div>
  );
}
