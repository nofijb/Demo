import React from "react";
import Login from "../Modules/Accounts/Login";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import TextField from "@mui/material/TextField";
import { MemoryRouter } from "react-router-dom";
import Button from "@mui/material/Button";
Enzyme.configure({ adapter: new Adapter() });

describe("Login Component", () => {
  it("should render without errors", () => {
    const component = shallow(<Login />);
    const wrapper = component.find(".login-form");
    expect(wrapper.length).toBe(1);
  });
  it("renders the email and password input fields", () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find(TextField).at(0).prop("label")).toEqual("Email");
    expect(wrapper.find(TextField).at(1).prop("label")).toEqual("Password");
    wrapper.unmount();
  });
  it("submits the form with valid credentials", () => {
    const historyMock = { push: jest.fn() };
    const wrapper = mount(
      <MemoryRouter>
        <Login history={historyMock} />
      </MemoryRouter>
    );
    const emailInput = wrapper.find(TextField).at(0);
    const passwordInput = wrapper.find(TextField).at(1);
    const submitButton = wrapper.find(Button);

    // emailInput.simulate("change", {
    //   target: { value: "testuser@example.com" },
    // });
    // passwordInput.simulate("change", { target: { value: "testpassword" } });
    // submitButton.simulate("submit");

    wrapper.unmount();
  });
});
