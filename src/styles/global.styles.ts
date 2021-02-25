import { createUseStyles } from 'react-jss';
import poppins from './poppins.font';

const useStyles = createUseStyles({
  '@global': {
    '@font-face': [poppins.fw200, poppins.regular, poppins.fw600],
    'body, html': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      margin: 0,
      padding: 0,
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue','sans-serif'",
    },
    '*': {
      boxSizing: 'border-box',
    },
    code: {
      fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    body: {
      color: 'black',
      background: '#333333',
      fontSize: '1.25rem',
      lineHeight: 1.44,
      fontWeight: 400,
    },
    a: {
      textDecoration: 'none',
    },
  },
});

export default useStyles;
