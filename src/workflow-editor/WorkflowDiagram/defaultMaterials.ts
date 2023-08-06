import { conditionIcon, dealIcon, notifierIcon, sealIcon } from "../icons";
import { NodeType } from "../interfaces";
import { INodeMaterial } from "../interfaces/material";
import { createUuid } from "../utils/create-uuid";

export const defaultMaterials: INodeMaterial[] = [
  {
    label: "promoter",
    color: "rgb(87, 106, 149)",
    defaultConfig: {
      nodeType: NodeType.start,
    },
    //不在物料板显示
    hidden: true,
  },
  {
    color: "#ff943e",
    label: "approver",
    icon: sealIcon,
    defaultConfig: {
      nodeType: NodeType.approver,
    },
  },
  {
    color: "#4ca3fb",
    label: "notifier",
    icon: notifierIcon,
    defaultConfig: {
      nodeType: NodeType.notifier,
    },
  },
  {
    color: "#fb602d",
    label: "dealer",
    icon: dealIcon,
    defaultConfig: {
      nodeType: NodeType.audit,
    },
  },
  {
    color: "#15bc83",
    label: "routeNode",
    icon: conditionIcon,
    createDefault: ({t}) => {
      return {
        id: createUuid(),
        nodeType: NodeType.route,
        conditionNodeList: [
          {
            id: createUuid(),
            nodeType: NodeType.branch,
            name: t?.("condition") + "1"
          },
          {
            id: createUuid(),
            nodeType: NodeType.branch,
            name: t?.("condition") + "2"
          }
        ]
      }
    },

  },
  {
    label: "condition",
    color: "",
    defaultConfig: {
      nodeType: NodeType.branch,
    },
    //不在物料板显示
    hidden: true,
  },
]