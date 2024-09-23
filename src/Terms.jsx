import terms from "./TermsText";
import TermsText from "./TermsText";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

function Terms() {
  const markdown = terms;

  return (
    <div className="m-2">
      <Markdown>{markdown}</Markdown>
    </div>
  );
}

export default Terms;
