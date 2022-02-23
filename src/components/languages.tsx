export const Languages = () => {
    return (
        <div className='container'>
            <h2>Languages</h2>
            <div>
                <ul>
                    <li>Mandarin (native)</li>
                    <li>English (basic)</li>
                </ul>
            </div>

            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .container div { padding-left: 2rem; }



                /* Desktop */
                @media (min-width: 750px) {
                    .container { align-items: flex-start; }
                    .container div { padding-left: 1.5rem; }
                    .container div ul { display: flex; flex-direction: row; gap: 2.5rem; }
                }
            `}</style>
        </div>
    )
}