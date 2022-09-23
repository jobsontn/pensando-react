import React, { useState } from 'react';
import useSWR from 'swr';
import { FaExclamationTriangle } from 'react-icons/fa';
import SearchBar from './SearchBar';
import Table from './Table';
import Loading from './Loading';

export default function FilterableTable(props) {
  const { placeholderSeach, api, mapping } = props;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(api, fetcher);
  const [searchTerm, setSearchTerm] = useState('');

  if (error) {
    return (
      <div className="w-full bg-branco/70 flex flex-col flex-grow p-10 gap-5 overflow-hidden justify-center items-center text-red-800 text-2xl">
        <div className="text-5xl">
          <FaExclamationTriangle />
        </div>
        Erro de acesso aos dados!
      </div>
    );
  }
  if (!data) {
    return (
      <div className="w-full bg-branco/70 flex flex-col flex-grow p-10 gap-5 overflow-hidden justify-center items-center text-preto text-2xl">
        <Loading type="5" />
        Garregando ...
      </div>
    );
  }
  const filteredData = data.filter((value) => {
    const search = searchTerm.toUpperCase();
    return value.name.toUpperCase().includes(search);
  });

  return (
    <div className="w-full bg-branco/70 flex flex-col flex-grow p-10 gap-5 overflow-hidden">
      <SearchBar placeholderSeach={placeholderSeach} value={searchTerm} setValue={setSearchTerm} />
      <Table data={filteredData} mapping={mapping} />
    </div>
  );
}
