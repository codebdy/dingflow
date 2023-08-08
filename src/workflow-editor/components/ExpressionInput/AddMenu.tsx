import { Dropdown, MenuProps } from "antd";
import { memo } from "react"

const items: MenuProps['items'] = [
  {
    label: "添加条件",
    key: '0',
  },
  {
    label: "添加条件组",
    key: '1',
  },
];

export const AddMenu = memo((
  props: {
    onOpenChange?: (open: boolean) => void,
    children?: React.ReactNode
  }
) => {
  const { onOpenChange, children } = props;
  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      onOpenChange={onOpenChange}
    >
      {children}
    </Dropdown>
  )
})