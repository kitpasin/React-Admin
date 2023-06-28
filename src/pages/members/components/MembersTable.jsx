/* eslint-disable */
import EditMember from "./EditMember";
import DeleteMember from "./DeleteMember";

function MembersTable({ membersPerPage, getMembers, setPage }) {
  return (
    <>
      <table className="w-full text-left text-gray-500 font-bold">
        <thead className="text-gray-700 bg-gray-100">
          <tr>
            <th scope="col" className="p-4">
              ID
            </th>
            <th scope="col" className="p-4">
              Image
            </th>
            <th scope="col" className="p-4">
              Name
            </th>
            <th scope="col" className="p-4">
              Email
            </th>
            <th scope="col" className="p-4">
              Password
            </th>
            <th align="center" scope="col" className="p-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {membersPerPage &&
            membersPerPage.map((member) => (
              <tr key={member.id} className="bg-white border-b">
                <th className="p-4">{member.id}</th>
                <td className="p-4">
                  <img
                    className="w-full max-w-[100px] h-[100px] rounded-md"
                    src={`http://localhost:8000/storage/members/images/${member.image}`}
                    alt={member.name}
                  />
                </td>
                <td className="p-4">{member.name}</td>
                <td className="p-4">{member.email}</td>
                <td className="p-4">{member.password}</td>
                <td className="p-4">
                  <div className="h-full flex justify-center items-center gap-4">
                    <EditMember getMembers={getMembers} member={member} />
                    <DeleteMember getMembers={getMembers} member={member} setPage={setPage} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default MembersTable;
