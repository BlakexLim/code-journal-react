import React, { useState } from 'react';
import { addEntry, type UnsavedEntry } from './Data/data';
import { useNavigate } from 'react-router-dom';

export function Form() {
  const [titleInput, setTitleInput] = useState('');
  const [imgUrlInput, setImgUrlInput] = useState('');
  const [notesInput, setNotesInput] = useState('');
  const navigate = useNavigate();

  function handleSubmitNewEntry(e: React.FormEvent<HTMLFormElement>) {
    console.log('running');
    e.preventDefault();
    const entry: UnsavedEntry = {
      title: titleInput,
      notes: notesInput,
      photoUrl: imgUrlInput,
    };
    addEntry(entry);
    setTitleInput('');
    setImgUrlInput('');
    setNotesInput('');
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmitNewEntry}>
        <h2>New Entry</h2>
        <div className="row">
          <div className="column-half">
            <img
              className="form-image"
              src={
                imgUrlInput.match(/\.(jpeg|jpg|gif|png)$/)
                  ? imgUrlInput
                  : './placeholder-image-square.jpg'
              }
            />
          </div>
          <div className="column-half">
            <h3>Title</h3>
            <input
              className="input-height input-b-radius input-b-color text-padding purple-outline width-100 margin-bottom-2 d-block"
              name="title"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              required
            />
            <h3>PhotoUrl</h3>
            <input
              className="input-height input-b-radius input-b-color text-padding purple-outline width-100 margin-bottom-2 d-block"
              value={imgUrlInput}
              onChange={(e) => setImgUrlInput(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <h3>Notes</h3>
            <textarea
              className="input-b-radius input-b-color text-padding purple-outline width-100 d-block"
              cols={30}
              rows={10}
              value={notesInput}
              onChange={(e) => {
                setNotesInput(e.target.value);
              }}
              required></textarea>
          </div>
        </div>
        <div className="row row-btns">
          <div className="column-full d-flex justify-between">
            <button type="button" className="invisible delete-entry-button ">
              Delete Entry
            </button>
            <button
              type="submit"
              className="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
