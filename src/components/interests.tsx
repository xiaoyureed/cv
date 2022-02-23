export const Interests = () => {
  return (
    <div className="container">
      <h2>Interests</h2>
      <div>
        <p>
          <i className="bx bx-headphone bx-sm" />
          Music
        </p>
        <p>
          <i className="bx bx-book bx-sm" />
          Read
        </p>
        <p>
          <i className="bx bx-code-alt bx-sm" />
          Code
        </p>
        <p>
          <i className="bx bx-basketball bx-sm"></i>
          Basketball
        </p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .container div {
          padding: 0 1.5rem 5rem;

          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          gap: 2rem;
        }
        .container div p {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Desktop */
        @media (min-width: 750px) {
          .container {
            align-items: flex-start;
          }
          .container div {
            padding: 0 0 5rem;
            margin-top: 0.5rem;
            gap: 3.5rem;
          }
        }
      `}</style>
    </div>
  )
}
