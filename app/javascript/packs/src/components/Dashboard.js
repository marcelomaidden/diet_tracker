import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Dashboard = ({ measurements, categories, credentials }) => {
  const { todayList: measurementsList } = measurements;
  const { list: categoriesList } = categories;
  const { accessToken } = credentials;
  const history = useHistory();

  useEffect(() => {
    if (accessToken === '' || accessToken === 'undefined') history.push('/login');
  }, [measurementsList]);

  return (
    <div>
      <div className="background-blue d-flex p-4">
        <h1 className="h6 text-white mx-auto">Added today</h1>
      </div>
      <div className="d-flex flex-wrap">
        {
          measurementsList.length === 0
            ? <div className="alert alert-info w-100 mt-5">There is nothing here yet</div>
            : measurementsList.map(measurement => (
              <div
                key={measurement.id}
                className="card
                d-flex
                flex-column
                flex-md-row
                col-md-5
                col-12
                p-2
                m-2"
              >
                <img
                  className="col-4"
                  style={{ width: '50%', height: '100px' }}
                  src={
                    categoriesList.filter(category => (
                      category.id === measurement.category_id
                    ))[0].photo
                  }
                  alt=""
                />
                <div className="card-body">
                  <p style={{ fontSize: '70%' }}>
                    {
                      categoriesList.filter(category => (
                        category.id === measurement.category_id
                      ))[0].name
                    }
                  </p>
                  <div className="card-text h1">{measurement.value}</div>
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  measurements: PropTypes.shape({
    todayList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  categories: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  credentials: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => (
  {
    measurements: state.measurements,
    categories: state.categories,
    credentials: state.credentials,
  }
);

export default connect(mapStateToProps, null)(Dashboard);
