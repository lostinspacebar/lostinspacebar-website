
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

export const LoadingSpinner = (props) => {
    const { promiseInProgress } = usePromiseTracker({ area: props.area });
    return promiseInProgress && <div className='loading-spinner'><Loader type="TailSpin" width="25" height="25" color="#5a5751" /></div>
};