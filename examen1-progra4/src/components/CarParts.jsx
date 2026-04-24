import { useState, useEffect } from 'react'

export default function CarParts() {
    const [repuestos, setRepuestos] = useState([])
    const [visibles, setVisibles] = useState(10)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const key = import.meta.env.VITE_JSONBIN_ACCESS_KEY
            const url = import.meta.env.VITE_CARPARTS_API_URL

            if (!key) {
                setError('Falta la API key en el .env')
                setLoading(false)
                return
            }

            try {
                const response = await fetch(url, {
                    headers: {
                        'X-Access-Key': key
                    }
                })
                const data = await response.json()
                console.log(data)
                setRepuestos(data.record.articles)
            } catch (error) {
                setError('Error al cargar los repuestos')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p>Cargando repuestos...</p>
    if (error) return <p>{error}</p>
    if (repuestos.length === 0) return <p>No hay repuestos disponibles</p>

    return (
        <div>
            <h1>Repuestos de Carro</h1>
           {repuestos.slice(0, visibles).map((item, index) => (
    <div key={index} style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px',
        display: 'inline-block',
        width: '200px',
        verticalAlign: 'top'
    }}>
        <img src={item.s3image} alt={item.articleProductName} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
        <p style={{ fontSize: '12px', color: 'gray' }}>{item.articleNo}</p>
        <p style={{ fontWeight: 'bold' }}>{item.articleProductName}</p>
        <p style={{ fontSize: '12px' }}>{item.supplierName}</p>
        <span>#{item.supplierId}</span>
    </div>
))}
       {repuestos.length > visibles && (
    <div style={{ textAlign: 'center', margin: '20px' }}>
        <button 
            onClick={() => setVisibles(visibles + 10)}
            style={{
                background: '#7c5cbf',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                padding: '12px 30px',
                fontSize: '15px',
                cursor: 'pointer'
            }}
        >
            Ver más ({repuestos.length - visibles} de {repuestos.length} restantes)
        </button>
    </div>
)}
        </div>
    )
}