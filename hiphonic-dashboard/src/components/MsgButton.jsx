import "./MsgButton.scss";

function MsgButton({msg}) {
  return (
    <div>
      <button className="button">
        <span>{msg}</span>
      </button>
    </div>
  );
}

export default MsgButton;
