import React from 'react';
import TableRow from './TableRow';

export default function Table() {
  return (
    <div className="bg-azul3 flex flex-col flex-grow p-3">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Data de criação</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
        </tbody>
      </table>
    </div>
  );
}
