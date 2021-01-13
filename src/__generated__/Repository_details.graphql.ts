/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SecurityAdvisorySeverity = "CRITICAL" | "HIGH" | "LOW" | "MODERATE" | "%future added value";
export type Repository_details = {
    readonly name: string;
    readonly url: unknown;
    readonly pullRequests: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly url: unknown;
        } | null> | null;
    };
    readonly issues: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly url: unknown;
        } | null> | null;
    };
    readonly vulnerabilityAlerts: {
        readonly nodes: ReadonlyArray<{
            readonly securityVulnerability: {
                readonly advisory: {
                    readonly description: string;
                };
                readonly severity: SecurityAdvisorySeverity;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "Repository_details";
};
export type Repository_details$data = Repository_details;
export type Repository_details$key = {
    readonly " $data"?: Repository_details$data;
    readonly " $fragmentRefs": FragmentRefs<"Repository_details">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "url",
  "storageKey": null
},
v1 = {
  "kind": "Literal",
  "name": "first",
  "value": 10
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "id",
    "storageKey": null
  },
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Repository_details",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": (v2/*: any*/),
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
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": "pullRequests(first:10)"
    },
    {
      "alias": null,
      "args": [
        (v1/*: any*/),
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
          "selections": (v3/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": "issues(first:10,states:\"OPEN\")"
    },
    {
      "alias": null,
      "args": (v2/*: any*/),
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
                    }
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "vulnerabilityAlerts(first:10)"
    }
  ],
  "type": "Repository"
};
})();
(node as any).hash = '4899e85b058841acc93695eff17c562e';
export default node;
