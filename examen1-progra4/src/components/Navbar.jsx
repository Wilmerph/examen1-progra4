import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '15px', padding: '15px', background: '#1a1a2e' }}>
            <Link to="/" style={{
                color: 'white',
                textDecoration: 'none',
                background: '#2d2b55',
                padding: '12px 30px',
                borderRadius: '10px',
                fontSize: '18px'
            }}>Inicio</Link>
            <Link to="/carparts" style={{
                color: 'white',
                textDecoration: 'none',
                background: '#2d2b55',
                padding: '12px 30px',
                borderRadius: '10px',
                fontSize: '18px'
            }}>Repuestos</Link>
        </nav>
    )
}