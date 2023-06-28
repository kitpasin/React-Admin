/* eslint-disable */
import axios from "axios";
import Swal from "sweetalert2";

function EditMember({getMembers, member}) {
  function editMember(member) {
    Swal.fire({
      title: "Update Member",
      html: `
        <input type="text" id="name" class="swal2-input" placeholder="Name" value=${member.name}>
        <input type="email" id="email" class="swal2-input" placeholder="Email" value=${
          member.email
        }>
        <input type="password" id="password" class="swal2-input" placeholder="Password" value=${
          member.password
        }>
        <div style="max-width: 273.38px; margin: auto; padding-top: 1rem;">
          <input type="file" id="image">
          <img id="preview" src=${`http://localhost:8000/storage/members/images/${member.image}`} style="max-width: 100%; margin-top: 1rem;">
        </div>
      `,
      confirmButtonText: `<span class="font-bold text-white">Submit</span>`,
      confirmButtonColor: "rgb(34,197,94)",
      focusConfirm: false,
      didOpen: () => {
        const input = Swal.getPopup().querySelector("#image");
        const preview = Swal.getPopup().querySelector("#preview");

        input.addEventListener("change", () => {
          const file = input.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              preview.src = reader.result;
            };
            reader.readAsDataURL(file);
          }
        });
      },
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const email = Swal.getPopup().querySelector("#email").value;
        const password = Swal.getPopup().querySelector("#password").value;
        const image = Swal.getPopup().querySelector("#image").files[0];

        if (!name || !email || !password) {
          Swal.showValidationMessage(`Please enter your data.`);
        }

        return { name, email, password, image };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append("name", result.value.name);
        formData.append("email", result.value.email);
        formData.append("password", result.value.password);
        formData.append("image", result.value.image);

        axios
          .post(`http://localhost:8000/api/member/${member.id}`, formData)
          .then(function (response) {
            Swal.fire("Updated!", "Your member has been updated.", "success").then(() => {
              getMembers();
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
        onClick={() => editMember(member)}
        className="w-20 h-10 bg-yellow-500 rounded-md text-white hover:bg-yellow-700"
      >
        Edit
      </button>
    </>
  );
}

export default EditMember;
