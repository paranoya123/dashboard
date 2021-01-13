/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RepositoryList_query = {
    readonly user: {
        readonly repositories: {
            readonly nodes: ReadonlyArray<{
                readonly name: string;
                readonly url: unknown;
                readonly " $fragmentRefs": FragmentRefs<"Repository_details">;
            } | null> | null;
        };
    } | null;
    readonly " $refType": "RepositoryList_query";
};
export type RepositoryList_query$data = RepositoryList_query;
export type RepositoryList_query$key = {
    readonly " $data"?: RepositoryList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"RepositoryList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "login",
      "type": "String!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryList_query",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "url",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Repository_details"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": "repositories(first:6,isFork:false)"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query"
};
(node as any).hash = '49bc017e8acb19ba3d1d11e45a4c17c4';
export default node;
