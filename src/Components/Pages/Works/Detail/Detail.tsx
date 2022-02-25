import Vimeo from "@u-wave/react-vimeo";
import closeIcon from "../Asset/close-icon.png";
import "./Detail.scss";
interface DetailProps {
  visible: boolean;
  vimeo: string;
  tab: string | undefined;
  title: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Detail = ({ visible, vimeo, tab, title, setVisible }: DetailProps) => {
  if (!visible) return <></>;
  return (
    <div className="wapper">
      <div className="popup">
        <Vimeo video={vimeo} className="video" />
        <p className="popup-tab">{tab}</p>
        <p className="popup-title">{title}</p>

        <div className="contact-us-btn">Contact us</div>
      </div>
      <div className="icon-close" onClick={() => setVisible(false)}>
        <img src={closeIcon} alt="" className="icon-image" />
      </div>
    </div>
  );
};

export default Detail;
