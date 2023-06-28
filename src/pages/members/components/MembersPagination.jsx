/* eslint-disable */
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MembersPagination({ members , page, setPage, rowsPerPage, setRowsPerPage, totalPages, setTotalPages }) {
  function changePage(event, page) {
    setPage(page);
  }
  function changeRowsPerPage(event) {
    const newRowsPerPage = event.target.value;
    setRowsPerPage(newRowsPerPage);
    setTotalPages(Math.ceil(members.length / newRowsPerPage));
    setPage(1);
  }
  return (
    <>
      <FormControl>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={rowsPerPage}
          size="small"
          onChange={changeRowsPerPage}
          sx={{ width: "75px", height: "40px" }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      <Pagination count={totalPages} color="primary" onChange={changePage} />
    </>
  );
}

export default MembersPagination;
