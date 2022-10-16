import { DataGrid } from '@mui/x-data-grid';

export const TableGrid = (props) => {
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
    claimShow,
    semethodShow,
    setSelectedRow
  } = props;

  // define table columns
  const columns = [
    { field: 'id', headerName: 'ID', hide: true },
    { field: 'title', headerName: 'Title', width: 300, hide: titleShow },
    { field: 'authors', headerName: 'Authors', width: 300, hide: authorShow },
    { field: 'journal', headerName: 'Journal', width: 300, hide: journalShow },
    { field: 'volume', headerName: 'Volume', width: 100, hide: volumeShow },
    { field: 'version', headerName: 'Version', width: 100, hide: versionShow },
    { field: 'pages', headerName: 'Pages', width: 100, hide: pagesShow },
    { field: 'year', headerName: 'Year', width: 100, hide: yearShow },
    { field: 'doi', headerName: 'DOI', width: 100, hide: doiShow },
    { field: 'claim', headerName: 'Claim', width: 200, hide: claimShow },
    { field: 'semethod', headerName: 'SE method', width: 100, hide: semethodShow },
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
    claim: row.claim,
    semethod: row.semethod,
  }));
  return (
    <div style={{ height: 400, width: '100%', background: '#fffff' }}>
      <DataGrid
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#3d71ff',
            color: '#ffff',
            fontSize: 16,
          },
          '& .MuiDataGrid-virtualScrollerRenderZone': {
            '& .MuiDataGrid-row': {
              '&:nth-of-type(2n)': {
                backgroundColor: 'rgba(235, 235, 235, .7)',
              },
            },
          },
        }}
        rows={rows}
        columns={columns}
        autoHeight={true}
        disableColumnMenu={true}
        density={'compact'}
        pageSize={8}



        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = rows.filter((row) =>
            selectedIDs.has(row.id),
          );

          setSelectedRow(selectedRows);
        }}


       
        rowsPerPageOptions={[8, 10, 20]}
        

      />
    </div>
  );
};
