import React from "react";
import { Field, FieldRow, Input, Label } from "../../elements/Form";
import Grid, { MainContainer } from "../../elements/Grid";

const SignIn = () => {
  return (
    <MainContainer>
      <Grid center fullH>
        <form style={{ width: 400 }}>
          <FieldRow>
            <Field>
              <Label>Username</Label>
              <Input type="text" />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field>
              <Label>Password</Label>
              <Input type="text" />
            </Field>
          </FieldRow>
        </form>
      </Grid>
    </MainContainer>
  );
};

export default SignIn;
