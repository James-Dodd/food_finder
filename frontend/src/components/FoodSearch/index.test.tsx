import React from "react"
import { shallow, mount } from "enzyme"
import FoodSearch from "./index"

describe("Header", () => {
  it("renders shallow", () => {
    const component = shallow(<FoodSearch />)
    expect(component).toMatchSnapshot()
  }),
    it("renders mount", () => {
      const component = mount(<FoodSearch />)
      expect(component).toMatchSnapshot()
    })
})
