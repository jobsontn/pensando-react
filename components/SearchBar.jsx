import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <label htmlFor="txtSearch" className="w-full bg-azul3 text-branco flex flex-row px-10 py-3 text-3xl gap-5 justify-between">
      <FaUserCircle />
      <input type="text" id="txtSearch" placeholder="Buscar Equipe" className="bg-transparent text-branco flex flex-grow text-2xl" />
      <FaSearch />
    </label>
  );
}
