import Typography from 'typography'
import lincolnTheme from 'typography-theme-lincoln'

lincolnTheme.baseFontSize = '22px'
lincolnTheme.baseLineHeight = '2'
lincolnTheme.scaleRatio = {
  scaleRatio: 3,
}

const typography = new Typography(lincolnTheme)

export default typography
