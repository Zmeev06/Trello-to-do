interface HeadingProps {
  children?: string | JSX.Element | JSX.Element[]
  color?: string
  fontSize?: number
  mt?: number
  mb?: number
  fontWeight?: number
}

export const Heading = ({
  children,
  color = 'black',
  fontSize,
  mt,
  mb,
  fontWeight = 400,
}: HeadingProps) => {
  return (
    <h1
      style={{
        color,
        fontSize,
        marginTop: mt,
        marginBottom: mb,
        fontWeight,
      }}
    >
      {children}
    </h1>
  )
}
