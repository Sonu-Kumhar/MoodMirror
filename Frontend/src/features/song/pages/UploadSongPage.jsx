import "../style/uploadSong.scss";
import { useState } from "react";

const UploadSongPage = () => {
  const [song, setSong] = useState(null);
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!song || !mood) {
      alert("Please fill all fields");
      return;
    }

    // UI layer only (no API call here)
    console.log({
      song,
      mood,
    });

    alert("Ready to upload 🚀");
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

      </form>
    </div>
  );
};

export default UploadSongPage;