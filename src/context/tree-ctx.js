import React from "react";

const TreeCtx = React.createContext({
  createNewParagraphChild: () => {},
  nodes: [],
});

export default TreeCtx;
