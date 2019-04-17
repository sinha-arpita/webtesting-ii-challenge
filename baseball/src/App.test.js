import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";
import Dashboard from "./Components/Dashboard";
import Display from "./Components/Display";

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
  const { queryByText, getByText } = render(<App />);
  const text = queryByText(/strike =0/i);
  const text2 = queryByText(/Balls=0/i);
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();

  const button1 = getByText(/ball/i);
  const button2 = getByText(/strike/i);
  const button3 = getByText(/hit/i);
  const button4 = getByText(/foul/i);
});

it("clicks ball button ", () => {
  const { getByText } = render(<Dashboard />);

  const button = getByText("Ball");

  fireEvent.click(button);

  const { queryByText } = render(<Display />);

  const text = queryByText(/Balls=1/i);
  expect(text).toBeInTheDocument();

  fireEvent.click(button);
  const text2 = queryByText(/Balls=2/i);
  expect(text2).toBeInTheDocument();

  fireEvent.click(button);
  const text3 = queryByText(/Balls=3/i);
  expect(text3).toBeInTheDocument();

  fireEvent.click(button);
  const text4 = queryByText(/Balls=4/i);
  expect(text4).toBeInTheDocument();

  fireEvent.click(button);
  const text5 = queryByText(/Balls=0/i);
  expect(text5).toBeInTheDocument();
});

it("clicks Strike button ", () => {
  const { getByText } = render(<Dashboard />);

  const button = getByText("Strike");

  fireEvent.click(button);

  const { queryByText } = render(<Display />);

  const text = queryByText(/Strike =1/i);
  expect(text).toBeInTheDocument();

  fireEvent.click(button);
  const text2 = queryByText(/Strike =2/i);
  expect(text2).toBeInTheDocument();

  fireEvent.click(button);
  const text3 = queryByText(/Strike =3/i);
  expect(text3).toBeInTheDocument();

  fireEvent.click(button);
  const text5 = queryByText(/Strike =0/i);
  expect(text5).toBeInTheDocument();
});

it("clicks hit after 2 strikes button ", () => {
  const { getByText } = render(<Dashboard />);

  const button = getByText("Strike");

  fireEvent.click(button);

  const { queryByText } = render(<Display />);

  const text = queryByText(/Strike =1/i);
  expect(text).toBeInTheDocument();

  fireEvent.click(button);
  const text2 = queryByText(/Strike =2/i);
  expect(text2).toBeInTheDocument();

  const hitButton = getByText("Hit");
  fireEvent.click(hitButton);
  const text3 = queryByText(/Strike =0/i);
  expect(text3).toBeInTheDocument();
});

it("clicks foul  ", () => {
  const { getByText } = render(<Dashboard />);

  const button = getByText("Foul");

  fireEvent.click(button);

  const { queryByText } = render(<Display />);

  const text = queryByText(/Strike =1/i);
  expect(text).toBeInTheDocument();

  fireEvent.click(button);
  const text2 = queryByText(/Strike =2/i);
  expect(text2).toBeInTheDocument();

  fireEvent.click(button);
  const text3 = queryByText(/Strike =2/i);
  expect(text3).toBeInTheDocument();

  fireEvent.click(button);
  const text4 = queryByText(/Strike =2/i);
  expect(text4).toBeInTheDocument();

  const hitButton = getByText("Hit");
  fireEvent.click(hitButton);
  const text5 = queryByText(/Strike =0/i);
  expect(text5).toBeInTheDocument();

});
