/*
  We are rendering `<Application />` down below, so we need React.createElement
*/
import React from "react";

import { fireEvent, render, waitForElement } from "@testing-library/react";
import Application from "components/Application";


describe("Application", () => {
  
  test("defaults to Monday and changes the schedule when a new day is selected", () => {

    const { getByText } = render(<Application />);
    
    return waitForElement(() => getByText("Monday")).then(() => {

      fireEvent.click( getByText("Tuesday"))
      expect(getByText("Leopold Silvers")).toBeInTheDocument()

    });

  });





})
