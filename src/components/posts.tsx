import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const PostList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users" link="show" />
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
  <Edit>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="id" InputProps={{ disabled: true }} />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);
