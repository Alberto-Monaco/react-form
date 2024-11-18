import { useState } from 'react'

const initialTitles = []
function App() {
	const [titles, setTitles] = useState(initialTitles)
	const [newTitle, setNewTitle] = useState('')

	function addTitle(e) {
		e.preventDefault()
		setTitles([...titles, newTitle])
		setNewTitle('')
	}

	function deleteTitle(e) {
		const titleIndexToDelete = Number(e.target.getAttribute('data-index'))
		const newTitles = titles.filter((title, index) => index !== titleIndexToDelete)
		setTitles(newTitles)
	}

	return (
		<>
			<div className='container'>
				<h1>React form</h1>

				<form onSubmit={addTitle}>
					<div className='mb-3'>
						<label htmlFor='title' className='form-label'>
							Title
						</label>
						<div className='input-group mb-3'>
							<input
								type='text'
								className='form-control'
								placeholder='article title'
								value={newTitle}
								onChange={(e) => setNewTitle(e.target.value)}
							/>
							<button className='btn btn-primary' type='submit' id='button-addon2'>
								Add
							</button>
						</div>
						<small id='titleHelperId' className='form-text text-muted'>
							Type your new title
						</small>
					</div>
				</form>

				<ul className='list-group'>
					{titles.map((title, index) => (
						<li key={index} className='list-group-item d-flex justify-content-between align-items-center'>
							{title}
							<button className='btn btn-danger' data-index={index} onClick={deleteTitle}>
								🗑️
							</button>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default App
