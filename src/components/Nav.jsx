import { Link } from "react-router-dom";

function Nav () {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <h1 className="navbar-brand mb-0">梅添涼後台</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/products" className="nav-link" aria-current="page">產品列表</Link>
              </li>
              <li className="nav-item">
                <Link to="/article" className="nav-link">文章列表</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Nav;