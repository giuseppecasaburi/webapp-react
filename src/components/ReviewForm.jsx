import { useState } from "react";

function ReviewForm( {onSubmitFunction, formData, setFormData}) {
    const [error, setError] = useState(false);
 

    // CREO UN ARRAY PER CREARE LE OPTION NEL FORM
    // LA FORMULA SERVE PER CREARE UN ARRAY DI X NUMERI, PRENDE LE CHIAVI DI QUESTI X ELEMENTI E ATTRAVERSO ARRAYFROM LI SALVA IN availableVotes
    const availableVotes = Array.from(Array(6).keys());
    console.log(availableVotes);

    
    const setFieldValue = () => {
        // PRENDERE VALUE E IL NOME DEL CAMPO DA CAMBIARE
        const {value, name} = event.target;

        // COPIO I DATI CHE CI SONO NEL FORM
        const newFormData = {...formData};

        // SOSTITUISCO IL VECCHIO VALORE CON QUELLO AGGIORNATO
        newFormData[name] = value;

        // PASSO IL NUOVO ELEMENTO AL
        setFormData(newFormData)
    };

    // FUNZIONE CHE FA GLI STESSI CONTROLLI IMPOSTATI IN BACKEND
    const isDataValid = () => {
        if (formData.name.length <= 3 || formData.vote < 0 || formData.vote > 5 || (formData.text.length > 0 && formData.text.length < 5)) {
            return false;
        }
            return true;
        };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false)
        if(!isDataValid()) {
            setError(true);
        } else {
            onSubmitFunction(formData)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Nome utente</label>
                <input value={formData.name} name="name" type="text" className="form-control" id="username" onChange={setFieldValue} />
            </div>
            <div className="mb-3">
                <label htmlFor="vote">Seleziona il voto</label>
                <select value={formData.vote} name="vote" id="vote" className="form-select" onChange={setFieldValue}>
                    {availableVotes.map((curVote) => <option value={curVote} key={curVote}>{curVote}</option>)}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="text">Testo della recensione</label>
                <textarea value={formData.text} name="text" id="text" className="form-control" onChange={setFieldValue}></textarea>
            </div>
            {error && (
                <div className="alert alert-danger">Valori errati</div>
            )}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default ReviewForm;