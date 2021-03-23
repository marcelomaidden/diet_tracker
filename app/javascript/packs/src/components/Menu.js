import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import Header from './Header';

const Menu = ({ user, credentials }) => {
  const { photo, name } = user.info;
  const { accessToken } = credentials;
  const history = useHistory();

  useEffect(() => {
    if (accessToken === '' || accessToken === 'undefined') history.push('/login');
  }, []);

  return (
    <div>
      <Header title="More" />
      <Link to="/profile" className="text-decoration-none">
        <div className="background-white p-3">
          <img src={photo} alt="Profile" className="rounded-circle profile" />
          <span className="p-2">{name}</span>
        </div> 
      </Link>
    </div>
  )
};

Menu.propTypes = {
  user: PropTypes.shape({
    info: PropTypes.shape({
      photo: PropTypes.string,
      name: PropTypes.string,
    })
  }).isRequired,
  credentials: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  credentials: state.credentials,
});

export default connect(mapStateToProps, null)(Menu);
