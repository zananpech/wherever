import ReactGa from "react-ga";

export function viewTrackingHandler(view) {
  ReactGa.pageview(view);
}
