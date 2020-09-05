import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

export default ({}) => {
  const REGEXP = '[\+]\d{2}[\(]\d{2}[\)]\d{4}[\-]\d{4}' // +99(99)9999-9999 ✔️
  return (
      <AvForm>
        <AvField name="telephone" label="Phone" type="tel" pattern={REGEXP} />
        <Button color="primary">Submit</Button>
      </AvForm>
    );
}
