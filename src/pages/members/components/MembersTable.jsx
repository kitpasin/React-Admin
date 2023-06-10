import { MembersData } from "../../../data/members/MembersData";
import { Stack, Autocomplete, TextField } from "@mui/material";

function MembersTable() {
  const memberName = MembersData.map((data) => data.name)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="text-gray-700 font-bold">Search</p>
        <Stack spacing={2} width="200px" className="">
          <Autocomplete
            size="small"
            options={memberName}
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
        </Stack>
      </div>
      <hr/>
      <div className="relative overflow-x-auto rounded-md">
        <table className="w-full text-left text-gray-500 font-bold">
          <thead className="text-gray-700 bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Verify Date
              </th>
              <th align="center" scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {MembersData &&
              MembersData.map((data) => (
                <tr key={data.id} className="bg-white border-b">
                  <th className="px-6 py-4">{data.id}</th>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data.password}</td>
                  <td className="px-6 py-4">{data.phone}</td>
                  <td
                    className={`px-6 py-4 ${
                      data.status === "Confirm"
                        ? "text-green-500"
                        : data.status === "Pending"
                        ? "text-blue-500"
                        : "text-red-500"
                    }`}
                  >
                    {data.status}
                  </td>
                  <td className="px-6 py-4">{data.verify}</td>
                  <td className="px-6 py-4 flex justify-center gap-4">
                    <button className="w-20 h-10 bg-yellow-500 rounded-md text-white hover:bg-yellow-700">
                      Edit
                    </button>
                    <button className="w-20 h-10 bg-red-500 rounded-md text-white hover:bg-red-700">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MembersTable;
