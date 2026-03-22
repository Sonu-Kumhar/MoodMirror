import { useNavigate } from "react-router";
import "./uploadButton.scss"

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h1 className="logo">MoodMirror</h1>

            <button className="upload-btn" onClick={() => navigate("/upload-song")}>
                Upload ⬆️
            </button>
        </div>
    );
};

export default Header;