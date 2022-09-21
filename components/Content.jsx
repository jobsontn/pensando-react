import React from 'react';
import FilterableTable from './FilterableTable';

export default function Content() {
  return (
    <main className="w-full flex flex-col flex-grow gap-3 text-branco">
      <h1 className="mt-10 text-5xl">Equipes</h1>
      <section className="w-full flex flex-row justify-end gap-1">
        <button type="button" className="bg-azul3 px-6 py-1">Nova Equipe</button>
      </section>
      <FilterableTable />
    </main>
  );
}
