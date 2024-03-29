export function Form() {
  return (
    <div>
      <form>
        <h2>New Entry</h2>
        <div className="row">
          <div className="column-half">
            <img
              className="form-image"
              src="./placeholder-image-square.jpg"></img>
          </div>
          <div className="column-half">
            <h3>Title</h3>
            <input
              className="input-height input-b-radius input-b-color text-padding purple-outline width-100 margin-bottom-2 d-block"
              required></input>
            <h3>PhotoUrl</h3>
            <input
              className="input-height input-b-radius input-b-color text-padding purple-outline width-100 margin-bottom-2 d-block"
              required></input>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <h3>Notes</h3>
            <textarea
              className="input-b-radius input-b-color text-padding purple-outline width-100 d-block"
              cols={30}
              rows={10}
              required></textarea>
          </div>
        </div>
        <div className="row row-btns">
          <div className="column-full d-flex justify-between">
            <button className="invisible delete-entry-button ">
              Delete Entry
            </button>
            <button className="input-b-radius text-padding purple-background white-text">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
