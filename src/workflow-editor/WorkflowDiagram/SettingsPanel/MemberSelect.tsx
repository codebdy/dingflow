import { CloseCircleFilled, PlusOutlined } from "@ant-design/icons"
import { Button, Tag } from "antd"
import { memo } from "react"
import styled from "styled-components"
import { useTranslate } from "../../react-locales"

const Shell = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  padding: 2px 2px;
  border-radius: 5px;
  &:hover{
    border: solid 1px ${props => props.theme.token?.colorPrimary};
    .clear{
      display: inline-flex;
    }
  }
  .clear{
    display: none;
    font-size: 12px;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    color:${props => props.theme.token?.colorTextSecondary};
    opacity: 0.5;
    cursor: pointer;
    &:hover{
      opacity: 1;
      color:${props => props.theme.token?.colorTextSecondary};
    }
  }
`

const AddButton = styled(Button)`
  font-size: 12px !important;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  margin-right: 8px;
`

const MemberTag = styled(Tag)`
  border: 0;
  background-color: ${props => props.theme.token?.colorBorderSecondary};
  cursor: default;
  user-select: none;
`

export const MemberSelect = memo(() => {
  const t = useTranslate()

  return (
    <Shell>
      <AddButton type="text" icon={<PlusOutlined />} size="small">{t("add")}</AddButton>
      <MemberTag
        closable
        onClose={() => { }}
      >
        代码边界
      </MemberTag>
      <MemberTag
        closable
        onClose={() => { }}
      >
        张三
      </MemberTag>
      <MemberTag
        closable
        onClose={() => { }}
      >
        李四
      </MemberTag>
      <CloseCircleFilled className="clear" />
    </Shell>
  )
})