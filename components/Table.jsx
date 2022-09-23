import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import TableRow from './TableRow';

export default function Table(props) {
  const { data, mapping } = props;
  if (data && data.length > 0) {
    const teams = data.map((item) => {
      const team = {};
      Object.entries(mapping).forEach((v) => {
        const array = (v[1]);
        const field = item[array[0]];
        const type = array[1];
        let value = '';
        switch (type) {
          case 'date':
            value = new Date(field).toLocaleString();
            break;
          default:
            value = field;
            break;
        }
        team[v[0]] = value;
      });
      return team;
    });
    const tableHeads = Object.keys(teams[0]).map((key, i) => {
      const newKey = i + key;
      return (<th key={newKey} className="text-left">{key}</th>);
    });
    const tableData = teams.map((item) => {
      const key = item.ID;
      return <TableRow key={key} row={item} />;
    });
    return (
      <div className="bg-azul3 flex flex-col flex-grow p-4 overflow-y-auto">
        <table className="border-separate border-spacing-2 text-2xl">
          <thead>
            <tr>
              {tableHeads}
              <th className="text-left">&nbsp;</th>
            </tr>
          </thead>
          <tbody className="bg-branco/0 overflow-y-auto">
            {tableData}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="bg-azul3 flex flex-row flex-grow p-4 justify-center items-center gap-2 text-2xl overflow-y-auto ">
      <FaExclamationTriangle />
      <p>Sem dados para exibir</p>
    </div>
  );
}
