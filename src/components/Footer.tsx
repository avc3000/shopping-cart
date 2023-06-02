import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean,
}

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();
  const year: number = new Date().getFullYear();
  const pageContent = viewCart ? <p className="p__copy">Shopping Cart &copy; {year}</p> : (
                      <>
                        <p className="p__footer">Total Items: <span className="span__nav">{totalItems}</span></p>
                        <p className="p__footer">Total Price: <span className="span__nav">{totalPrice}</span></p><br />
                        <p className="p__copy">Shopping Cart &copy; {year}</p>
                      </>);
  const content = (<footer className="footer">{pageContent}</footer>)

  return content;
}

export default Footer;