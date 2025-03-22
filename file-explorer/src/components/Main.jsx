import { useState } from "react";
import json from "../data.json";
import List from "./List";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [data, setData] = useState(json);

  const handleNodeAdd = (id) => {
    const name = prompt("Enter your folder/File Name");
    if (!name) return;

    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            children: [
              ...node.children,
              { id: uuidv4(), name, isFolder: true, children: [] },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };

    setData((prev) => updateTree(prev));
  };

  const handleDeleteNode = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id !== itemId)
        .map((node) => ({
          ...node,
          children: node.children ? updateTree(node.children) : [],
        }));
    };

    setData((prev) => updateTree(prev));
  };

  return (
    <div className="main">
      <h1>This is a File/Folder explorer</h1>
      <div className="main-structure">
        <List
          list={data}
          handleNodeAdd={handleNodeAdd}
          handleDeleteNode={handleDeleteNode}
        />
      </div>
    </div>
  );
};

export default Main;
