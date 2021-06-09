import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import { StyledTable } from './Table.styles';
import Loader from '../loader/Loader';

const Table = ({ config, data, isLoading }) => (
  <TableContainer component={Paper}>
    <StyledTable aria-label="simple table">
      <TableHead>
        <TableRow>
          {config.map((field, idx) => (
            <TableCell align={idx !== 0 ? 'right' : 'left'}>{field.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      {!isLoading && (
        <TableBody>
          {data.map((elem) => (
            <TableRow key={data.name}>
              {config.map((configElem, idx) => (
                <TableCell
                  key={configElem.fieldName}
                  component="th"
                  scope="row"
                  align={idx !== 0 ? 'right' : 'left'}
                >
                  {elem[configElem.fieldName]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      )}

      {isLoading && (
        <tr>
          <td colSpan="6">
            <Loader />
          </td>
        </tr>
      )}
    </StyledTable>
  </TableContainer>
);

Table.propTypes = {
  config: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  isLoading: PropTypes.bool,
};

export default Table;
