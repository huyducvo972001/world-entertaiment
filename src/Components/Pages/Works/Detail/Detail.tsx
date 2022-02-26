/* eslint-disable jsx-a11y/iframe-has-title */

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
        <div className="video">
          <iframe src={vimeo}></iframe>
        </div>
        <p className="popup-tab">{tab}</p>
        <p className="popup-title">{title}</p>
      </div>
      <div className="icon-close" onClick={() => setVisible(false)}>
        <img src={closeIcon} alt="" className="icon-image" />
      </div>
    </div>
  );
};

export default Detail;
