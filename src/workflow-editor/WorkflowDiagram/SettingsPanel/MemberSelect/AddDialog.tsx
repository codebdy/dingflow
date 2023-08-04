import { memo, useCallback, useState } from "react"
import { useTranslate } from "../../../react-locales"
import { PlusOutlined } from "@ant-design/icons"
import { Button, Modal, Space } from "antd"
import styled from "styled-components"

const AddButton = styled(Button)`
  font-size: 12px !important;
  border: solid 1px ${props => props.theme.token?.colorBorder};
  margin-right: 8px;
`

const Dialog = styled(Modal)`
  .ant-modal-content{
    padding: 0;
    .ant-modal-header{
      padding: 16px 16px;
      background-color: ${props => props.theme.token?.colorBorderSecondary};
      margin-bottom: 0;
    }
  }
`

const Content = styled.div`
  display: flex;
  height: 500px;
`

const SubContent = styled.div`
  height: 100%;
  flex:1;
  display: flex;
  flex-flow: column;
  padding: 8px 16px;
  &.left{
    border-right: solid 1px ${props => props.theme.token?.colorBorderSecondary};
  }
`

const SelectedContent = styled.div`
  flex: 1;
`

const Footer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
      <Dialog
        title={t("departmentsAndMembersVisable")}
        open={open}
        width={680}
        footer={null}
        centered
        // okText={t("confirm")}
        // cancelText={t("cancel")}
        // onOk={handleOk}
        onCancel={handleCancel}
      >
        <Content>
          <SubContent className="left">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </SubContent>
          <SubContent>
            <SelectedContent>

            </SelectedContent>
            <Footer>
              <Space>
                <Button>{t("cancel")}</Button>
                <Button type="primary">{t("confirm")}</Button>
              </Space>
            </Footer>
          </SubContent>
        </Content>
      </Dialog>
    </>
  )
})