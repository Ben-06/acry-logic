import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AnswerPrompt(props){
    const {showAnswerModal,setShowAnswerModal, answers, setAnswer,selectedId} = props;
    const [colorValue, setColorValue] = useState(answers[selectedId].color);
    useEffect(() => { setColorValue(answers[selectedId].color)}, [answers[selectedId].color] );
    const [numberValue, setNumberValue] = useState(answers[selectedId].value);
    useEffect(() => { setNumberValue(answers[selectedId].value)}, [answers[selectedId].value] );
    const colorsList = ["rouge","bleu","jaune"];
    const valueList = ["1","2","3"];
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");

    const handleColorChange = (event) => {
      setColorValue(event.target.value);
    };

    const handleNumberChange = (event) => {
      setNumberValue(event.target.value);
    };

    const isDuplicate = (numberValue, colorValue, answer, selectedId) => {
        return answer.id != selectedId && answer.value == numberValue && answer.color == colorValue;
    }

    const checkDuplicateAnswer = () => {
        if(colorValue === null || numberValue === null) return false;
        const dup = answers.find((answer) => isDuplicate(numberValue, colorValue, answer, selectedId));
        return dup;
    }

    const clear = () => {
        //reset form fields
        setShowAnswerModal(false);
        setColorValue(null);
        setNumberValue(null);
        setErrorText("");
        setError(false);
    }

    const clean = () => {
        //reset cell
        setColorValue(null);
        setNumberValue(null);
        setErrorText("");
        setError(false);

        // 1. Make a shallow copy of the array
        let temp_answer = [...answers];

        // 2. Make a shallow copy of the element you want to mutate
        let temp_element = { ...temp_answer[selectedId] };

        // 3. Update the property you're interested in
        temp_element.value = null;
        temp_element.color = null;

        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        temp_answer[selectedId] = temp_element;

        // 5. Set the state to our new copy
        setAnswer( temp_answer );

    }

    const validate  = event => {
        event.preventDefault();

        if(checkDuplicateAnswer()){
            setErrorText("Une autre case a déjà ce couple couleur/valeur !");
            setError(true);
        } else {

            setShowAnswerModal(false);

            // 1. Make a shallow copy of the array
            let temp_answer = [...answers];

            // 2. Make a shallow copy of the element you want to mutate
            let temp_element = { ...temp_answer[selectedId] };

            // 3. Update the property you're interested in
            temp_element.value = numberValue;
            temp_element.color = colorValue;

            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            temp_answer[selectedId] = temp_element;

            // 5. Set the state to our new copy
            setAnswer( temp_answer );

            //reset form fields
            clear();
        }
    }

   

    return (
    <div>
        <Dialog open={showAnswerModal} onClose={clear} fullWidth>
            
            <DialogContent>
                <DialogTitle>Choisissez la valeur et/ou couleur de cette case</DialogTitle>
                <FormControl 
                fullWidth
                error={error}
                >
                    <InputLabel id="color-select-label">Couleur</InputLabel>
                    <Select
                        labelId="color-select-label"
                        id="color-select"
                        displayEmpty
                        value={colorValue ? colorValue : ''}
                        label="Couleur"
                        onChange={handleColorChange}
                    >
                        {
                            colorsList.map((color) => 
                                <MenuItem key={color} value={color}>{color}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
                <FormControl
                fullWidth
                sx={{mt:2}}
                error={error}
                >
                    <InputLabel id="number-select-label">Valeur</InputLabel>
                    <Select
                        labelId="number-select-label"
                        id="number-select"
                        value={numberValue ? numberValue : ''}
                        label="Valeur"
                        onChange={handleNumberChange}
                        
                    >
                        {
                            valueList.map((value) => 
                                <MenuItem key={value} value={value}>{value}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
                <FormHelperText error>{errorText}</FormHelperText>
            </DialogContent>
            <DialogActions>
                <Button onClick={clear}>Annuler</Button>
                <Button onClick={clean}>Vider</Button>
                <Button onClick={validate}>Valider</Button>
            </DialogActions>
        </Dialog>
    </div>
    );
};