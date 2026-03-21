import "../style/uploadSong.scss";
import { useState } from "react";
import { useUploadSong } from "../hooks/useUploadSong";

const UploadSongPage = () => {
  const [song, setSong] = useState(null);
  const [mood, setMood] = useState("");

  const { uploadSong, loading, error, success } = useUploadSong();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!song || !mood) {
      alert("Please fill all fields");
      return;
    }

    await uploadSong({
      songFile: song,
      mood
    });
  };

  return (
    <div className="upload">
      <h2 className="upload__title">Upload Song 🎵</h2>

      <form onSubmit={handleSubmit} className="upload__form">
        
        {/* Audio Input */}
        <input
          type="file"
          accept="audio/*"
          onChange={(e) => setSong(e.target.files[0])}
        />

        {/* Mood Input */}
        <input
          type="text"
          placeholder="Enter mood (happy, sad, surprised...)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />

        {/* Submit */}
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>

        {/* Feedback */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>Upload successful ✅</p>}

      </form>
    </div>
  );
};

export default UploadSongPage;