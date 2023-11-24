import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../__tests__/mocks/resCardMock.json"
import '@testing-library/jest-dom'

test('should render restaurant card component with props Data', () => { 
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name = screen.getByText("Cafe Bahar since 1973");

    expect(name).toBeInTheDocument();
 })