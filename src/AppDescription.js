import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function AppDescription() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {"Keyword extraction for lazy people."}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="subtitle1">
          {"One day, I wanted to extract some keywords from some text "}
          {"- and I wanted to do it quickly. I searched far and wide, "}
          {"and found lots of good solutions for keyword extraction - "}
          {"but they all had the same problem: they were too good. I "}
          {"wanted a simple, opinionated, batteries included solution "}
          {"that I didn't have to customize, but all the solutions I "}
          {"found required me to understand the ML algorithms under "}
          {"the hood and choose which fit my use case best. "} <br></br><br></br>
          {"My academic friends would kill me, but I'm exceedingly lazy and didn't "}
          {"care much about how the extraction worked, as long as it was "}
          {"good enough. So, I built my own batteries included keyword "}
          {"extractor. Simply plug in some text, decide how many keywords "}
          {"you want returned, and click the button!"}
        </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
