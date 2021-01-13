import React from 'react';
import environment from './RelayEnvironment';
import { QueryRenderer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import RepositoryList from './RepositoryList';


const query = graphql`
  query AppRepositoryNameQuery($login: String!) {
    ...RepositoryList_query
  }`
interface Props {
  error: Error | null;
  props: any;
}

const renderComponent = ({ error, props }: Props) => {
  if(error) {
    return <div>Error!</div>;
  }
  if(!props) {
    return <div>Loading..</div>;
  }
  console.log('Main:',props)
  return <RepositoryList query={props}/>


};

function App() {
  return (
    <QueryRenderer
      environment={environment as any}
      query={query}
      render={renderComponent}
      variables={{login: "fabpot"}}
    />
  );
}

export default App;
