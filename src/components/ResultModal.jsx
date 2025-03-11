export default function ResultModal({ ref, targetTime, remainigTime, onReset }) {

    const userLost = remainigTime <= 0;

    const formattedRemainingTime = (remainigTime / 1000).toFixed(2);
    const score = Math.round((1 - remainigTime / (targetTime * 1000)) * 100);

    return (
        <dialog ref={ref} className="result-modal" onClose={onReset}>   
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>You Score: {score}</h2>}
            <p>
                The Target time was <strong>{targetTime} seconds.</strong> 
            </p>
            <p>
                You stopped the timer with <strong> { formattedRemainingTime } seconds remaining.</strong> 
            </p>
            <form method="dialog" onSubmit={onReset}> 
                <button>Close</button>
            </form>
        </dialog>
   );
}