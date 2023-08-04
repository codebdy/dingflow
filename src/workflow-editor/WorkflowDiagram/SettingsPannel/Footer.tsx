import { Button, Space } from "antd"
import { memo } from "react"
import { styled } from "styled-components"
import { useTranslate } from "../../react-locales"

const Shell = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 48px;
`

export const Footer = memo(() => {
  const t = useTranslate()
  return (
    <Shell className="settings-footer">
      <Space>
        <Button>
          {t("cancel")}
        </Button>
        <Button type="primary">
          {t("confirm")}
        </Button>
      </Space>
    </Shell>
  )
})