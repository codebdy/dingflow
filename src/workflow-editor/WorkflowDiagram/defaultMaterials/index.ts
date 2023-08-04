import { conditionIcon, dealIcon, notifierIcon, sealIcon } from "../../icons";
import { NodeType } from "../../interfaces";
import { INodeMaterial } from "../../interfaces/material";
import { createUuid } from "../../utils/create-uuid";
import { StartPanel } from "./StartPanel";

export const defaultMaterials: INodeMaterial[] = [
  {
    label: "promoter",
    color: "rgb(87, 106, 149)",
    defaultConfig: {
      nodeType: NodeType.start,
    },
    //不在物料板显示
    hidden: true,
    settingsPanel: StartPanel,
  },
  {
    color: "#ff943e",
    label: "approver",
    icon: sealIcon,
    placeholder: "pleaseChooseApprover",
    placeholderSecondary: true,
    defaultConfig: {
      nodeType: NodeType.approver,
    }
  },
  {
    color: "#4ca3fb",
    label: "notifier",
    icon: notifierIcon,
    placeholder: "pleaseChooseNotifier",
    defaultConfig: {
      nodeType: NodeType.notifier,
    }
  },
  {
    color: "#fb602d",
    label: "dealer",
    icon: dealIcon,
    placeholder: "pleaseChooseDealer",
    placeholderSecondary: true,
    defaultConfig: {
      nodeType: NodeType.audit,
    }
  },
  {
    color: "#15bc83",
    label: "conditionNode",
    icon: conditionIcon,
    createDefault: (context) => {
      const { t } = context
      return {
        id: createUuid(),
        nodeType: NodeType.route,
        conditionNodeList: [
          {
            id: createUuid(),
            nodeType: NodeType.condition,
            name: t?.("condition") + "1"
          },
          {
            id: createUuid(),
            nodeType: NodeType.condition,
            name: t?.("condition") + "2"
          }
        ]
      }
    }
  },
]