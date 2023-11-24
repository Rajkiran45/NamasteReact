import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Cases", () => {
    it('should load contact us component', () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    });
    it('should load butoon inside contact us component', () => {
        render(<Contact />);

        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");

        //Assertion
        expect(button).toBeInTheDocument();
    });
    test('should load input name inside contact us component', () => {
        render(<Contact />);

        // const button = screen.getByRole("button");
        const name = screen.getByPlaceholderText("name");

        //Assertion
        expect(name).toBeInTheDocument();
    });
    test('should load two input fields inside contact us component',
        () => {
            render(<Contact />);

            // Should write textbox there is no role of input
            // const inputBoxes = screen.getAllByRole("input");
            const inputBoxes = screen.getAllByRole("textbox");

            expect(inputBoxes.length).toBe(2);
            // Can also write like this
            // expect(inputBoxes.length).not.toBe(3);
        })
});





/* 
 - We can use it in place of test because it is easier to read like it should be ..
 - use either test or it but recommended to use it
 - descibe is used to group tests inside them
*/ 
