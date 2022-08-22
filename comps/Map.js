import { useState } from 'react';
import Prompt from './Prompt.js';

const areas = [
    {
        "id" : 1,
        "coords" : "185,118,126,196,155,241,248,247,276,211",
        "center" : [179,192]
    },
    {
        "id" : 2,
        "coords" : "275,54,205,94,326,199,369,127",
        "center" : [276,106]
    },
    {
        "id" : 3,
        "coords" : "428,34,370,61,391,179,498,150,505,113",
        "center" : [427,122]
    },
    {
        "id" : 4,
        "coords" : "135,258,87,319,131,416,217,389,214,273,164,252",
        "center" : [157,328]
    },
    {
        "id" : 5,
        "coords" : "291,254,261,339,345,355,439,232,371,204",
        "center" : [322,278]
    },
    {
        "id" : 6,
        "coords" : "483,199,517,327,618,260,575,137",
        "center" : [544,227]
    },
    {
        "id" : 7,
        "coords" : "252,384,172,481,243,521,321,390",
        "center" : [209,474]
    },
    {
        "id" : 8,
        "coords" : "360,383,284,495,378,563,460,448",
        "center" : [374,493]
    },
    {
        "id" : 9,
        "coords" : "441,267,378,355,400,402,433,403,483,310",
        "center" : [423,319]
    }
];

function Area({id, onClick}) {
    return (
        <area  shape="poly" coords={areas[id].coords} href="#" onClick={() => onClick(id)} />
    );
}

function Answer({id, value}) {
    const answer_id = "answer_"+id;
    return(
        <div id={answer_id} >
            {value}
            <style jsx>{`
                #${answer_id} {
                    left: ${areas[id].center[0]}px;
                    top : ${areas[id].center[1]}px;
                    position:absolute;
                    color:blue;
                }
            `}</style>
        </div>
    );
}

export default function Map(){

    const initialState = [
        {id : 0, value: 0, color: '' },
        {id : 1, value: 0, color: '' },
        {id : 2, value: 0, color: '' },
        {id : 3, value: 0, color: '' },
        {id : 4, value: 0, color: '' },
        {id : 5, value: 0, color: '' },
        {id : 6, value: 0, color: '' },
        {id : 7, value: 0, color: '' },
        {id : 8, value: 0, color: '' }
      ];
    
    const [answers, setAnswer] = useState(initialState);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    
    const clic = (id) => {

        setModalFormOpen(true);

        /** Call the plugin */
        
        // 1. Make a shallow copy of the array
        let temp_answer = [...answers];
        
        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = { ...temp_answer[id] };
        
        // 3. Update the property you're interested in
        temp_element.value = id+1;
        
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_answer[id] = temp_element;
        
        // 5. Set the state to our new copy
        setAnswer( temp_answer );
   
    }

    return(
        <div>
            <map name="gamemap">
                {answers.map((answer) => 
                    <div key={answer.id}>
                        <Area key={"area_"+answer.id} id={answer.id} onClick={clic} />   
                        <Answer key={"answer_"+answer.id} id={answer.id} value={answer.value}/>   
                    </div>
                )}  
                
            </map>
            <Prompt modalFormOpen={modalFormOpen} setModalFormOpen={setModalFormOpen} />
        </div>
    );
}