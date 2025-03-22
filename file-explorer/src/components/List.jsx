import { useState } from "react";
const List = ({ list, handleNodeAdd, handleDeleteNode }) => {
  const [isExpand, setIsExpand] = useState({});

  return (
    <div className="container">
      {list.map((node) => {
        return (
          <div key={node.id} className="main-head">
            <span>{node.isFolder ? "🗂️" : "📂"}</span>

            <span>{node?.name}</span>
            {node.isFolder && (
              <>
                <span
                  onClick={() =>
                    setIsExpand((prev) => ({
                      ...prev,
                      [node.name]: !prev[node.name],
                    }))
                  }
                >
                  {isExpand[node.name] ? "⌄" : ">"}
                </span>
                <span className="img" onClick={() => handleNodeAdd(node.id)}>
                  <img
                    height={20}
                    width={20}
                    src="https://cdn-icons-png.flaticon.com/512/3979/3979527.png"
                    alt="icon-img"
                  />
                </span>
              </>
            )}
            <span className="img" onClick={() => handleDeleteNode(node.id)}>
              <img
                width={20}
                src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png"
                alt="delete-icon"
              ></img>
            </span>

            {isExpand?.[node.name] && node?.children && (
              <List
                list={node?.children}
                handleNodeAdd={handleNodeAdd}
                handleDeleteNode={handleDeleteNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default List;
