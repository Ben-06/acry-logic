import AnswerPrompt from '/comps/AnswerPrompt';
import { useState } from 'react';

export default function Test(){
    
    const initialState = [
        {id : 0, value: null, color: null },
        {id : 1, value: null, color: null },
        {id : 2, value: null, color: null },
        {id : 3, value: null, color: null },
        {id : 4, value: null, color: null },
        {id : 5, value: null, color: null },
        {id : 6, value: null, color: null },
        {id : 7, value: null, color: null },
        {id : 8, value: null, color: null }
      ];
    
    const [selectedId, setSelectedId] = useState(0);
    const [answers, setAnswer] = useState(initialState);
    const [showAnswerModal, setShowAnswerModal] = useState(false);
    

    return(
        <div>
            <AnswerPrompt 
                selectedId={selectedId}
                showAnswerModal={showAnswerModal} 
                setShowAnswerModal={setShowAnswerModal}
                answers={answers}
                setAnswer={setAnswer}
            />
            <button
            onClick={() => setShowAnswerModal(true)}
            >
            Open
            </button>
        </div>
    );
}