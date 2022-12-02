import React from 'react';

const Contacts = () => {
  return (
    <div className="bg-warning w-50 mx-auto text-center p-4 mt-5">
      <h4 className="text-white">Связаться с нами</h4>
      <form>
        <div className="mx-auto">
          <input
            type="text"
            className="form-control d-block mx-auto w-75 mb-2"
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            className="form-control d-block mx-auto w-75 mb-2"
            placeholder="Enter your e-mail"
            required
          />
          <textarea
            name="contact"
            id="contact"
            className="form-control d-block mx-auto w-75 mb-3"
            placeholder="Enter a message"
            required
          />
        </div>
        <button type="submit" className="btn bg-primary text-white">Предоставить на рассмотрение</button>
      </form>
      <div className="text-white mt-4">
        <h4 className="mb-4">Наши контакты</h4>
        <div className="d-flex justify-content-between">
          <p><b>O!</b>: 0700 56 04 69</p>
          <p><b>Beeline</b>: 0775 56 40 69</p>
          <p><b>MegaCom</b>: 0556 56 04 69</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;