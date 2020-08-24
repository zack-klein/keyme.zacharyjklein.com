import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const defaultPrompts = [
  "On a clear and sunny day...",
  "The first thing I do when I get home is...",
  "Don't you think that...",
  "The answer to life is...",
  "The craziest thing that ever happened to me was..."
];

var randomPrompt = defaultPrompts[Math.floor(Math.random()*defaultPrompts.length)];

export default function AppForm(props) {

  const setText = (event) => {
    props.updater(
      {   ...props.state, text: event.target.value }
    );
  };

  const onSubmit = () => {
    console.log(null);
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter some text to be analyzed for keywords:
      </Typography>
      <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={onSubmit}
      >
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextValidator
            fullWidth
            label="Enter some text:"
            multiline
            rows={4}
            placeholder={randomPrompt}
            onChange={setText}
            name="text"
            value={props.state.text}
            validators={['required']}
            errorMessages={['This field is required!']}
            variant="outlined"
            color="secondary"
          />
        </Grid>
      </Grid>
      </ValidatorForm>
    </React.Fragment>
  );
}
