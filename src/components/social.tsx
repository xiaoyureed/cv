export const Social = () => {
  return (
    <div className="container">
      <h2>Social</h2>
      <div>
        <p>
          <i className="bx bxl-github bx-xs" />
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/xiaoyureed"
          >
            @xiaoyureed
          </a>
        </p>
        <p>
          <i className="bx bxl-stack-overflow bx-xs"></i>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://stackoverflow.com/users/7779987/yuu"
          >
            @yuu
          </a>
        </p>
        <p>
          <i className="bx bxl-blogger bx-xs"></i>
          <a href="https://xiaoyureed.github.io/">https://xiaoyureed.github.io/</a>
        </p>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        p {
          display: flex;
          align-items: center;

          gap: 0.5rem;
        }

        /* Desktop */
        @media (min-width: 750px) {
          .container {
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  )
}
