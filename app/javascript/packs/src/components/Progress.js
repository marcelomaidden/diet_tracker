import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Progress = ({ measurements, categories, credentials }) => {
  const { list: measurementsList } = measurements;
  const { list: categoriesList } = categories;
  const { accessToken } = credentials;
  const history = useHistory();
  const meses = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  useEffect(() => {
    if (accessToken === '' || accessToken === 'undefined') history.push('/login');
  }, []);

  const formatDate = createdAt => {
    const date = new Date(createdAt);
    return ((`${date.getDate()

    } ${

      meses[(date.getMonth())]

    } ${

      date.getFullYear()}`)
    );
  };

  return (
    <div>
      <div className="background-blue d-flex p-4">
        <h1 className="h6 text-white mx-auto">Progress</h1>
      </div>
      <div className="d-flex flex-wrap">
        {
          measurementsList.map(measurement => (
            <div key={measurement.id}>
              <div className="p-2">
                { formatDate(measurement.created_at) }
              </div>
              <div
                className="card
                d-flex
                flex-row
                col-12
                p-2
                m-2"
              >
                <img
                  className="col-4"
                  style={{ width: '30%', height: '100px' }}
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
            </div>
          ))
        }
      </div>
    </div>
  );
};

Progress.propTypes = {
  measurements: PropTypes.shape({
    list: PropTypes.arrayOf(PropTypes.object),
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

export default connect(mapStateToProps, null)(Progress);
