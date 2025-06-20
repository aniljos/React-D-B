import { render, screen } from "@testing-library/react"
import { CustomerListing } from "./page"
import { Customer } from "@/model/Customer";

beforeEach(() => {
    fetchMock.resetMocks();
})

test("render CustomerListing", async () => {

    //Mock the api call;
    const mockCustomers: Customer [] = [
        {id: 1, name: "C1", location: "l1"},
        {id: 2, name: "C2", location: "l2"},
    ]
    fetchMock.mockResponseOnce(
        JSON.stringify(mockCustomers)
    );

    //render(<CustomerListing delay={1}/>)
    render(await CustomerListing({delay: 1}));
    const c1 = screen.getByText("C1");
    expect(c1).toBeInTheDocument();

     const l1 = screen.getByText("l1");
    expect(l1).toBeInTheDocument();



})