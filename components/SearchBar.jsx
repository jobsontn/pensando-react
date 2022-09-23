import React from 'react';
import { FaUserCircle, FaSearch } from 'react-icons/fa';

export default function SearchBar(props) {
  const { placeholderSeach, value, setValue } = props;
  return (
    <label htmlFor="txtSearch" className="w-full bg-azul3 text-branco flex flex-row px-10 py-3 text-3xl gap-5 justify-between">
      <FaUserCircle />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} id="txtSearch" placeholder={placeholderSeach} className="bg-transparent text-branco flex flex-grow text-2xl" />
      <FaSearch />
    </label>
  );
}
