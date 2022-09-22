import React from 'react';
import TableRow from './TableRow';

export default function Table() {
  return (
    <div className="bg-azul3 flex flex-col flex-grow p-4 overflow-y-auto">
      <table className="border-separate border-spacing-2 text-2xl">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Nome</th>
            <th className="text-left">Data de Criação</th>
            <th className="text-left">&nbsp;</th>
          </tr>
        </thead>
        <tbody className="bg-branco/0 overflow-y-auto">
          <TableRow row={{ id: 1, nome: 'DTISS', data: '01/09/2022' }} />
          <TableRow row={{ id: 2, nome: 'DEV', data: '01/09/2022' }} />
          <TableRow row={{ id: 3, nome: '', data: '' }} />
        </tbody>
      </table>
    </div>
  );
}
