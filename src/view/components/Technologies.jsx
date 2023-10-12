import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import React from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
import NodeJs from "../../assets/nodejs.png";
import MongoDB from "../../assets/mongodb.svg";
import Express from "../../assets/express.png";
import Git from "../../assets/git.png";
import SocketIO from "../../assets/socketio.png";
import Firebase from "../../assets/firebase.png";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import other from "../../assets/other.png";

const Technologies = () => {
  return (
    <div>
      <div className="abril-font text-4xl text-neutral-800">Technologies</div>
      <div className="text-neutral-700">
        <div className="shadow-lg rounded-md mt-6 mx-auto border-1 border-neutral-400 max-w-327">
          <div className="flex justify-between rounded-t-md px-4 py-2 pt-3 items-center border-b-1 border-neutral-400 bg-neutral-800 text-neutral-100">
            <div className="text-xl font-bold">Frontend</div>
            <img src={frontend} alt="frontend logo" style={{ width: "35px" }} />
          </div>
          <div className="grid grid-cols-3 gap-y-5 py-5 justify-items-center font-medium text-xs text-center">
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={HTML} alt="HTML logo" />
              <div>HTML</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={CSS} alt="CSS logo" />
              <div>CSS</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={Tailwind} alt="Tailwind logo" />
              <div>Tailwind</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={JS} alt="JavaScript logo" />
              <div>JavaScript</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={React} alt="ReactJS logo" />
              <div>ReactJS</div>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-md mt-6 mx-auto border-1 border-neutral-400 max-w-327">
          <div className="flex justify-between rounded-t-md px-4 py-2 pt-3 items-center border-b-1 border-neutral-400 bg-neutral-800 text-neutral-100">
            <img src={backend} alt="backend icon" style={{ width: "35px" }} />
            <div className="text-xl font-bold pr-2 text-right">Backend</div>
          </div>
          <div className="grid grid-cols-3 gap-y-5 justify-items-center font-medium text-xs text-center py-5">
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={NodeJs} alt="NodeJS logo" />
              <div>NodeJS</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={Express} alt="ExpressJS logo" />
              <div>ExpressJS</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={MongoDB} alt="MongoDB logo" />
              <div>MongoDB</div>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-md mt-6 mx-auto border-1 border-neutral-400 max-w-327">
          <div className="flex justify-between rounded-t-md px-4 py-2 pt-3 items-center border-b-1 border-neutral-400 bg-neutral-800 text-neutral-100">
            <div className="text-xl font-bold pr-2 text-right">Other</div>
            <img src={other} alt="other icon" style={{ width: "35px" }} />
          </div>
          <div className="grid grid-cols-3 gap-y-5 justify-items-center font-medium text-xs text-center py-5">
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={Git} alt="Git logo" />
              <div>Git</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={SocketIO} alt="Socket.io logo" />
              <div>Socket.io</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="img-size" src={Firebase} alt="Firebase logo" />
              <div>Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
