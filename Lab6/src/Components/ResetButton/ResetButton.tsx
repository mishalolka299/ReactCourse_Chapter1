
const ResetButton = ( { handleResetFilter} : { handleResetFilter: () => void }) => {
  return (
    <div>
      <button
        type="button"
        onClick={handleResetFilter}
        className="btn btn-outline-secondary"
      >
        Reset
      </button>
    </div>
  )
}

export default ResetButton
