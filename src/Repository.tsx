import React from 'react'
import {
    createFragmentContainer
} from 'react-relay'
import { graphql } from 'babel-plugin-relay/macro'
import { Repository_details } from './__generated__/Repository_details.graphql';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';



interface Props {
    details: Repository_details | null;
}



function Repository(props: Props) {
    const pr = props.details?.pullRequests.nodes,
        i = props.details?.issues.nodes,
        va = props.details?.vulnerabilityAlerts?.nodes

    let h1, h2, h3
    if(i?.length){
        h1 = (<h2>Issues</h2>)
    }
    if(pr?.length){
        h2 = (<h2>Pull requests</h2>)
    }
    if(va?.length){
        h3 = (<h2>Vulnerability alerts</h2>)
    }

    return (
        <Container style={{marginTop: '20px'}} maxWidth="sm">
            <div><h3>Project Name: </h3><span>{props.details?.name}</span></div>
            <Divider />
            <div><h3>Project URL: </h3><span>{`${props.details?.url}`}</span></div>
            <Divider />
            {h1}
            <div>{i?.map((i) => {
                return (<div key={i?.id}>
                    <div><span style={{fontWeight: 800}}>ID: </span><span>{i?.id}</span></div>
                    <div style={{marginBottom: '20px'}}><a href={i?.url + ''}>{i?.url+ ''}</a></div>
                </div>)
            })}</div>
            <Divider />
            {h2}
            <div>{pr?.map((i) => {
                return (<div key={i?.id}>
                    <div><span style={{fontWeight: 800}}>ID: </span><span>{i?.id}</span></div>
                    <div style={{marginBottom: '20px'}}><a href={i?.url + ''}>{i?.url + ''}</a></div>
                </div>)
            })}</div>
            <Divider />
            {h3}
            <div>{va?.map((i,k) => {
                return (<div key={k}>
                    <div><span>Description: </span><span>{i?.securityVulnerability?.advisory.description}</span></div>
                    <div style={{marginBottom: '20px'}}><span>Severity: </span><span>{i?.securityVulnerability?.severity}</span></div>
                </div>)
            })}</div>
        </Container>
    )

}

export default createFragmentContainer(
    Repository,
  {
    details: graphql`
        fragment Repository_details on Repository {
            name
            url
            pullRequests(first: 10) {
                nodes {
                    id
                    url
                }
            }
            issues(first: 10, states: OPEN) {
                nodes {
                    id
                    url
                }
            }
            vulnerabilityAlerts(first: 10) {
                nodes {
                    securityVulnerability{
                        advisory{
                            description
                        }
                        severity
                    }
                }
            }
        }
    `
  }
)