import { Button, Modal } from "antd"
import { memo, useState } from "react"
import { useEditorStore } from "../../workflow-editor"
import { useTranslate } from "../../workflow-editor/react-locales"
import { CloseCircleOutlined } from "@ant-design/icons"
import { styled } from "styled-components"

const Title = styled.div`
  display: flex;
  align-items: center;
`

const ErrorIcon = styled(CloseCircleOutlined)`
  color: red;
  font-size: 20px;
  margin-right: 8px;
`

const Tip = styled.div`
  color: ${props => props.theme.token?.colorTextSecondary};
`

export interface ErrorItem {
  category: string,
  message: string,
}

export const PublishButton = memo(() => {
  const [errors, setErrors] = useState<ErrorItem[]>();

  const t = useTranslate()
  const editorStore = useEditorStore()

  const handleValidate = () => {
    setErrors([{ category: "", message: "" }]);
  };

  const handleOk = () => {
    setErrors(undefined);
  };

  const handleCancel = () => {
    setErrors(undefined);
  };

  return (
    <>
      <Button type="primary" onClick={handleValidate}>{t("publish")}</Button>
      <Modal
        title={
          <Title>
            <ErrorIcon />
            {t("cantNotPublish")}
          </Title>
        }
        open={!!errors?.length}
        cancelText={t("gotIt")}
        okText={t("gotoEdit")}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tip>
          {t("canNotPublishTip")}
        </Tip>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal >
    </>
  )
})