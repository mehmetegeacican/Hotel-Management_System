import React, { Component } from 'react';

class DeleteModal extends Component {
    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background">
                    <h1> This is Delete Modal</h1>
                </div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title" style={{ color: "darkred" }}>WARNING</p>
                        <button className="delete" aria-label="close" onClick={() => this.props.close()} style={{ backgroundColor: "darkred" }}></button>
                    </header>
                    <section className="modal-card-body">
                        <h2> The content will be lost if you approve. Do you want to delete the content?</h2>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-danger" onClick={() => this.props.delete(this.props.id)}>Delete </button>
                        <button className="button" onClick={() => this.props.close()}>Cancel</button>
                    </footer>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
