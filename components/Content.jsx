import React from 'react';
import FilterableTable from './FilterableTable';

export default function Content(props) {
  const {
    title,
    btnNew,
    placeholderSeach,
    api,
    mapping,
  } = props;
  return (
    <main className="w-full flex flex-col flex-grow gap-3 text-branco overflow-hidden">
      <h1 className="mt-10 text-5xl">{title}</h1>
      <section className="w-full flex flex-row justify-end gap-1">
        <button type="button" className="bg-azul3 px-6 py-1 text-2xl">{btnNew}</button>
      </section>
      <FilterableTable placeholderSeach={placeholderSeach} api={api} mapping={mapping} />
    </main>
  );
}
