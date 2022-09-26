import { DataGrid } from '@mui/x-data-grid';
import React from 'react';

export const TableGrid = (props) => {
  const { articles } = props;

  // define table columns
  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'authors', headerName: 'Authors', width: 300 },
    { field: 'journal', headerName: 'Journal', width: 300 },
    { field: 'volume', headerName: 'Volume', width: 100 },
    { field: 'version', headerName: 'Version', width: 100 },
    { field: 'pages', headerName: 'Pages', width: 100 },
    { field: 'year', headerName: 'Year', width: 100 },
    { field: 'doi', headerName: 'DOI', width: 100 },
  ];

  // set article data under their respective table column name
  const rows = articles.map((row) => ({
    id: row._id,
    title: row.title,
    authors: row.authors,
    journal: row.journal,
    volume: row.volume,
    version: row.version,
    pages: row.pages,
    year: row.year,
    doi: row.doi,
  }));
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};
