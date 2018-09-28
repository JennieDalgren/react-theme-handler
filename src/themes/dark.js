import { createMuiTheme } from '@material-ui/core/styles'

import createBaseTheme from './createBaseTheme'
import {
  DARK_BG,
  DARK_ACCENT,
  DARK_TEXT,
  DARK_EXTRA
} from '../constants/colors'

const theme = createBaseTheme({
  bg: DARK_BG,
  accent: DARK_ACCENT,
  text: DARK_TEXT,
  extra: DARK_EXTRA
})

export default createMuiTheme(theme)
