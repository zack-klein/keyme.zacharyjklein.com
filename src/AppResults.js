import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function AppResults(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Found keywords:
      </Typography>
      <List disablePadding>
        {props.state.keywords.map((keyword) => (
          <ListItem className={classes.listItem} key={keyword[1]}>
            <ListItemText primary={keyword[1]} />
            <Typography variant="body2">{keyword[0]}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
