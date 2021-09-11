import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, location, phonenum, etc, site) {
  return { name, location, phonenum, etc, site };
}

const rows = [
  createData('부산대학교병원', '서구 구덕로 179', '051-240-7501','야간전공의(소아청소년과)근무'),
  createData('동아대학교병원', '서구 대신공원로 26', '051-240-5301','야간전공의(소아청소년과)근무'),
  createData('고신대학교 복음병원', '서구 감천로 262', '051-990-3008','야간전공의(소아청소년과)근무'),
  createData('인제대학교 부산백병원', '부산진구 복지로 75', '051-890-6220','야간전공의(소아청소년과)근무'),
  createData('인제대학교 해운대병원', '해운대구 해운대로 875', '051-797-0119','야간전공의(소아청소년과)근무')
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const Board = () => {
  const history = useHistory();

  const onNewBoard = () => {
    history.push("/board/new");
  };
  return (
    <section>
      <Header></Header>
      <div>야간 소아환자 진료기관 현황</div>      
      <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>병원명</StyledTableCell>
            <StyledTableCell align="right">소재지</StyledTableCell>
            <StyledTableCell align="right">응급실 전화번호</StyledTableCell>
            <StyledTableCell align="right">비고</StyledTableCell>
            <StyledTableCell align="right">홈페이지</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.phonenum}</StyledTableCell>
              <StyledTableCell align="right">{row.etc}</StyledTableCell>
              <StyledTableCell align="right">{row.site} <Button variant="contained" color="primary">바로가기</Button></StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


      <Footer></Footer>
    </section>
  );
};

export default Board;