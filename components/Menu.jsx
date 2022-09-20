import React from 'react';

export default function Menu() {
  return (
    <nav>
      <ul className="flex flex-row gap-10 text-branco text-xl p-5">
        <li>Home</li>
        <li>Cadastro</li>
        <li>Atualizar Pontuação</li>
        <li>Ranking</li>
        <li>Painel de conquistas</li>
        <li>Ajuda</li>
        <li>Buscar</li>
      </ul>
    </nav>
  );
}
