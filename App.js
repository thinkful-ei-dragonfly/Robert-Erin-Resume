
function App(props) {
  return (
    <div>
      <header role="banner">
        <h1>Sally Student</h1>
      </header>

      <main role="main">
        <address>
          <h3><a href="mailto:sallysally@thinkful.com?subject=Following%20up%20on%20your%20resume">sallysally@thinkful.com</a><br/></h3>
          <h3><a href="tel:(123)456-7890">(123) 456-7890</a><br/></h3>
        </address>

        <section role="region">
          <img
            width="200"
            length="200"
            src="https://ia800901.us.archive.org/9/items/clevelandart-1935.302-napoleon/1935.302_full.jpg"
            alt="A completely sarcastic portrait of Sally. Image contains a portrait painting of Napoleon on a horse." />
        </section>

        <section role="region">
          <br/>
          <h2><i>Education</i></h2>
          <b>University of North Carolina at Chapel Hill</b>
          <p>B.S. Computer Science</p>
          <p>GPA: super high</p>
        </section>

        <section role="region">
          <br/>
          <h2><i>Experience</i></h2>
          <b>French Military</b>
          <p>General</p>
          <p>Circa 200 years ago</p>
          <ul>
            <li>Job Description 1</li>
            <li>Job Description 2</li>
          </ul>

          <br/>
          <b>First Prison Sentence</b>
          <p>Prisoner</p>
          <p>Circa 201 years ago</p>
          <ul>
            <li>Job Description 1</li>
            <li>Job Description 2</li>
          </ul>
        </section>

        <section role="region">
          <br/>
          <h2><i>Skills and Interests</i></h2>
          <p>Interests: running, swimmimg, conquering Europe, and programming</p>
          <p>Skills: JavaScript, escaping prison, HTML, CSS, and military strategy</p>
        </section>
        <br/>

      </main>
        <br/>
      <footer role="contentinfo">© 2019 Sally Student</footer>
     </div>
  );
}

ReactDOM.render(<App />, document.getElementById('application-root'));