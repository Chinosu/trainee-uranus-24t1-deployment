import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

const Messages = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative flex flex-col h-screen w-screen">
        <div className="content-center grow">la messages</div>
        <div className="absolute bottom-0 w-full">
          <NavBar navigate={navigate} index={2}/>
        </div>
      </div>
    </>
  );
};

export default Messages;