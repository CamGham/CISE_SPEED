import { DataGrid } from '@mui/x-data-grid';

export const ModeratorTableGrid = (props) => {
  const {
    articles,
    titleShow,
    authorShow,
    journalShow,
    volumeShow,
    versionShow,
    pagesShow,
    yearShow,
    doiShow,
    statusShow,
  } = props;

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };
  
  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };
  // define table columns
  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'title', headerName: 'Title', width: 200, hide: titleShow },
    { field: 'authors', headerName: 'Authors', width: 150, hide: authorShow },
    { field: 'journal', headerName: 'Journal', width: 200, hide: journalShow },
    { field: 'volume', headerName: 'Volume', width: 100, hide: volumeShow },
    { field: 'version', headerName: 'Version', width: 100, hide: versionShow },
    { field: 'pages', headerName: 'Pages', width: 100, hide: pagesShow },
    { field: 'year', headerName: 'Year', width: 100, hide: yearShow },
    { field: 'doi', headerName: 'DOI', width: 100, hide: doiShow },
    { field: 'status', headerName: 'Status', width: 100, hide: statusShow },
    //Accept Article Button
    { field: "approve", headerName: 'Approve', width: 100,
      renderCell: (cellValues) => {
        return (
          <button id="approveBtn" onClick={(event) => {
            handleClick(event, cellValues);
          }}>Approve</button>
        );
      }
    },
    //Reject Article Button
    { field: "reject", headerName: 'Reject', width: 100,
    renderCell: (cellValues) => {
      return (
        <button id="rejectBtn" onClick={(event) => {
            handleClick(event, cellValues);
          }}>Reject</button>
      );
    }
  }
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
    status: row.status,
  }));
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight={true}
        disableColumnMenu={true}
        density={'compact'}
        pageSize={5}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};
