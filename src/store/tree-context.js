import React from "react";

const TreeCtx = React.createContext({
  appendParagraph: () => {},
  deleteParagraph: () => {},
});

export default TreeCtx;
