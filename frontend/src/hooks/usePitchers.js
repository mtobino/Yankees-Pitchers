import { useState, useEffect } from 'react'
import axios from 'axios'

export function usePitchers() {
  const [pitchers, setPitchers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [editingPitcher, setEditingPitcher] = useState(null)

  const fetchPitchers = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:5000/')
      setPitchers(response.data.yankeesPitchers || [])
    } catch (err) {
      setError('Error fetching pitcher data')
      console.error('Error fetching data:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPitchers()
  }, [])

  return {
    pitchers,
    loading,
    error,
    showForm,
    setShowForm,
    editingPitcher,
    handleSubmit: async (formData) => {
      try {
        if (editingPitcher) {
          await axios.put(`http://localhost:5000/pitchers/${editingPitcher.id}`, formData)
        } else {
          await axios.post('http://localhost:5000/pitchers', formData)
        }
        fetchPitchers()
        setShowForm(false)
        setEditingPitcher(null)
      } catch (err) {
        console.error('Error saving pitcher:', err)
      }
    },
    handleDelete: async (id) => {
      if (window.confirm('Are you sure you want to delete this pitcher?')) {
        try {
          await axios.delete(`http://localhost:5000/pitchers/${id}`)
          fetchPitchers()
        } catch (err) {
          console.error('Error deleting pitcher:', err)
        }
      }
    },
    handleEdit: (pitcher) => {
      setEditingPitcher(pitcher)
      setShowForm(true)
    }
  }
} 