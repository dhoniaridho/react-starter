/**
 * @description  parameter  name based on file name `assets/icons/custom-name.svg`
 * see details: https://github.com/vbenjs/vite-plugin-svg-icons
 * @returns {JSX.Element<SVGAElement>}
 */
const SvgIcon = ({
  name,
  prefix = 'icon',
  color = '#333',
  ...props
}: Props) => {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon

interface Props {
  name: string
  prefix?: string
  color?: string
}
