import * as Accordion from "@radix-ui/react-accordion";
import { useState } from "react";

export const AccordionDemo = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleAccordionItemClick = (value: any) => {
    setActiveItem(value === activeItem ? null : value);
  };

  return (
    <section className="w-full px-4 py-10 mx-auto max-w-7xl lg:py-20">
      <Accordion.Root
        className="bg-medus-aqua-100 "
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <Accordion.Item value="item-1">
          <Accordion.Trigger
            onClick={() => handleAccordionItemClick("item-1")}
            className="flex"
          >
            Is it accessible?
            <svg
              className={` ${
                activeItem === "item-1" ? "rotate-180" : "rotate-0"
              } transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.243 8.464a.75.75 0 0 1 1.061 1.06l-5.657 5.657a.75.75 0 0 1-1.06 0l-5.657-5.657a.75.75 0 1 1 1.06-1.06L12 13.94l4.243-4.536z"
              />
            </svg>
          </Accordion.Trigger>
          <Accordion.Content>
            Yes. It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="item-2">
          <Accordion.Trigger
            onClick={() => handleAccordionItemClick("item-2")}
            className=""
          >
            Is it accessible?
            <svg
              className={`${
                activeItem === "item-2" ? "rotate-180" : "rotate-0"
              } transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.243 8.464a.75.75 0 0 1 1.061 1.06l-5.657 5.657a.75.75 0 0 1-1.06 0l-5.657-5.657a.75.75 0 1 1 1.06-1.06L12 13.94l4.243-4.536z"
              />
            </svg>
          </Accordion.Trigger>
          <Accordion.Content>
            blablabla It adheres to the WAI-ARIA design pattern.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  );
};
