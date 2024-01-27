import React from "react";
import type { Preview } from "@storybook/react";
import { NavbarContext } from "../src/context/navbar-context";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    decorators: [
      (Story) => (
        <NavbarContext.Provider value={{navRect: {height: 33}}}>
          {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
          <Story />
        </NavbarContext.Provider>
      ),
      // NavbarDecorator,
    ],
  },

};

export default preview;
