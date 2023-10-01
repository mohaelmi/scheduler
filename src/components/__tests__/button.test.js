import React from 'react'
import { render } from '@testing-library/react'
import Button from "components/Button";


it("renders without crashing", () => {
  const { getByText } = render(<Button> Default </Button>);
  expect(getByText('Default')).toBeInTheDocument();

});