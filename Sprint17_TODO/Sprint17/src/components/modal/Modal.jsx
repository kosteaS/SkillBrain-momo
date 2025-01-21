import React, { useState } from "react";
import "./Modal.css";
import { useEffect } from "react";
import Card from "../card/Card";
import Input from "../input/Input";
import TextArea from "../input/TextArea";
import Button from "../button/Button";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onTodoCreate(title, description);
    setTitle("");
    setDescription("");
    props.onClose();
  }

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <i
        onClick={closeModal}
        className="close-icon fa fa-times-circle-o"
        aria-hidden="true"
      ></i>

      <div className="modal-content">
         <Card>
            <h2>Create Todo</h2>
            <form>
              <Input onChange={(e) => { setTitle(e.target.value) }} placeholder="Title" type="text" value={title} />
              <TextArea onChange={(e) => { setDescription(e.target.value) }} placeholder="Description" value={description} />
              <Button type="submit" onClick={onSubmit}>Create</Button>
            </form>
          </Card>
      </div>
    </div>
  );
};

export default Modal;
