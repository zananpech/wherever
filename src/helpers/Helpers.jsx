import ReactGa from "react-ga";

export function viewTrackingHandler(view) {
  ReactGa.pageview(view);
}

export function clickHandler(action) {
  ReactGa.event({
    category: "click",
    action: action,
  });
  alert("Send information to googly analytics.");
}
