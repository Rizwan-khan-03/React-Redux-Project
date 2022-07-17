import { connect } from "react-redux";
import Home from "../component/Home";
import { addToCart,removeToCart } from "../redux/action/action";

const mapStateToProps = state => ({
  data:state
})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)


// export default Home;