import { useState } from 'react'
import PropTypes from 'prop-types'

function PitcherForm({ onSubmit, editingPitcher, onCancel }) {
  const [formData, setFormData] = useState(
    editingPitcher || {
      name: '',
      number: '',
      throws: '',
      stats: { era: '', wins: '', losses: '', strikeouts: '', whip: '' },
      contract: { years: '', value: '' },
      age: '',
      hometown: ''
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleStatsChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      stats: { ...prev.stats, [name]: value }
    }))
  }

  const handleContractChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      contract: { ...prev.contract, [name]: value }
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="pitcher-form">
      <h2>{editingPitcher ? 'Edit Pitcher' : 'Add New Pitcher'}</h2>
      
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Number"
          value={formData.number}
          onChange={(e) => setFormData({...formData, number: e.target.value})}
          required
        />
        <select
          value={formData.throws}
          onChange={(e) => setFormData({...formData, throws: e.target.value})}
          required
        >
          <option value="">Select throwing arm</option>
          <option value="Right">Right</option>
          <option value="Left">Left</option>
        </select>
      </div>

      <div className="form-group">
        <h3>Stats</h3>
        <input
          type="number"
          step="0.01"
          placeholder="ERA"
          name="era"
          value={formData.stats.era}
          onChange={handleStatsChange}
          required
        />
        <input
          type="number"
          placeholder="Wins"
          name="wins"
          value={formData.stats.wins}
          onChange={handleStatsChange}
          required
        />
        <input
          type="number"
          placeholder="Losses"
          name="losses"
          value={formData.stats.losses}
          onChange={handleStatsChange}
          required
        />
        <input
          type="number"
          placeholder="Strikeouts"
          name="strikeouts"
          value={formData.stats.strikeouts}
          onChange={handleStatsChange}
          required
        />
        <input
          type="number"
          step="0.01"
          placeholder="WHIP"
          name="whip"
          value={formData.stats.whip}
          onChange={handleStatsChange}
          required
        />
      </div>

      <div className="form-group">
        <h3>Contract</h3>
        <input
          type="text"
          placeholder="Years (e.g., 2024-2025)"
          name="years"
          value={formData.contract.years}
          onChange={handleContractChange}
          required
        />
        <input
          type="text"
          placeholder="Value (e.g., $100M)"
          name="value"
          value={formData.contract.value}
          onChange={handleContractChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({...formData, age: parseInt(e.target.value, 10)})}
          required
        />
        <input
          type="text"
          placeholder="Hometown"
          value={formData.hometown}
          onChange={(e) => setFormData({...formData, hometown: e.target.value})}
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit">{editingPitcher ? 'Update' : 'Add'} Pitcher</button>
        <button type="button" onClick={onCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  )
}

PitcherForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  editingPitcher: PropTypes.object,
  onCancel: PropTypes.func.isRequired
}

export default PitcherForm 