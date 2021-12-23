import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from "Dashboard/Dashboard";
import APIService from "Services/APIServices";

describe('App component', () => {

  test("should render the dashboard component", async () => {
  
    render(
      <Router>
        <Dashboard />
      </Router>
    );
  
    const text = screen.getByText("Open posts list");
    expect(text).toBeInTheDocument();
  });

  test("gives a list with all posts", async () => {

    const posts = await APIService.getAllPosts();
    expect(posts).toHaveLength(100);
  });
});
