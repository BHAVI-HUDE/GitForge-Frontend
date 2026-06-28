function WelcomeBanner() {
  const username = localStorage.getItem("username") || "Developer";

  return (
    <section className="welcome-banner">
      <h1>Welcome back, {username} 👋</h1>

      <p>
        Manage repositories, files, issues and projects from one place.
      </p>
    </section>
  );
}

export default WelcomeBanner;