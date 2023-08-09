import { ContentPlaceholder, IMaterialUIs, IWorkFlowNode, NodeType } from "../workflow-editor";
import { ApproverPanel, IApproverSettings } from "./setters/ApproverPanel";
import { AuditPanel, IAuditSettings } from "./setters/AuditPanel";
import { ConditionPanel, IConditionSettings } from "./setters/ConditionPanel";
import { INotifierSettings, NotifierPanel } from "./setters/NotifierPanel";
import { IStartSettings, StartPanel } from "./setters/StartPanel";

export const materialUis: IMaterialUIs = {
  //审批人物料UI
  [NodeType.approver]: {
    //节点内容区，只实现了空逻辑，具体过几天实现
    viewContent: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      return <ContentPlaceholder secondary text={t("pleaseChooseApprover")} />
    },
    //属性面板
    settersPanel: ApproverPanel,
    //校验，目前仅实现了空校验，其它校验过几天实现
    validate: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      if (!node.config) {
        return (t("noSelectedApprover"))
      }
      return true
    }
  },
  //办理人节点
  [NodeType.audit]: {
    //节点内容区
    viewContent: (node: IWorkFlowNode<IAuditSettings>, { t }) => {
      return <ContentPlaceholder secondary text={t("pleaseChooseDealer")} />
    },
    //属性面板
    settersPanel: AuditPanel,
    //校验函数
    validate: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      if (!node.config) {
        return t("noSelectedDealer")
      }
      return true
    }
  },
  //条件分支节点的分支子节点
  [NodeType.condition]: {
    //节点内容区
    viewContent: (node: IWorkFlowNode<IConditionSettings>, { t }) => {
      return <ContentPlaceholder text={t("pleaseSetCondition")} />
    },
    //属性面板
    settersPanel: ConditionPanel,
    //校验函数
    validate: (node: IWorkFlowNode<IApproverSettings>, { t }) => {
      if (!node.config) {
        return t("noSetCondition")
      }
      return true
    }
  },
  //通知人节点
  [NodeType.notifier]: {
    viewContent: (node: IWorkFlowNode<INotifierSettings>, { t }) => {
      return <ContentPlaceholder text={t("pleaseChooseNotifier")} />
    },
    settersPanel: NotifierPanel,
  },
  //发起人节点
  [NodeType.start]: {
    viewContent: (node: IWorkFlowNode<IStartSettings>, { t }) => {
      return <ContentPlaceholder text={t("allMember")} />
    },
    settersPanel: StartPanel,
  },
}