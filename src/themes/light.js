import { createMuiTheme } from '@material-ui/core/styles'

import createBaseTheme from './createBaseTheme'
import {
  LIGHT_BG,
  LIGHT_ACCENT,
  LIGHT_TEXT,
  LIGHT_EXTRA
} from '../constants/colors'

const theme = createBaseTheme({
  bg: LIGHT_BG,
  accent: LIGHT_ACCENT,
  text: LIGHT_TEXT,
  extra: LIGHT_EXTRA
})

export default createMuiTheme(theme)
