import React from "react"
import { shallow, mount } from "enzyme"

import Header from "./index"

describe("Header", () => {
  it("renders shallow", () => {
    const component = shallow(
      <Header name="whatever" age={12}>
        Here is some example content
      </Header>
    )
    expect(component).toMatchSnapshot()
  }),
    it("renders mount", () => {
      const component = mount(
        <Header name="whatever" age={12}>
          Here is some example content
        </Header>
      )
      expect(component).toMatchSnapshot()
    })
})
