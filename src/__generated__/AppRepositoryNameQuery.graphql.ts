/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppRepositoryNameQueryVariables = {
    login: string;
};
export type AppRepositoryNameQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RepositoryList_query">;
};
export type AppRepositoryNameQuery = {
    readonly response: AppRepositoryNameQueryResponse;
    readonly variables: AppRepositoryNameQueryVariables;
};



/*
query AppRepositoryNameQuery(
  $login: String!
) {
  ...RepositoryList_query
}

fragment RepositoryList_query on Query {
  user(login: $login) {
    repositories(first: 6, isFork: false) {
      nodes {
        name
        url
        ...Repository_details
        id
      }
    }
    id
  }
}

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
      securityVulnerability {
        advisory {
          description
          id
        }
        severity
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "login",
    "type": "String!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  (v1/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RepositoryList_query"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "login",
            "variableName": "login"
          }
        ],
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 6
              },
              {
                "kind": "Literal",
                "name": "isFork",
                "value": false
              }
            ],
            "concreteType": "RepositoryConnection",
            "kind": "LinkedField",
            "name": "repositories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Repository",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "concreteType": "PullRequestConnection",
                    "kind": "LinkedField",
                    "name": "pullRequests",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "PullRequest",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": (v5/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": "pullRequests(first:10)"
                  },
                  {
                    "alias": null,
                    "args": [
                      (v2/*: any*/),
                      {
                        "kind": "Literal",
                        "name": "states",
                        "value": "OPEN"
                      }
                    ],
                    "concreteType": "IssueConnection",
                    "kind": "LinkedField",
                    "name": "issues",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Issue",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": (v5/*: any*/),
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issues(first:10,states:\"OPEN\")"
                  },
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
                    "concreteType": "RepositoryVulnerabilityAlertConnection",
                    "kind": "LinkedField",
                    "name": "vulnerabilityAlerts",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "RepositoryVulnerabilityAlert",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "SecurityVulnerability",
                            "kind": "LinkedField",
                            "name": "securityVulnerability",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "SecurityAdvisory",
                                "kind": "LinkedField",
                                "name": "advisory",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "description",
                                    "storageKey": null
                                  },
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "severity",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "vulnerabilityAlerts(first:10)"
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "repositories(first:6,isFork:false)"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query AppRepositoryNameQuery(\n  $login: String!\n) {\n  ...RepositoryList_query\n}\n\nfragment RepositoryList_query on Query {\n  user(login: $login) {\n    repositories(first: 6, isFork: false) {\n      nodes {\n        name\n        url\n        ...Repository_details\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment Repository_details on Repository {\n  name\n  url\n  pullRequests(first: 10) {\n    nodes {\n      id\n      url\n    }\n  }\n  issues(first: 10, states: OPEN) {\n    nodes {\n      id\n      url\n    }\n  }\n  vulnerabilityAlerts(first: 10) {\n    nodes {\n      securityVulnerability {\n        advisory {\n          description\n          id\n        }\n        severity\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e52b12926d120f50121a6380462e8957';
export default node;
