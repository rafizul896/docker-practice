/* eslint-disable @typescript-eslint/no-explicit-any */
import ActionSubmitButton from "./ActionSubmitButton";
import Modal from "./Modal";

const AddUserModal = ({ isOpen, onClose, onSubmit }: any) => {
  // This function intercepts the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add User">
      <form onSubmit={handleSubmit} id="addUserForm">
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border rounded w-full py-2 px-3 text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border rounded w-full py-2 px-3 text-black"
            required
          />
        </div>

        <ActionSubmitButton>Add</ActionSubmitButton>
      </form>
    </Modal>
  );
};

export default AddUserModal;
