/* eslint-disable */
import { Card, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateMember from "./components/CreateMember";
import MembersSearch from "./components/MembersSearch";
import MembersTable from "./components/MembersTable";
import MembersPagination from "./components/MembersPagination";

function Members() {
  const [members, setMembers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const membersPerPage = filteredMembers.slice(startIndex, endIndex);

  async function getMembers() {
    const response = await axios.get(`http://localhost:8000/api/members`);
    const allMembers = response.data.members;
    setMembers(allMembers);
    setTotalPages(Math.ceil(allMembers.length / rowsPerPage));
  }

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold text-gray-700">Members</p>
      <Card className="p-4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <CreateMember getMembers={getMembers} />
            <MembersSearch
              setPage={setPage}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
          <div className="relative overflow-x-auto rounded-md">
            <MembersTable
              getMembers={getMembers}
              membersPerPage={membersPerPage}
              setPage={setPage}
            />
            <div className="flex flex-col sm:flex-row justify-end items-center gap-4 sm:gap-0 my-4 sm:mb-0">
              <MembersPagination
                members={members}
                page={page}
                setPage={setPage}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Members;
