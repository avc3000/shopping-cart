type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({ viewCart, setViewCart }: PropsType) => {
  const button = viewCart ? <button className="button__nav" onClick={() => setViewCart(false)}>PRODUCTS</button> : <button className="button__nav" onClick={() => setViewCart(true)}>CART</button>
  const content = (<nav className='nav'>{button}</nav>);

  return content;
}

export default Nav;