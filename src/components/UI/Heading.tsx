interface HeadingProps {
  children?: string | JSX.Element | JSX.Element[]
  color?: string
  fontSize?: number
  mt?: number
  mb?: number
}

export const Heading = ({
  children,
  color = 'black',
  fontSize,
  mt,
  mb,
}: HeadingProps) => {
  return (
    <h1
      style={{
        color,
        fontSize,
        marginTop: mt,
        marginBottom: mb,
      }}
    >
      {children}
    </h1>
  )
}
