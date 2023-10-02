import Input from "./Input/Input";
import SystemStatus from "./SystemStatus/SystemStatux";

function Grid() {
  return (
    <div className="w3-container">
      <div className="w3-row">
        <div className="w3-col s6 m4 l3">
          <SystemStatus />
        </div>
        <div className="w3-col s6 m4 l3">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default Grid;
