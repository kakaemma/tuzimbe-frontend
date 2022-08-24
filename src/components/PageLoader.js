import PropTypes from 'prop-types'
import { connect } from "react-redux"

const PageLoader = props =>(
    props.isRequestLoading?(
        <div className="spinner-wrapper">
            <div className="spinner-border text-primary spinner-centered" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ):('')
)
PageLoader.propTypes={
    isRequestLoading:PropTypes.bool.isRequired
}
const mapStateToProps =state=>({...state.requestLoading})
export default connect(mapStateToProps)(PageLoader)