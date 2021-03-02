import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: (theme) => (theme.colorGrayLight),
    position: 'sticky',
    top: 0,
    margin: 2,
    userSelect: 'none',
  },
  sortable: {
    cursor: 'pointer',
    borderRadius: 5,

    '&:hover': {
      backgroundColor: (theme) => (theme.colorWhite),
    },
  },
  headCell: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headCellText: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
});

export default useStyles;
