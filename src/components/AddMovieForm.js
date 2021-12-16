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
                                <input />
                            </div>
                            <div>
                                <label>Director</label>
                                <input />
                            </div>
                            <div>
                                <label>Genre</label>
                                <input />
                            </div>
                            <div>
                                <label>Metascore</label>
                                <input />
                            </div>
                            <div>
                                <label>Description</label>
                                <input />
                            </div>
                        </div>
                        <div>
                            <button>Add</button>
                            <Link />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddMovieForm