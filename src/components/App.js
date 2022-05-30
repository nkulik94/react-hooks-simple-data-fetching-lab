import React, { useState, useEffect} from 'react';

function App() {
    const [isLoaded, setLoaded] = useState(false)
    const [dogUrl, setDog] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(({ message }) => {
                setDog(message)
                setLoaded(true)
            })
    }, [])

    if (!isLoaded) return <p>Loading</p>

    return (
        <img src={dogUrl} alt='A Random Dog'></img>
    )
}


export default App