import React, { useState } from 'react'
import axios from 'axios'

const AddMovieForm = () => {
    const initialValues = {
        title: '',
        director: '',
        genre: '',
        metascore: '',
        description: '',
    }

    const [values, setValues] = useState(initialValues)
    console.log(values)
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setValues({ ...values, [name]: value })
    }

    return (
        <>
            <div>
                <div>
                    <form>
                        <div>
                            <div>
                                <h4>Add Movie</h4>
                            </div>
                            <div>
                                <label>Title</label>
                                <input type='text' name='title' value={values.title} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Director</label>
                                <input type='text' name='director' value={values.director} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Genre</label>
                                <input type='text' name='genre' value={values.genre} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Metascore</label>
                                <input type='text' name='metascore' value={values.metascore} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Description</label>
                                <input type='text' name='description' value={values.description} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <button>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddMovieForm