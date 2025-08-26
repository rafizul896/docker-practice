import { getUsers } from "./actions";
import UserManagement from "./components/UserManagement";

const Home = async () => {
  const data = await getUsers();

  return <UserManagement users={data} />;
};

export default Home;
