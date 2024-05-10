import Dialog from "./component/Dialog";
import StarRating from "./component/StarRating";
import { useState } from 'react'

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () => setShowDialog(!showDialog);
  return (
    <main>
      <section className="rating grid grid-center full-height">
        <StarRating />
      </section>
      <section className={`dialog grid grid-center full-height ${showDialog ? 'show' : ''}`}>
        <Dialog toggleDialog={toggleDialog} />
      </section>
    </main>
  );
}

export default App;
