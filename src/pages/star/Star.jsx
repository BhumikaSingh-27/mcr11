import React from 'react'
import "./star.css"
import { useData } from '../../context/DataContext';
import { useNavigate } from 'react-router';
import Card from '../../components/card/Card';

const Star = () => {
  const { state } = useData();
  const navigate = useNavigate();
  return (
    <div className="container">
    <h1>Starred Movies</h1>
    <div>
      {state.starred.length === 0 ? (
        <h3>Starred list is empty</h3>
      ) : (
        state.starred.map((ele) => (
          <div
            key={ele.id}
            onClick={() => {
              navigate(`/movie/${ele.id}`);
            }}
          >
            <Card data={ele} code={true} />
          </div>
        ))
      )}
    </div>
  </div>
  )
}

export default Star