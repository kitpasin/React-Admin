/* eslint-disable */
import axios from "axios";
import Swal from "sweetalert2";

function DeleteMember({ getMembers, member, setPage }) {
  function deleteMember(member) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8000/api/member/${member.id}`)
          .then(function (response) {
            Swal.fire("Deleted!", "Your member has been deleted.", "success").then(() => {
              getMembers();
              setPage(1)
            });
          })
          .catch(function (error) {
            console.error(error);
          });
      }
    });
  }
  return (
    <>
      <button
        onClick={() => deleteMember(member)}
        className="w-20 h-10 bg-red-500 rounded-md text-white hover:bg-red-700"
      >
        Delete
      </button>
    </>
  );
}

export default DeleteMember;
