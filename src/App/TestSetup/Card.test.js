import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import MyComponent from "../Modules/Draggable";
import Card from "../Common/UIComponents/Card";
Enzyme.configure({ adapter: new Adapter() });
const CARD_DATA = [
  {
    key: 1,
    title: "India",
    population: "140.76 crores",
    graphData: [120, 200, 150, 80, 70, 110, 130],
    graphType: "bar",
  },
  {
    key: 2,
    title: "China",
    population: "141.86 crores",
    graphData: [120, 200, 150, 80, 70, 110, 130],
    graphType: "line",
  },
  {
    key: 3,
    title: "Nepal",
    population: "3 crores",
    graphData: [120, 200, 150, 80, 70, 110, 130],
    graphType: "bar",
  },
  {
    key: 4,
    title: "Sri lanka",
    population: "2.2 crores",
    graphData: [120, 200, 150, 80, 70, 110, 130],
    graphType: "line",
  },
];

describe("MyComponent", () => {
  it("renders without crashing", () => {
    shallow(<MyComponent data={CARD_DATA} />);
  });

  it("renders the correct number of cards", () => {
    const wrapper = shallow(<MyComponent data={CARD_DATA} />);
    expect(wrapper.find(Card)).toHaveLength(CARD_DATA.length);
  });
});
