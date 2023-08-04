import { memo } from "react"
import { useTranslate } from "../../../react-locales"
import { PlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import styled from "styled-components"

const AddButton = styled(Button)`
  font-size: 12px !important;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  margin-right: 8px;
`

export const AddDialog = memo(() => {
  const t = useTranslate()
  return (
    <>
      <AddButton type="text" icon={<PlusOutlined />} size="small">{t("add")}</AddButton>
    </>
  )
})