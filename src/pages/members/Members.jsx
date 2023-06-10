/* eslint-disable */
import { Card } from "@mui/material";
import MembersTable from "./components/MembersTable";

function Members() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-xl font-bold text-gray-700">Members</p>
      <Card className="p-4">
        <MembersTable />
      </Card>
    </div>
  );
}

export default Members;
