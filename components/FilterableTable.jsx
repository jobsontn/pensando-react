import React from 'react';
import SearchBar from './SearchBar';
import Table from './Table';

export default function FilterableTable() {
  return (
    <div className="w-full bg-branco/70 flex flex-col flex-grow p-10 gap-5 overflow-hidden">
      <SearchBar />
      <Table />
    </div>
  );
}
