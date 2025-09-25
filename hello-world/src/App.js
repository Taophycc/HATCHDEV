import "./App.css";
function HelloWorld() {
  return (
    <main>
      <div className="card">
        <img
          className="header-img"
          src="https://imgs.search.brave.com/Z0OWaXO7UXt8s44Zk2lsQKCgxBA4h1V6_Qg-5AFJzrY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iZWF1/dGlmdWwtc3Vuc2V0/LXNreS1hYm92ZS1j/bG91ZHMtYmVhdXRp/ZnVsLXN1bnNldC1z/a3ktYWJvdmUtY2xv/dWRzLWRyYW1hdGlj/LWxpZ2h0LWNhYmlu/LXZpZXctYWlycGxh/bmUtMTE1NjEyMzcw/LmpwZw"
          alt=""
        />
        <p className="tag">Learning</p>
        <p>Published 1 January 2024</p>
        <p>HTML and CSS foundations</p>
        <p className="content">
          These languages are the backbone of every website, defining content,
          structure, and presemtation
        </p>

        <div className="profile">
          <img
            src="
            https://imgs.search.brave.com/bed-VT-VjTUTbuU7wjOLuZNO-G3KTRAmwCVU5FYp9zU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTQyMDM0My9waG90/by9zbWlsaW5nLW1h/bi1vdXRkb29ycy1p/bi10aGUtY2l0eS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OGwtZ09ib0dFRlN5/Q0ZYcjA5RWd1RG1W/MEUwYkZUNXVzQW1z/MXd5RkJoOD0"
            alt=""
          />
          <p>Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}
export default HelloWorld;
