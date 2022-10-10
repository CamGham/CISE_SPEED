import axios from 'axios';
import React, { useState, useEffect, cloneElement } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const NewArticleApprove = () => {


  const [dataForStatus, setDataForStatus] =useState('');

  const handleData = (cellValues)=>{
    const currentData = {
      id: cellValues.id,
      title: cellValues.title,
      authors: cellValues.authors,
      journal: cellValues.journal,
      volume: cellValues.volume,
      version: cellValues.version,
      pages: cellValues.pages, 
      year: cellValues.year,
      doi: cellValues.doi,
      status: cellValues.status,
    };
  setDataForStatus(currentData);
  console.log('here'+ dataForStatus);
  };

const handleSubmit=(dataForStatus)=>{
  console.log(dataForStatus);
  axios
      .put('http://localhost:8082/api/articles'+dataForStatus.id, dataForStatus)
      .then((res) => {
        console.log(res);
      })
      .catch(err => {
        console.log("Status could not be updated");
      });
};

    const NewModeratorTableGrid = (props) => {
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

        const handleClick = (cellValues) => {
          console.log(cellValues.row);
          console.log(cellValues.row.id);
          console.log(cellValues.row.status);
          // handleChange(cellValues)
          // handleStatusChange(cellValues)
        };
    
        // define table columns
        const columns = [
          { field: 'id', headerName: 'ID', hide: true },
          { field: 'title', headerName: 'Title', width: 100, hide: titleShow },
          { field: 'authors', headerName: 'Authors', width: 100, hide: authorShow },
          { field: 'journal', headerName: 'Journal', width: 100, hide: journalShow },
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
                <button id="approveBtn" onClick={() => {
                  cellValues.row.status = 'Approved'
                  handleData(cellValues);
                  handleSubmit(dataForStatus);

                  cellValues.row.status = 'Approved'
                  handleClick(cellValues);
                  // handleStatusChange(cellValues);
                }}>Approve</button>
              );
            }
          },
          //Reject Article Button
          { field: "reject", headerName: 'Reject', width: 100,
          renderCell: (cellValues) => {
            return (
              <button id="rejectBtn" onClick={() => {
                  cellValues.row.status = 'Rejected'
                  handleClick(cellValues);
                  // handleStatusChange(cellValues);
                }}>Reject</button>
            );
          }
        }
        ];

      //   const [currentArticle, setCUrrentArticle] = useState('');
      //   //Table of set data passed in
      //   setCUrrentArticle(newValues)

      //   onSubmit = e => {
      //     e.preventDefault();
      //   //States for sending via axios
      //   const data = {
      //     id: this.state.id,
      //     title: this.state.title,
      //     authors: this.state.authors,
      //     journal: this.state.journal,
      //     volume: this.state.volume,
      //     version: this.state.version,
      //     pages: this.state.pages,
      //     year: this.state.year,
      //     doi: this.state.doi,
      //     status: this.state.status,
      //   };

      //   axios
      //     .put('http://localhost:8082/api/articles' +this.props.match.params.id, data)
      //     .then((res) => {
      //       this.props.history.push('/id'+this.props)
      //     })
      //     .catch(err => {
      //       console.log("Status could not be updated");
      //     });
      // }
    
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
              handleClick
              rowsPerPageOptions={[5, 10, 20]}
            />
          </div>
        );
      };
 
  const [articles, setArticles] = useState([]);
  const [titleShow] = useState(true);
  const [authorShow] = useState(true);
  const [journalShow] = useState(true);
  const [volumeShow] = useState(true);
  const [versionShow] = useState(true);
  const [pagesShow] = useState(true);
  const [yearShow] = useState(true);
  const [doiShow] = useState(true);
  const [statusShow] = useState(true);


   //GET article information from database
  const getArticles = async () => {
    await axios
      .get('http://localhost:8082/api/articles')
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log('error');
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  

  //  // Updates the status in database using POST
  // //WIP 
  // const [data, setData] = useState({
  //   id:"",
  //   status: "",
  // });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setData({
  //     ...data,
  //     [e.target.name]: value
  //   });
  // };

  // const handleStatusChange = (e, cellValues) => {
  //   const rowToUpdate = {
  //     id: cellValues.row._id
  //   }
  //   const updatedStatus = {
  //     status: cellValues.row.status,
  //   };

  //   axios
  //   //Put
  //     // the data in put should be 'newArticles' data 
  //     .put('http://localhost:8082/api/articles', rowToUpdate, updatedStatus)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch(err => {
  //       console.log("Status could not be updated");
  //     });
  // };

  //Returned page HTML
  return (
    <div>
      <h1> New Article Moderation Display</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
     
      <div>
        {/**
         * data table div
         */}
        <NewModeratorTableGrid
          articles={articles}
          titleShow={!titleShow}
          authorShow={!authorShow}
          journalShow={!journalShow}
          volumeShow={!volumeShow}
          versionShow={!versionShow}
          pagesShow={!pagesShow}
          yearShow={!yearShow}
          doiShow={!doiShow}
          statusShow={!statusShow}
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default NewArticleApprove;
