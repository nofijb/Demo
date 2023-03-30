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


describe("Common Card", () => {
  it("should render the Card component", () => {
    const wrapper = shallow(<Card data={CARD_DATA[0]} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should render the correct title", () => {
    const wrapper = shallow(<Card data={CARD_DATA[0]} />);
    expect(wrapper.find(".card-title").text()).toEqual(CARD_DATA[0].title);
  });

  it("should render the correct population", () => {
    const wrapper = shallow(<Card data={CARD_DATA[0]} />);
    expect(wrapper.find(".card-population").text()).toEqual(
      CARD_DATA[0].population
    );
  });
});
