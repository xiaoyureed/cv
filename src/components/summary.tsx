export const Summary = () => {
  return (
    <div className="container">
      <h2>Profile</h2>
      <div>
        <p>I am a person, responsible with their work during working hours.</p>
        <p>
          I am focused on quality, determined to act as a top professional,
          constantly updated and in tune with market trends.
        </p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container div {
          text-align: center;
        }

        /* Desktop */
        @media (min-width: 550px) {
          .container div {
            max-width: 90%;
          }
        }
        @media (min-width: 650px) {
          .container div {
            max-width: 80%;
          }
        }
        @media (min-width: 750px) {
          .container {
            align-items: flex-start;
          }
          .container div {
            text-align: start;
          }
        }
      `}</style>
    </div>
  )
}
