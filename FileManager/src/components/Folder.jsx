import React, { useState } from "react";
import {
  FaFile,
  FaFileCirclePlus,
  FaFolder,
  FaFolderPlus,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

function Folder({ explorer,handleInsertNode }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visiable: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visiable: true,
      isFolder: isFolder,
    });
    setExpand(true)
  };

  const onAddFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
      handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
      setShowInput({...showInput,visiable:false})
    }
  }

  return (
    <main>
      <section
        onClick={() => setExpand(!expand)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "300px",
          backgroundColor: "grey",
          padding: "2px 10px",
          borderRadius: "2px",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {explorer.isFolder ? <FaFolder /> : <FaFile />}
          {explorer.name}
        </div>
        {
          explorer.isFolder && <div style={{ display: "flex", gap: "2px" }}>
          <button onClick={(e) => handleNewFolder(e, true)}>
            <FaFolderPlus />
          </button>
          <button onClick={(e) => handleNewFolder(e, false)}>
            <FaFileCirclePlus />
          </button>
          <div>{explorer.isFolder && <IoIosArrowDown />}</div>
        </div>
        }
      </section>
      {showInput.visiable && (
        <div style={{display:'flex',gap:'5px',alignItems:'center',width:'295px',paddingLeft:'25px'}}>
          {showInput.isFolder ? <FaFolder style={{fontSize:'20px'}} /> : <FaFile style={{fontSize:'20px'}}/>}
          <input style={{width:'100%',height:'20px',outline:'none'}} autoFocus onBlur={()=>setShowInput({...showInput,visiable:false})} onKeyDown={(e)=>onAddFolder(e)} />
        </div>
      )}
      {expand && (
        <section style={{ paddingLeft: "25px", marginTop: "1px" }}>
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} handleInsertNode={handleInsertNode} key={exp.id} />;
          })}
        </section>
      )}
    </main>
  );
}

export default Folder;
