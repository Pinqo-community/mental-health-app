import { useState } from 'react';
import PouchDB from "pouchdb";

import PWABadge from './PWABadge.tsx'

function App() {
  const [db] = useState(() => new PouchDB('my_database'));
  
  return (
    <>
      <h1>Equilibre</h1>
      <PWABadge />
    </>
  )
}

export default App
