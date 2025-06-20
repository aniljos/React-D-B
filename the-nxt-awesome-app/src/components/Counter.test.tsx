import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';


test("Render Counter", () => {
    render(<Counter initialValue={5}/>);
    const text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();
})

test("Render Counter and increment", () => {
    render(<Counter initialValue={5}/>);
    const text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();
    const incBtn = screen.getByText("Inc");
    fireEvent.click(incBtn);
    const updatedText = screen.getByText("Counter: 7");
    expect(updatedText).toBeInTheDocument();
})
