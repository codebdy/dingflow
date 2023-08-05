import { ContentPlaceholder, IMaterialUIs, IWorkFlowNode, NodeType } from "../workflow-editor";
import { ApproverPanel, IApproverSettings } from "./setterss/ApproverPanel";
import { AuditPanel, IAuditSettings } from "./setterss/AuditPanel";
import { ConditionPanel, IConditionSettings } from "./setterss/ConditionPanel";
import { INotifierSettings, NotifierPanel } from "./setterss/NotifierPanel";
import { IStartSettings, StartPanel } from "./setterss/StartPanel";

export const materialUis: IMaterialUIs = {
  [NodeType.approver]: {
    viewContent: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      return <ContentPlaceholder secondary text={t("pleaseChooseApprover")} />
    },
    settingsPanel: ApproverPanel,
    validate: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      if (!node.config) {
        return (t("noSelectedApprover"))
      }
      return true
    }
  },
  [NodeType.audit]: {
    viewContent: (node: IWorkFlowNode<IAuditSettings>, { t }) => {
      return <ContentPlaceholder secondary text={t("pleaseChooseDealer")} />
    },
    settingsPanel: AuditPanel,
    validate: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      if (!node.config) {
        return t("noSelectedDealer")
      }
      return true
    }
  },
  [NodeType.condition]: {
    viewContent: (node: IWorkFlowNode<IConditionSettings>, { t }) => {
      return <ContentPlaceholder text={t("pleaseSetCondition")} />
    },
    settingsPanel: ConditionPanel,
    validate: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      if (!node.config) {
        return t("noSetCondition")
      }
      return true
    }
  },
  [NodeType.notifier]: {
    viewContent: (node: IWorkFlowNode<INotifierSettings>, { t }) => {
      return <ContentPlaceholder text={t("pleaseChooseNotifier")} />
    },
    settingsPanel: NotifierPanel,
  },
  [NodeType.start]: {
    viewContent: (node: IWorkFlowNode<IStartSettings>, { t }) => {
      return <ContentPlaceholder text={t("allMember")} />
    },
    settingsPanel: StartPanel,
  },
}