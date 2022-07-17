import { connect } from "react-redux";
import Header from "../component/Header";
import { addToCart } from "../redux/action/action";

const mapStateToProps = state => ({
  data:state
})

const mapDispatchToProps = dispatch => ({
  // addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)


// export default Home;