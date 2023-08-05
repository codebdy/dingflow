import { IMaterialUIs, IWorkFlowNode, NodeType } from "../workflow-editor";
import { ApproverPanel, IApproverSettings } from "./setterss/ApproverPanel";
import { AuditPanel, IAuditSettings } from "./setterss/AuditPanel";
import { ConditionPanel, IConditionSettings } from "./setterss/ConditionPanel";
import { INotifierSettings, NotifierPanel } from "./setterss/NotifierPanel";
import { IStartSettings, StartPanel } from "./setterss/StartPanel";

export const materialUis: IMaterialUIs = {
  [NodeType.approver]: {
    viewContent: (node: IWorkFlowNode<IApproverSettings>)=>{
      return <></>
    },
    settingsPanel: ApproverPanel,
  },
  [NodeType.audit]: {
    viewContent: (node: IWorkFlowNode<IAuditSettings>)=>{
      return <></>
    },
    settingsPanel: AuditPanel,
  },
  [NodeType.condition]: {
    viewContent: (node: IWorkFlowNode<IConditionSettings>)=>{
      return <></>
    },
    settingsPanel: ConditionPanel,
  },
  [NodeType.notifier]: {
    viewContent: (node: IWorkFlowNode<INotifierSettings>)=>{
      return <></>
    },
    settingsPanel: NotifierPanel,
  },
  [NodeType.start]: {
    viewContent: (node: IWorkFlowNode<IStartSettings>)=>{
      return <></>
    },
    settingsPanel: StartPanel,
  },
}