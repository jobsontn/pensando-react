import React from 'react';
import Link from 'next/link';

export default function Menu() {
  return (
    <nav>
      <ul className="flex flex-row gap-10 text-branco text-xl items-end">
        <li>Home</li>
        <li className="hover:border-b-2"><Link href="/players">Jogadores</Link></li>
        <li className="hover:border-b-2"><Link href="/teams">Equipes</Link></li>
        <li>Atualizar Pontuação</li>
        <li>Ranking</li>
        <li>Painel de conquistas</li>
        <li>Ajuda</li>
        <li>Buscar</li>
      </ul>
    </nav>
  );
}
