import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Verify.css';
import { userVerification } from '../../redux/auth/authActions';

const Verify = (props) => {
    const isVerified = useSelector(state => state?.auth?.isVerified);
    if(isVerified)
        props.history.push("/login");

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(userVerification({
            verificationLink : props.match.params.verificationLink,
            _id : props.match.params._id
        }))
    },[dispatch, props.match.params.verificationLink, props.match.params._id]);
    return ( 
        <div className="verify">
            <i className="fas fa-spinner"></i>
        </div>
     );
}
 
export default Verify;