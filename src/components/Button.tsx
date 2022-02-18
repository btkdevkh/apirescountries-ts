import { ReactNode } from "react"

type Props = {
    region?: string|boolean
    children: ReactNode;
    className: string;
    onClick?: () => void
    currentPage?: number|boolean
}

export default function Button(props: Props) {
  return (
    <button 
      onClick={props.onClick}
      className={`${props.className}`}
      style={{opacity: props.region || props.currentPage ? '1' : '0.5'}}
    >
      {props.children}
    </button>
  )
}
