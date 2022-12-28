import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  static defaultProps = {
    errorMessage: "Ops.. something went wrong.",
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full text-center">
          <h2>{this.props.errorMessage}</h2>
          <h3>
            Click{" "}
            <Link to="/" className="font-semibold">
              here
            </Link>{" "}
            to go back to the home page.
          </h3>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
