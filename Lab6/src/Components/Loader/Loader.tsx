import { InfinitySpin } from "react-loader-spinner";
import "./index.css";
import { useTypedSelector } from "../../Hooks/useTypedSelector";


const Loader = () => {
  const { isLoading } = useTypedSelector(
    (store) => store.ToDo
  );
  return (
    <>
      {isLoading && (
        <div className="my_eclipse">
          <div className="progress">
            <div>
              <InfinitySpin width="200" color="#002F34" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Loader;
