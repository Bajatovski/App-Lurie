import { useEffect, useState } from 'react';
import { keyFilesService } from '../repositories/keyFilesRepository';

const initialState = {
    data: []
}

export const useKeyFilesFetchAll = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchKeyFiles = async () => {
        try{
            setError(false);
            setLoading(true);

            const keyFiles = await keyFilesService.fetchKeyFiles();
            setState({data: keyFiles});
        }
        catch(error){
            setLoading(false);
        }
    };

    useEffect(() => {
        setState(initialState);
        fetchKeyFiles();
    }, []);

    return [state, loading, error];
}