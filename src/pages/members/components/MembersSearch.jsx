/* eslint-disable */
import { TextField } from "@mui/material";

function MembersSearch({setPage ,searchQuery, setSearchQuery}) {
    function searchMembers(event) {
      const value = event.target.value;
      setSearchQuery(value);
      setPage(1);
    }
  return (
    <>
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        value={searchQuery}
        size="small"
        onChange={searchMembers}
      />
    </>
  );
}

export default MembersSearch