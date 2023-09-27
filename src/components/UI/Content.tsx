interface ContentProps {
  children: string | JSX.Element | JSX.Element[]
  maxW?: 'sm' | 'md' | 'lg'
  mt?: number
  className?: string
  mb?: number
}

export const Content = ({
  children,
  maxW,
  mt,
  className,
  mb,
}: ContentProps) => {
  return (
    <div
      className={className}
      style={{
        maxWidth:
          maxW === 'sm'
            ? '50vw'
            : maxW === 'md'
            ? '65vw'
            : // eslint-disable-next-line unicorn/no-nested-ternary
            maxW === 'lg'
            ? '80vw'
            : '100vw',
        margin: '0 auto',
        marginTop: mt,
        marginBottom: mb,
      }}
    >
      {children}
    </div>
  )
}
