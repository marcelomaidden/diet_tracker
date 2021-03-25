import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { changeSelected } from '../actions/menu';

const NavBar = ({ credentials, changeSelected, menu }) => {
  const { accessToken } = credentials;
  const { selected } = menu;

  return (
    <nav className="background-light pb-4">
      {
        accessToken === ''
          ? (
            <Link
              to="/login"
              name="signin"
              className="background-blue p-4 w-25 text-decoration-none text-white border"
            >
              Sign-in
            </Link>
          )
          : (
            <div className="d-flex flex-md-row flex-column">
              <Link
                onClick={() => changeSelected('dashboard')}
                to="/dashboard"
                name="dashboard"
                className={`${selected === 'dashboard' ? 'background-blue' : 'background-dark'}
                p-4
                col-12
                col-md-3
                justify-content-center
                align-items-center
                text-decoration-none
                text-white border
                d-flex`}
              >
                Dashboard
              </Link>
              <Link
                onClick={() => changeSelected('measures')}
                to="/measures"
                name="measures"
                className={`${selected === 'measures' ? 'background-blue' : 'background-dark'}
                  p-4
                  text-decoration-none
                  d-flex
                  flex-column
                  text-white border
                  text-center
                  col-12
                  col-md-3`}
              >
                <i
                  className="fa fa-bar-chart"
                  aria-hidden="true"
                  onClick={() => changeSelected('measures')}
                />
                <span>Add measure</span>
              </Link>
              <Link
                onClick={() => changeSelected('progress')}
                to="/progress"
                name="progress"
                className={`${selected === 'progress' ? 'background-blue' : 'background-dark'}
                  p-4
                  text-decoration-none
                  d-flex
                  col-12
                  col-md-3
                  flex-column
                  text-center
                  text-white
                  border`}
              >
                <i
                  aria-hidden="true"
                  className="fa fa-pie-chart"
                  onClick={() => changeSelected('progress')}
                />
                <span>Your progress</span>
              </Link>
              <Link
                onClick={() => changeSelected('menu')}
                to="/menu"
                className={`${selected === 'menu' ? 'background-blue' : 'background-dark'}
                  p-4
                  col-12
                  col-md-3
                  d-flex
                  flex-column
                  text-center
                  text-decoration-none
                  text-white border`}
              >
                <span
                  className="fa"
                  aria-hidden="true"
                  onClick={() => changeSelected('menu')}
                >
                  ...
                </span>
                <span>More</span>
              </Link>
            </div>
          )
      }
    </nav>
  );
};

NavBar.propTypes = {
  credentials: PropTypes.shape({
    accessToken: PropTypes.string,
  }).isRequired,
  menu: PropTypes.shape({
    selected: PropTypes.string,
  }).isRequired,
  changeSelected: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    credentials: state.credentials,
    menu: state.menu,
  }
);

const mapDispatchToProps = dispatch => ({
  changeSelected: selected => (dispatch(changeSelected(selected))),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
