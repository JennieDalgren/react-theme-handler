import { createMuiTheme } from '@material-ui/core/styles'

export const mainTheme = {
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#c9c9c9'
    },
    error: {
      main: '#ff0000'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        width: 100,
        '&:focus': {
          outline: 'none'
        },
        '&:hover': {
          backgroundColor: 'transparent',
        }
      },
      outlined: {
        borderWidth: 2
      },
      text: {
        margin: '2rem auto'
      }
    },
    MuiCard: {
      root: {
        background: '#fff',
        display: 'flex',
        width: '100%',
        maxWidth: 400,
        marginBottom: 24
      }
    },
    MuiCardContent: {
      root: {
        flexGrow: 2
      }
    },
    MuiCardMedia: {
      root: {
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        display: 'inline-block',
        flex: 1,
        margin: 8
      }
    },
    MuiDivider: {
      root: {
        margin: '2rem 0'
      }
    },
    MuiDrawer: {
      paper: {
        padding: '2rem',
      }
    },
    MuiGrid: {
      container: {
        padding: '8px 0',
        alignItems: 'center'
      }
    },
    MuiTab: {
      root: {
        '&:focus': {
          outline: 'none'
        }
      }
    }
  }
}

export default createMuiTheme(mainTheme)
