import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { UserList } from "./components/users";
import { PostCreate, PostEdit, PostList } from "./components/posts";
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    {/* Each resource maps a name to an endpoint in the API. */}
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="users"
      list={UserList}
      recordRepresentation={"name"}
      show={ShowGuesser}
    />
  </Admin>
);
