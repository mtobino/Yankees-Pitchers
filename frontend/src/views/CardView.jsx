import { usePitchers } from '../hooks/usePitchers'
import PitcherForm from '../components/PitcherForm'

function CardView() {
  const {
    pitchers,
    loading,
    error,
    showForm,
    setShowForm,
    editingPitcher,
    handleSubmit,
    handleDelete,
    handleEdit
  } = usePitchers()

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="card-view">
      <button onClick={() => setShowForm(!showForm)} className="add-button">
        {showForm ? 'Cancel' : 'Add New Pitcher'}
      </button>

      {showForm && (
        <PitcherForm 
          onSubmit={handleSubmit}
          editingPitcher={editingPitcher}
          onCancel={() => {
            setShowForm(false)
          }}
        />
      )}

      <div className="pitchers-grid">
        {pitchers.map(pitcher => (
          <div key={pitcher.id} className="pitcher-card">
            <div className="card-actions">
              <button onClick={() => handleEdit(pitcher)} className="edit-button">Edit</button>
              <button onClick={() => handleDelete(pitcher.id)} className="delete-button">Delete</button>
            </div>
            <h2>{pitcher.name}</h2>
            <div className="pitcher-details">
              <p>Number: {pitcher.number}</p>
              <p>Throws: {pitcher.throws}</p>
              <div className="stats">
                <h3>Stats</h3>
                <p>ERA: {pitcher.stats.era}</p>
                <p>Record: {pitcher.stats.wins}-{pitcher.stats.losses}</p>
                <p>Strikeouts: {pitcher.stats.strikeouts}</p>
                <p>WHIP: {pitcher.stats.whip}</p>
              </div>
              <div className="contract">
                <h3>Contract</h3>
                <p>Years: {pitcher.contract.years}</p>
                <p>Value: {pitcher.contract.value}</p>
              </div>
              <p>Age: {pitcher.age}</p>
              <p>Hometown: {pitcher.hometown}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardView 