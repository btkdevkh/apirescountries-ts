import { ReactNode } from "react"

type Props = {
  children: ReactNode;
  className: string;
}

export default function Title(props: Props) {
  return (
    <h1 className={props.className}>{props.children}</h1>
  )
}
