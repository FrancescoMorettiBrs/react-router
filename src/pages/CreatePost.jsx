import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";
  const initialFormData = {
    author: "",
    title: "",
    body: "",
    public: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const sendData = (e) => {
    e.preventDefault();
    axios.post(apiUrl, formData).then((resp) => {
      if (resp.data.id) {
        setFormData(initialFormData);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    });
  };

  return (
    <>
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center">New Post</h3>
                {showAlert && <div className="alert alert-success">I dati sono stati inviati con successo</div>}
                <form onSubmit={sendData}>
                  <div className="mb-2">
                    <label htmlFor="author" className="form-label">
                      Author
                    </label>
                    <input type="text" className="form-control" value={formData.author} onChange={handleChange} name="author" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input type="text" className="form-control" value={formData.title} onChange={handleChange} name="title" id="title" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="body" className="form-label">
                      Body
                    </label>
                    <textarea type="text" className="form-control" value={formData.body} onChange={handleChange} name="body"></textarea>
                  </div>
                  <div className="mb-2">
                    <input type="checkbox" name="public" id="public" checked={formData.public} onChange={handleChange} />
                    <label htmlFor="public" className="form-check-label ms-2">
                      Rendi il post pubblico
                    </label>
                  </div>
                  <div>
                    <button className="btn btn-primary mt-3">Pubblica</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;
