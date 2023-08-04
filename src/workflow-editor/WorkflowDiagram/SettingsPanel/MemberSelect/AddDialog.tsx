import { memo, useCallback, useState } from "react"
import { useTranslate } from "../../../react-locales"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"
import styled from "styled-components"

const AddButton = styled(Button)`
  font-size: 12px !important;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  margin-right: 8px;
`

export const AddDialog = memo(() => {
  const [open, setOpen] = useState(false);
  const t = useTranslate()

  const handleClick = useCallback(() => {
    setOpen(true);
  }, []);

  const handleOk = useCallback(() => {
    setOpen(false);
  }, []);

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <AddButton
        type="text"
        icon={<PlusOutlined />}
        size="small"
        onClick={handleClick}
      >{t("add")}</AddButton>
      <Modal
        title={t("departmentsAndMembersVisable")}
        open={open}
        width={680}
        okText={t("confirm")}
        cancelText={t("cancel")}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  )
})