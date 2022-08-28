import { useState } from 'react';
import AnswerPrompt from './AnswerPrompt';

const areas = [
    {
        "id" : 1,
        "coords" : [77,447]
    },
    {
        "id" : 2,
        "coords" : [257,453]
    },
    {
        "id" : 3,
        "coords" : [443,447]
    },
    {
        "id" : 4,
        "coords" : [78,588]
    },
    {
        "id" : 5,
        "coords" : [257,587]
    },
    {
        "id" : 6,
        "coords" : [440,591]
    },
    {
        "id" : 7,
        "coords" : [78,738]
    },
    {
        "id" : 8,
        "coords" : [257,736]
    },
    {
        "id" : 9,
        "coords" : [442,739]
    }
];

const colors ={
    "white" : "#FFFFFF",
    "rouge" : "#db5171",
    "bleu" : "#6173cf",
    "jaune" : "#d6ce5a"

};

function Cell({id, onClick, value, color}) {
    if(color === null) color = "white";
    const cell_id = "answer_"+id;
    return(
        <div id={cell_id} onClick={() => onClick(id)}>
            {value}
            <style jsx>{`
                #${cell_id} {
                    left: ${areas[id].coords[0]}px;
                    top : ${areas[id].coords[1]}px;
                    width:138px;
                    height:98px;
                    position:absolute;
                    background-color:${colors[color]};
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor:pointer;
                    font-family: bradley hand, cursive;
                    font-weight: bold;
                    font-size: 3rem;
                }
            `}</style>
        </div>
    );
}

export default function Map(){

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
    
    const clic = (id) => {
        setSelectedId(id);
        setShowAnswerModal(true);
    }

    return(
        <div id="gamemap">
            {answers.map((answer) => 
                <Cell key={answer.id} onClick={clic} value={answer.value} color={answer.color} id={answer.id}> 
                </Cell>
            )}  

            <AnswerPrompt 
                selectedId={selectedId}
                showAnswerModal={showAnswerModal} 
                setShowAnswerModal={setShowAnswerModal}
                answers={answers}
                setAnswer={setAnswer}
            />
        </div>
    );
}