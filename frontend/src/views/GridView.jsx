import { usePitchers } from '../hooks/usePitchers'
import { AgGridReact } from 'ag-grid-react'
import PitcherForm from '../components/PitcherForm'

// Import required CSS
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

function GridView() {
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

  const columnDefs = [
    { 
      field: 'name', 
      headerName: 'Name', 
      flex: 1, 
      minWidth: 130,
      sortable: true 
    },
    { 
      field: 'number', 
      headerName: 'Number', 
      width: 90 
    },
    { 
      field: 'throws', 
      headerName: 'Pitching Hand', 
      width: 120,
      sortable: true,
      sort: 'asc',
      sortIndex: 0
    },
    { 
      field: 'stats.era', 
      headerName: 'ERA', 
      width: 90,
      valueGetter: params => params.data.stats?.era || 0,
      sortable: true,
      sort: 'asc',
      sortIndex: 1
    },
    {
      headerName: 'Record',
      width: 110,
      valueGetter: params => {
        const wins = params.data.stats?.wins || 0
        const losses = params.data.stats?.losses || 0
        return `${wins}-${losses}`
      }
    },
    { 
      field: 'stats.strikeouts', 
      headerName: 'Strikeouts', 
      width: 110,
      valueGetter: params => params.data.stats?.strikeouts || 0,
      sortable: true,
      sort: 'desc',
      sortIndex: 2
    },
    { 
      field: 'stats.whip', 
      headerName: 'WHIP', 
      width: 90,
      valueGetter: params => params.data.stats?.whip || 0,
      sortable: true
    },
    { 
      field: 'contract.value', 
      headerName: 'Contract', 
      width: 130,
      valueGetter: params => params.data.contract?.value || ''
    },
    { 
      field: 'age', 
      headerName: 'Age', 
      width: 90,
      sortable: true,
      valueFormatter: params => {
        const age = parseInt(params.value, 10);
        return isNaN(age) ? 'Invalid Age' : age;
      }
    },
    {
      headerName: 'Actions',
      width: 200,
      sortable: false,
      filter: false,
      cellRenderer: params => (
        <div>
          <button 
            onClick={() => handleEdit(params.data)} 
            className="edit-button"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDelete(params.data.id)} 
            className="delete-button"
          >
            Delete
          </button>
        </div>
      )
    }
  ]

  const defaultColDef = {
    sortable: false,
    filter: true,
    resizable: true
  }

  const gridOptions = {
    multiSortKey: 'ctrl',
    accentedSort: true,
    suppressMovableColumns: true,
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">{error}</div>
  if (!Array.isArray(pitchers)) return <div className="error">No data available</div>

  return (
    <div className="grid-view-container">
      <div className="grid-controls">
        <button onClick={() => setShowForm(!showForm)} className="add-button">
          {showForm ? 'Cancel' : 'Add New Pitcher'}
        </button>
      </div>

      {showForm && (
        <PitcherForm 
          onSubmit={handleSubmit}
          editingPitcher={editingPitcher}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="ag-theme-alpine grid-wrapper">
        <AgGridReact
          rowData={pitchers}
          columnDefs={columnDefs}
          defaultColDef={{
            ...defaultColDef,
            flex: 1,
            minWidth: 90,
            cellStyle: { display: 'flex', alignItems: 'center' }
          }}
          gridOptions={{
            ...gridOptions,
            suppressHorizontalScroll: false,
            autoSizeColumns: true,
          }}
          pagination={false}
          animateRows={true}
          enableMultiSort={true}
          sortingOrder={['asc', 'desc', null]}
        />
      </div>
    </div>
  )
}

export default GridView 