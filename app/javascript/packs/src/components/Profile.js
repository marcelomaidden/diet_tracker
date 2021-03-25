import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import Header from './Header';

const Menu = ({ user, credentials }) => {
  const { photo, name, email } = user.info;
  const { accessToken } = credentials;
  const history = useHistory();

  useEffect(() => {
    if (accessToken === '' || accessToken === 'undefined') history.push('/login');
  }, []);

  return (
    <div>
      <Header title="Profile" />
      <div className="background-blue p-3 d-flex flex-column">
        <img src={photo} alt="Profile" className="mx-auto rounded-circle profile" />
        <div className="p-2 mx-auto text-white profile-name">{name}</div>
        <div className="p-2 mx-auto gray-color">{email}</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  user: PropTypes.shape({
    info: PropTypes.shape({
      photo: PropTypes.string,
      name: PropTypes.string,
      email: PropTypes.string,
    }),
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
