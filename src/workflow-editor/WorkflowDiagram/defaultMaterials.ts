import { conditionIcon, dealIcon, notifierIcon, sealIcon } from "../icons";
import { NodeType } from "../interfaces";
import { INodeMaterial } from "../interfaces/material";

export const defaultMaterials: INodeMaterial[] = [
  {
    color: "#ff943e",
    label: "approver",
    icon: sealIcon,
    defaultConfig: {
      nodeType: NodeType.approver,
    }
  },
  {
    color: "#4ca3fb",
    label: "notifier",
    icon: notifierIcon,
    defaultConfig: {
      nodeType: NodeType.notifier,
    }
  },
  {
    color: "#fb602d",
    label: "deal",
    icon: dealIcon,
    defaultConfig: {
      nodeType: NodeType.audit,
    }
  },
  {
    color: "#15bc83",
    label: "condition",
    icon: conditionIcon,
    createDefault: () => {
      return {
        nodeType: NodeType.route,
      }
    }
  },
]