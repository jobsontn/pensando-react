import React from 'react';

export default function TableRow(props) {
  const { row } = props;
  if (typeof row === 'object' && Object.keys(row).length > 0) {
    const data = Object.keys(row).map((key, i) => {
      const newKey = i + key;
      return (<td key={newKey}>{row[key]}</td>);
    });
    return (
      <tr>
        {data}
        <td className="text-right">
          <button type="button" className="bg-amarelo1 px-6 py-1 text-preto">Editar</button>
        </td>
      </tr>
    );
  }
  return null;
}
