import React from 'react';
import FilterableTable from './FilterableTable';

export default function Content() {
  return (
    <main className="w-full flex flex-col gap-1 text-branco">
      <h1 className="text-3xl">Equipes</h1>
      <section className="w-full flex flex-row justify-end gap-1">
        <button type="button" className="bg-azul3 px-5 py-2">Nova Equipe</button>
      </section>
      <FilterableTable />
    </main>
  );
}
