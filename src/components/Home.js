import React from "react";

function Home() {
  return (
    <div className="container-fluid">
      <section class="box-intro">
        <div class="table-cell">
          <img
            src="mypic.jpg"
            style={{ borderRadius: "50%", height: "150px" }}
            alt="Avatar"
          />
          <h2
            style={{ fontSize: "4rem", fontWeight: "bold", color: "#171717" }}
          >
            Hii, I'm Manish Suthar
          </h2>
          <h1 class="box-headline letters rotate-2">
            <span class="box-words-wrapper">
              <b class="is-visible">Web</b>
              <b>&nbsp;coding.</b>
              <b>Android</b>
            </span>
          </h1>
          <h5>
            A computer science student passionate about programming and design.
          </h5>
        </div>

        <div class="mouse">
          <div class="scroll"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
