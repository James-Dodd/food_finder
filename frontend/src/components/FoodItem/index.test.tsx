import React from "react"
import { shallow, mount } from "enzyme"
import FoodItem from "./index"

let item = {
  name: "burger",
  calories: 12,
  price: 51,
  size: "medium",
}

describe("Header", () => {
  it("renders shallow", () => {
    const component = shallow(<FoodItem item={item} />)
    expect(component).toMatchSnapshot()
  }),
    it("renders mount", () => {
      const component = mount(<FoodItem item={item} />)
      expect(component).toMatchSnapshot()
    })
})
