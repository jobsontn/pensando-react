import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Content from '../components/Content';

export default function PageTeams() {
  return (
    <div className="bg01 w-screen h-screen p-6">
      <Head>
        <title>Moura Energy Game</title>
        <meta name="description" content="Bem vindo! Você está no Moura Energy Game" />
        <meta name="keywords" content="Moura, Moura Tech, Energy Game, Gamificação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
    </div>
  );
}
