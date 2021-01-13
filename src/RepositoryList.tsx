import React from 'react'
import Repository from './Repository'
import {
    createFragmentContainer
} from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro';
import { RepositoryList_query } from './__generated__/RepositoryList_query.graphql';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


interface Props {
    query: RepositoryList_query | null;
}

function RepositoryList(props: Props) {
    return (
        <Router>
            <div>

                <AppBar position="static">
                    <Tabs>
                        {props.query?.user?.repositories.nodes?.map((r) => {
                            return (<Tab label={<Link
                                style={{textDecoration: 'none',
                                    fontWeight: 800,
                                    color: 'black'
                            }} to={'/'+r?.name}>{r?.name}</Link>}/>)
                        })}
                    </Tabs>
                </AppBar>

                <Switch>
                    {props.query?.user?.repositories.nodes?.map((r) => {
                        return (<Route
                            path={'/'+r?.name}
                            render={(props: any) => (
                                <Repository {...props} details={r}/>
                            )}
                        />)
                    })}
                </Switch>
            </div>
        </Router>
    )
}

export default createFragmentContainer(
    RepositoryList,
  {
    query: graphql`
        fragment RepositoryList_query on Query {
            user(login: $login) {
                repositories(first: 6, isFork: false) {
                    nodes{
                        name
                        url
                        ...Repository_details
                    }
                }
            }
        }`
  }
)