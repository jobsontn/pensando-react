import React from 'react';

export default function TableRow(props) {
  const { row } = props;
  if (typeof row === 'object' && Object.keys(row).length > 0) {
    return (
      <tr>
        a
      </tr>
    );
  }
  return null;
}
