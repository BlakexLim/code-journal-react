import React, { useState } from 'react';
import {
  addEntry,
  readEntry,
  type UnsavedEntry,
  updateEntry,
  type Entry,
  removeEntry,
} from './Data/data';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal } from './Modal';

export function Form() {
  const { entryId } = useParams();
  const updatingEntry = entryId ? readEntry(Number(entryId)) : undefined;
  const [titleInput, setTitleInput] = useState(updatingEntry?.title ?? '');
  const [imgUrlInput, setImgUrlInput] = useState(updatingEntry?.photoUrl ?? '');
  const [notesInput, setNotesInput] = useState(updatingEntry?.notes ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleSubmitNewEntry(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (updatingEntry) {
      const entry: Entry = {
        title: titleInput,
        notes: notesInput,
        photoUrl: imgUrlInput,
        entryId: Number(entryId),
      };
      updateEntry(entry);
    } else {
      const entry: UnsavedEntry = {
        title: titleInput,
        notes: notesInput,
        photoUrl: imgUrlInput,
      };
      addEntry(entry);
    }
    setTitleInput('');
    setImgUrlInput('');
    setNotesInput('');
    navigate('/');
  }

  return (
    <>
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
              {updatingEntry ? (
                <button
                  onClick={() => setIsOpen(true)}
                  type="button"
                  className="delete-entry-button ">
                  Delete Entry
                </button>
              ) : (
                <span></span>
              )}
              <button
                type="submit"
                className="input-b-radius text-padding purple-background white-text">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <div className="row">
            <div className="column-full">
              <h2>Are you sure you want to delete this entry?</h2>
            </div>
          </div>
          <div className="row">
            <div className="column-full justify-between">
              <button className="modal-button" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                className="modal-button red-background white-text"
                onClick={() => {
                  entryId
                    ? removeEntry(+entryId)
                    : console.log('This will never happen');
                  setIsOpen(false);
                  navigate('/');
                }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
