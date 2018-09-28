import { createMuiTheme } from '@material-ui/core/styles'

import createBaseTheme from './createBaseTheme'
import {
  PASTEL_BG,
  PASTEL_ACCENT,
  PASTEL_TEXT,
  PASTEL_EXTRA
} from '../constants/colors'

const theme = createBaseTheme({
  bg: PASTEL_BG,
  accent: PASTEL_ACCENT,
  text: PASTEL_TEXT,
  extra: PASTEL_EXTRA
})

export default createMuiTheme(theme)
