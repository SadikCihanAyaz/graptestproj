import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import client from './apolloClient';

const GET_USERS = gql`
  query {
    users {
      email
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS, {
    client
  });

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map((user: any) => (
          <li key={user.email}>
            {user.name}{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
