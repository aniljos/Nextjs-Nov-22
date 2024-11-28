import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';


test("rendering Counter", () => {

    render(<Counter initialValue={10}/>);
    const element = screen.getByText("Count: 10");
    expect(element).toBeInTheDocument();

})

test("inc Counter ", () => {

    render(<Counter initialValue={10}/>);
    const element = screen.getByText("Count: 10");
    expect(element).toBeInTheDocument();
    const btn = screen.getByText("Inc");
    fireEvent.click(btn);

    let updatedElement = screen.getByText("Count: 11");
    expect(updatedElement).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Counter");
    fireEvent.change(input, {target: {value: '20'}});

    updatedElement = screen.getByText("Count: 20");
    expect(updatedElement).toBeInTheDocument();

})
