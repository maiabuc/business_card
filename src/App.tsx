import "./App.css";
import Aurora from "./Background";
import ProfileCard from "./Profile";

function App() {
  return (
    <div className="app-container">
      {/* Aurora background */}
      <div className="aurora-background">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Card - should be perfectly centered */}
      <div className="card-container">
        <ProfileCard
          name="Maia Bucamp"
          title="Student at EPITA"
          handle="maia-bucamp"
          status="Linkedin"
          projectsText="My Web Page"
          contactText="Contact Me"
          avatarUrl="./../public/blacknwhite_image.png"
          miniAvatarUrl="favicon.ico"
          showUserInfo={true}
          enableTilt={false}
          projectsUrl="https://maiabuc.github.io/maiaPortfolio/"
          LinkedinUrl="https://fr.linkedin.com/in/maia-bucamp"
          onContactClick={() => console.log("Contact clicked")}
          onProjectsClick={() => console.log("Projects clicked")}
        />
      </div>
    </div>
  );
}

export default App;
