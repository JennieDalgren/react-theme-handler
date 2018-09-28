import _ from 'lodash'

import { mainTheme } from './main'

export default ({
  bg,
  accent,
  text,
  extra
}) => {
  return _.merge({}, mainTheme, {
    palette: {
      background: {
        default: bg,
        paper: bg,
      },
      secondary: {
        light: extra,
        main: accent,
        dark: text
      }
    },
    overrides: {
      MuiBadge: {
        root: {
          color: text
        },
        badge: {
          backgroundColor: accent
        },
        colorSecondary: {
          backgroundColor: extra
        }
      },
      MuiButton: {
        contained: {
          color: text,
          backgroundColor: extra,
          '&:hover': {
            backgroundColor: extra,
            opacity: 0.8
          }
        },
        outlined: {
          color: accent,
          borderColor: accent,
        }
      },
      MuiDrawer: {
        paper: {
          background: extra
        }
      },
      MuiDivider: {
        root: {
          backgroundColor: accent
        }
      },
      MuiFormControl: {
        root: {
          color: text
        }
      },
      MuiTab: {
        root: {
          background: bg,
        },
        selected: {
          background: bg
        },
        textColorInherit: {
          color: text,
          opacity: 1,
        }
      },
      MuiTypography: {
        headline: {
          color: accent
        },
        subheading: {
          color: text
        },
        body1: {
          color: text
        }
      }
    }
  })
}
