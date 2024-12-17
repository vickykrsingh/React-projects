import { useState } from 'react'
import './App.css'
import { explorer } from './data/folderData'
import Folder from './components/Folder.jsx'
import UseTraverseTree from './hooks/use-traverse-tree.js'

function App() {
  const [explorerData,setExplorerData] = useState(explorer)
  const {insertNode} = UseTraverseTree()
  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)
    console.log(folderId,item.isFolder)
    setExplorerData(finalTree)
  }
  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  )
}

export default App
