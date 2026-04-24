import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', background: '#1a1a2e' }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>Programación IV</span>
            <div style={{ display: 'flex', gap: '10px' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
                <Link to="/carparts" style={{ color: 'white', background: '#7c5cbf', padding: '5px 15px', borderRadius: '5px', textDecoration: 'none' }}>Repuestos</Link>
            </div>
        </nav>
    )
}