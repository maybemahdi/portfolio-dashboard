import { Button as AntButton, type ButtonProps as AntButtonProps } from "antd"
import type { ReactNode } from "react"

interface ButtonProps extends Omit<AntButtonProps, "variant" | "type"> {
  variant?: "primary" | "danger" | "outline" | "default"
  children?: ReactNode
}
export default function Button({ variant = "default", children, ...props }: ButtonProps) {
  const getButtonType = () => {
    switch (variant) {
      case "primary":
        return "primary"
      case "danger":
        return "primary"
      case "outline":
        return "default"
      default:
        return "default"
    }
  }

  const getButtonProps = () => {
    if (variant === "danger") {
      return { danger: true }
    }
    if (variant === "outline") {
      return { ghost: false }
    }
    return {}
  }

  return (
    <AntButton type={getButtonType()} {...getButtonProps()} {...props}>
      {children}
    </AntButton>
  )
}
