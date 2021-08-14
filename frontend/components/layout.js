import Nav from "./nav"

const Layout = ({ children, categories, seo }) => (
  <div>
    <Nav categories={categories} />
    <div className="max-w-7xl mx-auto px-2 pt-20 pb-10">
    {children}
    </div>
  </div>
)

export default Layout
