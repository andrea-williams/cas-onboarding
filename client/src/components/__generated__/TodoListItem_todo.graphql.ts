/**
 * @generated SignedSource<<9e431fe152773a1e28ff65628613a598>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_todo$data = {
  readonly completed: boolean;
  readonly dateCreated: any;
  readonly dateUpdated: any;
  readonly id: string;
  readonly todo: string;
  readonly " $fragmentType": "TodoListItem_todo";
};
export type TodoListItem_todo$key = {
  readonly " $data"?: TodoListItem_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem_todo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "todo",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completed",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateCreated",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateUpdated",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "0654df2c291da43c0c45dd2ef9670913";

export default node;
