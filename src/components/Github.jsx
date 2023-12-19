import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <div className="gitcont">
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Github
      </h1>
      <div className="hh">
        <GitHubCalendar username="Kshitiz155"></GitHubCalendar>
      </div>

<div className="img_div">


      <img
        id="github-top-langs"
        // style={{ width: "100%" }}
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kshitiz155&theme=light&hide_border=false&include_all_commits=false&count_private=true&layout=compact"
        alt="Kshitiz155"
      />    



</div>
    </div>
  );
}
