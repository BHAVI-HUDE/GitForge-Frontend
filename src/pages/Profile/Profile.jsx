import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ActivityHeatmap from "../Dashboard/HeatMap";

const API_URL = import.meta.env.VITE_API_BASE_URL;

function Profile() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  const avatarInputRef = useRef(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`${API_URL}/user/${id}/profile`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to load profile");
        }

        setUser(data.user);
        setRepos(data.repos || []);

        setUsername(data.user.username);
        setBio(data.user.bio || "");
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [id]);

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const res = await fetch(`${API_URL}/user/${id}/avatar`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Avatar upload failed");
      }

      setUser((prev) =>
        prev
          ? {
              ...prev,
              avatar: `${data.avatar}?t=${Date.now()}`,
            }
          : prev
      );
    } catch (err) {
      alert(err.message);
    }

    e.target.value = "";
  };

  const handleProfileUpdate = async () => {
    try {
      const res = await fetch(
        `${API_URL}/user/updateProfile/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            bio,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Update failed");
      }

      setUser(data.user);
      setEditing(false);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <p>Loading profile...</p>;

  if (!user) return <p>User not found</p>;

  return (
    <div className="profile-page">

      {/* HEADER */}

      <div className="profile-header">
        <h1>{user.username}</h1>
        <p>Developer Profile</p>
      </div>

      {/* MAIN GRID */}

      <div className="profile-layout">

        {/* LEFT */}

        <div className="profile-left">

          <img
            src={user.avatar || "/assets/defaultAvatar.png"}
            alt="avatar"
            className="profile-avatar"
          />

          <button
            className="profile-avatar-btn"
            onClick={() => avatarInputRef.current.click()}
          >
            Change Avatar
          </button>

          <input
            type="file"
            ref={avatarInputRef}
            style={{ display: "none" }}
            accept="image/*"
            onChange={handleAvatarUpload}
          />

          {editing ? (
            <>
              <input
                className="profile-input"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
              />

              <textarea
                className="profile-textarea"
                value={bio}
                onChange={(e) =>
                  setBio(e.target.value)
                }
                placeholder="Write a bio..."
              />

              <div className="profile-actions">
                <button onClick={handleProfileUpdate}>
                  Save
                </button>

                <button
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h2>{user.username}</h2>

              <p className="profile-bio">
                {user.bio || "No bio added"}
              </p>

              <button
                onClick={() => setEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>

        {/* RIGHT */}

        <div className="profile-content">

          {/* STATS */}

          <div className="profile-stats">

            <div className="stat-card">
              <h3>{repos.length}</h3>
              <p>Repositories</p>
            </div>

            <div className="stat-card">
              <h3>0</h3>
              <p>Issues</p>
            </div>

            <div className="stat-card">
              <h3>0</h3>
              <p>Files</p>
            </div>

            <div className="stat-card">
              <h3>0 MB</h3>
              <p>Storage</p>
            </div>

          </div>

          {/* REPOSITORIES */}

          <div className="repositories-section">

            <div className="section-header">
              <h2>Repositories</h2>
              <span>{repos.length}</span>
            </div>

            {repos.length === 0 ? (
              <p>No repositories found.</p>
            ) : (
              repos.map((repo) => (
                <div
                  key={repo._id}
                  className="repo-card"
                >
                  <div className="repo-info">

                    <Link
                      to={`/repo/${repo._id}`}
                      className="repo-name"
                    >
                      📁 {repo.name}
                    </Link>

                    <p className="repo-desc">
                      {repo.description ||
                        "No description"}
                    </p>

                  </div>

                  <span className="repo-visibility">
                    {repo.isPrivate
                      ? "Private"
                      : "Public"}
                  </span>
                </div>
              ))
            )}
          </div>

          {/* HEATMAP */}

          <ActivityHeatmap />

        </div>
      </div>
    </div>
  );
}

export default Profile;