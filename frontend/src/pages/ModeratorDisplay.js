import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableGrid } from '../components/TableGrid';
import './ModeratorDisplay.css';
import HomeIcon from '@mui/icons-material/ArrowBack';

const ModeratorDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [selectedRow, setSelectedRow] = useState([]);

    //Approve Button Functionality - Updates status in database with "Approved"
    const buttonApprove = (e) => {
        e.preventDefault();

        const articleDataApprove = {
            id: selectedRow.id,
            title: selectedRow.title,
            authors: selectedRow.authors,
            journal: selectedRow.journal,
            year: selectedRow.year,
            volume: selectedRow.volume,
            version: selectedRow.version,
            pages: selectedRow.pages,
            doi: selectedRow.doi,
            status: selectedRow[0].status = 'Approved',
            semethod: selectedRow.semethod,
            claim: selectedRow.claim,
            }
            
            console.log(selectedRow[0].id);
            console.log(selectedRow[0].status); 
            
            axios
            .put('http://localhost:8082/api/articles/'+selectedRow[0].id, articleDataApprove)
            .then(res => {
                console.log(articleDataApprove);
            })
            .catch(err => {
            console.log("Cannot update status");
            })
    };

    //Reject Button Functionality- Updates status in database with "Rejected"
    const buttonReject = (e) => {
        e.preventDefault();

        const articleDataReject = {
            id: selectedRow.id,
            title: selectedRow.title,
            authors: selectedRow.authors,
            journal: selectedRow.journal,
            year: selectedRow.year,
            volume: selectedRow.volume,
            version: selectedRow.version,
            pages: selectedRow.pages,
            doi: selectedRow.doi,
            status: selectedRow[0].status = 'Rejected',
            semethod: selectedRow.semethod,
            claim: selectedRow.claim,
            }

            console.log(selectedRow[0].id);
            console.log(selectedRow[0].status); 
            
            axios
            .put('http://localhost:8082/api/articles/'+selectedRow[0].id, articleDataReject)
            .then(res => {
                console.log(articleDataReject);
            })
            .catch(err => {
            console.log("Cannot update status");
            })
    };

    useEffect(() => {
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
        getArticles();
  }, []);

  return (
    <div className="doc">
      <h1>Moderator Page</h1>
      <div className="navCont">
        <Link to="/">
          <HomeIcon data-testid="home" style={{ fontSize: '40px' }} />
        </Link>
      </div>
      <div className="content">
        {articles.length > 0 ? (
          <div className="tableCont">
            <TableGrid articles={articles} setSelectedRow={setSelectedRow} />
          </div>
        ) : (
          <h3
            data-testid="loading"
            style={{ margiTop: '10%', marginBottom: '10%' }}
          >
            Loading data...
          </h3>
        )}
        <div className="buttonContainer">
            {/* Buttons to approve or reject article */}
            <div className="modOptions">
                <button className="approveButton" onClick={buttonApprove}>
                    Approve
                </button>
                <button className="rejectButton" onClick={buttonReject}>
                    Reject
                </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModeratorDisplay;
