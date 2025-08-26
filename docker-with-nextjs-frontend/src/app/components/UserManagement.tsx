/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import AddUserModal from "./AddUserModal";
import Table from "./Table";
import { createUser } from "../actions";

const UserManagement = ({ users }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenAddUserModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Handle form submission and API call
  const handleAddUser = async (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await createUser({ email, password });

      if (!res.message) throw new Error("Failed to add user");

      alert("User added successfully");
      handleCloseModal();

      // Ideally re-fetch the updated user list here
    } catch (err) {
      console.error(err);
      alert("Error adding user");
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-black">
      <h1 className="text-4xl font-extrabold text-center text-white mt-6">
       All User Management Page
      </h1>

      <div className="flex-grow flex justify-center items-center">
        <div className="card">
          <button
            onClick={handleOpenAddUserModal}
            className="bg-green-500 text-white py-2 px-4 rounded mb-4"
          >
            Add User
          </button>

          <table className="min-w-full text-white">
            <thead>
              <tr className="bg-blue-900 text-white shadow-md">
                <th className="py-4 px-6 text-left text-lg">Email</th>
                <th className="py-4 px-6 text-left text-lg">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <Table key={user._id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      <AddUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default UserManagement;
